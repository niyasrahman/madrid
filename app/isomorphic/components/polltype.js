import React from 'react';

class Polltype extends React.Component {

  componentDidMount() {
    const polltypeScript = document.createElement('script');
    polltypeScript.setAttribute('src', '//www.polltype.com/embed.js');
    polltypeScript.setAttribute('async', 'true');
    document.head.appendChild(polltypeScript);
  }

  render() {
    return (
      <div data-polltype-embed-id={this.props.id}
          data-polltype-embed-width={this.props.width}
          data-polltype-embed-height={this.props.height} />
    );
  }
}

export { Polltype };
