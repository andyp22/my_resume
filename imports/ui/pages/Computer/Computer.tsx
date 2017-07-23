require('./Computer.scss');

import * as React from 'react';

interface ComputerProps { }
interface ComputerState { }

export class ComputerComponent extends React.Component<ComputerProps, ComputerState> {
  render() {
    const props = this.props;
    return (
      <h1>This is the Computer page</h1>
    );
  }
}

export const ComputerContainer: any = ComputerComponent;
export default ComputerContainer;
