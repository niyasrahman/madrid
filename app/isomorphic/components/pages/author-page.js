import React from "react";
import { Link, ResponsiveImage } from "@quintype/components";
import TimeAgo from 'react-timeago';
import { DateTime } from 'luxon';
import { DfpAd } from "../dfp-ads";
import { TwitterIcon } from "../basic/twitter-icon";
import { LoadMoreStoriesBase } from '@quintype/components';

function formatter(value, unit, suffix, date, defaultFormatter) {
	    return DateTime.fromMillis(date).toFormat("dd LLL, yyyy 'at' hh:mm a");
	  }

const AuthorStories = ({section, stories, loading, onLoadMore, noMoreStories}) => {
	
	return (
		<section className="author-loadmore-stories">
      {
				stories.map(item => {
					let story = item.story || item;
					return(
          <div className="author-loadmore-stories__story" key={story.id}>
            <div className="author-loadmore-stories__story__avatar">
              <figure className="author-loadmore-stories__story-image">
				        <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
				          aspectRatio={[4,3]}
				          defaultWidth={480} widths={[300,400,500]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
				          imgParams={{auto:['format', 'compress'], fit:'max'}}/>
				      </figure>
			      </div>
			      <div className="author-loadmore-stories__story__content">
          	  <h3 className="author-loadmore-stories__story-heading">{story.headline}</h3>
          	  {story['published-at'] && <p className="author-main-stories__story-published-at">
				        Posted <TimeAgo date={story['published-at']} formatter={formatter}/>
				      </p>}
					</div>
          </div>
          )
				})
		  }
		  {!noMoreStories && <div onClick={onLoadMore} className="load-more-stories ">
		  <span className="load-more-stories__line qt-theme__color--bg"></span>
		  {loading? 'Loading...':'Load More'}</div>}
		  </section>
	)
}

const AuthorPage = (props) => {

  	const stories = props.data.stories;
		const author = props.data.author;
		const fields = "id,hero-image-s3-key,hero-image-metadata,headline,published-at";
		return (
			<div className="author-detail-page">
				<section className="author-detail">
				 <div className="author-detail__avatar">
					 	<figure>
					  	<img src={author['avatar-url']} alt={author.name} />
					  </figure>
				 </div>
         <div className="author-detail__content">
						<h1 className="author-detail__name">{author.name}</h1>
						 { author.bio && <div className="author-detail__bio" dangerouslySetInnerHTML={ {__html: author.bio }} />}
						<div className="author-detail__social">
						  { author['twitter-handle'] && <a href={author['twitter-handle']} target="_blank"><TwitterIcon /></a>}
						</div>
					</div>
				</section>
				<section className="author-page-dfp">
				  <DfpAd adtype="Mrec" />
				</section>
				<section className="author-main-stories">
	      {
					stories.slice(0,3).map(({story}) => {
						return(
            <div className="author-main-stories__story" key={story.id}>
              <div className="author-main-stories__story__avatar">
	              <figure className="author-main-stories__story-image">
					        <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
					          aspectRatio={[9,3]}
					          defaultWidth={480} widths={[300,400,500]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
					          imgParams={{auto:['format', 'compress'], fit:'max'}}/>
					      </figure>
              </div>
				      <div className="author-main-stories__story__content">
				      	<h3 className="author-main-stories__story-headline">{story.headline}</h3>
                  {story['published-at'] && <p className="author-main-stories__story-published-at">
					        Posted <TimeAgo date={story['published-at']} formatter={formatter}/>
					      </p>}
				      </div>
            </div>
            )
					})
			  }
			  </section>
			  <LoadMoreStoriesBase template={AuthorStories} fields={fields} {...props} params={{"author-id": props.data.author.id}} />
			</div>
		)  	  
}

export { AuthorPage };