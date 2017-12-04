import React from 'react';

function Button({children, classNamesString, type}) {
  return <button className={`qt-button ${classNamesString}`} type={type || 'button'}>
    {children}
  </button>
}

export { Button };
