import _JSXStyle from "styled-jsx/style";
import { UserAvatar, spacers } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
const MessageEditorContainer = _ref => {
  let {
    children,
    currentUser,
    dataTest
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    "data-test": dataTest,
    className: _JSXStyle.dynamic([["969803715", [spacers.dp8, spacers.dp12]]]) + " " + "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["969803715", [spacers.dp8, spacers.dp12]]]) + " " + "avatar"
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    name: currentUser.name,
    medium: true
  })), /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["969803715", [spacers.dp8, spacers.dp12]]]) + " " + "editor"
  }, children), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "969803715",
    dynamic: [spacers.dp8, spacers.dp12]
  }, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:${spacers.dp8};margin-top:${spacers.dp12};}`, ".avatar.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}", ".editor.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;}"]));
};
MessageEditorContainer.propTypes = {
  currentUser: PropTypes.object.isRequired,
  children: PropTypes.node,
  dataTest: PropTypes.string
};
export { MessageEditorContainer };