const React = require("react");

function SectionName(props) {
  return <div className="section-name" style={props.sectionColor}>
    {props.name}
  </div>
}

exports.SectionName = SectionName;
