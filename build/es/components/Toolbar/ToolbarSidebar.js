import _JSXStyle from "styled-jsx/style";
import { colors } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
export const ToolbarSidebar = _ref => {
  let {
    children,
    dataTest,
    isHidden
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    "data-test": dataTest,
    className: _JSXStyle.dynamic([["1150014343", [colors.grey400]]]) + " " + (cx('container', {
      isHidden
    }) || "")
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1150014343",
    dynamic: [colors.grey400]
  }, [`div.__jsx-style-dynamic-selector{width:260px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-right:1px solid ${colors.grey400};}`, "div.isHidden.__jsx-style-dynamic-selector{display:none;}"]));
};
ToolbarSidebar.defaultProps = {
  dataTest: 'dhis2-analytics-toolbarsidebar'
};
ToolbarSidebar.propTypes = {
  children: PropTypes.node,
  dataTest: PropTypes.string,
  isHidden: PropTypes.bool
};