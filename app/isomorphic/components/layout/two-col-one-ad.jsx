const React = require("react");

const { StoryCard } = require("../basic/story-card.jsx")
const { StoryList } = require("../basic/story-list.jsx")
const { NewsletterSub } = require("../basic/newsletter-sub.jsx")

function TwoColOneAd(props) {
  return (
    <div className="rango">
      <StoryCard story={props.stories[0]}></StoryCard>
      <StoryList stories={[props.stories[1], props.stories[2], props.stories[3]]}></StoryList>
      <NewsletterSub></NewsletterSub>
    </div>
  )

}

exports.TwoColOneAd = TwoColOneAd;
