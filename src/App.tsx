import * as React from 'react';

import { Certifications } from './containers/Certifications/Certifications';
import { Contact } from './containers/Contact/Contact';
import { Experience } from './containers/Experience/Experience';
import { Footer } from './containers/Footer/Footer';
import { Header } from './containers/Header/Header';
import { Projects } from './containers/Projects/Projects';
import { TechnologyExpertise } from './containers/TechnologyExpertise/TechnologyExpertise';

import './App.css';
import { Hero } from './containers/Hero/Hero';

class App extends React.Component {
  public render() {
    return (
      <div className="body">
        <div className="gradient-container">
          <div className="container">
            <div className="header-container">
              <Header />
            </div>
            <div className="section-container">
              <Hero />
            </div>
            <div className="section-container" id="experience">
              <Experience />
            </div>
          </div>
        </div>
        <div className="white-container">
          <div className="container">
            <div className="section-container" id="projects">
              <Projects />
            </div>
            <div className="section-container">
              <Certifications />
            </div>
            <div className="section-container">
              <TechnologyExpertise />
            </div>
            <div className="section-container">
              <Contact />
            </div>
            <div className="footer-container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
