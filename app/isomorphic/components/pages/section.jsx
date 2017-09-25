const React = require("react");

const { NavigationComponent } = require("../navigation-component.jsx");
const { StoryGrid } = require("../story-grid.jsx");
const { Footer } = require('../layout/footer.jsx')

class SectionPage extends React.Component {
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
    return <div>
      <NavigationComponent {...navbarConfig}/>
      <h1>Section - {this.props.data.section["display-name"] || this.props.data.section["name"]}</h1>
      <StoryGrid stories={this.props.data.stories} />
      <Footer links={staticLinks}/>
    </div>;
  }
}

exports.SectionPage = SectionPage;
