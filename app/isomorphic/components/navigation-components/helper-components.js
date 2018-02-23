import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";

function MenuItem(props) {
  const listStyle = {
    'borderColor': props.item.color
  }

  return <li className="nav-item has--child">
    <Link href={ props.item.completeUrl }>{props.item.title}</Link>
    <ul style={listStyle} className="qt-theme__color--border">
      {props.item.children.map((child, index)=> {
        return <SubmenuItem item={child} key={child['id']}/>
      })}
    </ul>
  </li>
}

function SubmenuItem(props) {
  return <li> {
    props.item.isExternalLink
      ? <a target="_blank" href={ props.item.completeUrl }>{ props.item.title }</a>
      : <Link href={ props.item.completeUrl }>{ props.item.title }</Link>
  }</li>

}

class SideMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDownMenu: false
    }
    this.toggleSideMenuParent = this.toggleSideMenuParent.bind(this);
  }
  toggleSideMenuParent() {
    this.setState(function(prevState, props){
      return {
        openDownMenu: !prevState.openDownMenu
      };
    })
  }
  render() {
    return <li className={classNames('has--submenu', {'open': this.state.openDownMenu})}
        onClick={this.toggleSideMenuParent}>
      <span>{this.props.item.title}</span>
      <ul className={classNames('submenu', {'submenu--show': this.state.openDownMenu})}>
        {this.props.item.children.map((child, index) => {
          return <SubmenuItem item={child} key={child['id']}/>
        })}
      </ul>
    </li>
  }
}

export { SideMenuItem, SubmenuItem, MenuItem }
