import React from "react";

import { SmallImageHorizontalCard } from "./small-image-horizontal-card.js";
import { BigImageVerticalCard } from "./big-image-vertical-card.js";
import { MediaOneCard } from "./media-one.js";
import { Link, ResponsiveImage } from "@quintype/components";

function ThreeColMovie(props) {

  if(props.stories.length < 1) {
    return <div></div>
  }
  return(
    <div className='three-col'>
    <div className='section-title'>movie</div>
    <div className="three-col-movie">
    <div className="three-col-movie_items">
     <BigImageVerticalCard story={props.stories[2]}/> 
     <span className='Media-one-horizontal-card'>
     <MediaOneCard story={props.stories[3]} showSectionName={true} showImage= {true}/></span>

     </div>
     <div className="three-col-movie__item">
     <MediaOneCard  story={props.stories[1]} showSectionName={false} showImage= {false} />
     <MediaOneCard  story={props.stories[2]} showSectionName={false} showImage= {false} />
     <MediaOneCard  story={props.stories[3]} showSectionName={false} showImage= {false} />
     <MediaOneCard  story={props.stories[4]} showSectionName={false} showImage= {false} />
     <MediaOneCard  story={props.stories[5]} showSectionName={false} showImage= {false} />
     <MediaOneCard  story={props.stories[6]} showSectionName={false} showImage= {false} />
     <MediaOneCard  story={props.stories[7]} showSectionName={false} showImage= {false} />
     <MediaOneCard  story={props.stories[8]} showSectionName={false} showImage= {false} />
     <MediaOneCard  story={props.stories[9]} showSectionName={false} showImage= {false} />
     <MediaOneCard  story={props.stories[10]} showSectionName={false} showImage= {false} />




     </div>
     <div className="three-col-movie__item">
     </div>
     </div>
     </div>


    );
}
export { ThreeColMovie };
