import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { IconChevronRight24, IconChevronLeft24 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import menuButtonStyles from './MenuButton.styles.js';
export const InterpretationsAndDetailsToggler = _ref => {
  let {
    onClick,
    dataTest,
    disabled,
    isShowing
  } = _ref;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    "data-test": dataTest,
    className: "jsx-1238484262 " + `jsx-${menuButtonStyles.__hash}`
  }, isShowing ? /*#__PURE__*/React.createElement(IconChevronRight24, null) : /*#__PURE__*/React.createElement(IconChevronLeft24, null), i18n.t('Interpretations and details'), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: menuButtonStyles.__hash
  }, menuButtonStyles), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "1238484262"
  }, ["button.jsx-1238484262{gap:8px;}"]));
};
InterpretationsAndDetailsToggler.defaultProps = {
  dataTest: 'dhis2-analytics-interpretationsanddetailstoggler'
};
InterpretationsAndDetailsToggler.propTypes = {
  onClick: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  isShowing: PropTypes.bool
};