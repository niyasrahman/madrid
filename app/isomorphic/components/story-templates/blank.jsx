const React = require("react");

const { ResponsiveImage } = require("@quintype/components");
const { StoryHeaderCard } = require("../story-page-components/story-header-card.jsx");
const { StoryTags } = require("../story-page-components/story-tags.jsx");
const { RelatedStories } = require("../story-page-components/related-stories.jsx");
const { StoryPageCard } = require("../story-page-components/story-page-card.jsx");

function BlankStoryTemplate(props) {
  return <article className="blank-story">
      <figure className="blank-story-hero-image qt-image-16x9">
        <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
          aspectRatio={[9,3]}
          defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
          imgParams={{auto:['format', 'compress'], fit:'max'}}/>
      </figure>
      <div className="blank-story--wrapper">
        <div className="blank-story--content">
          <StoryHeaderCard story={props.story}/>
          {props.story.cards.map((card, index) => <StoryPageCard key={index} card={card} story={props.story}/>)}
          <StoryTags tags={props.story.tags} />
          <RelatedStories stories = {props.relatedStories}></RelatedStories>
        </div>
      </div>
    </article>
}

function BlankStory(props) {
  return <div className="story-grid">
    <BlankStoryTemplate {...props}></BlankStoryTemplate>
  </div>
}

exports.BlankStory = BlankStory;
