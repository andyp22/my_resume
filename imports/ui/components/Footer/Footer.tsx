require('./Footer.scss');

import * as React from 'react';
import { Container, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  version: string;
}
interface FooterState { }

export class FooterComponent extends React.Component<FooterProps, FooterState> {
  render() {
    return (
      <footer id="footer">
        <Container id="footer-links" className="navbar" role="navigation" aria-label="Informational links">
          <List className="nav navbar-nav">
            <List.Item><Link to="/contact">Contact</Link></List.Item>
            <List.Item><Link to="/faq">FAQ</Link></List.Item>
            <List.Item><Link to="http://andypangus.com" target="_blank">Blog</Link></List.Item>
          </List>
        </Container>
        <Container id="copyright-and-version" role="contentinfo" aria-label="Copyright and source version">
          <p>Copyright &#169; 2017 Andrew Page</p>
          <p>All rights reserved, including electronic reproduction.</p>
          <p id="version" aria-label="Source version">{this.props.version}</p>
        </Container>
      </footer>
    );
  }
}

export const FooterContainer: any = FooterComponent;
export default FooterContainer;
