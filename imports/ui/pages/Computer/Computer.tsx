require('./Computer.scss');

import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';

import TLQ from '../../data/story';

interface ComputerProps { }
interface ComputerState { }

export class ComputerComponent extends React.Component<ComputerProps, ComputerState> {
  render() {
    const props = this.props;
    return (
      <Container className="computer-page page">
        <Header as="h1">This is the computer page</Header>
        {TLQ.part1.map((step, index) => {
          return (
            <p className="story-step part1" key={index} dangerouslySetInnerHTML={{ __html: step.text }} />
          );
        })}
      </Container>
    );
  }
}

export const ComputerContainer: any = ComputerComponent;
export default ComputerContainer;
