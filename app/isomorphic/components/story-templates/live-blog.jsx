const React = require("react");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");
const { StoryHeaderCard } = require("../story-page-components/story-header-card.jsx");
const { StoryPageCard } = require("../story-page-components/story-page-card.jsx");
const TimeAgo = require('react-timeago').default;

function LiveBlog(props) {
  return <div className="story-grid">
    <article className="live-blog-story">
      <figure className="live-blog-story-hero-image qt-image-16x9">
        <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
          aspectRatio={[16,9]}
          defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
          imgParams={{auto:['format', 'compress']}}/>
      </figure>
      <div className="live-blog-story--wrapper">
        <div className="live-blog-story--content">
          <StoryHeaderCard story={props.story}/>
          {props.story.cards.map((card, index) => <div className="story-cards">
            <TimeAgo date={card['card-added-at']}  className="card_added_at"/>
            <StoryPageCard key={index} card={card} story={props.story}/>
            <p>Last updated <TimeAgo date={card['card-updated-at']} className="card_updated_at"/></p>
          </div>)}
        </div>
      </div>
    </article>
  </div>
}

exports.LiveBlog = LiveBlog;
