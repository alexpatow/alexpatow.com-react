import IBody from './body';

export default interface IExperience {
  id: string;
  title: string;
  subtitle: string;
  body: IBody[];
  intro: string;
  datestring: string;
  imagePath: string;
  companyLink: string;
}
