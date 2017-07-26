require('./Header.scss');

import * as React from 'react';
import { Container, List } from 'semantic-ui-react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  location: any;
}
interface HeaderState { }

export class HeaderComponent extends React.Component<HeaderProps, HeaderState> {
  render() {
    const props = this.props;
    return (
      <header id="header">
        <Container id="title-and-logo" role="banner" aria-label="Site title and logo">
          <Link className="logo-link" to="/" title="Man, Cookbook, Computer">
            <div id="flame" className="animated fadeIn row" aria-hidden="true">
              <div className="flame-container">
                <div className="red-flame flame" />
                <div className="orange-flame flame" />
                <div className="yellow-flame flame" />
                <div className="white-flame flame" />
                <div className="blue-flame circle-flame" />
                <div className="black-flame circle-flame" />
              </div>
            </div>
          </Link>
          <Link className="title-link" to="/" title="Man, Cookbook, Computer">mancookbookcomputer.com</Link>
        </Container>
        <Container id="header-controls">
          <div id="login-container">
            <LoginButtons />
          </div>
          <div id="helpful-links" role="navigation" aria-label="Helpful links">
            <List>
              <List.Item><Link to="/profile">My Profile</Link></List.Item>
              <List.Item><Link to="/contact">Contact</Link></List.Item>
            </List>
          </div>
          {(props.location !== '/'
            ? (
              <div id="main-links" role="navigation" aria-label="Main links">
                <List>
                  <List.Item><Link to="/man">Man</Link></List.Item>
                  <List.Item><Link to="/cookbook">Cookbook</Link></List.Item>
                  <List.Item><Link to="/computer">Computer</Link></List.Item>
                </List>
              </div>
            )
            : ""
          )}
        </Container>
      </header>
    );
  }
}

export const HeaderContainer: any = HeaderComponent;
export default HeaderContainer;
