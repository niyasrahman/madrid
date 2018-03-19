import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";
import { AppLogo } from './app-logo.js'
import { MenuItem, SubmenuItem } from './helper-components.js'
import { Search } from "../basic/search.js";
import { FireIcon } from "../layout/icon/fire-icon.js";
import { Trending } from "../layout/trending.js";
import { Button } from "../basic/button.js";
import _ from "lodash";
import { connect } from 'react-redux';
import { Sticky } from '../basic/sticky'
function mapStateToProps(state) {
  return {
    config: state.qt.config || {},
  };
}

function NavBarBase(props) {

  return <Sticky className='header'>
  <div className="header-logo">
  <h1 className='logo'>QUIN<span className='logo-styling'>TYPE</span></h1>
  </div>

<nav className="nav-bar header__middle__nav">
  <ul className="menu">
    {_.take(props.menu, 9).map((item, index) => {
            return <li className="nav-item has--child dropdown-menu" key={`${item['id']}${index}`}>
                    <MenuItem item={item}/>
                  </li>
                })}
   <li className="nav-item has--child dropdown-menu last-list-item-styling">
        <a href="#"><FireIcon/>trending</a>
        <ul className="trending-wrapper">
          <li>
            <Trending trending = {props}/>
          </li>
        </ul>
  </li>
  <li className="nav-item has--child dropdown-menu last-list-item-styling">
    <Search/>
  </li>
 </ul>
</nav>
 </Sticky>
}

const NavBar = connect(mapStateToProps, {})(NavBarBase);

export { NavBar }







  
    { /* <div className="header qt-theme__color--headerbg qt-theme__color--header">
      <div className="header__container">
        <AppLogo {...props} />
        <div className="header__middle">
          <nav className="header__middle__nav">
            <ul>
              {_.take(props.menu, 6).map((item, index) => {
                if(item.children.length) {
                  return <li className="nav-item has--child" key={`${item['id']}${index}`}>
                    <MenuItem item={item}/>
                  </li>
                }
                return <li key={`${item['id']}${index}`}><SubmenuItem item={item}/></li>
              })}
            </ul>
          </nav>
        </div>
        <div className="header__last">
          <Search />
        </div>
      </div>
    </div> */}
 