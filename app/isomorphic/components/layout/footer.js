const React = require('react');
const {connect} = require("react-redux");

const Logo = require('../../../assets/icons/quintype_logo.svg')

function FooterBase(props) {
  return <footer className="footer">
    <div className="footer__content">
      <div className="footer__content__first">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="footer__content__last">
        <ul>
          {props.links.map((item, index) => {
            return <li key={index}><a href={item.url}>{item.content}</a></li>
          })}
        </ul>
        <div className="copy--right">
          <div>copyright 2016</div>
          <strong>Powered by quintype</strong>
        </div>
      </div>
    </div>
  </footer>
}

function mapStateToProps(state) {
  return {
    links: [
      {
        content: 'About us',
        url: '/about'
      },
      {
        content: 'Privacy Policy',
        url: '/privacy'
      },
      {
        content: 'Terms & Conditions',
        url: '/terms'
      }
    ]
  }
}

exports.Footer = connect(mapStateToProps, () => ({}))(FooterBase);
