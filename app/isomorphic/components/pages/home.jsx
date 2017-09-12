const React = require("react");

const { StoryGrid } = require("../story-grid.jsx");
const { TwoColOneAd } = require("../layout/two-col-one-ad.jsx");

class HomePage extends React.Component {


  render() {
    return <div>
      {this.props.data.collections.map((collection) =>
        <TwoColOneAd collection={collection} key={collection.id}/>
      )}
    </div>;
  }
}

exports.HomePage = HomePage;
