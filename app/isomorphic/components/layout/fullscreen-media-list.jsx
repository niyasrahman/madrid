const React = require("react");

const { MediaObject } = require("../basic/media-object-list.jsx")

function FullscreenMediaList(props) {
  const config = {
    section: true,
    enlarged: true,
    noBackground: true,
    storyTime: true,
    aspectRatio: [5,3]
  }
  const sectionColor = {
    borderBottomColor: props.config['collection-color']
  }
  return <div className="fullscreen-media-list">
    <div className="fullscreen-media-list__content component-wrapper">
      <div className="fullscreen-media-list__content__title">
        <h2 className="section--title section--recent--large section--title--large" style={sectionColor}>{props.config['collection-name']}</h2>
      </div>
      {props.stories.slice(0,5).map(storyObj =>
        <div className="col-9 fullscreen-media-list__object" key={storyObj.id}>
          <MediaObject story={storyObj.story} config={config}/>
        </div>
      )}
    </div>
  </div>
}

exports.FullscreenMediaList = FullscreenMediaList;
