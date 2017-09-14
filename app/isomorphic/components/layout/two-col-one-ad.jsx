const React = require("react");

const { StoryCard } = require("../basic/story-card.jsx")
const { StoryList } = require("../basic/story-list.jsx")
const { NewsletterSub } = require("../basic/newsletter-sub.jsx")

function TwoColOneAd(props) {
  var storyCardConfig = {
    section: true,
    subheadline: true
  }
  return (
    <div className="two-col-one-ad">
      <div className="col-4">
        <StoryCard story={props.stories[0].story} config={storyCardConfig}></StoryCard>
      </div>
      <div className="col-4">
        <StoryList stories={[props.stories[1].story, props.stories[2].story, props.stories[3].story]}></StoryList>
      </div>
      <div className="col-4">
        <NewsletterSub></NewsletterSub>
      </div>
    </div>
  )

}

exports.TwoColOneAd = TwoColOneAd;
