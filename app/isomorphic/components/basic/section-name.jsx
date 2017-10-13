const React = require("react");
const classNames = require('classnames');


function SectionName(props) {
  return <div className={classNames("section-name", {"section-name--large": props.type === 'large'})} style={props.inlineStyle}>
    {props.name}
  </div>
}

exports.SectionName = SectionName;
