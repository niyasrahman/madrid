const React = require("react");

const { StoryCard } = require("./basic/story-card.jsx");

function StoryGrid(props) {
  const config = {
    section: true,
    subheadline: true,
    image: true,
    imageAspectRatio: [4,3]
  }
  return <div className="story-grid">
    {props.collection.map((item, index) => {
      return item.type === 'story' && <div className="col-4"><StoryCard config={config} story={item} key={index}></StoryCard></div>
      })
    }
  </div>;
}

exports.StoryGrid = StoryGrid;
