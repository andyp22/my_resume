import * as React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistroy from 'history/createBrowserHistory';
import { Link } from 'react-router-dom';

import { HeaderContainer } from '../../ui/components/Header';
import { FooterContainer } from '../../ui/components/Footer';

const browserHistory = createBrowserHistroy();

class AppContainer extends React.Component {
  render() {
    return (
      <h1>This is the home page</h1>
    );
  }
}

class ManContainer extends React.Component {
  render() {
    return (
      <h1>This is the man page</h1>
    );
  }
}

class CookbookContainer extends React.Component {
  render() {
    return (
      <h1>This is the cookbook page</h1>
    );
  }
}

class ComputerContainer extends React.Component {
  render() {
    return (
      <h1>This is the computer page</h1>
    );
  }
}

class ContactContainer extends React.Component {
  render() {
    return (
      <h1>This is the contact page</h1>
    );
  }
}

class FAQContainer extends React.Component {
  render() {
    return (
      <h1>This is the FAQ page</h1>
    );
  }
}

class UserProfileContainer extends React.Component {
  render() {
    return (
      <h1>This is the user profile page</h1>
    );
  }
}

class AdminContainer extends React.Component {
  render() {
    return (
      <h1>This is the admin page</h1>
    );
  }
}

export class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="app-container">
          <HeaderContainer />
          <div>
            <Route exact path="/" component={AppContainer} />
            <Route exact path="/man" component={ManContainer} />
            <Route exact path="/cookbook" component={CookbookContainer} />
            <Route exact path="/computer" component={ComputerContainer} />
            <Route exact path="/contact" component={ComputerContainer} />
            <Route exact path="/faq" component={ComputerContainer} />
            <Route exact path="/profile" component={ComputerContainer} />
            <Route exact path="/admin" component={ComputerContainer} />
          </div>
          <FooterContainer />
        </div>
      </Router>
    );
  }
};

export default AppRoutes;
