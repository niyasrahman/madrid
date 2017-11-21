const React = require("react");

const { MediaObject } = require("../basic/media-object-list.jsx")
const { SectionName } = require("../basic/section-name.jsx");

const adImage = require('../../../assets/images/qt-ad.png');

function FullscreenMediaList(props) {
  const mediaObjectConfig = {
    section: !props.HideSectionName,
    enlarged: true,
    noBackground: true,
    storyTime: true,
    aspectRatio: [5,3]
  }

  const inlineStyle = {
    borderBottom: '4px solid ' + props.config['collection-color']
  }
  const limit = props.config.limit || 5;
  return <div className="fullscreen-media-list">
    <div className="fullscreen-media-list__content component-wrapper">
      {
        !props.HideSectionName ?
        <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large"/>
        : null
      }
      <div className="col-8">
      {props.stories.slice(0,limit)
        .map(storyObj => {
          const story = storyObj && storyObj.story ? storyObj.story : storyObj;
          return <div className="fullscreen-media-list__object" key={story.id}>
            <MediaObject story={story} config={mediaObjectConfig}/>
          </div>
        }
      )}
      </div>
      <div className="col-4">
        {
          props.adsSlot ?
          <div className="ads-375x245">
            <img src={adImage} alt="Ad"/>
          </div>
          : null
        }
      </div>
    </div>
  </div>
}

exports.FullscreenMediaList = FullscreenMediaList;
