const React = require("react");

const { BlankStory } = require("../story-templates/blank.jsx");
const { NavigationComponent } = require("../navigation-component.jsx");
const { Footer } = require('../layout/footer.jsx')


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
        <BlankStory story={this.props.data.story} relatedStories={this.props.data.relatedStories['related-stories']}/>
        <Footer links={staticLinks}/>
      </div>
    )
  }
}

exports.StoryPage = StoryPage;
