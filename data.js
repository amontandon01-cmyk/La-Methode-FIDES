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
  joie:
    "Amour, Sérénité, Gratitude, plénitude, Plaisir, Bonheur, Confiance, Inspiration, Espoir, Enthousiasme, Curiosité, Fierté, Admiration, Tendresse, Satisfaction, Soulagement, Amusement, Compassion, Empathie, Ouverture d'esprit, Douceur, Communion, Alignement, Paix intérieure, Liberté, Expansion, Sens du sacré, engagement, tranquilité d'esprit.",
  peur:
    "Anxiété, Inquiétude, Stress, Doute, Crainte, Impuissance, Inconfort, Tension, Sentiment d’insécurité, Infériorité, Pessimisme.",
  colere:
    "Agacement, Irritation, Frustration, Colère, Rancune, Haine, Exaspération, Hostilité, Jalousie, Ressentiment, Envie, Dégoût.",
  tristesse:
    "Mélancolie, Nostalgie, Chagrin, Solitude, Découragement, Déception, Vide intérieur, Abattement, Désespoir, Impuissance, Larmes intérieures, Optimisme",
  injustice:
    "Honte, Culpabilité, Sentiment d’échec, Infériorité, Dévalorisation, Indignité",
  surprise: 
    "Méfiance, Supériorité, Incompréhension, Impatience, Frustration, Jalousie",
});

const EMOTION_TO_SENTIMENTS = Object.freeze({
  joie: SENTIMENTS.joie,
  tristesse: SENTIMENTS.tristesse,
  peur: SENTIMENTS.peur,
  degout: SENTIMENTS.injustice,
  colere_interieure: SENTIMENTS.colere,
  surprise: SENTIMENTS.surprise,
});

/* ---------------------------- Pages (contenu) ---------------------------- */

