import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';

import IProject from '../../typings/project';
import './ProjectCard.css';

interface IProps {
  project: IProject;
}

export const ProjectCard = (props: IProps) => {
  const bullets = props.project.bullets.map((bullet, index) => {
    return <li key={index}>{bullet}</li>;
  });
  return (
    <div className="card-container">
      <div className="card-header">
        <h5>{props.project.title}</h5>
        <p>{props.project.date}</p>
      </div>
      <hr className="card-line" />
      <div className="card-body">
        <ul>{bullets}</ul>
      </div>
      <div className="row card-button-container">
        <button className="six columns" aria-label="open github project">
          GitHub <FontAwesomeIcon icon={faGithub}/>
        </button>
        <button className="six columns" aria-label="open external project link">
          Website <FontAwesomeIcon icon={faExternalLinkAlt}/>
        </button>
      </div>
    </div>
  );
};
