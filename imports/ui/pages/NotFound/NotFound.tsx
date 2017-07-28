require('./NotFound.scss');

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Image } from 'semantic-ui-react';

interface NotFoundProps { }
interface NotFoundState { }

export class NotFoundComponent extends React.Component<NotFoundProps, NotFoundState> {
  render() {
    const props = this.props;
    return (
      <Container className="not-found-page page" textAlign="center">
        <div className="not-found-image">
          <Image src="/images/404.svg" alt="" />
        </div>
        <div className="not-found-title">
          <Header as="h1">Sorry, that page doesn't exist.</Header>
          <Link to="/" className="gotohomepage">Take me home</Link>
        </div>
      </Container>
    );
  }
}

export const NotFoundContainer: any = NotFoundComponent;
export default NotFoundContainer;
