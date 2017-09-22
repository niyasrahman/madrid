const React = require("react");

function Tag(props) {
  return <a href={"/topic/"+props.tag.slug} className="story-tag">
          {props.tag.name}
         </a>
}

function StoryTags(props) {
  return <div>
          {props.tags.map((tag, index) => <Tag key={index} tag={tag}/>)}
        </div>
}

exports.StoryTags = StoryTags;
