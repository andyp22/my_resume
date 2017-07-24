require('./Header.scss');

import * as React from 'react';
import { Container, List } from 'semantic-ui-react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Link } from 'react-router-dom';

interface HeaderProps { }
interface HeaderState { }

export class HeaderComponent extends React.Component<HeaderProps, HeaderState> {
  render() {
    const props = this.props;
    return (
      <header id="header">
        <Container id="title-and-logo" role="banner" aria-label="Site title and logo">
          <Link to="/" title="Man, Cookbook, Computer">
            <Container id="flame" className="animated fadeIn row">
              <div className="flame-container">
                <div className="red-flame flame" />
                <div className="orange-flame flame" />
                <div className="yellow-flame flame" />
                <div className="white-flame flame" />
                <div className="blue-flame circle-flame" />
                <div className="black-flame circle-flame" />
              </div>
            </Container>
            mancookbookcomputer.com
          </Link>
        </Container>
        <Container id="header-controls" role="navigation" aria-label="Sub-navigation links">
          <Container id="login-container">
            <LoginButtons />
          </Container>
          <Container id="subnav" className="navbar navbar-right">
            <List className="nav navbar-nav">
              <List.Item><Link to="/profile">My Profile</Link></List.Item>
              <List.Item><Link to="/contact">Contact</Link></List.Item>
            </List>
          </Container>
        </Container>
      </header>
    );
  }
}

export const HeaderContainer: any = HeaderComponent;
export default HeaderContainer;
