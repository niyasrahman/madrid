import React from "react";
import { RedHeaderVerticalCard } from "./red-header-vertical-card.js";
import _ from "lodash";


function FourCol({stories}) {

  if(stories.length < 1) {
    return <div></div>
  }
  const children = _.take(stories,4).map(story => <RedHeaderVerticalCard key={story.id} story={story} />
);

  return(

  <div className='four-col-main container'>
   {children}
  </div>
  );
}

export { FourCol };
