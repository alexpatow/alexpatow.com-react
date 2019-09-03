import * as React from 'react';

import { Content, Footer, Header, Hero } from './components';

import './App.css';

export const App = () => {
  return (
    <div className="body">
      <div className="background background--gradient background--content">
        <div className="container">
          <Header />
          <Hero />
          <Content />
        </div>
      </div>
      <div className="background background--footer">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
};
