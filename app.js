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
  CONTENT: "CONTENT",
  GRID: "GRID",
});

const DEFAULT_PAGE_ID = "home";

/* ------------------------------ Routes ------------------------------ */

const PAGE_BY_ID = Object.freeze(
  Object.fromEntries(PAGES.map((page) => [page.id, page])),
);

const PAGE_BY_SLUG = Object.freeze(
  Object.fromEntries(
    PAGES.filter((page) => page.slug).map((page) => [page.slug, page]),
  ),
);

const PAGE_ID_TO_SLUG = Object.freeze(
  Object.fromEntries(
    PAGES.filter((page) => page.slug).map((page) => [page.id, page.slug]),
  ),
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
  return PAGE_BY_ID[pageId] || null;
}

function normalizeHash(rawHash) {
  const hash = (rawHash || "").trim();
  if (!hash) return "";
  return hash.startsWith("#") ? hash.slice(1) : hash;
}

function resolveRouteToPageId(routeToken) {
  return (
    PAGE_BY_SLUG[routeToken]?.id ||
    PAGE_BY_ID[routeToken]?.id ||
    DEFAULT_PAGE_ID
  );
}

function getCurrentPageIdFromLocation() {
  const token =
    normalizeHash(location.hash) || getCanonicalSlugForPageId(DEFAULT_PAGE_ID);
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

function getMenuSubtitle(page) {
  return page.menuSubtitle ?? page.subtitle ?? "";
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

/* ------------------------------ Templates ------------------------------ */

function flowHtml(steps = []) {
  if (!steps.length) return "";

  return `
    <div class="flowBox">
      <div class="flowTrack">
        ${steps
          .map((step, index) => {
            const chip = `<span class="flowChip">${escapeHTML(step)}</span>`;

            if (index === steps.length - 1) return chip;

            return `
              ${chip}
              <span aria-hidden="true" class="flowArrow">→</span>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function cardHtml({
  kicker,
  lead,
  text,
  image,
  imageAlt,
  steps,
  imageBottomSpace = "0px",
}) {
  let html = `
    <article class="card">
  `;

  if (kicker) {
    html += `
      <div class="kicker">${escapeHTML(kicker)}</div>
    `;
  }

  if (lead) {
    html += `
      <div class="lead">${escapeHTML(lead)}</div>
    `;
  }

  if (image) {
    const imageClassName =
      imageBottomSpace === "18px"
        ? "cardInlineImage cardInlineImage--mb18"
        : "cardInlineImage";

    html += `
      <img
        src="${escapeHTML(image)}"
        alt="${escapeHTML(imageAlt || "")}"
        class="${imageClassName}"
      >
    `;
  }

  if (text) {
    html += `
      <p>${escapeHTML(text)}</p>
    `;
  }

  if (steps && steps.length) {
    html += flowHtml(steps);
  }

  html += `
    </article>
  `;

  return html;
}

function tilesCardHtml({ kicker, lead, text, items = [] }) {
  let html = '<div class="card">';

  if (kicker) {
    html += '<div class="kicker">' + escapeHTML(kicker) + "</div>";
  }

  if (lead) {
    html += '<div class="lead">' + escapeHTML(lead) + "</div>";
  }

  if (text) {
    html += "<p>" + escapeHTML(text) + "</p>";
  }

  html += `
    <div class="tilesStack">
      ${items
        .map(
          (item, index) => `
            <div class="tilesStackItem${index > 0 ? " tilesStackItem--separated" : ""}">
              <div class="tilesStackTitle">
                ${escapeHTML(item.title || "")}
              </div>
              ${
                item.desc
                  ? `<p class="tilesStackDesc">${escapeHTML(item.desc)}</p>`
                  : ""
              }
            </div>
          `,
        )
        .join("")}
    </div>
  `;

  html += "</div>";
  return html;
}

function splitHtml({ left, right }) {
  return `
    <div class="splitGrid">
      <div class="splitCol">${left ? contentBlockHtml(left) : ""}</div>
      <div class="splitCol">${right ? contentBlockHtml(right) : ""}</div>
    </div>
  `;
}

function contentBlockHtml(block) {
  if (block.layout === "split") {
    return splitHtml(block);
  }

  if (block.layout === "tilesCard") {
    return tilesCardHtml(block);
  }

  return cardHtml(block);
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
function heroCardHtml({ eyebrow = "", title = "", subtitle = "" }) {
  return (
    '<section class="heroCard">' +
    '<div class="eyebrow">' +
    escapeHTML(eyebrow) +
    "</div>" +
    "<h2>" +
    escapeHTML(title) +
    "</h2>" +
    "<p>" +
    escapeHTML(subtitle) +
    "</p>" +
    "</section>"
  );
}

function woundGridHtml(grid = []) {
  return (
    '<section class="woundGrid">' +
    grid.map(([label, value]) => woundRowHtml(label, value)).join("") +
    "</section>"
  );
}

function pageBodyHtml(page) {
  switch (page.type) {
    case PAGE_TYPES.HOME:
    case PAGE_TYPES.CONTENT:
      return (page.content || []).map(contentBlockHtml).join("");

    case PAGE_TYPES.GRID:
      return (
        heroCardHtml({
          eyebrow: page.eyebrow ?? "",
          title: page.title || "",
          subtitle: page.subtitle || "",
        }) + woundGridHtml(page.grid || [])
      );

    default:
      return (getPage(DEFAULT_PAGE_ID)?.content || [])
        .map(contentBlockHtml)
        .join("");
  }
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
  itemBtn.setAttribute(
    "aria-current",
    page.id === currentPageId ? "page" : "false",
  );
  itemBtn.innerHTML =
    escapeHTML(page.title) +
    '<span class="navSmall">' +
    escapeHTML(getMenuSubtitle(page)) +
    "</span>";

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
    "<span>" +
    escapeHTML(group.section) +
    "</span>" +
    '<span class="navChevron">›</span>';

  const itemsWrap = document.createElement("div");
  itemsWrap.className = "navItems";

  for (const pageId of group.items) {
    const page = getPage(pageId);
    if (!page) continue;

    const itemBtn = document.createElement("button");
    itemBtn.className = "navItem";
    itemBtn.type = "button";
    itemBtn.setAttribute(
      "aria-current",
      pageId === currentPageId ? "page" : "false",
    );
    itemBtn.innerHTML =
      escapeHTML(page.title) +
      '<span class="navSmall">' +
      escapeHTML(getMenuSubtitle(page)) +
      "</span>";

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
    const isSingleLink = group.singleLink === true && group.items.length === 1;

    const sectionEl = isSingleLink
      ? renderSingleLinkSection(group, currentPageId)
      : renderAccordionSection(group, currentPageId, activeSection);

    if (sectionEl) {
      navEl.appendChild(sectionEl);
    }
  }
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
  mainEl.innerHTML = pageBodyHtml(page);
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

if (!location.hash) {
  setHashToSlug(getCanonicalSlugForPageId(DEFAULT_PAGE_ID), { replace: true });
}

setMenu(false);
render();
