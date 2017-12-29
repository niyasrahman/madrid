import React from "react";
import TimeAgo from 'react-timeago';
import { DateTime } from 'luxon';

function Author(props) {
  function formatter(value, unit, suffix, date, defaultFormatter) {
    return DateTime.fromMillis(date).toFormat("dd LLL, yyyy 'at' hh:mm a");
  }
  return <div className="author">
    { props.author.image && <div className="author__avatar">
      <img src={props.author.image} alt="author-image" />
    </div>}
    <div className="author__content">
      <h3 className="author__name">{props.author.name}</h3>
      {props.author.date && <p className="author__published-date">
        Posted <TimeAgo date={props.author.date} formatter={formatter}/>
      </p>}
    </div>
  </div>
}

export { Author };
