require('./Header.scss');

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

interface HeaderProps { }
interface HeaderState { }

export class HeaderComponent extends React.Component<HeaderProps, HeaderState> {
  render() {
    const props = this.props;
    return (
      <div id="header" className="col-lg-11 col-md-9 col-sm-7 col-xs-3">
        <div id="login-container">Sign in</div>
        <div id="flame" className="animated fadeIn row">
          <div className="flame-container">
            <div className="red-flame flame" />
            <div className="orange-flame flame" />
            <div className="yellow-flame flame" />
            <div className="white-flame flame" />
            <div className="blue-flame circle-flame" />
            <div className="black-flame circle-flame" />
          </div>
        </div>
        <div id="subnav" className="navbar navbar-right">
          <ul className="nav navbar-nav">
            <li><Link to="/">My Profile</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
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

export const Header: any = connect(mapStateToProps, mapDispatchToProps)(HeaderView);
*/
export const HeaderContainer: any = HeaderComponent;
