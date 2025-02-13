import _JSXStyle from "styled-jsx/style";
import { spacers } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
const MessageStatsBar = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2534339265", [spacers.dp12]]]) + " " + "container"
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2534339265",
    dynamic: [spacers.dp12]
  }, [`.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:${spacers.dp12};}`]));
};
MessageStatsBar.propTypes = {
  children: PropTypes.node.isRequired
};
export { MessageStatsBar };