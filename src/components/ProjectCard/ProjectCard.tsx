import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import IProject from '../../typings/project';
import './ProjectCard.css';

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
    <div className="card-container">
      <div className="card-header">
        <h5>{project.title}</h5>
        <p>{project.date}</p>
      </div>
      <hr className="card-line" />
      <div className="card-body">
        <ul>{bullets}</ul>
      </div>
      <div className="row card-button-container">
        <button
          className="six columns"
          aria-label="open github project"
          // tslint:disable-next-line
          onClick={() => {
            handleButtonClicked(project.repoLink);
          }}
        >
          GitHub <FontAwesomeIcon icon={faGithub} />
        </button>
        <button
          className="six columns"
          aria-label="open external project link"
          // tslint:disable-next-line
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
