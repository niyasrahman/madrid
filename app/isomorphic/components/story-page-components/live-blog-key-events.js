import React from "react";
import TimeAgo from 'react-timeago';

const FetchEventTitle = props => {
  return <div>
  { props.element.map((element, index)=>
    element.type === "title" && <h3 className="event-title" key={index}>{ element.text }</h3>
  )}
  </div>
};

function KeyEvent(props) {
  return <article className="key-event">
  { props.card.metadata.attributes['key-event'] && <div>
    <TimeAgo date={props.card['card-added-at']}  className="card-added-at"/>
    <a href={`#${props.card.id}`}>
      <FetchEventTitle element={props.card['story-elements']} />
    </a>
  </div> }
  </article>
}

function LiveBlogKeyEvents(props) {
  return <div className="key-events">
  <h3 className="key-events__heading"> key events</h3>
  { props.story.cards.map((card, index)=>
    card.metadata.attributes && <KeyEvent card={card} key={index}/>) }
  </div>
}

export { LiveBlogKeyEvents };
