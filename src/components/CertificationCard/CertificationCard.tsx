import {
  faCertificate,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import ICertification from '../../typings/ICertification';

interface IProps {
  certification: ICertification;
}

function handleButtonClicked(link: string): void {
  window.open(link);
}

export const CertificationCard = ({ certification }: IProps) => {
  return (
    <div className="card">
      <div className="card__header">
        <h5 className="card__title">{certification.title}</h5>
        <h6 className="card__subtitle">{certification.subtitle}</h6>
        <p className="card__year">{certification.date}</p>
      </div>
      <hr className="card__line" />
      <p className="card__body-text">{certification.body}</p>
      <div className="row card__button-container">
        <button
          className="six columns card__button"
          aria-label="open certificate"
          onClick={() => {
            handleButtonClicked(certification.certificateLink);
          }}
        >
          Certificate <FontAwesomeIcon icon={faCertificate} />
        </button>
        <button
          className="six columns card__button"
          aria-label="open external certification link"
          onClick={() => {
            handleButtonClicked(certification.additionalInfoLink);
          }}
        >
          Website <FontAwesomeIcon icon={faExternalLinkAlt} />
        </button>
      </div>
    </div>
  );
};
