import React from "react";
import { Link } from "@quintype/components";
import Slider from "react-slick";

function BreakingNewsView(props) {
  const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      touchMove: false,
      variableWidth: false,
    };

  if(props.breakingNews.length == 0) {
    return <span/>;
  }
  return <div className="breaking-news">
  <span className="breaking-news__heading">Breaking News</span>
    <div className="breaking-news__carousel">
      <Slider {...settings}>
        {props.breakingNews.map(story => breakingNewsItem(story))}
      </Slider>
    </div>
  </div>;

  function breakingNewsItem(story) {
    if(story.metadata['linked-story-slug']){
      return <Link key={story.id} href={ '/'+ story.metadata['linked-story-slug']} className="breaking-news__story"><article>{story.headline}</article></Link>
    } else {
    return <article key={story.id} className="breaking-news__story">{story.headline}</article>
    }
  }
}

export { BreakingNewsView };
