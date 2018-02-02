import React from "react";
import classNames from 'classnames';
import { Link } from "@quintype/components";
import _ from "lodash";

function SectionName(props) {
  if(props.hideLink) {
    return <div className={classNames("section-name", {"section-name--large": props.type === 'large'})} style={props.inlineStyle}>
      {props.name}
    </div>
  }

  const sectionLink = `/${_.get(props.section, [0 , 'name'])}`.toLowerCase();
  return (
    <div>
    <Link href={sectionLink} className={classNames("section-name", {"section-name--large": props.type === 'large'})} style={props.inlineStyle}>
      {props.name}
    </Link>
  </div>
  );
}

export { SectionName };
