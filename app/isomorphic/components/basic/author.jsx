const React = require("react");
const TimeAgo = require('react-timeago').default;

function Author(props) {
  return <div className="author">
    { props.author.image && <div className="author__avatar">
      <img src={props.author.image} alt="author-image" />
    </div>}
    <div className="author__content">
      <h3 className="author__name">{props.author.name}</h3>
      {props.author.date && <p className="author__published-date">Posted <TimeAgo date={props.author.date} /></p>}
    </div>
  </div>
}

exports.Author = Author;
