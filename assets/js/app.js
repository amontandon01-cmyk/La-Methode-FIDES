import { PAGES } from "./data/pages.js";
import { NAV } from "./data/nav.js";
import { getRoute, go } from "./router.js";
import { renderNav } from "./ui/renderNav.js";
import { renderHome } from "./ui/renderHome.js";
import { renderSocle } from "./ui/renderSocle.js";
import { renderBlessure } from "./ui/renderBlessure.js";
import { renderRef } from "./ui/renderRef.js";

const navEl = document.getElementById("nav");
const mainEl = document.getElementById("main");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const menuBtn = document.getElementById("menuBtn");
const backdrop = document.getElementById("backdrop");
const logoBtn = document.getElementById("logoBtn");

const getPage = (id) => PAGES.find(p => p.id === id) || PAGES.find(p => p.id === "home");

function setMenu(open){
  navEl.setAttribute("data-open", open ? "true" : "false");
  backdrop.setAttribute("data-open", open ? "true" : "false");
}

menuBtn?.addEventListener("click", () => {
  const open = navEl.getAttribute("data-open") === "true";
  setMenu(!open);
});
backdrop.addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", (e) => { if(e.key === "Escape") setMenu(false); });
logoBtn.addEventListener("click", () => go("home"));

function render(){
  const id = getRoute();
  const page = getPage(id);

  pageTitle.textContent = page.title || "La méthode FIDES";
  pageSubtitle.textContent = page.subtitle || "Support de formation";

  renderNav({ navEl, NAV, PAGES, currentId: page.id, onGo: (id) => { go(id); setMenu(false); } });

  if(page.type === "HOME") renderHome({ mainEl, onGo: go });
  else if(page.type === "SOCLE") renderSocle({ mainEl, page });
  else if(page.type === "BLESSURE") renderBlessure({ mainEl, page });
  else if(page.type === "REF") renderRef({ mainEl, page });
  else renderHome({ mainEl, onGo: go });
}

window.addEventListener("hashchange", render);
if(!location.hash) go("home");
render();
