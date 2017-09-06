const React = require("react");

const { StoryGrid } = require("../story-grid.jsx");
const { TwoColOneAd } = require("../layout/TwoColOneAd.jsx");

class HomePage extends React.Component {

  

  render() {
    return <div>
      <TwoColOneAd stories={this.props.data.stories} />
    </div>;
  }
}

exports.HomePage = HomePage;
