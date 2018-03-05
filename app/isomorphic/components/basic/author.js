import React from "react";
import TimeAgo from 'react-timeago';
import { DateTime } from 'luxon';
import { Link } from "@quintype/components";
// Author component can accept these params.
// isLink : Basically changes the component clickable in any scenario.
// author : An author object which will have name, id, date & image.
// authors: An array of authors which will come from story API itself. If the authors array is present we'll ignore the author object.
// showDateOnly: Will hide the `Posted` string infront of every date.
// date   : pass the date value from story object
function Author(props) {
  // If there's only one author.
  if((props.author && !props.authors) || (props.authors && props.authors.length === 1)) {
    const author = props.authors ? props.authors[0] : props.author;
    return props.isLink ? <Link href={'/author/' + author.id}>
      <SingleAuthorTemplate author={author} {...props} />
    </Link> : <SingleAuthorTemplate author={author} {...props} />
  }
  // If there're mulitiple authors.
  if(props.authors && props.authors.length !== 1) {
    return <MultipleAuthorTemplate {...props}/>
  }
  // fallback
  return null;
}

const SingleAuthorTemplate = ({author, date, showDateOnly = false}) => {
  const authorImage = author['avatar-url'] || author.image ;
  return <div className="author">
    <AuthorImage image={authorImage} name={author.name} />
    <div className="author__content">
      <h3 className="author__name">{author.name}</h3>
      {date && <p className="author__published-date">
        { !showDateOnly && 'Posted' } <TimeAgo date={date} formatter={formatter}/>
      </p>}
    </div>
  </div>
}

const MultipleAuthorTemplate = (props) => {
  const authorsLength = props.authors.length;
  return <div className="author author--multiple">
    <div className="author__avatars">
    { props.authors.map(author => {
        return props.isLink
          ? <Link href={'/author/' + author.id} key={author.id} className="author__avatar-wrapper--is-link">
            <AuthorImage image={author['avatar-url']} name={author['name']}/>
          </Link>
          : <AuthorImage image={author['avatar-url']} name={author['name']} key={author.id}/>
      }) }
    </div>
    <div className="author__content">
      { props.authors.map((author, index, authors) => {
          return props.isLink
            ? <Link href={'/author/' + author.id} key={author.id}>
              <AuthorName author={author} index={index} authorsLength ={authorsLength} isLink/>
            </Link>
            : <AuthorName author={author} index={index} authorsLength ={authorsLength} key={author.id}/>
        }) }
      { props.date && <p className="author__published-date">
        { !props.showDateOnly && 'Posted' } <TimeAgo date={props.date} formatter={formatter}/>
      </p>}
    </div>
  </div>
}

const AuthorName = ({author, index, authorsLength, isLink}) => {
    return <h3 className={`${isLink ? 'author__name--is-link' : ''} author__name`}>
      {index !== 0 && (index === authorsLength - 1 ? '&' : ',')} {author.name}
    </h3>
};

const AuthorImage = ({image, name}) => {
  return image ? <div className="author__avatar">
      <img src={image} alt={name} />
  </div> : null;
}

const FallbackAuthorImage = () => {
  // TODO: replace with a fallback image. and use it in AuthorImage component.
  return null;
}

function formatter(value, unit, suffix, date, defaultFormatter) {
  return DateTime.fromMillis(date).toFormat("dd LLL, yyyy 'at' hh:mm a");
}

export { Author };
