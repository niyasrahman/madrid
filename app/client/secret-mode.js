import update from 'immutability-helper';
import ReactDom from 'react-dom';
import React from 'react';
import {connect, Provider} from 'react-redux';
import './secret-mode.module.css';
import {Theme} from '../isomorphic/components/theme'

export function startSecretMode(store) {
  console.log("Starting Secret Mode");

  global.disableAjaxNavigation = true;

  store.replaceReducer((state, action) => {
    if(action.type == 'SECRET_MODE')
      return update(state, action.update);
    else
      return state;
  });

  const secretMode = global.document.createElement("div");
  global.document.body.appendChild(secretMode);
  ReactDom.render(<Provider store={store}><SecretModeDialog /></Provider>, secretMode);

  const styleSecret = global.document.createElement("style");
  global.document.body.appendChild(styleSecret);
  ReactDom.render(<Provider store={store}><Theme /></Provider>, styleSecret);
}

function SecretModeDialogBase({publisherTheme, updatePublisherTheme}) {
  return <div styleName="secret-mode-container">
    Primary Color: <input type="text" value={publisherTheme['primary_color']} onChange={(e) => updatePublisherTheme('primary_color', e.target.value)}/>

    Header BG Color: <input type="text" value={publisherTheme['header_background_color']} onChange={(e) => updatePublisherTheme('header_background_color', e.target.value)}/>
  </div>;
}

const SecretModeDialog = connect(state => ({
  publisherTheme: state.qt.config["publisher-theme"]
}), dispatch => ({
  updatePublisherTheme: (field, value) => dispatch({type: "SECRET_MODE", update: {qt: {config: {"publisher-theme": {[field]: {$set: value}}}}}})
}))(SecretModeDialogBase)
