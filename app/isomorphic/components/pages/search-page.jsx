const React = require("react");

const { FullscreenMediaList } = require("../layout/fullscreen-media-list.jsx");
const { Footer } = require('../layout/footer.jsx')


class SearchPage extends React.Component {

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
    // TODO: Get these color values from a common config.
    const config = {
      'collection-name': `Results for ${this.props.data.query}`,
      'collection-color': '#e32313',
      limit: 20
    }
    return <div>
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

exports.SearchPage = SearchPage;
