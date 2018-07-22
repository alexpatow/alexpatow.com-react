import * as React from 'react';

import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import IProject from '../../typings/IProject';

export const Projects = () => {
  const projectCards = projects.reduce(
    (acc: Element[], project: IProject, index, array) => {
      if (index % 2 !== 0) {
        return acc;
      }
      return [
        ...acc,
        <div className="row" key={index}>
          <div className="six columns">
            <ProjectCard project={project} />
          </div>
          <div className="six columns">
            <ProjectCard project={array[index + 1]} />
          </div>
        </div>,
      ];
    },
    []
  );

  return (
    <div id="projects">
      <div className="row">
        <div className="twelve columns">
          <h2>Projects</h2>
        </div>
      </div>
      {projectCards}
    </div>
  );
};
