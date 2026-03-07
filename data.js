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
    "Anxiété, Inquiétude, Stress, Doute, Crainte, Impuissance, Inconfort, Tension, Sentiment d’insécurité, Infériorité.",
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
  surprise: "Méfiance, supériorité, incompréhension, impatience",
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
  subtitle: "Du confort à l’ouverture",
  content: [
    {
      kicker: "Définition",
      lead: "La zone de confort ne parle pas seulement d’habitudes extérieures.",
      text: "La zone de confort correspond à un espace connu, prévisible et émotionnellement balisé. Elle donne une impression de sécurité, car elle évite l’inconnu, limite l’exposition et permet de rester dans des réactions déjà maîtrisées. Elle peut rassurer à court terme, mais elle entretient aussi les anciens réflexes de protection."
    },
    {
      kicker: "Point de départ",
      lead: "On ne quitte pas tous sa zone de confort de la même manière.",
      text: "La manière de vivre le confort, la peur, l’apprentissage et l’expansion dépend fortement des blessures prédominantes. Selon la personnalité intérieure, l’inconnu sera vécu comme une menace de perte de contrôle, de perte de lien, de rejet, d’exposition, d’échec ou d’atteinte à sa valeur. La sortie de zone de confort est donc toujours aussi un passage émotionnel."
    },
    {
      kicker: "Personnalité prédominante surprise / peur",
      lead: "Le confort protège surtout de l’insécurité, de l’imprévu et de la perte de maîtrise.",
      text: "Dans cette personnalité, la zone de confort prend souvent la forme d’un cadre contrôlé, prévisible, vérifiable et rassurant. La personne supporte difficilement l’incertitude, l’improvisation, la dépendance ou l’absence de garantie. Sortir du confort réveille vite la vigilance, l’anticipation, la tension ou le besoin de garder la main. La peur pousse à chercher un appui. La surprise pousse à reprendre le contrôle. Le dégoût peut aussi apparaître quand la personne se sent envahie, déstabilisée ou confrontée à une faiblesse qu’elle refuse."
    },
    {
      kicker: "Personnalité prédominante tristesse / colère intérieure",
      lead: "Le confort protège surtout du regard, de l’exposition, du jugement et de la blessure intérieure.",
      text: "Dans cette personnalité, la zone de confort prend souvent la forme du retrait, de la discrétion, de l’auto-contrôle, de l’habitude ou d’un environnement où la personne risque moins d’être atteinte. Sortir du confort réveille plus facilement le doute, l’effacement, la crispation intérieure, la peur d’être de trop ou de ne pas être à la hauteur. La tristesse pousse au repli. La colère intérieure pousse à la rigidité, à l’exigence et à la retenue émotionnelle. Le dégoût peut aussi apparaître ici sous forme de honte, de rejet de soi ou de refus de ce qui semble imparfait, vulnérable ou exposé."
    },
    {
      kicker: "Zone de confort",
      lead: "Ce qui est connu semble sûr, même quand cela limite.",
      text: "La zone de confort correspond à ce que l’on connaît déjà : habitudes, rôles familiers, environnements prévisibles, réactions déjà utilisées. Elle peut donner une impression de stabilité, mais elle entretient aussi la répétition, l’évitement et l’illusion de sécurité. On y reste souvent moins par élan que par besoin de ne pas ressentir ce que l’inconnu pourrait réveiller."
    },
    {
      kicker: "Zone de peur",
      lead: "Le passage où l’ancien cadre commence à lâcher.",
      text: "Dès qu’une personne sort de ses repères habituels, une zone de peur apparaît. Elle peut prendre la forme du doute, du stress, du regard des autres, de la peur de l’échec, de la perte de contrôle, du rejet ou de l’exposition. Cette étape est normale : elle signale que quelque chose d’ancien est remis en question. Selon le profil dominant, cette peur prendra plutôt la forme du contrôle, du repli, de la sidération, de la tension ou du besoin d’être rassuré."
    },
    {
      kicker: "Zone d’apprentissage",
      lead: "L’espace où l’on expérimente autrement.",
      text: "Dans cette zone, la personne commence à tester de nouvelles manières d’agir, de ressentir, de se positionner et de répondre à la vie. Elle développe des compétences, élargit sa lecture, découvre ses mécanismes et apprend à traverser l’inconfort sans revenir immédiatement aux anciens réflexes. C’est une zone exigeante, mais profondément transformatrice."
    },
    {
      kicker: "Zone d’expansion",
      lead: "Quand l’être prend plus de place sans se trahir.",
      text: "La zone d’expansion correspond à une ouverture plus grande : plus de liberté intérieure, plus d’alignement, plus de présence et plus de capacité à agir avec justesse. La personne ne fonctionne plus uniquement à partir de ses anciens réflexes de protection. Elle ose davantage, tout en restant reliée à elle-même. L’expansion n’est pas une performance : c’est un déploiement plus conscient."
    },
    {
      kicker: "Clé de lecture",
      lead: "Ce qui freine n’est pas seulement l’extérieur.",
      text: "Le vrai frein n’est pas seulement la nouveauté, mais ce que cette nouveauté réveille intérieurement. Rester dans le confort protège à court terme, mais limite l’évolution. Traverser la peur permet d’entrer dans l’apprentissage, puis dans l’expansion. La question utile n’est donc pas seulement “qu’est-ce qui me fait peur ?”, mais aussi “qu’est-ce que je protège en restant ici ?”."
    },
    {
      kicker: "Message clé",
      lead: "La peur n’est pas forcément un stop.",
      text: "Sortir de sa zone de confort ne consiste pas à se forcer brutalement, mais à reconnaître ce qui se ferme en soi, à comprendre ce qui cherche à se protéger, puis à avancer avec plus de conscience. C’est ainsi que l’apprentissage devient possible et que l’expansion peut se vivre sans violence intérieure."
    },
  ],
},

