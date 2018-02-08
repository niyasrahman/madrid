import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";
import { MetypeConfig } from "../../metype-config";
import { MetypeFeedWidget } from "@metype/components";
import { AppLogo } from './app-logo.js'
import { MenuItem } from './helper-components.js'
import { Search } from "../basic/search.js";
import { Button } from "../basic/button.js";
import _ from "lodash";
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    config: state.qt.config || {},
  };
}

function NavBarBase(props) {
  const metypeConfig = MetypeConfig(props.config['publisher-name']);
  return <div className="header bg--white">
      <div className="header__container">
        <AppLogo {...props} />
        <div className="header__middle">
          <nav className="header__middle__nav">
            <ul>
              {_.take(props.menu, 6).map((item, index) => {
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
          <Search />
        </div>
      </div>
      <MetypeFeedWidget
        host={metypeConfig.host}
        accountId={metypeConfig.accountId}
        publisher={props.config['publisher-name']}
      />
    </div>
}

const NavBar = connect(mapStateToProps, {})(NavBarBase);

export { NavBar }
