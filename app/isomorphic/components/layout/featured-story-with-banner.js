import React from "react";
import { BannerFeaturedStoryList }  from "./banner-featured-story-list.js"
import _ from "lodash";

function FeaturedStoryWithBanner({ stories }) {  

  const chunkedStories = _.chunk(stories, 6);
  return(

  <div className='three-col-multiple-story container'>
      <div className='three-col-multiple-story__item'>
      <BannerFeaturedStoryList stories={chunkedStories[0]} />
     </div>
     <div className='three-col-multiple-story__item'>
      <BannerFeaturedStoryList stories={chunkedStories[1]}/>
     </div>
     <div className='three-col-multiple-story__item'>
      <BannerFeaturedStoryList stories={chunkedStories[2]}/>
     </div>
   </div>
  );
}

export { FeaturedStoryWithBanner };