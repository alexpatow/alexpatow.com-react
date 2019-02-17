import * as React from 'react';

import './Header.css';

export const Header = ({}) => {
  return (
    <header className="row">
      <div className="twelve columns header">
        <h1 className="as-button header__title" aria-label="return to home">
          Alex Patow
        </h1>
      </div>
    </header>
  );
};
