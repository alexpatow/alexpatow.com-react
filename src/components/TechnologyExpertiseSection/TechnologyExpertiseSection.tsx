import * as React from 'react';

import { ITechnology } from '../../typings/ITechnology';
import { TechnologyExpertiseElement } from '../TechnologyExpertiseElement/TechnologyExpertiseElement';
import './TechnologyExpertiseSection.css';

interface IProps {
  technologies: ITechnology[];
  sectionHeader: string;
}

function titleCase(word: string): string {
  return word.replace(word[0], word[0].toUpperCase());
}

function getColumnClass(length: number): string {
  switch (length) {
    case 0:
    case 1:
      return 'twelve columns';
    case 2:
      return 'six columns';
    case 3:
      return 'four columns';
    case 4:
      return 'three columns';
    default:
      return 'one column';
  }
}

export const TechnologyExpertiseSection = ({
  technologies,
  sectionHeader,
}: IProps) => {
  const technologyList = technologies.map((technology, index, array) => {
    return (
      <div
        className={getColumnClass(array.length)}
        key={`${sectionHeader}:${index}`}
      >
        <TechnologyExpertiseElement technology={technology} />
      </div>
    );
  });

  return (
    <div className="row">
      <div className="twelve columns">
        <h4>{titleCase(sectionHeader)}</h4>
      </div>
      {technologyList}
    </div>
  );
};
