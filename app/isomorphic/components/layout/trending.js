import React from "react";
import get from 'lodash/get';
import { StoryCard } from "../basic/story-card.js"
import { Link, ResponsiveImage } from "@quintype/components";
import { TrendStoryCard } from "./trending-story.js";



function Trending(props) {
const children = (props.trending.trendingStories).map(story => <TrendStoryCard shreya={story} /> )


 
  return(
    <div className="trending-items">
   {children}
     </div>
  );
}
export { Trending };
