require('./Contact.scss');

import * as React from 'react';
import { Container, Header, Divider, Label, Segment, Button } from 'semantic-ui-react';
import { Input, Form } from 'formsy-semantic-ui-react';

interface NameValuePair {
  name: string;
  value: any;
}

interface ContactProps { }
interface ContactState {
  formData: any;
  showMessage: boolean;
}

export class ContactComponent extends React.Component<ContactProps, ContactState> {
  refs: any;
  constructor(props) {
    super(props);

    this.state = {
      formData: null,
      showMessage: false,
    }
  }
  render() {
    const props = this.props;
    const errorLabel = <Label color="red" pointing="above" />;
    return (
      <Container className="contact-page page" textAlign="center">
        <Header as="h1">Contact Me</Header>
        {(this.state.showMessage)
          ? <Header as="h2">Thank you for contacting me.</Header>
          : ''}
        <Form
          id="contact-form"
          noValidate
          ref="form"
          onValidSubmit={(formData, reset) => {
            this.onSubmit(formData, reset);
            this.setState({ showMessage: true });
          }}>
          <Segment>
            <Input
              label='Your Name'
              name="name"
              required
              validations="isWords"
              validationErrors={{
                isWords: 'No numbers or special characters allowed',
                isDefaultRequiredValue: 'Name is required'
              }}
              errorLabel={errorLabel} />
          </Segment>
          <Segment>
            <Input
              label='Email Address'
              name="from"
              required
              validations="isEmail"
              validationErrors={{
                isEmail: 'This is not a valid email',
                isDefaultRequiredValue: 'Email is required'
              }}
              errorLabel={errorLabel} />
          </Segment>
          <Segment>
            <Input
              label="Subject"
              name="subject"
              required
              validations="isWords"
              validationErrors={{
                isWords: 'No numbers or special characters allowed',
                isDefaultRequiredValue: 'Subject is required'
              }}
              errorLabel={errorLabel} />
          </Segment>
          <Segment>
            <Form.TextArea
              name="message"
              label="Message"
              placeholder="How can I be of assistance?"
              required
              errorLabel={errorLabel}
              validationErrors={{
                isDefaultRequiredValue: 'Message is required',
              }}
            />
          </Segment>
          <Button
            className="submit-btn"
            type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }

  onSubmit(formData, reset) {
    const contactEmail = Object.assign({}, formData, {
      to: 'andrew.page@mancookbookcomputer.com',
      text: `From: ${formData.name} <${formData.from}> -- ${formData.message}`,
    });
    delete contactEmail.message;
    Meteor.call('sendEmail', contactEmail);

    const thankYouEmail = {
      to: formData.from,
      name: formData.name,
      from: 'no-reply@mancookbookcomputer.com',
      subject: 'Thank you for contacting me',
      text: 'Thank you for taking the time to drop me a line. I will get back to you as soon as I can.',
      signature: 'Andrew Page',
    };
    Meteor.call('sendTemplateEmail', thankYouEmail, 'thankyouEmail');

    reset();
  }
}

export const ContactContainer: any = ContactComponent;
export default ContactContainer;
