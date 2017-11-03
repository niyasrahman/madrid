const React = require("react");

const { MediaObject } = require("../basic/media-object-list.jsx")
const { SectionName } = require("../basic/section-name.jsx");

function FullscreenMediaList(props) {
  const config = {
    section: !props.HideSectionName,
    enlarged: true,
    noBackground: true,
    storyTime: true,
    aspectRatio: [5,3]
  }

  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }
  return <div className="fullscreen-media-list">
    <div className="fullscreen-media-list__content component-wrapper">
      {
        !props.HideSectionName ? 
        <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large"/>
        : null
      }
      {props.stories.slice(0,5)
        .filter((item) => item.type === 'story')
        .map(storyObj =>
        <div className="col-9 fullscreen-media-list__object" key={storyObj.id}>
          <MediaObject story={storyObj.story} config={config}/>
        </div>
      )}
    </div>
  </div>
}

exports.FullscreenMediaList = FullscreenMediaList;
