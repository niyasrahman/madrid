import React from "react";
import { Link } from "@quintype/components";

function Tag(props) {
  return <Link href={"/topic/"+props.tag.slug} className="story-tag">
          {props.tag.name}
        </Link>
}

function StoryTags(props) {
  return <div>
          {props.tags.map((tag, index) => <Tag key={index} tag={tag}/>)}
        </div>
}

export { StoryTags };
