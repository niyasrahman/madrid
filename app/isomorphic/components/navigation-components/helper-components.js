import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";

function MenuItem(props) {
  const listStyle = {
    'borderColor': props.item.color
  }
  return <li className="nav-item has--child">
    <span>{props.item.title}</span>
    <ul style={listStyle}>
      {props.item.children.map((child, index)=> {
        return <SubmenuItem item={child} key={child['section-slug'] + child['id']}/>
      })}
    </ul>
  </li>
}

function SubmenuItem(props) {
  return <li>
    <Link href={ props.item['parent-slug'] ? '/' + props.item['parent-slug']  + '/' + props.item['section-slug'] :  '/' + props.item['section-slug'] }>
      {props.item.title}
    </Link>
  </li>
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
          return <SubmenuItem item={child} key={child['section-slug'] + child['id'] }/>
        })}
      </ul>
    </li>
  }
}

export { SideMenuItem, SubmenuItem, MenuItem }
