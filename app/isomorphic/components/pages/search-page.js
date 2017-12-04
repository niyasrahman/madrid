import React from "react";

import { FullscreenMediaList } from "../layout/fullscreen-media-list.js";

class SearchPage extends React.Component {

  render() {
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
    </div>;
  }
}

export { SearchPage };
