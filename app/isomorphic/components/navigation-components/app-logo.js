import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";
import { connect } from 'react-redux';

function AppLogo(props) {
  const linkContent = props.publisherTheme.logo ?
    <img className="app-logo__element" src={props.publisherTheme.logo} alt={props.title}/> : props.title;
  return <div className="app-logo">
    <div className="app-logo__menu" onClick={props.openSidemenu}>
     <svg className="qt-theme__color--header-icon" width="100%" height="100%" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M-3-6h24v24H-3z"/><path d="M0 12h18v-2H0v2zm0-5h18V5H0v2zm0-7v2h18V0H0z" fill="currentColor"/></g></svg>
    </div>
    <div className="app-logo__wrapper">
      <Link href="/">{linkContent}</Link>
    </div>
  </div>
}

export { AppLogo };
