const React = require("react");
const Slider = require("react-slick").default;
const TimeAgo = require('react-timeago').default;
require('whatwg-fetch');

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

function MediaCarousel(props) {
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
            <MediaCarouselItem story={storyObj.story}/>
          </div>
        )}
      </Slider>
    </div>
}

class MediaCarouselItem extends React.Component {
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
    return !this.state.story ? null : <Link href={"/" + this.state.story.slug} className="hero__slider__slides">
        <div className="slide">
          <div className="slide__image">
              <ResponsiveImage slug={this.state.story["hero-image-s3-key"]} metadata={this.state.story["hero-image-metadata"]}
                aspectRatio={[1,1]}
                defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
                imgParams={{auto:['format', 'compress']}}/>
          </div>
          <div className="slide__content slide--card">
            <div className="slide__section section--title--small section--science">Science</div>
            <h2>{this.state.story.headline}</h2>
            <p>{this.state.story.subheadline}</p>
            <div className="slide__author">
              <div className="slide__author__avatar">
                <img src={this.state.story['author-image']} alt="author-image" />
              </div>
              <div className="slide__author__content">
                <h3>{this.state.story['author-name']}</h3>
                <p><TimeAgo date={this.state.story['first-published-at']} /></p>
              </div>
            </div>
          </div>
        </div>
      </Link>
  }
}

exports.MediaCarousel = MediaCarousel;
