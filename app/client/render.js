import { renderIsomorphicComponent, renderBreakingNews, renderComponent, history, navigateToPage, getRouteData } from 'quintype-toddy-libs/client/start';

import { pickComponent } from '../isomorphic/pick-component';
import { Navbar } from '../isomorphic/components/navbar';
import { BreakingNewsView } from '../isomorphic/components/breaking-news-view';

// This is a separate file as everything from here on is hot reloaded when the app changes
export function renderApplication(store) {
  const navbarConfig = {
    title: 'Madrid',
    menu: [
      'Business',
      'Politics',
      'Entertainment',
      'World'
    ]
  };

  // TODO: We need to move the navbar to quintype-toddy-libs.(?)
  renderComponent(Navbar, 'navbar', store, Object.assign({Navbar}, navbarConfig));

  renderIsomorphicComponent('container', store, pickComponent);
  // renderBreakingNews('breaking-news-container', store, BreakingNewsView);
}
