import * as React from 'react';

import Experience from '../../typings/experience';
import './ExperienceCard.css';

interface IProps {
  experience: Experience;
}

// let hoverActive = false;

// function handleMouseover() {
//   hoverActive = true;
// }

// function handleMouseleave() {
//   hoverActive = false;
// }

export const ExperienceCard = (props: IProps) => {
  return (
    <div className="row row-structure">
      <h6 className="u-full-width two columns date hide-on-mobile">
        {props.experience.datestring}
      </h6>
      <svg className="one column hide-on-mobile" height="284" width="24">
        <line x1="12" y1="0" x2="12" y2="130" stroke="white" stroke-width="2" />
        <circle
          cx="12"
          cy="142"
          r="10"
          stroke="white"
          stroke-width="2"
          fill="white"
        />
        <line x1="12" y1="154" x2="12" y2="284" stroke="white" />
      </svg>
      <div className="nine columns">
        <div className="card-container">
          <div className="row flex-row">
            <img
              className="three columns"
              src={props.experience.imagePath}
              aria-label={`opens ${props.experience.companyLink}`}
            />
            <div className="nine columns">
              <div
                className="card-header"
                aria-label={`opens ${props.experience.companyLink}`}
              >
                <h5>
                  {props.experience.title}
                  <i className="fa fa-external-link" aria-hidden="true" />
                </h5>
                <h6>{props.experience.subtitle}</h6>
              </div>
              <hr className="card-line" />
              <div className="card-body">{props.experience.intro}</div>
              <div className="row card-button-container">
                <button className="offset-by-three six columns">
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
