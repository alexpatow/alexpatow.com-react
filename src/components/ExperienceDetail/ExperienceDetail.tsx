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
          <h5 className="experience-detail-section__heading">{body.heading}</h5>
        ) : (
          ''
        )}
        <ul className="experience-detail-section__bullets">{bullets}</ul>
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
    <div className="row experience-detail">
      <div className="twelve columns">
        <div className="card card--experience-detail">
          <div
            className="card__header"
            aria-label={`opens ${experience.companyLink}`}
            onClick={() => {
              handleClickToOpenCompanyPage(experience.companyLink);
            }}
          >
            <h5 className="card__title">
              {experience.title}
              <FontAwesomeIcon
                className="card__icon"
                icon={faExternalLinkAlt}
              />
            </h5>
            <h6 className="card__subtitle">{experience.subtitle}</h6>
            <p className="card__year">{experience.datestring}</p>
          </div>
          <hr className="card__line" />
          <div className="card__body">{experience.intro}</div>
          <hr className="card__line" />
          <div className="card__more-info">{details}</div>
          <div className="row card__button-container">
            <button
              className="offset-by-four four columns card__button"
              onClick={() => {
                handleShowLessPressed(experience.id);
              }}
            >
              Show Less
            </button>
          </div>
        </div>
      </div>
      <div className="u-full-width experience-detail__line-spacing two columns hide-on-mobile" />
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
