const React = require("react");
const Slider = require("react-slick").default;

const { Link } = require("quintype-toddy-libs/components/link");
const backgroundImage = require('../../../assets/images/nyc-city.jpg');

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
  return !props.stories ? null : <div className="must__reads">
      <Slider {...settings}>
        {props.stories.map((item) =>
          <div key={item.id} className="must__reads__slider">
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
    <div className="must__reads__slide">
      <img src={backgroundImage} alt="" />
      <div className="slide__content">
        <p>Must Reads</p>
        <h2>{story.headline}</h2>
        <Link href={"/" + (story['parent-collection'] ? story['generated-slug'] : story.slug) } className="slide__more button button--link" >
          read story
        </Link>
      </div>
    </div>
  )
}

exports.SimpleSlider = SimpleSlider;
