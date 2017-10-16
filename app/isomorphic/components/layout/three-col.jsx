const React = require("react");

const { StoryCard } = require("../basic/story-card.jsx")
const { StoryList } = require("../basic/story-list.jsx")
const { SectionName } = require("../basic/section-name.jsx");

function ThreeCol(props) {
  const secondColFirstCardConfig = {
    image: true,
    imageAspectRatio: [2,3]
  };
  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }
  return (
    <div className="three-col component-wrapper">
      <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large"/>
      <div>
        <div className="col-4">
          <StoryCard story={props.stories[0]} type="imageBackground" config={secondColFirstCardConfig}/>
        </div>
        <div className="col-4">
          <StoryCard story={props.stories[1]} config={secondColFirstCardConfig}/>
          <StoryCard story={props.stories[2]}/>
        </div>
        <div className="three-col__last">
          <StoryList
            stories={[props.stories[1], props.stories[2], props.stories[3], props.stories[4]]}>
          </StoryList>
        </div>
      </div>
    </div>
  )

}

exports.ThreeCol = ThreeCol;
