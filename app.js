/* app.js — version propre et minimale
   Rôle :
   - navigation par slugs lisibles
   - rendu dynamique des pages
   - menu mobile repliable
   - Vue d’ensemble et Références directement cliquables
   - compatibilité avec anciens ids
*/

import { PAGES, NAV } from "./data.js";

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

const SLUG_TO_PAGE_ID = Object.freeze(
  PAGES.reduce((acc, page) => {
    if (page.slug) {
      acc[page.slug] = page.id;
    }
    return acc;
  }, {})
);

const PAGE_ID_TO_SLUG = Object.freeze(
  PAGES.reduce((acc, page) => {
    if (page.slug) {
      acc[page.id] = page.slug;
    }
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
  const mobile = isMobileViewport();
  const open = mobile && isOpen;

  navEl.setAttribute("data-open", open ? "true" : "false");
  backdrop.setAttribute("data-open", open ? "true" : "false");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");

  if (mobile) {
    navEl.setAttribute("aria-hidden", open ? "false" : "true");
  } else {
    navEl.removeAttribute("aria-hidden");
  }

  document.documentElement.classList.toggle("menuOpen", open);
  document.body.classList.toggle("menuOpen", open);
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

/* ------------------------------ Templates ------------------------------ */

function cardHtml({ kicker, lead, text, bullets, image, imageAlt }) {
  let html = '<div class="card">';

  html += '<div class="kicker">' + escapeHTML(kicker || "Section") + "</div>";

  if (lead) {
    html += '<div class="lead">' + escapeHTML(lead) + "</div>";
  }

   if (image) {
  html += `
    <figure class="cardMedia">
      <img
        class="cardImage"
        src="${encodeURI(image)}"
        alt="${escapeHTML(imageAlt || "Illustration")}"
        loading="lazy"
        decoding="async"
      />
    </figure>
  `;
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
      desc: "Comprendre le cadre : déclencheur, zone de confort, zone d’activation, zone de réalignement et zone d’évolution.",
    },
    {
      title: "Blessures",
      desc: "Lire une blessure : émotion racine, sentiments possibles, masque, croyances associées et logiques de protection.",
    },
    {
      title: "Comportements",
      desc: "Relier le vécu aux mécanismes visibles : addictions, rigidités, dogmes, évitements, contrôle, compensation ou répétition.",
    },
    {
      title: "Empathie",
      desc: "Accueillir ce que l’autre vit, ressent et perçoit, puis prendre de la hauteur pour en garder une compréhension juste.",
    },
  ];

  const introHtml = `
    <div class="card">
      <div class="kicker">Vue d’ensemble</div>
      <div class="lead">Support de formation — La Méthode FIDES</div>
      <p>${escapeHTML(
        "Un support pédagogique pour comprendre le cadre, repérer l’émotion activée, identifier la blessure, lire les mécanismes visibles, retrouver la croyance limitante, et ouvrir un réalignement vers plus d’authenticité."
      )}</p>
    </div>
  `;

  const processText =
    "Le déclencheur active une émotion. L’émotion révèle une blessure. La blessure s’appuie sur une croyance limitante. Cette croyance influence les mécanismes visibles. Le réalignement ouvre une manière d’être plus authentique.";

  const steps = [
    "Déclencheur",
    "Émotion",
    "Blessure",
    "Croyance limitante",
    "Mécanismes visibles",
    "Réalignement",
    "Authenticité",
  ];

  const processHtml = `
    <div class="card">
      <div class="kicker">Clé de lecture</div>
      <div class="lead">La dynamique du processus</div>
      <p>${escapeHTML(processText)}</p>

      <div style="
        margin-top:18px;
        padding:16px;
        border:1px solid var(--stroke);
        border-radius:18px;
        background: rgba(255,255,255,0.55);
      ">
        <div style="
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          gap:10px 8px;
          justify-content:center;
        ">
          ${steps
            .map((step, index) => {
              const chip = `
                <span style="
                  display:inline-flex;
                  align-items:center;
                  justify-content:center;
                  padding:10px 14px;
                  border-radius:999px;
                  background: rgb(245, 239, 227);
                  border:1px solid rgba(190, 43, 86, 0.16);
                  color: var(--text);
                  font-weight:700;
                  line-height:1.2;
                  text-align:center;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
                ">${escapeHTML(step)}</span>
              `;

              if (index === steps.length - 1) return chip;

              return `
                ${chip}
                <span aria-hidden="true" style="
                  color: var(--muted);
                  font-size: 18px;
                  line-height: 1;
                  padding: 0 2px;
                ">→</span>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
  `;

  const gridHtml = `
    <div class="mapGrid">
      ${tiles.map(tileHtml).join("")}
    </div>
  `;

  mainEl.innerHTML = introHtml + processHtml + gridHtml;
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

setMenu(false);
render();
