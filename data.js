/* data.js — données pédagogiques
   Contient :
   - SENTIMENTS
   - joinSentiments
   - EMOTION_TO_SENTIMENTS
   - PAGES
   - NAV
*/

"use strict";

/* ----------------------------- Données sources ----------------------------- */

const SENTIMENTS = Object.freeze({
  expansifs:
    "Joie, Amour, Sérénité, Gratitude, Confiance, Inspiration, Espoir, Enthousiasme, Curiosité, Fierté, Admiration, Tendresse, Satisfaction, Soulagement, Amusement.",
  peur_insecurite:
    "Anxiété, Inquiétude, Stress, Méfiance, Doute, Crainte, Panique, Impuissance, Inconfort, Tension, Sentiment d’insécurité, Surprise.",
  colere_frustration:
    "Agacement, Irritation, Frustration, Colère, Rancune, Haine, Exaspération, Hostilité, Jalousie, Ressentiment, Envie, Dégoût.",
  tristesse_perte:
    "Mélancolie, Nostalgie, Chagrin, Solitude, Découragement, Déception, Vide intérieur, Abattement, Désespoir, Impuissance, Larmes intérieures.",
  injustice_humiliation:
    "Honte, Culpabilité, Sentiment d’échec, Infériorité, Dévalorisation, Indignité, Injustice, Rigidité intérieure.",
  ouverture_connexion:
    "Compassion, Empathie, Ouverture, Intimité, Communion, Alignement, Paix intérieure, Liberté, Expansion, Sens du sacré.",
});

function joinSentiments(...keys) {
  return keys.map((key) => SENTIMENTS[key]).join(" ");
}

const EMOTION_TO_SENTIMENTS = Object.freeze({
  joie: joinSentiments("expansifs", "ouverture_connexion"),
  tristesse: SENTIMENTS.tristesse_perte,
  peur: SENTIMENTS.peur_insecurite,
  degout: SENTIMENTS.injustice_humiliation,
  surprise: "Surprise, Méfiance, Doute, Inquiétude, Crainte, Sentiment d’insécurité",
  colere_interieure: SENTIMENTS.colere_frustration,
});

/* ---------------------------- Pages (contenu) ---------------------------- */

