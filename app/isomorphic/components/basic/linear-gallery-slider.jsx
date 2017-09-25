const React = require("react");
const Slider = require("react-slick").default;
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

const { Link } = require("quintype-toddy-libs/components/link");


function LinearGallerySlider(props) {
  const settings = {
      centerMode: true,
      centerPadding: '130px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerPadding: '20px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };
  return !props.stories ? null : <div className="videos">
      <div className="video__title">
        <h2 className="section--title section--video--large">{props.config.collectionName}</h2>
      </div>
      <div className="video__slider">
        <Slider {...settings}>
          {props.stories.map((storyObj) =>
            <div key={storyObj.id} className="video__slider__content">
              {/* This `storyObj` objects includes `id`, `type` and actual `story` object. We only
                need actual story object.*/}
              <SliderItem story={storyObj.story} />
            </div>
          )}
        </Slider>
      </div>
    </div>
}

function SliderItem(props) {
  return (
    <Link href={"/" + (props.story.parentCollection ? props.story.generatedSlug : props.story.slug) }>
      <figure className="story-card-image qt-image-2x3">
        <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
          aspectRatio={[4,3]}
          defaultWidth={320} widths={[250,480,640]}
          imgParams={{auto:['format', 'compress']}}
          className=""/>
      </figure>
      <p dangerouslySetInnerHTML={ {__html: props.story.headline }} />
    </Link>
  )
}

exports.LinearGallerySlider = LinearGallerySlider;
