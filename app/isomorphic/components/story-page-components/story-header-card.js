import React from "react";

import { Author } from "../basic/author.js";
import { SocialShare } from "@quintype/components";
import fbIcon from '../../../assets/icons/social/fb-share.svg';
import twitterIcon from '../../../assets/icons/social/twitter-share.svg';
import linkedinIcon from '../../../assets/icons/social/linkedin-share.svg';
import gplusIcon from '../../../assets/icons/social/gplus-share.svg';

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

  getSocialCardsTemplate({fbUrl, twitterUrl, gplusUrl, linkedinUrl}) {
    return <ul className="social-share-icons">
        <li className="social-share-icon">
          <a href={fbUrl} target="_blank">
            <img src={fbIcon} alt="fb icon"/>
          </a>
        </li>
        <li className="social-share-icon">
          <a href={twitterUrl} target="_blank">
            <img src={twitterIcon} alt="twitter icon"/>
          </a>
        </li>
        <li className="social-share-icon">
          <a href={gplusUrl} target="_blank">
            <img src={gplusIcon} alt="gplus icon"/>
          </a>
        </li>
        <li className="social-share-icon">
          <a href={linkedinUrl} target="_blank">
            <img src={linkedinIcon} alt="linkedin icon"/>
          </a>
        </li>
      </ul>
  }

  render() {
    const sectionColor = {
      borderBottomColor: this.state.story['section-color']
    };
    const liveDisplayStyles = {
      backgroundColor : this.state.story['section-color']
    }
    const tagsArray = this.state.story.tags.reduce((acc, item) => {
      acc.push(item.name)
      return acc;
    }, [])
    const stringifiedTagsArray = tagsArray.toString();

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
              <div className="story-byline__author_time">
                <Author author={{
                    "name": this.state.story['author-name'],
                    "image": this.state.story['author-image'],
                    "date": this.state.story['first-published-at']}} />
              </div>
              <div className="story-byline__social-share">
                <SocialShare url={this.state.story.slug}
                  title={this.state.story.headline}
                  template={this.getSocialCardsTemplate}
                  hashtags={stringifiedTagsArray} />
              </div>
            </div>
          </header>
  }
}

export { StoryHeaderCard };
