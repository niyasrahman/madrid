const React = require("react");

const { StoryCard } = require("../basic/story-card.js")
const { StoryList } = require("../basic/story-list.js")
const { NewsletterSub } = require("../basic/newsletter-sub.js")

function TwoColOneAd(props) {
  const storyCardConfig = {
    section: true,
    subheadline: true,
    image: true
  }
  const storyListConfig = {
    section: true
  }
  return (
    <div className="two-col-one-ad component-wrapper">
      <div className="col-4">
        <StoryCard
          story={props.stories[0]}
          config={storyCardConfig}>
        </StoryCard>
      </div>
      <div className="col-4">
        <StoryList
          stories={[props.stories[1], props.stories[2], props.stories[3]]}
          config={storyListConfig}>
        </StoryList>
      </div>
      <div className="col-4">
        <NewsletterSub></NewsletterSub>
      </div>
    </div>
  )

}

exports.TwoColOneAd = TwoColOneAd;
