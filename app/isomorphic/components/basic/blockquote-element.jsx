const React = require("react");
const { StoryElement } = require("@quintype/framework/components/story-element");

const blockquoteImg = require("../../../assets/icons/blockquote.svg");

class BlockquoteElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="story-element-text-blockquote__wrapper">
      <img src={blockquoteImg} alt="&quot;"/>
      <StoryElement {...this.props}></StoryElement>
    </div>
  }
}

exports.BlockquoteElement = BlockquoteElement;
