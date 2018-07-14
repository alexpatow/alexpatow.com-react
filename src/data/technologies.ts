import Technology from '../typings/technology';

export const technologies: Technology[] = [
  {
    imagePath: 'assets/technology-stack/ionic.svg',
    title: 'Ionic',
    body:
      'Ionic is a framework for developing Hybrid Mobile Applications. It provides an interface between' +
      ' Apache Cordova and Angular, allowing developers to build applications which can be deployed on iOS and Android' +
      ' from the same codebase, improving the reducing the development effort and time to market.',
    externalLink: 'http://ionicframework.com',
  },
  {
    imagePath: 'assets/technology-stack/angular.svg',
    title: 'Angular',
    body:
      'Angular is a Single Page Application framework which allows developers to build rich and interactive,' +
      ' experiences through client-side JavaScript. Angular.io describes Angular as, "Angular combines declarative ' +
      'templates, dependency injection, end to end tooling, and integrated best practices to solve development ' +
      'challenges."',
    externalLink: 'http://angular.io',
  },
  {
    imagePath: 'assets/technology-stack/node.svg',
    title: 'Node.js',
    body:
      'Node.js is a platform for server-side JavaScript. Its event-driven, non-blocking I/O model allows it to' +
      ' easily handle large numbers of simultaneous requests. The npm ecosystem provides an incredible amount of' +
      ' open-source packages to improve code reuse. Server-side JavaScript allows front end developers to easily' +
      ' upskill and develop the APIs that their apps consume.',
    externalLink: 'http://nodejs.org',
  },
  {
    imagePath: 'assets/technology-stack/aws.svg',
    title: 'Amazon Web Services',
    body:
      'Amazon Web Services (AWS) provides a wide variety of services for cloud computing. From their Elastic' +
      ' Compute Cloud (EC2) service, which provides Linux and Windows servers to their recently released Lambda' +
      ' Serverless Functions As A Service, AWS has incredible breadth and depth of services available for' +
      ' organizations of all sizes.',
    externalLink: 'http://aws.amazon.com',
  },
  {
    imagePath: 'assets/technology-stack/fastlane.png',
    title: 'Fastlane',
    body:
      'Fastlane is an open source tool for Continuous Delivery of mobile applications. The Ruby-based Fastfile' +
      ' provides a way for developers to configure autonomous builds and distributions from their Continuous' +
      ' Integration server. It integrates well with Jenkins and beta testing distribution tools such as Fabric and' +
      ' Hockey App.',
    externalLink: 'https://fastlane.tools',
  },
];
