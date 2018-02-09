import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";

function MenuItem(props) {
  const listStyle = {
    'borderColor': props.item.color
  }

  var mainMenuSlug = '#';
  switch (props.item['item-type']) {
    case 'section':
      mainMenuSlug = props.item['section-slug'] ?  '/' + props.item['section-slug'] : '#';
      break;
    case 'tag':
      mainMenuSlug = props.item['tag-name'] ? '/topic/' + props.item['tag-name'] :  '#';
      break;
    case 'link':
      mainMenuSlug = props.item.data.link ? props.item.data.link : '#';
      break;
    default:
      break;
  }

  return <li className="nav-item has--child">
    <Link href={ mainMenuSlug }>{props.item.title}</Link>
    <ul style={listStyle} className="qt-theme__color--border">
      {props.item.children.map((child, index)=> {
        return <SubmenuItem item={child} key={child['section-slug'] + child['id']}/>
      })}
    </ul>
  </li>
}

function SubmenuItem(props) {
  var childMenuSlug = '#';
  switch (props.item['item-type']) {
    case 'section':
      childMenuSlug = props.item['parent-slug'] ? '/' + props.item['parent-slug']  + '/' + props.item['section-slug'] :  '/' + props.item['section-slug'];
      break;
    case 'tag':
      childMenuSlug = props.item['tag-name'] ? '/topic/' + props.item['tag-name'] :  '#';
      break;
    case 'link':
      childMenuSlug = props.item.data.link ? props.item.data.link : '#';
      break;
    default:
      break;
  }

  return <li>
    <Link href={ childMenuSlug }>
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
