import { renderIsomorphicComponent, renderComponent, renderBreakingNews } from '@quintype/framework/client/start';
import { BreakingNewsView } from '../isomorphic/components/breaking-news-view';
import { pickComponent } from '../isomorphic/pick-component';
import { NavigationComponent } from '../isomorphic/components/navigation-component.js';
import { Metype } from "../isomorphic/components/metype.js";
import { Footer } from '../isomorphic/components/footer.js';
import { LoadingIndicatorComponent } from "../isomorphic/components/basic/loading-indicator.js";

// This is a separate file as everything from here on is hot reloaded when the app changes
export function renderApplication(store) {
  if(global.location.hash == "#secret-mode") {
    import(/* webpackChunkName: "secret-mode" */ './secret-mode').then(({startSecretMode}) => startSecretMode(store));
  }

  renderComponent(Metype, 'meType', store);
  renderComponent(NavigationComponent, 'navbar', store);
  renderBreakingNews('breaking-news-container', store, BreakingNewsView);
  renderIsomorphicComponent('container', store, pickComponent);
  renderComponent(Footer, 'footer', store);
  renderComponent(LoadingIndicatorComponent, 'loading-indicator', store);
}
