/* app.js — refactor technique + slugs d’URL + home non cliquable + mobile menu pack 2
   Objectifs :
   - Les tuiles de la home ne naviguent plus (non cliquables, aucun ajout ailleurs)
   - Hash “sexy” via slugs (alias) : #bases-empathie, #blessures-rejet, etc.
   - Compatibilité : anciens ids (#socle_empathie) => remplacés par le slug canonique
   - Menu mobile amélioré : header dans le drawer + bouton fermer + sections repliables (accordion)
   - Après navigation : scroll du contenu en haut (mobile-friendly)
   - Bonnes pratiques : templates HTML, types stricts, validation debug
*/

"use strict";

/* ------------------------------ Constantes ------------------------------ */

const PAGE_TYPES = Object.freeze({
  HOME: "HOME",
  SOCLE: "SOCLE",
  BLESSURE: "BLESSURE",
  REF: "REF",
});

const DEFAULT_PAGE_ID = "home";

/* ------------------------------ Routes (slugs) ------------------------------ */

const SLUG_TO_PAGE_ID = Object.freeze({
  "vue-densemble": "home",

  "bases-confort": "socle_confort",
  "bases-blessures": "socle_blessures",
  "bases-empathie": "socle_empathie",

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
  Object.keys(SLUG_TO_PAGE_ID).reduce((acc, slug) => {
    acc[SLUG_TO_PAGE_ID[slug]] = slug;
    return acc;
  }, {})
);

function getCanonicalSlugForPageId(pageId) {
  return PAGE_ID_TO_SLUG[pageId] || PAGE_ID_TO_SLUG[DEFAULT_PAGE_ID] || "vue-densemble";
}

/* ------------------------------ DOM helpers ------------------------------ */

const navEl = document.getElementById("nav");
const mainEl = document.getElementById("main");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const menuBtn = document.getElementById("menuBtn");
const backdrop = document.getElementById("backdrop");
const logoBtn = document.getElementById("logoBtn");

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getPage(id) {
  return PAGES.find((p) => p.id === id);
}

function normalizeHash(rawHash) {
  const h = (rawHash || "").trim();
  if (!h) return "";
  return h.startsWith("#") ? h.slice(1) : h;
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
  const next = "#" + slug;
  if (replace) {
    history.replaceState(null, "", next);
  } else {
    location.hash = next;
  }
}

/* ------------------------------ Scroll UX ------------------------------ */

let _pendingScrollTop = false;

function scrollMainToTop() {
  _pendingScrollTop = true;
}

function applyPendingScrollTop() {
  if (!_pendingScrollTop) return;
  _pendingScrollTop = false;
  requestAnimationFrame(() => {
    if (mainEl) mainEl.scrollTop = 0;
  });
}

/* ------------------------------ Navigation actions ------------------------------ */

function go(pageId) {
  const targetId = getPage(pageId) ? pageId : DEFAULT_PAGE_ID;
  const slug = getCanonicalSlugForPageId(targetId);
  scrollMainToTop();
  setHashToSlug(slug, { replace: false });
}

function setMenu(open) {
  navEl.setAttribute("data-open", open ? "true" : "false");
  backdrop.setAttribute("data-open", open ? "true" : "false");

  // Accessibilité
  if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  if (navEl) navEl.setAttribute("aria-hidden", open ? "false" : "true");
}

/* ------------------------------ Dev validation ------------------------------ */

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
  const seen = new Set();
  const dupes = new Set();
  for (const p of PAGES) {
    if (seen.has(p.id)) dupes.add(p.id);
    seen.add(p.id);
  }
  if (dupes.size) console.warn("[FIDES] IDs dupliqués dans PAGES:", Array.from(dupes));

  const missing = [];
  for (const group of NAV) {
    for (const id of group.items) {
      if (!getPage(id)) missing.push({ section: group.section, id });
    }
  }
  if (missing.length) console.warn("[FIDES] NAV référence des pages manquantes:", missing);

  const badSlugs = [];
  for (const slug of Object.keys(SLUG_TO_PAGE_ID)) {
    const id = SLUG_TO_PAGE_ID[slug];
    if (!getPage(id)) badSlugs.push({ slug, id });
  }
  if (badSlugs.length) console.warn("[FIDES] SLUG_TO_PAGE_ID référence des pages manquantes:", badSlugs);
}

/* ------------------------------ Templates HTML ------------------------------ */

