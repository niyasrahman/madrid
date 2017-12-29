import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";

import { AppLogo } from './app-logo.js'
import { MenuItem } from './helper-components.js'
import { Search } from "../basic/search.js";
import { Button } from "../basic/button.js";

function NavBar(props) {
  return <div className="header bg--white">
      <div className="header__container">
        <AppLogo {...props} />
        <div className="header__middle">
          <nav className="header__middle__nav">
            <ul>
              {props.menu.map((item, index)=> {
                if(item.children.length) {
                  return (
                    <MenuItem item={item} key={index}/>
                  )
                }
                return <li key={index} className="nav-item">
                  <Link href={ '/'+ item['section-slug']}>{item.title}</Link>
                </li>
              })}
            </ul>
          </nav>
        </div>
        <div className="header__last">
          <div className="header__last__button"><Button classNamesString="qt-button--primary">Sign in</Button></div>
          <Search />
        </div>
      </div>
    </div>
}

export { NavBar }
