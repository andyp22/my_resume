require('./Profile.scss');

import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';

interface ProfileProps { }
interface ProfileState { }

export class ProfileComponent extends React.Component<ProfileProps, ProfileState> {
  render() {
    const props = this.props;
    return (
      <Container className="profile-page page">
        <Header as="h1">This is the profile page</Header>
      </Container>
    );
  }
}

export const ProfileContainer: any = ProfileComponent;
export default ProfileContainer;
