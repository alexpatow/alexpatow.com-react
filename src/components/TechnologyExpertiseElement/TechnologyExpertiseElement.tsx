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
    <div className="technology-expertise-element">
      <img
        className="technology-expertise-element__image"
        src={technology.imagePath}
        onClick={() => {
          handleMoreInfoButtonClicked(technology.externalLink);
        }}
      />
      <h6 className="technology-expertise-element__title">
        {technology.title}
      </h6>
    </div>
  );
};
