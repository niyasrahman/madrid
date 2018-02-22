import React from "react";
import TimeAgo from 'react-timeago';
import filter from "lodash/filter";

const FetchEventTitle = props => {
  return <div>
  { props.element.map((element, index)=>
    element.type === "title" && <h3 className="event-title" key={index}>{ element.text }</h3>
  )}
  </div>
};

function KeyEvent(props) {
  return <article className="key-event">
   <div>
    <TimeAgo date={props.card['card-added-at']}  className="card-added-at"/>
    <a href={`/${props.slug}#${props.card.id}`}>
      <FetchEventTitle element={props.card['story-elements']} />
    </a>
  </div>
  </article>
}

function LiveBlogKeyEvents(props) {

  const cardsWithKeyEvents = filter(props.story.cards, card => card.metadata.attributes['key-event']);

  if(cardsWithKeyEvents.length < 1) {
     return null
  }

  const keyEvents = cardsWithKeyEvents.map(card => <KeyEvent card={card} key={card.id} slug={props.story.slug} />)

  return (
     <div className="key-events">
       <h3 className="key-events__heading"> key events</h3>
       {keyEvents}
     </div> );
}

export { LiveBlogKeyEvents };
