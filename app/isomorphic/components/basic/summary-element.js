import React from "react";
import { StoryElement } from "@quintype/components";

import caretImg from "../../../assets/icons/caret-up.svg";
import classNames from 'classnames';

class SummaryElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSummary: true,
      summaryHeight: null
    }
    this.toggleSummary = this.toggleSummary.bind(this);
  }
  toggleSummary() {
    this.setState(function(prevState) {
      return {showSummary: !prevState.showSummary};
    })
  }
  componentDidMount() {
    const height = this.summaryContent.clientHeight;
    this.setState({ summaryHeight: height + 'px' });
  }
  render() {
    let summaryStyle = {
      height: this.state.summaryHeight
    };
    return <div className="story-element-text-summary__wrapper">
      <header>
        Summary
        <img src={caretImg} alt="toggle summary" onClick={this.toggleSummary}
          className={classNames({'is-closed': !this.state.showSummary})}/>
      </header>
      <div
        style={summaryStyle}
        className={classNames('story-element-text-summary__content', {'is-closed': !this.state.showSummary})}
        ref={ (summaryContent) => this.summaryContent = summaryContent}>
        <StoryElement {...this.props}></StoryElement>
      </div>
    </div>
  }
}

export { SummaryElement };
