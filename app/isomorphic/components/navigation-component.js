import React from "react";
import classNames from 'classnames';
import _ from "lodash"
import {connect} from "react-redux";

import { STATIC_LINKS } from "./constants"

import { OffcanvasMenu } from './navigation-components/offcanvas-menu'
import { NavBar } from './navigation-components/nav-bar'
import { DfpAd } from "./dfp-ads"

class NavigationBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOffcanvasOpen: false
    }
    this.openSidemenu = this.openSidemenu.bind(this);
    this.closeSideMenu = this.closeSideMenu.bind(this);
  }
  componentWillReceiveProps(newProps) {
    !newProps.showOffcanvasMenu && this.closeSideMenu();
  }
  openSidemenu() {
    this.setState({
      isOffcanvasOpen: true
    })
  }
  closeSideMenu() {
    this.setState({
      isOffcanvasOpen: false
    })
  }
  render() {
    return <div className="navbar">
      <div className="app-ad app-ad--leaderboard">
        <DfpAd adtype="Horizontal-Ad" layoutName="Navigation"/>
      </div>
      <OffcanvasMenu {...this.props} isOffcanvasOpen={this.state.isOffcanvasOpen} closeMenu={this.closeSideMenu}/>
      <NavBar {...this.props} openSidemenu={this.openSidemenu}/>
    </div>
  }
}

function mapStateToProps(state) {
  // Showing the first 5 menu items only to keep up with design.
  return {
    title: _.get(state.qt.config['publisher-settings'], ['title'], 'Madrid'),
    menu: _.get(state, ["qt", "data", "navigationMenu"], []),
    publisherTheme: state.qt.config['publisher-theme'] || {},
    publisherName: state.qt.config['publisher-name'],
    links: STATIC_LINKS,
    socialLinks: state.qt.config['social-links'],
    showOffcanvasMenu: state.offcanvasMenu
  };
}

export const NavigationComponent = connect(mapStateToProps, () => ({}))(NavigationBase);
