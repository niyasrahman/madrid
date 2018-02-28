import React from 'react';
import {connect} from "react-redux";
import filter from "lodash/filter";
import get from "lodash/get";
import indexOf from "lodash/indexOf";
import assetify from '@quintype/framework/assetify';
import Logo from '../../assets/icons/quintype_logo.svg';
import { STATIC_LINKS } from "./constants";

function FooterBase(props) {
  const copyrightText = get(props.publisherSettings, ['copyright'], '');

  return <footer className="footer qt-theme__color--footerbg qt-theme__color--footer">
    <div className="footer__content">
      <div className="footer__content__first">
        <img className="app-logo__element" src={props.publisherTheme.monogram} alt={props.publisherName}/>
      </div>
      <div className="footer__content__last">
        <ul>
          {props.links.map((item, index) => {
            return <li key={index}><a href={item.url}>{item.content}</a></li>
          })}
        </ul>
        <div className="copy--right">
          <div>{copyrightText}</div>
          <a href="https://www.quintype.com/"><strong>Powered by quintype</strong></a>
        </div>
      </div>
    </div>
  </footer>
}

function mapStateToProps(state) {
  const validStaticPages = state.qt.config['publisher-theme']['static_pages'];
  const updatedStaticLinks = filter(STATIC_LINKS, (link) => {
    return indexOf(validStaticPages, link.templateKey) > -1;
  });
  return {
    links: updatedStaticLinks,
    publisherTheme: state.qt.config['publisher-theme'] || {},
    publisherSettings: state.qt.config['publisher-settings'] || {},
    publisherName: state.qt.config['publisher-name'] || ''
  }
}

export const Footer = connect(mapStateToProps, () => ({}))(FooterBase);
