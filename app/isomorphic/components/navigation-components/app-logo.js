import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";

function AppLogo(props) {
  return <div className="header__first">
    <div className="header__first__menu" onClick={props.openSidemenu}>
      <span className="menu-open"></span>
    </div>
    <div className="header__first__logo">
      <Link href="/">{props.title}</Link>
    </div>
  </div>
}

export { AppLogo }
