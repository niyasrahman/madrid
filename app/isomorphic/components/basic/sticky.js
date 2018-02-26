import React from "react";
import ReactDOM from "react-dom";

export class Sticky extends React.Component {
  constructor(props) {
    super(props);
    this.makeSticky = this.makeSticky.bind(this);
  }
  componentDidMount() {
    const options = {
      threshold: [0,1]
    }
    if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
      this.observer = new IntersectionObserver(this.makeSticky, options);
      const observerElement = this.props.observerElement || 'observerElement';
      // Instead of targeting the children, we are targeting the observer el which is a hidden `div` above the children of `Sticky`.
      const target = document.querySelector('#' + observerElement);
      this.observer.observe(target);
    }
  }

  makeSticky(entries, observer) {
    const fixedClassName = 'sticky-element__wrapper--fixed';
    const elementHeight = this.wrapperEl.offsetHeight;
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        this.wrapperEl.classList.remove(fixedClassName)
        this.holderEl.style.height = 'auto';
      } else {
        this.wrapperEl.classList.add(fixedClassName)
        this.holderEl.style.height = elementHeight + 'px';
      }
    });
  }

  componentWillUnmount() {
    this.observer && this.observer.disconnect();
  }

  render() {
    return <div ref={(holder) => this.holderEl = holder} className="sticky-element">
      {/* the below element__observer won't show anything. This div is used to check the current position/flow of sticky element*/}
      <div id={this.props.observerElement || 'observerElement'}></div>
      <div ref={(wrapper) => this.wrapperEl = wrapper} className="sticky-element__wrapper">
        {this.props.children}
      </div>
    </div>
  }
}
