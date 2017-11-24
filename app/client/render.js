import { renderIsomorphicComponent, renderBreakingNews } from 'quintype-toddy-libs/client/start';
import { BreakingNewsView } from '../isomorphic/components/breaking-news-view';
import { pickComponent } from '../isomorphic/pick-component';

// This is a separate file as everything from here on is hot reloaded when the app changes
export function renderApplication(store) {
  renderIsomorphicComponent('container', store, pickComponent);
  renderBreakingNews('breaking-news-container', store, BreakingNewsView);
}
