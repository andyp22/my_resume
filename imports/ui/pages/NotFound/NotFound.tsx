require('./NotFound.scss');

import * as React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundProps { }
interface NotFoundState { }

export class NotFoundComponent extends React.Component<NotFoundProps, NotFoundState> {
  render() {
    const props = this.props;
    return (
      <div id="not-found">
        <div className="not-found-image">
          <img src="/img/404.svg" alt="" />
        </div>
        <div className="not-found-title">
          <h1>Sorry, that page doesn't exist</h1>
          <Link to="/" className="gotohomepage">Go to home</Link>
        </div>
      </div>
    );
  }
}

export const NotFoundContainer: any = NotFoundComponent;
export default NotFoundContainer;
