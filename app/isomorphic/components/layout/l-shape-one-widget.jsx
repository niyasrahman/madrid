const React = require("react");
const { Link } = require("@quintype/components");

const { StoryCard } = require("../basic/story-card.jsx")
const { NewsletterSub } = require("../basic/newsletter-sub.jsx")
const { SectionName } = require("../basic/section-name.jsx");

const ArrowImg = require('../../../assets/icons/readmore_arrow.svg');

function LShapeOneWidget(props) {
  const primarStoryCardConfig = {
    section: true,
    subheadline: true,
    image: true,
    imageAspectRatio: [4,3]
  }
  const storyListConfig = {
    image: true
  }
  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }
  return (
    <div className="l-shape-grid component-wrapper">
      <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large"/>
      <div className="col-8">
        <StoryCard story={props.stories[0]} config={primarStoryCardConfig} type="imageBackground"/>
      </div>
      <div className="l-shape-grid__last">
        <div data-polltype-embed-id='391'
          data-polltype-embed-width="100%"
          data-polltype-embed-height="480px">
          <script async src="//www.polltype.com/embed.js"></script>
        </div>
      </div>
      <div className="row">
        {props.stories.slice(1,4).map((story) => {
          return <div className="col-4" key={story.id}>
            <StoryCard config={storyListConfig}
              story={story}/>
          </div>
        })}
      </div>
      <Link href={'/' + props.config['collection-slug']} className="l-shape-grid__read-more">
        Read more
        <img src={ArrowImg} alt="Arrow"/>
      </Link>
    </div>
  )

}

exports.LShapeOneWidget = LShapeOneWidget;
