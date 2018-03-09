import React from "react";

import { SmallImageHorizontalCard } from "./small-image-horizontal-card.js";
import { BigImageVerticalCard } from "./big-image-vertical-card.js";
import { MediaOneCard } from "./media-one.js";
import _ from "lodash";


function ThreeColMovie({stories}) {

  if(stories.length < 1) {
    return <div></div>
  }
    const columnOneStories = _.take(_.drop(stories, 1),2).map(story => <MediaOneCard key={story.id} story={story} showSectionName={true} showImage= {true}/>);
    const columnTwoStories = _.take(_.drop(stories, 3),10).map(story => <MediaOneCard key={story.id} story={story} showSectionName={false} showImage= {false}/>);

  return(
    <div className='three-col container'>
    <div className='section-title'>movie</div>
    <div className="three-col-movie">
        <div className="three-col-movie_items">
             <BigImageVerticalCard story={_.first(stories)}/> 
              <span className='Media-one-horizontal-card'>
              {columnOneStories}
              </span>
        </div>
         <div className="three-col-movie__item">
           {columnTwoStories}
         </div>
         <div className="three-col-movie__item">
         </div>
     </div>
     </div>


    );
}
export { ThreeColMovie };
