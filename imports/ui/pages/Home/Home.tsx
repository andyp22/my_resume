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
        <Container className="home-navigation" textAlign="center" role="navigation" aria-label="Home Page Links">
          <Card>
            <Card.Content>
              <Link to="/man" title="Man"><Image src="/images/man.png" alt="Man" size="small" /></Link>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Link to="/cookbook" title="Cookbook"><Image src="/images/cookbook.png" alt="Cookbook" size="small" /></Link>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Link to="/computer" title="Computer"><Image src="/images/computer.png" alt="Computer" size="small" /></Link>
            </Card.Content>
          </Card>
        </Container>
      </Container>
    );
  }
}

export const HomeContainer: any = HomeComponent;
export default HomeContainer;
