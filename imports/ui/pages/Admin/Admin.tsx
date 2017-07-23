require('./Admin.scss');

import * as React from 'react';

interface AdminProps { }
interface AdminState { }

export class AdminComponent extends React.Component<AdminProps, AdminState> {
  render() {
    const props = this.props;
    return (
      <h1>This is the Admin page</h1>
    );
  }
}

export const AdminContainer: any = AdminComponent;
export default AdminContainer;
