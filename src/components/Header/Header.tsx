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
      <div className="twelve columns nav">
        <h1 className="as-button nav__header" aria-label="return to home">
          Alex Patow
        </h1>
        <nav className="nav__button-group">
          <button
            className="nav__button"
            aria-label="scroll to experience section"
            onClick={() => {
              goToElement('experience');
            }}
          >
            Experience
          </button>
          <button
            className="nav__button"
            aria-label="scroll to projects section"
            onClick={() => {
              goToElement('projects');
            }}
          >
            Projects
          </button>
          <button
            className="nav__button"
            aria-label="open https://github.com/alexpatow"
            onClick={() => {
              goToGithub();
            }}
          >
            GitHub
            <FontAwesomeIcon className="nav__icon" icon={faGithub} />
          </button>
          <button
            className="nav__button"
            aria-label="open resume"
            onClick={() => {
              goToResume();
            }}
          >
            Résumé
            <FontAwesomeIcon className="nav__icon" icon={faExternalLinkAlt} />
          </button>
        </nav>
      </div>
    </header>
  );
};
