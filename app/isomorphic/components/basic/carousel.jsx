const React = require("react");
const Slider = require("react-slick").default;
require('whatwg-fetch');

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

const { Author } = require("./author.jsx");

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
  return !props.stories ? null : <div className="hero__slider bg--white bg--shadow">
      <Slider {...settings}>
        {props.stories.slice(0, limit).map((storyObj) =>
          <div key={storyObj.id}>
            <CarouselItem story={storyObj.story}/>
          </div>
        )}
      </Slider>
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
    const sectionColor = {
      borderBottom: 'solid 2px ' + this.state.story['section-color']
    }
    return !this.state.story ? null : <Link href={"/" + (this.state.story['parent-collection'] ? this.state.story['generated-slug'] : this.state.story.slug)} className="hero__slider__slides">
        <div className="slide">
          <div className="slide__image">
              <ResponsiveImage slug={this.state.story["hero-image-s3-key"]} metadata={this.state.story["hero-image-metadata"]}
                aspectRatio={[4,3]}
                defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
                imgParams={{auto:['format', 'compress']}}/>
          </div>
          <div className="slide__content slide--card">
            <div className="slide__section section--title--small" style={sectionColor}>{this.state.story.sections[0]['display-name']}</div>
            <h2 dangerouslySetInnerHTML={ {__html: this.state.story.headline }} />
            <p dangerouslySetInnerHTML={ {__html: this.state.story.subheadline }} />
            <Author author={{
                "name": this.state.story['author-name'],
                "image": this.state.story['author-image'],
                "date": this.state.story['first-published-at']}} />
          </div>
        </div>
      </Link>
  }
}

exports.Carousel = Carousel;
