import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";

import { SideMenuItem } from './helper-components'
import CloseImg from '../../../assets/icons/close.svg';
import FacebookImg from '../../../assets/icons/facebook.svg';
import LinkedinImg from '../../../assets/icons/linkedin.svg';
import TwitterImg from '../../../assets/icons/twitter.svg';
import GoogleImg from '../../../assets/icons/google.svg';

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
    return <div>
      <div className={classNames('overlay', {'overlay--active': this.props.isOffcanvasOpen})} onClick={this.closeMenu}></div>
      <div className={classNames('sidebar', 'bg--white', {'open': this.props.isOffcanvasOpen})}>
        <nav className="sidebar__nav">
          <ul>
            <li className="sidebar__nav__logo">
              <div className="logo logo--blue">{this.props.title}</div>
              <div className="close menu-close" onClick={this.closeMenu}><img src={CloseImg} alt="{CloseImg}"/></div>
            </li>
            {this.props.menu.map((item, index)=> {
              if(item.children.length) {
                return (
                  <SideMenuItem item={item} key={index}/>
                )
              }
              return <li key={index}>
                <Link href={ '/'+ item['section-slug']} onClick={this.closeMenu}>{item.title}</Link>
              </li>
            })}
          </ul>
          <ul className="sidebar__info">
            {this.props.links.map((item, index) => {
                return <li key={index}>
                  <a href={item.url}>{item.content}</a>
                </li>
            })}
          </ul>
          <ul className="sidebar__social">
            <li><a href="#"><img src={FacebookImg} alt="Facebook"/></a></li>
            <li><a href="#"><img src={LinkedinImg} alt="Linkedin"/></a></li>
            <li><a href="#"><img src={TwitterImg} alt="Twitter"/></a></li>
            <li><a href="#"><img src={GoogleImg} alt="Google"/></a></li>
          </ul>
        </nav>
      </div>
    </div>
  }
}

export { OffcanvasMenu }
