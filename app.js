/* app.js — refactor technique + slugs d’URL + home non cliquable
   Objectifs :
   - Les tuiles de la home ne naviguent plus (non cliquables, aucun ajout ailleurs)
   - Hash “sexy” via slugs (alias) : #bases-empathie, #blessures-rejet, etc.
   - Compatibilité : anciens ids (#socle_empathie) => remplacés par le slug canonique
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
/* Slug -> Page ID
   But : URLs lisibles et stables.
*/
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
  // "#xxx" => "xxx"
  const h = (rawHash || "").trim();
  if (!h) return "";
  return h.startsWith("#") ? h.slice(1) : h;
}

function resolveRouteToPageId(routeToken) {
  // 1) slug connu ?
  if (SLUG_TO_PAGE_ID[routeToken] && getPage(SLUG_TO_PAGE_ID[routeToken])) {
    return SLUG_TO_PAGE_ID[routeToken];
  }
  // 2) compat : ancien id direct ?
  if (getPage(routeToken)) {
    return routeToken;
  }
  // 3) fallback
  return DEFAULT_PAGE_ID;
}

function getCurrentPageIdFromLocation() {
  const token = normalizeHash(location.hash) || getCanonicalSlugForPageId(DEFAULT_PAGE_ID);
  return resolveRouteToPageId(token);
}

function setHashToSlug(slug, { replace = false } = {}) {
  const next = "#" + slug;
  if (replace) {
    // évite d’empiler l’historique lors de la canonicalisation
    history.replaceState(null, "", next);
  } else {
    location.hash = next;
  }
}

function go(pageId) {
  const targetId = getPage(pageId) ? pageId : DEFAULT_PAGE_ID;
  const slug = getCanonicalSlugForPageId(targetId);
  setHashToSlug(slug, { replace: false });
}

function setMenu(open) {
  navEl.setAttribute("data-open", open ? "true" : "false");
  backdrop.setAttribute("data-open", open ? "true" : "false");
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
  // 1) unicité des IDs
  const seen = new Set();
  const dupes = new Set();
  for (const p of PAGES) {
    if (seen.has(p.id)) dupes.add(p.id);
    seen.add(p.id);
  }
  if (dupes.size) console.warn("[FIDES] IDs dupliqués dans PAGES:", Array.from(dupes));

  // 2) NAV -> pages existantes
  const missing = [];
  for (const group of NAV) {
    for (const id of group.items) {
      if (!getPage(id)) missing.push({ section: group.section, id });
    }
  }
  if (missing.length) console.warn("[FIDES] NAV référence des pages manquantes:", missing);

  // 3) Slugs -> pages existantes
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
  // Home non cliquable : pas de data-go, pas d’évènement
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

  for (const group of NAV) {
    const wrap = document.createElement("div");
    wrap.className = "navSection";
    wrap.innerHTML = '<div class="navTitle">' + escapeHTML(group.section) + "</div>";

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

      wrap.appendChild(btn);
    }

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

  // Si on est déjà sur le slug canonique, ok.
  if (currentToken === canonicalSlug) return;

  // Si l’utilisateur a mis un ancien id (#socle_empathie), on remplace par le slug sans ajouter d’historique.
  // Si hash vide, on met aussi la version canonique.
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
}

/* ------------------------------ Boot ------------------------------ */

if (isDebugMode()) validateData();

window.addEventListener("hashchange", render);

// Init : si pas de hash, on met directement le slug canonique de la home
if (!location.hash) {
  setHashToSlug(getCanonicalSlugForPageId(DEFAULT_PAGE_ID), { replace: true });
}
render();
