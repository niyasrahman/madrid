const React = require("react");

function SectionName(props) {
  return <div className="section-name" style={props.sectionBorder}>
    {props.name}
  </div>
}

exports.SectionName = SectionName;
