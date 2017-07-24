require('./FAQ.scss');

import * as React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

import FAQs from '../../data/faq';

interface FAQProps { }
interface FAQState { }

export class FAQComponent extends React.Component<FAQProps, FAQState> {
  render() {
    const props = this.props;
    return (
      <Container className="faq-page page">
        <Header as="h1">FAQs</Header>
        <List>
          {FAQs.map((faq, index) => {
            return (
              <List.Item key={index}>
                <List.Content>
                  <List.Header as='h2'>{faq.question}</List.Header>
                  <List.Description dangerouslySetInnerHTML={{__html: faq.answer}} />
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </Container>
    );
  }
}

export const FAQContainer: any = FAQComponent;
export default FAQContainer;
