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
        <MediaOneCard story={props.stories[1]}/>
        <MediaOneCard story={props.stories[2]}/>
      </div>
       <div className='three-col-main__item'>
        <VerticalCard story={props.stories[3]} />
        <VerticalCard story={props.stories[4]} />
        <VerticalCard story={props.stories[5]} />
       </div>
       <div className='three-col-main__item'>
        <MediaOneCard story={props.stories[6]}/>
        <MediaOneCard story={props.stories[7]}/>
        <MediaOneCard story={props.stories[8]}/>
        <MediaOneCard story={props.stories[9]}/>
        <MediaOneCard story={props.stories[10]}/>
        <MediaOneCard story={props.stories[11]}/>
      </div>
  </div>
  );
}







export { ThreeColMain };
