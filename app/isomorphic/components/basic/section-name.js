import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";
import _ from "lodash";

function SectionName(props) {
  if(props.hideLink) {
    return <div><div className={classNames("section-name", "qt-theme__color--border", {"section-name--large": props.type === 'large'})} style={props.inlineStyle}>
      {props.name}
    </div></div>
  }

  const sectionLink = _.get(props.section, ['slug'], "#");
  return (
    <div>
    <Link href={`/${sectionLink}`} className={classNames("section-name", "qt-theme__color--border", {"section-name--large": props.type === 'large'})} style={props.inlineStyle}>
      {props.name}
    </Link>
  </div>
  );
}

export { SectionName };
