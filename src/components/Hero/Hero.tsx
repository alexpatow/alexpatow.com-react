import * as React from 'react';

import './Hero.css';

export const Hero = () => {
  return (
    <div className="row hero">
      <div className="twelve columns hero__container">
        <h4 className="hero__text">
          Full Stack Developer with a proven ability to transform software
          solutions from initial brainstorming to production release.
        </h4>
        <h5 className="hero__text">
          Lives in Boston
          <br />
          Works at{' '}
          <a href="https://www.accenture.com/" target="_blank">
            Accenture
          </a>
          <br />
          Graduated from{' '}
          <a href="https://www.bu.edu/" target="_blank">
            Boston University
          </a>
        </h5>
      </div>
    </div>
  );
};
