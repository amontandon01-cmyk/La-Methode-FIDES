import { escapeHTML } from "../utils.js";

export function renderSocle({ mainEl, page }){
  let html = "";
  (page.content || []).forEach(b => {
    html += `<div class="card">`;
    html += `<div class="kicker">${escapeHTML(b.kicker || "Section")}</div>`;
    if(b.lead) html += `<div class="lead">${escapeHTML(b.lead)}</div>`;
    if(b.text) html += `<p>${escapeHTML(b.text)}</p>`;
    if(b.bullets?.length){
      html += `<ul>${b.bullets.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul>`;
    }
    html += `</div>`;
  });
  mainEl.innerHTML = html;
}
