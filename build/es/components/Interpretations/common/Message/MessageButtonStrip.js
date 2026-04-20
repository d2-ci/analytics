import _JSXStyle from "styled-jsx/style";
import { spacers } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
const MessageButtonStrip = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: _JSXStyle.dynamic([["2019161283", [spacers.dp4, spacers.dp4]]]) + " " + "container"
}, children, /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "2019161283",
  dynamic: [spacers.dp4, spacers.dp4]
}, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap-reverse;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;gap:${spacers.dp4};margin-block-start:${spacers.dp4};}`]));
MessageButtonStrip.propTypes = {
  children: PropTypes.node.isRequired
};
export { MessageButtonStrip };