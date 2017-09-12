const React = require("react");

const { StoryGrid } = require("../story-grid.jsx");
const { TwoColOneAd } = require("../layout/two-col-one-ad.jsx");


const templates = {
  'wh-block-featured': TwoColOneAd
}

function getTemplate(designTemplate){
  return templates[designTemplate];
}


class HomePage extends React.Component {

  render() {
    return <div>
      {this.props.data.homeCollections.map((collection) =>
        <TwoColOneAd stories={collection.items} key={collection.id}/>
      )}
    </div>;
  }
}

exports.HomePage = HomePage;
