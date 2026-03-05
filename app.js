/* app.js — refactor technique (sans changement de contenu/rendu)
   Objectif :
   - Navigation robuste (IDs invalides => home)
   - Templates HTML simples pour éviter la duplication
   - Types stricts (PAGE_TYPES)
   - Validation dev : IDs uniques + NAV cohérent
*/

"use strict";

/* ------------------------------ Constantes ------------------------------ */

const PAGE_TYPES = Object.freeze({
  HOME: "HOME",
  SOCLE: "SOCLE",
  BLESSURE: "BLESSURE",
  REF: "REF",
});

const DEFAULT_ROUTE = "home";

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

function getRoute() {
  return (location.hash || "#" + DEFAULT_ROUTE).slice(1);
}

function go(id) {
  const target = getPage(id) ? id : DEFAULT_ROUTE;
  location.hash = "#" + target;
}

function setMenu(open) {
  navEl.setAttribute("data-open", open ? "true" : "false");
  backdrop.setAttribute("data-open", open ? "true" : "false");
}

/* ------------------------------ Dev validation ------------------------------ */

function isDebugMode() {
  // Debug en local OU si tu ajoutes ?debug=1 à l’URL
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
  if (dupes.size) {
    console.warn("[FIDES] IDs dupliqués dans PAGES:", Array.from(dupes));
  }

  // 2) NAV -> pages existantes
  const missing = [];
  for (const group of NAV) {
    for (const id of group.items) {
      if (!getPage(id)) missing.push({ section: group.section, id });
    }
  }
  if (missing.length) {
    console.warn("[FIDES] NAV référence des pages manquantes:", missing);
  }
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

function tileHtml({ title, desc, id }) {
  return (
    '<div class="mapTile" data-go="' +
    escapeHTML(id) +
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

logoBtn.addEventListener("click", () => go(DEFAULT_ROUTE));

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
      id: "socle_confort",
      desc: "Comprendre le cadre : zones (confort → peur → apprentissage → expansion) et bases des blessures.",
    },
    {
      title: "Blessures",
      id: "w_joie",
      desc: "Lire une blessure : émotion racine → sentiments possibles → masque → apathie → croyances.",
    },
    {
      title: "Comportements",
      id: "ref_addictions",
      desc: "Relier le vécu aux mécanismes : addictions, valeurs, dogmes (ce qui oriente les choix).",
    },
    {
      title: "Empathie",
      id: "socle_empathie",
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

  const grid =
    '<div class="mapGrid">' +
    tiles.map(tileHtml).join("") +
    "</div>";

  mainEl.innerHTML = homeIntro + parcours + grid;

  mainEl.querySelectorAll(".mapTile").forEach((el) => {
    el.addEventListener("click", () => {
      const target = el.dataset.go || DEFAULT_ROUTE;
      go(target);
    });
  });
}

function renderSocle(page) {
  let html = "";
  for (const b of page.content || []) {
    html += cardHtml(b);
  }
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

function render() {
  const id = getRoute();
  const page = getPage(id) || getPage(DEFAULT_ROUTE);

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
if (!location.hash) location.hash = "#" + DEFAULT_ROUTE;
render();
