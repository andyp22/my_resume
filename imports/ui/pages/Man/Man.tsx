require('./Man.scss');

import * as React from 'react';

interface ManProps { }
interface ManState { }

export class ManComponent extends React.Component<ManProps, ManState> {
  render() {
    const props = this.props;
    return (
      <h1>This is the Man page</h1>
    );
  }
}

export const ManContainer: any = ManComponent;
export default ManContainer;
