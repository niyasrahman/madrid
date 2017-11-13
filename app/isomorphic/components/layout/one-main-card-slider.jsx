const React = require("react");
const Slider = require("react-slick").default;

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");


function OneMainCardSlider(props) {
  const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      arrows: true,
      centerMode: true,
      centerPadding: '270px',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '20px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '80px',
            slidesToShow: 1
          }
        }
      ]
    };
  return !props.stories ? null : <div className="one-main-card-slider component-wrapper-fluid">
      <Slider {...settings} className="one-main-card-slider__slides component-wrapper">
        {props.stories.map((item) =>
          <div key={item.id} className="one-main-card-slider__slider-content">
            <SliderItem item={item} />
          </div>
        )}
      </Slider>
    </div>
}

function SliderItem(props) {
  {/* The `story` can be an item from items of a collection or a story itself.
   assigning it accordinlgy.*/}
  const story = props.item.type === 'story' && props.item.story ? props.item.story : props.item;
  console.log(props);
  const video_story = props.item.template-type;
  return (
    <Link className={`'overlay-story-card' ${ video_story === 'video' ? 'overlay-story-card--video' : null}`} href={"/" + (story['parent-collection'] ? story['generated-slug'] : story.slug) }>
      <figure>
        <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
          aspectRatio={[57,32]}
          defaultWidth={320} widths={[250,480,640]}
          imgParams={{auto:['format', 'compress']}}
          className=""/>
      </figure>
      <p className="overlay-story-card__heading" dangerouslySetInnerHTML={ {__html: story.headline }} />
    </Link>
  )
}

exports.OneMainCardSlider = OneMainCardSlider;
