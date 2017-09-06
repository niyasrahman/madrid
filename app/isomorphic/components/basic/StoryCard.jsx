const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");

function StoryCard(props) {
  return <Link href={"/" + props.story.slug} className="story-card">
      <div className="rango__first bg--shadow bg--white">
        <div className="rango__first__img">
          <figure className="story-card-image qt-image-16x9">
            <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
              aspectRatio={[16,9]}
              defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
              imgParams={{auto:['format', 'compress']}}/>
          </figure>
        </div>
        <div className="section--card--1">
          <div className="section--title--small section--business">{props.story.sections[0].name}</div>
          <h2>{props.story.headline}</h2>
          <p>{props.story.summary}</p>
          <div className="author--title">
            {props.story['author-name']}
          </div>
        </div>
      </div>
    </Link>;
}

exports.StoryCard = StoryCard;
