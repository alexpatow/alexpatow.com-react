import IProject from '../typings/IProject';

export const projects: IProject[] = [
  {
    title: 'National Democratic Institute Civic Tech Leadership Program',
    bullets: [
      'Worked with a diverse team from across the Middle East and North Africa region to improve access' +
        ' to government services through technology innovation',
      'Developed a concept to offoad the burden of minor illnesses from resource-strained hospitals in ' +
        'developing nations through an SMS chat bot',
      'Built an API which enables people to receive a medical diagnosis and ' +
        'treatment recommendations via SMS messages and reducing healthcare expenditures',
    ],
    additionalInfoLink:
      'https://civictechleaders.org/civic-tech-leaders-virtual-exchange/',
    technologiesUsed: ['Node.js', 'JavaScript', 'API Development'],
    repoLink: 'https://github.com/alexpatow/sms-health',
    date: 2016,
  },
  {
    title: 'Benilde-St. Margaret’s Drama Department Prop Rental Website',
    bullets: [
      'Created a webpage which allows school to rent props to other schools and organizations in order to ' +
        'maximize use and generate revenue',
      'Used Jekyll to generate the static pages and Skeleton Framework with SCSS for styling; resulting in a' +
        ' fast, responsive, and easily maintainable website',
      'Built a custom Node script to generate the Markdown content for Jekyll and Gulp task to deploy the site' +
        ' from the command line',
    ],
    additionalInfoLink: 'http://www.bsmproprental.com',
    technologiesUsed: ['Jekyll', 'HTML', 'SCSS'],
    repoLink: 'https://github.com/alexpatow/bsm-prop-rental',
    date: 2016,
  },
];
