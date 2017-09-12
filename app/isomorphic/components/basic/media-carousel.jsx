const React = require("react");
const Slider = require("react-slick").default;

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

function MediaCarousel(props) {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return !props.stories ? null : <div className="hero__slider bg--white bg--shadow">
      <Slider {...settings}>
        {props.stories.map((story) =>
          <div key={story.id}>
            <MediaCarouselElement story={story}/>
          </div>
        )}
      </Slider>
    </div>
}

function MediaCarouselElement(props) {
  return !props.story ? null : <Link href={"/" + props.story.slug} className="hero__slider__slides">
      <div className="slide">
        <div className="slide__image">
          <figure className="story-card-image qt-image-16x9">
            <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
              aspectRatio={[16,9]}
              defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
              imgParams={{auto:['format', 'compress']}}/>
          </figure>
        </div>
        <div className="slide__content slide--card">
          <div className="slide__section section--title--small section--science">Science</div>
          <h2>{props.story.headline}</h2>
          <p>{props.story.summary}</p>
          <div className="slide__author">
            <div className="slide__author__avatar">
              <img src="{{ assetPath('author-avatar.png') }}" alt="" />
            </div>
            <div className="slide__author__content">
              <h3>{props.story['author-name']}</h3>
              <p>{props.story['first-published-at']}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
}

exports.MediaCarousel = MediaCarousel;
