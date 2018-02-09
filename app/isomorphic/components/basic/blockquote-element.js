import React from "react";
import { StoryElement } from "@quintype/components";

import blockquoteImg from "../../../assets/icons/blockquote.svg";

class BlockquoteElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="story-element-text-blockquote__wrapper">
      <svg className="qt-theme__color" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <path fill="currentColor" fillRule="nonzero" d="M8.12 16.609v3.039h7.038V36H0V16.608c0-6.17 1.646-10.752 4.892-13.62C7.138 1.007 9.98 0 13.34 0v8.76c-1.824 0-5.22 0-5.22 7.849zm26.062-7.85V0c-3.36 0-6.202 1.006-8.448 2.989-3.246 2.867-4.892 7.449-4.892 13.62V36H36V19.648h-7.038v-3.04c0-7.848 3.396-7.848 5.22-7.848z" opacity=".73"/>
      </svg>
      <StoryElement {...this.props}></StoryElement>
    </div>
  }
}

export { BlockquoteElement };
