require('./Admin.scss');

import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';

interface AdminProps { }
interface AdminState { }

export class AdminComponent extends React.Component<AdminProps, AdminState> {
  render() {
    const props = this.props;
    return (
      <Container className="admin-page page">
        <Header as="h1">This is the Admin page</Header>
      </Container>
    );
  }
}

export const AdminContainer: any = AdminComponent;
export default AdminContainer;
