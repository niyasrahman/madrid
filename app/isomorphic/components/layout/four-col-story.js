import React from "react";
import { VerticalCardWithBanner } from "./vertical-card-with-banner.js";
import _ from "lodash";


function FourCol({stories}) {

  if(stories.length < 1) {
    return <div></div>
  }
  const children = _.take(stories,4).map(story => <VerticalCardWithBanner key={story.id} story={story} />
);

  return(

  <div className='four-col-main container'>
   {children}
  </div>
  );
}

export { FourCol };
