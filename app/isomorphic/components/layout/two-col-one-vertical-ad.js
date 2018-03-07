import React from "react";
import { BigImageVerticalCard } from "./big-image-vertical-card.js";
import { MediaOneCard } from "./media-one.js";

function TwoColOneVerticalAd({stories}) {

  if(stories.length < 1) {
    return <div></div>
  }
    const columnOneStories = _.take(stories,6).map(story => <MediaOneCard key={story.id} story={story} showSectionName={true} showImage= {true}/>);
    const columnTwoStories = _.take(_.drop(stories,6),2).map(story => <BigImageVerticalCard key={story.id} story={story}/>);


  return(

  <div className='two-col-one-vertical-ad'>
    <div className='two-col-one-vertical-ad_item'>
      {columnOneStories}
    </div>
    <div className='two-col-one-vertical-ad_item'>
     {columnTwoStories}
    </div>
  </div>
  );
}

export { TwoColOneVerticalAd };
