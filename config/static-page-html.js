
const StaticPageHTML = (publisherName) => {
  const _StaticPages = {
    'demo': {
      aboutUs: `<article class="static-container__wrapper"> <h1 class="static-container__headline">About us</h1> <p class="static-container__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p class="static-container__description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p class="static-container__description">Cctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p class="static-container__description">Qui officia deserunt mollit anim id est laborum.</p> </article>`,
      privacy: `<h1>Privacy</h1>`
    },
    'samachara': {
      aboutUS: ``,
      privacyPolicy: ``,
    },
  };

  return _StaticPages[publisherName] ? _StaticPages[publisherName] : _StaticPages['demo'];
};

module.exports = StaticPageHTML;