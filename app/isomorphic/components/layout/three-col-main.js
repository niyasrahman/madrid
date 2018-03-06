import React from "react";

import { BigImageVerticalCard } from "./big-image-vertical-card.js";
import { VerticalCard } from "./vertical-card.js";   
import { MediaOneCard } from "./media-one.js";
import { Link, ResponsiveImage } from "@quintype/components";

function ThreeColMain(props) {

  if(props.stories.length < 1) {
    return <div></div>
  }

  return(

  <div className='three-col-main'>
      <div className='three-col-main__item'>
        <BigImageVerticalCard story={props.stories[0]}/>
        <MediaOneCard story={props.stories[1]} showSectionName={true} showImage= {true}/>
        <MediaOneCard story={props.stories[2]} showSectionName={true} showImage= {true}/>
      </div>
       <div className='three-col-main__item'>
        <VerticalCard story={props.stories[3]} />
        <VerticalCard story={props.stories[4]} />
        <VerticalCard story={props.stories[5]} />
       </div>
       <div className='three-col-main__item'>
        <MediaOneCard story={props.stories[6]} showSectionName={true} showImage= {true}/>
        <MediaOneCard story={props.stories[7]} showSectionName={true} showImage= {true}/>
        <MediaOneCard story={props.stories[8]} showSectionName={true} showImage= {true}/>
        <MediaOneCard story={props.stories[9]} showSectionName={true} showImage= {true}/>
        <MediaOneCard story={props.stories[10]} showSectionName={true} showImage= {true}/>
        <MediaOneCard story={props.stories[11]} showSectionName={true} showImage= {true}/>
      </div>
  </div>
  );
}







export { ThreeColMain };
