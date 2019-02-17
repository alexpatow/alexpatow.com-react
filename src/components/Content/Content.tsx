import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import './Content.css';

function goToGithub(): void {
  window.open('https://github.com/alexpatow');
}

function goToLinkedIn(): void {
  window.open('https://www.linkedin.com/in/alexpatow');
}

function goToResume(): void {
  window.open(
    'https://s3-us-west-2.amazonaws.com/alexpatow.com/assets/AlexPatowResume.pdf'
  );
}

export const Content = () => {
  return (
    <div className="content">
      <button
        className="content__button"
        aria-label="open https://github.com/alexpatow"
        onClick={() => {
          goToGithub();
        }}
      >
        GitHub
        <FontAwesomeIcon className="content__icon" icon={faGithub} />
      </button>
      <button
        className="content__button"
        aria-label="open https://github.com/alexpatow"
        onClick={() => {
          goToLinkedIn();
        }}
      >
        LinkedIn
        <FontAwesomeIcon className="content__icon" icon={faLinkedin} />
      </button>
      <button
        className="content__button"
        aria-label="open resume"
        onClick={() => {
          goToResume();
        }}
      >
        Résumé
        <FontAwesomeIcon className="content__icon" icon={faExternalLinkAlt} />
      </button>
    </div>
  );
};
