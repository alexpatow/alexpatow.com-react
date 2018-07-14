import {
  faCertificate,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import ICertification from '../../typings/certification';
import './CertificationCard.css';

interface IProps {
  certification: ICertification;
}

function handleButtonClicked(link: string): void {
  window.open(link);
}

export const CertificationCard = ({ certification }: IProps) => {
  return (
    <div className="certification card-container">
      <div className="card-header">
        <h5>{certification.title}</h5>
        <h6>{certification.subtitle}</h6>
        <p>{certification.date}</p>
      </div>
      <hr className="card-line" />
      <div className="card-body">
        <p>{certification.body}</p>
      </div>
      <div className="row card-button-container">
        <button
          className="six columns"
          aria-label="open certificate"
          onClick={() => {
            handleButtonClicked(certification.certificateLink);
          }}
        >
          Certificate <FontAwesomeIcon icon={faCertificate} />
        </button>
        <button
          className="six columns"
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
