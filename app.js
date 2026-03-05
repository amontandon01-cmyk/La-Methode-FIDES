/* Contenu repris du support (Oct 2025). */
const PAGES = [
  // ACCUEIL
  { id:"home", type:"HOME", title:"Vue d’ensemble", subtitle:"Socles • Blessures • Référentiels" },

  // SOCLES
  { id:"socle_confort", type:"SOCLE", title:"Le cercle de la zone de confort",
    subtitle:"Confort → Peur → Apprentissage → Expansion",
    content: [
      { kicker:"But pédagogique", lead:"Montrer les différentes zones.", bullets:[
        "Zone de confort = sécurité illusoire, répétition des habitudes, évitement de l’inconfort.",
        "Zone de peur = doutes, jugements des autres, perte de repères.",
        "Zone d’apprentissage = nouvelles compétences, élargissement de soi, expérimentation.",
        "Zone d’expansion = réalisation de soi, alignement avec sa valeur, contribution au monde."
      ]},
      { kicker:"Message clé", lead:"Pour avancer, il faut oser franchir la peur et passer par l’apprentissage.", text:
        "Sans ce passage, on reste prisonnier de l’illusion de sécurité."
      }
    ]
  },

  { id:"socle_blessures", type:"SOCLE", title:"Les blessures émotionnelles (cadre)",
    subtitle:"Apathie ↔ empathie",
    content: [
      { kicker:"Constat", lead:"Quand une blessure s’active, l’apathie prend le dessus.", text:
        "Dans ce contexte, l’apathie n’est pas une absence d’émotion au sens médical, mais un état de fermeture émotionnelle qui se met en place lorsqu’une douleur ancienne se réveille."
      },
      { kicker:"Fonction", lead:"Réaction inconsciente de protection / mode de survie émotionnel.", text:
        "C’est une réaction inconsciente de protection que la personne adopte pour ne plus souffrir."
      },
      { kicker:"Direction", lead:"Retrouver l’ouverture de conscience.", text:
        "L’objectif est de passer de la fermeture à l’ouverture de conscience — vers l’acceptation de soi et de l’autre, sans jugement."
      },
      { kicker:"Finalité", lead:"Retrouver la connexion.", text:
        "Retrouver la connexion à soi, à l’autre et à la vie."
      }
    ]
  },

  // EMPATHIE (socle + impacts)
  { id:"socle_empathie", type:"SOCLE", title:"L’empathie",
    subtitle:"Résonance sans fusion",
    content: [
      { kicker:"Définition", lead:"Capacité à se mettre en résonance avec l’émotion de l’autre, sans se confondre avec elle." },
      { kicker:"Différences", lead:"Empathie / compassion / sympathie", bullets:[
        "Empathie vs compassion : l’une ressent, l’autre agit.",
        "Empathie vs sympathie : l’une écoute, l’autre se projette."
      ]},
      { kicker:"Freins (blessures)", lead:"Les blessures voilent l’empathie.", bullets:[
        "Rejet : envie de s’isoler, se couper.",
        "Injustice : rigidité, contrôle de soi.",
        "Trahison : méfiance, suspicion.",
        "Humiliation : honte, fuite du contact.",
        "Abandon : besoin de combler son vide avant d’écouter."
      ]},
      { kicker:"Message clé", lead:"L’empathie est naturelle, mais elle est voilée par nos blessures." }
    ]
  },

  { id:"impact_apathie", type:"REF", title:"Conséquences de l’absence d’empathie (apathie)",
    subtitle:"Impacts personnels, relationnels, sociaux",
    content: [
      { kicker:"Conséquences", lead:"Synthèse (support)", bullets:[
        "Bien-être personnel fragilisé : sentiment de vide, anxiété, isolement émotionnel, perte de confiance.",
        "Fermeture aux autres : indifférence, incapacité d’aider, égocentrisme.",
        "Relations superficielles et fragiles : difficulté à créer des liens profonds, solitude.",
        "Santé affectée : émotions refoulées, tensions chroniques, troubles psychosomatiques.",
        "Travail : leadership autoritaire, manque de coopération, climat de rivalité.",
        "Conflits : rancunes accumulées, communication fermée, ruptures relationnelles.",
        "Vie familiale et amoureuse : relations distantes, risque de séparation.",
        "Éducation : climat rigide, découragement, comportements agressifs.",
        "Société : individualisme, perte de solidarité, polarisation.",
        "Impact existentiel : difficulté à donner du sens, blocage intérieur, repli sur ses peurs."
      ]}
    ]
  },

  { id:"impact_empathie", type:"REF", title:"Conséquences positives de l’empathie",
    subtitle:"Bénéfices personnels, relationnels, collectifs",
    content: [
      { kicker:"Conséquences positives", lead:"Synthèse (support)", bullets:[
        "Bien-être personnel : plus de satisfaction de vie, confiance en soi.",
        "Croissance personnelle : estime de soi, réduction du stress, envie de s’engager.",
        "Comportements compassionnels : entraide, coopération.",
        "Efficacité thérapeutique : meilleure compréhension et adhésion aux soins.",
        "Santé : réduction anxiété, douleur, tensions.",
        "Leadership : confiance, loyauté, efficacité collective.",
        "Relations durables : stabilité, bonheur relationnel.",
        "Conflits : compréhension mutuelle, solutions justes.",
        "Éducation : climat positif, meilleurs résultats scolaires.",
        "Société : coopération, solidarité, sens du bien commun.",
        "Apaisement : aider l’autre apaise aussi ses propres émotions.",
        "Harmonie : réduction des préjugés, cohésion sociale renforcée."
      ]}
    ]
  },

  // BLESSURES (grille stable)
  { id:"w_trahison", type:"BLESSURE", title:"Blessure : trahison", subtitle:"Émotion : surprise",
    grid: [
      ["Émotion", "Surprise."],
      ["Âge d’ancrage", "6–7 ans (indiqué)."],
      ["Origine", "Expérience de trahison réelle ou vécue comme telle (parent absent, infidélité, promesse non tenue). Perte de confiance dans l’autre et dans l’humanité."],
      ["Masque / comportement", "Masque du contrôlant. Cassant, exigeant. Besoin de tout vérifier, d’imposer sa volonté. Difficulté à lâcher prise."],
      ["Apathie", "Méfiance, contrôle ou test permanent de l’autre."],
      ["Addictions", "Pouvoir, contrôle, réussite, domination. Travail ou sport comme moyen de ne pas perdre la main."],
      ["Valeurs de vie", "Loyauté, fidélité, vérité, apparence/paraître, argent (statut social, entourage, savoir)."],
      ["Conditionnements / dogmes", "« On ne peut faire confiance à personne. » « Il faut tout contrôler. » « N’aime pas avoir tort. » « N’aime pas perdre. »"],
      ["Croyances limitantes", "« Les autres vont forcément me trahir. » « Je dois garder le contrôle. » « Où est la performance concrète ? » « Il faut le voir pour y croire. »"],
      ["Croyances expansives", "« Je me détache du résultat, car le chemin compte. » « Laisser à l’autre le bénéfice du doute. » « J’accepte l’autre tel qu’il est. »"]
    ]
  },

  { id:"w_abandon", type:"BLESSURE", title:"Blessure : abandon", subtitle:"Émotion : peur",
    grid: [
      ["Émotion", "Peur."],
      ["Origine", "Sentiment d’être laissé seul, manques affectifs dans l’enfance. Difficultés à exister sans la présence rassurante d’autrui. Manque d’autonomie."],
      ["Masque / comportement", "Masque du dépendant. Fusion, peur de la solitude, besoin excessif de soutien. Enfantin. Peut dire qu’il se sent bien seul et qu’il n’a besoin de personne."],
      ["Empathie (note)", "Confond souvent empathie et fusion. Donne trop, dans l’espoir d’éviter d’être abandonné."],
      ["Addictions", "Dépendances affectives, relations, réseaux sociaux, alcool. Tout ce qui comble le vide intérieur."],
      ["Valeurs de vie", "Amour, proximité, lien, chaleur humaine, partage."],
      ["Conditionnements / dogmes", "« Je dois toujours être avec quelqu’un pour exister. » « Si je suis seul, je ne vaux rien. »"],
      ["Croyances limitantes", "« Je finis toujours seul. » « Personne ne reste jamais avec moi. »"],
      ["Croyances expansives", "« Je suis complet même dans la solitude. » « Je peux créer des liens stables et nourrissants. » « Plus besoin de béquille (addiction) pour accepter la réalité. »"]
    ]
  },

  { id:"w_rejet", type:"BLESSURE", title:"Blessure : rejet", subtitle:"Émotion : tristesse",
    grid: [
      ["Émotion", "Tristesse."],
      ["Origine", "Souvent très tôt (indiqué : parfois dans le ventre de la mère). Sentiment de ne pas avoir sa place, de déranger, d’être de trop."],
      ["Masque / comportement", "Masque du fuyant. Tendance à se retirer, se couper, se rendre invisible. Difficulté à s’affirmer, peur de déranger. Caméléon, s’adapte. Tristesse non exprimée."],
      ["Empathie (note)", "Difficulté à s’ouvrir par peur d’être ignoré. Peut se couper des autres pour éviter de revivre le rejet."],
      ["Addictions", "Isolement, écrans, alimentation compulsive discrète. Addictions solitaires."],
      ["Valeurs de vie", "Sécurité intérieure, acceptation de la différence de l’autre, autonomie, foi en la vie et en l’humain, amour."],
      ["Conditionnements / dogmes", "« Je dois rester invisible pour être accepté. » « Si je me montre, je dérange. »"],
      ["Croyances limitantes", "« Je n’ai pas ma place. » « Je ne suis pas digne d’être vu. » (et formulations du type « ce n’est pas grave », « c’est normal »)."],
      ["Croyances expansives", "« Ma présence suffit pour être aimé. » « J’ai une place unique et légitime. » « J’ose m’exprimer dans mes sentiments. »"]
    ]
  },

  { id:"w_injustice", type:"BLESSURE", title:"Blessure : injustice", subtitle:"Émotion : colère intérieure",
    grid: [
      ["Émotion", "Colère intérieure (maintenue par peur de blesser/détruire l’autre)."],
      ["Origine", "Éducation stricte, froide, où l’amour dépend de la performance. Jugement/comparaison."],
      ["Masque / comportement", "Masque du rigide. Perfectionnisme, dureté avec soi et les autres. Besoin de justice, refus de l’imperfection."],
      ["Empathie (note)", "Rigidité : difficulté à se laisser toucher ou à montrer ses failles."],
      ["Addictions", "Travail excessif, perfectionnisme, hyper-contrôle sur soi."],
      ["Valeurs de vie", "Justice, équité, intégrité, vérité."],
      ["Conditionnements / dogmes", "« Il faut être parfait pour être aimé. » « Je ne dois rien laisser paraître. »"],
      ["Croyances limitantes", "« Je dois toujours prouver ma valeur. » « Je ne peux pas me montrer imparfait. »"],
      ["Croyances expansives", "« Je peux être aimé tel que je suis. » « Ma valeur est innée et indépendante de mes performances. »"]
    ]
  },

  { id:"w_humiliation", type:"BLESSURE", title:"Blessure : humiliation", subtitle:"Émotion : dégoût",
    grid: [
      ["Émotion", "Dégoût."],
      ["Origine", "Honte, dévalorisation, humiliation dans l’enfance. Souvent liée à l’éducation stricte / regard social ou familial."],
      ["Masque / comportement", "Masque du masochiste. Se rabaisser, se sacrifier, se punir. Regrets, remords, culpabilité. Anticipe les besoins des autres sans accord."],
      ["Empathie (note)", "Freinée par la honte — peur de montrer sa vulnérabilité."],
      ["Addictions", "Nourriture, sexualité, auto-sabotage. Excès pour compenser la honte."],
      ["Valeurs de vie", "Respect, dignité, authenticité."],
      ["Conditionnements / dogmes", "« Je dois me sacrifier pour les autres. » « Je ne dois pas exister pleinement. »"],
      ["Croyances limitantes", "« Je ne mérite pas d’être heureux. » « Je dois porter la honte. »"],
      ["Croyances expansives", "« Je mérite le respect et la joie de vivre. » « Je peux exister avec dignité. »"]
    ]
  },

  // RÉFÉRENTIELS
  { id:"ref_sentiments_expansifs", type:"REF", title:"Sentiments agréables / expansifs", subtitle:"Liste",
    content: [{ kicker:"Liste", lead:"Joie, Amour, Sérénité, Gratitude, Confiance, Inspiration, Espoir, Enthousiasme, Curiosité, Fierté, Admiration, Tendresse, Satisfaction, Soulagement, Amusement." }]
  },
  { id:"ref_peur_insecurite", type:"REF", title:"Sentiments liés à la peur et à l’insécurité", subtitle:"Liste",
    content: [{ kicker:"Liste", lead:"Anxiété, Inquiétude, Stress, Méfiance, Doute, Crainte, Panique, Impuissance, Inconfort, Tension, Sentiment d’insécurité." }]
  },
  { id:"ref_colere_frustration", type:"REF", title:"Sentiments liés à la colère et la frustration", subtitle:"Liste",
    content: [{ kicker:"Liste", lead:"Agacement, Irritation, Frustration, Colère, Rancune, Haine, Exaspération, Hostilité, Jalousie, Ressentiment, Envie, Dégoût." }]
  },
  { id:"ref_tristesse_perte", type:"REF", title:"Sentiments liés à la tristesse et la perte", subtitle:"Liste",
    content: [{ kicker:"Liste", lead:"Mélancolie, Nostalgie, Chagrin, Solitude, Découragement, Déception, Vide intérieur, Abattement, Désespoir, Impuissance, Larmes intérieures." }]
  },
  { id:"ref_injustice_humiliation", type:"REF", title:"Sentiments liés à l’injustice et à l’humiliation", subtitle:"Liste",
    content: [{ kicker:"Liste", lead:"Honte, Culpabilité, Sentiment d’échec, Infériorité, Dévalorisation, Indignité, Injustice, Rigidité intérieure." }]
  },
  { id:"ref_ouverture_connexion", type:"REF", title:"Sentiments d’ouverture et de connexion", subtitle:"Liste",
    content: [{ kicker:"Liste", lead:"Compassion, Empathie, Ouverture, Intimité, Communion, Alignement, Paix intérieure, Liberté, Expansion, Sens du sacré." }]
  },

  { id:"ref_addictions", type:"REF", title:"Addictions", subtitle:"Définition + typologies",
    content: [
      { kicker:"Définition", lead:"Comportements répétitifs visant à éviter une émotion (substance, relation, travail, écrans, etc.)." },
      { kicker:"Addictions visibles", lead:"Alcool, drogues, jeux, nourriture, sexe." },
      { kicker:"Addictions invisibles", lead:"Perfectionnisme, contrôle, hyperactivité, réseaux sociaux." },
      { kicker:"Message clé", lead:"L’addiction n’est pas une faute morale, mais un signe d’une émotion qui demande à être reconnue." }
    ]
  },

  { id:"ref_add_substances", type:"REF", title:"Addictions aux substances", subtitle:"Liste",
    content: [{ kicker:"Liste", lead:"Alcool, Tabac, Cannabis, Cocaïne, Héroïne, Amphétamines, Ecstasy, Médicaments psychotropes, Antidouleurs, Caféine, Sucre." }]
  },
  { id:"ref_add_comportementales", type:"REF", title:"Addictions comportementales", subtitle:"Liste",
    content: [{ kicker:"Liste", lead:"Jeux d’argent, Jeux vidéo, Internet, Réseaux sociaux, Téléphone portable, Télévision, Achats compulsifs, Travail, Sport, Sexe, Amour, Relations toxiques, Nourriture, Régimes, Automutilation." }]
  },
  { id:"ref_add_invisibles", type:"REF", title:"Addictions plus invisibles", subtitle:"Liste",
    content: [{ kicker:"Liste", lead:"Perfectionnisme, Contrôle, Besoin de reconnaissance, Hyperactivité, Dépendance à l’adrénaline, Dépendance spirituelle, Dépendance émotionnelle." }]
  },

  { id:"ref_valeurs", type:"REF", title:"Valeurs de vie", subtitle:"Définition + repères",
    content: [
      { kicker:"Définition", lead:"Repères intérieurs qui guident nos choix." },
      { kicker:"Exemples", lead:"Liberté, sécurité, amour, authenticité, réussite, famille, créativité, contribution, santé, foi." },
      { kicker:"Travail pratique", lead:"Identifier ses valeurs prioritaires et vérifier l’alignement actions/valeurs." },
      { kicker:"Message clé", lead:"Aligner ses actions avec ses vraies valeurs permet de sortir des schémas hérités." }
    ]
  },

  { id:"ref_valeurs_listes", type:"REF", title:"Valeurs de vie (listes)", subtitle:"Piliers + exemples",
    content: [
      { kicker:"4 piliers universels", lead:"Santé, famille/proches, argent/sécurité financière, amour/relations." },
      { kicker:"Valeurs personnelles", lead:"Authenticité, liberté, indépendance, responsabilité, courage, simplicité, persévérance, discipline, dépassement de soi, savoir, croissance personnelle, équilibre." },
      { kicker:"Valeurs relationnelles et familiales", lead:"Famille, amour, couple, amitié, bienveillance, fidélité, loyauté, solidarité, transmission, respect, tolérance, partage." },
      { kicker:"Valeurs matérielles et financières", lead:"Argent, sécurité matérielle, confort, abondance, stabilité économique, réussite sociale, travail, efficacité, ambition, reconnaissance, succès professionnel." },
      { kicker:"Valeurs liées à la vie et au corps", lead:"Santé, vitalité, bien-être, hygiène, sécurité physique, énergie, longévité, nature, beauté, plaisir de vivre." },
      { kicker:"Valeurs de réalisation et contribution", lead:"Créativité, innovation, compétence, excellence, service, contribution, responsabilité sociale, engagement, altruisme, générosité, coopération, justice, égalité." },
      { kicker:"Valeurs spirituelles et existentielles", lead:"Foi, sagesse, espoir, paix intérieure, gratitude, harmonie, pardon, connexion au sacré, transcendance, émerveillement, sens de la vie." }
    ]
  },

  { id:"ref_dogmes", type:"REF", title:"Conditionnements et dogmes", subtitle:"Définition + exemples",
    content: [
      { kicker:"Définition", lead:"Croyances héritées (familiales, sociétales, religieuses, culturelles) qui dictent nos comportements." },
      { kicker:"Exemples", lead:"« Il faut souffrir pour réussir. » « Un homme ne pleure pas. » « Tu dois obéir pour être aimé. »" },
      { kicker:"Message clé", lead:"La liberté intérieure naît quand on met en lumière ces conditionnements et qu’on choisit consciemment de s’en détacher." }
    ]
  },

  { id:"ref_dogmes_listes", type:"REF", title:"Conditionnements & dogmes (listes)", subtitle:"Catégories",
    content: [
      { kicker:"Familiaux", lead:"« Sois sage et tais-toi. » « Un enfant doit obéir. » « On ne parle pas de nos problèmes à l’extérieur. » ..." },
      { kicker:"Sociaux et culturels", lead:"« Il faut travailler dur pour réussir. » « Il faut toujours être occupé pour avoir de la valeur. » ..." },
      { kicker:"Religieux et spirituels", lead:"« Tu dois souffrir pour mériter le salut. » « Le plaisir est un péché. » ..." },
      { kicker:"Genre et rôle social", lead:"« Un homme ne pleure pas. » « Une femme doit être parfaite. » ..." },
      { kicker:"Éducatifs et scolaires", lead:"« Si tu échoues, tu es nul. » « L’erreur est interdite. » ..." },
      { kicker:"Psychologiques et relationnels", lead:"« Si tu dis non, on ne t’aimera plus. » « Les conflits détruisent les relations. » ..." },
      { kicker:"Intérieurs (auto-dogmes)", lead:"« Je dois être parfait pour avoir de la valeur. » « Je ne suis pas assez bien. » ..." }
    ]
  },

  { id:"ref_sources", type:"REF", title:"Référence", subtitle:"Source mentionnée",
    content: [{ kicker:"Référence", lead:"Blessures / émotions : Lise Bourbeau (mention du support)." }]
  },
];

