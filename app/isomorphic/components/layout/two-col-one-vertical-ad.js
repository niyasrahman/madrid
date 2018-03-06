import React from "react";

import { BigImageVerticalCard } from "./big-image-vertical-card.js";
import { MediaOneCard } from "./media-one.js";
import { Link, ResponsiveImage } from "@quintype/components";

function TwoColOneVerticalAd(props) {

  if(props.stories.length < 1) {
    return <div></div>
  }

  return(

  <div className='two-col-one-vertical-ad'>
    <div className='two-col-one-vertical-ad_item'>
      <MediaOneCard story={props.stories[1]}  showSectionName={true} showImage= {true}/>
      <MediaOneCard story={props.stories[2]} showSectionName={true} showImage= {true}/>
      <MediaOneCard story={props.stories[3]} showSectionName={true} showImage= {true}/>
      <MediaOneCard story={props.stories[4]} showSectionName={true} showImage= {true}/>
      <MediaOneCard story={props.stories[5]} showSectionName={true} showImage= {true}/>
      <MediaOneCard story={props.stories[6]} showSectionName={true} showImage= {true}/>
    </div>
    <div className='two-col-one-vertical-ad_item'>
      <BigImageVerticalCard story={props.stories[1]}/>
      <BigImageVerticalCard story={props.stories[2]}/>
    </div>
  </div>
  );
}

export { TwoColOneVerticalAd };
