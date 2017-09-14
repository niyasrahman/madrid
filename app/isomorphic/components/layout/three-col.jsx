const React = require("react");

const { StoryCard } = require("../basic/story-card.jsx")
const { StoryList } = require("../basic/story-list.jsx")

function ThreeCol(props) {
  return (
    <div className="three-col">
      <div className="section__head__title">
        <h2 className="section--title--large section--three-col--large">Politics</h2>
      </div>
      <StoryCard story={props.stories[0].story} type="imageBackground"/>
      <div className="three-col__middle">
        <div className="section__card--image bg--shadow bg--white">
          <img src="{{assetPath('jenny.png')}}" alt=""/>
          <div className="section--content section--card--1">
            <h2>Jenny Lawson Is Publishing a New Book and It’s Sort of a Coloring Book</h2>
            <div className="author--title">
              Jonnathan Doe
            </div>
          </div>
        </div>
        <div className="three-col__middle__card bg--shadow bg--white">
          <div className="section--content section--card--1">
            <h2>Jenny Lawson Is Publishing a New Book and It’s Sort of a Coloring Book</h2>
            <div className="author--title">
              Jonnathan Doe
            </div>
          </div>
        </div>
      </div>
      <div className="three-col__last">
        <div className="card--no--bg">
          <h2>Sundar Pichai Launches ‘Digital Unlocked’ Programme </h2>
          <div className="author--title author--small">
            Alex Parkinson
          </div>
        </div>
        <div className="card--no--bg">
          <h2>Sundar Pichai Launches ‘Digital Unlocked’ Programme </h2>
          <div className="author--title author--small">
            Alex Parkinson
          </div>
        </div>
        <div className="card--no--bg">
          <h2>Sundar Pichai Launches ‘Digital Unlocked’ Programme </h2>
          <div className="author--title author--small">
            Alex Parkinson
          </div>
        </div>
        <div className="card--no--bg">
          <h2>Warning Letter For Ankleshwar Plant Sends Wockhardt Shares To Near 2.5-Year Low</h2>
          <div className="author--title author--small">
            Alex Parkinson
          </div>
        </div>
      </div>
    </div>
  )

}

exports.ThreeCol = ThreeCol;
