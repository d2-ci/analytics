import _JSXStyle from "styled-jsx/style";
import { useTimeZoneConversion } from '@dhis2/app-runtime';
import { spacers, colors, UserAvatar } from '@dhis2/ui';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { RichTextParser } from '../../../RichText/index.js';
const Message = ({
  children,
  text,
  created,
  username
}) => {
  const {
    fromServerDate
  } = useTimeZoneConversion();
  return /*#__PURE__*/React.createElement("li", {
    className: _JSXStyle.dynamic([["953262660", [spacers.dp8, colors.grey900, spacers.dp8, colors.grey600, colors.grey900, spacers.dp4, spacers.dp4]]]) + " " + "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["953262660", [spacers.dp8, colors.grey900, spacers.dp8, colors.grey600, colors.grey900, spacers.dp4, spacers.dp4]]]) + " " + "avatar"
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    name: username,
    small: true
  })), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["953262660", [spacers.dp8, colors.grey900, spacers.dp8, colors.grey600, colors.grey900, spacers.dp4, spacers.dp4]]]) + " " + "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["953262660", [spacers.dp8, colors.grey900, spacers.dp8, colors.grey600, colors.grey900, spacers.dp4, spacers.dp4]]]) + " " + "header"
  }, /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["953262660", [spacers.dp8, colors.grey900, spacers.dp8, colors.grey600, colors.grey900, spacers.dp4, spacers.dp4]]]) + " " + "username"
  }, username), /*#__PURE__*/React.createElement("time", {
    dateTime: created,
    className: _JSXStyle.dynamic([["953262660", [spacers.dp8, colors.grey900, spacers.dp8, colors.grey600, colors.grey900, spacers.dp4, spacers.dp4]]])
  }, moment(fromServerDate(created)).format('MMM D, YYYY [·] HH:mm'))), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["953262660", [spacers.dp8, colors.grey900, spacers.dp8, colors.grey600, colors.grey900, spacers.dp4, spacers.dp4]]]) + " " + "content"
  }, /*#__PURE__*/React.createElement(RichTextParser, null, text)), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["953262660", [spacers.dp8, colors.grey900, spacers.dp8, colors.grey600, colors.grey900, spacers.dp4, spacers.dp4]]]) + " " + "footer"
  }, children)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "953262660",
    dynamic: [spacers.dp8, colors.grey900, spacers.dp8, colors.grey600, colors.grey900, spacers.dp4, spacers.dp4]
  }, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:${spacers.dp8};padding:0;}`, ".avatar.__jsx-style-dynamic-selector{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding-top:6px;}", ".main.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;}", `.header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2px;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;font-size:14px;font-weight:500;line-height:18px;color:${colors.grey900};margin-block-end:${spacers.dp8};}`, `.header.__jsx-style-dynamic-selector time.__jsx-style-dynamic-selector{font-size:13px;line-height:16px;font-weight:400;color:${colors.grey600};}`, `.content.__jsx-style-dynamic-selector{font-size:14px;line-height:21px;color:${colors.grey900};word-break:break-word;}`, ".content.__jsx-style-dynamic-selector p{white-space:pre-line;}", ".content.__jsx-style-dynamic-selector p:first-child{margin:0;}", `.footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;gap:${spacers.dp4};margin-block-start:${spacers.dp4};}`]));
};
Message.propTypes = {
  children: PropTypes.node.isRequired,
  created: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};
export { Message };