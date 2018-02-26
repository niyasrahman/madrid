import React from "react";
import { HomePage } from "./home.js";

function randomStoryProperties(story) {
  const storyId = Math.random();
  return Object.assign({}, story, {id: storyId, "story-content-id": storyId, 'section-color': '#ccc'})
}

function updateHomeCollections(orderedCollectionBulk, story) {
  return orderedCollectionBulk.map(value => Object.assign({}, value, {items: Array(value.items.length).fill(story).map(randomStoryProperties)}))
}

class HomePagePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      data: props.data,
      preview: true
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
          data: Object.assign({}, this.props.data, {orderedCollectionBulk: updateHomeCollections(this.props.data.orderedCollectionBulk, event.data.story)})
        })
      }
    });
  }

  render() {
    if(!this.state.started) return <div/>;
    return <HomePage data={this.state.data} preview={true}/>
  }
}

export { HomePagePreview };
