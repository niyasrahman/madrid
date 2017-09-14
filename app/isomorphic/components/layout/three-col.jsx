const React = require("react");

const { StoryCard } = require("../basic/story-card.jsx")
const { StoryList } = require("../basic/story-list.jsx")

function ThreeCol(props) {
  const secondColFirstCardConfig = {
    image: true
  };
  return (
    <div className="three-col">
      <div className="section__head__title">
        <h2 className="section--title--large section--three-col--large">{props.collectionName}</h2>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[0].story} type="imageBackground"/>
      </div>
      <div className="col-4">
        <StoryCard story={props.stories[1].story} config={secondColFirstCardConfig}/>
        <StoryCard story={props.stories[2].story}/>
      </div>
      <div className="three-col__last">
        <StoryList
          stories={[props.stories[1].story, props.stories[2].story, props.stories[3].story, props.stories[4].story]}>
        </StoryList>
      </div>
    </div>
  )

}

exports.ThreeCol = ThreeCol;
