import * as React from 'react';

import { CertificationCard } from '../../components/CertificationCard/CertificationCard';
import { certifications } from '../../data/certifications';
import Certification from '../../typings/ICertification';

export const Certifications = () => {
  const certificationCards = certifications.reduce(
    (acc: Element[], certification: Certification, index, array) => {
      if (index % 2 !== 0) {
        return acc;
      }
      return [
        ...acc,
        <div className="row" key={index}>
          <div className="six columns">
            <CertificationCard certification={certification} />
          </div>
          <div className="six columns">
            <CertificationCard certification={array[index + 1]} />
          </div>
        </div>,
      ];
    },
    []
  );

  return (
    <div className="certifications">
      <div className="row">
        <div className="twelve columns">
          <h2>Certifications</h2>
        </div>
      </div>
      <div>{certificationCards}</div>
    </div>
  );
};
