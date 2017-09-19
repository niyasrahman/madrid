const React = require("react");

const { StoryCard } = require("../basic/story-card.jsx")
const { NewsletterSub } = require("../basic/newsletter-sub.jsx")

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
  return (
    <div className="grid">
      <div className="grid__title">
        <h2 className="section--title--large section--grid--large">Entertainment</h2>
      </div>
      <div className="col-8">
        <StoryCard story={props.stories[0]} config={primarStoryCardConfig} type="imageBackground"/>
      </div>
      <div className="grid__last">
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
    </div>
  )

}

exports.LShapeOneWidget = LShapeOneWidget;
