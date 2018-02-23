import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";
import assetify from '@quintype/framework/assetify';
import { SideMenuItem, SubmenuItem } from './helper-components';
import CloseImg from '../../../assets/icons/close.svg';
import FacebookImg from '../../../assets/icons/social/facebook-rounded.svg';
import LinkedinImg from '../../../assets/icons/social/linkedin-rounded.svg';
import TwitterImg from '../../../assets/icons/social/twitter-rounded.svg';
import GoogleImg from '../../../assets/icons/social/google-rounded.svg';
import InstagramImg from '../../../assets/icons/social/instagram-rounded.svg';

class OffcanvasMenu extends React.Component {
  constructor(props) {
    super(props);
    this.closeMenu = this.closeMenu.bind(this);
  }
  componentWillReceiveProps(newProps) {
    this.props.OffcanvasMenu !== newProps.isOffcanvasOpen && this.setState({
      isOpen: newProps.isOffcanvasOpen
    })
  }
  closeMenu() {
    this.props.closeMenu();
  }
  render() {
    const linkContent = this.props.publisherTheme.logo ?
      <img className="app-logo__element" src={this.props.publisherTheme.logo} alt={this.props.title}/> : this.props.title;
    return <div>
      <div className={classNames('overlay', {'overlay--active': this.props.isOffcanvasOpen})} onClick={this.closeMenu}></div>
      <div className={classNames('sidebar', 'bg--white', {'open': this.props.isOffcanvasOpen})}>
        <nav className="sidebar__nav">
          <ul>
            <li className="sidebar__nav__logo" key={'nav-logo'}>
              <Link href="/" className="logo logo--blue">{linkContent}
              </Link>
              <div className="close menu-close" onClick={this.closeMenu}>
                <img src={assetify(CloseImg)} alt="Close Side Menu" />
              </div>
            </li>
            {this.props.menu.map((item, index)=> {
              if(item.children.length) {
                return (
                  <SideMenuItem item={item} key={item['id'] + index}/>
                )
              }
              return <li key={item['id'] + index} onClick={this.closeMenu}><SubmenuItem item={item}/></li>
            })}
          </ul>
          <ul className="sidebar__info qt-theme__color--border">
            {this.props.links.map((item, index) => {
                return <li key={index}>
                  <a href={item.url}>{item.content}</a>
                </li>
            })}
          </ul>
          {
            this.props.socialLinks && <ul className="sidebar__social">
              {this.props.socialLinks['facebook-url'] &&
                <li><a href={this.props.socialLinks['facebook-url']} target="_blank"><img src={assetify(FacebookImg)} alt="Facebook"/></a></li>
              }
              { this.props.socialLinks['google-plus-url'] &&
                <li><a href={this.props.socialLinks['google-plus-url']} target="_blank"><img src={assetify(GoogleImg)} alt="Google"/></a></li>
              }
              { this.props.socialLinks['twitter-url'] &&
                <li><a href={this.props.socialLinks['twitter-url']} target="_blank"><img src={assetify(TwitterImg)} alt="Twitter"/></a></li>
              }
              { this.props.socialLinks['linkedin-url'] &&
                <li><a href={this.props.socialLinks['linkedin-url']} target="_blank"><img src={assetify(LinkedinImg)} alt="Linkedin"/></a></li>
              }
              { this.props.socialLinks['instagram-url'] &&
                <li><a href={this.props.socialLinks['instagram-url']} target="_blank"><img src={assetify(InstagramImg)} alt="Google"/></a></li>
              }
            </ul>
          }
        </nav>
      </div>
    </div>
  }
}

export { OffcanvasMenu }
