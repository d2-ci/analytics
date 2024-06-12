import _JSXStyle from "styled-jsx/style";
import { spacers } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';

const MessageButtonStrip = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["1819118406", [spacers.dp8, spacers.dp8]]]) + " " + "container"
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1819118406",
    dynamic: [spacers.dp8, spacers.dp8]
  }, [".container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:".concat(spacers.dp8, ";margin-top:").concat(spacers.dp8, ";}")]));
};

MessageButtonStrip.propTypes = {
  children: PropTypes.node.isRequired
};
export { MessageButtonStrip };