{
  id: "base_blessures",
  type: "BASE",
  title: "Les blessures émotionnelles",
  subtitle: "Blessures prédominantes & personnalité",
  content: [
    {
      kicker: "Définition",
      lead: "Une blessure émotionnelle amène à des comportements dysfonctionnels.",
      text: "Une blessure émotionnelle colore la perception de soi, de l’autre et du monde. Lorsqu’elle s’active, elle influence les émotions, les comportements, les relations et les mécanismes de protection mis en place pour ne plus souffrir. Dans ce contexte, l’apathie ne désigne pas une absence d’émotion au sens médical, mais un état de fermeture émotionnelle qui se met en place lorsqu’une douleur ancienne se réveille."
    },
    {
      kicker: "Point de départ",
      lead: "Une même situation peut réveiller des réactions très différentes.",
      text: "Face à une situation, une remarque, un changement, une culpabilité ou une incertitude, etc... chaque personne réagit à travers ses blessures prédominantes. Ce filtre intérieur explique pourquoi deux personnes peuvent vivre la même situation de manière totalement différente. Quand une blessure s’active, la fermeture émotionnelle inconsciente prend le dessus."
    },
    {
      kicker: "Toutes les blessures existent chez chacun",
      lead: "La différence se joue dans la prédominance.",
      text: "Chaque être humain porte en lui les différentes blessures émotionnelles à des degrés variables. La différence ne tient pas à la présence ou à l’absence d’une blessure, mais à celles qui s’activent le plus souvent, prennent le plus de place et organisent le fonctionnement habituel."
    },
    {
      kicker: "Blessures prédominantes",
      lead: "Elles donnent la tonalité principale de la personnalité.",
      text: "Une ou deux blessures dominantes orientent souvent la manière de se protéger, de créer du lien, de réagir au stress ou à la panique, d’éviter la douleur ou de chercher de la sécurité. Les autres blessures restent présentes, mais elles occupent moins souvent le premier plan."
    },
    {
      kicker: "Personnalité prédominant surprise / peur",
      lead: "Quand la protection passe surtout par la vigilance, l’anticipation, le contrôle, la maîtrise, la validation ou chercher à être rassuré.",
      text: "Cette personnalité est souvent lié à des dominantes comme la trahison et l’abandon. La surprise pousse à se méfier et à reprendre le contrôle. La personne vit plus facilement l’inconnu comme un risque d’insécurité, de perte d’appui, de perte de contrôle ou de déception. Elle peut chercher à sécuriser le lien, vérifier, anticiper, contrôler, performer, garder la main ou éviter la dépendance. La peur pousse à chercher un point d’appui. Le dégoût peut aussi apparaître dans cette personnalité, notamment lorsque la personne rejette la faiblesse, la dépendance, l’imprévu ou ce qui lui donne le sentiment d’être envahie ou trahie."
    },
    {
      kicker: "Personnalité prédominant tristesse / colère intérieure",
      lead: "Quand la protection passe surtout par le retrait, l’auto-contrôle, la fermeture ou l’effacement.",
      text: "Cette personnalité est souvent lié à des dominantes comme le rejet et l’injustice. La personne vit plus facilement l’inconnu comme un risque d’être de trop, de ne pas avoir sa place, d’être jugée, blessée ou insuffisante. Elle peut se retirer, se couper, se durcir, se suradapter, viser l’irréprochable ou garder beaucoup à l’intérieur. La tristesse pousse au repli, à l’effacement ou au doute sur sa valeur. La colère intérieure pousse à la rigidité, à l’exigence et à la retenue émotionnelle. Le dégoût peut aussi apparaître ici, notamment sous forme de honte, de rejet de soi, de rejet du corps, de dévalorisation ou de refus de ce qui est ressenti comme sale, faible ou imparfait."
    },
    {
      kicker: "Lien avec les comportements",
      lead: "Ce que l’on observe dans le quotidien.",
      text: "Quand une blessure émotionnelle s’active, la personne cherche inconsciemment à éviter l’émotion ressentie ou à retrouver une forme de sécurité. Les comportements observables — addictions, valeurs affichées, dogmes, croyances, contrôle, retrait, hyperadaptation ou quête de reconnaissance — deviennent alors des stratégies de protection. Les comprendre aide à identifier la blessure à l’origine et à ouvrir un chemin de transformation."
    },
    {
      kicker: "Direction",
      lead: "Passer de la fermeture à l’ouverture de conscience.",
      text: "Le chemin n’est pas d’effacer ses blessures, mais de les reconnaître, de comprendre leur logique et de ne plus leur laisser diriger toute la vie intérieure. L’objectif est de passer de la fermeture à l’ouverture de conscience, vers l’acceptation de soi et de l’autre, sans jugement."
    },
    {
      kicker: "Finalité",
      lead: "Retrouver la connexion.",
      text: "Le but est de retrouver la connexion à soi, à l’autre et à la vie, avec plus de présence, de discernement, d’acceptation et de stabilité intérieure. Cette lecture prépare ensuite naturellement la compréhension de la zone de confort, de la peur, de l’apprentissage et de l’expansion."
    },
    {
      kicker: "Message clé",
      lead: "Tout le monde porte toutes les blessures, mais pas avec la même intensité.",
      text: "Comprendre ses blessures prédominantes aide à mieux lire ses réactions, ses comportements et ses blocages. C’est une porte d’entrée essentielle pour comprendre comment chacun vit ensuite sa zone de confort."
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
        lead: "Conséquences de l’absence d’empathie (apathie)",
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
        lead: "Conséquences positives de l’empathie",
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
   {
  id: "base_karpman",
  type: "BASE",
  title: "Le triangle de Karpman",
  subtitle: "Victime ↔ Sauveur ↔ Persécuteur",
  content: [
    {
      kicker: "Définition",
      lead: "Une grille de lecture des dynamiques relationnelles de survie.",
      text: "Le triangle de Karpman aide à repérer certaines postures relationnelles qui apparaissent quand une blessure s’active dans le lien. Il ne sert pas à enfermer une personne dans une étiquette, mais à observer des rôles qui peuvent se rejouer : Victime, Sauveur, Persécuteur. Une même personne peut passer de l’un à l’autre selon le contexte."
    },
    {
      kicker: "Lien avec les blessures",
      lead: "Chaque blessure dominante peut favoriser certaines entrées dans le triangle.",
      text: "Rejet → fuite silencieuse. Abandon → tendance à la Victime et au Sauveur-fusionnel. Humiliation → tendance au Sauveur sacrificiel. Trahison → tendance au Persécuteur-contrôlant ou au test permanent. Injustice → tendance au Persécuteur-rigide ou au juge intérieur."
    },
    {
      kicker: "Lecture pédagogique",
      lead: "Le rôle visible protège souvent une douleur plus profonde.",
      text: "Derrière ces postures, on retrouve souvent une tentative de se protéger, d’éviter une émotion ou de garder un lien. Lire ces dynamiques permet de mieux comprendre ce qui se joue dans la relation et d’ouvrir un chemin plus conscient, plus juste et plus libre."
    },
    {
      kicker: "Message clé",
      lead: "Le but n’est pas d’accuser, mais de comprendre.",
      text: "Repérer le triangle aide à sortir des réactions automatiques et à revenir à une posture plus responsable, plus lucide et plus alignée."
    },
  ],
},

  // BLESSURES
   {
  id: "w_joie",
  type: "BLESSURE",
  title: "État : JOIE",
  subtitle: "Absence de blessure activée",
  grid: [
    ["Émotion racine", "Joie."],
    ["Sentiments possibles", EMOTION_TO_SENTIMENTS.joie],
    ["Cadre", "Absence de blessure activée. État d’ouverture intérieure, de sécurité relationnelle et de présence à soi."],
    ["Manifestations concrètes", "Élan naturel, détente, respiration plus libre, capacité à apprécier l’instant, sentiment d’espace intérieur, disponibilité émotionnelle, fluidité dans les échanges."],
    ["Relation à soi", "Connexion simple à ses ressentis, accueil de ce qui est vécu, sentiment de légitimité, paix intérieure, confiance dans sa valeur propre."],
    ["Relation à l’autre", "Présence réelle, écoute ouverte, respect, capacité à aimer sans fusion, à donner sans se perdre et à recevoir sans méfiance."],
    ["Comportements alignés", "Authenticité, créativité, élan de vie, coopération, gratitude, humour, spontanéité, capacité à poser des choix clairs dans le respect de soi et de l’autre."],
    ["Lecture pédagogique", "La joie n’est pas une excitation permanente ni une obligation d’être bien. Elle correspond à un état intérieur plus libre, où la personne n’est plus dominée par une blessure et ses stratégies de protection."],
    ["Message clé", "Quand la blessure est traitée, l’être retrouve naturellement la sérénité."],
  ],
},

  {
    id: "w_rejet",
    type: "BLESSURE",
    title: "Blessure : REJET",
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
    title: "Blessure : ABANDON",
    subtitle: "Émotion : peur",
    grid: [
      ["Émotion racine", "Peur."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.peur],
      [
        "Origine",
        "Sentiment d’être seul, manques affectifs dans l’enfance. Difficultés à exister sans la présence rassurante d’autrui. Manque d’autonomie.",
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
    title: "Blessure : HUMILIATION",
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
    title: "Blessure : TRAHISON",
    subtitle: "Émotion : surprise",
    grid: [
      ["Émotion racine", "Surprise."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.surprise],
      [
        "Origine",
        "Expérience de trahison réelle ou vécue comme telle (parent absent, divorce, séparation, infidélité, promesse non tenue). Perte de confiance dans l’autre et dans l’humanité.",
      ],
      ["Âge d’ancrage", "6–7 ans."],
      [
        "Masque / comportement",
        "Masque du contrôlant. Cassant, exigeant. Besoin de tout vérifier, d’imposer sa volonté. Difficulté à lâcher prise.",
      ],
      ["Apathie / empathie", "Méfiance, contrôle ou test permanent de l’autre."],
      ["Addictions", "Pouvoir, contrôle, réussite, domination. Travail ou sport comme moyen de ne pas perdre la main."],
      ["Dogmes", "« On ne peut faire confiance à personne. » « Il faut tout contrôler. » « N’aime pas avoir tort. » « N’aime pas perdre. »"],
      ["Valeurs", "Loyauté, fidélité, vérité, famille, rapport au temps apparence/paraître, argent (statut social, entourage, savoir)."],
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
    title: "Blessure : INJUSTICE",
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
  subtitle: "Repères & typologies",
  grid: [
    [
      "Définition",
      "Comportements répétitifs ou besoins compulsifs utilisés pour éviter, anesthésier, compenser ou calmer une émotion inconfortable. L’addiction peut passer par une substance, une activité, une relation, une recherche de performance ou une habitude apparemment banale."
    ],
    [
      "Repère central",
      "L’addiction procure souvent un soulagement rapide, une impression de contrôle ou une coupure temporaire avec la douleur. En revanche, elle ne traite pas la blessure de fond : elle la masque, la reporte ou l’entretient."
    ],
    [
      "Fonction",
      "Elle peut servir à ne plus sentir un vide, une peur, une honte, une solitude, une colère intérieure ou une tension psychique. Elle peut aussi donner l’illusion de remplir, calmer, stimuler, contrôler, oublier, se rassurer ou se punir."
    ],
    [
      "Pourquoi c’est piégeant",
      "Le soulagement immédiat renforce le comportement. La personne associe alors inconsciemment l’addiction à une solution, alors qu’elle devient peu à peu une stratégie de survie émotionnelle qui prend de la place dans la vie quotidienne."
    ],
    [
      "Addictions aux substances",
      "Alcool, tabac, cannabis, cocaïne, héroïne, amphétamines, ecstasy, médicaments psychotropes, antidouleurs, caféine, sucre. Ces formes passent par l’ingestion, l’inhalation ou l’effet chimique recherché pour modifier rapidement l’état intérieur."
    ],
    [
      "Repères concrets (substances)",
      "Recherche d’apaisement rapide, besoin de “tenir”, difficulté à traverser certaines émotions sans produit, augmentation progressive de la fréquence, de la dose ou de la dépendance psychologique."
    ],
    [
      "Addictions comportementales",
      "Jeux d’argent, jeux vidéo, internet, réseaux sociaux, téléphone portable, télévision, achats compulsifs, travail, sport, sexe, amour, relations toxiques, nourriture, régimes, automutilation. Ici, ce n’est pas la substance qui domine, mais la répétition d’un comportement devenu refuge."
    ],
    [
      "Repères concrets (comportementales)",
      "Besoin de faire, consommer, vérifier, scroller, performer, séduire ou se distraire pour ne pas ressentir. Ces comportements donnent souvent une récompense immédiate, une stimulation, un apaisement ou une impression d’exister."
    ],
    [
      "Addictions plus invisibles",
      "Perfectionnisme, contrôle, besoin de reconnaissance, hyperactivité, dépendance à l’adrénaline, dépendance spirituelle, dépendance émotionnelle. Ces formes passent plus facilement pour des qualités, alors qu’elles peuvent aussi servir à éviter le contact avec une douleur profonde."
    ],
    [
      "Pourquoi elles passent inaperçues",
      "Parce qu’elles sont parfois valorisées socialement : être performant, toujours occupé, irréprochable, indispensable, admiré, “éveillé” ou très engagé peut sembler positif, alors que cela peut aussi cacher une fuite émotionnelle."
    ],
    [
      "Lecture pédagogique",
      "Plus une addiction devient nécessaire pour tenir, se calmer, se sentir vivant, se sentir aimé ou garder le contrôle, plus elle mérite d’être interrogée. La question utile n’est pas seulement “qu’est-ce que je fais ?”, mais aussi “qu’est-ce que cela m’aide à ne pas ressentir ?”."
    ],
    [
      "Lien avec les blessures",
      "Selon la blessure activée, la stratégie change : isolement, fusion, contrôle, perfectionnisme, compensation par le plaisir, recherche de pouvoir, besoin de remplir un vide. L’addiction n’est donc pas isolée : elle s’inscrit souvent dans une logique émotionnelle plus large."
    ],
    [
      "Message clé",
      "L’addiction n’est pas seulement un excès ou un manque de volonté. C’est souvent un signal : quelque chose en soi cherche à ne plus souffrir, à se protéger ou à survivre émotionnellement."
    ],
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
      "Repères intérieurs qui guident nos choix, nos priorités et notre manière de vivre."
    ],
    [
      "Repère central",
      "Une valeur profonde soutient nos choix, nos priorités et notre manière de vivre."
    ],
    [
      "Exemples",
      "Liberté, sécurité, amour, authenticité, réussite, famille, créativité, contribution, santé, foi, justice, loyauté, autonomie, paix intérieure."
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
      "Identifier ses valeurs prioritaires et vérifier si ses choix, ses relations et son quotidien sont alignés avec elles."
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
      "Croyances héritées (familiales, sociétales, religieuses, culturelles) qui influencent nos comportements, souvent sans que nous en ayons conscience."
    ],
    [
      "Repère central",
      "Un conditionnement agit comme une règle intériorisée qui influence nos réactions, souvent sans que nous en ayons conscience."
    ],
    [
      "Exemples",
      "« Il faut souffrir pour réussir. » « Un homme ne pleure pas. » « Tu dois obéir pour être aimé. » « Sois sage et tais-toi. » « L’erreur est interdite. » « Si tu dis non, on ne t’aimera plus. »"
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
         "Triangle de Karpman",
         "Le triangle de Karpman apporte une grille de lecture complémentaire des dynamiques relationnelles de survie. Son intégration dans ce site s’inscrit dans la structuration pédagogique de la Méthode FIDES, en lien avec les blessures émotionnelles et les rôles relationnels qui peuvent en découler."
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
  { section: "Bases", items: ["base_blessures", "base_confort", "base_empathie", "base_karpman"] },
  { section: "Blessures", items: ["w_joie", "w_trahison", "w_abandon", "w_injustice", "w_rejet", "w_humiliation"] },
  { section: "Comportements", items: ["ref_addictions", "ref_valeurs", "ref_dogmes"] },
  { section: "Références", items: ["ref_sources"] },
];
