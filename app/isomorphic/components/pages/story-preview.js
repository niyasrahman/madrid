import React from "react";
import { StoryPageContent } from "./story.js";

class StoryPagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.collectStoryData();
  }

  collectStoryData() {
    global.addEventListener("message", (event) => {
      if (event.data.story) {
        this.setState({
          story: event.data.story,
          relatedStories: Array(4).fill(event.data.story),
          preview: true
        });
      }
    });
  }

  render() {
    if (!this.state.story) return <div></div>;
    return <StoryPageContent index={0} {...this.state}/>
  }
}

export { StoryPagePreview };
