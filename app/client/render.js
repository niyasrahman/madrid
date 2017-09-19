import { renderIsomorphicComponent, history, navigateToPage, getRouteData } from 'quintype-toddy-libs/client/start';

import { pickComponent } from '../isomorphic/pick-component';

// This is a separate file as everything from here on is hot reloaded when the app changes
export function renderApplication(store) {
  renderIsomorphicComponent('container', store, pickComponent);
}
