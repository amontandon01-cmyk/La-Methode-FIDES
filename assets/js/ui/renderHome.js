import { escapeHTML } from "../utils.js";

export function renderHome({ mainEl, onGo }){
  const tiles = [
    { title:"Commencer", id:"socle_confort", desc:"Confort → Peur → Apprentissage → Expansion." },
    { title:"Cadre des blessures", id:"socle_blessures", desc:"Apathie = fermeture protectrice ; empathie = réouverture." },
    { title:"Blessures", id:"w_rejet", desc:"Grille stable : émotion → origine → masque → apathie → addictions → valeurs → dogmes → croyances." },
    { title:"Référentiels", id:"ref_addictions", desc:"Sentiments, addictions, valeurs, dogmes." }
  ];

  mainEl.innerHTML = `
    <div class="card">
      <div class="kicker">Sommaire</div>
      <div class="lead">Support de formation — La méthode FIDES</div>
      <p>Accès par structure : socles, blessures, référentiels.</p>
    </div>
    <div class="mapGrid">
      ${tiles.map(t => `
        <div class="mapTile" data-go="${escapeHTML(t.id)}">
          <h3>${escapeHTML(t.title)}</h3>
          <p>${escapeHTML(t.desc)}</p>
        </div>
      `).join("")}
    </div>
  `;

  mainEl.querySelectorAll(".mapTile").forEach(el => {
    el.addEventListener("click", () => onGo(el.dataset.go));
  });
}
