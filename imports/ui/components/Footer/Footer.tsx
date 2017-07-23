require('./Footer.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

interface FooterProps { }
interface FooterState { }
 
export class FooterComponent extends React.Component<FooterProps, FooterState> {
  render() {
    const props = Object.assign({}, this.props, { version: '0.6.0' });
    return (
      <div id="footer" className="col-lg-11 col-md-9 col-sm-7 col-xs-3">
        <div className="row">
          <div
            id="footer-links"
            className="col-lg-3 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4 navbar"
          >
            <ul className="nav navbar-nav">
              <li><Link to="/">FAQ</Link></li>
              <li><a href="http://andypangus.com" target="_blank">Blog</a></li>
            </ul>
          </div>
          <div id="copyright" className="col-xs-12">
            Copyright &#169; 2017 Andrew Page<br />
            All rights reserved, including electronic reproduction.
          </div>
          <div id="version" className="col-xs-12">
            {props.version}
          </div>
        </div>
      </div>
    );
  }
}
/*
const mapStateToProps = (state: any) => {
  return {
    storeName: state.app.admin.storeName,
    showUAB: state.app.admin.isUABEnabled
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (data: any) => {
      dispatch(changeStore(data));
    }
  };
};

export const Footer: any = connect(mapStateToProps, mapDispatchToProps)(FooterView);
*/
export const FooterContainer: any = FooterComponent;