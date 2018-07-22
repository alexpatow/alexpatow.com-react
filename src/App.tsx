import * as React from 'react';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Certifications } from './containers/Certifications/Certifications';
import { Contact } from './containers/Contact/Contact';
import { Experience } from './containers/Experience/Experience';
import { Projects } from './containers/Projects/Projects';
import { TechnologyExpertise } from './containers/TechnologyExpertise/TechnologyExpertise';

import './App.css';
import { Hero } from './components/Hero/Hero';

class App extends React.Component {
  public render() {
    return (
      <div className="body">
        <div className="background background--gradient">
          <div className="container">
            <div className="section section--header">
              <Header />
            </div>
            <div className="section">
              <Hero />
            </div>
            <div className="section" id="experience">
              <Experience />
            </div>
          </div>
        </div>
        <div className="background">
          <div className="container">
            <div className="section" id="projects">
              <Projects />
            </div>
            <div className="section">
              <Certifications />
            </div>
            <div className="section">
              <TechnologyExpertise />
            </div>
            <div className="section">
              <Contact />
            </div>
            <div className="section">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
