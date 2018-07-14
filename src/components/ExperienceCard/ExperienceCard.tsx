import * as React from 'react';

import Experience, { default as IExperience } from '../../typings/experience';
import './ExperienceCard.css';

interface IProps {
  experience: Experience;
  lastCard: boolean;
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

  public render() {
    return (
      <div className="row row-structure experience-card">
        <h6
          className="u-full-width two columns date hide-on-mobile"
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
            className="card-container"
            onMouseEnter={() => {
              this.setState({ hoverActive: true });
            }}
            onMouseLeave={() => {
              this.setState({ hoverActive: false });
            }}
          >
            <div className="row flex-row">
              <img
                className="three columns"
                src={this.experience.imagePath}
                aria-label={`opens ${this.experience.companyLink}`}
              />
              <div className="nine columns">
                <div
                  className="card-header"
                  aria-label={`opens ${this.experience.companyLink}`}
                >
                  <h5>
                    {this.experience.title}
                    <i className="fa fa-external-link" aria-hidden="true" />
                  </h5>
                  <h6>{this.experience.subtitle}</h6>
                </div>
                <hr className="card-line" />
                <div className="card-body">{this.experience.intro}</div>
                <div className="row card-button-container">
                  <button className="offset-by-three six columns">
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
}
