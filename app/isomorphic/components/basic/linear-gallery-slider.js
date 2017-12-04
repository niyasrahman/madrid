const React = require("react");
const Slider = require("react-slick").default;
const { Link, ResponsiveImage } = require("@quintype/components");

const { SectionName } = require("./section-name.js");


function LinearGallerySlider(props) {
  const settings = {
    centerMode: true,
    centerPadding: '130px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '20px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '80px',
          slidesToShow: 1
        }
      }
    ]
  };
  const inlineStyle = {
    borderBottom: 'solid 4px #fff',
    color: '#fff',
    marginBottom: '0'
  }
  return !props.stories ? null : <div className="linear-gallery-slider component-wrapper-fluid">
      <div className="linear-gallery-slider__heading">
        <SectionName inlineStyle={inlineStyle} name={props.config['collection-name']} type="large"/>
      </div>
      <Slider {...settings} className="linear-gallery-slider__slides">
        {props.stories.map((item) =>
          <div key={item.id} className="linear-gallery-slider__slider-content">
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
  return (
    <Link href={"/" + (story['parent-collection'] ? story['generated-slug'] : story.slug) }>
      <figure>
        <ResponsiveImage slug={story["hero-image-s3-key"]} metadata={story["hero-image-metadata"]}
          aspectRatio={[4,3]}
          defaultWidth={320} widths={[250,480,640]}
          imgParams={{auto:['format', 'compress'], fit:'max'}}/>
      </figure>
      <p className="linear-gallery-slider__item-title" dangerouslySetInnerHTML={ {__html: story.headline }} />
    </Link>
  )
}

exports.LinearGallerySlider = LinearGallerySlider;
