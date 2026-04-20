import _JSXStyle from "styled-jsx/style";
import { spacers } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
const MessageStatsBar = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: _JSXStyle.dynamic([["161874495", [spacers.dp4]]]) + " " + "container"
}, children, /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "161874495",
  dynamic: [spacers.dp4]
}, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;gap:${spacers.dp4};}`]));
MessageStatsBar.propTypes = {
  children: PropTypes.node.isRequired
};
export { MessageStatsBar };