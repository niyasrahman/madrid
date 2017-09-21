const React = require("react");

const { MediaObject } = require("../basic/media-object.jsx")

function FullscreenMediaList(props) {
  const config = {
    section: true,
    enlarged: true,
    noBackground: true,
    storyTime: true,
    aspectRatio: [5,3]
  }
  return <div className="recent__stories">
    <div className="recent__stories__content">
      <div className="recent__stories__content__title">
        <h2 className="section--title section--recent--large section--title--large">{props.config.collectionName}</h2>
      </div>
      {props.stories.slice(0,5).map(storyObj =>
        <div className="col-9 recent__stories__object" key={storyObj.id}>
          <MediaObject story={storyObj.story} config={config}/>
        </div>
      )}
    </div>
  </div>
}

exports.FullscreenMediaList = FullscreenMediaList;
