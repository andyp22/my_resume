require('./Contact.scss');

import * as React from 'react';

interface ContactProps { }
interface ContactState { }

export class ContactComponent extends React.Component<ContactProps, ContactState> {
  render() {
    const props = this.props;
    return (
      <h1>This is the Contact page</h1>
    );
  }
}

export const ContactContainer: any = ContactComponent;
export default ContactContainer;
