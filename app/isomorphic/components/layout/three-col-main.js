import React from "react";

import { BigImageVerticalCard } from "./big-image-vertical-card.js";
import { VerticalCard } from "./vertical-card.js";   
import { MediaOneCard } from "./media-one.js";
import _ from "lodash";

function ThreeColMain({stories}) {

  if(stories.length < 1) {
    return <div></div>
  }

  const columnOneStories = _.take(_.drop(stories,1),2).map(story => <MediaOneCard key={story.id} story={story} showSectionName={true} showImage= {true}/>
);
  const columnTwoStories = _.take(_.drop(stories, 3), 3).map(story => <VerticalCard key={story.id} story={story} />); 
  const columnThreeStories = _.take(_.drop(stories, 6),6).map(story => <MediaOneCard key={story.id} story={story} showSectionName={true} showImage= {true}/>
);

  return(

  <div className='three-col-main container'>
      <div className='three-col-main__item'>
        <BigImageVerticalCard story={_.first(stories)}/>
        {columnOneStories}
      </div>
       <div className='three-col-main__item'>
        {columnTwoStories}
       </div>
       <div className='three-col-main__item'>
        {columnThreeStories}
      </div>
  </div>
  );
}







export { ThreeColMain };
