import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { CircularLoader, IconSync16, colors } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import menuButtonStyles from './MenuButton.styles.js';
export const UpdateButton = _ref => {
  let {
    onClick,
    disabled,
    loading,
    dataTest
  } = _ref;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    "data-test": dataTest,
    className: `jsx-${menuButtonStyles.__hash}` + " " + _JSXStyle.dynamic([["2364287882", [colors.blue700, colors.blue100, colors.blue200]]])
  }, loading ? /*#__PURE__*/React.createElement(CircularLoader, {
    extrasmall: true
  }) : /*#__PURE__*/React.createElement(IconSync16, null), i18n.t('Update'), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: menuButtonStyles.__hash
  }, menuButtonStyles), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2364287882",
    dynamic: [colors.blue700, colors.blue100, colors.blue200]
  }, [`button.__jsx-style-dynamic-selector{gap:8px;color:${colors.blue700};font-weight:500;}`, `button.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:enabled{background:${colors.blue100};}`, `button.__jsx-style-dynamic-selector:active{background:${colors.blue200};}`]));
};
UpdateButton.defaultProps = {
  dataTest: 'dhis2-analytics-updatebutton'
};
UpdateButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};