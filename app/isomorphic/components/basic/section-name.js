import React from "react";
import classNames from 'classnames';


function SectionName(props) {
  return <div>
    <div className={classNames("section-name", {"section-name--large": props.type === 'large'})} style={props.inlineStyle}>
      {props.name}
    </div>
  </div>
}

export { SectionName };
