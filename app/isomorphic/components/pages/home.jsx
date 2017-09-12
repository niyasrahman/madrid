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
    console.log(this.props.data.homeCollection)
    return <div>
    </div>;
  }
}

exports.HomePage = HomePage;
