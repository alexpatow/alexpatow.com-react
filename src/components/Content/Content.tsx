import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import './Content.css';

const GITHUB_URL = 'https://github.com/alexpatow';
const LINKED_IN_URL = 'https://www.linkedin.com/in/alexpatow';
const RESUME_URL = 'https://s3-us-west-2.amazonaws.com/alexpatow.com/assets/AlexPatowResume.pdf';

export const Content = () => {
  return (
    <div className="row content">
      <div className="twelve columns content__container">
        <a
          className="content__link"
          aria-label="open https://github.com/alexpatow"
          onClick={() => window.open(GITHUB_URL)}
        >
          GitHub
          <FontAwesomeIcon className="content__icon" icon={faGithub} />
        </a>
        <a
          className="content__link"
          aria-label="open https://github.com/alexpatow"
          onClick={() => window.open(LINKED_IN_URL)}
        >
          LinkedIn
          <FontAwesomeIcon className="content__icon" icon={faLinkedin} />
        </a>
        <a
          className="content__link"
          aria-label="open resume"
          onClick={() => window.open(RESUME_URL)}
        >
          Résumé
          <FontAwesomeIcon className="content__icon" icon={faExternalLinkAlt} />
        </a>
      </div>
    </div>
  );
};
