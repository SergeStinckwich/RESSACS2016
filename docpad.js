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
        link: ""
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
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Equipe UMMISCO, IRD/UPMC",
        link: {
          href: "http://www.doesnotunderstand.org/",
          text: "Page web"
        },
        presentation: {
          title: "Introduction aux plateformes Arduino et Raspberry Pi",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "9 mai 2016"
        }
      },
      {
          name: "Bernard Pottier",
          photo: "themes/ird/img/bernard-pottier.jpg",
          bio: "Bernard Pottier est professeur d'informatique. Il a travaillé à la réalisation d'outils de conception d'architectures de traitement de 1990 à 2007, dans le cadre de plusieurs projets nationaux et internationaux. Depuis 2008, ses recherches sont tournées vers les réseaux de capteurs sans fil et les méthodes de conception d'applications sociétales et environnementales.",
        company: "Universite de Brest",
          link: {
              href:"http://wsn.univ-brest.fr/pottier/",
              text:"Page web"
          },
        presentation: {
          title: "Title ?",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
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
          title: "Title ?",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11 mai 2016"
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
