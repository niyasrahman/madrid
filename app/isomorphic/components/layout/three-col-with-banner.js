import React from "react";
import { FeaturedStoryWithBanner } from "./featured-story-with-banner.js";
import _ from "lodash";


function ThreeColWithBanner({stories}) {

  return(
    <FeaturedStoryWithBanner stories={stories} />
  );
}

export { ThreeColWithBanner };