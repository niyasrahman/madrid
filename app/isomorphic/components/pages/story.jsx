const React = require("react");

const { BlankStory } = require("../story-templates/blank.jsx");
const { LiveBlogStory } = require("../story-templates/live-blog.jsx");
const { NavigationComponent } = require("../navigation-component.jsx");
const { Footer } = require('../layout/footer.jsx')
const { InfiniteStoryBase } = require('quintype-toddy-libs/components/infinite-story-base')

function storyPageContent({story, index}, relatedStories) {
  if(story['story-template'] == 'live-blog') {
    return <LiveBlogStory story={story} />;
  } else {
    return <BlankStory story={story} relatedStories={index == 0 ? relatedStories : []}/>
  }
}

const FIELDS = "id,headline,slug,url,hero-image-s3-key,hero-image-metadata,first-published-at,last-published-at,alternative,published-at,author-name,author-id,sections,story-template,cards";
function storyPageLoadStories(pageNumber) {
  // Replace this with your logic for loading stories
  return global.superagent
           .get("/api/v1/stories", {fields: FIELDS, limit:5, offset:5*pageNumber})
           .then(response => response.body.stories);
}

class StoryPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const staticLinks = [
      {
        content: 'About us',
        url: '/about'
      },
      {
        content: 'Privacy Policy',
        url: '/privacy'
      },
      {
        content: 'Terms & Conditions',
        url: '/terms'
      }
    ]

    const navbarConfig = {
      title: 'Madrid',
      menu: this.props.data.navigationMenu,
      links: staticLinks
    };
    return (<div>
        <NavigationComponent {...navbarConfig}/>
        <InfiniteStoryBase {...this.props}
                            render={(storyProps) => storyPageContent(storyProps, this.props.data.relatedStories)}
                            loadStories={storyPageLoadStories}
                            onStoryFocus={(story) => console.log(`Story In View: ${story.headline}`)}
                            onInitialStoryFocus={(story) => console.log(`Do Analytics ${story.headline}`)} />
        <Footer links={staticLinks}/>
      </div>
    )
  }
}

exports.StoryPage = StoryPage;
