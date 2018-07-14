import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import './Header.css';

function goToElement(id: string): void {
  const element: HTMLElement = document.getElementById(id)!;
  element.scrollIntoView({
    behavior: 'smooth',
  });
}

function goToGithub(): void {
  window.open('https://github.com/alexpatow');
}

function goToResume(): void {
  window.open('/assets/AlexPatowResume.pdf');
}

export const Header = ({}) => {
  return (
    <header className="row">
      <div className="nav-flex twelve columns">
        <h1 className="as-button" aria-label="return to home">
          Alex Patow
        </h1>
      </div>
      <nav className="nav-flex twelve columns">
        <div className="button-group">
          <button
            aria-label="scroll to experience section"
            onClick={() => {
              goToElement('experience');
            }}
          >
            Experience
          </button>
          <button
            aria-label="scroll to projects section"
            onClick={() => {
              goToElement('projects');
            }}
          >
            Projects
          </button>
          <button
            aria-label="open https://github.com/alexpatow"
            onClick={() => {
              goToGithub();
            }}
          >
            GitHub
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button
            aria-label="open resume"
            onClick={() => {
              goToResume();
            }}
          >
            Résumé
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </button>
        </div>
      </nav>
    </header>
  );
};
