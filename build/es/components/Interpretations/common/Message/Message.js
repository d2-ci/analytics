import _JSXStyle from "styled-jsx/style";
import { useTimeZoneConversion } from '@dhis2/app-runtime';
import { UserAvatar, spacers, colors } from '@dhis2/ui';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { RichTextParser } from '../../../RichText/index.js';
const Message = _ref => {
  let {
    children,
    text,
    created,
    username
  } = _ref;
  const {
    fromServerDate
  } = useTimeZoneConversion();
  return /*#__PURE__*/React.createElement("li", {
    className: _JSXStyle.dynamic([["4031345705", [spacers.dp8, colors.grey100, spacers.dp8, colors.grey900, colors.grey600, colors.grey900, spacers.dp8]]]) + " " + "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["4031345705", [spacers.dp8, colors.grey100, spacers.dp8, colors.grey900, colors.grey600, colors.grey900, spacers.dp8]]]) + " " + "header"
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    name: username,
    extrasmall: true
  }), username, /*#__PURE__*/React.createElement("time", {
    dateTime: created,
    className: _JSXStyle.dynamic([["4031345705", [spacers.dp8, colors.grey100, spacers.dp8, colors.grey900, colors.grey600, colors.grey900, spacers.dp8]]])
  }, moment(fromServerDate(created)).format('lll'))), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["4031345705", [spacers.dp8, colors.grey100, spacers.dp8, colors.grey900, colors.grey600, colors.grey900, spacers.dp8]]]) + " " + "content"
  }, /*#__PURE__*/React.createElement(RichTextParser, null, text)), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["4031345705", [spacers.dp8, colors.grey100, spacers.dp8, colors.grey900, colors.grey600, colors.grey900, spacers.dp8]]]) + " " + "footer"
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4031345705",
    dynamic: [spacers.dp8, colors.grey100, spacers.dp8, colors.grey900, colors.grey600, colors.grey900, spacers.dp8]
  }, [`.container.__jsx-style-dynamic-selector{padding:${spacers.dp8};background-color:${colors.grey100};border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:${spacers.dp8};}`, `.header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:6px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:13px;line-height:16px;color:${colors.grey900};}`, `.header.__jsx-style-dynamic-selector time.__jsx-style-dynamic-selector{font-size:12px;color:${colors.grey600};}`, `.content.__jsx-style-dynamic-selector{font-size:14px;line-height:19px;color:${colors.grey900};word-break:break-word;white-space:pre-line;}`, ".content.__jsx-style-dynamic-selector p:first-child{margin:0;}", `.footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;gap:${spacers.dp8};}`]));
};
Message.propTypes = {
  children: PropTypes.node.isRequired,
  created: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};
export { Message };