import React from "react";
import _ from "lodash";

import { FullscreenMediaList } from "../layout/fullscreen-media-list.js";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: this.props.data.stories,
      totalNumberOfStories: this.props.data.total,
      offset: this.props.data.stories.length,
      query: this.props.data.query,
      limit: 5,
      hideLoadmore: this.props.data.stories.length >= this.props.data.total
    }
    this.getMoreResults = this.getMoreResults.bind(this);
  }
  getMoreResults() {
    fetch('/api/v1/search?q=' + this.state.query + '&offset=' + this.state.offset + '&limit=' + this.state.limit)
      .then(function(response) {
        return response.json();
      }).then(function({results}) {
        const updatedResults = _.concat(this.state.stories, results.stories);
        this.setState({
          stories: updatedResults,
          offset: this.state.offset + this.state.limit,
          hideLoadmore: updatedResults.length >= this.state.totalNumberOfStories
        });
      }.bind(this))
  }
  render() {
    // TODO: Get these color values from a common config.
    const config = {
      'collection-name': `Results for ${this.props.data.query}`,
      'collection-color': '#e32313',
      limit: 20
    }
    return <div>
      {
        this.state.stories.length ?
        <FullscreenMediaList stories={this.state.stories}
          config={config}
          hideLoadmore={this.state.hideLoadmore}
          getMoreStories={this.getMoreResults}/> :
        <div className="component-wrapper">
          <p>No stories found for tag <strong>{this.props.data.tag}</strong>.</p>
        </div>
      }
    </div>;
  }
}

export { SearchPage };
