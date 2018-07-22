import * as React from 'react';

import './Hero.css';

export const Hero = () => {
  return (
    <div className="row hero">
      <div className="twelve columns intro-container">
        <h4>
          Full Stack <span className="underline">JavaScript Developer</span> and{' '}
          <span className="underline">Technical Architect</span> with a solid,
          proven ability to transform software solutions from initial
          brainstorming to production release
        </h4>
      </div>
    </div>
  );
};
