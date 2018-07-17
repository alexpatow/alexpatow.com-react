import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import IContactFormData from '../../typings/IContactFormData';
import './ContactForm.css';
import { handleContactFromSubmission } from './handleContactFormSubmission';

export class ContactForm extends React.Component<
  {},
  Partial<IContactFormData>
> {
  private captcha: ReCAPTCHA;
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      body: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public componentDidMount() {
    this.captcha.execute();
  }

  public render() {
    const isSubmitButtonDisabled = () => {
      const values = Object.keys(this.state).map(key => this.state[key]);
      return values.some(value => !value || value === '');
    };

    return (
      <form className="contact-form">
        <div className="row">
          <div className="six columns">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              className="u-full-width"
              placeholder="Jane Doe"
              aria-required={true}
              required={true}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="six columns">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className="u-full-width"
              placeholder="jane.doe@test.com"
              aria-required={true}
              required={true}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <label htmlFor="body">Message:</label>
            <textarea
              id="body"
              className="u-full-width"
              placeholder="Hi there!"
              aria-required={true}
              required={true}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <button
            className="offset-by-four four columns"
            onClick={event => {
              this.handleSubmit(event);
            }}
            disabled={isSubmitButtonDisabled()}
          >
            Send Email
          </button>
        </div>
        <div style={{ display: isSubmitButtonDisabled() ? 'none' : 'block' }}>
          <ReCAPTCHA
            ref={(el: ReCAPTCHA) => {
              this.captcha = el;
            }}
            sitekey="6LekLS8UAAAAAIU3ACtG_eveg7ozNXpsbyn-iWQJ"
            size="invisible"
            aria-hidden="true"
            onChange={this.onReCAPTCHAChange.bind(this)} // tslint:disable-line
          />
        </div>
      </form>
    );
  }

  private handleInputChange(
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLTextAreaElement>
  ) {
    const target = event.currentTarget;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id]: value,
    });
  }

  private onReCAPTCHAChange(value: string) {
    this.setState({
      recaptchaToken: value,
    });
  }

  private async handleSubmit(event: React.FormEvent) {
    // prevents form submission from reloading the page.
    event.preventDefault();
    try {
      await handleContactFromSubmission(this.state as IContactFormData);
      window.alert('Success!');
    } catch (err) {
      console.error(err); // tslint:disable-line
      window.alert(
        'Message failed to send, please email me at: alexpatow@alexpatow.com'
      );
    }
  }
}
