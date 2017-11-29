const React = require("react");
const Slider = require("react-slick").default;
require('whatwg-fetch');

const { Link } = require("@quintype/framework/components/link");
const { ResponsiveImage } = require("@quintype/framework/components/responsive-image");

const { Author } = require("./author.jsx");
const { SectionName } = require("./section-name.jsx");

function Carousel(props) {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  const limit = props.limit ? parseInt(props.limit) : 5;
  return !props.stories ? null : <div className="carousel-wrapper">
      <div className="carousel">
        <Slider {...settings}>
          {props.stories.slice(0, limit).map((storyObj) =>
            <div key={storyObj.id}>
              <CarouselItem story={storyObj.story}/>
            </div>
          )}
        </Slider>
      </div>
    </div>
}

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  componentDidMount() {
    const currentStory = this.state.story;
    fetch('/api/v1/authors/' + this.state.story['author-id'])
      .then(function(response) {
        return response.json();
      }).then(function(authorDetails) {
        currentStory['author-image'] = authorDetails.author['avatar-url'];
        this.setState({
          story: currentStory
        });
      }.bind(this))
  }
  render() {
    return !this.state.story ? null :
      <Link href={"/" + (this.state.story['parent-collection'] ? this.state.story['generated-slug'] : this.state.story.slug)}>
        <Slide story={this.state.story}/>
      </Link>
  }
}

function Slide(props) {
  const inlineStyle = {
    borderBottom: 'solid 2px ' + props.story['section-color']
  }
  return <div className="carousel-slide">
    <div className="carousel-slide__image">
      <figure>
        <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
          aspectRatio={[4,3]}
          defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
          imgParams={{auto:['format', 'compress'], fit:'max'}}/>
      </figure>
    </div>
    <div className="carousel-slide__content">
      <SectionName inlineStyle={inlineStyle} name={props.story.sections[0]['display-name']} />
      <h2 className="carousel-slide__heading" dangerouslySetInnerHTML={ {__html: props.story.headline }} />
      {/* Remove extra charecters if content is so big */}
      <p className="carousel-slide__description" dangerouslySetInnerHTML={ {__html: props.story.subheadline.length > 105 ? props.story.subheadline.substr(0, 100).concat('...') : props.story.subheadline }} />
      <Author author={{
          "name": props.story['author-name'],
          "image": props.story['author-image'],
          "date": props.story['first-published-at']}} />
    </div>
  </div>

}

exports.Carousel = Carousel;