const PAGES = [
  // ACCUEIL
  {
    id: "home",
    type: "HOME",
    title: "Vue d’ensemble",
    subtitle: "Bases • Blessures • Comportements",
  },

  // BASES
  {
    id: "base_confort",
    type: "BASE",
    title: "Le cercle de la zone de confort",
    subtitle: "Confort → Peur → Apprentissage → Expansion",
    content: [
      {
        kicker: "But pédagogique",
        lead: "Montrer les différentes zones.",
        bullets: [
          "Zone de confort = sécurité illusoire, répétition des habitudes, évitement de l’inconfort.",
          "Zone de peur = doutes, jugements des autres, perte de repères.",
          "Zone d’apprentissage = nouvelles compétences, élargissement de soi, expérimentation.",
          "Zone d’expansion = réalisation de soi, alignement avec sa valeur, contribution au monde.",
        ],
      },
      {
        kicker: "Message clé",
        lead: "Pour avancer, il faut oser franchir la peur et passer par l’apprentissage.",
        text: "Sans ce passage, on reste prisonnier de l’illusion de sécurité.",
      },
    ],
  },

  {
    id: "base_blessures",
    type: "BASE",
    title: "Les blessures émotionnelles (cadre)",
    subtitle: "Apathie ↔ empathie",
    content: [
      {
        kicker: "Constat",
        lead: "Quand une blessure s’active, l’apathie prend le dessus.",
        text:
          "Dans ce contexte, l’apathie n’est pas une absence d’émotion au sens médical, mais un état de fermeture émotionnelle qui se met en place lorsqu’une douleur ancienne se réveille.",
      },
      {
        kicker: "Fonction",
        lead: "Réaction inconsciente de protection / mode de survie émotionnel.",
        text: "C’est une réaction inconsciente de protection que la personne adopte pour ne plus souffrir.",
      },
      {
        kicker: "Direction",
        lead: "Retrouver l’ouverture de conscience.",
        text:
          "L’objectif est de passer de la fermeture à l’ouverture de conscience — vers l’acceptation de soi et de l’autre, sans jugement.",
      },
      {
        kicker: "Finalité",
        lead: "Retrouver la connexion.",
        text: "Retrouver la connexion à soi, à l’autre et à la vie.",
      },
      {
        kicker: "Lien avec les comportements",
        lead: "Ce que l’on observe dans le quotidien.",
        text:
          "Quand une blessure émotionnelle s’active, la personne cherche inconsciemment à éviter l’émotion ressentie. Les comportements observables (addictions, valeurs affichées, dogmes et croyances) deviennent souvent des stratégies de protection. Les comprendre aide à identifier la blessure à l’origine et à ouvrir un chemin de transformation.",
      },
    ],
  },

  {
    id: "base_empathie",
    type: "BASE",
    title: "L’empathie",
    subtitle: "Résonance sans fusion",
    content: [
      {
        kicker: "Définition",
        lead: "Capacité à se mettre en résonance avec l’émotion de l’autre, sans se confondre avec elle.",
      },
      {
        kicker: "Différences",
        lead: "Empathie / compassion / sympathie",
        bullets: [
          "Empathie vs compassion : l’une ressent, l’autre agit.",
          "Empathie vs sympathie : l’une écoute, l’autre se projette.",
        ],
      },
      {
        kicker: "Freins (blessures)",
        lead: "Les blessures voilent l’empathie.",
        bullets: [
          "Rejet : envie de s’isoler, se couper.",
          "Injustice : rigidité, contrôle de soi.",
          "Trahison : méfiance, suspicion.",
          "Humiliation : honte, fuite du contact.",
          "Abandon : besoin de combler son vide avant d’écouter.",
        ],
      },
      {
        kicker: "Message clé",
        lead: "L’empathie est naturelle, mais elle est voilée par nos blessures.",
      },
      {
        kicker: "Conséquences",
        lead: "Conséquences de l’absence d’empathie (apathie) — Synthèse (support)",
        bullets: [
          "Bien-être personnel fragilisé : sentiment de vide, anxiété, isolement émotionnel, perte de confiance.",
          "Fermeture aux autres : indifférence, incapacité d’aider, égocentrisme.",
          "Relations superficielles et fragiles : difficulté à créer des liens profonds, solitude.",
          "Santé affectée : émotions refoulées, tensions chroniques, troubles psychosomatiques.",
          "Travail : leadership autoritaire, manque de coopération, climat de rivalité.",
          "Conflits : rancunes accumulées, communication fermée, ruptures relationnelles.",
          "Vie familiale et amoureuse : relations distantes, risque de séparation.",
          "Éducation : climat rigide, découragement, comportements agressifs.",
          "Société : individualisme, perte de solidarité, polarisation.",
          "Impact existentiel : difficulté à donner du sens, blocage intérieur, repli sur ses peurs.",
        ],
      },
      {
        kicker: "Conséquences positives",
        lead: "Conséquences positives de l’empathie — Synthèse (support)",
        bullets: [
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
          "Harmonie : réduction des préjugés, cohésion sociale renforcée.",
        ],
      },
    ],
  },

  // BLESSURES
  {
    id: "w_joie",
    type: "BLESSURE",
    title: "État : joie",
    subtitle: "Absence de blessure activée",
    grid: [
      ["Émotion racine", "Joie."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.joie],
      ["Cadre", "Absence de blessure activée."],
    ],
  },

  {
    id: "w_rejet",
    type: "BLESSURE",
    title: "Blessure : rejet",
    subtitle: "Émotion : tristesse",
    grid: [
      ["Émotion racine", "Tristesse."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.tristesse],
      [
        "Origine",
        "Souvent très tôt (indiqué : parfois dans le ventre de la mère). Sentiment de ne pas avoir sa place, de déranger, d’être de trop.",
      ],
      [
        "Masque / comportement",
        "Masque du fuyant. Tendance à se retirer, se couper, se rendre invisible. Difficulté à s’affirmer, peur de déranger. Caméléon, s’adapte. Tristesse non exprimée.",
      ],
      [
        "Apathie / empathie",
        "Difficulté à s’ouvrir par peur d’être ignoré. Peut se couper des autres pour éviter de revivre le rejet.",
      ],
      ["Addictions", "Isolement, écrans, alimentation compulsive discrète. Addictions solitaires."],
      ["Dogmes", "« Je dois rester invisible pour être accepté. » « Si je me montre, je dérange. »"],
      ["Valeurs", "Sécurité intérieure, acceptation de la différence de l’autre, autonomie, foi en la vie et en l’humain, amour."],
      [
        "Croyances limitantes",
        "« Je n’ai pas ma place. » « Je ne suis pas digne d’être vu. » (et formulations du type « ce n’est pas grave », « c’est normal »).",
      ],
      [
        "Croyances expansives",
        "« Ma présence suffit pour être aimé. » « J’ai une place unique et légitime. » « J’ose m’exprimer dans mes sentiments. »",
      ],
    ],
  },

  {
    id: "w_abandon",
    type: "BLESSURE",
    title: "Blessure : abandon",
    subtitle: "Émotion : peur",
    grid: [
      ["Émotion racine", "Peur."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.peur],
      [
        "Origine",
        "Sentiment d’être laissé seul, manques affectifs dans l’enfance. Difficultés à exister sans la présence rassurante d’autrui. Manque d’autonomie.",
      ],
      [
        "Masque / comportement",
        "Masque du dépendant. Fusion, peur de la solitude, besoin excessif de soutien. Enfantin. Peut dire qu’il se sent bien seul et qu’il n’a besoin de personne.",
      ],
      ["Apathie / empathie", "Confond souvent empathie et fusion. Donne trop, dans l’espoir d’éviter d’être abandonné."],
      ["Addictions", "Dépendances affectives, relations, réseaux sociaux, alcool. Tout ce qui comble le vide intérieur."],
      ["Dogmes", "« Je dois toujours être avec quelqu’un pour exister. » « Si je suis seul, je ne vaux rien. »"],
      ["Valeurs", "Amour, proximité, lien, chaleur humaine, partage."],
      ["Croyances limitantes", "« Je finis toujours seul. » « Personne ne reste jamais avec moi. »"],
      [
        "Croyances expansives",
        "« Je suis complet même dans la solitude. » « Je peux créer des liens stables et nourrissants. » « Plus besoin de béquille (addiction) pour accepter la réalité. »",
      ],
    ],
  },

  {
    id: "w_humiliation",
    type: "BLESSURE",
    title: "Blessure : humiliation",
    subtitle: "Émotion : dégoût",
    grid: [
      ["Émotion racine", "Dégoût."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.degout],
      [
        "Origine",
        "Honte, dévalorisation, humiliation dans l’enfance. Souvent liée à l’éducation stricte / regard social ou familial.",
      ],
      [
        "Masque / comportement",
        "Masque du masochiste. Se rabaisser, se sacrifier, se punir. Regrets, remords, culpabilité. Anticipe les besoins des autres sans accord.",
      ],
      ["Apathie / empathie", "Freinée par la honte — peur de montrer sa vulnérabilité."],
      ["Addictions", "Nourriture, sexualité, auto-sabotage. Excès pour compenser la honte."],
      ["Dogmes", "« Je dois me sacrifier pour les autres. » « Je ne dois pas exister pleinement. »"],
      ["Valeurs", "Respect, dignité, authenticité."],
      ["Croyances limitantes", "« Je ne mérite pas d’être heureux. » « Je dois porter la honte. »"],
      ["Croyances expansives", "« Je mérite le respect et la joie de vivre. » « Je peux exister avec dignité. »"],
    ],
  },

  {
    id: "w_trahison",
    type: "BLESSURE",
    title: "Blessure : trahison",
    subtitle: "Émotion : surprise",
    grid: [
      ["Émotion racine", "Surprise."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.surprise],
      [
        "Origine",
        "Expérience de trahison réelle ou vécue comme telle (parent absent, infidélité, promesse non tenue). Perte de confiance dans l’autre et dans l’humanité.",
      ],
      ["Âge d’ancrage", "6–7 ans (indiqué)."],
      [
        "Masque / comportement",
        "Masque du contrôlant. Cassant, exigeant. Besoin de tout vérifier, d’imposer sa volonté. Difficulté à lâcher prise.",
      ],
      ["Apathie / empathie", "Méfiance, contrôle ou test permanent de l’autre."],
      ["Addictions", "Pouvoir, contrôle, réussite, domination. Travail ou sport comme moyen de ne pas perdre la main."],
      ["Dogmes", "« On ne peut faire confiance à personne. » « Il faut tout contrôler. » « N’aime pas avoir tort. » « N’aime pas perdre. »"],
      ["Valeurs", "Loyauté, fidélité, vérité, apparence/paraître, argent (statut social, entourage, savoir)."],
      [
        "Croyances limitantes",
        "« Les autres vont forcément me trahir. » « Je dois garder le contrôle. » « Où est la performance concrète ? » « Il faut le voir pour y croire. »",
      ],
      [
        "Croyances expansives",
        "« Je me détache du résultat, car le chemin compte. » « Laisser à l’autre le bénéfice du doute. » « J’accepte l’autre tel qu’il est. »",
      ],
    ],
  },

  {
    id: "w_injustice",
    type: "BLESSURE",
    title: "Blessure : injustice",
    subtitle: "Émotion : colère intérieure",
    grid: [
      ["Émotion racine", "Colère intérieure (maintenue par peur de blesser/détruire l’autre)."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.colere_interieure],
      ["Origine", "Éducation stricte, froide, où l’amour dépend de la performance. Jugement/comparaison."],
      [
        "Masque / comportement",
        "Masque du rigide. Perfectionnisme, dureté avec soi et les autres. Besoin de justice, refus de l’imperfection.",
      ],
      ["Apathie / empathie", "Rigidité : difficulté à se laisser toucher ou à montrer ses failles."],
      ["Addictions", "Travail excessif, perfectionnisme, hyper-contrôle sur soi."],
      ["Dogmes", "« Il faut être parfait pour être aimé. » « Je ne dois rien laisser paraître. »"],
      ["Valeurs", "Justice, équité, intégrité, vérité."],
      ["Croyances limitantes", "« Je dois toujours prouver ma valeur. » « Je ne peux pas me montrer imparfait. »"],
      ["Croyances expansives", "« Je peux être aimé tel que je suis. » « Ma valeur est innée et indépendante de mes performances. »"],
    ],
  },

  // COMPORTEMENTS
{
  id: "ref_addictions",
  type: "REF",
  title: "Addictions",
  subtitle: "Définition & typologies",
  grid: [
    [
      "Définition",
      "Comportements répétitifs visant à éviter une émotion (substance, relation, travail, écrans, etc.)."
    ],
    [
      "Addictions visibles",
      "Alcool, drogues, jeux, nourriture, sexe."
    ],
    [
      "Addictions invisibles",
      "Perfectionnisme, contrôle, hyperactivité, réseaux sociaux."
    ],
    [
      "Message clé",
      "L’addiction n’est pas une faute morale, mais un signe d’une émotion qui demande à être reconnue."
    ],
  ],
},
  {
    id: "ref_add_substances",
    type: "REF",
    title: "Addictions aux substances",
    subtitle: "Manifestations visibles",
    grid: [
      ["Liste", "Alcool, Tabac, Cannabis, Cocaïne, Héroïne, Amphétamines, Ecstasy, Médicaments psychotropes, Antidouleurs, Caféine, Sucre."],
    ],
  },

  {
    id: "ref_add_comportementales",
    type: "REF",
    title: "Addictions comportementales",
    subtitle: "Manifestations concrètes",
    grid: [
      ["Liste", "Jeux d’argent, Jeux vidéo, Internet, Réseaux sociaux, Téléphone portable, Télévision, Achats compulsifs, Travail, Sport, Sexe, Amour, Relations toxiques, Nourriture, Régimes, Automutilation."],
    ],
  },

  {
    id: "ref_add_invisibles",
    type: "REF",
    title: "Addictions plus invisibles",
    subtitle: "Manifestations discrètes",
    grid: [
      ["Liste", "Perfectionnisme, Contrôle, Besoin de reconnaissance, Hyperactivité, Dépendance à l’adrénaline, Dépendance spirituelle, Dépendance émotionnelle."],
    ],
  },
{
  id: "ref_valeurs",
  type: "REF",
  title: "Valeurs de vie",
  subtitle: "Repères & piliers",
  grid: [
    [
      "Définition",
      "Repères intérieurs qui guident nos choix."
    ],
    [
      "Repère central",
      "Une valeur profonde soutient nos choix, nos priorités et notre manière de vivre."
    ],
    [
      "4 piliers universels",
      "Santé, famille/proches, argent/sécurité financière, amour/relations."
    ],
    [
      "Valeurs personnelles",
      "Authenticité, liberté, indépendance, responsabilité, courage, simplicité, persévérance, discipline, dépassement de soi, savoir, croissance personnelle, équilibre."
    ],
    [
      "Valeurs relationnelles et familiales",
      "Famille, amour, couple, amitié, bienveillance, fidélité, loyauté, solidarité, transmission, respect, tolérance, partage."
    ],
    [
      "Valeurs matérielles et financières",
      "Argent, sécurité matérielle, confort, abondance, stabilité économique, réussite sociale, travail, efficacité, ambition, reconnaissance, succès professionnel."
    ],
    [
      "Valeurs liées à la vie et au corps",
      "Santé, vitalité, bien-être, hygiène, sécurité physique, énergie, longévité, nature, beauté, plaisir de vivre."
    ],
    [
      "Valeurs de réalisation et contribution",
      "Créativité, innovation, compétence, excellence, service, contribution, responsabilité sociale, engagement, altruisme, générosité, coopération, justice, égalité."
    ],
    [
      "Valeurs spirituelles et existentielles",
      "Foi, sagesse, espoir, paix intérieure, gratitude, harmonie, pardon, connexion au sacré, transcendance, émerveillement, sens de la vie."
    ],
    [
      "Travail pratique",
      "Identifier ses valeurs prioritaires et vérifier l’alignement actions/valeurs."
    ],
    [
      "Message clé",
      "Aligner ses actions avec ses vraies valeurs permet de sortir des schémas hérités."
    ],
  ],
},
{
  id: "ref_dogmes",
  type: "REF",
  title: "Conditionnements & dogmes",
  subtitle: "Repères & tendances",
  grid: [
    [
      "Définition",
      "Croyances héritées (familiales, sociétales, religieuses, culturelles) qui dictent nos comportements."
    ],
    [
      "Repère central",
      "Un conditionnement agit comme une règle intériorisée qui influence nos réactions, souvent sans que nous en ayons conscience."
    ],
    [
      "Familiaux",
      "« Sois sage et tais-toi. » « Un enfant doit obéir. » « On ne parle pas de nos problèmes à l’extérieur. » ..."
    ],
    [
      "Sociaux et culturels",
      "« Il faut travailler dur pour réussir. » « Il faut toujours être occupé pour avoir de la valeur. » ..."
    ],
    [
      "Religieux et spirituels",
      "« Tu dois souffrir pour mériter le salut. » « Le plaisir est un péché. » ..."
    ],
    [
      "Genre et rôle social",
      "« Un homme ne pleure pas. » « Une femme doit être parfaite. » ..."
    ],
    [
      "Éducatifs et scolaires",
      "« Si tu échoues, tu es nul. » « L’erreur est interdite. » ..."
    ],
    [
      "Psychologiques et relationnels",
      "« Si tu dis non, on ne t’aimera plus. » « Les conflits détruisent les relations. » ..."
    ],
    [
      "Intérieurs (auto-dogmes)",
      "« Je dois être parfait pour avoir de la valeur. » « Je ne suis pas assez bien. » ..."
    ],
    [
      "Message clé",
      "La liberté intérieure naît quand on met en lumière ces conditionnements et qu’on choisit consciemment de s’en détacher."
    ],
  ],
},
  // RÉFÉRENCES
  {
    id: "ref_sources",
    type: "REF",
    title: "Références",
    subtitle: "Source",
    grid: [
      [
        "Source d’inspiration",
        "La lecture des cinq blessures fondamentales — rejet, abandon, humiliation, trahison et injustice — ainsi que des masques relationnels qui leur sont classiquement associés, trouve un appui dans les travaux de Lise Bourbeau, en particulier dans l’ouvrage Les 5 blessures qui empêchent d’être soi-même.",
      ],
      [
        "Élaboration de la Méthode FIDES",
        "La structuration pédagogique présentée sur ce site, l’identification des émotions racines, l’articulation entre blessures, comportements compensatoires, valeurs de vie, conditionnements, dogmes de comportement et croyances limitantes relèvent de la Méthode FIDES.",
      ],
      [
        "Protection et usage",
        "Copyright, tous droits réservés. La méthode FIDES constitue une création protégée au titre de la propriété intellectuelle. Sa transmission, son enseignement et son utilisation s’inscrivent dans le cadre défini par sa fondatrice et concernent exclusivement les personnes autorisées.",
      ],
    ],
  },
];

/* ---------------------------- Navigation (UI) ----------------------------- */

const NAV = [
  { section: "Vue d’ensemble", items: ["home"] },
  { section: "Bases", items: ["base_confort", "base_blessures", "base_empathie"] },
  { section: "Blessures", items: ["w_joie", "w_rejet", "w_abandon", "w_humiliation", "w_trahison", "w_injustice"] },
  { section: "Comportements", items: ["ref_addictions", "ref_add_substances", "ref_add_comportementales", "ref_add_invisibles", "ref_valeurs", "ref_valeurs_listes", "ref_dogmes", "ref_dogmes_listes"] },
  { section: "Références", items: ["ref_sources"] },
];
