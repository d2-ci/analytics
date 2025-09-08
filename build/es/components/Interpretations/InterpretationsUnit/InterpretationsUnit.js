import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { CircularLoader, IconChevronDown24, IconChevronUp24, colors, spacers, NoticeBox } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useInterpretationsList } from '../InterpretationsProvider/hooks.js';
import { InterpretationForm } from './InterpretationForm.js';
import { InterpretationList } from './InterpretationList.js';
export const InterpretationsUnit = ({
  type,
  id,
  visualizationHasTimeDimension = true,
  onInterpretationClick,
  onReplyIconClick,
  disabled,
  dashboardRedirectUrl
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const showNoTimeDimensionHelpText = type === 'eventVisualization' && !visualizationHasTimeDimension;
  const {
    data: interpretationIdsByDate,
    loading,
    error
  } = useInterpretationsList(type, id);
  return /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2839123256", [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]]]) + " " + (cx('container', {
      expanded: isExpanded
    }) || "")
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setIsExpanded(!isExpanded),
    className: _JSXStyle.dynamic([["2839123256", [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]]]) + " " + "header"
  }, /*#__PURE__*/React.createElement("span", {
    className: _JSXStyle.dynamic([["2839123256", [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]]]) + " " + "title"
  }, i18n.t('Interpretations')), isExpanded ? /*#__PURE__*/React.createElement(IconChevronUp24, {
    color: colors.grey700
  }) : /*#__PURE__*/React.createElement(IconChevronDown24, {
    color: colors.grey700
  })), isExpanded && /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["2839123256", [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]]]) + " " + "loader"
  }, /*#__PURE__*/React.createElement(CircularLoader, {
    small: true
  })), error && /*#__PURE__*/React.createElement(NoticeBox, {
    error: true,
    title: i18n.t('Error loading interpretations')
  }, error.message || i18n.t('Could not load interpretations')), interpretationIdsByDate && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InterpretationForm, {
    type: type,
    id: id,
    disabled: disabled,
    showNoTimeDimensionHelpText: showNoTimeDimensionHelpText
  }), /*#__PURE__*/React.createElement(InterpretationList, {
    interpretationIdsByDate: interpretationIdsByDate,
    onInterpretationClick: onInterpretationClick,
    onReplyIconClick: onReplyIconClick,
    disabled: disabled,
    dashboardRedirectUrl: dashboardRedirectUrl
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2839123256",
    dynamic: [spacers.dp16, colors.grey400, colors.white, spacers.dp32, colors.grey900]
  }, [`.container.__jsx-style-dynamic-selector{position:relative;padding:${spacers.dp16};border-bottom:1px solid ${colors.grey400};background-color:${colors.white};}`, `.expanded.__jsx-style-dynamic-selector{padding-bottom:${spacers.dp32};}`, ".loader.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer;}", `.title.__jsx-style-dynamic-selector{font-size:16px;font-weight:500;line-height:21px;color:${colors.grey900};}`]));
};
InterpretationsUnit.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onInterpretationClick: PropTypes.func.isRequired,
  dashboardRedirectUrl: PropTypes.string,
  disabled: PropTypes.bool,
  visualizationHasTimeDimension: PropTypes.bool,
  onReplyIconClick: PropTypes.func
};