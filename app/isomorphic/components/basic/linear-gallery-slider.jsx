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
        <h2 className="section--title section--video--large">{props.config['collection-name']}</h2>
      </div>
      <div className="video__slider">
        <Slider {...settings}>
          {props.stories.map((item) =>
            <div key={item.id} className="video__slider__content">
              <SliderItem item={item} />
            </div>
          )}
        </Slider>
      </div>
    </div>
}

function SliderItem(props) {
  {/* The `story` can be an item from items of a collection or a story itself.
   assigning it accordinlgy.*/}
  const story = props.item.type === 'story' && props.item.story ? props.item.story : props.item;
  return (
    <Link href={"/" + (story['parent-collection'] ? story['generated-slug'] : story.slug) }>
      <figure className="qt-image-2x3">
        <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
          aspectRatio={[4,3]}
          defaultWidth={320} widths={[250,480,640]}
          imgParams={{auto:['format', 'compress']}}
          className=""/>
      </figure>
      <p dangerouslySetInnerHTML={ {__html: story.headline }} />
    </Link>
  )
}

exports.LinearGallerySlider = LinearGallerySlider;
