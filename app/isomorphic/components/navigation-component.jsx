const React = require("react");
const classNames = require('classnames');

const SearchImg = require('../../assets/icons/search.svg');
const CloseImg = require('../../assets/icons/close.svg');
const FacebookImg = require('../../assets/icons/facebook.svg');
const LinkedinImg = require('../../assets/icons/linkedin.svg');
const TwitterImg = require('../../assets/icons/twitter.svg');
const GoogleImg = require('../../assets/icons/google.svg');


class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOffcanvasOpen: false
    }
    this.openSidemenu = this.openSidemenu.bind(this);
  }
  openSidemenu() {
    this.setState({
      isOffcanvasOpen: true
    })
  }
  render() {
    return <div className="navbar">
      <OffCanvasMenu {...this.props} isOffcanvasOpen={this.state.isOffcanvasOpen}/>
      <NavBar {...this.props} openSidemenu={this.openSidemenu}/>
    </div>
  }
}

function NavBar(props) {
  return <div className="header bg--white">
      <div className="header__container">
        <AppLogo {...props} />
        <div className="header__middle">
          <nav className="header__middle__nav">
            <ul>
              {props.menu.map((item, index)=> {
                if(item.children.length) {
                  return (
                    <MenuItem item={item} key={index}/>
                  )
                }
                return <li key={index} className="nav-item"><a href={item['section-slug']}>{item.title}</a></li>
              })}
            </ul>
          </nav>
        </div>
        <div className="header__last">
          <div className="header__last__button"><a href="#" className="button button--primary">Sign in</a></div>
          <div className="header__last__search"><img src={SearchImg} alt="" className="search--black" /></div>
        </div>
      </div>
    </div>
}

class OffCanvasMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOffcanvasOpen
    }
    this.closeMenu = this.closeMenu.bind(this);
  }
  componentWillReceiveProps(newProps) {
    this.props.OffCanvasMenu !== newProps.isOffcanvasOpen && this.setState({
      isOpen: newProps.isOffcanvasOpen
    })
  }
  closeMenu() {
    this.setState({
      isOpen: false
    })
  }
  render() {
    return <div>
      <div className={classNames('overlay', {'overlay--active': this.state.isOpen})} onClick={this.closeMenu}></div>
      <div className={classNames('sidebar', 'bg--white', {'open': this.state.isOpen})}>
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
              return <li key={index}><a href={item['section-slug']}>{item.title}</a></li>
            })}
          </ul>
          <ul className="sidebar__info">
            {this.props.links.map((item) => {
                return <li><a href={item.url}>{item.content}</a></li>
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

function AppLogo(props) {
  return <div className="header__first">
    <div className="header__first__menu" onClick={props.openSidemenu}>
      <span className="menu-open"></span>
    </div>
    <div className="header__first__logo">
      <a href="/">{props.title}</a>
    </div>
  </div>
}

function MenuItem(props) {
  const listStyle = {
    'borderColor': props.item.color
  }
  return <li className="nav-item has--child">
    <a href="#">{props.item.title}</a>
    <ul style={listStyle}>
      {props.item.children.map((child, index)=> {
        return <SubmenuItem item={child} key={child['section-slug']}/>
      })}
    </ul>
  </li>
}

function SubmenuItem(props) {
  return <li><a href={props.item['section-slug']}>{props.item.title}</a></li>
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
      <a href="#">{this.props.item.title}</a>
      <ul className={classNames('submenu', {'submenu--show': this.state.openDownMenu})}>
        {this.props.item.children.map((child, index) => {
          return <SubmenuItem item={child} key={child['section-slug']}/>
        })}
      </ul>
    </li>
  }
}

exports.NavigationComponent = NavigationComponent;
