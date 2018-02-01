import React from "react";
import { HomePage } from "./home.js";

function randomStoryId(story) {
  const storyId = Math.random();
  return Object.assign({}, story, {id: storyId, "story-content-id": storyId})
}

function updateHomeCollections(homeCollections, story) {
  return homeCollections.map(value => Object.assign({}, value, {items: Array(value.items.length).fill(story).map(randomStoryId)}))
}

class HomePagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      data: props.data
    };
  }

  componentDidMount() {
    this.collectStoryData();
  }

  collectStoryData() {
    global.addEventListener("message", (event) => {
      if (event.data.story) {
        this.setState({
          started: true,
          data: Object.assign({}, this.props.data, {homeCollections: updateHomeCollections(this.props.data.homeCollections, event.data.story)})
        })
      }
    });
  }

  render() {
    if(!this.state.started) return <div/>;
    return <HomePage data={this.state.data}/>
  }
}

export { HomePagePreview };
