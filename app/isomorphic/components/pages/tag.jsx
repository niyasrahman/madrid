const React = require("react");

const { FullscreenMediaList } = require("../layout/fullscreen-media-list.jsx");
const { NavigationComponent } = require("../navigation-component.jsx");
const { Footer } = require('../layout/footer.jsx')


class TagPage extends React.Component {

  render() {
    const staticLinks = [
      {
        content: 'About us',
        url: '/about'
      },
      {
        content: 'Privacy Policy',
        url: '/privacy'
      },
      {
        content: 'Terms & Conditions',
        url: '/terms'
      }
    ]

    // Showing the first 5 menu items only to keep up with design.
    const navbarConfig = {
      title: 'Madrid',
      menu: this.props.data.navigationMenu.splice(0,5),
      links: staticLinks
    };
    // TODO: Get these color values from a common config.
    const config = {
      'collection-name': `Results for ${this.props.data.tag}`,
      'collection-color': '#e32313',
      limit: 20
    }
    return <div>
      <NavigationComponent {...navbarConfig}/>
      {
        this.props.data.stories.length ?
        <FullscreenMediaList stories={this.props.data.stories} config={config} /> :
        <div className="component-wrapper">
          <p>No stories found for tag <strong>{this.props.data.tag}</strong>.</p>
        </div>
      }
      <Footer links={staticLinks}/>
    </div>;
  }
}

exports.TagPage = TagPage;
