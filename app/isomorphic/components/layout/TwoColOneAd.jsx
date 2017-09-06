const React = require("react");

const { StoryCard } = require("../basic/StoryCard.jsx")
const { StoryList } = require("../basic/StoryList.jsx")
const { NewsletterSub } = require("../basic/NewsletterSub.jsx")

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
