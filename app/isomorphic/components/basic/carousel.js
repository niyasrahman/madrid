import React from "react";
import Slider from "react-slick";
import _ from "lodash";
import { Link, ResponsiveImage} from "@quintype/components";

import { Author } from "./author.js";
import { ImageFallback } from "./image-fallback.js";
import { SectionName } from "./section-name.js";

function Carousel(props) {
  const settings = {
      dots: true,
      infinite: props.limit > 1,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  const limit = props.limit ? parseInt(props.limit) : 5;
  return !props.stories ? null : <div className="carousel-wrapper">
      <div className="carousel">
        <Slider {...settings}>
          {props.stories.slice(0, limit).map((storyObj) => {
              const story = storyObj && storyObj.story ? storyObj.story : storyObj;
              return <div key={story.id}>
                <CarouselItem story={story}/>
              </div>
            }
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
      <Link href={"/" + this.state.story.slug}>
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
      { props.story["hero-image-s3-key"] ?
        <figure>
          <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
            aspectRatio={[4,3]}
            defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
            imgParams={{auto:['format', 'compress'], fit:'max'}}/>
        </figure> :
        <ImageFallback />
      }
    </div>
    <div className="carousel-slide__content">
      <SectionName hideLink={true} inlineStyle={inlineStyle} name={props.story.sections[0]['display-name'] || props.story.sections[0]['name']}/>
      <h2 className="carousel-slide__heading" dangerouslySetInnerHTML={ {__html: props.story.headline }} />
      <p className="carousel-slide__description" dangerouslySetInnerHTML={ {__html: props.story.subheadline }} />
      <Author author={{
          "name":  _.get(props.story, ['authors', 0, 'name'], props.story['author-name']),
          "image": props.story['author-image'],
          "id": _.get(props.story, ['authors', 0 ,'id'], props.story['author-id'])
        }} date={props.story['first-published-at']}/>
    </div>
  </div>

}

export { Carousel };
