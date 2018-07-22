import { ITechnologies } from '../typings/ITechnology';

export const technologies: ITechnologies = {
  languages: [
    {
      imagePath: 'assets/technology-stack/javascript.svg',
      title: 'JavaScript',
      externalLink: 'https://en.wikipedia.org/wiki/JavaScript',
    },
    {
      imagePath: 'assets/technology-stack/typescript.svg',
      title: 'TypeScript',
      externalLink: 'https://www.typescriptlang.org',
    },
  ],
  frontend: [
    {
      imagePath: 'assets/technology-stack/ionic.svg',
      title: 'Ionic',
      externalLink: 'https://ionicframework.com',
    },
    {
      imagePath: 'assets/technology-stack/angular.svg',
      title: 'Angular',
      externalLink: 'https://angular.io',
    },
    {
      imagePath: 'assets/technology-stack/react.svg',
      title: 'React',
      externalLink: 'https://reactjs.org/',
    },
  ],
  backend: [
    {
      imagePath: 'assets/technology-stack/node.svg',
      title: 'Node.js',
      externalLink: 'https://nodejs.org',
    },
    {
      imagePath: 'assets/technology-stack/graphql.svg',
      title: 'GraphQL',
      externalLink: 'https://graphql.org',
    },
  ],
  platforms: [
    {
      imagePath: 'assets/technology-stack/aws.svg',
      title: 'Amazon Web Services',
      externalLink: 'https://aws.amazon.com',
    },
    {
      imagePath: 'assets/technology-stack/google-cloud.svg',
      title: 'Google Cloud Platform',
      externalLink: 'https://cloud.google.com',
    },
  ],
};
