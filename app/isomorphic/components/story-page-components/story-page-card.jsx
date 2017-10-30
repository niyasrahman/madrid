const React = require("react");
const { SummaryElement} = require("../basic/summary-element.jsx");
const { BlockquoteElement} = require("../basic/blockquote-element.jsx");
const { StoryElement } = require("quintype-toddy-libs/components/story-element");

const StoryPageCard = props => {
  return <div>
    {props.card['story-elements'].map((element, index) => {
      switch (element.subtype) {
        case 'summary':
          return <div key={index}>
            <SummaryElement element={element} key={index} story={props.story}></SummaryElement>
          </div>
          break;
        case 'blockquote':
          return <div key={index}>
            <BlockquoteElement element={element} key={index} story={props.story}></BlockquoteElement>
          </div>
          break;
        default:
          return <StoryElement element={element} key={index} story={props.story}></StoryElement>
      }
    })}
  </div>
}

exports.StoryPageCard = StoryPageCard;
