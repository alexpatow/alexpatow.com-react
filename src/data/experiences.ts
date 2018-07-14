import Experience from '../typings/experience';

export const experiences: Experience[] = [
  {
    id: 'accenture',
    title: 'Accenture',
    subtitle: 'Digital Business Integration Consultant',
    intro:
      'Member of the Mobility Delivery group, expertise in full stack development for Internet of' +
      ' Things projects. Experience with Hybrid Mobile Applications, API design, Technical Architecture, and' +
      ' Continuous Delivery.',
    body: [
      {
        heading: 'Digital Agriculture Service',
        bullets: [
          'Working with a team of offshore developers to create a hybrid mobile application, using Ionic framework, ' +
            'to help farmers increase yield and decrease costs through the use of sensors, satellite imagery, and ' +
            'analytics, generating client value',
          'Responsible for overseeing the design, development, deployment, and maintenance of API microservices ' +
            'for the mobile application and administrative website using Express, Node.js, and Swagger/OpenAPI' +
            ' Specification',
          'Led the front-end development of the administrative website using AngularJS, enabling Accenture employees ' +
            'to effortlessly manage master data within the platform',
          'Incorporated crash and event reporting services to inform developers of potential issues and project ' +
            'leads of user statistics using Fabric',
          'Built and maintained Continuous Integration and Continuous Delivery server, providing reliable nightly ' +
            'distributions to developers and internal testers for both iOS and Android devices',
          'Architected and created a bi-directional document syncing service using PouchDB, CouchDB, and Redshift ' +
            'to enable offline usage of the mobile application, greatly enhancing user experience',
        ],
        additionalInfoLink:
          'https://www.accenture.com/us-en/insight-accenture-digital-agriculture-solutions',
      },
      {
        heading: 'Continuous Integration and Continuous Delivery',
        bullets: [
          'Partnered with Accenture team working for F500 Client to build their Continuous Delivery server, allowing ' +
            'them to prepare nightly iOS builds',
        ],
      },
      {
        heading: 'Accenture Mobility “Lunch and Learn”',
        bullets: [
          'Led multiple “Lunch and Learn” sessions introducing developers to new concepts in Hybrid Mobile ' +
            'Application and JavaScript development',
        ],
      },
    ],
    datestring: 'July 2015-Today',
    imagePath: '/assets/experiences/accenture.png',
    companyLink: 'https://www.accenture.com/',
  },
  {
    id: 'ptc',
    title: 'PTC',
    subtitle: 'CAD Segment Intern',
    intro:
      'Participated in third party partner selection and strategic planning for one of the largest Computer' +
      ' Aided Design (CAD) software developers, enabling them to reduce costs and time to market.',
    body: [
      {
        bullets: [
          'Evaluated potential partners to incorporate new features into PTC’s computer aided design software',
          "Created a comprehensive weekly newsletter which provided competitive intelligence to PTC's global sales " +
            "team based on analysis of competitors' data",
          "Developed ways to use existing product life-cycle management data to improve customers' efficiency with" +
            ' computer aided design software',
          'Worked with the lead product manager to develop financial projections based on financial modeling and' +
            ' project cost estimators',
        ],
      },
    ],
    datestring: 'July-October 2014',
    imagePath: '/assets/experiences/ptc.png',
    companyLink: 'https://www.ptc.com',
  },
  {
    id: 'audi',
    title: 'Audi AG',
    subtitle: 'Future of Mobility Practicum',
    intro:
      'Utilized the design thinking process to develop and identify opportunities to ensure' +
      ' Audi\'s success in the changing automotive market. The resulting "Connected Vehicle" business' +
      ' plan was distributed to senior management.',
    body: [
      {
        bullets: [
          'Selected as one of twelve students to work on a six-week design project focused on the future ' +
            'of transportation',
          'Conducted extensive market research including 30 face-to-face interviews to gain user insight into ' +
            'opportunities for new products',
          'Developed revenue generating opportunities based on design thinking methodology related to ' +
            'infrastructure, systems, and services',
          'Presented a cohesive vision for a connected vehicle, infrastructure, and customer platform to senior' +
            ' management',
        ],
        additionalInfoLink:
          'http://web.archive.org/web/20140222230439/http://www.audifuturemobility.de:80/#main-content',
      },
    ],
    datestring: 'June-July 2014',
    imagePath: '/assets/experiences/audi.png',
    companyLink: 'http://www.audi.com/en.html',
  },
  {
    id: 'spark',
    title: 'SPARK Product Development',
    subtitle: 'Product Design Intern',
    intro:
      'Performed a variety of roles related to product design, leveraging my skills in engineering and' +
      " innovation to help SPARK's customers move their ideas from prototype to manufacturing.",
    body: [
      {
        bullets: [
          'Contributing team member to multiple projects including medical devices and consumer products',
          'Position included a wide range of roles: market research, ideation, interacting with clients and ' +
            'vendors, and producing models and technical drawings for prototypes and production in SolidWorks',
        ],
      },
    ],
    datestring: 'June-August 2013',
    imagePath: '/assets/experiences/spark.png',
    companyLink: 'http://sparkproductdevelopment.com/',
  },
];
