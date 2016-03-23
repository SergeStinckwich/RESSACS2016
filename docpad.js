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
      speakers: "Formateurs",
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
              title: "Introduction aux plateformes Arduino et Raspberry Pi",
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
              title: "Modèles physiques, simulation et observation",
              description: "Les réseaux de capteurs (RdC) réalisent une observation distribuée de grandeurs physiques. Ce sont des outils de mesure complexes réalisant un échantillonnage. A ce titre, la chaine d'acquisition inclut des mesures locales, la synthèse de diagnostics distribués, l'alimentation de bases de connaissances. Les fréquences d'acquisition, les délais de décision constituent un élément de variabilité du procédé., les échelles des applications allant du minuscule à l'échelle continentale. Nous montrons une méthode d'étude de déploiements centrée sur le processus observé, à une échelle géographique moyenne. Des outils permettent de centrer l'observation sur une zone particulière, choisie sur des cartes ou des photos. Cette zone est segmentée pour former des systèmes cellulaires en vue de simulations. Nous montrons comment les mesures des RdC et des données externes (météo, élévations) sont intégrées dans ces systèmes, et les bénéfices qui peuvent en découler pour la conception des liens radio (ligne de vue) et l'adéquation entre le RdC et le processus observé. TP sur les outils LabSTICC.",
              time: "10 mai 2016"
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
              title: "Technologies Long-Range pour Réseaux de capteurs et Internet des Objets",
              description: "It is widely accepted that the Era of IoT can potentially connect billions of sensors, devices, equipment, systems, etc. In turn, the challenge is about driving business outcomes, consumer benefits, and the creation of new value. While benefits of IoT are clearly stated for increased process efficiency through automation & optimization, the deployment of such devices in a large scale is still held back by technical challenges. However, there are a number of small revolutions that are rapidly turning IoT into reality. In this presentation we will present how new contributions in the domain of hardware, communication, data storage and data-processing definitely make the IoT paradigm to happen with an unpreceding level of flexibility and cost effective implementations. Regarding communications, we will particularly present Semtech's LoRa radios and how gateways and end-devices can be built from off-the-shelves components for low-cost, long-range and ad-hoc Internet of Things deployment.",
              time: "11 mai 2016"
          }
      },
        {
            name: "Nicolas Marilleau",
            photo: "themes/ird/img/congduc-pham.jpg",
            bio: "TBA",
            company: "UMMISCO, IRD",
            link: {
                href: "http://www.ummisco.fr/",
                text: "Page web"

            },
            presentation: {
                title: "TBA",
                description: "TBA",
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
