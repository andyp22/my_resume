require('./Home.scss');

import * as React from 'react';
import { Container, Header, Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface HomeProps { }
interface HomeState { }

export class HomeComponent extends React.Component<HomeProps, HomeState> {
  render() {
    const props = this.props;
    return (
      <Container className="home-page page">
        <Container className="home-navigation" role="navigation" aria-label="Home Page Links">
          <Card>
            <Card.Content>
              <Link to="/man"><Image src="/images/man.png" alt="Man" /></Link>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Link to="/cookbook"><Image src="/images/cookbook.png" alt="Cookbook" /></Link>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Link to="/computer"><Image src="/images/computer.png" alt="Computer" /></Link>
            </Card.Content>
          </Card>
        </Container>
      </Container>
    );
  }
}

export const HomeContainer: any = HomeComponent;
export default HomeContainer;
