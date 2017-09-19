const React = require("react");

function Navbar(props) {
  return <div className="navbar">
    <div className="overlay"></div>
    <div className="sidebar bg--white">
      <nav className="sidebar__nav">
        <ul>
          <li className="sidebar__nav__logo">
            <div className="logo logo--blue">{props.title}</div>
            <div className="close menu-close"><img src="{{assetPath('close.svg')}}" alt=""/></div>
          </li>
          {props.menu.map((item)=> <li><a href="">{item}</a></li> )}
          {/* <li className="has--submenu"><a href="#">Entertainment</a>
            <ul className="submenu">
              <li><a href="^_^">Movie Reviews</a></li>
              <li><a href="^_^">Bollywood</a></li>
              <li><a href="^_^">TV Series</a></li>
              <li><a href="^_^">Hollywood</a></li>
            </ul>
          </li> */}
        </ul>
        <ul className="sidebar__info">
          <li><a href="^_^">About Us</a></li>
          <li><a href="^_^">Terms & Conditions</a></li>
          <li><a href="^_^">Contact</a></li>
        </ul>
        <ul className="sidebar__social">
          <li><a href="^_^"><img src="{{assetPath('facebook.svg')}}" alt=""/></a></li>
          <li><a href="^_^"><img src="{{assetPath('linkedin.svg')}}" alt=""/></a></li>
          <li><a href="^_^"><img src="{{assetPath('twitter.svg')}}" alt=""/></a></li>
          <li><a href="^_^"><img src="{{assetPath('google.svg')}}" alt=""/></a></li>
        </ul>
      </nav>
    </div>
    <div className="header bg--white">
      <div className="header__container">
      <div className="header__first">
        <div className="header__first__menu">
          <span className="menu-open"></span>
        </div>
        <div className="header__first__logo">
          <a href="/">{props.title}</a>
        </div>
      </div>
      <div className="header__middle">
          <nav className="header__middle__nav">
            <ul>
              {props.menu.map((item)=> {
                  return (
                      <li><a href="">{item}</a></li>
                  )
              })}
            </ul>
          </nav>
      </div>
      <div className="header__last">
        <div className="header__last__button"><a href="^_^" className="button button--primary">Sign in</a></div>
        <div className="header__last__search"><img src="{{ assetPath('search.svg') }}" alt="" className="search--black" /></div>
      </div>
    </div>
    </div>
  </div>
}

exports.Navbar = Navbar;
