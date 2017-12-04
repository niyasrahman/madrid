import css from '../../app/assets/stylesheets/application.scss';

import { createQtStore } from '@quintype/framework/store/create-store';
import { history, getRouteData, app } from '@quintype/framework/client/start';
import { NAVIGATE_TO_PAGE } from '@quintype/components/store/actions';
import { renderApplication } from './render'

require('whatwg-fetch');
global.Promise = global.Promise || require("bluebird");
global.superagent = require('superagent-promise')(require('superagent'), Promise);
global.app = app;

// This is the entry point. Ideally, unused functions will get compiled out
function startApp() {
  const location = global.location;
  getRouteData(`${location.pathname}${location.search || ""}`, {config: true})
    .then((result) => {
      const store = createQtStore(null, result.body);

      renderApplication(store);
      history.listen(change => app.maybeNavigateTo(`${change.pathname}${change.search || ""}`, store));

      if(process.env.NODE_ENV == 'development' && module.hot) {
        module.hot.accept('./render', () => renderApplication(store));
      }
    });
}

startApp();

if(process.env.NODE_ENV == 'production' && global.navigator.serviceWorker) {
    global.navigator.serviceWorker.register("/service-worker.js");
}
