const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

function StoryCard(props) {
  return !props.story ? null : <Link href={"/" + props.story.slug} className="story-card">
      <div className="two-col-one-ad__first bg--shadow bg--white">
        <div className="two-col-one-ad__first__img">
          <figure className="story-card-image qt-image-16x9">
            <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
              aspectRatio={[4,3]}
              defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
              imgParams={{auto:['format', 'compress']}}/>
          </figure>
        </div>
        <div className="section--card--1">
          <div className="section--title--small section--business">{props.story.sections[0].name}</div>
          <h2 dangerouslySetInnerHTML={ {__html: props.story.headline }} />
          <p dangerouslySetInnerHTML={ {__html: props.story.subheadline }} />
          <div className="author--title">
            {props.story['author-name']}
          </div>
        </div>
      </div>
    </Link>;
}

exports.StoryCard = StoryCard;
