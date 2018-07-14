import * as React from 'react';

import './ContactForm.css';

interface IState {
  name: string;
  email: string;
  message: string;
}

export class ContactForm extends React.Component<{}, Partial<IState>> {

  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // TODO: Add captcha code
  // <re-captcha *ngIf="contactForm.valid"
  // className="offset-by-three six columns"
  // siteKey="6LekLS8UAAAAAIU3ACtG_eveg7ozNXpsbyn-iWQJ"
  // size="invisible"
  // aria-hidden="true"
  // ></re-captcha>

  public render() {
    return (
      <form onSubmit={this.handleSubmit} className="contact-form">
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
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="u-full-width"
              placeholder="Hi there!"
              aria-required={true}
              required={true}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <button type="submit" value="Submit" className="offset-by-four four columns">
            Send Email
          </button>
        </div>
      </form>
    )
  }

  private handleInputChange(event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) {
    const target = event.currentTarget;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id]: value,
    });
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // TODO: Add form submission logic
    event.preventDefault();
  }
}
