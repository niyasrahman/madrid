import React from "react";

import { Author } from "../basic/author.js";


class StoryHeaderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    const currentStory = this.state.story;
    fetch('/api/v1/authors/' + this.state.story['author-id'])
      .then(function(response) {
        return response.json();
      }).then(function(authorDetails) {
        currentStory['author-image'] = authorDetails.author['avatar-url'];
        this.setState({
          story: currentStory
        });
      }.bind(this))
  }

  render() {
    const sectionColor = {
      borderBottomColor: this.state.story['section-color']
    };
    const liveDisplayStyles = {
      backgroundColor : this.state.story['section-color']
    }
    return <header className="story-header">
            <a className="story-section" href={"/" + this.state.story.sections[0]['slug']} style={sectionColor}>
              {this.state.story.sections[0]['display-name'].length > 0 && this.state.story.sections[0]['display-name'] }
            </a>
            <div>
              { (this.state.story['story-template'] === "live-blog") && <span className="live-story" style={liveDisplayStyles}>live</span> }
              <h3 className="story-headline" dangerouslySetInnerHTML={ {__html: this.state.story.headline }} />
            </div>
            <p className="story-summary">{this.state.story.subheadline}</p>
            <div className="story-byline">
              <div className="story-byline_author_time">
                <Author author={{
                    "name": this.state.story['author-name'],
                    "image": this.state.story['author-image'],
                    "date": this.state.story['first-published-at']}} />
              </div>
            </div>
             {/* <ShareStory /> */}
          </header>
  }
}

export { StoryHeaderCard };
