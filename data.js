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
      kicker: "Zone de confort",
      text: "Je reste dans ce que je connais. Cette zone correspond au connu, aux automatismes et aux repères déjà installés.",
    },
    {
      kicker: "Zone d’activation",
      text: "Mon émotion et mes réflexes de protection s’activent. Selon la blessure dominante, cette activation peut prendre la forme de la fuite, du contrôle, du repli, du figement ou de la suradaptation.",
    },
    {
      kicker: "Zone de réalignement",
      text: "J’apprends à désapprendre de mes anciens schémas. Je prends conscience de ce qui s’active, je comprends ce que je protège et je commence à choisir autrement.",
    },
    {
      kicker: "Zone d’évolution",
      text: "Je prends ma place avec plus d’authenticité. Une manière d’être plus juste, plus vraie et plus alignée s’intègre progressivement.",
    },
    {
      kicker: "Clé de lecture",
      text: "Le déclencheur réveille une émotion, active un ancien réflexe de protection et réactive souvent la croyance limitante associée. Cette dernière influence la réaction. Le réalignement permet d’apprendre à désapprendre un ancien schéma, d’ouvrir l’être à plus d’authenticité et d’ouvrir la voie à l’évolution.",
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
  title: "Pensées & croyances limitantes",
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
        kicker: "Empathie",
        lead: "Ressentir, comprendre, rester à sa juste place",
        text: "L’empathie est la capacité à entrer en résonance avec l’émotion de l’autre, à entendre ce qu’il vit, à en percevoir la portée, et à l’accueillir avec une écoute vraie sans se confondre avec lui. Elle permet de sentir, de comprendre, et de rester suffisamment ancré pour garder sa propre place dans la relation. Elle ne cherche pas à sauver, à rassurer par promesse, ni à décider à la place de l’autre. Elle rejoint la personne dans sa réalité du moment, dans ce qu’elle traverse, dans ce qu’elle ressent, puis elle ouvre un espace où quelque chose de vivant peut encore être vu, nommé, choisi, traversé ou partagé avec conscience.",
      },
      {
       kicker: "Schéma",
       image: "schema_empathie.svg",
       imageAlt: "Schéma de l’empathie",
      },
      {
        kicker: "Empathie blessée",
        lead: "Quand la blessure prend la place de la présence",
        text: "L’empathie blessée apparaît lorsque la capacité naturelle à ressentir et comprendre l’autre passe à travers une blessure émotionnelle encore active. La personne perçoit quelque chose du vécu d’en face, puis sa réponse se colore de peur, de manque, de contrôle, de vide, de méfiance ou de honte. L’écoute perd alors en clarté, la présence se trouble, et la relation se construit davantage à partir de la résonance blessée que d’une rencontre juste. L’autre n’est plus rejoint pleinement dans sa réalité propre, il est rencontré à travers ce que son vécu réveille en nous, ce qui modifie la qualité du lien et déplace la relation vers des mécanismes de protection.",
      },
      {
        kicker: "Manifestations de l’empathie blessée",
        lead: "Quand la souffrance intérieure influence la manière d’écouter",
        text: "Lorsque l’empathie est blessée, elle peut prendre plusieurs formes relationnelles. Elle devient sauveuse lorsqu’elle cherche à porter l’autre, à le réparer, à le soulager trop vite ou à choisir pour lui. Elle devient contrôlante lorsqu’elle oriente, conseille avec insistance, impose une direction ou croit savoir ce qui serait juste à la place de l’autre. Elle devient victimisée lorsqu’elle absorbe la situation, se sent envahie, ou bascule dans son propre vécu au point de perdre la juste place de la personne en face. Elle peut aussi ramener immédiatement la parole à soi, à son histoire, à ses émotions ou à ses expériences, ce qui décentre l’écoute et brouille la rencontre. Dans chacune de ces formes, la blessure influence la relation et éloigne l’échange d’une présence lucide, stable et profondément humaine.",
      },
      {
        kicker: "Phrase de transition vers Karpman",
        text: "Quand l’empathie se trouble sous l’effet des blessures, la relation glisse plus facilement vers le sauvetage, le contrôle ou la victimisation.",
      },
      ],
      },
      {
  id: "base_karpman", slug: "bases-karpman",
  type: "BASE",
  title: "Le triangle de Karpman",
  subtitle: "Repérer les dynamiques relationnelles de survie",
  content: [
    {
      kicker: "Introduction",
      lead: "Une blessure activée dans le lien peut faire glisser la relation dans des rôles automatiques.",
      text: "Le triangle de Karpman est une grille de lecture qui aide à comprendre certaines dynamiques relationnelles qui apparaissent lorsque la sécurité intérieure vacille. Il met en lumière trois grandes postures de survie : Victime, Sauveur-réparateur et Persécuteur. Dans votre lecture pédagogique, ce triangle peut aussi se comprendre à travers la manière dont la personne vit la faute, la culpabilité, la tension relationnelle et le besoin de réparation. Cette lecture permet d’observer des rôles relationnels, des mouvements défensifs et des stratégies de survie dans le lien. Elle éclaire la dynamique ; elle ne résume jamais la valeur profonde d’une personne.",
    },
    {
      kicker: "Définition",
      lead: "Une lecture des rôles qui se rejouent dans le lien.",
      text: "Le triangle de Karpman permet de repérer une dynamique dans laquelle une personne peut porter la faute, chercher à réparer pour retrouver la paix, ou rejeter la faute sur l’autre pour soulager sa tension intérieure. Ces rôles peuvent se succéder rapidement dans une même relation. Une même personne peut passer d’un pôle à l’autre selon le contexte, la blessure activée, le niveau d’insécurité ressenti et la tension présente dans le lien. Le triangle devient alors une lecture des réactions relationnelles automatiques.",
    },
    {
      kicker: "Schéma",
      image: "schema_karpman.svg",
      imageAlt: "Schéma du triangle de Karpman",
    },
    {
      kicker: "Les trois rôles",
      lead: "Chaque rôle cherche une forme de protection, même lorsque cette forme devient relationnellement coûteuse.",
      text: "La Victime porte la faute. Elle vit un sentiment d’impuissance, de blessure, d’insécurité ou de vulnérabilité. Dans une logique de rejet, elle devient souvent silencieuse : elle se retire, se ferme, se replie, laisse peu transparaître sa douleur et porte seule le malaise. Dans une logique d’abandon, elle devient souvent plus exprimée : la souffrance se montre davantage, le manque de lien se fait sentir, et le besoin d’être rejointe ou rassurée devient plus visible. Le Sauveur-réparateur cherche à réparer pour retrouver une forme de paix. Il veut apaiser, soulager, arranger, porter, rassurer ou remettre du lien. Selon son moteur intérieur, cette réparation peut venir d’un oubli de soi, d’un besoin de se sentir en règle intérieurement, ou d’une stratégie plus contrôlante de reprise de lien. Le Persécuteur rejette la faute sur l’autre. Il peut prendre une forme chaude, visible, communicante, dans laquelle il contrôle, corrige, tranche, accuse ou impose. Il peut aussi prendre une forme froide, plus silencieuse, plus fermée, dans laquelle il fige, laisse l’autre porter le malaise, installe une distance qui pèse dans la relation ou juge sans forcément verbaliser.",
    },
    {
      kicker: "Le triangle lui-même",
      lead: "Votre nouvelle référence commune.",
      text: "Dans votre lecture pédagogique, le triangle de Karpman peut désormais être formulé ainsi : Victime → je porte la faute. Sauveur-réparateur → je dois réparer pour être en paix. Persécuteur chaud / juge communicant → je rejette la faute sur l’autre en contrôlant, en corrigeant, en tranchant. Persécuteur froid / juge silencieux → je rejette la faute sur l’autre en me fermant, en laissant l’autre porter le malaise et en installant une froideur relationnelle. Cette formulation est précieuse, parce qu’elle rend visible le mouvement intérieur derrière la posture relationnelle. Elle permet de lire non seulement ce que la personne fait, mais aussi la logique émotionnelle qui la traverse.",
    },
    {
      kicker: "Lien avec les blessures émotionnelles",
      lead: "Le même rôle peut prendre des formes différentes selon la blessure qui s’active.",
      text: "Le rejet et l’abandon peuvent tous deux orienter vers une posture de Victime, avec deux expressions distinctes. Dans le rejet, la victime est souvent silencieuse. Elle se retire, se ferme, se replie, laisse peu transparaître sa douleur et porte la faute à l’intérieur d’elle-même. Dans l’abandon, la victime est souvent plus exprimée. La souffrance se montre davantage, la peur du manque de lien devient plus perceptible, le besoin d’être rejoint ou rassuré peut se dire plus ouvertement. La blessure d’humiliation oriente plus facilement vers le Sauveur-réparateur dans sa forme sacrificielle. La personne s’oublie, se suradapte, se met au service de l’autre, cherche à soulager, réparer ou porter, parfois au détriment de sa juste place. La blessure de trahison oriente plus facilement vers le Persécuteur chaud, juge communicant, dans une logique de contrôle, de correction et de prise de pouvoir. Elle peut aussi, dans certains cas, revenir sous une forme de Sauveur stratégique, lorsque la réparation apparente sert à reprendre la main sur le lien. La blessure d’injustice mène plus facilement vers le Persécuteur froid, juge silencieux, avec une forme plus rigide, plus mentale, plus normative et plus froide.",
    },
    {
      kicker: "Distinction importante",
      lead: "Une réparation apparente peut venir d’un élan de réparation intérieure ou d’une stratégie de contrôle.",
      text: "Le Sauveur-réparateur sacrificiel s’inscrit plus facilement dans la blessure d’humiliation. Il aide en s’oubliant, se rend utile pour se sentir en paix, se charge de l’autre, se plie, s’efface ou se sacrifie. Le Sauveur stratégique s’inscrit plus facilement dans une logique de trahison et de contrôle. Il aide en apparence pour calmer la crise, restaurer son image, récupérer le lien, éviter les conséquences ou reprendre la main. Dans cette posture, le contrôle ne disparaît pas : il change de forme.",
    },
    {
      kicker: "Lecture plus fine des dynamiques d’emprise",
      lead: "La réparation apparente ne signe pas toujours une transformation intérieure.",
      text: "Dans certaines dynamiques d’emprise, une personne peut passer du Persécuteur au Sauveur stratégique. Ce mouvement peut donner l’impression d’un apaisement, d’un retour de conscience ou d’une volonté de réparation. En réalité, il peut aussi servir à réorganiser la relation sous influence, à restaurer l’image, à retenir l’autre ou à reprendre le contrôle. Dans votre lecture pédagogique : Humiliation → Sauveur-réparateur sacrificiel. Trahison → Persécuteur chaud / Sauveur stratégique. Injustice → Persécuteur froid / juge silencieux. Rejet / Abandon → Victime, avec expression silencieuse ou exprimée. Cette distinction est importante, parce qu’elle évite de confondre l’oubli de soi, la réparation authentique, la culpabilité et la stratégie de domination.",
    },
    {
      kicker: "Point de vigilance",
      lead: "Le triangle éclaire une dynamique relationnelle ; il ne pose pas un diagnostic.",
      text: "Le triangle de Karpman aide à lire des mécanismes relationnels. Il permet de comprendre une dynamique, d’observer des postures et de mieux repérer ce qui se rejoue dans le lien. Il ne sert pas à figer une personne dans une étiquette clinique. Lorsqu’une dynamique de manipulation, d’emprise ou de contrôle apparaît, il est plus juste de parler de fonctionnement relationnel de contrôle, de stratégie d’emprise, de manipulation ou de logique de domination, plutôt que de réduire la personne à un mot qui enferme.",
    },
    {
      kicker: "Lecture pédagogique",
      lead: "Derrière la posture, il y a souvent une tentative de protection.",
      text: "Une posture de Victime peut protéger une peur immense de solitude, d’exclusion ou de perte du lien. Une posture de Sauveur-réparateur peut protéger une difficulté à rester en paix avec soi sans réparer, porter ou soulager. Une posture de Persécuteur chaud peut protéger une peur de la trahison, une tension liée à la perte de contrôle ou une insécurité profonde qui se décharge dans l’action, la correction ou l’attaque. Une posture de Persécuteur froid peut protéger une rigidité intérieure, une douleur figée ou une manière de faire porter à l’autre le malaise par la froideur, sans forcément le verbaliser. Une posture de Sauveur stratégique peut protéger une image menacée, un pouvoir fragilisé ou la peur de perdre l’emprise sur la relation. Lire le triangle de cette manière permet de dépasser le comportement visible pour aller vers la logique intérieure qui s’active.",
    },
    {
      kicker: "Circulation dans le triangle",
      lead: "Le triangle est un mouvement relationnel, pas une case figée.",
      text: "Une personne peut commencer dans une posture de Victime, porter la faute, puis devenir Sauveur-réparateur pour retrouver une forme de paix, puis basculer en Persécuteur lorsque la frustration, la peur ou l’impuissance montent. Une autre peut accuser, contrôler ou corriger, puis revenir dans une posture réparatrice apparente. Le triangle montre ainsi un mouvement relationnel automatique qui tourne tant que la blessure, l’émotion et la responsabilité profonde ne sont pas reconnues.",
    },
    {
      kicker: "Sortir du triangle",
      lead: "Voir le rôle permet de retrouver de la clarté, de la responsabilité et de l’alignement.",
      text: "Repérer le triangle permet de ralentir le mécanisme automatique. La personne peut alors observer ce qui s’active en elle, reconnaître la blessure touchée, accueillir l’émotion présente, remettre de la conscience dans la relation et retrouver une posture plus juste. Sortir du triangle, c’est passer de la faute portée à la responsabilité consciente, de la réparation automatique à une présence ajustée, du rejet de la faute sur l’autre à une parole plus lucide, de la confusion à la clarté, et du contrôle ou du sacrifice à une présence plus alignée.",
    },
    {
      kicker: "Message clé",
      lead: "Le triangle ne sert pas à accuser ; il sert à lire plus finement ce qui se joue.",
      text: "Repérer le triangle aide à comprendre la dynamique relationnelle en cours, à différencier les moteurs invisibles derrière la posture visible, et à ouvrir un chemin plus conscient, plus responsable et plus libre.",
    },
    {
      kicker: "Version synthétique",
      lead: "Le triangle de Karpman peut se lire à travers la faute, la réparation et le déplacement du malaise.",
      text: "Victime : je porte la faute. Rejet → victime silencieuse. Abandon → victime exprimée. Sauveur-réparateur : je dois réparer pour être en paix. Humiliation → sauveur sacrificiel. Trahison → sauveur stratégique possible. Persécuteur chaud / juge communicant : je rejette la faute sur l’autre en contrôlant, en corrigeant, en tranchant. Trahison → contrôle, correction, prise de pouvoir. Persécuteur froid / juge silencieux : je rejette la faute sur l’autre en laissant l’autre porter le malaise. Injustice → rigidité, froideur. Clé de lecture : le rôle visible protège souvent une douleur plus profonde.",
    },
  ]
},
{
  id: "base_culpabilite",  slug: "bases-culpabilite",
  type: "BASE",
  title: "La culpabilité",
  subtitle: "Quand la protection cède, la culpabilité se met en lumière",
  content: [
    {
      kicker: "Culpabilité",
      lead: "Quand la protection cède, la culpabilité remonte plus clairement",
      text: "La culpabilité apparaît souvent lorsque la personne commence à sortir de ses mécanismes de protection et voit plus clairement ce qu’elle a vécu, perdu, tu, permis, accepté, porté, empêché, ou laissé se produire. Elle remonte fréquemment lorsque la croyance limitante devient plus visible, que le déni cède, que la réalité intérieure se laisse enfin regarder, et qu’un deuil commence à se faire. Dans ce passage, la personne rencontre plus facilement des phrases intérieures comme : « j’aurais dû », « je n’aurais pas dû », « j’aurais pu empêcher », « j’aurais dû voir », « j’aurais dû dire ». La culpabilité marque alors un moment charnière : la blessure ne reste plus seulement recouverte, elle commence à être reconnue.",
    },
    {
      kicker: "Deuil",
      lead: "La culpabilité remonte souvent quand l’illusion ne tient plus",
      text: "Toute blessure profonde implique une forme de deuil. Il peut s’agir du deuil d’une personne, d’un lien, d’une sécurité, d’une réparation attendue, d’une image idéale, d’une reconnaissance espérée, ou d’un possible qui n’a pas eu lieu. Tant que la psyché protège encore ce lien, cette image ou cette illusion, la culpabilité peut rester recouverte. Quand la réalité devient plus visible, elle peut remonter avec force. La personne commence alors à voir ce qu’elle n’a pas pu dire, ce qu’elle n’a pas pu empêcher, ce qu’elle a accepté pour survivre, ou ce qu’elle s’est reproché à tort. Dans cette lecture, la culpabilité surgit souvent au moment où le deuil commence réellement à être traversé.",
    },
    {
      kicker: "Honte et responsabilité",
      lead: "La culpabilité parle d’un acte, la honte parle de l’être",
      text: "La culpabilité touche ce que la personne croit avoir fait, omis, permis ou raté. La honte touche ce qu’elle croit être. La culpabilité dit : « j’ai mal fait », « j’aurais dû », « je porte une part ». La honte dit : « je suis mauvais », « je suis défectueux », « je suis indigne ». Cette distinction est essentielle, car une culpabilité reconnue peut ouvrir un chemin de conscience et de responsabilité plus juste, tandis qu’une honte installée enferme l’être dans une identité blessée. Le travail thérapeutique consiste alors à différencier ce qui relève d’une responsabilité réelle, d’une culpabilité apprise, d’une culpabilité imaginaire, ou d’une faute portée à la place d’un autre.",
    },
    {
      kicker: "Blessures émotionnelles",
      lead: "Chaque blessure colore différemment la manière de porter, projeter ou traverser la faute",
      text: "Chaque blessure émotionnelle colore la culpabilité d’une manière particulière. Dans le rejet, la culpabilité touche souvent ce qui n’a pas été dit, montré, demandé ou assumé ; elle peut prendre la forme d’un effacement, d’un retrait ou d’une difficulté à prendre sa place. Dans l’abandon, elle touche le besoin, l’attachement, la peur de perdre, le fait de dépendre, d’attendre ou de trop demander ; elle peut s’accompagner d’un fort sentiment d’insécurité affective. Dans l’humiliation, elle touche la valeur de soi, le poids que l’on croit représenter, le rapport au désir, à la dignité, au corps, au plaisir ou au service ; elle conduit souvent à porter trop, à se charger, à se sacrifier ou à se rabaisser. Dans la trahison, la culpabilité peut remonter lorsque le déni cède et que la personne reconnaît ce qu’elle n’a pas voulu voir, ou voit à quel endroit elle s’est quittée elle-même pour préserver un lien ou garder le contrôle. Dans l’injustice, la culpabilité s’associe plus facilement au juge intérieur, à l’exigence, à l’erreur, à l’imperfection, à la retenue émotionnelle, et à une forme de rigidité tournée contre soi ou silencieusement contre l’autre. Une blessure n’est pas un rôle du triangle de Karpman, mais elle peut favoriser certaines postures de survie dans la manière de porter la faute, de réparer, de se retirer, de juger ou de contrôler.",
    },
    {
      kicker: "Schéma",
      image: "schema_culpabilite.svg",
      imageAlt: "Schéma de la culpabilité",
    },
    {
      kicker: "Triangle de Karpman",
      lead: "La faute peut être portée sur soi, réparée, ou rejetée sur l’autre",
      text: "Dans le triangle de Karpman, la culpabilité se manifeste de plusieurs manières. En posture de victime, la personne porte la faute et se vit comme celle qui n’a pas su, pas pu, pas bien fait. En posture de sauveur-réparateur, elle cherche à réparer, porter, soulager ou empêcher, comme si la paix intérieure passait par le fait de prendre en charge ce qui déborde. En posture de persécuteur chaud, ou juge communicant, elle rejette la faute sur l’autre de manière visible, directe, contrôlante, corrective ou tranchante. En posture de persécuteur froid, ou juge silencieux, elle rejette aussi la faute sur l’autre, mais par fermeture, retrait, distance, rigidité ou pression muette ; l’autre se retrouve alors à porter le malaise sans que tout soit clairement dit. Dans cette lecture, la culpabilité peut se retourner contre soi, se transformer en besoin de réparer, ou se projeter sur l’autre de manière chaude ou silencieuse.",
    },
    {
      kicker: "Trahison et injustice",
      lead: "L’une contrôle plus souvent de manière visible, l’autre plus souvent de manière froide ou silencieuse",
      text: "La trahison et l’injustice peuvent toutes deux conduire à une posture de contrôle, mais elles ne prennent pas toujours la même forme. Dans la trahison, la tension sort plus facilement de manière visible, active, contrôlante, verbale ou corrective. La personne veut reprendre la main, vérifier, maîtriser, trancher, comprendre, remettre de l’ordre, parfois de manière très directe. Cela rejoint davantage le persécuteur chaud ou le juge communicant. Dans l’injustice, la tension se fige plus facilement de manière intérieure, froide, silencieuse, contenue ou raide. La personne se coupe du ressenti, se juge, juge l’autre sans forcément le verbaliser, se ferme, se retire ou laisse l’autre sentir la faute sans la nommer clairement. Cela rejoint davantage le juge intérieur, le juge silencieux, ou le persécuteur froid.",
    },
    {
      kicker: "Transformation",
      lead: "La guérison passe par le tri, la conscience et le relâchement",
      text: "Guérir ne consiste pas à supprimer toute culpabilité. Guérir consiste à la rencontrer, à l’écouter, à la trier, puis à la remettre à sa juste place. Il s’agit de reconnaître ce qui appartient réellement à soi, de différencier ce qui relevait de l’âge, du contexte, du trauma, de la blessure ou du système relationnel, de rendre ce qui ne nous appartient pas, puis de transformer la culpabilité en conscience, en responsabilité juste, en réparation possible, et enfin en relâchement intérieur. Tant que la culpabilité reste recouverte, la blessure continue souvent d’organiser les réactions, les défenses et les rôles de survie. Lorsqu’elle est reconnue et traversée, elle devient un passage central de transformation.",
    },
    {
      kicker: "Phrase clé",
      lead: "Une synthèse simple à retenir",
      text: "La culpabilité apparaît souvent lorsque la personne commence à quitter ses protections et rencontre enfin la réalité de la blessure, de la perte, de la croyance et de ce qui n’a pas pu être vécu, dit, empêché ou réparé.",
    },
    {
      kicker: "Repère pédagogique",
      lead: "Le point charnière du chemin d’intériorité",
      text: "Faire face à la culpabilité constitue souvent un point charnière du chemin d’intériorité : tant qu’elle reste recouverte, la blessure conserve son pouvoir d’organisation ; lorsqu’elle est reconnue, triée et traversée, un espace de guérison plus profond peut s’ouvrir.",
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
  subtitle: "Comportement de supériorité",
  grid: [
    ["Émotion racine", "Surprise."],
    ["Sentiments possibles", EMOTION_TO_SENTIMENTS.surprise],
    ["Origine", "La blessure de trahison peut naître lorsqu’un lien censé protéger, rassurer ou tenir parole devient source d’incohérence, de déception ou d’insécurité. Elle se construit autour d’expériences où l’enfant a pu ressentir qu’une promesse n’était pas tenue, qu’un engagement était rompu, ou qu’un adulte important manquait de fiabilité. La confiance se fissure, et l’être apprend à se protéger par la maîtrise."],
    ["Âge d’ancrage", "Souvent autour de 6 à 7 ans. C’est une période où les notions de confiance, de loyauté, d’engagement et de fiabilité prennent davantage de sens. La blessure peut alors commencer à se structurer plus nettement."],
    ["Masque / fonctionnement", "Masque du contrôlant. La personne cherche à garder la main, à anticiper, à vérifier, à obtenir des garanties, à cadrer ou à influencer pour éviter d’être surprise, trompée ou déçue. Elle peut paraître forte, sûre d’elle, dominante ou très réactive, alors qu’au fond elle cherche surtout à ne plus revivre l’insécurité relationnelle."],
    ["Empathie blessée", "Sous l’effet de la blessure de trahison, l’autre est facilement filtré à travers la méfiance, le contrôle ou le test permanent. L’écoute perd en disponibilité, car la vigilance prend plus de place que l’accueil réel de ce que l’autre vit. La personne peut croire qu’elle voit clair, alors qu’elle reste surtout en alerte."],
    ["Comportements dysfonctionnels", "Contrôle, besoin d’avoir raison, test permanent, vérification, surveillance, prise de pouvoir, difficulté à déléguer, tension relationnelle, exigence élevée, volonté d’imposer sa lecture ou son rythme. Le lien peut alors être utilisé pour se sécuriser plutôt que pour rencontrer réellement l’autre."],
    ["Valeurs", "Loyauté, fidélité, vérité, fiabilité, engagement, clarté, cohérence, sécurité, protection, force, famille."],
    ["Croyances limitantes", "« Les autres vont forcément me trahir. » « Je dois garder le contrôle pour être en sécurité. » « On ne peut faire confiance à personne. » « Si je relâche, je serai déçu. » « Je dois vérifier pour éviter d’être trompé. »"],
    ["Croyances expansives", "« Je peux rester clair sans contrôler. » « Je peux faire confiance avec discernement. » « Je peux poser un cadre sans dominer. » « La sécurité intérieure ne dépend pas de la maîtrise de l’autre. » « Je peux rester fort tout en laissant de la place au lien. »"],
    ["Incarner son plein potentiel", "Quand cette blessure s’apaise, l’être peut incarner la loyauté, la fiabilité, la clarté, le discernement, la force tranquille et un leadership juste. La puissance ne passe plus par le contrôle, mais par une sécurité intérieure stable, une parole nette et une confiance consciente. La personne peut alors guider sans imposer, voir clair sans soupçonner, protéger sans dominer, et s’engager avec solidité dans des liens plus vrais."],
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
      ["Masque / comportement", "Masque du rigide. Perfectionnisme, hautain, dureté avec soi et les autres. Besoin de justice, refus de l’imperfection, Supériorité morale, Froideur.",],
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
  { section: "Bases", items: ["base_blessures", "base_croyances", "base_confort", "base_empathie", "base_karpman", "base_culpabilite"] },
  { section: "Blessures émotionnelle", items: ["w_joie", "w_trahison", "w_abandon", "w_injustice", "w_rejet", "w_humiliation"] },
  { section: "Comportements", items: ["ref_addictions", "ref_valeurs", "ref_dogmes"] },
  { section: "Références", items: ["ref_sources"] },
];

export { PAGES, NAV };
