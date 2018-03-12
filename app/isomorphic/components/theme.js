import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

function ThemeBase(props) {
  const headlineLineHeight =
    get(props.publisherTheme, ["headline_lineheight"]) &&
    !isEmpty(props.publisherTheme.headline_lineheight)
      ? props.publisherTheme.headline_lineheight
      : "1.3";

  const bodyLineHeight =
    get(props.publisherTheme, ["body_lineheight"]) &&
    !isEmpty(props.publisherTheme.body_lineheight)
      ? props.publisherTheme.body_lineheight
      : "1.5";

  return `.qt-theme__color {
        color: ${props.publisherTheme.primary_color} !important;
      }
      .qt-theme__color--bg {
        background-color: ${props.publisherTheme.secondary_color} !important;
      }
      .qt-theme__color--border {
        border-color: ${props.publisherTheme.primary_color} !important;
      }
      .qt-theme__color--header {
        color: ${props.publisherTheme.header_text_color} !important;
      }
      .qt-theme__color--headerbg {
        background-color: ${
          props.publisherTheme.header_background_color
        } !important;
      }
      .qt-theme__color--footer {
        color: ${props.publisherTheme.footer_text_color} !important;
      }
      .qt-theme__color--footerbg {
        background-color: ${
          props.publisherTheme.footer_background_color
        } !important;
      }
      .slick-active button::before {
        color: ${props.publisherTheme.primary_color} !important;
      }
      // Story anchor color
      .blank-story .story-element-text a {
        color: ${props.publisherTheme.primary_color} !important;
      }
      .blank-story .story-element-text a:after {
        background-color: ${props.publisherTheme.primary_color} !important;
      }
      .card--align-left .story-element-text-quote,
      .card--align-left .story-element-text-blockquote,
      .card--align-left .story-element-text-blurb,
      .card--align-right .story-element-text-quote,
      .card--align-right .story-element-text-blockquote,
      .card--align-right .story-element-text-blurb {
        border-color: ${props.publisherTheme.primary_color} !important;
      }
      ::-moz-selection {
             background-color: ${props.publisherTheme.primary_color};
             color: #FFF;
             opacity: 0.5;
      }
      ::selection {
             background-color: ${props.publisherTheme.primary_color};
             color: #FFF;
             opacity: 0.5;
      }
      :root {
        --headlineLineHeight:  ${headlineLineHeight};
        --bodyLineHeight: ${bodyLineHeight};
      }`;
}

function mapStateToProps(state) {
  return {
    publisherTheme: state.qt.config["theme-attributes"] || {}
  };
}

export const Theme = connect(mapStateToProps, () => ({}))(ThemeBase);
