const React = require("react");

const { NavigationComponent } = require("../navigation-component.jsx");
const { Footer } = require('../layout/footer.jsx')

const { FullscreenMediaList } = require("../layout/fullscreen-media-list.jsx");
const { SectionName } = require("../basic/section-name.jsx");
const { ThreeCol } = require("../layout/three-col.jsx");

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
    const config = {
      'collection-name': this.props.data.collection.name,
      'collection-slug': this.props.data.collection.slug,
      'collection-color': this.props.data.collection.color
    }
    const inlineStyle = {
      borderBottom: '4px solid ' + this.props.config['collection-color']
    }
    return <div>
      <NavigationComponent {...navbarConfig}/>
      <SectionName inlineStyle={inlineStyle} name={this.props.config['collection-name']} type="large"/>
      <ThreeCol stories={this.props.data.collection.items.slice(0,7)} config= {config}/>
      <FullscreenMediaList stories={this.props.data.collection.items.slice(4)} config= {config}/>
      <Footer links={staticLinks}/>
    </div>;
  }
}

exports.SectionPage = SectionPage;
