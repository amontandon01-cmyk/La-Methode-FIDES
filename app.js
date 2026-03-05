/* app.js — refactor pédagogique (Oct 2025)
   Objectif :
   - Ajouter un "état : joie" (absence de blessure activée)
   - Associer à chaque blessure : émotion racine + sentiments possibles (variations)
   - Fusionner "Sentiments (référentiels)" dans les pages blessures (sans perte de contenu)
   - Renommer la section "Addictions / Valeurs / Dogmes" en "Comportements"
   - Garder tout le contenu existant (socles, impacts, addictions, valeurs, dogmes, référence)
   - Bonnes pratiques : données structurées, helpers, avoid duplication, const/immutables
*/

"use strict";

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
  return (location.hash || "#home").slice(1);
}

function go(id) {
  location.hash = "#" + id;
}

function setMenu(open) {
  navEl.setAttribute("data-open", open ? "true" : "false");
  backdrop.setAttribute("data-open", open ? "true" : "false");
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

logoBtn.addEventListener("click", () => go("home"));

/* -------------------------------- Renders -------------------------------- */

function renderNav(currentId) {
  navEl.innerHTML = "";
  NAV.forEach((group) => {
    const wrap = document.createElement("div");
    wrap.className = "navSection";
    wrap.innerHTML = '<div class="navTitle">' + escapeHTML(group.section) + "</div>";

    group.items.forEach((id) => {
      const p = getPage(id);
      if (!p) return;
      const btn = document.createElement("button");
      btn.className = "navItem";
      btn.type = "button";
      btn.setAttribute("aria-current", id === currentId ? "page" : "false");
      btn.innerHTML = escapeHTML(p.title) + '<span class="navSmall">' + escapeHTML(p.subtitle || "") + "</span>";
      btn.addEventListener("click", () => {
        go(id);
        setMenu(false);
      });
      wrap.appendChild(btn);
    });

    navEl.appendChild(wrap);
  });
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
      title: "Empathie (impacts)",
      id: "impact_empathie",
      desc: "Voir les effets concrets : absence d’empathie (apathie) vs empathie (bénéfices).",
    },
  ];

  mainEl.innerHTML =
    '<div class="card">' +
      '<div class="kicker">Vue d’ensemble</div>' +
      '<div class="lead">Support de formation — La méthode FIDES</div>' +
      '<p>But pédagogique : comprendre les bases, identifier la blessure à partir de l’émotion, relier les comportements observables (addictions, valeurs, dogmes), trouver la croyance de base, la libérer et se pardonner.</p>' +
    '</div>' +
    '<div class="mapGrid">' +
      tiles.map(t =>
        '<div class="mapTile" data-go="' + escapeHTML(t.id) + '">' +
          '<h3>' + escapeHTML(t.title) + '</h3>' +
          '<p>' + escapeHTML(t.desc) + '</p>' +
        '</div>'
      ).join("") +
    '</div>';

  mainEl.querySelectorAll(".mapTile").forEach(el => {
    el.addEventListener("click", () => go(el.dataset.go));
  });
}

function renderSocle(page) {
  let html = "";
  (page.content || []).forEach((b) => {
    html += '<div class="card">';
    html += '<div class="kicker">' + escapeHTML(b.kicker || "Section") + "</div>";
    html += '<div class="lead">' + escapeHTML(b.lead || "") + "</div>";
    if (b.text) html += "<p>" + escapeHTML(b.text) + "</p>";
    if (b.bullets && b.bullets.length) {
      html += "<ul>";
      b.bullets.forEach((x) => {
        html += "<li>" + escapeHTML(x) + "</li>";
      });
      html += "</ul>";
    }
    html += "</div>";
  });
  mainEl.innerHTML = html;
}

function renderBlessure(page) {
  mainEl.innerHTML =
    '<div class="card">' +
    '<div class="kicker">Blessure</div>' +
    '<div class="lead">' +
    escapeHTML(page.title) +
    "</div>" +
    "<p>" +
    escapeHTML(page.subtitle || "") +
    "</p>" +
    "</div>" +
    '<div class="woundGrid">' +
    (page.grid || [])
      .map(
        ([k, v]) =>
          '<div class="row">' +
          '<div class="label">' +
          escapeHTML(k) +
          "</div>" +
          '<div class="value">' +
          escapeHTML(v) +
          "</div>" +
          "</div>"
      )
      .join("") +
    "</div>";
}

function renderRef(page) {
  renderSocle(page);
}

function render() {
  const id = getRoute();
  const page = getPage(id) || getPage("home");

  pageTitle.textContent = page.title || "La méthode FIDES";
  pageSubtitle.textContent = page.subtitle || "";

  renderNav(page.id);

  if (page.type === "HOME") renderHome();
  else if (page.type === "SOCLE") renderSocle(page);
  else if (page.type === "BLESSURE") renderBlessure(page);
  else if (page.type === "REF") renderRef(page);
  else renderHome();
}

window.addEventListener("hashchange", render);
if (!location.hash) location.hash = "#home";
render();
