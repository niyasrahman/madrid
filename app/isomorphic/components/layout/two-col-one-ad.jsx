const React = require("react");

const { StoryCard } = require("../basic/story-card.jsx")
const { StoryList } = require("../basic/story-list.jsx")
const { NewsletterSub } = require("../basic/newsletter-sub.jsx")

function TwoColOneAd(props) {
  return (
    <div className="rango">
      <StoryCard story={props.stories[0].story}></StoryCard>
      <StoryList stories={[props.stories[1].story, props.stories[2].story, props.stories[3].story]}></StoryList>
      <NewsletterSub></NewsletterSub>
    </div>
  )

}

exports.TwoColOneAd = TwoColOneAd;
