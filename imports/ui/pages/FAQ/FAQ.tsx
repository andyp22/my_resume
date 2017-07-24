require('./FAQ.scss');

import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';

interface FAQProps { }
interface FAQState { }

export class FAQComponent extends React.Component<FAQProps, FAQState> {
  render() {
    const props = this.props;
    return (
      <Container className="faq-page page">
        <Header as="h1">This is the FAQ page</Header>
      </Container>
    );
  }
}

export const FAQContainer: any = FAQComponent;
export default FAQContainer;
