import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistroy from 'history/createBrowserHistory';
import { Container } from 'semantic-ui-react';
const pckgJson = require('../../../package.json');

import { HeaderContainer } from '../../ui/components/Header';
import { FooterContainer } from '../../ui/components/Footer';
import { NotFoundContainer } from '../../ui/pages/NotFound';
import { AdminContainer } from '../../ui/pages/Admin';
import { ComputerContainer } from '../../ui/pages/Computer';
import { ContactContainer } from '../../ui/pages/Contact';
import { CookbookContainer } from '../../ui/pages/Cookbook';
import { FAQContainer } from '../../ui/pages/FAQ';
import { HomeContainer } from '../../ui/pages/Home';
import { ManContainer } from '../../ui/pages/Man';
import { ProfileContainer } from '../../ui/pages/Profile';

const browserHistory = createBrowserHistroy();

export class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Container className="app-container">
          <HeaderContainer />
          <Container className="content-container" role="main">
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/man" component={ManContainer} />
              <Route exact path="/cookbook" component={CookbookContainer} />
              <Route exact path="/computer" component={ComputerContainer} />
              <Route exact path="/contact" component={ContactContainer} />
              <Route exact path="/faq" component={FAQContainer} />
              <Route exact path="/profile" component={ProfileContainer} />
              <Route exact path="/admin" component={AdminContainer} />
              <Route path="*" component={NotFoundContainer} />
            </Switch>
          </Container>
          <FooterContainer version={pckgJson.version} />
        </Container>
      </Router>
    );
  }
};

export default AppRoutes;
