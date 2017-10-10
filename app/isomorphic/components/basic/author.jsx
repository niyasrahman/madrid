const React = require("react");

function Author(props) {

  return <div className="author--title">{props.author.name}</div>
}

exports.Author = Author;
