import React from "react";
import classNames from 'classnames';
import _ from "lodash"
import {connect} from "react-redux";

import { STATIC_LINKS } from "./constants"

import { OffcanvasMenu } from './navigation-components/offcanvas-menu'
import { NavBar } from './navigation-components/nav-bar'

class NavigationBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOffcanvasOpen: false
    }
    this.openSidemenu = this.openSidemenu.bind(this);
  }
  openSidemenu() {
    this.setState({
      isOffcanvasOpen: true
    })
  }
  render() {
    return <div className="navbar">
      <OffcanvasMenu {...this.props} isOffcanvasOpen={this.state.isOffcanvasOpen}/>
      <NavBar {...this.props} openSidemenu={this.openSidemenu}/>
    </div>
  }
}

function mapStateToProps(state) {

  // Showing the first 5 menu items only to keep up with design.
  return {
    title: 'Madrid',
    menu: _.get(state, ["qt", "data", "navigationMenu"], []),
    links: STATIC_LINKS
  };
}

export const NavigationComponent = connect(mapStateToProps, () => ({}))(NavigationBase);
