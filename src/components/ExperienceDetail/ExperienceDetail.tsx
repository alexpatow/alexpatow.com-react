import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import IExperience from '../../typings/IExperience';
import './ExperienceDetail.css';

interface IProps {
  experience: IExperience;
  handleShowLessPressed: (id: string) => void;
  lastCard: boolean;
}

function handleClickToOpenCompanyPage(link: string) {
  window.open(link);
}

export function ExperienceDetail({
  experience,
  handleShowLessPressed,
  lastCard,
}: IProps) {
  const details = experience.body.map((body, bodyIndex) => {
    const bullets = body.bullets!.map((bullet, bulletIndex) => {
      return <li key={`bullet:${bodyIndex}:${bulletIndex}`}>{bullet}</li>;
    });
    return (
      <div
        key={`section:${bodyIndex}`}
        className="experience-detail-section"
        id={experience.id}
      >
        {body.heading ? (
          <h5 className="section-heading">{body.heading}</h5>
        ) : (
          ''
        )}
        <ul className="experience-detail-bullets">{bullets}</ul>
        {body.additionalInfoLink ? (
          <a
            aria-label={`opens ${body.additionalInfoLink}`}
            href={body.additionalInfoLink}
            target="_blank"
          >
            More Information
          </a>
        ) : (
          ''
        )}
      </div>
    );
  });
  return (
    <div className="row row-structure experience-detail">
      <div className="twelve columns">
        <div className="card-container">
          <div
            className="card-header"
            aria-label={`opens ${experience.companyLink}`}
            onClick={() => {
              handleClickToOpenCompanyPage(experience.companyLink);
            }}
          >
            <h5>
              {experience.title}
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </h5>
            <h6>{experience.subtitle}</h6>
            <h6>{experience.datestring}</h6>
          </div>
          <hr className="card-line" />
          <div className="card-body">{experience.intro}</div>
          <hr className="card-line" />
          <div className="row card-more-info">{details}</div>
          <div className="row card-button-container">
            <button
              className="offset-by-four four columns"
              onClick={() => {
                handleShowLessPressed(experience.id);
              }}
            >
              Show Less
            </button>
          </div>
        </div>
      </div>
      <div className="u-full-width line-spacing two columns hide-on-mobile" />
      <svg className="one column hide-on-mobile" height="20" width="24">
        <line
          x1="12"
          y1="0"
          x2="12"
          y2="20"
          stroke="white"
          strokeWidth={lastCard ? 0 : 2}
        />
      </svg>
    </div>
  );
}
