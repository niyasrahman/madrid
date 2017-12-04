import { renderIsomorphicComponent, renderComponent, renderBreakingNews } from '@quintype/framework/client/start';
import { BreakingNewsView } from '../isomorphic/components/breaking-news-view';
import { pickComponent } from '../isomorphic/pick-component';
import { NavigationComponent } from '../isomorphic/components/navigation-component.js';
import { Footer } from '../isomorphic/components/layout/footer.js';

// This is a separate file as everything from here on is hot reloaded when the app changes
export function renderApplication(store) {
  renderComponent(NavigationComponent, 'navbar', store);
  renderBreakingNews('breaking-news-container', store, BreakingNewsView);
  renderIsomorphicComponent('container', store, pickComponent);
  renderComponent(Footer, 'footer', store);
}
