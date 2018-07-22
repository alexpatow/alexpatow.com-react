export interface ITechnology {
  title: string;
  imagePath: string;
  externalLink: string;
}

export type technologySections =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'platforms';

export type ITechnologies = { [key in technologySections]: ITechnology[] };
