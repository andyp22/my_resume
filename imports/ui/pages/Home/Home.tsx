require('./Home.scss');

import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';

interface HomeProps { }
interface HomeState { }

export class HomeComponent extends React.Component<HomeProps, HomeState> {
  render() {
    const props = this.props;
    return (
      <Container className="home-page page">
        <Header as="h1">This is the home page</Header>
      </Container>
    );
  }
}

export const HomeContainer: any = HomeComponent;
export default HomeContainer;
