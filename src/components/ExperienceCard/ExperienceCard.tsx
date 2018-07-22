import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import IExperience from '../../typings/IExperience';
import './ExperienceCard.css';

interface IProps {
  experience: IExperience;
  lastCard: boolean;
  handleShowMorePressed: (experience: IExperience) => void;
}

interface IState {
  hoverActive: boolean;
}

export class ExperienceCard extends React.Component<IProps, IState> {
  private readonly experience: IExperience;
  private readonly lastCard: boolean;

  constructor(props: IProps) {
    super(props);
    this.experience = props.experience;
    this.lastCard = props.lastCard;
    this.state = {
      hoverActive: false,
    };
  }

  // row-structure experience-card

  public render() {
    return (
      <div className="row experience-section" id={this.experience.id}>
        <h6
          className="u-full-width two columns date hide-on-mobile experience-section__date"
          style={{ opacity: this.state.hoverActive ? 1 : 0 }}
        >
          {this.experience.datestring}
        </h6>
        <svg className="one column hide-on-mobile" height="284" width="24">
          <line
            x1="12"
            y1="0"
            x2="12"
            y2="130"
            stroke="white"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="142"
            r="10"
            stroke="white"
            strokeWidth="2"
            fill="white"
            fillOpacity={this.state.hoverActive ? 1 : 0}
          />
          <line
            x1="12"
            y1="154"
            x2="12"
            y2="284"
            stroke="white"
            strokeWidth={this.lastCard ? 0 : 2}
          />
        </svg>
        <div className="nine columns">
          <div
            className="card card--experience"
            onMouseEnter={() => {
              this.setState({ hoverActive: true });
            }}
            onMouseLeave={() => {
              this.setState({ hoverActive: false });
            }}
          >
            <div className="row row--experience-card">
              <img
                className="three columns"
                src={this.experience.imagePath}
                alt={`${this.experience.title} logo`}
                aria-label={`opens ${this.experience.companyLink}`}
                onClick={() => {
                  this.handleClickToOpenCompanyPage();
                }}
              />
              <div className="nine columns">
                <div
                  className="card__header"
                  aria-label={`opens ${this.experience.companyLink}`}
                  onClick={() => {
                    this.handleClickToOpenCompanyPage();
                  }}
                >
                  <h5 className="card__title">
                    {this.experience.title}
                    <FontAwesomeIcon
                      className="card__icon"
                      icon={faExternalLinkAlt}
                      style={{ opacity: this.state.hoverActive ? 1 : 0 }}
                    />
                  </h5>
                  <h6 className="card__subtitle">{this.experience.subtitle}</h6>
                </div>
                <hr className="card__line" />
                <div className="card__body">{this.experience.intro}</div>
                <div className="row card__button-container">
                  <button
                    className="offset-by-three six columns card__button"
                    onClick={() => {
                      this.props.handleShowMorePressed(this.experience);
                    }}
                  >
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private handleClickToOpenCompanyPage() {
    window.open(this.experience.companyLink);
  }
}
