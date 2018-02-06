import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    publisherTheme: state.qt.config['publisher-theme'] || {},
  };
}

function AppLogoBase(props) {
  return <div className="header__first">
    <div className="header__first__menu" onClick={props.openSidemenu}>
      <span className="menu-open"></span>
    </div>
    <div className="header__first__logo">
      <Link href="/">{props.title}</Link>
    </div>
  </div>
}

const AppLogo = connect(mapStateToProps, {})(AppLogoBase);
export { AppLogo };
