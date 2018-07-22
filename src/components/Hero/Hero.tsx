import * as React from 'react';

import './Hero.css';

export const Hero = () => {
  return (
    <div className="row hero">
      <div className="twelve columns hero__container">
        <h4 className="hero__text">
          Full Stack{' '}
          <span className="hero__text--underline">JavaScript Developer</span>{' '}
          and <span className="hero__text--underline">Technical Architect</span>{' '}
          with a solid, proven ability to transform software solutions from
          initial brainstorming to production release
        </h4>
      </div>
    </div>
  );
};
