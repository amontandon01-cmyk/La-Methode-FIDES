/* data.js — données pédagogiques
   Contient :
   - PAGES
   - NAV
*/

"use strict";
/* ---------------------------- Pages (contenu) ---------------------------- */
const PAGES = [
  // ACCUEIL
  {
    id: "home",
    slug: "vue-densemble",
    type: "HOME",
    title: "Vue d’ensemble",
    subtitle: "Bases • Blessures • Comportements",
    content: [
      {
        kicker: "Vue d’ensemble",
        lead: "Support de formation — La Méthode FIDES",
        text: "Un support pédagogique pour comprendre le cadre, repérer l’émotion activée, identifier la blessure, lire les mécanismes visibles, retrouver la croyance limitante, et ouvrir un réalignement vers plus d’authenticité.",
      },
      {
        kicker: "Clé de lecture",
        lead: "La dynamique du processus",
        text: "Le déclencheur active une émotion. L’émotion révèle une blessure. La blessure s’appuie sur une croyance limitante. Cette croyance influence les mécanismes visibles. Le réalignement ouvre une manière d’être plus authentique.",
        steps: [
          "Déclencheur",
          "Émotion",
          "Blessure",
          "Croyance limitante",
          "Mécanismes visibles",
          "Réalignement",
          "Authenticité",
        ],
      },
      {
        layout: "split",
        left: {
          kicker: "Émotions",
          image: "schema_emotions.png",
          imageAlt: "Schéma des émotions",
          imageBottomSpace: "18px",
        },
        right: {
          layout: "tilesCard",
          kicker: "Repères",
          items: [
            {
              title: "Blessures",
              desc: "Lire une blessure : émotion racine, sentiments possibles, masque, croyances associées et logiques de protection.",
            },
            {
              title: "Comportements",
              desc: "Relier le vécu aux mécanismes visibles : addictions, rigidités, dogmes, évitements, contrôle, compensation ou répétition.",
            },
            {
              title: "Empathie",
              desc: "Accueillir ce que l’autre vit, ressent et perçoit, puis prendre de la hauteur.",
            },
          ],
        },
      },
      {
        kicker: "Mandala",
        image: "schema_mandala.svg",
        imageAlt: "Mandala de la Méthode Fides",
      },
    ],
  },

  // BASES
  {
    id: "base_confort",
    slug: "bases-confort",
    type: "CONTENT",
    title: "Le cercle de la zone de confort",
    subtitle: "Du confort à l’ouverture",
    content: [
      {
        kicker: "Définition",
        lead: "La zone de confort ne parle pas seulement d’habitudes extérieures.",
        text: "La zone de confort correspond à un espace connu, prévisible et émotionnellement balisé. Elle donne une impression de sécurité, car elle évite l’inconnu, limite l’exposition et permet de rester dans des réactions déjà maîtrisées. Elle peut rassurer à court terme, mais elle entretient aussi les anciens réflexes de protection.",
      },
      {
        kicker: "Schéma",
        image: "schema_zone_de_confort.png",
        imageAlt: "Schéma de la zone de confort",
      },
      {
        kicker: "Déclencheur / Trigger",
        text: "Un déclencheur est une situation, une parole, un silence, un engagement ou un imprévu qui active quelque chose en moi.",
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
    id: "base_langages_apprentissage",
    slug: "bases-langages-apprentissage",
    type: "CONTENT",
    title: "Langages d’apprentissage",
    subtitle: "Blessures & perception",
    content: [
      {
        kicker: "Définition",
        lead: "Les blessures émotionnelles influencent parfois la manière dont une personne perçoit le monde et intègre l’expérience.",
        text: "Lorsqu’une blessure s’active, certains canaux sensoriels peuvent prendre plus de place. Cela influence la façon dont la personne observe, comprend et réagit à une situation. Il ne s’agit pas d’une règle fixe, mais d’une tendance observable qui peut aider à lire certains comportements.",
      },
      {
        kicker: "Schéma",
        image: "schema_langages.png",
        imageAlt: "Schéma des langages d’apprentissage",
      },
      {
        kicker: "Trahison",
        lead: "La blessure de trahison pousse souvent à observer et à vérifier.",
        text: "Le visuel peut devenir dominant : observation attentive, recherche d’indices, besoin de cohérence entre les paroles et les actes. L’auditif peut également être sensible aux promesses et aux contradictions.",
      },
      {
        kicker: "Abandon",
        lead: "La blessure d’abandon touche profondément le lien et la relation.",
        text: "Le canal auditif peut prendre une grande place : importance du ton de voix, attente de réponses, sensibilité au silence, besoin d’entendre que le lien est maintenu. Le corporel peut aussi vivre l’insécurité ou la peur du vide relationnel.",
      },
      {
        kicker: "Injustice",
        lead: "La blessure d’injustice s’accompagne souvent d’un fort contrôle intérieur.",
        text: "Le corporel et l’auditif interne peuvent se combiner : tension dans le corps, exigence intérieure, dialogue mental critique ou jugeant. Le visuel peut soutenir une image idéale de rigueur ou de perfection.",
      },
      {
        kicker: "Rejet",
        lead: "La blessure de rejet s’accompagne souvent d’un vécu très intérieur.",
        text: "Le corporel peut devenir dominant : sensation de vide, retrait intérieur, impression de disparaître, besoin de se protéger en se mettant à distance. Le visuel intérieur peut aussi apparaître sous forme d’imaginaire ou de refuge intérieur.",
      },
      {
        kicker: "Humiliation",
        lead: "La blessure d’humiliation touche fortement le rapport au corps.",
        text: "Le corporel est souvent très présent : sensations de honte, gêne physique, impression d’être exposé ou diminué. Dans certains cas, les sensations liées à l’environnement, comme les odeurs, le goût ou la proximité corporelle, peuvent également être très marquées.",
      },
      {
        kicker: "Lecture globale",
        lead: "Cette lecture croisée affine la compréhension de ce qui se vit.",
        text: "Lorsque l’on observe à la fois le langage d’apprentissage, le canal sensoriel dominant et la blessure activée, il devient plus facile de comprendre comment la personne perçoit une situation, comment elle intègre une expérience et comment elle se protège intérieurement. Cette lecture permet d’adapter l’accompagnement et de rejoindre la personne dans sa manière unique de vivre le monde.",
      },
    ],
  },

  {
    id: "base_blessures",
    slug: "bases-blessures",
    type: "CONTENT",
    title: "Les blessures émotionnelles",
    subtitle: "Blessures prédominantes & personnalité",
    content: [
      {
        kicker: "Définition",
        lead: "Une blessure activée colore le présent à travers une douleur plus ancienne.",
        text: "Une blessure émotionnelle activée nourrit une croyance limitante et autorise des comportements dysfonctionnels. Une même situation peut ainsi réveiller des réactions très différentes. Une blessure émotionnelle colore la perception de soi, de l’autre et du monde dès qu’un élément du présent vient toucher une douleur déjà inscrite dans l’être. Cette activation peut naître d’une parole, d’un ton, d’un regard, d’un silence, d’un geste, d’une posture, d’un non-verbal, d’une distance, d’un changement, d’une absence de réponse ou d’un simple ressenti intérieur. Lorsqu’elle se réveille, la blessure influence immédiatement les émotions, les pensées, les relations, les mécanismes de protection et les comportements. Elle nourrit alors une croyance limitante qui donne du sens à ce qui est vécu et qui peut aller jusqu’à autoriser des réactions déplacées ou dysfonctionnelles, vécues intérieurement comme logiques, normales ou nécessaires. La personne agit alors à travers sa propre carte du monde, sans toujours voir qu’elle réagit autant à la situation présente qu’à ce qu’elle vient réveiller dans son histoire. Face à une remarque, une culpabilité, une incertitude, un imprévu ou un changement, chaque personne traverse donc l’expérience à travers ses blessures prédominantes et à travers la carte du monde construite par son histoire. Ce filtre intérieur explique pourquoi deux personnes peuvent vivre la même scène de manière totalement différente. Lorsqu’une blessure s’active, la personne cherche inconsciemment à préserver sa cohérence et à éviter de revivre une douleur ancienne. C’est à cet endroit que la fermeture émotionnelle, la crispation intérieure ou le mécanisme de protection prennent le dessus.",
      },
      {
        kicker: "Toutes les blessures existent chez chacun",
        lead: "Tout le monde porte les blessures, avec une intensité différente selon son histoire et son fonctionnement.",
        text: "La différence se joue dans la prédominance. Chaque être humain porte en lui les différentes blessures émotionnelles à des degrés variables. La différence se situe dans l’intensité avec laquelle certaines s’activent, dans la fréquence à laquelle elles prennent le dessus et dans la place qu’elles occupent dans le fonctionnement quotidien. Une blessure devient prédominante lorsqu’elle influence plus souvent la lecture du monde, les croyances, les stratégies de protection et les comportements. Elle imprime alors sa couleur à la personnalité et oriente la manière de chercher du lien, de la sécurité, de la reconnaissance, du contrôle ou de l’apaisement.",
      },
      {
        kicker: "Les blessures prédominantes dans la personnalité",
        lead: "Les blessures dominantes donnent la tonalité générale du fonctionnement et orientent la manière de se protéger.",
        text: "Elles donnent la tonalité principale de la personnalité. Une ou deux blessures dominantes orientent souvent la manière de se protéger, de créer du lien, de réagir au stress, à la panique, à l’imprévu ou à la douleur intérieure. Elles influencent les croyances les plus actives, les comportements qui reviennent le plus souvent et les mécanismes par lesquels la personne tente de garder l’équilibre. Les autres blessures restent présentes et peuvent aussi s’activer, avec une présence moins fréquente au premier plan. La grande différence entre ces fonctionnements se situe dans la manière dont l’émotion circule, se bloque ou s’exprime. Dans les dynamiques d’abandon et de trahison, l’émotion déborde plus facilement vers l’extérieur à travers des réactions visibles, des décharges, du contrôle, de la manipulation ou des comportements inadéquats. Dans les dynamiques de rejet et d’injustice, l’émotion reste davantage retenue dans l’être et s’exprime surtout par le retrait, le silence, la rigidité, l’auto-contrôle ou l’effacement. La blessure d’humiliation peut elle aussi devenir prédominante, avec une coloration différente. Elle oriente plus facilement vers l’oubli de soi, le sacrifice, la suradaptation, le fait de porter pour les autres et de chercher sa valeur dans l’utilité, le service ou la réparation. Dans cette dynamique, l’émotion réelle reste souvent recouverte par la honte, la culpabilité, le malaise ou le dégoût, ce qui éloigne la personne de ses besoins, de son corps et de ses désirs. Dans les trois cas, l’émotion réelle reste souvent mal identifiée, ce qui entretient les croyances limitantes et les comportements dysfonctionnels.",
      },
      {
        kicker: "Schéma",
        image: "schema_blessure_1.svg",
        imageAlt: "Schéma des blessures émotionnelles",
      },
      {
        kicker: "Personnalité prédominant surprise / peur",
        lead: "Quand l’incompréhension pousse à contrôler, à manipuler et à chercher de la sécurité à l’extérieur.",
        text: "Quand l’incompréhension active le besoin de contrôle, puis ouvre sur la peur de perdre sa sécurité. Cette personnalité est liée à des blessures telles que la trahison et l’abandon. La surprise apparaît lorsque ce qui se passe ne rentre plus dans la carte du monde de la personne. À cet instant, la blessure s’active, les repères vacillent et le besoin de retrouver de la cohérence prend toute la place. Pour recréer un sentiment de maîtrise, la personne peut entrer dans une dynamique de contrôle et de manipulation : elle cherche à influencer l’autre, à orienter sa réaction, à obtenir une réponse qui la rassure ou à le faire rentrer dans sa propre lecture du monde. L’émotion sort plus facilement vers l’extérieur, tout en restant souvent mal reconnue ou mal nommée. La personne peut croire qu’elle vit de la colère, alors qu’en profondeur elle traverse surtout de la surprise, de la frustration, de l’insécurité ou de la peur. Lorsque la blessure d’abandon est également présente, cette surprise bascule rapidement dans la peur, car l’être se sent fragilisé, menacé dans son appui et profondément insécurisé. Dans cette dynamique, le regard devient facilement pessimiste : dans sa carte du monde, rien ne va, rien n’est assez sûr, rien n’est assez stable, même lorsque, concrètement, beaucoup de choses sont déjà là. La personne peut alors contrôler, vérifier, réclamer, tester, anticiper, manipuler, retenir ou chercher à sécuriser le lien à tout prix. Elle peut aussi se déresponsabiliser plus facilement et attendre que l’extérieur répare, rassure ou porte ce qu’elle ne se sent pas prête à porter elle-même. Derrière une apparente force ou une réaction volcanique, il existe souvent une peur très active, peu reconnue, qui pousse à éviter la chute, la déception, la perte d’appui ou la perte de contrôle. Il faut aussi comprendre que la personne se lit rarement avec justesse dans cette zone : ses stratégies de protection sont tellement installées qu’elle peut se reconnaître plus facilement dans une blessure opposée, simplement parce que cela la rassure et l’éloigne de l’émotion réelle à traverser.",
      },
      {
        kicker: "Personnalité prédominant tristesse / colère intérieure",
        lead: "Quand l’émotion reste enfermée dans l’être et se transforme en retrait, en silence ou en rigidité.",
        text: "Quand l’émotion reste bloquée dans l’être et se transforme en retrait, en silence ou en rigidité. Cette personnalité est liée à des blessures telles que le rejet et l’injustice. Ici, l’émotion circule beaucoup moins vers l’extérieur et reste davantage retenue à l’intérieur. La personne garde beaucoup en elle, se ferme, se retire, se contrôle, se rigidifie ou s’efface, même lorsque la tension intérieure est forte. La tristesse pousse souvent à la fuite silencieuse et à l’espoir que l’autre comprenne seul qu’il y a un problème, sans que les mots aient besoin d’être posés. Elle peut aussi nourrir une forme de positivité de surface : la personne se dit que cela ira mieux plus tard, que demain sera différent, que tout finira par rentrer dans l’ordre, puis elle glisse sous le tapis ce qui demande à être ressenti. À l’extérieur, elle peut alors sembler positive, tenir bon et donner l’impression que tout va bien, alors qu’en profondeur l’émotion reste bloquée et peu reconnue. La colère, quant à elle, peut rester enfermée à l’intérieur sans être exprimée directement, par peur de faire mal, de dépasser sa pensée ou de créer une rupture. À l’extérieur, la personne peut sembler calme, solide, maîtrisée ou même sereine, alors qu’à l’intérieur elle retient énormément. Elle peine souvent à nommer précisément ce qu’elle ressent et parle plus volontiers d’un mal-être global que d’une émotion claire. Dans la blessure de rejet, elle peut aussi porter toutes les problématiques du monde sur ses épaules et se responsabiliser de manière excessive, comme si tout dépendait d’elle ou comme si elle devait tout absorber pour que l’équilibre tienne. Ce fonctionnement s’appuie fréquemment sur une image de tenue, de maîtrise, de foi en la vie ou de solidité intérieure, tout en laissant peu de place à l’expression directe de la vulnérabilité. La croyance limitante donne alors une cohérence au comportement : se taire semble protéger, se retirer semble préserver, se sacrifier semble maintenir le lien, et se montrer irréprochable semble garantir sa place. Là aussi, le regard sur soi peut être biaisé : la personne lit parfois son fonctionnement à l’envers et se reconnaît plus facilement dans une blessure opposée, précisément parce que ses stratégies de protection l’éloignent de ce qui est réellement actif en elle.",
      },
      {
        kicker: "Dégoût, humiliation et oubli de soi",
        lead: "Quand le sacrifice pousse à s’oublier, à ne plus sentir ses désirs, puis révèle ce qui a réellement été nourri.",
        text: "Quand le sacrifice révèle l’humiliation infligée à son propre corps et ramène à ses responsabilités réelles. Cette dynamique est liée à la blessure d’humiliation et à l’émotion de dégoût qui lui est profondément associée. Tant que cette blessure organise le fonctionnement, la personne cherche sa valeur dans l’utilité, le service, la générosité et la capacité à porter pour les autres. Elle anticipe les besoins, prend sur elle les responsabilités, arrange, aide, répare, soutient et donne souvent bien au-delà de sa juste part, parfois avant même qu’une demande soit formulée. Cette logique peut prendre une forme masochiste : la personne se place constamment au second plan, offre son temps libre, son énergie, son corps et sa disponibilité, puis nourrit l’idée que sa dignité et sa valeur passent par ce qu’elle fait pour les autres. À force de vivre ainsi, elle s’éloigne progressivement d’elle-même et perd le contact avec ses propres désirs. Elle ne sait plus vraiment ce qu’elle aime, ce qu’elle veut, ce qui la nourrit ni ce qui lui ferait du bien, car toute son attention reste tournée vers l’extérieur, vers l’action, vers l’utilité et vers les attentes supposées de son entourage. Son corps devient alors un territoire peu écouté, poussé, dépassé, utilisé sans respect de son rythme, de ses limites et de ses besoins. Lorsque la conscience s’ouvre enfin sur ce fonctionnement, le dégoût peut monter avec une grande intensité. Il met en lumière la honte, la culpabilité, les regrets et les remords liés à ce que la personne s’est autorisé à travers ses croyances limitantes. Elle voit alors qu’en voulant servir, sauver, soulager ou tenir pour tout le monde, elle a aussi humilié son propre corps, oublié son propre être et entretenu un fonctionnement qui l’éloignait de sa vérité. Faire face au dégoût revient alors à faire face à ses responsabilités réelles : reconnaître ce qu’elle a nourri, voir les conséquences concrètes de ce sacrifice, comprendre la croyance qui le soutenait, puis retrouver une juste place où l’écoute de soi, le respect du corps et l’accueil de ses propres désirs reprennent leur place dans la vie. Phrase clé : Le dégoût apparaît lorsque la personne voit enfin qu’en voulant être utile à tous, elle s’est oubliée elle-même au point de perdre le contact avec ses propres désirs.",
      },
      {
        kicker: "Schéma",
        image: "schema_blessure_2.svg",
        imageAlt: "Schéma des blessures émotionnelles",
      },
      {
        kicker: "Les comportements observables au quotidien",
        lead: "Les comportements visibles traduisent une logique intérieure plus profonde, portée par la blessure et la croyance.",
        text: "Ce que l’on observe dans le quotidien. Lorsqu’une blessure émotionnelle s’active, la personne cherche inconsciemment à éviter l’émotion ressentie ou à retrouver une impression de sécurité intérieure. Les comportements observables, comme le contrôle, la manipulation, le retrait, l’hyperadaptation, le sacrifice, la quête de reconnaissance, la rigidité, les addictions, les valeurs affichées comme des refuges, les dogmes ou certaines croyances, deviennent alors des stratégies de protection. Ces comportements prennent appui sur une croyance intérieure qui leur donne une autorisation et une légitimité dans la carte du monde de la personne. Comprendre ce lien permet d’identifier plus justement la blessure à l’origine, la croyance qui la soutient et le mécanisme de protection qui s’exprime à travers le comportement.",
      },
      {
        kicker: "Direction et ouverture de conscience",
        lead: "La transformation commence lorsque la conscience remplace l’automatisme et que l’être voit enfin ce qu’il nourrit.",
        text: "Passer de la fermeture à l’ouverture de conscience. Le chemin consiste à reconnaître ses blessures, à comprendre leur logique et à voir comment elles influencent les croyances, les perceptions et les comportements. Lorsque cette mise en lumière devient possible, la personne commence à voir ce qu’elle s’est autorisé à vivre, à faire, à imposer, à retenir ou à répéter à travers ses croyances limitantes. Cette étape demande une grande honnêteté intérieure, car elle confronte l’être à ses mécanismes les plus anciens et à ce qu’ils ont produit dans sa manière d’aimer, de se protéger, de réagir ou d’entrer en relation. C’est précisément cette conscience qui ouvre le passage vers une évolution plus juste, plus responsable et plus apaisée.",
      },
      {
        kicker: "Finalité et chemin de reconnexion",
        lead: "Comprendre ses blessures ouvre un chemin de reconnexion à soi, à l’autre et à la vie, avec plus de conscience et de justesse.",
        text: "Tout le monde porte toutes les blessures, avec une intensité différente, et leur compréhension ouvre un chemin de reconnexion. Le but est de retrouver la connexion à soi, à l’autre et à la vie avec davantage de présence, de discernement, d’acceptation et de stabilité intérieure. En comprenant les blessures, les croyances qu’elles alimentent et les comportements qu’elles autorisent, la personne accède à une lecture plus fine de son fonctionnement. Elle peut alors quitter peu à peu la fermeture émotionnelle, assouplir sa carte du monde et revenir à une relation plus consciente avec elle-même, avec les autres et avec ce qu’elle traverse. Comprendre ses blessures prédominantes aide à mieux lire ses réactions, ses croyances, ses comportements et ses blocages. C’est une porte d’entrée essentielle pour reconnaître ce qui s’active dans le présent, comprendre ce que l’on s’autorise à travers ses croyances limitantes et ouvrir un chemin de transformation plus conscient. Cette lecture prépare naturellement la compréhension de la zone de confort, de la peur, de l’apprentissage et de l’expansion.",
      },
      {
        kicker: "Schéma",
        image: "schema_blessure_3.svg",
        imageAlt: "Schéma des blessures émotionnelles",
      },
    ],
  },
  {
    id: "base_vulnerabilites_amour",
    slug: "vulnerabilites-amour",
    type: "CONTENT",
    title: "Les vulnérabilités de l’amour",
    subtitle: "Quand l’amour ouvre les zones sensibles",
    content: [
      {
        kicker: "Amour à deux",
        lead: "L’amour à deux ouvre un espace de rencontre, de proximité, de vérité et de transformation.",
        text: "Il invite chacun à se laisser voir, à offrir une place à l’autre, à accueillir sa présence et à partager une part vivante de son monde intérieur. Quand le lien devient précieux, certaines zones sensibles de l’être s’ouvrent naturellement. La confiance, le lien, la liberté, l’existence et la dignité prennent une place plus forte dans l’expérience relationnelle. Ces vulnérabilités appartiennent à la réalité même de l’amour. Elles révèlent la manière dont chacun s’ouvre, ressent, espère, cherche sa place et protège ce qui compte profondément. Dans la lecture FIDES, les blessures émotionnelles prennent souvent racine dans ces zones sensibles du lien amoureux. L’amour vient alors mettre en lumière ce qui demande à être reconnu, pacifié, restauré et transformé.",
      },
      {
        kicker: "Trahison",
        lead: "La vulnérabilité de la confiance.",
        text: "Dans l’amour à deux, la confiance permet de se déposer, de s’ouvrir, de croire en la parole, en la présence et en l’intention de l’autre. Elle crée un espace où le cœur peut relâcher sa garde et entrer dans une relation plus vivante. Lorsque cette confiance est fragilisée, menacée ou brisée, quelque chose se tend profondément. La personne peut craindre d’être trompée, contournée, manipulée ou surprise là où elle espérait pouvoir se reposer. La question intérieure devient alors : Puis-je faire confiance à l’autre et à la relation ? Pour se protéger, la personne peut observer, vérifier, anticiper, tester, analyser ou chercher à garder la maîtrise de ce qui se passe. Dans l’amour, ce qu’elle cherche profondément est une fiabilité claire, une cohérence stable, une vérité relationnelle qui lui permette peu à peu de relâcher sa vigilance. La guérison commence lorsque la personne peut faire l’expérience d’un lien où la vérité, la cohérence et la sécurité restaurent progressivement la confiance intérieure.",
      },
      {
        kicker: "Abandon",
        lead: "La vulnérabilité du lien.",
        text: "Aimer crée un attachement. Le lien devient vivant, précieux, nourrissant. C’est aussi pour cela qu’il peut devenir un lieu de peur lorsqu’il semble menacé par la distance, le silence, l’éloignement, le retrait ou l’absence. Lorsque cette vulnérabilité s’active, la personne peut craindre de perdre l’autre, de ne plus compter, de ne plus être rejointe ou de se retrouver seule avec ce qu’elle ressent. La question intérieure devient alors : Puis-je aimer sans risquer de perdre le lien ? Pour se protéger, la personne peut chercher à maintenir la proximité, à sentir qu’elle compte, à recevoir des signes, à être rassurée sur sa place et sur la continuité de l’amour. Dans l’amour, ce qu’elle cherche profondément est une présence stable, une continuité du lien, le sentiment qu’elle a une place et qu’elle reste reliée. La guérison commence lorsque la personne peut sentir qu’elle demeure aimée et reliée, même lorsque la distance, le silence ou l’absence traversent la relation.",
      },
      {
        kicker: "Injustice",
        lead: "La vulnérabilité de la liberté.",
        text: "L’amour rapproche. Il invite à la proximité, au partage, à l’ajustement, parfois à la remise en mouvement de certains équilibres intérieurs. Pour certaines personnes, cette proximité peut réveiller une peur plus silencieuse : celle de perdre leur espace, leur autonomie, leur respiration intérieure ou leur liberté d’être. La question intérieure devient alors : Puis-je rester libre et moi-même dans la relation ? Lorsque cette vulnérabilité est touchée, la personne peut se contenir, se rigidifier, rationaliser, garder de la distance émotionnelle, s’appuyer fortement sur l’autonomie ou chercher à préserver son intégrité par le contrôle intérieur. Dans l’amour, ce qu’elle cherche profondément est un espace relationnel où elle peut rester elle-même, libre, respectée dans son rythme, son espace intérieur et sa vérité profonde. La guérison commence lorsque la personne découvre qu’elle peut aimer et être aimée sans se perdre, sans se contraindre intérieurement, et sans renoncer à sa liberté essentielle.",
      },
      {
        kicker: "Rejet",
        lead: "La vulnérabilité de l’existence.",
        text: "Le rejet touche la place même de l’être. Dans le lien amoureux, il apparaît lorsque la personne sent, redoute ou imagine que ce qu’elle est profondément pourrait ne pas être accueilli, aimé ou reconnu. Ce n’est plus seulement le lien qui semble fragile. C’est l’existence même de soi dans le regard de l’autre qui devient sensible. La question intérieure devient alors : Ai-je le droit d’exister tel que je suis dans la relation ? Pour se protéger, la personne peut se retirer, se faire discrète, éviter de trop prendre de place, se couper de certaines parts d’elle-même ou ne pas montrer pleinement ce qu’elle ressent. Elle peut aussi entrer dans une autre stratégie plus subtile : la suradaptation. Elle observe l’autre, sent ce qui lui ferait plaisir, s’ajuste à ses attentes, à ses besoins, à ses humeurs, à ses préférences. Elle devient parfois un véritable caméléon relationnel. Elle peut même ressentir du plaisir à voir l’autre heureux, apaisé ou comblé, comme si le fait de contribuer à son bien-être sécurisait sa propre place dans le lien. Dans l’amour, ce qu’elle cherche profondément est la reconnaissance : être vue, accueillie, reconnue dans ce qu’elle est, avec une place réelle et vivante dans la relation. La guérison commence lorsque la personne fait l’expérience que son existence a de la valeur dans le lien, qu’elle peut être pleinement elle-même, et qu’elle reste digne d’amour sans devoir se modeler pour être gardée.",
      },
      {
        kicker: "Humiliation",
        lead: "La vulnérabilité de la dignité.",
        text: "L’humiliation touche profondément la valeur personnelle et le respect de soi dans la relation. Elle atteint l’endroit où l’être a besoin d’être traité avec considération, douceur et respect. Lorsque cette vulnérabilité est activée, la personne peut vivre intérieurement de la honte, de l’abaissement, une atteinte à son image ou le sentiment d’être rabaissée dans ce qu’elle est. La question intérieure devient alors : Suis-je digne de respect dans la relation ? Pour se protéger, la personne peut se dévaloriser avant que quelqu’un ne le fasse, se rabaisser, porter plus que sa part, se charger, se sacrifier, s’oublier ou accepter des positions qui abîment sa dignité profonde. Dans l’amour, ce qu’elle cherche profondément est le respect, la douceur, la dignité, et la reconnaissance de sa valeur humaine profonde. La guérison commence lorsque la personne retrouve la sensation intime que sa valeur mérite respect, et qu’elle peut aimer sans se rabaisser, sans se sacrifier de manière excessive, et sans blesser sa dignité intérieure.",
      },
      {
        kicker: "Polarités",
        lead: "Dans la lecture FIDES, l’amour à deux met aussi en lumière une dynamique de polarités.",
        text: "Certaines vulnérabilités s’expriment avec une dominante plus intérieure, plus sensible, plus émotionnelle, plus reliée au ressenti et à la vie subtile du lien. D’autres prennent une coloration plus active, plus corporelle, plus mentale, plus orientée vers l’action, la vigilance, la structure ou la direction. Ces polarités éclairent la manière dont chacun aime, perçoit, réagit, se protège et cherche l’équilibre dans la relation. Elles permettent de mieux comprendre les différences de fonctionnement entre deux êtres, sans enfermer l’un ou l’autre dans une catégorie fixe. Dans l’amour vivant, ces polarités se rencontrent, se répondent, s’ajustent et se transforment. Elles participent à un chemin de conscience où chacun apprend à honorer sa nature, à reconnaître celle de l’autre, et à créer une relation plus juste, plus profonde et plus vivante.",
      },
      {
        kicker: "Schéma",
        image: "schema_predominance.svg",
        imageAlt: "Schéma des prédominances",
      },
      {
        kicker: "Comprendre",
        lead: "Les blessures naissent souvent là où l’amour rencontre une vulnérabilité déjà sensible.",
        text: "Lorsqu’une zone profonde est touchée, l’être humain met en place des protections. Ces protections cherchent souvent à préserver le lien, éviter la douleur, garder une place, maintenir une sécurité intérieure ou protéger quelque chose d’essentiel. Avec le temps, elles peuvent pourtant brouiller la relation. Elles influencent la manière d’aimer, de réagir, d’interpréter les gestes de l’autre, de demander, de se taire, de se rapprocher ou de se protéger. Comprendre les vulnérabilités de l’amour à deux permet de voir plus clairement ce que le lien vient réveiller en soi. Cela permet aussi de distinguer l’amour de la peur, la présence du réflexe, le lien de la protection. À cet endroit, la relation devient un espace de conscience. Elle ne révèle plus seulement la blessure. Elle devient aussi un chemin de transformation.",
      },
    ],
  },
  {
    id: "base_intelligences",
    slug: "bases-intelligences",
    type: "CONTENT",
    title: "Les intelligences de reconnexion",
    subtitle: "Cinq chemins intérieurs pour revenir à soi.",
    content: [
      {
        kicker: "Introduction",
        lead: "Chaque blessure émotionnelle coupe d’un appui fondamental.",
        text: "Quand la blessure s’active, la personne perd plus facilement l’accès à une ressource intérieure essentielle. Le chemin de transformation consiste alors à se reconnecter à une intelligence déjà présente en soi, mais momentanément voilée, blessée ou déformée par l’expérience. Ces intelligences ouvrent un passage concret vers une présence plus juste, plus libre et plus incarnée.",
      },
      {
        kicker: "Schéma",
        image: "schema_intelligences.svg",
        imageAlt: "Schéma des 5 intelligences",
      },
      {
        kicker: "L’intelligence spirituelle",
        lead: "Axe de reconnexion : la foi — Blessure associée : la trahison",
        text: "La trahison coupe de la foi profonde. La personne peut perdre foi en l’autre, en la vie, en l’humain, dans le lien, et parfois en plus grand que soi. Le contrôle, le besoin de preuve et une lecture très cartésienne prennent alors le dessus. Se reconnecter à la foi, c’est retrouver une confiance plus vaste, plus profonde et plus stable.",
      },
      {
        kicker: "L’intelligence émotionnelle",
        lead: "Axe de reconnexion : l’amour — Blessure associée : l’abandon",
        text: "L’abandon touche le lien, la présence, le manque affectif et la sécurité du cœur. La personne peut chercher l’amour à l’extérieur, craindre le vide, se sentir incomplète sans présence rassurante et dépendre du lien pour se sentir vivante. Se reconnecter à l’amour, c’est revenir à une qualité de présence plus stable, plus douce et plus libre.",
      },
      {
        kicker: "L’intelligence intellectuelle",
        lead: "Axe de reconnexion : la capacité de discernement — Blessure associée : l’injustice",
        text: "L’injustice rigidifie le mental, le rapport à soi et la manière de penser le réel. La personne peut se couper de sa souplesse intérieure, de sa clarté, de son libre arbitre et de son esprit critique, puis rester enfermée dans le contrôle, l’exigence ou le juge intérieur. Se reconnecter à sa capacité de discernement, c’est retrouver une pensée juste, de la clarté, de la nuance et une lecture plus fine de ce qui est vécu.",
      },
      {
        kicker: "L’intelligence corporelle",
        lead: "Axe de reconnexion : la vie — Blessure associée : le rejet",
        text: "Le rejet touche profondément l’incarnation terrestre. La personne peut se couper de son corps, de sa présence, de son ancrage, de sa place et de son droit d’être là. Se reconnecter à la vie, c’est revenir dans le corps, habiter sa présence, reprendre sa place et cesser de disparaître intérieurement.",
      },
      {
        kicker: "L’intelligence instinctive",
        lead: "Axe de reconnexion : la dignité — Blessure associée : l’humiliation",
        text: "L’humiliation touche la valeur personnelle, le rapport au corps, aux besoins, au plaisir, à la liberté d’être et au droit de recevoir. La personne peut s’oublier, se sacrifier, se rabaisser, faire pour les autres même lorsque cela n’est pas demandé, et aller au-delà des besoins des autres comme si elle devait porter davantage qu’eux. Se reconnecter à sa dignité, c’est revenir au respect intérieur, au droit d’honorer ses besoins, de recevoir sans honte, de ressentir sans culpabilité et de poser ses limites avec simplicité.",
      },
      {
        kicker: "Conclusion",
        lead: "Se reconnecter, ce n’est pas devenir quelqu’un d’autre.",
        text: "C’est retrouver en soi ce qui a toujours été vivant, mais que les blessures ont parfois enfoui ou mis à distance. Plus la personne se reconnecte à la foi, à l’amour, à sa capacité de discernement, à la vie et à sa dignité, plus elle se reconnecte à tout son potentiel.",
      },
    ],
  },

  {
    id: "base_croyances",
    slug: "bases-croyances",
    type: "CONTENT",
    title: "Pensées & croyances limitantes",
    subtitle: "De la fermeture à l’ouverture",
    content: [
      {
        kicker: "Définition",
        lead: "Une pensée traverse l’esprit, une croyance s’installe dans l’être.",
        text: "Les pensées et croyances limitantes sont des filtres intérieurs qui réduisent le champ des possibles. La pensée limitante apparaît dans l’instant, influence le ressenti immédiat et oriente souvent la réaction. La croyance limitante s’inscrit plus profondément et devient une référence intérieure durable, à partir de laquelle la personne se perçoit, perçoit les autres et interprète la vie. Lorsqu’elle s’installe, elle agit comme une vérité intérieure et influence les choix, les émotions, les relations et les comportements au quotidien. Elle peut même aller plus loin en donnant à la personne une forme d’autorisation intérieure à adopter des comportements déplacés ou dysfonctionnels, puisqu’elle rend ces comportements cohérents avec sa lecture du monde, avec ce qu’elle croit juste, légitime ou nécessaire à cet instant.",
      },
      {
      kicker: "Schéma",
      image: "schema_croyances.svg",
      imageAlt: "Schéma des pensées et croyances limitantes"
      },
      {
        kicker: "Le filtre intérieur",
        lead: "Ce que je crois oriente ce que je vois.",
        text: "Chaque personne lit la réalité à travers sa propre carte du monde, c’est-à-dire à travers son histoire, ses repères, ses blessures, ses expériences et le sens qu’elle a donné à ce qu’elle a vécu. Les pensées et croyances limitantes viennent s’ancrer dans cette carte du monde et cherchent ensuite à la maintenir cohérente. La personne sélectionne alors ce qui confirme déjà sa vision, interprète les situations dans ce sens et peut même biaiser la réalité pour que tout continue à s’intégrer à ce qu’elle croit vrai. Dans certains cas, elle cherche aussi à faire entrer l’autre dans cette même lecture du monde, comme si sa perception était la plus juste ou la plus sécurisante. Ce mécanisme réduit l’ouverture, enferme dans des schémas connus et freine l’accès à une vision plus vaste, plus souple et plus vivante de la réalité.",
      },
      {
        kicker: "La naissance de la croyance",
        lead: "Toute croyance prend racine dans une histoire intérieure.",
        text: "Une pensée ou une croyance limitante se construit à partir d’expériences marquantes, d’émotions fortes, de blessures actives, de paroles reçues et de conclusions tirées sur soi, sur les autres ou sur la vie. Lorsqu’un vécu émotionnel touche profondément l’être, celui-ci cherche à lui donner du sens et construit une lecture intérieure destinée à préserver son équilibre. Cette lecture devient progressivement familière, puis structurante, jusqu’à former une croyance qui influence durablement le fonctionnement intérieur.",
      },
      {
        kicker: "Le lien avec les blessures et les comportements",
        lead: "La blessure active la croyance, la croyance guide le comportement.",
        text: "Chaque blessure émotionnelle alimente des pensées particulières et soutient des croyances qui orientent les réactions, les choix et les stratégies de protection. Lorsqu’une blessure s’active, la personne pense, ressent et agit à travers ce filtre, ce qui l’amène à adopter des comportements répétitifs comme la fuite, le contrôle, la suradaptation, l’effacement, l’hypervigilance, l’exigence excessive ou le sacrifice. Le comportement devient alors l’expression visible d’une croyance intérieure plus profonde, souvent installée depuis longtemps dans l’histoire de l’être. À travers cette croyance, la personne se donne intérieurement la permission d’agir de manière déplacée ou dysfonctionnelle, tout en vivant cela comme normal, justifié ou nécessaire au regard de sa propre carte du monde.",
      },
      {
        kicker: "Les signes de leur présence et ce qui les nourrit",
        lead: "Ce qui se répète cherche à être vu, compris et transformé.",
        text: "Les pensées et croyances limitantes se reconnaissent à travers les blocages récurrents, les réactions émotionnelles intenses, les schémas répétitifs, les difficultés à s’autoriser, à choisir, à recevoir, à se positionner ou à avancer avec fluidité. Elles se renforcent par la répétition mentale, par les comportements de protection, par les expériences qui semblent confirmer le schéma et par l’identification progressive de la personne à ce qu’elle croit vivre comme une vérité. Plus cette dynamique se répète, plus la croyance gagne en force et en influence dans la vie quotidienne.",
      },
      {
        kicker: "Le chemin de guérison",
        lead: "La guérison ouvre une nouvelle lecture de soi et de la vie.",
        text: "La guérison commence lorsque la personne repère la pensée qui la traverse, reconnaît la croyance qui l’habite, identifie l’émotion présente et relie cette dynamique à la blessure active. À partir de cette conscience, elle peut accueillir son vécu, comprendre le sens de ses comportements et choisir des ajustements plus alignés avec son être profond. Lorsque la croyance est mise en lumière, la personne comprend qu’elle s’est appuyée sur elle pour s’autoriser certains comportements dysfonctionnels. Cette prise de conscience est intense, parce qu’elle amène une remise en question profonde de soi et de ce que l’on a considéré comme normal, légitime ou juste. C’est à cet endroit que la guérison devient possible : la personne voit enfin que cette croyance a eu une fonction, qu’elle l’a aidée à tenir, à se protéger ou à avancer jusqu’ici, puis elle reconnaît qu’aujourd’hui elle la comprend comme limitante et qu’elle n’a plus besoin de la nourrir. Elle peut alors se pardonner de l’avoir utilisée, la remercier pour ce qu’elle lui a permis de traverser, puis la libérer pour ouvrir un nouveau chemin d’évolution plus conscient, plus ajusté et plus libre.",
      },
    ],
  },
  {
    id: "base_empathie",
    slug: "bases-empathie",
    type: "CONTENT",
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
    id: "base_karpman",
    slug: "bases-karpman",
    type: "CONTENT",
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
    ],
  },
  {
    id: "base_culpabilite",
    slug: "bases-culpabilite",
    type: "CONTENT",
    title: "La culpabilité",
    subtitle: "Quand la protection cède, place à la culpabilité",
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
    id: "w_joie",
    slug: "blessures-joie",
    type: "GRID",
    eyebrow: "Blessure",
    title: "État : JOIE",
    subtitle: "Comportement neutre",
    grid: [
      ["Émotion racine", "Joie."],
      [
        "Sentiments possibles",
        "Amour, Sérénité, Gratitude, Plénitude, Plaisir, Bonheur, Confiance, Inspiration, Espoir, Enthousiasme, Curiosité, Fierté, Admiration, Tendresse, Satisfaction, Soulagement, Amusement, Compassion, Empathie, Ouverture d’esprit, Douceur, Communion, Alignement, Paix intérieure, Liberté, Expansion, Sens du sacré, Engagement, Tranquillité d’esprit.",
      ],
      [
        "Masque / fonctionnement",
        "Aucun masque de protection dominant. La personne est plus simplement reliée à elle-même, à ses ressentis, à son corps, à sa valeur et à sa présence. Elle n’a plus besoin de fuir, de contrôler, de se rigidifier, de se sacrifier ou de se couper pour tenir le lien ou préserver sa sécurité intérieure.",
      ],
      [
        "Empathie",
        "L’empathie n’est plus blessée. La personne peut accueillir ce qu’elle ressent et ce que l’autre vit avec plus de simplicité, de présence et de vérité. Elle reste ouverte à l’autre sans se couper d’elle-même, et ouverte à elle-même sans se perdre dans l’autre.",
      ],
      [
        "Comportements",
        "Sérénité, spontanéité, élan naturel, respiration libérée, capacité à vivre l’instant présent, disponibilité émotionnelle, fluidité dans les échanges, communication constructive, gratitude, authenticité, créativité, coopération, humour, douceur, capacité à poser des choix clairs dans le respect de soi et de l’autre.",
      ],
      [
        "Rapport au non / aux limites",
        "La personne peut dire oui ou non avec simplicité, dans l’honnêteté envers soi, sans se fermer et sans écraser l’autre. Les limites deviennent plus justes, plus claires et plus paisibles. Dire non ne s’accompagne plus d’une arrière-pensée de culpabilité ou de honte.",
      ],
      [
        "Croyances limitantes",
        "À ce stade, les croyances limitantes perdent leur pouvoir d’organisation. Elles peuvent encore exister en mémoire, mais elles ne dirigent plus le fonctionnement.",
      ],
      [
        "Croyances expansives",
        "« J’ai le droit d’être pleinement moi. » « Je peux vivre, aimer, croire et discerner avec simplicité. » « Ce que je ressens a de la valeur. » « Je peux poser mes limites avec paix et honnêteté. » « La joie a le droit d’habiter ma vie. »",
      ],
      [
        "Axe de reconnexion",
        "La joie apparaît lorsque les axes de reconnexion cessent d’être coupés les uns des autres.",
      ],
      [
        "Incarner son plein potentiel",
        "Quand la joie s’installe, l’être peut incarner une présence libre, paisible, profondément vivante et reliée. Il devient capable d’aimer sans dépendre, de croire sans contrôler, de discerner sans se rigidifier, d’habiter la vie sans disparaître et de se respecter sans se sacrifier. La personne se reconnecte alors à tout son potentiel, dans une manière d’être plus ouverte, plus juste et plus profondément incarnée.",
      ],
      [
        "Guérison",
        "Quand les blessures s’apaisent, la joie cesse d’être un moment fragile ou conditionnel. Elle devient un état plus stable, plus simple et plus habitable. La personne se sent davantage présente, reliée, alignée et disponible à ce qui est, sans devoir se protéger en permanence. Elle peut alors vivre, aimer, recevoir, poser ses limites et avancer avec plus de paix, de confiance et de vérité intérieure.",
      ],
    ],
  },

  {
    id: "w_rejet",
    slug: "blessures-rejet",
    type: "GRID",
    eyebrow: "Blessure",
    title: "REJET (tristesse)",
    subtitle: "Comportement d’infériorité",
    grid: [
      ["Émotion racine", "Tristesse."],
      [
        "Sentiments possibles",
        "Solitude, vide, invisibilité, repli, mélancolie, effacement, isolement, coupure, déconnexion, absence à soi.",
      ],
      [
        "Origine",
        "Blessure très précoce, liée au vécu de ne pas être pleinement accueilli dans son droit d’exister, d’incarner sa place et d’être là. Le rejet touche l’être même. Il peut s’imprimer dans un climat très précoce de non-accueil, de non-désir, de peur, de séparation ou d’insécurité autour de la venue au monde. La blessure du rejet touche profondément l’incarnation terrestre : exister, habiter son corps, prendre sa place, être là.",
      ],
      [
        "Âge d’ancrage",
        "Très tôt, dès la conception. C’est la première blessure à s’imprimer. Elle peut se vivre dans un climat très précoce de non-accueil, de non-désir, de refus ou d’insécurité autour de la venue au monde. Le vécu peut donc commencer avant la naissance, dans l’ambiance même de la grossesse.",
      ],
      [
        "Masque / fonctionnement",
        "Masque du fuyant. Tendance à se retirer, se couper, se rendre invisible, prendre peu de place et éviter de montrer ce qui fait mal. La personne ne sait pas toujours qu’elle est triste. Elle ne fait pas face à son mal-être, le recouvre, le minimise ou le contourne. À l’intérieur, elle peut se sentir vide, mélancolique, éteinte ou absente à elle-même. À l’extérieur, elle peut montrer une façade légère, positive, souriante ou faire bonne figure, comme si tout allait bien, pour ne pas laisser voir ce qui se vit réellement. Sa plus grande difficulté touche l’incarnation : habiter pleinement son corps, sa place et sa présence terrestre.",
      ],
      [
        "Empathie blessée",
        "La personne peine à rester en lien avec elle-même lorsqu’elle est touchée. Elle fuit ce qu’elle ressent, se coupe de son ressenti, quitte son corps, se déconnecte de son ancrage et n’arrive pas toujours à nommer son mal-être. Quand on lui demande si ça va, elle peut détourner l’attention vers l’autre plutôt que de répondre vraiment. Elle cache ce qui ne va pas, comme si ce qu’elle vivait n’était pas important. Elle laisse aussi facilement le bénéfice du doute à l’autre, même lorsque cela la coupe encore davantage de ce qu’elle ressent. Elle peut aussi vivre avec le sentiment de ne pas compter, de ne pas avoir de place ou d’être de trop, tout en paraissant ailleurs, déconnectée ou perchée, comme si habiter pleinement sa présence terrestre restait difficile. Elle peut aussi chercher auprès de l’autre une reconnaissance de son existence, comme si sa place, sa présence et son droit d’être là avaient besoin d’être confirmés de l’extérieur pour pouvoir être ressentis à l’intérieur.",
      ],
      [
        "Comportements dysfonctionnels",
        "Fuite silencieuse, retrait, effacement, invisibilité, suradaptation, difficulté à s’affirmer, minimisation, panique de fuite, isolement, coupure du lien, addictions solitaires, repli intérieur, déconnexion du corps, fuite terrestre. Quand la blessure s’active, la personne peut faire bonne figure, cacher son mal-être, ne rien laisser voir, puis partir, se retirer et s’isoler pour vivre seule ce qu’elle ne parvient pas à nommer. Dans cette blessure, c’est elle qui part.",
      ],
      [
        "Rapport au non / aux limites",
        "La personne ne dit pas toujours non clairement. Elle peut éviter, esquiver, se retirer, disparaître du lien ou s’éloigner silencieusement plutôt que d’affirmer sa limite. Dans cette blessure, c’est souvent elle qui part.",
      ],
      [
        "Valeurs",
        "Foi en la vie, foi en l’humain, innocence, pureté, liberté d’être, paix, acceptation de la différence de l’autre, capacité à laisser le bénéfice du doute.",
      ],
      [
        "Croyances limitantes",
        "« Je n’ai pas ma place. » « Je suis de trop. » « Je ne suis pas importante. » « Ce que je vis n’a pas d’importance. » « Si je me montre, je serai rejeté. »",
      ],
      [
        "Croyances expansives",
        "« J’ai une place unique et légitime. » « Ma présence a le droit d’exister. » « Ce que je ressens a de la valeur. » « Je peux habiter pleinement mon corps et ma place. » « J’ose nommer ce que je vis. »",
      ],
      ["Axe de reconnexion", "Se reconnecter à la vie."],
      [
        "Incarner son plein potentiel",
        "Quand cette blessure s’apaise, l’être peut incarner la présence simple, l’authenticité, la liberté d’être soi, la finesse de perception, l’autonomie intérieure et une manière d’exister sans se contracter ni s’effacer. La personne peut alors habiter son corps, sa place et son incarnation terrestre avec plus de paix, de stabilité et de légitimité, tout en conservant sa grande foi en la vie, en l’humain et en ce qu’il y a de beau dans le lien.",
      ],
      [
        "Guérison",
        "Quand la blessure de rejet s’apaise, la personne se retire moins, cache moins son mal-être et reconnaît plus facilement ce qu’elle ressent. Elle ose davantage prendre sa place, se montrer telle qu’elle est, dire quand quelque chose ne va pas, et rester en lien sans disparaître, se couper ou quitter son corps.",
      ],
    ],
  },

  {
    id: "w_abandon",
    slug: "blessures-abandon",
    type: "GRID",
    eyebrow: "Blessure",
    title: "ABANDON (peur)",
    subtitle: "Comportement d’infériorité",
    grid: [
      ["Émotion racine", "Peur."],
      [
        "Sentiments possibles",
        "Anxiété, inquiétude, stress, doute, crainte, impuissance, inconfort, tension, sentiment d’insécurité, pessimisme.",
      ],
      [
        "Origine",
        "Sentiment d’être seul, manques affectifs dans l’enfance. Difficulté à exister sans la présence rassurante d’autrui. La blessure d’abandon touche profondément le lien et la relation. Elle peut s’accompagner d’une forte sensibilité au ton de voix, au silence, à l’absence de réponse, et d’un besoin d’entendre que le lien est maintenu.",
      ],
      [
        "Âge d’ancrage",
        "Commence souvent très tôt dans l’enfance, habituellement avant l’âge de deux ans. La blessure peut ensuite se structurer dans le lien à travers le manque affectif, l’absence d’appui ou le vécu de séparation.",
      ],
      [
        "Masque / fonctionnement",
        "Masque du dépendant. Fusion, peur de la solitude, besoin excessif de soutien. La personne peut chercher fortement la présence, l’attention, l’appui, une réponse, un signe que le lien tient encore. Elle peut aussi dire qu’elle se sent bien seule et qu’elle n’a besoin de personne, alors qu’au fond le manque de lien reste très actif.",
      ],
      [
        "Empathie blessée",
        "Confond souvent empathie et fusion. Donne beaucoup, cherche à rester reliée, capte fortement les signes de distance ou de retrait, et peut se tourner vers l’autre dans l’espoir d’éviter d’être abandonnée.",
      ],
      [
        "Comportements dysfonctionnels",
        "Peur de la solitude, dépendance affective, recherche excessive de soutien, besoin d’attention, attente de réponses, sensibilité au silence, difficulté à exister sans l’aval ou la présence rassurante d’autrui, dramatisation plus marquée dans les épreuves, difficulté à avancer seule. Le vide intérieur peut alors pousser à s’accrocher, réclamer, se plaindre, dépendre ou chercher sans cesse des signes de lien.",
      ],
      [
        "Rapport au non / aux limites",
        "La personne a souvent de la difficulté à dire non lorsqu’elle craint de perdre le lien, de décevoir ou de se retrouver seule. Elle peut dire oui pour garder la relation, même lorsque cela ne lui convient pas vraiment.",
      ],
      ["Valeurs", "Amour, proximité, lien, chaleur humaine, partage."],
      [
        "Croyances limitantes",
        "« Je finis toujours seul. » « Personne ne reste jamais avec moi. » « J’ai besoin des autres pour aller bien. » « Sans soutien, je n’y arriverai pas. » « Si l’autre s’éloigne, c’est que je ne compte pas. »",
      ],
      [
        "Croyances expansives",
        "« Je peux me sentir complet même lorsque je suis seul. » « Je peux créer des liens stables et nourrissants. » « Je peux avancer avec mes propres ressources. » « Ma valeur reste entière même lorsque l’autre s’éloigne. » « Je peux vivre le lien sans dépendre de la présence constante de l’autre. »",
      ],
      ["Axe de reconnexion", "Se reconnecter à l’amour."],
      [
        "Incarner son plein potentiel",
        "Quand cette blessure s’apaise, l’être peut incarner l’amour, la présence, la tendresse, la qualité de lien, la capacité à demander juste, à recevoir sans se perdre et à rester relié sans dépendre. La relation devient plus libre, plus stable et plus nourrissante.",
      ],
      [
        "Guérison",
        "Quand la blessure d’abandon s’apaise, la personne se sent mieux lorsqu’elle est seule, cherche moins l’attention, vit les épreuves avec moins de dramatisation et ose avancer sans attendre l’aval des autres.",
      ],
    ],
  },

  {
    id: "w_humiliation",
    slug: "blessures-humiliation",
    type: "GRID",
    eyebrow: "Blessure",
    title: "HUMILIATION (dégout)",
    subtitle: "Comportement d’infériorité",
    grid: [
      ["Émotion racine", "Dégoût."],
      [
        "Sentiments possibles",
        "Honte, indignité, gêne, embarras, malaise, nausée, dégoût de soi, remords, auto-dévalorisation, écœurement.",
      ],
      [
        "Origine",
        "Blessure liée à la honte, à l’humiliation et au fait d’être diminué dans son rapport au corps, au plaisir, aux besoins ou à la liberté d’être. Elle se construit lorsque l’enfant vit une attitude répressive, culpabilisante ou dévalorisante autour de ce qu’il ressent, de ce qu’il aime, de ce qui lui fait du bien, de son corps ou de ses besoins. L’humiliation atteint profondément la dignité, la valeur personnelle et le respect de soi dans la relation.",
      ],
      [
        "Âge d’ancrage",
        "Souvent entre 1 et 3 ans. Cette blessure peut se structurer à un moment très lié au corps, à la liberté corporelle, au plaisir, à la honte et au développement sensoriel.",
      ],
      [
        "Masque / fonctionnement",
        "Masque du masochiste. La personne peut se rabaisser, se sacrifier, se punir, se charger et s’oublier elle-même. Elle cherche facilement sa valeur dans l’utilité, le service, la générosité et la capacité à porter pour les autres. Elle peut faire pour les autres même lorsque cela n’est pas demandé, aller au-delà de leurs besoins, prendre sur elle les responsabilités et se rendre constamment utile pour éviter l’espace libre, la liberté ou le face-à-face avec elle-même. Elle supporte difficilement de rester simplement avec elle-même, de recevoir sans contrepartie, d’honorer son propre plaisir ou de s’autoriser du confort sans se sentir mal à l’aise.",
      ],
      [
        "Empathie blessée",
        "La personne ressent fort, mais la honte freine l’expression juste de ce qu’elle vit. Elle peut rapidement se sentir en faute, excuser les autres, minimiser ce qu’elle ressent et laisser ses propres besoins passer après ceux de l’entourage. Elle donne, répare, arrange et porte facilement davantage que sa juste part, comme si demander pour elle-même, recevoir ou honorer son propre besoin risquait de paraître égoïste, déplacé ou sans cœur. Elle peut aussi avoir du mal à identifier ce qui lui ferait du bien, comme si son bien-être, son confort ou le fait de recevoir demandaient déjà une justification.",
      ],
      [
        "Comportements dysfonctionnels",
        "Sacrifice, oubli de soi, remords, auto-dévalorisation, service excessif, aide non demandée, anticipation des besoins des autres, difficulté à recevoir, difficulté à demander, difficulté à s’autoriser le plaisir et le confort, retenue sensuelle, nourriture refuge, sexualité compensatoire, auto-sabotage, retour du compliment, gêne à prendre sa place ou à reconnaître sa valeur. Quand la blessure s’active, la personne peut se faire passer après tout le monde, se charger de trop, se diminuer, se rendre indispensable, puis se sentir envahie, sale, honteuse, nauséeuse ou dégoûtée d’elle-même.",
      ],
      [
        "Rapport au non / aux limites",
        "La personne a souvent beaucoup de difficulté à dire non lorsqu’elle se sent obligée d’aider, de porter ou de se rendre utile. Elle peut dire oui alors que cela ne lui convient pas, se sacrifier, puis s’en vouloir de ne pas avoir posé sa limite.",
      ],
      ["Valeurs", "Respect, dignité, authenticité, générosité juste, douceur."],
      [
        "Croyances limitantes",
        "« Je dois me sacrifier pour les autres. » « Mes besoins passent après. » « Je prends trop de place quand je demande. » « Recevoir me met mal à l’aise. » « Je ne mérite pas d’être heureux. »",
      ],
      [
        "Croyances expansives",
        "« Mes besoins ont de la valeur. » « Je peux recevoir sans culpabiliser. » « Je mérite le respect et la joie de vivre. » « Je peux être au service sans me sacrifier. » « Je peux poser mes limites avec simplicité. »",
      ],
      ["Axe de reconnexion", "Se reconnecter à sa dignité."],
      [
        "Incarner son plein potentiel",
        "Quand cette blessure s’apaise, l’être peut incarner une générosité juste, un service aligné, une présence respectueuse de soi, une relation plus libre au corps et une capacité à donner sans s’oublier. La personne peut alors honorer ses besoins, recevoir avec plus de simplicité, poser ses limites avec douceur et rester profondément digne dans le lien.",
      ],
      [
        "Guérison",
        "Quand la blessure d’humiliation s’apaise, la personne écoute davantage ses besoins avant ceux des autres, porte moins sur ses épaules, se sent plus libre, demande plus simplement, reçoit avec moins de honte et cesse progressivement de se rendre utile pour avoir une place. Elle retrouve un rapport plus apaisé à son corps, à ses désirs, à ses limites, à son confort et à sa valeur.",
      ],
    ],
  },

  {
    id: "w_trahison",
    slug: "blessures-trahison",
    type: "GRID",
    eyebrow: "Blessure",
    title: "TRAHISON (surprise)",
    subtitle: "Comportement de supériorité",
    grid: [
      ["Émotion racine", "Surprise."],
      [
        "Sentiments possibles",
        "Méfiance, incompréhension, impatience, frustration, jalousie.",
      ],
      [
        "Origine",
        "La blessure de trahison peut naître lorsqu’un lien censé protéger, rassurer ou tenir parole devient source d’incohérence, de déception ou de rupture de confiance. Elle se construit autour d’expériences où l’enfant a pu ressentir qu’une promesse n’était pas tenue, qu’un engagement était rompu, ou qu’un adulte important manquait de fiabilité. La confiance se fissure, et l’être apprend à reprendre la main par le contrôle.",
      ],
      [
        "Âge d’ancrage",
        "Souvent autour de 6 à 7 ans. C’est une période où les notions de confiance, de loyauté, d’engagement et de fiabilité prennent davantage de sens. La blessure peut alors commencer à se structurer plus nettement.",
      ],
      [
        "Masque / fonctionnement",
        "Masque du contrôlant. La personne cherche à garder la main, à anticiper, à vérifier, à obtenir des garanties, à cadrer ou à influencer pour éviter d’être surprise, trompée ou déçue. Elle peut paraître forte, sûre d’elle, dominante, très réactive et jugeant. Lorsqu’elle se sent touchée, ou lorsqu’un être qu’elle considère comme sien est touché, elle peut devenir très autoritaire. Elle protège alors l’autre à travers sa blessure, en cherchant à reprendre la main et à imposer sa lecture.",
      ],
      [
        "Empathie blessée",
        "Sous l’effet de la blessure de trahison, l’autre est facilement filtré à travers le contrôle, la vérification ou le test permanent. L’écoute perd en disponibilité, car la personne reste centrée sur sa propre lecture de la situation. Elle croit voir clair, alors qu’elle cherche surtout à garder la main.",
      ],
      [
        "Comportements dysfonctionnels",
        "Contrôle, besoin d’avoir raison, test permanent, vérification, surveillance, prise de pouvoir, difficulté à déléguer, tension relationnelle, exigence élevée, volonté d’imposer sa lecture ou son rythme. Dans l’état blessé, le fonctionnement devient totalement dysfonctionnel : la personne ne va plus réellement à la rencontre de l’autre, elle reste enfermée dans sa carte du monde, veut reprendre le dessus et peut devenir très autoritaire, surtout lorsqu’elle croit devoir protéger.",
      ],
      [
        "Rapport au non / aux limites",
        "La personne dit plus facilement non, mais souvent avec exigence, contrôle ou volonté de garder la main. Elle supporte mal qu’on lui impose quelque chose et peut poser ses limites de manière tranchée, autoritaire ou dominatrice.",
      ],
      [
        "Valeurs",
        "Loyauté, fidélité, vérité, fiabilité, engagement, clarté, cohérence, sécurité, protection, force, famille.",
      ],
      [
        "Croyances limitantes",
        "« Les autres vont forcément me trahir. » « Je dois garder le contrôle. » « On ne peut faire confiance à personne. » « Si je relâche, je serai déçu. » « Je dois vérifier pour éviter d’être trompé. »",
      ],
      [
        "Croyances expansives",
        "« Je peux rester clair sans contrôler. » « Je peux faire confiance avec discernement. » « Je peux poser un cadre sans dominer. » « Je peux rester fort sans imposer. » « Je peux protéger sans prendre le pouvoir sur l’autre. »",
      ],
      ["Axe de reconnexion", "Se reconnecter à la foi."],
      [
        "Incarner son plein potentiel",
        "Quand cette blessure s’apaise, l’être peut incarner la loyauté, la fiabilité, la clarté, le discernement, la force tranquille et un leadership juste. La puissance ne passe plus par le contrôle, mais par une parole nette, une posture stable et une présence solide. La personne peut alors guider sans imposer, voir clair sans soupçonner, protéger sans dominer, et s’engager avec solidité dans des liens plus vrais.",
      ],
      [
        "Guérison",
        "Quand la blessure de trahison s’apaise, la personne reste plus stable lorsque les plans changent, lâche le besoin d’avoir la main sur tout, devient plus souple dans sa lecture et plus juste dans sa manière de se positionner. Elle garde sa force, sa clarté et son discernement, tout en laissant moins de place au contrôle et à l’autorité blessée.",
      ],
    ],
  },

  {
    id: "w_injustice",
    slug: "blessures-injustice",
    type: "GRID",
    eyebrow: "Blessure",
    title: "INJUSTICE (colère)",
    subtitle: "Comportement de supériorité",
    grid: [
      ["Émotion racine", "Colère intérieure."],
      [
        "Sentiments possibles",
        "Agacée, irritée, contrariée, froissée, froide, hautaine, raide, fermée.",
      ],
      [
        "Origine",
        "Éducation stricte, froide, où l’amour dépend de la performance. Jugement, comparaison, exigence, pression à bien faire, difficulté à se sentir aimé pour ce que l’on est. L’enfant peut se sentir bloqué dans le développement de son individualité et apprendre très tôt à se contenir, à se corriger et à rester maîtrisé pour garder sa dignité, éviter d’être jugé ou perdre sa place.",
      ],
      [
        "Âge d’ancrage",
        "Souvent entre 4 et 6 ans. C’est une période où l’enfant cherche davantage à affirmer son individualité. Si cette individualité rencontre surtout de la froideur, de l’exigence, de l’insensibilité ou un amour conditionné à la performance, la blessure d’injustice peut commencer à se structurer plus nettement.",
      ],
      [
        "Masque / fonctionnement",
        "Masque du rigide. Perfectionnisme, froideur, posture hautaine, dureté avec soi et avec les autres, besoin de justice, refus de l’imperfection, supériorité morale. La personne retient beaucoup à l’intérieur, se maîtrise fortement et garde ce qui monte en elle pour que ses mots ne dépassent pas sa pensée et ne blessent pas l’autre. Elle supporte très mal qu’on la maîtrise, qu’on la contrôle ou qu’on décide à sa place. Quand elle est touchée, elle peut se fermer, se raidir et vouloir que l’autre sorte de son espace, de son cocon ou de son espace vital, afin de garder le contrôle sur ce qui monte en elle.",
      ],
      [
        "Empathie blessée",
        "La personne n’est plus vraiment à l’écoute d’elle-même. Elle se coupe de ce qu’elle ressent dans son corps, se dissocie, se contrôle, se retient et reste davantage dans la tête que dans le ressenti. Elle se débrouille seule, ne demande rien, et supporte mal qu’on lui donne un conseil qu’elle n’a pas demandé. L’accueil de l’autre passe alors par un filtre froid ou exigeant. Elle peut aussi juger les personnes qui jugent, tout en gardant beaucoup à l’intérieur.",
      ],
      [
        "Comportements dysfonctionnels",
        "Perfectionnisme, rigidité, retenue émotionnelle, hyper-contrôle sur soi, travail excessif, difficulté à lâcher, critique intérieure, froideur, fermeture, comparaison, tension corporelle, déconnexion du corps, dialogue mental critique, indépendance excessive, refus d’aide, refus du conseil non demandé. Quand la blessure est activée, la personne peut couper court, mettre fin à l’échange, exiger que l’autre parte, le faire sortir de son espace et vouloir qu’on la laisse tranquille, pour éviter que sa colère déborde et que l’autre la subisse.",
      ],
      [
        "Rapport au non / aux limites",
        "La personne peut dire non, mais souvent de manière froide, nette ou coupée. Elle supporte difficilement l’intrusion, le conseil non demandé ou le fait qu’on décide à sa place. Quand elle est touchée, elle ferme l’accès plus qu’elle n’explique.",
      ],
      ["Valeurs", "Justice, équité, intégrité, vérité."],
      [
        "Croyances limitantes",
        "« Je dois toujours prouver ma valeur. » « Je ne peux pas me montrer imparfait. » « Je ne dois rien laisser paraître. » « Je me débrouille seul. » « Personne n’a à me dire quoi faire. »",
      ],
      [
        "Croyances expansives",
        "« Ma valeur est entière, même sans performance. » « Je peux m’accorder le droit à l’erreur. » « Je peux montrer ma sensibilité sans perdre ma dignité. » « Je peux accueillir l’autre sans perdre mon espace. » « Je peux dire ce que je ressens avec justesse, sans me durcir ni écraser l’autre. »",
      ],
      ["Axe de reconnexion", "Se reconnecter à sa capacité de discernement."],
      [
        "Incarner son plein potentiel",
        "Quand cette blessure s’apaise, l’être peut incarner la justesse, l’intégrité, la vérité, la droiture, la clarté intérieure et une exigence saine. La personne devient capable de garder sa structure sans se fermer, de rester digne sans se durcir, d’être précise sans devenir froide, et de tenir un cadre avec profondeur et humanité.",
      ],
      [
        "Guérison",
        "Quand la blessure d’injustice s’apaise, la personne se reconnecte davantage à son corps, se relâche, se montre moins perfectionniste, supporte mieux l’imperfection et ressent moins le besoin de tout retenir. Elle ose davantage exprimer ce qu’elle vit, avec plus de souplesse, moins de froideur et moins de tension intérieure.",
      ],
    ],
  },

  // COMPORTEMENTS
{
  id: "ref_addictions",
  slug: "comportements-addictions",
  type: "CONTENT",
  title: "Addictions",
  subtitle: "Repères & typologies",
  content: [
{ kicker: "Définition", lead: "L’addiction cherche souvent à calmer ce qui paraît trop difficile à ressentir.", text: "Comportements répétitifs, consommations ou besoins compulsifs utilisés pour éviter, anesthésier, compenser ou calmer une émotion inconfortable. Ils peuvent passer par une substance, une activité, une relation, une recherche de performance, un refuge mental ou une habitude apparemment banale.", },

{ kicker: "Schéma", image: "schema_addictions.svg", imageAlt: "Schéma du cycle de l'addiction", },

{ kicker: "Repère central", lead: "Le soulagement rapide donne l’illusion d’une solution durable.", text: "L’addiction ou la compulsion procure souvent un soulagement rapide, une impression de contrôle, une stimulation ou une coupure temporaire avec la douleur. En profondeur, elle ne guérit pas la blessure de fond : elle la masque, la reporte, la contourne ou l’entretient.", },

{ kicker: "Fonction", lead: "Derrière le comportement, il y a souvent une tentative de régulation intérieure.", text: "C’est une béquille de régulation émotionnelle. Elle peut servir à calmer un vide, une peur, une honte, une solitude, une colère intérieure, une tension psychique, une impression d’abandon, une perte de contrôle ou une douleur identitaire. Elle peut aussi donner l’illusion de remplir, tenir, oublier, se rassurer, se récompenser, se punir ou exister.", },

{ kicker: "Pourquoi c’est piégeant", lead: "Ce qui apaise vite a tendance à s’installer vite.", text: "Le soulagement immédiat renforce le comportement. La personne associe alors inconsciemment ce refuge à une solution. Plus le comportement soulage vite, plus il risque d’être répété, jusqu’à devenir un automatisme de survie émotionnelle.", },

{ kicker: "Repères de bascule", lead: "Un comportement devient préoccupant lorsqu’il commence à prendre la place du vivant.", text: "Le comportement mérite une vraie vigilance lorsqu’il devient difficile à freiner, qu’il prend une place croissante, qu’il passe avant d’autres besoins importants, qu’il continue malgré ses conséquences, ou qu’il altère la relation à soi, aux autres, au corps, au travail, au sommeil, à l’argent ou à la vie quotidienne.", },

{ kicker: "Addictions aux substances", lead: "Certaines consommations modifient rapidement l’état intérieur et renforcent la recherche d’apaisement.", text: "Alcool, tabac, cannabis, cocaïne, héroïne, amphétamines, ecstasy, médicaments psychotropes, antidouleurs, usage compulsif de caféine, recherche répétée du sucre ou d’autres produits pour modifier rapidement l’état intérieur.", },

{ kicker: "Repères concrets (substances)", lead: "Le produit devient un appui lorsque l’émotion paraît difficile à traverser autrement.", text: "Recherche d’apaisement rapide, besoin de tenir, difficulté à traverser certaines émotions sans produit, consommation liée à des déclencheurs précis, augmentation progressive de la fréquence, de la dose, de la tolérance ou de la dépendance psychologique.", },

{ kicker: "Comportements addictifs ou compulsifs", lead: "L’addiction peut aussi passer par des actes, des rythmes ou des liens devenus refuges.", text: "Jeux d’argent, jeux vidéo, écrans, internet, réseaux sociaux, téléphone, achats compulsifs, travail, sport, sexualité, fusion relationnelle, dépendance affective, nourriture, restrictions alimentaires, crises de compensation, recherche d’adrénaline, répétition d’un scénario toxique.", },

{ kicker: "Repères concrets (comportements)", lead: "Le mécanisme se repèr   e souvent dans la répétition, l’urgence ou la perte de liberté intérieure.", text: "Besoin de recommencer, difficulté à s’arrêter, pensée envahissante, recherche de décharge, compensation après tension, impression de manque, perte de maîtrise, alternance entre excès et culpabilité.", },

{ kicker: "Lien avec les blessures", lead: "Chaque blessure peut chercher son propre mode d’apaisement.", text: "L’abandon cherchera à remplir le vide ou à calmer l’angoisse de séparation. La trahison cherchera à reprendre la maîtrise, à se stimuler ou à fuir l’impuissance. Le rejet cherchera à disparaître, à se couper ou à s’anesthésier. L’injustice cherchera à tenir, contrôler, performer ou se rigidifier. L’humiliation cherchera à compenser, se punir, se suradapter, porter, se remplir ou se soulager dans le plaisir ou l’excès.", },

{ kicker: "Questions utiles", lead: "Revenir à la racine permet de lire le besoin caché derrière le comportement.", text: "Qu’est-ce qui déclenche ce comportement ? Quelle émotion est juste avant ? Quel vide, quelle peur, quelle honte ou quelle tension cherche à être calmée ? Que se passe-t-il si je retire ce refuge ? Quelle croyance limitante soutient ce mécanisme ?", },

{ kicker: "Message clé", lead: "L’addiction parle souvent moins d’un manque de volonté que d’une souffrance à réguler.", text: "L’addiction n’est pas seulement un excès ou un manque de volonté. C’est souvent un signal de souffrance, de protection ou de survie émotionnelle. Ce qui cherche à être apaisé à travers elle demande à être vu, ressenti, compris et accompagné à la racine.", },
  ],
},
 {
  id: "ref_valeurs",
  slug: "comportements-valeurs",
  type: "CONTENT",
  title: "Valeurs de vie",
  subtitle: "Repères & piliers",
  content: [
 { kicker: "Définition", lead: "Les valeurs donnent une direction intérieure à la manière de vivre.", text: "Les valeurs sont des repères intérieurs qui guident nos choix, nos priorités et notre manière de vivre. Elles orientent ce que nous considérons comme important, juste, désirable ou essentiel.", },

{ kicker: "Schéma", image: "schema_valeurs.png", imageAlt: "Schéma des valeurs", },

{ kicker: "Repère central", lead: "Plus une valeur est consciente, plus elle peut devenir un appui stable.", text: "Une valeur profonde soutient nos choix, nos priorités et notre manière de vivre. Plus une personne connaît ses vraies valeurs, plus elle peut avancer avec cohérence, clarté et stabilité.", },

{ kicker: "Valeurs héritées / valeurs choisies", lead: "Tout ce qui nous guide ne vient pas toujours d’un choix conscient.", text: "Certaines valeurs nous ont été transmises par la famille, l’éducation, la culture, la religion ou le milieu social. D’autres émergent plus tard comme des choix conscients. Le travail consiste à distinguer les valeurs héritées des valeurs réellement choisies.", },

{ kicker: "Valeurs en mouvement", lead: "Les valeurs évoluent avec la conscience, les étapes de vie et l’expérience.", text: "Les valeurs ne sont pas figées dans le temps. Elles peuvent évoluer, changer d’ordre d’importance ou se réorganiser selon les étapes de vie, les expériences, les prises de conscience, les responsabilités et la réalité du moment. Plus la personne évolue, plus ses valeurs cessent d’être vécues dans une hiérarchie rigide. Elles trouvent progressivement un équilibre plus horizontal, plus souple et plus vivant, à partir d’un centre intérieur plus stable. Ce centre permet d’ajuster ce qui est important sans se perdre, tout en restant à l’écoute de ce qui bouge dans le présent.", },

{ kicker: "Exemples", lead: "Certaines valeurs soutiennent le quotidien, d’autres structurent profondément l’existence.", text: "Liberté, sécurité, amour, authenticité, réussite, famille, créativité, contribution, santé, foi, justice, loyauté, autonomie, paix intérieure.", },

{ kicker: "4 grands piliers de vie", lead: "Certains repères fondamentaux reviennent souvent comme fondations majeures de l’équilibre humain.", text: "Santé, famille / proches, argent / sécurité financière, amour / relations.", },

{ kicker: "Valeurs personnelles", lead: "Elles soutiennent l’identité, la posture intérieure et la manière d’avancer.", text: "Authenticité, liberté, indépendance, responsabilité, courage, simplicité, persévérance, discipline, dépassement de soi, savoir, croissance personnelle, équilibre.", },

{ kicker: "Valeurs relationnelles et familiales", lead: "Elles orientent la qualité du lien, de la présence et du vivre-ensemble.", text: "Famille, amour, couple, amitié, bienveillance, fidélité, loyauté, solidarité, transmission, respect, tolérance, partage.", },

{ kicker: "Valeurs matérielles et financières", lead: "Elles touchent à la sécurité concrète, aux ressources et à la place dans le monde.", text: "Argent, sécurité matérielle, confort, abondance, stabilité économique, réussite sociale, travail, efficacité, ambition, reconnaissance, succès professionnel.", },

{ kicker: "Valeurs liées à la vie et au corps", lead: "Elles concernent la vitalité, la présence incarnée et la qualité de vie.", text: "Santé, vitalité, bien-être, hygiène, sécurité physique, énergie, longévité, nature, beauté, plaisir de vivre.", },

{ kicker: "Valeurs de réalisation et de contribution", lead: "Elles soutiennent l’élan de création, d’engagement et d’impact.", text: "Créativité, innovation, compétence, excellence, service, contribution, responsabilité sociale, engagement, altruisme, générosité, coopération, justice, égalité.", },

{ kicker: "Valeurs spirituelles et existentielles", lead: "Elles relient au sens, à l’intériorité et à plus vaste que soi.", text: "Foi, sagesse, espoir, paix intérieure, gratitude, harmonie, pardon, connexion au sacré, transcendance, émerveillement, sens de la vie.", },

{ kicker: "Conflits de valeurs", lead: "Deux repères essentiels peuvent parfois tirer la personne dans des directions différentes.", text: "Deux valeurs importantes peuvent parfois entrer en tension. Une personne peut vouloir à la fois la liberté et la sécurité, la paix et la vérité, l’autonomie et le lien, la réussite et la simplicité. Le chemin consiste à retrouver un ordre juste, une hiérarchie claire et un équilibre vivant.", },

{ kicker: "Signaux de désalignement", lead: "Quand la vie s’éloigne des vraies valeurs, le malaise intérieur apparaît souvent rapidement.", text: "Quand une personne vit à l’encontre de ses vraies valeurs, elle peut ressentir un malaise diffus, de la frustration, de la fatigue, de la colère, une perte de sens, un sentiment de vide ou l’impression de se trahir.", },

{ kicker: "Travail pratique", lead: "Identifier ses priorités permet de vérifier si le quotidien suit réellement l’essentiel.", text: "Identifier ses valeurs prioritaires et vérifier si ses choix, ses relations et son quotidien sont réellement alignés avec elles.", },

{ kicker: "Message clé", lead: "Les valeurs deviennent fécondes lorsqu’elles se traduisent dans les choix concrets.", text: "Aligner ses actions avec ses vraies valeurs permet de sortir des schémas hérités et de revenir à une vie plus cohérente.", },

{ kicker: "Guérison", lead: "L’équilibre revient lorsque les piliers cessent de s’opposer et s’organisent autour d’un centre intérieur.", text: "Les piliers essentiels de notre vie ne sont plus empilés les uns au-dessus des autres. Ils s’alignent à l’horizontale, et nous prenons place au centre. À partir de ce centre, nous pouvons ajuster chacun d’eux et créer l’équilibre qui permet à la sérénité et à la joie de s’installer. Plus nous évoluons, plus nos valeurs cessent d’être vécues dans une hiérarchie rigide. Elles deviennent des repères vivants, souples et équilibrés, qui s’organisent autour d’un centre intérieur plus conscient.", },
  ],
},
{
  id: "ref_dogmes",
  slug: "comportements-dogmes",
  type: "CONTENT",
  title: "Conditionnements & dogmes",
  subtitle: "Repères & tendances",
  content: [
    {
      kicker: "Définition",
      lead: "Les conditionnements et les dogmes sont des croyances intégrées au fil de la vie.",
      text: "Ils peuvent venir de la famille, de l’enfance, de l’école, de la société, de la culture, de la religion, du vécu relationnel ou de conclusions prises sur soi-même. À force d’être entendus, répétés ou redoutés, ils deviennent des repères intérieurs qui influencent la manière de penser, de ressentir, d’agir et de se relier.",
    },
    {
    kicker: "Schéma",
    image: "schema_dogmes.png",
    imageAlt: "Schéma des conditionnements et dogmes",
    },
    {
      kicker: "Repère central",
      lead: "Un conditionnement agit comme une règle intérieure.",
      text: "Il colore la perception, oriente les réactions et finit parfois par prendre la place d’une vérité. La personne ne voit alors plus seulement la réalité telle qu’elle est ; elle la lit aussi à travers ce qu’elle a appris, subi, cru ou intégré.",
    },
    {
      kicker: "Fonction cachée",
      lead: "Derrière un dogme, il y a souvent une tentative de protection.",
      text: "Il peut donner une impression de sécurité, d’appartenance, de cohérence, de valeur, de maîtrise ou de survie relationnelle. Même lorsqu’il enferme, il a souvent commencé comme une adaptation utile à un moment donné.",
    },
    {
      kicker: "Lien avec les blessures",
      lead: "Lorsqu’une blessure émotionnelle s’active, le conditionnement déjà présent peut se renforcer.",
      text: "Il vient alors justifier une réaction, soutenir une croyance limitante, protéger un mécanisme de défense ou donner l’illusion qu’un comportement est normal, logique ou nécessaire. Le dogme peut alors entretenir la peur de décevoir, la peur d’être rejeté, la peur d’être abandonné, le besoin de contrôle, le sacrifice de soi ou la fermeture émotionnelle.",
    },
    {
      kicker: "Familiaux et enfance",
      lead: "Certaines phrases deviennent de vraies lois intérieures.",
      text: "« Sois sage et tais-toi. » « Un enfant doit obéir. » « Quand les grands parlent, tu te tais. » « T’es trop petit pour comprendre. » « Ne dérange pas. » « Prends sur toi. » « Un bon enfant écoute sans discuter. » Ces messages peuvent apprendre à l’enfant que sa parole compte peu, que son ressenti dérange, ou qu’il doit s’adapter pour être accepté.",
    },
    {
      kicker: "Sociaux et culturels",
      lead: "La société transmet aussi ses injonctions.",
      text: "« Il faut travailler dur pour réussir. » « Il faut toujours être occupé pour avoir de la valeur. » « Il faut se battre pour sa place. » « Montrer sa vulnérabilité fragilise. » « Réussir, c’est prouver. » « Qui va à la chasse perd sa place. » « Partager, c’est le bonheur. » Ces croyances peuvent nourrir la pression, la comparaison, l’agitation, la performance et la peur de ralentir.",
    },
    {
      kicker: "Religieux, fatalité et superstitions",
      lead: "Certaines croyances donnent une lecture morale, sacrée ou fatale de la vie.",
      text: "« Il faut souffrir pour mériter. » « Le plaisir est un péché. » « Se sacrifier rend plus pur. » « Il y a des familles maudites. » « Le destin s’acharne sur certaines personnes. » « Jamais deux sans trois. » « Casser un miroir, c’est sept ans de malheur. » « Croiser un chat noir porte malheur. » Même banales en apparence, elles peuvent entretenir la culpabilité, la peur du bonheur, l’attente du pire ou l’idée qu’une souffrance serait normale.",
    },
    {
      kicker: "Genre, virilité et rôle social",
      lead: "Les injonctions liées au féminin et au masculin marquent profondément les comportements.",
      text: "« Un homme ne pleure pas. » « Un homme doit être fort. » « Un homme doit protéger. » « Un homme doit tenir. » « Un homme doit se débrouiller seul. » « Montrer ses émotions fragilise un homme. » « Une femme doit être parfaite. » « Une femme doit s’adapter. » « Si t’es belle, t’es automatiquement stupide. » « Trop belle pour être intelligente. » Ces croyances figent les rôles, coupent du ressenti et déforment le rapport à la valeur, à la puissance, à la vulnérabilité et au lien.",
    },
    {
      kicker: "Éducatifs et scolaires",
      lead: "L’école transmet aussi ses dogmes.",
      text: "« Si tu échoues, tu es nul. » « Les bons élèves comprennent tout de suite. » « Si tu es lent, tu ne comprendras jamais. » « Il faut suivre le rythme. » « Il faut s’adapter à la vitesse de la classe. » « L’erreur est interdite. » « Si tu as besoin de plus de temps, c’est que tu es moins capable. » « Quand on veut, on peut. » Ces messages peuvent fabriquer de la honte, de la pression, du découragement et une confusion entre performance et valeur personnelle.",
    },
    {
      kicker: "Relationnels et loyautés",
      lead: "Dans les relations, certains dogmes enferment dans le silence, l’excuse ou le sacrifice.",
      text: "« Si tu dis non, on ne t’aimera plus. » « Les conflits détruisent les relations. » « Il faut tout accepter pour garder le lien. » « Aimer, c’est supporter. » « Quand on aime, on pardonne tout. » « Mieux vaut se taire que créer une rupture. » « Il faut comprendre et excuser. » « C’est normal, cette personne est comme ça. » Ces croyances peuvent légitimer l’effacement de soi, la peur de poser des limites ou la confusion entre amour et souffrance.",
    },
    {
      kicker: "Justice dure et rapport de force",
      lead: "D’autres dogmes valorisent la riposte, la dureté ou la domination.",
      text: "« Œil pour œil, dent pour dent. » « Tu me cherches, tu me trouves. » « Qui sème le vent récolte la tempête. » « Il faut rendre coup pour coup. » « On doit faire payer ce qu’on a subi. » « La meilleure défense, c’est d’attaquer. » « Si tu te laisses faire, tu perds ta valeur. » Ces croyances peuvent alimenter la méfiance, l’agressivité, la rigidité et la difficulté à sortir du combat.",
    },
    {
      kicker: "Intérieurs (auto-dogmes)",
      lead: "Avec le temps, la personne finit souvent par porter elle-même ses propres injonctions.",
      text: "« Je dois être parfait pour avoir de la valeur. » « Je dois être fort en toutes circonstances. » « Je dois porter seul. » « Je dois tout comprendre. » « Je dois rester irréprochable. » « Je ne suis pas assez bien. » « Je dois donner beaucoup pour mériter l’amour. » « Mes blessures justifient mes comportements. » Ces auto-dogmes deviennent souvent les plus puissants, car ils semblent venir de soi alors qu’ils ont été appris, incorporés ou renforcés par le vécu.",
    },
    {
      kicker: "Signes d’activation",
      lead: "Quand un conditionnement s’active, il peut se manifester de multiples manières.",
      text: "Culpabilité, peur de décevoir, rigidité, besoin d’approbation, difficulté à dire non, automatisme de sacrifice, fermeture émotionnelle, besoin de contrôle, exigence envers soi ou envers l’autre. Il peut aussi pousser à justifier des comportements souffrants ou à répéter des schémas anciens.",
    },
    {
      kicker: "Point de vigilance",
      lead: "Un dogme peut paraître juste, noble, logique ou protecteur alors qu’il maintient une peur, une loyauté, une blessure ancienne ou une croyance limitante.",
      text: "Plus une règle semble évidente, plus elle mérite parfois d’être revisitée avec conscience. La liberté intérieure grandit quand les conditionnements deviennent visibles, quand leur fonction cachée est comprise, et quand la personne choisit consciemment ce qu’elle souhaite encore nourrir dans sa vie.",
    },
  ],
},
  // RÉFÉRENCES
  {
    id: "ref_sources",
    slug: "references",
    type: "GRID",
    title: "Références",
    subtitle: "Source",
    grid: [
      [
        "Source d’inspiration",
        "La lecture des cinq blessures fondamentales — rejet, abandon, humiliation, trahison et injustice — ainsi que des masques relationnels qui leur sont classiquement associés, trouve un appui dans les travaux de Lise Bourbeau, en particulier dans l’ouvrage Les 5 blessures qui empêchent d’être soi-même.",
      ],
      [
        "Triangle de Karpman",
        "Le triangle de Karpman apporte une grille de lecture complémentaire des dynamiques relationnelles de survie. Son intégration dans ce site s’inscrit dans la structuration pédagogique de la Méthode FIDES, en lien avec les blessures émotionnelles et les rôles relationnels qui peuvent en découler.",
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
  { section: "Vue d’ensemble", items: ["home"], singleLink: true },
  {
    section: "Bases",
    items: [
      "base_blessures",
      "base_langages_apprentissage",
      "base_croyances",
      "base_vulnerabilites_amour",
      "base_intelligences",
      "base_confort",
      "base_empathie",
      "base_karpman",
      "base_culpabilite",
    ],
  },
  {
    section: "Blessures émotionnelles",
    items: [
      "w_joie",
      "w_trahison",
      "w_abandon",
      "w_injustice",
      "w_rejet",
      "w_humiliation",
    ],
  },
  {
    section: "Comportements",
    items: ["ref_addictions", "ref_valeurs", "ref_dogmes"],
  },
  { section: "Références", items: ["ref_sources"], singleLink: true },
];

export { PAGES, NAV };
