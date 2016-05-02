module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "RESSACS-2016",
      description: "Ecole Internationale RESeaux de CapteurS et Applications Critiques de Surveillance",
      date: "9-13 Mai, 2016",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "IRD",
      address: "32, Avenue Henri Varagnat",
      city: "Bondy",
      state: "France"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "S'inscrire !",
        link: "https://docs.google.com/forms/d/1ZpPgzjm5feiQGqnHm0LfrF-lxi272-kXJMd_ogxyBJ8/viewform"
    },

    // Site info
    site: {
      theme: "meetus",
      url: "http://braziljs.github.io/conf-boilerplate/",
        googleanalytics: "UA-9711668-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Objectifs",
      location: "Lieu",
      speakers: "Conférenciers",
      schedule: "Programme",
      sponsors: "Sponsors",
   //   partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
          name: "Serge Stinckwich",
          photo: "themes/ird/img/serge-stinckwich.jpeg",
          bio: "Serge Stinckwich est enseignant chercheur dans l'équipe UMMISCO.",
          company: "UMMISCO, IRD/UPMC",
          link: {
              href: "http://www.doesnotunderstand.org/",
              text: "Page web"
          },
          presentation: {
              title: "Tutoriel 1 - Introduction aux plateformes Arduino et Raspberry Pi",
              description: "Introduction aux outils logicles et matériels de base des plateformes Arduino et Raspberry Pi",
              time: "9 mai 2016"
          }
      },
      {
          name: "Bernard Pottier",
          photo: "themes/ird/img/bernard-pottier.jpg",
          bio: "Bernard Pottier est professeur d'informatique. Il a travaillé à la réalisation d'outils de conception d'architectures de traitement de 1990 à 2007, dans le cadre de plusieurs projets nationaux et internationaux. Depuis 2008, ses recherches sont tournées vers les réseaux de capteurs sans fil et les méthodes de conception d'applications sociétales et environnementales.",
          company: "Labsticc, Université de Brest",
          link: {
              href:"http://wsn.univ-brest.fr/pottier/",
              text:"Page web"
          },
          presentation: {
              title: "Tutoriel 2 - Modèles physiques, simulation et observation",
              description: "Les réseaux de capteurs (RdC) réalisent une observation distribuée de grandeurs physiques. Ce sont des outils de mesure complexes réalisant un échantillonnage. A ce titre, la chaine d'acquisition inclut des mesures locales, la synthèse de diagnostics distribués, l'alimentation de bases de connaissances. Les fréquences d'acquisition, les délais de décision constituent un élément de variabilité du procédé., les échelles des applications allant du minuscule à l'échelle continentale. Nous montrons une méthode d'étude de déploiements centrée sur le processus observé, à une échelle géographique moyenne. Des outils permettent de centrer l'observation sur une zone particulière, choisie sur des cartes ou des photos. Cette zone est segmentée pour former des systèmes cellulaires en vue de simulations. Nous montrons comment les mesures des RdC et des données externes (météo, élévations) sont intégrées dans ces systèmes, et les bénéfices qui peuvent en découler pour la conception des liens radio (ligne de vue) et l'adéquation entre le RdC et le processus observé. TP sur les outils LabSTICC.",
              time: "9 mai 2016"
          }
      },
        {
            name: "Cong Duc Pham",
            photo: "themes/ird/img/congduc-pham.jpg",
            bio: "Congduc Pham est professeur d’informatique à l’Université de Pau et Pays de l’Adour. Ses domaines de recherche sont les réseaux de communication et la qualité de service.  Depuis plusieurs années, il s’intéresse aux réseaux de capteurs sans-fils et aux applications critiques de surveillance.",
          company: "Université de Pau",
          link: {
              href: "http://web.univ-pau.fr/~cpham/",
              text: "Page web"
          },
          presentation: {
              title: "Tutoriel 3 - Technologies Long-Range pour Réseaux de capteurs et Internet des Objets",
              description: "It is widely accepted that the Era of IoT can potentially connect billions of sensors, devices, equipment, systems, etc. In turn, the challenge is about driving business outcomes, consumer benefits, and the creation of new value. While benefits of IoT are clearly stated for increased process efficiency through automation & optimization, the deployment of such devices in a large scale is still held back by technical challenges. However, there are a number of small revolutions that are rapidly turning IoT into reality. In this presentation we will present how new contributions in the domain of hardware, communication, data storage and data-processing definitely make the IoT paradigm to happen with an unpreceding level of flexibility and cost effective implementations. Regarding communications, we will particularly present Semtech's LoRa radios and how gateways and end-devices can be built from off-the-shelves components for low-cost, long-range and ad-hoc Internet of Things deployment.",
              time: "10 mai 2016"
          }
      },
        {
            name: "Nicolas Marilleau",
            photo: "themes/ird/img/speaker.png",
            bio: "Nicolas Marilleau est ingénieur de recherche à l’UMI 209 UMMISCO de l’IRD (Institut de Recherche pour le Développement) depuis 2006, chercheur associé (depuis 2010) à Femto-ST (Université de Franche-Comté). Ses recherches s’inscrivent dans les domaines des systèmes répartis, de la collaboration et de la modélisation-simulation des systèmes  complexes tels qu’ils sont abordés en écologie, en géographie ou robotique. Elles présentent l’originalité de considérer à la fois la distribution des compétences et la distribution du calcul. L’enjeu est de développer des concepts et outils afin de rendre accessible les procédés de modélisation-simulation pour une communauté la plus large possible de scientifiques et d’opérationnels.",
            company: "UMMISCO, IRD",
            link: {
                href: "http://www.ummisco.fr/",
                text: "Page web"

            },
            presentation: {
                title: "Tutorial 4 - Introduire des données de capteurs mobiles dans la simulation",
                description: "La simulation de phénomènes complexes requière de plus en plus l’introduction de données de terrain en vue de reproduire plus fidèlement les dynamiques observées et d’évaluer des scénarios répondant aux problématiques de terrain (pollution, secours, congestion, etc). L’enjeu de ce cours sera justement de proposer une chaîne logicielle allant du capteur mobile au simulateur aux travers de Cours et de Travaux Pratiques. Dans un premier temps, nous verrons comment connecter un capteur à un simulateur à base d’agent sous couvert d’un exemple concret. Pour cela nous utiliserons la plate-forme GAMA et la technologie Raspberry. Ensuite nous nous familiariserons aux  technologies et outils utilisés pour les drones. Nous les manipulerons, et si le temps le permet, nous réaliserons un TP en extérieur portant sur les capteurs mobiles.",
                time: "11 mai 2016"
            }
        },
        {
            name: "Perrine Branchet",
            photo: "themes/ird/img/speaker.png",
            bio: "TBA",
            company: "LGEI- Eau, Mines d'Ales",
            link: {
                href: "",
                text: "Page web"

            },
            presentation: {
                title: "Techniques chimiques et biologiques pour un diagnostic de la qualité de la ressource en eau et des impacts environnementaux et sanitaires associés. Cas du bassin versant urbanisé de la Méfou (Centre Cameroun)",
                description: "La capitale du Cameroun, Yaoundé, voit sa démographie et son emprise urbaine croître de façon très  importante depuis quelques décennies. Cette expansion urbaine exerce une pression sur la ressource en eau du bassin versant de la Méfou, d’autant plus que les infrastructures hydrauliques et d’assainissement sont inadaptées ou manquantes tandis que les surfaces sont de plus en plus imperméabilisées, ce qui contribue aux inondations urbaines et au transfert des polluants issus des activités domestiques, industrielles et agricoles vers les cours d’eau.",
                time: "12 mai 2016"
            }
        },
        {
            name: "Bertrand Granado",
            photo: "themes/ird/img/granado.png",
            bio: "TBA",
            company: "LIP6, UPMC",
            link: {
                href: "http://bertrand.granado.free.fr/",
                text: "Page web"
            },
            presentation: {
                title: "Systèmes embarqués  bio-médicaux: le cas des capsules vidéo-endoscopique",
                description: "Depuis que le pacemaker a vu le jour à la fin des années 1950, les systèmes électroniques bio-médicaux n’ont eu de cesse de se développer à la fois pour réparer l’homme mais aussi pour accroître ses capacités. Les capsules vidéo-endoscopiques sont apparues au débuts des années 2000 et font partie de ces systèmes électroniques. Elles sont à la fois des instruments de mesures et des mini robots prêt à réaliser des prélèvements à l’intérieur du tube digestif. Nous présenterons ici les travaux de recherches menés dans le domaine spécifique des capsules vidéo endoscopiques au niveau international et au sein de l’équipe Syel du LIP6 de l’UPMC et nous tenterons de voir si un jour nous aurons un gastro-enterologue à l’intérieur de nos intestins.",
                time: "12 mai 2016"
            }
        },
        {
            name: "Christian Simon",
            photo: "themes/ird/img/speaker.png",
            bio: "Christian Simon est maître de conférences en Chimie à l’UPMC. Après 10 ans consacrés à la modélisation des liquides par dynamique moléculaire, il est en charge pendant 3 ans des questions de déchets radioactifs et de sûreté nucléaire au Ministère de l’Enseignement Supérieur et de la Recherche. C’est alors qu’il découvre le potentiel des sciences participatives pour l’environnement, appuyées sur les réseaux de FabLabs et Hackerspaces. Il initie donc le projet le FabLab de Sorbonne Universités (avec V. Dupuis). Depuis 2013, il mène le projet OpenGeiger, programme de science participative dédié à la mesure de la radioactivité ambiante.",
            company: "UPMC",
            link: {
                href: "http://www.pmclab.fr/",
                text: "Page web"
            },
            presentation: {
                title: "Fablabs et capteurs",
                description: "Il existe diverses modalités de déploiement des réseaux de capteurs pour la mesure environnementale. L’approche des sciences participatives est particulièremet intéressante, car elle cherche à mettre sur pied simultanément les capteurs, le réseau, la communauté d’utilisateurs, de collecteurs de données et les développeurs. Le Réseau des FabLabs est un réseau mondial solidement établi d’ateliers de fabrication/prototypage numériques avec des outils, des méthodes et une culture partagée. Nous suggérons qu’utiliser les FabLabs comme lieu du co-développement des réseaux de capteurs peut accélérer la dissémination des initiatives de mesures environnementales.",
                time: "12 mai 2016"
            }
        },
        {
            name: "Diane Tchuani Tchakonte",
            photo: "themes/ird/img/diane-tchuani.jpg",
            bio: "TBA",
            company: "Université de Yaoundé I",
            link: {
                href: "",
                text: "Page web"
            },
            presentation: {
                title: "Minimisation de la consommation d'énergie des réseaux de capteurs sans fil dans les applications de couverture de cibles",
                description: "TBA",
                time: "12 mai 2016"
            }
        },
        {
            name: "Moussa Diallo",
            photo: "themes/ird/img/moussa-diallo.png",
            bio: "Moussa DIALLO est né à THIES, Sénégal. Il a obtenu un diplôme d’ingénieurs en Electronique Télécommunications et Instrumentation à l’ENSI de Limoges (France) en 2007, et un Master Recherche en circuit, système, micro et nanotechnologies pour les télécommunications HF et Optiques à l’Université de limoges en 2007. En octobre 2010, il a obtenu un doctorat en Télécommunications à l’INSA de Rennes (France). Il est actuellement enseignant chercheur  à l'ESP. Ses thématiques de recherche portent sur le multiplexage spatial, l’estimation de canal et feedback dans les systèmes de transmission multi antennes MIMO, les réseaux de capteurs, la géolocalisation et le prototypage.",
            company: "UCAD, Sénégal",
            link: {
                href: "",
                text: "Page web"
            },
            presentation: {
                title: "Station Météo Autonome et Connectée",
                description: "Vu les moyens de télécommunications limités dans notre sous-région, il est coûteux et difficile de transmettre des données de n’importe où. En effet, la plupart des stations de mesure du Sénégal ne sont pas connectées. Le déplacement d’une personne est nécessaire pour prélever les paramètres et la transmission s'effectue souvent par email ou par téléphone.  Pour automatiser la surveillance environnementale de jour comme de nuit, nous avons mise en œuvre une station autonome en énergie, connectée et pouvant embarquer plusieurs capteurs. La station est adaptée au contexte local et peut être déployée partout au Sénégal.",
                time: "12 mai 2016"
            }
        }

    ],

    // List of Sponsors
      sponsors: [
          {
              name: "Sorbonne Université",
              logo: "themes/ird/img/logo-su.png",
              url: "http://www.sorbonne-universites.fr/"
          },
          {
              name: "IRD",
              logo: "themes/ird/img/logo-ird.png",
              url: "http://www.ird.fr/"
          },
          {
              name: "WAZIUP",
              logo: "themes/ird/img/waziup-logo.png",
              url: "https://www.create-net.org/news/waziup-first-opensource-platform-internet-things-and-big-data-africa"
          },
          {
              name: "UBO",
              logo: "themes/ird/img/ubo-logo.jpg",
              url: "http://www.univ-brest.fr/"
          },
          {
              name: "UMMISCO",
              logo: "themes/ird/img/UMMISCO-logo.jpg",
              url:"http://www.ummisco.ird.fr/"
          },
          {
              name: "Lab-STICC",
              logo: "themes/ird/img/labsticc-logo.gif",
              url: "http://labsticc.fr/"
          },
          {
              name: "LIUPPA/T2I",
              logo: "themes/ird/img/LIUPPA-T2I.jpg",
              url: "http://liuppa.univ-pau.fr/"
          }
      ],

    // List of Partners
    partners: [
    //  {
    //    name: "BrazilJS",
    //    logo: "themes/yellow-swan/img/partner.png",
    //    url: "http://braziljs.org"
    //  }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
