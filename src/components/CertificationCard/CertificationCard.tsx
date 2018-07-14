import { faCertificate, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import ICertification from '../../typings/certification';
import './CertificationCard.css';

interface IProps {
  certification: ICertification;
}

export const CertificationCard = (props: IProps) => {
  return (
    <div className="certification card-container">
      <div className="card-header">
        <h5>{props.certification.title}</h5>
        <h6>{props.certification.subtitle}</h6>
        <p>{props.certification.date}</p>
      </div>
      <hr className="card-line" />
      <div className="card-body">
        <p>{props.certification.body}</p>
      </div>
      <div className="row card-button-container">
        <button className="six columns" aria-label="open certificate">
          Certificate <FontAwesomeIcon icon={faCertificate}/>
        </button>
        <button
          className="six columns"
          aria-label="open external certification link"
        >
          Website <FontAwesomeIcon icon={faExternalLinkAlt}/>
        </button>
      </div>
    </div>
  );
};
