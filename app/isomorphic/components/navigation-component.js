import React from "react";
import classNames from 'classnames';
import filter from "lodash/filter";
import indexOf from "lodash/indexOf";
import get from "lodash/get";
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
  const validStaticPages = state.qt.config['publisher-theme']['static_pages'];
  const updatedStaticLinks = filter(STATIC_LINKS, (link) => {
    return indexOf(validStaticPages, link.templateKey) > -1;
  });
  return {
    title: get(state.qt.config['publisher-settings'], ['title'], 'Madrid'),
    menu: get(state, ["qt", "data", "navigationMenu"], []),
    publisherTheme: state.qt.config['publisher-theme'] || {},
    publisherName: state.qt.config['publisher-name'],
    links: updatedStaticLinks,
    socialLinks: state.qt.config['social-links'],
    showOffcanvasMenu: state.offcanvasMenu
  };
}

export const NavigationComponent = connect(mapStateToProps, () => ({}))(NavigationBase);