const PAGES = [
  // ACCUEIL
  {
    id: "home", slug: "vue-densemble",
    type: "HOME",
    title: "Vue d’ensemble",
    subtitle: "Bases • Blessures • Comportements",
  },

  // BASES
{
  id: "base_confort", slug: "bases-confort",
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
      kicker: "Schéma",
      image: "schema_zone_de_confort.png",
      imageAlt: "Schéma de la zone de confort"
    },
    {
      kicker: "Déclencheur / Trigger",
      text: "Un déclencheur est une situation, une parole, un silence, un engagement ou un imprévu qui active quelque chose en moi."
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
  id: "base_blessures", slug: "bases-blessures",
  type: "BASE",
  title: "Les blessures émotionnelles",
  subtitle: "Blessures prédominantes & personnalité",
  content: [
    {
      kicker: "Définition",
      lead: "Une blessure activée colore le présent à travers une douleur plus ancienne.",
      text: "Une blessure émotionnelle activée nourrit une croyance limitante et autorise des comportements dysfonctionnels. Une même situation peut ainsi réveiller des réactions très différentes. Une blessure émotionnelle colore la perception de soi, de l’autre et du monde dès qu’un élément du présent vient toucher une douleur déjà inscrite dans l’être. Cette activation peut naître d’une parole, d’un ton, d’un regard, d’un silence, d’un geste, d’une posture, d’un non-verbal, d’une distance, d’un changement, d’une absence de réponse ou d’un simple ressenti intérieur. Lorsqu’elle se réveille, la blessure influence immédiatement les émotions, les pensées, les relations, les mécanismes de protection et les comportements. Elle nourrit alors une croyance limitante qui donne du sens à ce qui est vécu et qui peut aller jusqu’à autoriser des réactions déplacées ou dysfonctionnelles, vécues intérieurement comme logiques, normales ou nécessaires. La personne agit alors à travers sa propre carte du monde, sans toujours voir qu’elle réagit autant à la situation présente qu’à ce qu’elle vient réveiller dans son histoire. Face à une remarque, une culpabilité, une incertitude, un imprévu ou un changement, chaque personne traverse donc l’expérience à travers ses blessures prédominantes et à travers la carte du monde construite par son histoire. Ce filtre intérieur explique pourquoi deux personnes peuvent vivre la même scène de manière totalement différente. Lorsqu’une blessure s’active, la personne cherche inconsciemment à préserver sa cohérence et à éviter de revivre une douleur ancienne. C’est à cet endroit que la fermeture émotionnelle, la crispation intérieure ou le mécanisme de protection prennent le dessus."
    },
    {
      kicker: "Toutes les blessures existent chez chacun",
      lead: "Tout le monde porte les blessures, avec une intensité différente selon son histoire et son fonctionnement.",
      text: "La différence se joue dans la prédominance. Chaque être humain porte en lui les différentes blessures émotionnelles à des degrés variables. La différence se situe dans l’intensité avec laquelle certaines s’activent, dans la fréquence à laquelle elles prennent le dessus et dans la place qu’elles occupent dans le fonctionnement quotidien. Une blessure devient prédominante lorsqu’elle influence plus souvent la lecture du monde, les croyances, les stratégies de protection et les comportements. Elle imprime alors sa couleur à la personnalité et oriente la manière de chercher du lien, de la sécurité, de la reconnaissance, du contrôle ou de l’apaisement."
    },
    {
      kicker: "Les blessures prédominantes dans la personnalité",
      lead: "Les blessures dominantes donnent la tonalité générale du fonctionnement et orientent la manière de se protéger.",
      text: "Elles donnent la tonalité principale de la personnalité. Une ou deux blessures dominantes orientent souvent la manière de se protéger, de créer du lien, de réagir au stress, à la panique, à l’imprévu ou à la douleur intérieure. Elles influencent les croyances les plus actives, les comportements qui reviennent le plus souvent et les mécanismes par lesquels la personne tente de garder l’équilibre. Les autres blessures restent présentes et peuvent aussi s’activer, avec une présence moins fréquente au premier plan. La grande différence entre ces fonctionnements se situe dans la manière dont l’émotion circule, se bloque ou s’exprime. Dans les dynamiques d’abandon et de trahison, l’émotion déborde plus facilement vers l’extérieur à travers des réactions visibles, des décharges, du contrôle, de la manipulation ou des comportements inadéquats. Dans les dynamiques de rejet et d’injustice, l’émotion reste davantage retenue dans l’être et s’exprime surtout par le retrait, le silence, la rigidité, l’auto-contrôle ou l’effacement. Dans les deux cas, l’émotion réelle reste souvent mal identifiée, ce qui entretient les croyances limitantes et les comportements dysfonctionnels."
    },
    {
      kicker: "Personnalité prédominant surprise / peur",
      lead: "Quand l’incompréhension pousse à contrôler, à manipuler et à chercher de la sécurité à l’extérieur.",
      text: "Quand l’incompréhension active le besoin de contrôle, puis ouvre sur la peur de perdre sa sécurité. Cette personnalité est liée à des blessures telles que la trahison et l’abandon. La surprise apparaît lorsque ce qui se passe ne rentre plus dans la carte du monde de la personne. À cet instant, la blessure s’active, les repères vacillent et le besoin de retrouver de la cohérence prend toute la place. Pour recréer un sentiment de maîtrise, la personne peut entrer dans une dynamique de contrôle et de manipulation : elle cherche à influencer l’autre, à orienter sa réaction, à obtenir une réponse qui la rassure ou à le faire rentrer dans sa propre lecture du monde. L’émotion sort plus facilement vers l’extérieur, tout en restant souvent mal reconnue ou mal nommée. La personne peut croire qu’elle vit de la colère, alors qu’en profondeur elle traverse surtout de la surprise, de la frustration, de l’insécurité ou de la peur. Lorsque la blessure d’abandon est également présente, cette surprise bascule rapidement dans la peur, car l’être se sent fragilisé, menacé dans son appui et profondément insécurisé. Dans cette dynamique, le regard devient facilement pessimiste : dans sa carte du monde, rien ne va, rien n’est assez sûr, rien n’est assez stable, même lorsque, concrètement, beaucoup de choses sont déjà là. La personne peut alors contrôler, vérifier, réclamer, tester, anticiper, manipuler, retenir ou chercher à sécuriser le lien à tout prix. Elle peut aussi se déresponsabiliser plus facilement et attendre que l’extérieur répare, rassure ou porte ce qu’elle ne se sent pas prête à porter elle-même. Derrière une apparente force ou une réaction volcanique, il existe souvent une peur très active, peu reconnue, qui pousse à éviter la chute, la déception, la perte d’appui ou la perte de contrôle. Il faut aussi comprendre que la personne se lit rarement avec justesse dans cette zone : ses stratégies de protection sont tellement installées qu’elle peut se reconnaître plus facilement dans une blessure opposée, simplement parce que cela la rassure et l’éloigne de l’émotion réelle à traverser."
    },
    {
      kicker: "Personnalité prédominant tristesse / colère intérieure",
      lead: "Quand l’émotion reste enfermée dans l’être et se transforme en retrait, en silence ou en rigidité.",
      text: "Quand l’émotion reste bloquée dans l’être et se transforme en retrait, en silence ou en rigidité. Cette personnalité est liée à des blessures telles que le rejet et l’injustice. Ici, l’émotion circule beaucoup moins vers l’extérieur et reste davantage retenue à l’intérieur. La personne garde beaucoup en elle, se ferme, se retire, se contrôle, se rigidifie ou s’efface, même lorsque la tension intérieure est forte. La tristesse pousse souvent à la fuite silencieuse et à l’espoir que l’autre comprenne seul qu’il y a un problème, sans que les mots aient besoin d’être posés. Elle peut aussi nourrir une forme de positivité de surface : la personne se dit que cela ira mieux plus tard, que demain sera différent, que tout finira par rentrer dans l’ordre, puis elle glisse sous le tapis ce qui demande à être ressenti. À l’extérieur, elle peut alors sembler positive, tenir bon et donner l’impression que tout va bien, alors qu’en profondeur l’émotion reste bloquée et peu reconnue. La colère, quant à elle, peut rester enfermée à l’intérieur sans être exprimée directement, par peur de faire mal, de dépasser sa pensée ou de créer une rupture. À l’extérieur, la personne peut sembler calme, solide, maîtrisée ou même sereine, alors qu’à l’intérieur elle retient énormément. Elle peine souvent à nommer précisément ce qu’elle ressent et parle plus volontiers d’un mal-être global que d’une émotion claire. Dans la blessure de rejet, elle peut aussi porter toutes les problématiques du monde sur ses épaules et se responsabiliser de manière excessive, comme si tout dépendait d’elle ou comme si elle devait tout absorber pour que l’équilibre tienne. Ce fonctionnement s’appuie fréquemment sur une image de tenue, de maîtrise, de foi en la vie ou de solidité intérieure, tout en laissant peu de place à l’expression directe de la vulnérabilité. La croyance limitante donne alors une cohérence au comportement : se taire semble protéger, se retirer semble préserver, se sacrifier semble maintenir le lien, et se montrer irréprochable semble garantir sa place. Là aussi, le regard sur soi peut être biaisé : la personne lit parfois son fonctionnement à l’envers et se reconnaît plus facilement dans une blessure opposée, précisément parce que ses stratégies de protection l’éloignent de ce qui est réellement actif en elle."
    },
    {
      kicker: "Dégoût, humiliation et oubli de soi",
      lead: "Quand le sacrifice pousse à s’oublier, à ne plus sentir ses désirs, puis révèle ce qui a réellement été nourri.",
      text: "Quand le sacrifice révèle l’humiliation infligée à son propre corps et ramène à ses responsabilités réelles. Cette dynamique est liée à la blessure d’humiliation et à l’émotion de dégoût qui lui est profondément associée. Tant que cette blessure organise le fonctionnement, la personne cherche sa valeur dans l’utilité, le service, la générosité et la capacité à porter pour les autres. Elle anticipe les besoins, prend sur elle les responsabilités, arrange, aide, répare, soutient et donne souvent bien au-delà de sa juste part, parfois avant même qu’une demande soit formulée. Cette logique peut prendre une forme masochiste : la personne se place constamment au second plan, offre son temps libre, son énergie, son corps et sa disponibilité, puis nourrit l’idée que sa dignité et sa valeur passent par ce qu’elle fait pour les autres. À force de vivre ainsi, elle s’éloigne progressivement d’elle-même et perd le contact avec ses propres désirs. Elle ne sait plus vraiment ce qu’elle aime, ce qu’elle veut, ce qui la nourrit ni ce qui lui ferait du bien, car toute son attention reste tournée vers l’extérieur, vers l’action, vers l’utilité et vers les attentes supposées de son entourage. Son corps devient alors un territoire peu écouté, poussé, dépassé, utilisé sans respect de son rythme, de ses limites et de ses besoins. Lorsque la conscience s’ouvre enfin sur ce fonctionnement, le dégoût peut monter avec une grande intensité. Il met en lumière la honte, la culpabilité, les regrets et les remords liés à ce que la personne s’est autorisé à travers ses croyances limitantes. Elle voit alors qu’en voulant servir, sauver, soulager ou tenir pour tout le monde, elle a aussi humilié son propre corps, oublié son propre être et entretenu un fonctionnement qui l’éloignait de sa vérité. Faire face au dégoût revient alors à faire face à ses responsabilités réelles : reconnaître ce qu’elle a nourri, voir les conséquences concrètes de ce sacrifice, comprendre la croyance qui le soutenait, puis retrouver une juste place où l’écoute de soi, le respect du corps et l’accueil de ses propres désirs reprennent leur place dans la vie. Phrase clé : Le dégoût apparaît lorsque la personne voit enfin qu’en voulant être utile à tous, elle s’est oubliée elle-même au point de perdre le contact avec ses propres désirs."
    },
    {
      kicker: "Les comportements observables au quotidien",
      lead: "Les comportements visibles traduisent une logique intérieure plus profonde, portée par la blessure et la croyance.",
      text: "Ce que l’on observe dans le quotidien. Lorsqu’une blessure émotionnelle s’active, la personne cherche inconsciemment à éviter l’émotion ressentie ou à retrouver une impression de sécurité intérieure. Les comportements observables, comme le contrôle, la manipulation, le retrait, l’hyperadaptation, le sacrifice, la quête de reconnaissance, la rigidité, les addictions, les valeurs affichées comme des refuges, les dogmes ou certaines croyances, deviennent alors des stratégies de protection. Ces comportements prennent appui sur une croyance intérieure qui leur donne une autorisation et une légitimité dans la carte du monde de la personne. Comprendre ce lien permet d’identifier plus justement la blessure à l’origine, la croyance qui la soutient et le mécanisme de protection qui s’exprime à travers le comportement."
    },
    {
      kicker: "Direction et ouverture de conscience",
      lead: "La transformation commence lorsque la conscience remplace l’automatisme et que l’être voit enfin ce qu’il nourrit.",
      text: "Passer de la fermeture à l’ouverture de conscience. Le chemin consiste à reconnaître ses blessures, à comprendre leur logique et à voir comment elles influencent les croyances, les perceptions et les comportements. Lorsque cette mise en lumière devient possible, la personne commence à voir ce qu’elle s’est autorisé à vivre, à faire, à imposer, à retenir ou à répéter à travers ses croyances limitantes. Cette étape demande une grande honnêteté intérieure, car elle confronte l’être à ses mécanismes les plus anciens et à ce qu’ils ont produit dans sa manière d’aimer, de se protéger, de réagir ou d’entrer en relation. C’est précisément cette conscience qui ouvre le passage vers une évolution plus juste, plus responsable et plus apaisée."
    },
    {
      kicker: "Finalité et chemin de reconnexion",
      lead: "Comprendre ses blessures ouvre un chemin de reconnexion à soi, à l’autre et à la vie, avec plus de conscience et de justesse.",
      text: "Tout le monde porte toutes les blessures, avec une intensité différente, et leur compréhension ouvre un chemin de reconnexion. Le but est de retrouver la connexion à soi, à l’autre et à la vie avec davantage de présence, de discernement, d’acceptation et de stabilité intérieure. En comprenant les blessures, les croyances qu’elles alimentent et les comportements qu’elles autorisent, la personne accède à une lecture plus fine de son fonctionnement. Elle peut alors quitter peu à peu la fermeture émotionnelle, assouplir sa carte du monde et revenir à une relation plus consciente avec elle-même, avec les autres et avec ce qu’elle traverse. Comprendre ses blessures prédominantes aide à mieux lire ses réactions, ses croyances, ses comportements et ses blocages. C’est une porte d’entrée essentielle pour reconnaître ce qui s’active dans le présent, comprendre ce que l’on s’autorise à travers ses croyances limitantes et ouvrir un chemin de transformation plus conscient. Cette lecture prépare naturellement la compréhension de la zone de confort, de la peur, de l’apprentissage et de l’expansion."
    },
  ],
},

{
  id: "base_croyances", slug: "bases-croyances",
  type: "BASE",
  title: "Pensée & croyances limitantes",
  subtitle: "De la fermeture à l’ouverture",
  content: [
    {
      kicker: "Définition",
      lead: "Une pensée traverse l’esprit, une croyance s’installe dans l’être.",
      text: "Les pensées et croyances limitantes sont des filtres intérieurs qui réduisent le champ des possibles. La pensée limitante apparaît dans l’instant, influence le ressenti immédiat et oriente souvent la réaction. La croyance limitante s’inscrit plus profondément et devient une référence intérieure durable, à partir de laquelle la personne se perçoit, perçoit les autres et interprète la vie. Lorsqu’elle s’installe, elle agit comme une vérité intérieure et influence les choix, les émotions, les relations et les comportements au quotidien. Elle peut même aller plus loin en donnant à la personne une forme d’autorisation intérieure à adopter des comportements déplacés ou dysfonctionnels, puisqu’elle rend ces comportements cohérents avec sa lecture du monde, avec ce qu’elle croit juste, légitime ou nécessaire à cet instant."
    },
    {
      kicker: "Le filtre intérieur",
      lead: "Ce que je crois oriente ce que je vois.",
      text: "Chaque personne lit la réalité à travers sa propre carte du monde, c’est-à-dire à travers son histoire, ses repères, ses blessures, ses expériences et le sens qu’elle a donné à ce qu’elle a vécu. Les pensées et croyances limitantes viennent s’ancrer dans cette carte du monde et cherchent ensuite à la maintenir cohérente. La personne sélectionne alors ce qui confirme déjà sa vision, interprète les situations dans ce sens et peut même biaiser la réalité pour que tout continue à s’intégrer à ce qu’elle croit vrai. Dans certains cas, elle cherche aussi à faire entrer l’autre dans cette même lecture du monde, comme si sa perception était la plus juste ou la plus sécurisante. Ce mécanisme réduit l’ouverture, enferme dans des schémas connus et freine l’accès à une vision plus vaste, plus souple et plus vivante de la réalité."
    },
    {
      kicker: "La naissance de la croyance",
      lead: "Toute croyance prend racine dans une histoire intérieure.",
      text: "Une pensée ou une croyance limitante se construit à partir d’expériences marquantes, d’émotions fortes, de blessures actives, de paroles reçues et de conclusions tirées sur soi, sur les autres ou sur la vie. Lorsqu’un vécu émotionnel touche profondément l’être, celui-ci cherche à lui donner du sens et construit une lecture intérieure destinée à préserver son équilibre. Cette lecture devient progressivement familière, puis structurante, jusqu’à former une croyance qui influence durablement le fonctionnement intérieur."
    },
    {
      kicker: "Le lien avec les blessures et les comportements",
      lead: "La blessure active la croyance, la croyance guide le comportement.",
      text: "Chaque blessure émotionnelle alimente des pensées particulières et soutient des croyances qui orientent les réactions, les choix et les stratégies de protection. Lorsqu’une blessure s’active, la personne pense, ressent et agit à travers ce filtre, ce qui l’amène à adopter des comportements répétitifs comme la fuite, le contrôle, la suradaptation, l’effacement, l’hypervigilance, l’exigence excessive ou le sacrifice. Le comportement devient alors l’expression visible d’une croyance intérieure plus profonde, souvent installée depuis longtemps dans l’histoire de l’être. À travers cette croyance, la personne se donne intérieurement la permission d’agir de manière déplacée ou dysfonctionnelle, tout en vivant cela comme normal, justifié ou nécessaire au regard de sa propre carte du monde."
    },
    {
      kicker: "Les signes de leur présence et ce qui les nourrit",
      lead: "Ce qui se répète cherche à être vu, compris et transformé.",
      text: "Les pensées et croyances limitantes se reconnaissent à travers les blocages récurrents, les réactions émotionnelles intenses, les schémas répétitifs, les difficultés à s’autoriser, à choisir, à recevoir, à se positionner ou à avancer avec fluidité. Elles se renforcent par la répétition mentale, par les comportements de protection, par les expériences qui semblent confirmer le schéma et par l’identification progressive de la personne à ce qu’elle croit vivre comme une vérité. Plus cette dynamique se répète, plus la croyance gagne en force et en influence dans la vie quotidienne."
    },
    {
      kicker: "Le chemin de guérison",
      lead: "La guérison ouvre une nouvelle lecture de soi et de la vie.",
      text: "La guérison commence lorsque la personne repère la pensée qui la traverse, reconnaît la croyance qui l’habite, identifie l’émotion présente et relie cette dynamique à la blessure active. À partir de cette conscience, elle peut accueillir son vécu, comprendre le sens de ses comportements et choisir des ajustements plus alignés avec son être profond. Lorsque la croyance est mise en lumière, la personne comprend qu’elle s’est appuyée sur elle pour s’autoriser certains comportements dysfonctionnels. Cette prise de conscience est intense, parce qu’elle amène une remise en question profonde de soi et de ce que l’on a considéré comme normal, légitime ou juste. C’est à cet endroit que la guérison devient possible : la personne voit enfin que cette croyance a eu une fonction, qu’elle l’a aidée à tenir, à se protéger ou à avancer jusqu’ici, puis elle reconnaît qu’aujourd’hui elle la comprend comme limitante et qu’elle n’a plus besoin de la nourrir. Elle peut alors se pardonner de l’avoir utilisée, la remercier pour ce qu’elle lui a permis de traverser, puis la libérer pour ouvrir un nouveau chemin d’évolution plus conscient, plus ajusté et plus libre."
    }
  ],
},
   
  {
    id: "base_empathie", slug: "bases-empathie",
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
  id: "base_karpman", slug: "bases-karpman",
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
  id: "w_joie", slug: "blessures-joie",
  type: "BLESSURE",
  title: "État : JOIE",
  subtitle: "Comportement neutre",
  grid: [
    ["Émotion racine", "Joie."],
    ["Sentiments possibles", EMOTION_TO_SENTIMENTS.joie],
    ["Relation à soi", "Connexion simple à ses ressentis, accueil de ce qui est vécu, sentiment de légitimité, paix intérieure, confiance dans sa valeur propre, confiance et engagement dans ses projets."],
    ["Relation à l’autre", "Présence authentique, à l'écoute de l'autre dans le respect, capacité à aimer, capacité de discernement, à donner sans se perdre et à recevoir sans méfiance, foi en la vie et en l'humanité."],
    ["Comportements", "Sérénité, spontanéité, élan naturel, respiration librérée, capacité à vivre l’instant présent, disponibilité émotionnelle, fluidité dans les échange, communication constructive, gratitude, productivité, authenticité, créativité, élan de vie, coopération, humour, capacité à poser des choix clairs dans le respect de soi et de l’autre."],
    ["Lecture pédagogique", "La joie ne correspond pas à une excitation permanente ni à une obligation d’être constamment bien. Elle désigne un état intérieur libre et stable. Dans cet état, la personne n’est plus dominée par une blessure émotionnelle ni par les stratégies. L’énergie qui était mobilisée pour se protéger redevient disponible. La joie se manifeste alors naturellement par une sensation d’ouverture, de légèreté et de présence à l’instant. Elle permet d’entrer en relation avec soi-même et avec les autres de manière authentique, sans tension intérieure."],
    ["Message clé", "Quand la blessure est traitée, l’être retrouve naturellement la sérénité. "],
  ],
},

  {
    id: "w_rejet", slug: "blessures-rejet",
    type: "BLESSURE",
    title: "REJET (tristesse)",
    subtitle: "Comportement d'inferiorité",
    grid: [
      ["Émotion racine", "Tristesse."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.tristesse],
      ["Origine", "Souvent très tôt (indiqué : parfois dans le ventre de la mère). Sentiment de ne pas avoir sa place, de déranger, d’être de trop.",],
      ["Masque / comportement", "Masque du fuyant. Tendance à se retirer, se couper, se rendre invisible. Difficulté à s’affirmer, peur de déranger. Caméléon, s’adapte. Tristesse non exprimée.",],
      ["Apathie / empathie", "Difficulté à s’ouvrir par peur d’être ignoré. Peut se couper des autres pour éviter de revivre le rejet.",],
      ["Addictions", "Isolement, écrans, alimentation compulsive discrète. Addictions solitaires."],
      ["Dogmes", "« Je dois rester invisible pour être accepté. » « Si je me montre, je dérange. »"],
      ["Valeurs", "Sécurité intérieure, acceptation de la différence de l’autre, autonomie, solitude, foi en la vie et en l’humain, amour."],
      ["Croyances limitantes", "« Je n’ai pas ma place. » « Je ne suis pas digne d’être vu. » (et formulations du type « ce n’est pas grave », « c’est normal »).",],
      ["Croyances expansives", "« Ma présence suffit pour être aimé. » « J’ai une place unique et légitime. » « J’ose m’exprimer dans mes sentiments. »",],
    ],
  },

  {
    id: "w_abandon", slug: "blessures-abandon",
    type: "BLESSURE",
    title: "ABANDON (peur)",
    subtitle: "Comportement d'inferiorité",
    grid: [
      ["Émotion racine", "Peur."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.peur],
      ["Origine", "Sentiment d’être seul, manques affectifs dans l’enfance. Difficultés à exister sans la présence rassurante d’autrui. Manque d’autonomie.",],
      ["Masque / comportement", "Masque du dépendant. Fusion, peur de la solitude, besoin excessif de soutien. Enfantin. Peut dire qu’il se sent bien seul et qu’il n’a besoin de personne.",],
      ["Apathie / empathie", "Confond souvent empathie et fusion. Donne trop, dans l’espoir d’éviter d’être abandonné."],
      ["Addictions", "Dépendances affectives, relations, réseaux sociaux, alcool. Tout ce qui comble le vide intérieur."],
      ["Dogmes", "« Je dois toujours être avec quelqu’un pour exister. » « Si je suis seul, je ne vaux rien. »"],
      ["Valeurs", "Amour, proximité, lien, chaleur humaine, partage."],
      ["Croyances limitantes", "« Je finis toujours seul. » « Personne ne reste jamais avec moi. »"],
      ["Croyances expansives", "« Je suis complet même dans la solitude. » « Je peux créer des liens stables et nourrissants. » « Plus besoin de béquille (addiction) pour accepter la réalité. »",
      ],
    ],
  },

  {
    id: "w_humiliation", slug: "blessures-humiliation",
    type: "BLESSURE",
    title: "HUMILIATION (dégout)",
    subtitle: "Comportement d'inferiorité",
    grid: [
      ["Émotion racine", "Dégoût."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.degout],
      ["Origine", "Honte, dévalorisation, humiliation dans l’enfance. Souvent liée à l’éducation stricte / regard social ou familial.",],
      ["Masque / comportement", "Masque du masochiste. Se rabaisser, se sacrifier, se punir. Regrets, remords, culpabilité. Anticipe les besoins des autres sans accord.",],
      ["Apathie / empathie", "Freinée par la honte — peur de montrer sa vulnérabilité."],
      ["Addictions", "Nourriture, sexualité, auto-sabotage. Excès pour compenser la honte."],
      ["Dogmes", "« Je dois me sacrifier pour les autres. » « Je ne dois pas exister pleinement. »"],
      ["Valeurs", "Respect, dignité, authenticité."],
      ["Croyances limitantes", "« Je ne mérite pas d’être heureux. » « Je dois porter la honte. »"],
      ["Croyances expansives", "« Je mérite le respect et la joie de vivre. » « Je peux exister avec dignité. »"],
    ],
  },

  {
    id: "w_trahison", slug: "blessures-trahison",
    type: "BLESSURE",
    title: "TRAHISON (surprise)",
    subtitle: "Comportement de superiorité",
    grid: [
      ["Émotion racine", "Surprise."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.surprise],
      ["Origine", "Expérience de trahison réelle ou vécue comme telle (parent absent, divorce, séparation, infidélité, promesse non tenue).",],
      ["Âge d’ancrage", "6–7 ans."],
      ["Masque / comportement", "Masque du contrôlant. Cassant, exigeant, manipulateur. Besoin de tout vérifier, d’imposer sa volonté. Difficulté à lâcher prise. Perte de confiance dans l’autre et dans l’humanité. Pouvoir, contrôle, réussite, domination.",],
      ["Apathie / empathie", "Méfiance, contrôle ou test permanent de l’autre."],
      ["Valeurs", "Loyauté, fidélité, vérité, famille, rapport au temps apparence/paraître, argent (statut social, entourage, savoir)."],
      ["Croyances limitantes", "« Les autres vont forcément me trahir. » « Je dois garder le contrôle. » « Où est la performance concrète ? » « Il faut le voir pour y croire.» « On ne peut faire confiance à personne.» « Il faut tout contrôler.» « N’aime pas avoir tort.» « N’aime pas perdre.»",],
      ["Croyances expansives", "« Je me détache du résultat, car le chemin compte. » « Laisser à l’autre le bénéfice du doute. » « J’accepte l’autre tel qu’il est. »",],
      ["Guérison", "Amène à la douceur tant avec soi qu'avec les autres.",],
    ],
  },

  {
    id: "w_injustice", slug: "blessures-injustice",
    type: "BLESSURE",
    title: "INJUSTICE (colère)",
    subtitle: "Comportement de superiorité",
    grid: [
      ["Émotion racine", "Colère intérieure (maintenue par peur de blesser/détruire l’autre)."],
      ["Sentiments possibles", EMOTION_TO_SENTIMENTS.colere_interieure],
      ["Origine", "Éducation stricte, froide, où l’amour dépend de la performance. Jugement/comparaison."],
      ["Masque / comportement", "Masque du rigide. Perfectionnisme, dureté avec soi et les autres. Besoin de justice, refus de l’imperfection.",],
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
  id: "ref_addictions", slug: "comportements-addictions",
  type: "REF",
  title: "Addictions",
  subtitle: "Repères & typologies",
  grid: [
    ["Définition", "Comportements répétitifs ou besoins compulsifs utilisés pour éviter, anesthésier, compenser ou calmer une émotion inconfortable. L’addiction peut passer par une substance, une activité, une relation, une recherche de performance ou une habitude apparemment banale."],
    ["Repère central", "L’addiction procure souvent un soulagement rapide, une impression de contrôle ou une coupure temporaire avec la douleur. En revanche, elle ne traite pas la blessure de fond : elle la masque, la reporte ou l’entretient."],
    ["Fonction", "C'est une béquille qui peut servir à ne plus sentir un vide, une peur, une honte, une solitude, une colère intérieure ou une tension psychique. Elle peut aussi donner l’illusion de remplir, calmer, stimuler, contrôler, oublier, se rassurer ou se punir."],
    ["Pourquoi c’est piégeant", "Le soulagement immédiat renforce le comportement. La personne associe alors inconsciemment l’addiction à une solution, alors qu’elle devient peu à peu une stratégie pour ne pas faire face aux émotions qui prennent de la place dans la vie quotidienne."],
    ["Addictions aux substances", "Alcool, tabac, cannabis, cocaïne, héroïne, amphétamines, ecstasy, médicaments psychotropes, antidouleurs, caféine, sucre. Ces formes passent par l’ingestion, l’inhalation ou l’effet chimique recherché pour modifier rapidement l’état intérieur."],
    ["Repères concrets (substances)", "Recherche d’apaisement rapide, besoin de “tenir”, difficulté à traverser certaines émotions sans produit, augmentation progressive de la fréquence, de la dose ou de la dépendance psychologique."],
    ["Addictions comportementales", "Jeux d’argent, jeux vidéo, internet, réseaux sociaux, téléphone portable, télévision, achats compulsifs, travail, sport, sexe, amour, relations toxiques, nourriture, régimes, automutilation. Ici, ce n’est pas la substance qui domine, mais la répétition d’un comportement devenu refuge."],
    ["Repères concrets (comportementales)", "Besoin de faire, consommer, vérifier, scroller, performer, séduire ou se distraire pour ne pas ressentir. Ces comportements donnent souvent une récompense immédiate, une stimulation, un apaisement ou une impression d’exister."],
    ["Addictions plus invisibles", "Perfectionnisme, contrôle, besoin de reconnaissance, hyperactivité, dépendance à l’adrénaline, dépendance spirituelle, méditation. Ces formes passent plus facilement pour des qualités, alors qu’elles peuvent aussi servir à éviter le contact avec une douleur profonde."],
    ["Pourquoi elles passent inaperçues", "Parce qu’elles sont parfois valorisées socialement : être performant, toujours occupé, irréprochable, indispensable, admiré, “éveillé” ou très engagé peut sembler positif, alors que cela peut aussi cacher une fuite émotionnelle."],
    ["Lecture pédagogique", "Plus une addiction devient nécessaire pour tenir, se calmer, se sentir vivant, se sentir aimé ou garder le contrôle, plus elle mérite d’être interrogée. La question utile n’est pas seulement “qu’est-ce que je fais ?”, mais aussi “qu’est-ce que cela m’aide à ne pas ressentir ?”, ou “Quelle réalité je ne veux pas voir ?”."],
    ["Lien avec les blessures", "Selon la blessure activée, la stratégie change : isolement, fusion, contrôle, perfectionnisme, compensation par le plaisir, recherche de pouvoir, besoin de remplir un vide. L’addiction n’est donc pas isolée : elle s’inscrit souvent dans une logique émotionnelle plus large."],
    ["Message clé", "L’addiction n’est pas seulement un excès ou un manque de volonté. C’est souvent un signal : quelque chose en soi cherche à ne plus souffrir, à se protéger ou à survivre émotionnellement."],
  ],
},
{
  id: "ref_valeurs", slug: "comportements-valeurs",
  type: "REF",
  title: "Valeurs de vie",
  subtitle: "Repères & piliers",
  grid: [
    ["Définition", "Repères intérieurs qui guident nos choix, nos priorités et notre manière de vivre."],
    ["Repère central", "Une valeur profonde soutient nos choix, nos priorités et notre manière de vivre."],
    ["Exemples", "Liberté, sécurité, amour, authenticité, réussite, famille, créativité, contribution, santé, foi, justice, loyauté, autonomie, paix intérieure."],
    ["4 piliers universels", "Santé, famille/proches, argent/sécurité financière, amour/relations."],
    ["Valeurs personnelles", "Authenticité, liberté, indépendance, responsabilité, courage, simplicité, persévérance, discipline, dépassement de soi, savoir, croissance personnelle, équilibre."],
    ["Valeurs relationnelles et familiales", "Famille, amour, couple, amitié, bienveillance, fidélité, loyauté, solidarité, transmission, respect, tolérance, partage."],
    ["Valeurs matérielles et financières", "Argent, sécurité matérielle, confort, abondance, stabilité économique, réussite sociale, travail, efficacité, ambition, reconnaissance, succès professionnel."],
    ["Valeurs liées à la vie et au corps", "Santé, vitalité, bien-être, hygiène, sécurité physique, énergie, longévité, nature, beauté, plaisir de vivre."],
    ["Valeurs de réalisation et contribution", "Créativité, innovation, compétence, excellence, service, contribution, responsabilité sociale, engagement, altruisme, générosité, coopération, justice, égalité."],
    ["Valeurs spirituelles et existentielles", "Foi, sagesse, espoir, paix intérieure, gratitude, harmonie, pardon, connexion au sacré, transcendance, émerveillement, sens de la vie."],
    ["Travail pratique", "Identifier ses valeurs prioritaires et vérifier si ses choix, ses relations et son quotidien sont alignés avec elles."],
    ["Message clé", "Aligner ses actions avec ses vraies valeurs permet de sortir des schémas hérités."],
    ["Guérison", "Les piliers essentiels de notre vie ne sont plus empilés les uns au-dessus des autres. Ils s’alignent à l’horizontale, et nous prenons place au centre. À partir de ce centre, nous pouvons ajuster chacun d’eux et créer l’équilibre qui permet à la sérénité et à la joie de s’installer."],
  ],
},
{
  id: "ref_dogmes", slug: "comportements-dogmes",
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
    id: "ref_sources", slug: "references",
    type: "REF",
    title: "Références",
    subtitle: "Source",
    grid: [
      ["Source d’inspiration", "La lecture des cinq blessures fondamentales — rejet, abandon, humiliation, trahison et injustice — ainsi que des masques relationnels qui leur sont classiquement associés, trouve un appui dans les travaux de Lise Bourbeau, en particulier dans l’ouvrage Les 5 blessures qui empêchent d’être soi-même.",],
      ["Triangle de Karpman", "Le triangle de Karpman apporte une grille de lecture complémentaire des dynamiques relationnelles de survie. Son intégration dans ce site s’inscrit dans la structuration pédagogique de la Méthode FIDES, en lien avec les blessures émotionnelles et les rôles relationnels qui peuvent en découler."],
      ["Élaboration de la Méthode FIDES", "La structuration pédagogique présentée sur ce site, l’identification des émotions racines, l’articulation entre blessures, comportements compensatoires, valeurs de vie, conditionnements, dogmes de comportement et croyances limitantes relèvent de la Méthode FIDES.",],
      ["Protection et usage", "Copyright, tous droits réservés. La méthode FIDES constitue une création protégée au titre de la propriété intellectuelle. Sa transmission, son enseignement et son utilisation s’inscrivent dans le cadre défini par sa fondatrice et concernent exclusivement les personnes autorisées.",],
    ],
  },
];

/* ---------------------------- Navigation (UI) ----------------------------- */

const NAV = [
  { section: "Vue d’ensemble", items: ["home"] },
  { section: "Bases", items: ["base_blessures", "base_croyances", "base_confort", "base_empathie", "base_karpman"] },
  { section: "Blessures émotionnelle", items: ["w_joie", "w_trahison", "w_abandon", "w_injustice", "w_rejet", "w_humiliation"] },
  { section: "Comportements", items: ["ref_addictions", "ref_valeurs", "ref_dogmes"] },
  { section: "Références", items: ["ref_sources"] },
];