function cardHtml({ kicker, lead, text, bullets }) {
  let html = '<div class="card">';
  html += '<div class="kicker">' + escapeHTML(kicker || "Section") + "</div>";
  if (lead) html += '<div class="lead">' + escapeHTML(lead) + "</div>";
  if (text) html += "<p>" + escapeHTML(text) + "</p>";
  if (bullets && bullets.length) {
    html += "<ul>";
    for (const b of bullets) html += "<li>" + escapeHTML(b) + "</li>";
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

/* ------------------------------ Menu mobile header ------------------------------ */

function ensureNavHeader() {
  // Le header doit rester en haut du <nav>
  if (navEl.querySelector(".navHeader")) return;

  const header = document.createElement("div");
  header.className = "navHeader";
  header.innerHTML =
    '<div class="navHeaderTitle">Menu</div>' +
    '<button type="button" class="navCloseBtn" id="navCloseBtn" aria-label="Fermer le menu">✕</button>';

  navEl.prepend(header);

  const closeBtn = header.querySelector("#navCloseBtn");
  if (closeBtn) closeBtn.addEventListener("click", () => setMenu(false));
}

/* ------------------------------ Interactions ----------------------------- */

menuBtn.addEventListener("click", () => {
  const open = navEl.getAttribute("data-open") === "true";
  setMenu(!open);
});
backdrop.addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

logoBtn.addEventListener("click", () => go(DEFAULT_PAGE_ID));

/* -------------------------------- Renders -------------------------------- */

function renderNav(currentId) {
  navEl.innerHTML = "";
  ensureNavHeader();

  const activeSectionName =
    (NAV.find((g) => (g.items || []).includes(currentId)) || {}).section || "";

  for (const group of NAV) {
    const wrap = document.createElement("div");
    wrap.className = "navSection";

    const isOpenByDefault = group.section === activeSectionName;
    wrap.setAttribute("data-open", isOpenByDefault ? "true" : "false");

    const sectionBtn = document.createElement("button");
    sectionBtn.type = "button";
    sectionBtn.className = "navSectionBtn";
    sectionBtn.setAttribute("aria-expanded", isOpenByDefault ? "true" : "false");
    sectionBtn.innerHTML =
      '<span>' + escapeHTML(group.section) + '</span>' +
      '<span class="navChevron">›</span>';

    const itemsWrap = document.createElement("div");
    itemsWrap.className = "navItems";

    for (const id of group.items) {
      const p = getPage(id);
      if (!p) continue;

      const btn = document.createElement("button");
      btn.className = "navItem";
      btn.type = "button";
      btn.setAttribute("aria-current", id === currentId ? "page" : "false");

      btn.innerHTML =
        escapeHTML(p.title) +
        '<span class="navSmall">' +
        escapeHTML(p.subtitle || "") +
        "</span>";

      btn.addEventListener("click", () => {
        go(id);
        setMenu(false);
      });

      itemsWrap.appendChild(btn);
    }

    sectionBtn.addEventListener("click", () => {
      const willOpen = wrap.getAttribute("data-open") !== "true";

      navEl.querySelectorAll(".navSection").forEach((sec) => {
        sec.setAttribute("data-open", "false");
        const b = sec.querySelector(".navSectionBtn");
        if (b) b.setAttribute("aria-expanded", "false");
      });

      wrap.setAttribute("data-open", willOpen ? "true" : "false");
      sectionBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    wrap.appendChild(sectionBtn);
    wrap.appendChild(itemsWrap);
    navEl.appendChild(wrap);
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

  const homeIntro =
    '<div class="card">' +
    '<div class="kicker">Vue d’ensemble</div>' +
    '<div class="lead">Support de formation — La Méthode FIDES</div>' +
    "<p>" +
    escapeHTML(
      "But pédagogique : comprendre les bases, identifier la blessure à partir de l’émotion, relier les comportements observables (addictions, valeurs, dogmes), trouver la croyance de base, la libérer et se pardonner."
    ) +
    "</p>" +
    "</div>";

  const parcours =
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

  const grid = '<div class="mapGrid">' + tiles.map(tileHtml).join("") + "</div>";

  mainEl.innerHTML = homeIntro + parcours + grid;
}

function renderSocle(page) {
  let html = "";
  for (const b of page.content || []) html += cardHtml(b);
  mainEl.innerHTML = html;
}

function renderBlessure(page) {
  const head =
    '<div class="card">' +
    '<div class="kicker">Blessure</div>' +
    '<div class="lead">' +
    escapeHTML(page.title) +
    "</div>" +
    "<p>" +
    escapeHTML(page.subtitle || "") +
    "</p>" +
    "</div>";

  const grid =
    '<div class="woundGrid">' +
    (page.grid || []).map(([k, v]) => woundRowHtml(k, v)).join("") +
    "</div>";

  mainEl.innerHTML = head + grid;
}

function renderRef(page) {
  renderSocle(page);
}

function canonicalizeUrlIfNeeded(pageId) {
  const currentToken = normalizeHash(location.hash);
  const canonicalSlug = getCanonicalSlugForPageId(pageId);
  if (currentToken === canonicalSlug) return;
  setHashToSlug(canonicalSlug, { replace: true });
}

function render() {
  const pageId = getCurrentPageIdFromLocation();
  const page = getPage(pageId) || getPage(DEFAULT_PAGE_ID);

  canonicalizeUrlIfNeeded(page.id);

  pageTitle.textContent = page.title || "La Méthode FIDES";
  pageSubtitle.textContent = page.subtitle || "";

  renderNav(page.id);

  switch (page.type) {
    case PAGE_TYPES.HOME:
      renderHome();
      break;
    case PAGE_TYPES.SOCLE:
      renderSocle(page);
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

  applyPendingScrollTop();
}

/* ------------------------------ Boot ------------------------------ */

if (isDebugMode()) validateData();

window.addEventListener("hashchange", render);

if (!location.hash) {
  setHashToSlug(getCanonicalSlugForPageId(DEFAULT_PAGE_ID), { replace: true });
}
render();
