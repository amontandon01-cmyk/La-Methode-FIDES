import { escapeHTML } from "../utils.js";

export function renderBlessure({ mainEl, page }){
  const rows = (page.grid || []).map(([k,v]) => `
    <div class="row">
      <div class="label">${escapeHTML(k)}</div>
      <div class="value">${escapeHTML(v)}</div>
    </div>
  `).join("");

  mainEl.innerHTML = `
    <div class="card">
      <div class="kicker">Blessure</div>
      <div class="lead">${escapeHTML(page.title)}</div>
      <p>${escapeHTML(page.subtitle || "")}</p>
    </div>
    <div class="woundGrid">${rows}</div>
  `;
}
