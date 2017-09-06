import { renderIsomorphicComponent, renderBreakingNews, history, navigateToPage, getRouteData } from 'quintype-toddy-libs/client/start';

import { pickComponent } from '../isomorphic/pick-component';
import { BreakingNewsView } from '../isomorphic/components/breaking-news-view';

// This is a separate file as everything from here on is hot reloaded when the app changes
export function renderApplication(store) {

  renderIsomorphicComponent('container', store, pickComponent);
  // renderBreakingNews('breaking-news-container', store, BreakingNewsView);
}
