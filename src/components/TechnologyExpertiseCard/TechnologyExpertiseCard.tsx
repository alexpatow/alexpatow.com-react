import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import ITechnology from '../../typings/technology';
import './TechnologyExpertiseCard.css';

interface IProps {
  technology: ITechnology,
}

export const TechnologyExpertiseCard = ({technology}: IProps) => {

  function handleMoreInfoButtonClicked() {
    window.open(technology.externalLink);
  }

  return (
    <div className="card-container">
      <div className="card-header">
        <h5>{ technology.title}</h5>
      </div>
      <hr className="card-line"/>
      <div className="card-body">
        <p>{ technology.body}</p>
      </div>
      <div className="row card-button-container">
        <button className="offset-by-four four columns"
        onClick={() => { //tslint:disable-line
          handleMoreInfoButtonClicked();
        }}
        aria-label={`open ${technology.title} technology external link`}>
          More Information
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </button>
      </div>
    </div>
  );
};
