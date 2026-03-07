/* app.js — version propre et minimale
   Rôle :
   - navigation par slugs lisibles
   - rendu dynamique des pages
   - menu mobile repliable
   - Vue d’ensemble et Références directement cliquables
   - compatibilité avec anciens ids
*/

"use strict";

/* ------------------------------ Constantes ------------------------------ */

const PAGE_TYPES = Object.freeze({
  HOME: "HOME",
  BASE: "BASE",
  BLESSURE: "BLESSURE",
  REF: "REF",
});

const DEFAULT_PAGE_ID = "home";
const SINGLE_LINK_SECTIONS = new Set(["Vue d’ensemble", "Références"]);

/* ------------------------------ Routes ------------------------------ */

const SLUG_TO_PAGE_ID = Object.freeze({
  "vue-densemble": "home",

  "bases-confort": "base_confort",
  "bases-blessures": "base_blessures",
  "bases-empathie": "base_empathie",
  "bases-karpman": "base_karpman",

  "blessures-joie": "w_joie",
  "blessures-rejet": "w_rejet",
  "blessures-abandon": "w_abandon",
  "blessures-humiliation": "w_humiliation",
  "blessures-trahison": "w_trahison",
  "blessures-injustice": "w_injustice",

  "comportements-addictions": "ref_addictions",
  "comportements-addictions-substances": "ref_add_substances",
  "comportements-addictions-comportementales": "ref_add_comportementales",
  "comportements-addictions-invisibles": "ref_add_invisibles",
  "comportements-valeurs": "ref_valeurs",
  "comportements-valeurs-listes": "ref_valeurs_listes",
  "comportements-dogmes": "ref_dogmes",
  "comportements-dogmes-listes": "ref_dogmes_listes",

  "references": "ref_sources",
});

const PAGE_ID_TO_SLUG = Object.freeze(
  Object.entries(SLUG_TO_PAGE_ID).reduce((acc, [slug, pageId]) => {
    acc[pageId] = slug;
    return acc;
  }, {})
);

function getCanonicalSlugForPageId(pageId) {
  return PAGE_ID_TO_SLUG[pageId] || PAGE_ID_TO_SLUG[DEFAULT_PAGE_ID];
}

/* ------------------------------ DOM ------------------------------ */

const navEl = document.getElementById("nav");
const mainEl = document.getElementById("main");
const pageTitleEl = document.getElementById("pageTitle");
const pageSubtitleEl = document.getElementById("pageSubtitle");
const menuBtn = document.getElementById("menuBtn");
const backdrop = document.getElementById("backdrop");
const logoBtn = document.getElementById("logoBtn");

/* ------------------------------ Helpers ------------------------------ */

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getPage(pageId) {
  return PAGES.find((page) => page.id === pageId);
}

function normalizeHash(rawHash) {
  const hash = (rawHash || "").trim();
  if (!hash) return "";
  return hash.startsWith("#") ? hash.slice(1) : hash;
}

function resolveRouteToPageId(routeToken) {
  if (SLUG_TO_PAGE_ID[routeToken] && getPage(SLUG_TO_PAGE_ID[routeToken])) {
    return SLUG_TO_PAGE_ID[routeToken];
  }

  if (getPage(routeToken)) {
    return routeToken;
  }

  return DEFAULT_PAGE_ID;
}

function getCurrentPageIdFromLocation() {
  const token = normalizeHash(location.hash) || getCanonicalSlugForPageId(DEFAULT_PAGE_ID);
  return resolveRouteToPageId(token);
}

function setHashToSlug(slug, { replace = false } = {}) {
  const nextHash = "#" + slug;

  if (replace) {
    history.replaceState(null, "", nextHash);
  } else {
    location.hash = nextHash;
  }
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 980px)").matches;
}

/* ------------------------------ Scroll ------------------------------ */

function scrollMainToTop() {
  if (isMobileViewport()) {
    window.scrollTo({ top: 0, behavior: "auto" });
  } else if (mainEl) {
    mainEl.scrollTop = 0;
  }
}

