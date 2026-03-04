import { escapeHTML } from "../utils.js";

export function renderNav({ navEl, NAV, PAGES, currentId, onGo }){
  const getPage = (id) => PAGES.find(p => p.id === id);

  navEl.innerHTML = "";

  NAV.forEach(group => {
    const wrap = document.createElement("div");
    wrap.className = "navSection";
    wrap.innerHTML = `<div class="navTitle">${escapeHTML(group.section)}</div>`;

    group.items.forEach(id => {
      const p = getPage(id);
      if(!p) return;

      const btn = document.createElement("button");
      btn.className = "navItem";
      btn.type = "button";
      btn.setAttribute("aria-current", id === currentId ? "page" : "false");
      btn.innerHTML = `
        ${escapeHTML(p.title)}
        <span class="navSmall">${escapeHTML(p.subtitle || "")}</span>
      `;
      btn.addEventListener("click", () => onGo(id));
      wrap.appendChild(btn);
    });

    navEl.appendChild(wrap);
  });
}
