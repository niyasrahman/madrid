import css from '../../app/assets/stylesheets/application.scss';

import { renderApplication } from './render'
import { startApp } from '@quintype/framework/client/start'

function enableHotReload(store) {
  if(process.env.NODE_ENV == 'development' && module.hot) {
    module.hot.accept('./render', () => renderApplication(store));
  }
}

function offcanvasMenuReducer(state = false, action) {
  switch (action.type) {
    case "OPEN_OFFCANVAS_MENU": return true;
    case "CLOSE_OFFCANVAS_MENU": return false;
    case "QT_NAVIGATE": return false;
    default: return state;
  }
}

const CUSTOM_REDUCERS = {
  offcanvasMenu: offcanvasMenuReducer
};

require('whatwg-fetch');
global.superagent = require('superagent-promise')(require('superagent'), Promise);
startApp(renderApplication, CUSTOM_REDUCERS, {
  enableServiceWorker: process.env.NODE_ENV == 'production'
}).then(enableHotReload);