/* ------------------------------ Navigation ------------------------------ */

function go(pageId) {
  const targetPageId = getPage(pageId) ? pageId : DEFAULT_PAGE_ID;
  const slug = getCanonicalSlugForPageId(targetPageId);

  scrollMainToTop();
  setHashToSlug(slug);
}

function setMenu(isOpen) {
  navEl.setAttribute("data-open", isOpen ? "true" : "false");
  backdrop.setAttribute("data-open", isOpen ? "true" : "false");
  menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  navEl.setAttribute("aria-hidden", isOpen ? "false" : "true");
}

function closeMenu() {
  setMenu(false);
}

function toggleMenu() {
  const isOpen = navEl.getAttribute("data-open") === "true";
  setMenu(!isOpen);
}

/* ------------------------------ Debug ------------------------------ */

function isDebugMode() {
  try {
    const isLocal =
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1" ||
      location.protocol === "file:";
    const params = new URLSearchParams(location.search);
    return isLocal || params.get("debug") === "1";
  } catch {
    return false;
  }
}

function validateData() {
  const seenIds = new Set();
  const duplicateIds = new Set();

  for (const page of PAGES) {
    if (seenIds.has(page.id)) duplicateIds.add(page.id);
    seenIds.add(page.id);
  }

  if (duplicateIds.size) {
    console.warn("[FIDES] IDs dupliqués dans PAGES :", Array.from(duplicateIds));
  }

  const missingNavPages = [];
  for (const group of NAV) {
    for (const pageId of group.items) {
      if (!getPage(pageId)) {
        missingNavPages.push({ section: group.section, id: pageId });
      }
    }
  }

  if (missingNavPages.length) {
    console.warn("[FIDES] NAV référence des pages manquantes :", missingNavPages);
  }

  const missingSlugPages = [];
  for (const [slug, pageId] of Object.entries(SLUG_TO_PAGE_ID)) {
    if (!getPage(pageId)) {
      missingSlugPages.push({ slug, id: pageId });
    }
  }

  if (missingSlugPages.length) {
    console.warn("[FIDES] SLUG_TO_PAGE_ID référence des pages manquantes :", missingSlugPages);
  }
}

/* ------------------------------ Templates ------------------------------ */

function cardHtml({ kicker, lead, text, bullets }) {
  let html = '<div class="card">';
  html += '<div class="kicker">' + escapeHTML(kicker || "Section") + "</div>";

  if (lead) {
    html += '<div class="lead">' + escapeHTML(lead) + "</div>";
  }

  if (text) {
    html += "<p>" + escapeHTML(text) + "</p>";
  }

  if (bullets && bullets.length) {
    html += "<ul>";
    for (const bullet of bullets) {
      html += "<li>" + escapeHTML(bullet) + "</li>";
    }
    html += "</ul>";
  }

  html += "</div>";
  return html;
}

function tileHtml({ title, desc }) {
  return (
    '<div class="mapTile" role="group" aria-label="' +
    escapeHTML(title) +
    '">' +
    "<h3>" +
    escapeHTML(title) +
    "</h3>" +
    "<p>" +
    escapeHTML(desc) +
    "</p>" +
    "</div>"
  );
}

function woundRowHtml(label, value) {
  return (
    '<div class="row">' +
    '<div class="label">' +
    escapeHTML(label) +
    "</div>" +
    '<div class="value">' +
    escapeHTML(value) +
    "</div>" +
    "</div>"
  );
}

function navItemHtml(page, currentPageId) {
  return (
    '<button class="navItem" type="button" aria-current="' +
    (page.id === currentPageId ? "page" : "false") +
    '">' +
    escapeHTML(page.title) +
    '<span class="navSmall">' +
    escapeHTML(page.subtitle || "") +
    "</span>" +
    "</button>"
  );
}

/* ------------------------------ Menu mobile ------------------------------ */

