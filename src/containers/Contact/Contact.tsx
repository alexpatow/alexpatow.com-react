import * as React from 'react';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import './Contact.css';

export const Contact = () => {
  return (
    <div>
      <div className="row">
        <div className="twelve columns">
          <h2>Contact</h2>
        </div>
      </div>
      <ContactForm/>
      <div className="row">
        <div className="twelve columns">
          <p className="u-center-text">Powered By AWS Lambda |
            <a href="https://github.com/alexpatow/lambda-contact-form"
               aria-label="opens https://github.com/alexpatow/lambda-contact-form" target="_blank">
              https://github.com/alexpatow/lambda-contact-form
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
