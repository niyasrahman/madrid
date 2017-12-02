const React = require("react");

const { ResponsiveImage } = require("@quintype/components");
const { StoryHeaderCard } = require("../story-page-components/story-header-card.jsx");
const { StoryPageCard } = require("../story-page-components/story-page-card.jsx");
const { LiveBlogKeyEvents } =  require("../story-page-components/live-blog-key-events.jsx");
const TimeAgo = require('react-timeago').default;

class LiveBlogTemplate extends React.Component {
  componentDidMount() {
    this.onPageScrollEvent();
  }
  onPageScrollEvent() {
    if(window.matchMedia("(min-width: 900px)").matches) {
      const windowScrollPos = window.pageYOffset;
      const keyEvents = document.getElementsByClassName('key-events');
      const keyEventsPos = keyEvents[0].offsetTop + 300;
      window.addEventListener('scroll', function(e){
        if(window.pageYOffset > keyEventsPos){
          keyEvents[0].classList.add("key-events__fixed");
        } else {
          keyEvents[0].classList.remove("key-events__fixed");
        }
      });
    }
  }
  render(){
  return <article className="live-blog-story blank-story">
      <figure className="live-blog-story-hero-image blank-story-hero-image qt-image-16x9">
        <ResponsiveImage slug={this.props.story["hero-image-s3-key"]} metadata={this.props.story["hero-image-metadata"]}
          aspectRatio={[16,9]}
          defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
          imgParams={{auto:['format', 'compress'], fit:'max'}}/>
      </figure>
      <div className="live-blog-story--wrapper blank-story--wrapper">
        <div className="live-blog-story--content blank-story--content">
          <StoryHeaderCard story={this.props.story}/>
          <LiveBlogKeyEvents story={ this.props.story } />
          {this.props.story.cards.map((card, index) => <div className="story-cards" id={card.id} key={index}>
            <TimeAgo date={card['card-added-at']}  className="card-added-at"/>
            <StoryPageCard key={index} card={card} story={this.props.story}/>
            <p className="card-updated-at">Last updated <TimeAgo date={card['card-updated-at']}/></p>
          </div>)}
        </div>
      </div>
    </article>
  }
}

class LiveBlogStory extends React.Component {
  render() {
    return <div className="story-grid">
      <LiveBlogTemplate {...this.props}></LiveBlogTemplate>
    </div>
  }
}

exports.LiveBlogStory = LiveBlogStory;
