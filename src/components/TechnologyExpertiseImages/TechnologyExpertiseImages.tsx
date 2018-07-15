import * as React from 'react';

import ITechnology from '../../typings/ITechnology';
import './TechnologyExpertiseImages.css';

interface IProps {
  technologies: ITechnology[];
  handleTechnologyClicked: (technology: ITechnology) => void;
}

export const TechnologyExpertiseImages = ({
  technologies,
  handleTechnologyClicked,
}: IProps) => {
  const images = technologies.map((technology, index) => {
    return (
      <img
        src={technology.imagePath}
        alt={`${technology.title} icon`}
        aria-label={`select ${
          technology.title
        } technology for more information`}
        onClick={() => {
          handleTechnologyClicked(technology);
        }}
        key={index}
      />
    );
  });

  return <div className="technology-image-container">{images}</div>;
};
