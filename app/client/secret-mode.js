import update from 'immutability-helper';
import ReactDom from 'react-dom';
import React from 'react';
import {connect, Provider} from 'react-redux';
import './secret-mode.module.css';
import {Theme} from '../isomorphic/components/theme'
import FileSaver from 'file-saver';

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
  ReactDom.render(<Provider store={store}><Theme /></Provider>, document.getElementById("theme-css"));
}

function SecretModeDialogBase({publisherTheme, updatePublisherTheme, onDownload}) {
  return <div styleName="container">
    <div styleName="set-value">
      <label for="set-primary-color">Primary Color </label>
      <input id="set-primary-color" type="color" value={publisherTheme['primary_color']} onChange={(e) => updatePublisherTheme('primary_color', e.target.value)} />
      {publisherTheme['primary_color']}
    </div>
    <div styleName="set-value">
      <label for="set-header-bg">Header Background Color </label>
      <input id="set-header-bg" type="color" value={publisherTheme['header_background_color']} onChange={(e) => updatePublisherTheme('header_background_color', e.target.value)} />
      {publisherTheme['header_background_color']}
    </div>
    <div styleName="set-value">
      <label for="set-header-text">Header Text Color </label>
      <input id="set-header-text" type="color" value={publisherTheme['header_text_color']} onChange={(e) => updatePublisherTheme('header_text_color', e.target.value)} />
      {publisherTheme['header_text_color']}
    </div>
    <div styleName="set-value">
      <label for="set-footer-bg">Footer Background Color </label>
      <input id="set-footer-bg" type="color" value={publisherTheme['footer_background_color']} onChange={(e) => updatePublisherTheme('footer_background_color', e.target.value)} />
      {publisherTheme['footer_background_color']}
    </div>
    <div styleName="set-value">
      <label for="set-footer-text">Footer Text Color </label>
      <input id="set-footer-text" type="color" value={publisherTheme['footer_text_color']} onChange={(e) => updatePublisherTheme('footer_text_color', e.target.value)} />
      {publisherTheme['footer_text_color']}
    </div>
    <div styleName="set-value">
      <label for="set-logo">Logo </label>
      <input id="set-logo" type="text" value={publisherTheme['logo']} onChange={(e) => updatePublisherTheme('logo', e.target.value)} placeholder="Enter the url for logo"/>
    </div>
    <div styleName="set-value">
      <label for="set-monogram">Monogram </label>
      <input id="set-monogram" type="text" value={publisherTheme['monogram']} onChange={(e) => updatePublisherTheme('monogram', e.target.value)} placeholder="Enter the url for monogram"/>
    </div>
    <input type="submit" value="Download Config" onClick={() => onDownload()} styleName="submit" />
  </div>;
}

const SecretModeDialog = connect(state => ({
  publisherTheme: state.qt.config["publisher-theme"],
  onDownload: function() {
    const blob = new Blob([JSON.stringify({
      "publisher-theme": state.qt.config["publisher-theme"]
    })], {type: "application/json;charset=utf-8"});
    FileSaver.saveAs(blob, "config.json");
  }
}), dispatch => ({
  updatePublisherTheme: (field, value) => dispatch({type: "SECRET_MODE", update: {qt: {config: {"publisher-theme": {[field]: {$set: value}}}}}})
}))(SecretModeDialogBase)
