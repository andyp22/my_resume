require('./Contact.scss');

import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';

interface ContactProps { }
interface ContactState { }

export class ContactComponent extends React.Component<ContactProps, ContactState> {
  render() {
    const props = this.props;
    return (
      <Container className="contact-page page">
        <Header as="h1">This is the contact page</Header>
      </Container>
    );
  }
}

export const ContactContainer: any = ContactComponent;
export default ContactContainer;
