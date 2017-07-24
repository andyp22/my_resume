require('./Man.scss');

import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';

interface ManProps { }
interface ManState { }

export class ManComponent extends React.Component<ManProps, ManState> {
  render() {
    const props = this.props;
    return (
      <Container className="man-page page">
        <Header as="h1">This is the man page</Header>
      </Container>
    );
  }
}

export const ManContainer: any = ManComponent;
export default ManContainer;
