const React = require("react");
const Slider = require("react-slick").default;

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");


function SimpleSlider(props) {
  const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      arrows: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        }
      ]
    };
  return !props.stories ? null : <div className="simple-slider component-wrapper-fluid">
      <Slider {...settings}>
        {props.stories.map((item) =>
          <div key={item.id}>
            <SliderItem item={item} />
          </div>
        )}
      </Slider>
    </div>
}

function SliderItem(props) {
  {/* The `story` can be an item from items of a collection or a story itself.
   assigning it accordinlgy.*/}
  const story = props.item && props.item.type === 'story' && props.item.story ? props.item.story : props.item;

  return (
    <div className="simple-slider__item">
      <figure>
        <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
          aspectRatio={[16,3]}/>
      </figure>
      <div className="simple-slider__content">
        <p>Must Reads</p>
        <h2>{story.headline}</h2>
        <Link href={"/" + (story['parent-collection'] ? story['generated-slug'] : story.slug) } className="simple-slider__link" >
          read story
        </Link>
      </div>
    </div>
  )
}

exports.SimpleSlider = SimpleSlider;
