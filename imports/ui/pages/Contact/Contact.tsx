require('./Contact.scss');

import * as React from 'react';
import { Container, Header, Form, Divider, Button } from 'semantic-ui-react';

interface ContactProps { }
interface ContactState { }

export class ContactComponent extends React.Component<ContactProps, ContactState> {
  render() {
    const props = this.props;
    return (
      <Container className="contact-page page" textAlign="center">
        <Header as="h1">Contact Me</Header>
        <Form>
          <Form.Field>
            <label>Your Name</label>
            <input placeholder='Your Name' />
          </Form.Field>
          <Form.Field>
            <label>Email Address</label>
            <input placeholder='Email Address' />
          </Form.Field>
          <Form.Field>
            <label>Subject</label>
            <input placeholder='Subject' />
          </Form.Field>
          <Form.TextArea label="Message" placeholder="Message" />
          <Button className="cancel-btn" type='cancel'>Cancel</Button>
          <Button className="submit-btn" type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export const ContactContainer: any = ContactComponent;
export default ContactContainer;
