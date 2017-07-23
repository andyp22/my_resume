require('./Profile.scss');

import * as React from 'react';

interface ProfileProps { }
interface ProfileState { }

export class ProfileComponent extends React.Component<ProfileProps, ProfileState> {
  render() {
    const props = this.props;
    return (
      <h1>This is the Profile page</h1>
    );
  }
}

export const ProfileContainer: any = ProfileComponent;
export default ProfileContainer;
