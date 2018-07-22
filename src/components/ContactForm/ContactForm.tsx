import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './ContactForm.css';
import { ErrorAlert } from './ErrorAlert';
import { handleContactFromSubmission } from './handleContactFormSubmission';
import { SuccessAlert } from './SuccessAlert';

interface IState {
  name: string;
  email: string;
  body: string;
  showSuccessAlert: boolean;
  showErrorAlert: boolean;
}

export class ContactForm extends React.Component<{}, IState> {
  private captcha: ReCAPTCHA;
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      body: '',
      showSuccessAlert: false,
      showErrorAlert: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    const isSubmitButtonDisabled = () => {
      return (
        this.state.email === '' ||
        this.state.body === '' ||
        this.state.name === ''
      );
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
              className="u-full-width contact-form__textarea"
              placeholder="Hi there!"
              aria-required={true}
              required={true}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <button
            className="offset-by-four four columns contact-form__button"
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
        <SuccessAlert
          show={this.state.showSuccessAlert}
          handleClose={() => {
            this.handleAlertClose();
          }}
        />
        <ErrorAlert
          show={this.state.showErrorAlert}
          handleClose={() => {
            this.handleAlertClose();
          }}
        />
      </form>
    );
  }

  private handleAlertClose() {
    this.setState({
      showSuccessAlert: false,
      showErrorAlert: false,
    });
  }

  private handleInputChange(
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLTextAreaElement>
  ) {
    const target = event.currentTarget;
    const value = target.value;
    const id = target.id;
    const updatedState = {};
    updatedState[id] = value;

    this.setState(updatedState);
  }

  private async handleSubmit(event: React.FormEvent) {
    // prevents form submission from reloading the page.
    event.preventDefault();
    try {
      this.captcha.execute();
    } catch (err) {
      console.error(err); // tslint:disable-line
      this.setState({
        showErrorAlert: true,
      });
    }
  }

  private async onReCAPTCHAChange(recaptchaToken: string) {
    await handleContactFromSubmission({
      recaptchaToken,
      name: this.state.name,
      email: this.state.email,
      body: this.state.body,
    });
    this.setState({
      showSuccessAlert: true,
      name: '',
      email: '',
      body: '',
    });
  }
}
