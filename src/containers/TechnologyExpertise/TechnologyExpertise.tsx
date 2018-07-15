import * as React from 'react';
import { TechnologyExpertiseCard } from '../../components/TechnologyExpertiseCard/TechnologyExpertiseCard';

import { TechnologyExpertiseImages } from '../../components/TechnologyExpertiseImages/TechnologyExpertiseImages';
import { technologies } from '../../data/technologies';
import ITechnology from '../../typings/ITechnology';
import './TechnologyExpertise.css';

interface IState {
  selectedTechnology: ITechnology;
}

export class TechnologyExpertise extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedTechnology: technologies[0],
    };
  }

  public render() {
    return (
      <div>
        <div className="row">
          <div className="twelve columns">
            <h2>Technology Expertise</h2>
          </div>
        </div>
        <div className="row">
          <div className="technology-image-container twelve columns">
            <TechnologyExpertiseImages
              technologies={technologies}
              handleTechnologyClicked={this.handleTechnologyClicked}
            />
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <TechnologyExpertiseCard
              technology={this.state.selectedTechnology}
            />
          </div>
        </div>
      </div>
    );
  }

  private handleTechnologyClicked = (technology: ITechnology): void => {
    this.setState({
      selectedTechnology: technology,
    });
  };
}