function createNavHeader() {
  const header = document.createElement("div");
  header.className = "navHeader";
  header.innerHTML =
    '<div class="navHeaderTitle">Menu</div>' +
    '<button type="button" class="navCloseBtn" aria-label="Fermer le menu">✕</button>';

  header.querySelector(".navCloseBtn").addEventListener("click", closeMenu);
  return header;
}

function renderSingleLinkSection(group, currentPageId) {
  const page = getPage(group.items[0]);
  if (!page) return null;

  const sectionEl = document.createElement("div");
  sectionEl.className = "navSection";

  const itemBtn = document.createElement("button");
  itemBtn.className = "navItem";
  itemBtn.type = "button";
  itemBtn.setAttribute("aria-current", page.id === currentPageId ? "page" : "false");
  itemBtn.innerHTML =
    escapeHTML(page.title) +
    '<span class="navSmall">' + escapeHTML(page.subtitle || "") + "</span>";

  itemBtn.addEventListener("click", () => {
    go(page.id);
    closeMenu();
  });

  sectionEl.appendChild(itemBtn);
  return sectionEl;
}

function renderAccordionSection(group, currentPageId, activeSection) {
  const sectionEl = document.createElement("div");
  sectionEl.className = "navSection";

  const isOpen = group.section === activeSection;
  sectionEl.setAttribute("data-open", isOpen ? "true" : "false");

  const sectionBtn = document.createElement("button");
  sectionBtn.type = "button";
  sectionBtn.className = "navSectionBtn";
  sectionBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  sectionBtn.innerHTML =
    "<span>" + escapeHTML(group.section) + "</span>" +
    '<span class="navChevron">›</span>';

  const itemsWrap = document.createElement("div");
  itemsWrap.className = "navItems";

  for (const pageId of group.items) {
    const page = getPage(pageId);
    if (!page) continue;

    const itemBtn = document.createElement("button");
    itemBtn.className = "navItem";
    itemBtn.type = "button";
    itemBtn.setAttribute("aria-current", pageId === currentPageId ? "page" : "false");
    itemBtn.innerHTML =
      escapeHTML(page.title) +
      '<span class="navSmall">' + escapeHTML(page.subtitle || "") + "</span>";

    itemBtn.addEventListener("click", () => {
      go(pageId);
      closeMenu();
    });

    itemsWrap.appendChild(itemBtn);
  }

  sectionBtn.addEventListener("click", () => {
    const willOpen = sectionEl.getAttribute("data-open") !== "true";

    navEl.querySelectorAll(".navSection[data-open]").forEach((section) => {
      section.setAttribute("data-open", "false");
      const btn = section.querySelector(".navSectionBtn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });

    sectionEl.setAttribute("data-open", willOpen ? "true" : "false");
    sectionBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
  });

  sectionEl.appendChild(sectionBtn);
  sectionEl.appendChild(itemsWrap);

  return sectionEl;
}

/* ------------------------------ Renders ------------------------------ */

function renderNav(currentPageId) {
  navEl.innerHTML = "";
  navEl.appendChild(createNavHeader());

  const activeSection =
    NAV.find((group) => group.items.includes(currentPageId))?.section || "";

  for (const group of NAV) {
    const isSingleLink =
      SINGLE_LINK_SECTIONS.has(group.section) && group.items.length === 1;

    const sectionEl = isSingleLink
      ? renderSingleLinkSection(group, currentPageId)
      : renderAccordionSection(group, currentPageId, activeSection);

    if (sectionEl) {
      navEl.appendChild(sectionEl);
    }
  }
}

function renderHome() {
  const tiles = [
    {
      title: "Bases",
      desc: "Comprendre le cadre : zones (confort → peur → apprentissage → expansion) et bases des blessures.",
    },
    {
      title: "Blessures",
      desc: "Lire une blessure : émotion racine → sentiments possibles → masque → apathie / empathie → croyances.",
    },
    {
      title: "Comportements",
      desc: "Relier le vécu aux mécanismes : addictions, valeurs, dogmes (ce qui oriente les choix).",
    },
    {
      title: "Empathie",
      desc: "Comprendre l’empathie et voir ses effets concrets : apathie (impacts) vs empathie (bénéfices).",
    },
  ];

  const introHtml =
    '<div class="card">' +
    '<div class="kicker">Vue d’ensemble</div>' +
    '<div class="lead">Support de formation — La Méthode FIDES</div>' +
    "<p>" +
    escapeHTML(
      "But pédagogique : comprendre les bases, identifier la blessure à partir de l’émotion, relier les comportements observables (addictions, valeurs, dogmes), trouver la croyance de base, la libérer et se pardonner."
    ) +
    "</p>" +
    "</div>";

  const parcoursHtml =
    '<div class="card">' +
    '<div class="kicker">Parcours pédagogique</div>' +
    '<div class="lead">Un chemin en 4 étapes</div>' +
    "<ul>" +
    "<li>1. Comprendre le cadre (bases)</li>" +
    "<li>2. Identifier la blessure</li>" +
    "<li>3. Observer les comportements</li>" +
    "<li>4. Libérer les croyances</li>" +
    "</ul>" +
    "</div>";

  const gridHtml =
    '<div class="mapGrid">' +
    tiles.map(tileHtml).join("") +
    "</div>";

  mainEl.innerHTML = introHtml + parcoursHtml + gridHtml;
}

function renderBase(page) {
  let html = "";
  for (const block of page.content || []) {
    html += cardHtml(block);
  }
  mainEl.innerHTML = html;
}

function renderBlessure(page) {
  const headHtml =
    '<div class="card">' +
    '<div class="kicker">Blessure</div>' +
    '<div class="lead">' + escapeHTML(page.title) + "</div>" +
    "<p>" + escapeHTML(page.subtitle || "") + "</p>" +
    "</div>";

  const gridHtml =
    '<div class="woundGrid">' +
    (page.grid || []).map(([label, value]) => woundRowHtml(label, value)).join("") +
    "</div>";

  mainEl.innerHTML = headHtml + gridHtml;
}

function renderRef(page) {
  if (page.grid && page.grid.length) {
    const headHtml =
      '<div class="card">' +
      '<div class="kicker">Référence</div>' +
      '<div class="lead">' + escapeHTML(page.title) + "</div>" +
      "<p>" + escapeHTML(page.subtitle || "") + "</p>" +
      "</div>";

    const gridHtml =
      '<div class="woundGrid">' +
      page.grid.map(([label, value]) => woundRowHtml(label, value)).join("") +
      "</div>";

    mainEl.innerHTML = headHtml + gridHtml;
    return;
  }

  renderBase(page);
}

function canonicalizeUrlIfNeeded(pageId) {
  const currentToken = normalizeHash(location.hash);
  const canonicalSlug = getCanonicalSlugForPageId(pageId);

  if (currentToken !== canonicalSlug) {
    setHashToSlug(canonicalSlug, { replace: true });
  }
}

function render() {
  const pageId = getCurrentPageIdFromLocation();
  const page = getPage(pageId) || getPage(DEFAULT_PAGE_ID);

  canonicalizeUrlIfNeeded(page.id);

  pageTitleEl.textContent = page.title || "La Méthode FIDES";
  pageSubtitleEl.textContent = page.subtitle || "";

  renderNav(page.id);

  switch (page.type) {
    case PAGE_TYPES.HOME:
      renderHome();
      break;
    case PAGE_TYPES.BASE:
      renderBase(page);
      break;
    case PAGE_TYPES.BLESSURE:
      renderBlessure(page);
      break;
    case PAGE_TYPES.REF:
      renderRef(page);
      break;
    default:
      renderHome();
      break;
  }
}

/* ------------------------------ Events ------------------------------ */

menuBtn.addEventListener("click", toggleMenu);
backdrop.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

logoBtn.addEventListener("click", () => go(DEFAULT_PAGE_ID));
window.addEventListener("hashchange", render);

/* ------------------------------ Boot ------------------------------ */

if (isDebugMode()) {
  validateData();
}

if (!location.hash) {
  setHashToSlug(getCanonicalSlugForPageId(DEFAULT_PAGE_ID), { replace: true });
}

render();
