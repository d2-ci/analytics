import _JSXStyle from "styled-jsx/style";
import { colors } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
export const Toolbar = _ref => {
  let {
    children,
    dataTest
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    "data-test": dataTest,
    className: _JSXStyle.dynamic([["2617706539", [colors.grey400, colors.white]]])
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2617706539",
    dynamic: [colors.grey400, colors.white]
  }, [`div.__jsx-style-dynamic-selector{box-sizing:border-box;min-height:32px;max-height:32px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-bottom:1px solid ${colors.grey400};background-color:${colors.white};}`]));
};
Toolbar.defaultProps = {
  dataTest: 'dhis2-analytics-toolbar'
};
Toolbar.propTypes = {
  children: PropTypes.node,
  dataTest: PropTypes.string
};