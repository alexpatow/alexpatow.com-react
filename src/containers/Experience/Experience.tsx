import * as React from 'react';

import { ExperienceCard } from '../../components/ExperienceCard/ExperienceCard';
import { ExperienceDetail } from '../../components/ExperienceDetail/ExperienceDetail';
import { experiences } from '../../data/experiences';
import IExperience from '../../typings/IExperience';
import './Experience.css';

interface IState {
  experienceShowingMore?: IExperience | null;
}

export class Experience extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    const experienceCards = experiences.map((experience, index, array) => {
      if (
        this.state &&
        this.state.experienceShowingMore &&
        experience.id === this.state.experienceShowingMore.id
      ) {
        return (
          <ExperienceDetail
            experience={experience}
            key={experience.id}
            lastCard={index === array.length - 1}
            handleShowLessPressed={id => {
              this.setState({
                experienceShowingMore: null,
              });

              // tslint:disable-next-line
              console.log('scrolling to: ', id);

              // const element: HTMLElement = document.getElementById(id)!;
              // element.scrollIntoView({
              //   behavior: 'smooth',
              //   block: 'start',
              //   inline: 'start',
              // });

              const element: HTMLElement = document.getElementById(id)!;
              console.log(element.parentElement); // tslint:disable-line
              console.log(element.parentNode); // tslint:disable-line
              // tslint:disable-next-line
              console.log(element.offsetTop - element.parentElement!.offsetTop);
              element.parentElement!.scrollTop =
                element.offsetTop - element.parentElement!.offsetTop;
            }}
          />
        );
      }
      return (
        <ExperienceCard
          experience={experience}
          key={experience.id}
          lastCard={index === array.length - 1}
          handleShowMorePressed={(showMoreExperience: IExperience) => {
            this.setState({
              experienceShowingMore: showMoreExperience,
            });

            // tslint:disable-next-line
            console.log('scrolling to: ', showMoreExperience.id);

            const element: HTMLElement = document.getElementById(
              showMoreExperience.id
            )!;
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'start',
            });
          }}
        />
      );
    });

    return (
      <div>
        <div className="row" id="experience">
          <div className="twelve columns">
            <h2 className="experiences">Experience</h2>
          </div>
        </div>
        {experienceCards}
      </div>
    );
  }
}
