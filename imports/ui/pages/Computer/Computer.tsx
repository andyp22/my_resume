require('./Computer.scss');

import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';

interface ComputerProps { }
interface ComputerState { }

export class ComputerComponent extends React.Component<ComputerProps, ComputerState> {
  render() {
    const props = this.props;
    return (
      <Container className="computer-page page">
        <Header as="h1">This is the computer page</Header>
      </Container>
    );
  }
}

export const ComputerContainer: any = ComputerComponent;
export default ComputerContainer;
