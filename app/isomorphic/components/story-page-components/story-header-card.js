import React from "react";
import { Link } from "@quintype/components";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { Author } from "../basic/author.js";
import { SocialShare } from "@quintype/components";
import fbIcon from '../../../assets/icons/social/fb-share.svg';
import twitterIcon from '../../../assets/icons/social/twitter-share.svg';
import linkedinIcon from '../../../assets/icons/social/linkedin-share.svg';
import gplusIcon from '../../../assets/icons/social/gplus-share.svg';
import whatsappIcon from '../../../assets/icons/social/whatsapp-share.svg';
import assetify from '@quintype/framework/assetify';

class StoryHeaderCard extends React.Component {

  getSocialCardsTemplate({fbUrl, twitterUrl, gplusUrl, linkedinUrl, whatsappUrl}) {
    return <ul className="social-share-icons">
      <li className="social-share-icon">
        <a href={fbUrl} target="_blank">
          <img src={assetify(fbIcon)} alt="fb icon"/>
        </a>
      </li>
      <li className="social-share-icon">
        <a href={twitterUrl} target="_blank">
          <img src={assetify(twitterIcon)} alt="twitter icon"/>
        </a>
      </li>
      <li className="social-share-icon">
        <a href={gplusUrl} target="_blank">
          <img src={assetify(gplusIcon)} alt="gplus icon"/>
        </a>
      </li>
      <li className="social-share-icon">
        <a href={linkedinUrl} target="_blank">
          <img src={assetify(linkedinIcon)} alt="linkedin icon"/>
        </a>
      </li>
      <li className="social-share-icon">
        <a href={whatsappUrl} target="_blank">
          <img src={assetify(whatsappIcon)} alt="whatsapp share"/>
        </a>
      </li>
    </ul>;
  }

  render() {
    const sectionColor = {
      borderBottomColor: this.props.story['section-color']
    };
    const liveDisplayStyles = {
      backgroundColor : this.props.story['section-color']
    }
    const tagsArray = this.props.story.tags.reduce((acc, item) => {
      acc.push(item.name)
      return acc;
    }, [])
    const stringifiedTagsArray = tagsArray.toString();
    const socialShareMessage = !isEmpty(this.props.story.summary) ? this.props.story.summary : this.props.story.headline;
    const authorsArray = get(this.props.story, ['authors'])
                          ? get(this.props.story, ['authors'])
                          : [{
                            name: this.props.story['author-name'],
                            id: this.props.story['author-id']
                          }];
    return <header className="story-header">
      <Link className="story-section"
        href={"/" +
          (this.props.story['parent-section'] ?
            this.props.story['parent-section'].slug + '/' + this.props.story.sections[0].slug :
            this.props.story.sections[0].slug)}
        style={sectionColor}>
        {this.props.story.sections[0]['display-name'] || this.props.story.sections[0]['name'] }
      </Link>
      <div>
        { (this.props.story['story-template'] === "live-blog") && <span className="live-story" style={liveDisplayStyles}>live</span> }
        <h1 className="story-headline" dangerouslySetInnerHTML={ {__html: this.props.story.headline }} />
      </div>
      <p className="story-summary" dangerouslySetInnerHTML={ {__html: this.props.story.subheadline }} />
      <div className="story-byline">
        <div className="story-byline__author_time">
        <Author authors={authorsArray} isLink showDateOnly date={this.props.story['first-published-at']}/>
        </div>
        <div className="story-byline__social-share">
          <SocialShare url={this.props.story.slug}
            title={socialShareMessage}
            template={this.getSocialCardsTemplate}
            hashtags={stringifiedTagsArray} />
        </div>
      </div>
    </header>
  }
}

export { StoryHeaderCard };
