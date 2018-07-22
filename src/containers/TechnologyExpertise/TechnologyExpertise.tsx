import * as React from 'react';

import { TechnologyExpertiseSection } from '../../components/TechnologyExpertiseSection/TechnologyExpertiseSection';
import { technologies } from '../../data/technologies';
import './TechnologyExpertise.css';

export function TechnologyExpertise() {
  const technologyKeys = Object.keys(technologies);
  const technologySections = technologyKeys.map(key => {
    return (
      <TechnologyExpertiseSection
        technologies={technologies[key]}
        sectionHeader={key}
        key={key}
      />
    );
  });
  return (
    <div>
      <div className="row">
        <div className="twelve columns">
          <h2>Technology Expertise</h2>
        </div>
      </div>
      {technologySections}
    </div>
  );
}
