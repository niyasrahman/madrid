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

function SecretModeDialogBase({themeAttributes, updateThemeAttributes, onDownload}) {
  return <div styleName="container">
    <div styleName="set-value">
      <label for="set-primary-color">Primary Color </label>
      <input id="set-primary-color" type="color" value={themeAttributes['primary_color']} onChange={(e) => updateThemeAttributes('primary_color', e.target.value)} />
      {themeAttributes['primary_color']}
    </div>
    <div styleName="set-value">
      <label for="set-header-bg">Header Background Color </label>
      <input id="set-header-bg" type="color" value={themeAttributes['header_background_color']} onChange={(e) => updateThemeAttributes('header_background_color', e.target.value)} />
      {themeAttributes['header_background_color']}
    </div>
    <div styleName="set-value">
      <label for="set-header-text">Header Text Color </label>
      <input id="set-header-text" type="color" value={themeAttributes['header_text_color']} onChange={(e) => updateThemeAttributes('header_text_color', e.target.value)} />
      {themeAttributes['header_text_color']}
    </div>
    <div styleName="set-value">
      <label for="set-footer-bg">Footer Background Color </label>
      <input id="set-footer-bg" type="color" value={themeAttributes['footer_background_color']} onChange={(e) => updateThemeAttributes('footer_background_color', e.target.value)} />
      {themeAttributes['footer_background_color']}
    </div>
    <div styleName="set-value">
      <label for="set-footer-text">Footer Text Color </label>
      <input id="set-footer-text" type="color" value={themeAttributes['footer_text_color']} onChange={(e) => updateThemeAttributes('footer_text_color', e.target.value)} />
      {themeAttributes['footer_text_color']}
    </div>
    <div styleName="set-value">
      <label for="set-logo">Logo </label>
      <input id="set-logo" type="text" value={themeAttributes['logo']} onChange={(e) => updateThemeAttributes('logo', e.target.value)} placeholder="Enter the url for logo"/>
    </div>
    <div styleName="set-value">
      <label for="set-monogram">Monogram </label>
      <input id="set-monogram" type="text" value={themeAttributes['monogram']} onChange={(e) => updateThemeAttributes('monogram', e.target.value)} placeholder="Enter the url for monogram"/>
    </div>
    <input type="submit" value="Download Config" onClick={() => onDownload()} styleName="submit" />
  </div>;
}

const SecretModeDialog = connect(state => ({
  themeAttributes: state.qt.config["theme-attributes"],
  onDownload: function() {
    const blob = new Blob([JSON.stringify(state.qt.config["theme-attributes"])], {type: "application/json;charset=utf-8"});
    FileSaver.saveAs(blob, "config.json");
  }
}), dispatch => ({
  updateThemeAttributes: (field, value) => dispatch({type: "SECRET_MODE", update: {qt: {config: {"theme-attributes": {[field]: {$set: value}}}}}})
}))(SecretModeDialogBase)
