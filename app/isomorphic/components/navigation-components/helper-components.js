import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";

function MenuItem(props) {
  const listStyle = {
    'borderColor': props.item.color
  }

  return <React.Fragment>
    <Link href={ props.item.completeUrl }>{props.item.title}</Link>
    <ul style={listStyle} className="qt-theme__color--border">
      {props.item.children.map((child, index)=> {
        return <li key={child['id'] + index}><SubmenuItem item={child}/></li>
      })}
    </ul>
  </React.Fragment>
}

function SubmenuItem(props) {
  return props.item.isExternalLink
      ? <a target="_blank" href={ props.item.completeUrl }>{ props.item.title }</a>
      : <Link href={ props.item.completeUrl }>{ props.item.title }</Link>
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
      <div>
        <SubmenuItem item={this.props.item} key={this.props.item['id']} hasArrow/>
        <span className="submenu-arrow"></span>
      </div>
      <ul className={classNames('submenu', {'submenu--show': this.state.openDownMenu})}>
        {this.props.item.children.map((child, index) => {
          return <li key={child['id']}><SubmenuItem item={child}/></li>
        })}
      </ul>
    </li>
  }
}

export { SideMenuItem, SubmenuItem, MenuItem }
