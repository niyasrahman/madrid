import React from "react";
import _ from "lodash";
import canUseDom from "../../../utils/can-use-dom";
import { SimpleSlider } from '../basic/simple-slider.js'

function FullscreenSimpleSlider(props) {
  const storiesToRender = canUseDom ? props.stories : _.take(props.stories, 1);
  return <SimpleSlider stories={storiesToRender} />;
}

export { FullscreenSimpleSlider };
