import * as React from 'react';

import { ITechnology } from '../../typings/ITechnology';
import './TechnologyExpertiseElement.css';

interface IProps {
  technology: ITechnology;
}

function handleMoreInfoButtonClicked(link: string): void {
  window.open(link);
}

export const TechnologyExpertiseElement = ({ technology }: IProps) => {
  return (
    <div className="technology-expertise-element u-vertically-center-elements-col">
      <img
        src={technology.imagePath}
        onClick={() => {
          handleMoreInfoButtonClicked(technology.externalLink);
        }}
      />
      <h6 className="u-center-text">{technology.title}</h6>
    </div>
  );
};
