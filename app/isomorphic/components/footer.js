import React from 'react';
import {connect} from "react-redux";
import filter from "lodash/filter";
import get from "lodash/get";
import indexOf from "lodash/indexOf";
import assetify from '@quintype/framework/assetify';
import Logo from '../../assets/icons/quintype_logo.svg';
import { STATIC_LINKS } from "./constants";
import { FbIcon } from "./layout/social/facebook-icons.js";
import { TwitterIcon }  from "./layout/social/twitter-icon.js";
import { YoutubeIcon } from "./layout/social/youtube.js";
import { GooglePlus } from "./layout/social/google-plus.js";

function FooterBase(props) {
  const copyrightText = get(props.publisherSettings, ['copyright'], '');
console.log(props);
  return (
  <footer className="footer-part">
    <SocialLinks socialLinks={props.socialLinks}/>
    <FooterLinks/>
   </footer>
   );
}

function SocialLinks(props) {
return(
     <div className="social-links">
        <a href={props.socialLinks['facebook-url']}><FbIcon width={50} height={50}/></a>
        <a href={props.socialLinks['facebook-url']}><TwitterIcon width={50} height={50}/></a>
        <a href={props.socialLinks['facebook-url']}><YoutubeIcon width={50} height={50}/></a>
        <a href={props.socialLinks['google-plus-url']}><GooglePlus width={50} height={50}/></a>
      </div>

  );
}




function FooterLinks(props) {
return(
    <div className="footer-links">
    <div className="footer-links">
      <ul className="link-list">
          <li className="link-list__item"><a href="https://www.quintype.com/" target="_blank">About</a></li>
          <li className="link-list__item"><a href="https://www.quintype.com/" target="_blank">people</a></li>
          <li className="link-list__item"><a href="https://www.quintype.com/" target="_blank">jobs</a></li>
          <li className="link-list__item"><a href="https://www.quintype.com/" target="_blank">contact</a></li>
       </ul>
    </div>
    <div className="copyright">
      <a href="https://www.quintype.com/" target="_blank"><strong>&copy Powered by quintype</strong></a>
    </div>
    </div>

  );
}


function mapStateToProps(state) {
  const validStaticPages = state.qt.config['publisher-theme']['static_pages'];
  const updatedStaticLinks = filter(STATIC_LINKS, (link) => {
    return indexOf(validStaticPages, link.templateKey) > -1;
  });

  const socialLinks = state.qt.config['social-links'];
  return {
    links: updatedStaticLinks,
    socialLinks: socialLinks
  }
}


export { SocialLinks };
export { FooterLinks };
export const Footer = connect(mapStateToProps, () => ({}))(FooterBase);