const NAV = [
  { section:"Vue d’ensemble", items:["home"] },
  { section:"Socles", items:["socle_confort","socle_blessures","socle_empathie"] },
  { section:"Blessures", items:["w_rejet","w_abandon","w_humiliation","w_trahison","w_injustice"] },
  { section:"Sentiments (référentiels)", items:[
    "ref_sentiments_expansifs","ref_peur_insecurite","ref_colere_frustration",
    "ref_tristesse_perte","ref_injustice_humiliation","ref_ouverture_connexion"
  ]},
  { section:"Addictions / Valeurs / Dogmes", items:[
    "ref_addictions","ref_add_substances","ref_add_comportementales","ref_add_invisibles",
    "ref_valeurs","ref_valeurs_listes","ref_dogmes","ref_dogmes_listes"
  ]},
  { section:"Empathie (impacts)", items:["impact_apathie","impact_empathie"] },
  { section:"Référence", items:["ref_sources"] }
];

const navEl = document.getElementById("nav");
const mainEl = document.getElementById("main");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const menuBtn = document.getElementById("menuBtn");
const backdrop = document.getElementById("backdrop");
const logoBtn = document.getElementById("logoBtn");

function escapeHTML(str){
  return String(str)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

const getPage = (id) => PAGES.find(p => p.id === id);

function getRoute(){
  return (location.hash || "#home").slice(1);
}
function go(id){
  location.hash = "#" + id;
}

function setMenu(open){
  navEl.setAttribute("data-open", open ? "true" : "false");
  backdrop.setAttribute("data-open", open ? "true" : "false");
}

menuBtn.addEventListener("click", () => {
  const open = navEl.getAttribute("data-open") === "true";
  setMenu(!open);
});
backdrop.addEventListener("click", () => setMenu(false));
document.addEventListener("keydown", (e) => { if(e.key === "Escape") setMenu(false); });

logoBtn.addEventListener("click", () => go("home"));

function renderNav(currentId){
  navEl.innerHTML = "";
  NAV.forEach(group => {
    const wrap = document.createElement("div");
    wrap.className = "navSection";
    wrap.innerHTML = '<div class="navTitle">' + escapeHTML(group.section) + '</div>';

    group.items.forEach(id => {
      const p = getPage(id);
      if(!p) return;
      const btn = document.createElement("button");
      btn.className = "navItem";
      btn.type = "button";
      btn.setAttribute("aria-current", id === currentId ? "page" : "false");
      btn.innerHTML =
        escapeHTML(p.title) +
        '<span class="navSmall">' + escapeHTML(p.subtitle || "") + '</span>';
      btn.addEventListener("click", () => { go(id); setMenu(false); });
      wrap.appendChild(btn);
    });

    navEl.appendChild(wrap);
  });
}

function renderHome(){
  const tiles = [
    { title:"Commencer par les Socles", id:"socle_confort", desc:"Confort → Peur → Apprentissage → Expansion." },
    { title:"Cadre des blessures", id:"socle_blessures", desc:"Apathie = fermeture protectrice ; empathie = réouverture." },
    { title:"Blessures émotionnelles", id:"w_rejet", desc:"Grille stable : émotion → origine → masque → apathie → addictions → valeurs → dogmes → croyances." },
    { title:"Référentiels", id:"ref_addictions", desc:"Sentiments, addictions, valeurs, dogmes." }
  ];

  mainEl.innerHTML =
    '<div class="card">' +
      '<div class="kicker">Sommaire</div>' +
      '<div class="lead">Support de formation — La méthode FIDES</div>' +
      '<p>Accès par structure : socles, blessures, référentiels.</p>' +
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

function renderSocle(page){
  let html = "";
  (page.content || []).forEach(b => {
    html += '<div class="card">';
    html += '<div class="kicker">' + escapeHTML(b.kicker || "Section") + '</div>';
    html += '<div class="lead">' + escapeHTML(b.lead || "") + '</div>';
    if(b.text) html += '<p>' + escapeHTML(b.text) + '</p>';
    if(b.bullets && b.bullets.length){
      html += '<ul>';
      b.bullets.forEach(x => { html += '<li>' + escapeHTML(x) + '</li>'; });
      html += '</ul>';
    }
    html += '</div>';
  });
  mainEl.innerHTML = html;
}

function renderBlessure(page){
  mainEl.innerHTML =
    '<div class="card">' +
      '<div class="kicker">Blessure</div>' +
      '<div class="lead">' + escapeHTML(page.title) + '</div>' +
      '<p>' + escapeHTML(page.subtitle || "") + '</p>' +
    '</div>' +
    '<div class="woundGrid">' +
      (page.grid || []).map(([k,v]) =>
        '<div class="row">' +
          '<div class="label">' + escapeHTML(k) + '</div>' +
          '<div class="value">' + escapeHTML(v) + '</div>' +
        '</div>'
      ).join("") +
    '</div>';
}

function renderRef(page){
  renderSocle(page);
}

function render(){
  const id = getRoute();
  const page = getPage(id) || getPage("home");

  pageTitle.textContent = page.title || "La méthode FIDES";
  pageSubtitle.textContent = page.subtitle || "";

  renderNav(page.id);

  if(page.type === "HOME") renderHome();
  else if(page.type === "SOCLE") renderSocle(page);
  else if(page.type === "BLESSURE") renderBlessure(page);
  else if(page.type === "REF") renderRef(page);
  else renderHome();
}

window.addEventListener("hashchange", render);
if(!location.hash) location.hash = "#home";
render();
