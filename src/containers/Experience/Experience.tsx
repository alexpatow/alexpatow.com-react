import * as React from 'react';

import { ExperienceCard } from '../../components/ExperienceCard/ExperienceCard';
import { experiences } from '../../data/experiences';
import './Experience.css';

export const Experience = () => {
  const experienceCards = experiences.map((experience, index, array) => {
    return (
      <ExperienceCard
        experience={experience}
        key={experience.id}
        lastCard={index === array.length - 1}
      />
    );
  });
  return (
    <div>
      <h2 className="experiences" id="experience">
        Experience
      </h2>
      {experienceCards}
    </div>
  );
};
