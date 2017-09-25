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
        {props.stories.map((storyObj) =>
          <div key={storyObj.id} className="must__reads__slider">
            {/* This `storyObj` object includes `id`, `type` and actual `story` object. We only
              need actual story object.*/}
            <SliderItem story={storyObj.story} />
          </div>
        )}
      </Slider>
    </div>
}

function SliderItem(props) {
  return (
    <div className="must__reads__slide">
      <img src={backgroundImage} alt="" />
      <div className="slide__content">
        <p>Must Reads</p>
        <h2>{props.story.headline}</h2>
        <Link href={"/" + props.story.parentCollection ? props.story.generatedSlug : props.story.slug} className="slide__more button button--link" >
          read story
        </Link>
      </div>
    </div>
  )
}

exports.SimpleSlider = SimpleSlider;
