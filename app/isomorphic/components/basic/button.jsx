const React = require('react');

function Button({children, classNamesString, type}) {
  return <button className={`qt-button ${classNamesString}`} type={type || 'button'}>
    {children}
  </button>
}

exports.Button = Button;
