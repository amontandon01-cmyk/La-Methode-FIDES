// assets/js/data/pages.js
export const PAGES = [
  // ACCUEIL
  { id: "home", type: "HOME", title: "Vue d’ensemble", subtitle: "Socles • Blessures • Référentiels" },

  // SOCLES
  {
    id: "socle_confort",
    type: "SOCLE",
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
          "Zone d’expansion = réalisation de soi, alignement avec sa valeur, contribution au monde."
        ]
      },
      {
        kicker: "Message clé",
        lead: "Pour avancer, il faut oser franchir la peur et passer par l’apprentissage.",
        text: "Sans ce passage, on reste prisonnier de l’illusion de sécurité."
      }
    ]
  },

  {
    id: "socle_blessures",
    type: "SOCLE",
    title: "Les blessures émotionnelles (cadre)",
    subtitle: "Apathie ↔ empathie",
    content: [
      {
        kicker: "Constat",
        lead: "Quand une blessure s’active, l’apathie prend le dessus.",
        text:
          "Dans ce contexte, l’apathie n’est pas une absence d’émotion au sens médical, mais un état de fermeture émotionnelle qui se met en place lorsqu’une douleur ancienne se réveille."
      },
      {
        kicker: "Fonction",
        lead: "Réaction inconsciente de protection / mode de survie émotionnel.",
        text:
          "C’est une réaction inconsciente de protection que la personne adopte pour ne plus souffrir."
      },
      {
        kicker: "Direction",
        lead: "Retrouver l’ouverture de conscience.",
        text:
          "L’objectif est de passer de la fermeture à l’ouverture de conscience — vers l’acceptation de soi et de l’autre, sans jugement."
      },
      {
        kicker: "Finalité",
        lead: "Retrouver la connexion.",
        text: "Retrouver la connexion à soi, à l’autre et à la vie."
      }
    ]
  },

  {
    id: "socle_empathie",
    type: "SOCLE",
    title: "L’empathie",
    subtitle: "Résonance sans fusion",
    content: [
      {
        kicker: "Définition",
        lead:
          "Capacité à se mettre en résonance avec l’émotion de l’autre, sans se confondre avec elle."
      },
      {
        kicker: "Différences",
        lead: "Empathie / compassion / sympathie",
        bullets: [
          "Empathie vs compassion : l’une ressent, l’autre agit.",
          "Empathie vs sympathie : l’une écoute, l’autre se projette."
        ]
      },
      {
        kicker: "Freins (blessures)",
        lead: "Les blessures voilent l’empathie.",
        bullets: [
          "Rejet : envie de s’isoler, se couper.",
          "Injustice : rigidité, contrôle de soi.",
          "Trahison : méfiance, suspicion.",
          "Humiliation : honte, fuite du contact.",
          "Abandon : besoin de combler son vide avant d’écouter."
        ]
      },
      {
        kicker: "Message clé",
        lead: "L’empathie est naturelle, mais elle est voilée par nos blessures."
      }
    ]
  },

  // IMPACTS
  {
    id: "impact_apathie",
    type: "REF",
    title: "Conséquences de l’absence d’empathie (apathie)",
    subtitle: "Impacts personnels, relationnels, sociaux",
    content: [
      {
        kicker: "Conséquences",
        lead: "Synthèse",
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
          "Impact existentiel : difficulté à donner du sens, blocage intérieur, repli sur ses peurs."
        ]
      }
    ]
  },

  {
    id: "impact_empathie",
    type: "REF",
    title: "Conséquences positives de l’empathie",
    subtitle: "Bénéfices personnels, relationnels, collectifs",
    content: [
      {
        kicker: "Conséquences positives",
        lead: "Synthèse",
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
          "Harmonie : réduction des préjugés, cohésion sociale renforcée."
        ]
      }
    ]
  },

  // BLESSURES (grille stable)
  {
    id: "w_trahison",
    type: "BLESSURE",
    title: "Blessure : trahison",
    subtitle: "Émotion : surprise",
    grid: [
      ["Émotion", "Surprise."],
      ["Âge d’ancrage", "6–7 ans (indiqué)."],
      [
        "Origine",
        "Expérience de trahison réelle ou vécue comme telle (parent absent, infidélité, promesse non tenue). Perte de confiance dans l’autre et dans l’humanité."
      ],
      [
        "Masque / comportement",
        "Masque du contrôlant. Cassant, exigeant. Besoin de tout vérifier, d’imposer sa volonté. Difficulté à lâcher prise."
      ],
      ["Apathie", "Méfiance, contrôle ou test permanent de l’autre."],
      [
        "Addictions",
        "Pouvoir, contrôle, réussite, domination. Travail ou sport comme moyen de ne pas perdre la main."
      ],
      [
        "Valeurs de vie",
        "Loyauté, fidélité, vérité, apparence/paraître, argent (statut social, entourage, savoir)."
      ],
      [
        "Conditionnements / dogmes",
        "« On ne peut faire confiance à personne. » « Il faut tout contrôler. » « N’aime pas avoir tort. » « N’aime pas perdre. »"
      ],
      [
        "Croyances limitantes",
        "« Les autres vont forcément me trahir. » « Je dois garder le contrôle. » « Où est la performance concrète ? » « Il faut le voir pour y croire. »"
      ],
      [
        "Croyances expansives",
        "« Je me détache du résultat, car le chemin compte. » « Laisser à l’autre le bénéfice du doute. » « J’accepte l’autre tel qu’il est. »"
      ]
    ]
  },

  {
    id: "w_abandon",
    type: "BLESSURE",
    title: "Blessure : abandon",
    subtitle: "Émotion : peur",
    grid: [
      ["Émotion", "Peur."],
      [
        "Origine",
        "Sentiment d’être laissé seul, manques affectifs dans l’enfance. Difficultés à exister sans la présence rassurante d’autrui. Manque d’autonomie."
      ],
      [
        "Masque / comportement",
        "Masque du dépendant. Fusion, peur de la solitude, besoin excessif de soutien. Enfantin. Peut dire qu’il se sent bien seul et qu’il n’a besoin de personne."
      ],
      [
        "Empathie (note)",
        "Confond souvent empathie et fusion. Donne trop, dans l’espoir d’éviter d’être abandonné."
      ],
      [
        "Addictions",
        "Dépendances affectives, relations, réseaux sociaux, alcool. Tout ce qui comble le vide intérieur."
      ],
      ["Valeurs de vie", "Amour, proximité, lien, chaleur humaine, partage."],
      [
        "Conditionnements / dogmes",
        "« Je dois toujours être avec quelqu’un pour exister. » « Si je suis seul, je ne vaux rien. »"
      ],
      ["Croyances limitantes", "« Je finis toujours seul. » « Personne ne reste jamais avec moi. »"],
      [
        "Croyances expansives",
        "« Je suis complet même dans la solitude. » « Je peux créer des liens stables et nourrissants. » « Plus besoin de béquille (addiction) pour accepter la réalité. »"
      ]
    ]
  },

  {
    id: "w_rejet",
    type: "BLESSURE",
    title: "Blessure : rejet",
    subtitle: "Émotion : tristesse",
    grid: [
      ["Émotion", "Tristesse."],
      [
        "Origine",
        "Souvent très tôt (indiqué : parfois dans le ventre de la mère). Sentiment de ne pas avoir sa place, de déranger, d’être de trop."
      ],
      [
        "Masque / comportement",
        "Masque du fuyant. Tendance à se retirer, se couper, se rendre invisible. Difficulté à s’affirmer, peur de déranger. Caméléon, s’adapte. Tristesse non exprimée."
      ],
      [
        "Empathie (note)",
        "Difficulté à s’ouvrir par peur d’être ignoré. Peut se couper des autres pour éviter de revivre le rejet."
      ],
      [
        "Addictions",
        "Isolement, écrans, alimentation compulsive discrète. Addictions solitaires."
      ],
      [
        "Valeurs de vie",
        "Sécurité intérieure, acceptation de la différence de l’autre, autonomie, foi en la vie et en l’humain, amour."
      ],
      [
        "Conditionnements / dogmes",
        "« Je dois rester invisible pour être accepté. » « Si je me montre, je dérange. »"
      ],
      [
        "Croyances limitantes",
        "« Je n’ai pas ma place. » « Je ne suis pas digne d’être vu. » (et formulations du type « ce n’est pas grave », « c’est normal »)."
      ],
      [
        "Croyances expansives",
        "« Ma présence suffit pour être aimé. » « J’ai une place unique et légitime. » « J’ose m’exprimer dans mes sentiments. »"
      ]
    ]
  },

  {
    id: "w_injustice",
    type: "BLESSURE",
    title: "Blessure : injustice",
    subtitle: "Émotion : colère intérieure",
    grid: [
      ["Émotion", "Colère intérieure (maintenue par peur de blesser/détruire l’autre)."],
      [
        "Origine",
        "Éducation stricte, froide, où l’amour dépend de la performance. Jugement/comparaison."
      ],
      [
        "Masque / comportement",
        "Masque du rigide. Perfectionnisme, dureté avec soi et les autres. Besoin de justice, refus de l’imperfection."
      ],
      [
        "Empathie (note)",
        "Rigidité : difficulté à se laisser toucher ou à montrer ses failles."
      ],
      ["Addictions", "Travail excessif, perfectionnisme, hyper-contrôle sur soi."],
      ["Valeurs de vie", "Justice, équité, intégrité, vérité."],
      [
        "Conditionnements / dogmes",
        "« Il faut être parfait pour être aimé. » « Je ne dois rien laisser paraître. »"
      ],
      [
        "Croyances limitantes",
        "« Je dois toujours prouver ma valeur. » « Je ne peux pas me montrer imparfait. »"
      ],
      [
        "Croyances expansives",
        "« Je peux être aimé tel que je suis. » « Ma valeur est innée et indépendante de mes performances. »"
      ]
    ]
  },

  {
    id: "w_humiliation",
    type: "BLESSURE",
    title: "Blessure : humiliation",
    subtitle: "Émotion : dégoût",
    grid: [
      ["Émotion", "Dégoût."],
      [
        "Origine",
        "Honte, dévalorisation, humiliation dans l’enfance. Souvent liée à l’éducation stricte / regard social ou familial."
      ],
      [
        "Masque / comportement",
        "Masque du masochiste. Se rabaisser, se sacrifier, se punir. Regrets, remords, culpabilité. Anticipe les besoins des autres sans accord."
      ],
      [
        "Empathie (note)",
        "Freinée par la honte — peur de montrer sa vulnérabilité."
      ],
      [
        "Addictions",
        "Nourriture, sexualité, auto-sabotage. Excès pour compenser la honte."
      ],
      ["Valeurs de vie", "Respect, dignité, authenticité."],
      [
        "Conditionnements / dogmes",
        "« Je dois me sacrifier pour les autres. » « Je ne dois pas exister pleinement. »"
      ],
      ["Croyances limitantes", "« Je ne mérite pas d’être heureux. » « Je dois porter la honte. »"],
      [
        "Croyances expansives",
        "« Je mérite le respect et la joie de vivre. » « Je peux exister avec dignité. »"
      ]
    ]
  },

  // SENTIMENTS (référentiels)
  {
    id: "ref_sentiments_expansifs",
    type: "REF",
    title: "Sentiments agréables / expansifs",
    subtitle: "Liste",
    content: [
      {
        kicker: "Liste",
        lead:
          "Joie, Amour, Sérénité, Gratitude, Confiance, Inspiration, Espoir, Enthousiasme, Curiosité, Fierté, Admiration, Tendresse, Satisfaction, Soulagement, Amusement."
      }
    ]
  },
  {
    id: "ref_peur_insecurite",
    type: "REF",
    title: "Sentiments liés à la peur et à l’insécurité",
    subtitle: "Liste",
    content: [
      {
        kicker: "Liste",
        lead:
          "Anxiété, Inquiétude, Stress, Méfiance, Doute, Crainte, Panique, Impuissance, Inconfort, Tension, Sentiment d’insécurité."
      }
    ]
  },
  {
    id: "ref_colere_frustration",
    type: "REF",
    title: "Sentiments liés à la colère et la frustration",
    subtitle: "Liste",
    content: [
      {
        kicker: "Liste",
        lead:
          "Agacement, Irritation, Frustration, Colère, Rancune, Haine, Exaspération, Hostilité, Jalousie, Ressentiment, Envie, Dégoût."
      }
    ]
  },
  {
    id: "ref_tristesse_perte",
    type: "REF",
    title: "Sentiments liés à la tristesse et la perte",
    subtitle: "Liste",
    content: [
      {
        kicker: "Liste",
        lead:
          "Mélancolie, Nostalgie, Chagrin, Solitude, Découragement, Déception, Vide intérieur, Abattement, Désespoir, Impuissance, Larmes intérieures."
      }
    ]
  },
  {
    id: "ref_injustice_humiliation",
    type: "REF",
    title: "Sentiments liés à l’injustice et à l’humiliation",
    subtitle: "Liste",
    content: [
      {
        kicker: "Liste",
        lead:
          "Honte, Culpabilité, Sentiment d’échec, Infériorité, Dévalorisation, Indignité, Injustice, Rigidité intérieure."
      }
    ]
  },
  {
    id: "ref_ouverture_connexion",
    type: "REF",
    title: "Sentiments d’ouverture et de connexion",
    subtitle: "Liste",
    content: [
      {
        kicker: "Liste",
        lead:
          "Compassion, Empathie, Ouverture, Intimité, Communion, Alignement, Paix intérieure, Liberté, Expansion, Sens du sacré."
      }
    ]
  },

  // ADDICTIONS
  {
    id: "ref_addictions",
    type: "REF",
    title: "Addictions",
    subtitle: "Définition + typologies",
    content: [
      {
        kicker: "Définition",
        lead:
          "Comportements répétitifs visant à éviter une émotion (substance, relation, travail, écrans, etc.)."
      },
      { kicker: "Addictions visibles", lead: "Alcool, drogues, jeux, nourriture, sexe." },
      {
        kicker: "Addictions invisibles",
        lead: "Perfectionnisme, contrôle, hyperactivité, réseaux sociaux."
      },
      {
        kicker: "Message clé",
        lead: "L’addiction n’est pas une faute morale, mais un signe d’une émotion qui demande à être reconnue."
      }
    ]
  },
  {
    id: "ref_add_substances",
    type: "REF",
    title: "Addictions aux substances",
    subtitle: "Liste",
    content: [
      {
        kicker: "Liste",
        lead:
          "Alcool, Tabac, Cannabis, Cocaïne, Héroïne, Amphétamines, Ecstasy, Médicaments psychotropes, Antidouleurs, Caféine, Sucre."
      }
    ]
  },
  {
    id: "ref_add_comportementales",
    type: "REF",
    title: "Addictions comportementales",
    subtitle: "Liste",
    content: [
      {
        kicker: "Liste",
        lead:
          "Jeux d’argent, Jeux vidéo, Internet, Réseaux sociaux, Téléphone portable, Télévision, Achats compulsifs, Travail, Sport, Sexe, Amour, Relations toxiques, Nourriture, Régimes, Automutilation."
      }
    ]
  },
  {
    id: "ref_add_invisibles",
    type: "REF",
    title: "Addictions plus invisibles",
    subtitle: "Liste",
    content: [
      {
        kicker: "Liste",
        lead:
          "Perfectionnisme, Contrôle, Besoin de reconnaissance, Hyperactivité, Dépendance à l’adrénaline, Dépendance spirituelle, Dépendance émotionnelle."
      }
    ]
  },

  // VALEURS
  {
    id: "ref_valeurs",
    type: "REF",
    title: "Valeurs de vie",
    subtitle: "Définition + repères",
    content: [
      { kicker: "Définition", lead: "Repères intérieurs qui guident nos choix." },
      {
        kicker: "Exemples",
        lead:
          "Liberté, sécurité, amour, authenticité, réussite, famille, créativité, contribution, santé, foi."
      },
      {
        kicker: "Travail pratique",
        lead: "Identifier ses valeurs prioritaires et vérifier l’alignement actions/valeurs."
      },
      {
        kicker: "Message clé",
        lead:
          "Aligner ses actions avec ses vraies valeurs permet de sortir des schémas hérités."
      }
    ]
  },

  {
    id: "ref_valeurs_listes",
    type: "REF",
    title: "Valeurs de vie (listes)",
    subtitle: "Piliers + exemples",
    content: [
      { kicker: "4 piliers universels", lead: "Santé, famille/proches, argent/sécurité financière, amour/relations." },
      {
        kicker: "Valeurs personnelles",
        lead:
          "Authenticité, liberté, indépendance, responsabilité, courage, simplicité, persévérance, discipline, dépassement de soi, savoir, croissance personnelle, équilibre."
      },
      {
        kicker: "Valeurs relationnelles et familiales",
        lead:
          "Famille, amour, couple, amitié, bienveillance, fidélité, loyauté, solidarité, transmission, respect, tolérance, partage."
      },
      {
        kicker: "Valeurs matérielles et financières",
        lead:
          "Argent, sécurité matérielle, confort, abondance, stabilité économique, réussite sociale, travail, efficacité, ambition, reconnaissance, succès professionnel."
      },
      {
        kicker: "Valeurs liées à la vie et au corps",
        lead:
          "Santé, vitalité, bien-être, hygiène, sécurité physique, énergie, longévité, nature, beauté, plaisir de vivre."
      },
      {
        kicker: "Valeurs de réalisation et contribution",
        lead:
          "Créativité, innovation, compétence, excellence, service, contribution, responsabilité sociale, engagement, altruisme, générosité, coopération, justice, égalité."
      },
      {
        kicker: "Valeurs spirituelles et existentielles",
        lead:
          "Foi, sagesse, espoir, paix intérieure, gratitude, harmonie, pardon, connexion au sacré, transcendance, émerveillement, sens de la vie."
      }
    ]
  },

  // DOGMES
  {
    id: "ref_dogmes",
    type: "REF",
    title: "Dogmes",
    subtitle: "À compléter",
    content: [
      {
        kicker: "Note",
        lead: "Bloc en attente de ton contenu."
      }
    ]
  }
];
