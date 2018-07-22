import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import IProject from '../../typings/IProject';

interface IProps {
  project: IProject;
}

function handleButtonClicked(link: string): void {
  window.open(link);
}

export const ProjectCard = ({ project }: IProps) => {
  const bullets = project.bullets.map((bullet, index) => {
    return <li key={index}>{bullet}</li>;
  });
  return (
    <div className="card">
      <div className="card__header">
        <h5 className="card__title">{project.title}</h5>
        <p className="card__year">{project.date}</p>
      </div>
      <hr className="card__line" />
      <div className="card__body">
        <ul>{bullets}</ul>
      </div>
      <div className="row card__button-container">
        <button
          className="six columns card__button"
          aria-label="open github project"
          onClick={() => {
            handleButtonClicked(project.repoLink);
          }}
        >
          GitHub <FontAwesomeIcon icon={faGithub} />
        </button>
        <button
          className="six columns card__button"
          aria-label="open external project link"
          onClick={() => {
            handleButtonClicked(project.additionalInfoLink!);
          }}
        >
          Website <FontAwesomeIcon icon={faExternalLinkAlt} />
        </button>
      </div>
    </div>
  );
};
