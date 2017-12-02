const React = require("react");
const { Link } = require("@quintype/components");
const Slider = require("react-slick").default;

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
      slidesToScroll: 1
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
      return <Link key={story.id} href={ '/'+ story.metadata['linked-story-slug']} className="breaking-news__story">{story.headline}</Link>
    } else {
    return <article key={story.id} className="breaking-news__story">{story.headline}</article>
    }
  }
}

exports.BreakingNewsView = BreakingNewsView;
