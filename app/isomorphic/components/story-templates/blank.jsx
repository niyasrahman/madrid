const React = require("react");

const { Link } = require("quintype-toddy-libs/components/link");
const { ResponsiveImage } = require("quintype-toddy-libs/components/responsive-image");
const { StoryElement } = require("quintype-toddy-libs/components/story-element");
const { StoryHeaderCard } = require("../story-page-components/story-header-card.jsx");
const { StoryTags } = require("../story-page-components/story-tags.jsx");
const { RelatedStories } = require("../story-page-components/related-stories.jsx");

function StoryCard(props){
  return <div>
    {props.card['story-elements'].map((element, index) => <StoryElement element={element} key={index} story={props.story}></StoryElement>)}
  </div>
}

function BlankStoryTemplate(props) {
  return <div className="blank-story">
      <figure className="blank-story-hero-image qt-image-16x9">
        <ResponsiveImage slug={props.story["hero-image-s3-key"]} metadata={props.story["hero-image-metadata"]}
          aspectRatio={[16,9]}
          defaultWidth={480} widths={[250,480,640]} sizes="(max-width: 500px) 98%, (max-width: 768px) 48%, 23%"
          imgParams={{auto:['format', 'compress']}}/>
      </figure>
      <div className="blank-story--content">
        <StoryHeaderCard story={props.story}/>
        {props.story.cards.map((card, index) => <StoryCard key={index} card={card} story={props.story}/>)}
        <StoryTags tags={props.story.tags} />
      </div>
    </div>;
}

function BlankStory(props) {
  return <div className="story-grid">
    <BlankStoryTemplate story={props.story}></BlankStoryTemplate>
    <RelatedStories stories = {props.relatedStories}></RelatedStories>
  </div>;
}

exports.BlankStory = BlankStory;
