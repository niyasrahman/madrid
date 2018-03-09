import React from "react";
import { VerticalCardWithBanner } from "./vertical-card-with-banner.js";
import { MediaOneCard } from "./media-one.js";
import _ from "lodash";

function BannerFeaturedStoryList({ stories }) {

  const columnOneStoryOne = _.take(stories,1).map(story => <VerticalCardWithBanner key={story.id} story={story} authorName= {false}/>);
  const columnOneStories = _.take(_.drop(stories, 1),4).map(story => <MediaOneCard key={story.id} story={story} showSectionName={false} showImage= {false}/>);
  

  return(

  <React.Fragment>
     {columnOneStoryOne }
     {columnOneStories}    
  </React.Fragment>
  );
}

export { BannerFeaturedStoryList };