import React from "react";
import _ from "lodash";
import { Link } from "@quintype/components";

import { Author } from "./author.js";
import { SectionName } from "./section-name.js";

function StoryList(props) {
  return !props.stories ? null :  <div className="story-list">
    {props.stories.map((storyObj, index) => {
        // The `props.story` can be an item from items of a collection or a story itself.
        // assigning it accordinlgy.
        const story = storyObj && storyObj.type === 'story' && storyObj.story ? storyObj.story : storyObj;
        return story && <StoryListItem story={story} key={index} config={props.config}></StoryListItem>
      }
    )}
  </div>
}

function StoryListItem({story, config}) {
  const inlineStyle = {
    borderBottom: 'solid 2px ' + story['section-color']
  }
  const author = {
    name: _.get(story['authors'][0], ['name'], story['author-name']),
  }
  return (
    <Link href={"/" + story.slug }>
      {
        config && config.section &&
        <SectionName inlineStyle={inlineStyle} name={story.sections[0]['display-name'] || story.sections[0]['name']}/>
      }
      <h2 className="story-list__heading" dangerouslySetInnerHTML={ {__html: story.headline }} />
      <Author author={author}/>
    </Link>
  )
}

export { StoryList };
export { StoryListItem };
