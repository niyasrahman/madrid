import React from "react";

import { RedHeaderVerticalCard } from "./red-header-vertical-card.js";
import { Link, ResponsiveImage } from "@quintype/components";

function FourCol(props) {

  if(props.stories.length < 1) {
    return <div></div>
  }

  return(

  <div className='four-col-main'>
    <RedHeaderVerticalCard story={props.stories[5]}/>
    <RedHeaderVerticalCard story={props.stories[2]}/>
    <RedHeaderVerticalCard story={props.stories[3]}/>
    <RedHeaderVerticalCard story={props.stories[4]}/>
  </div>
  );
}

export { FourCol };
