import React from "react";
import { StoryElement } from "@quintype/components";

import blockquoteImg from "../../../assets/icons/blockquote.svg";

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

export { BlockquoteElement };
