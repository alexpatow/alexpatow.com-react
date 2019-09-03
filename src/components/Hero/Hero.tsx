import * as React from 'react';

import './Hero.css';

export const Hero = () => {
  return (
    <div className="row hero">
      <div className="twelve columns hero__container">
        <h4 className="hero__text">
          Proven ability to lead digital transformation projects from conception to maintenance.
        </h4>
        <h5 className="hero__text">
          Lives in New York City
          <br />
          Works at{' '}
          <a href="https://www.eqtpartners.com/" target="_blank">
            EQT Partners
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
