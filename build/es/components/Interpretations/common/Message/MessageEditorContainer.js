import _JSXStyle from "styled-jsx/style";
import { UserAvatar, spacers } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
const MessageEditorContainer = ({
  children,
  currentUserName,
  dataTest
}) => /*#__PURE__*/React.createElement("div", {
  "data-test": dataTest,
  className: _JSXStyle.dynamic([["3866204711", [spacers.dp8]]]) + " " + "container"
}, /*#__PURE__*/React.createElement("div", {
  className: _JSXStyle.dynamic([["3866204711", [spacers.dp8]]]) + " " + "avatar"
}, /*#__PURE__*/React.createElement(UserAvatar, {
  name: currentUserName,
  small: true
})), /*#__PURE__*/React.createElement("div", {
  className: _JSXStyle.dynamic([["3866204711", [spacers.dp8]]]) + " " + "editor"
}, children), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "3866204711",
  dynamic: [spacers.dp8]
}, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:${spacers.dp8};}`, ".avatar.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;margin-block-start:3px;}", ".editor.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;}"]));
MessageEditorContainer.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  children: PropTypes.node,
  dataTest: PropTypes.string
};
export { MessageEditorContainer };