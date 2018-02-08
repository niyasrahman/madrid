import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";
import { connect } from 'react-redux';

function AppLogo(props) {
  const linkContent = props.publisherTheme.logo ?
    <img className="app-logo__element" src={props.publisherTheme.logo} alt={props.title}/> : props.title;
  return <div className="app-logo">
    <div className="app-logo__menu" onClick={props.openSidemenu}>
      <span className="menu-open"></span>
    </div>
    <div className="app-logo__wrapper">
      <Link href="/">{linkContent}</Link>
    </div>
  </div>
}

export { AppLogo };
