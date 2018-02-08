import React from 'react';
import {connect} from "react-redux";
import assetify from '@quintype/framework/assetify';
import Logo from '../../assets/icons/quintype_logo.svg';
import { STATIC_LINKS } from "./constants";

function FooterBase(props) {
  return <footer className="footer">
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
          <div>copyright 2018</div>
          <a href="https://www.quintype.com/"><strong>Powered by quintype</strong></a>
        </div>
      </div>
    </div>
  </footer>
}

function mapStateToProps(state) {
  return {
    links: STATIC_LINKS,
    publisherTheme: state.qt.config['publisher-theme'] || {},
    publisherName: state.qt.config['publisher-name'] || ''
  }
}

export const Footer = connect(mapStateToProps, () => ({}))(FooterBase);
