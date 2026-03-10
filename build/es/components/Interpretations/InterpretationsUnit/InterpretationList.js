import _JSXStyle from "styled-jsx/style";
import { useTimeZoneConversion } from '@dhis2/app-runtime';
import { IconCalendar24, colors, spacers } from '@dhis2/ui';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Interpretation } from '../common/index.js';
export const InterpretationList = ({
  interpretationIdsByDate,
  onInterpretationClick,
  onReplyIconClick,
  disabled,
  dashboardRedirectUrl
}) => {
  const {
    fromServerDate
  } = useTimeZoneConversion();
  return /*#__PURE__*/React.createElement("ol", {
    "data-test": "interpretations-list",
    className: _JSXStyle.dynamic([["4058400613", [spacers.dp8, spacers.dp8, spacers.dp16, colors.grey800, spacers.dp12, spacers.dp12, spacers.dp32, spacers.dp4]]]) + " " + "interpretation-groups"
  }, Object.keys(interpretationIdsByDate).map(date => /*#__PURE__*/React.createElement("li", {
    key: date,
    className: _JSXStyle.dynamic([["4058400613", [spacers.dp8, spacers.dp8, spacers.dp16, colors.grey800, spacers.dp12, spacers.dp12, spacers.dp32, spacers.dp4]]])
  }, /*#__PURE__*/React.createElement("div", {
    className: _JSXStyle.dynamic([["4058400613", [spacers.dp8, spacers.dp8, spacers.dp16, colors.grey800, spacers.dp12, spacers.dp12, spacers.dp32, spacers.dp4]]]) + " " + "date-section"
  }, /*#__PURE__*/React.createElement(IconCalendar24, {
    color: colors.grey600
  }), /*#__PURE__*/React.createElement("time", {
    dateTime: date,
    className: _JSXStyle.dynamic([["4058400613", [spacers.dp8, spacers.dp8, spacers.dp16, colors.grey800, spacers.dp12, spacers.dp12, spacers.dp32, spacers.dp4]]]) + " " + "date-header"
  }, moment(fromServerDate(date)).format('ll'))), /*#__PURE__*/React.createElement("ol", {
    className: _JSXStyle.dynamic([["4058400613", [spacers.dp8, spacers.dp8, spacers.dp16, colors.grey800, spacers.dp12, spacers.dp12, spacers.dp32, spacers.dp4]]]) + " " + "interpretation-list"
  }, interpretationIdsByDate[date].map(interpretationId => /*#__PURE__*/React.createElement(Interpretation, {
    key: interpretationId,
    id: interpretationId,
    onReplyIconClick: onReplyIconClick,
    dashboardRedirectUrl: dashboardRedirectUrl,
    disabled: disabled,
    onClick: onInterpretationClick
  }))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4058400613",
    dynamic: [spacers.dp8, spacers.dp8, spacers.dp16, colors.grey800, spacers.dp12, spacers.dp12, spacers.dp32, spacers.dp4]
  }, [`.date-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:${spacers.dp8};-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:${spacers.dp8};}`, `.date-header.__jsx-style-dynamic-selector{font-size:14px;font-weight:500;line-height:${spacers.dp16};color:${colors.grey800};}`, `.interpretation-groups.__jsx-style-dynamic-selector{margin:0;padding:0;padding-top:${spacers.dp12};list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:${spacers.dp12};}`, `.interpretation-list.__jsx-style-dynamic-selector{margin:0;padding-left:${spacers.dp32};list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:${spacers.dp4};}`]));
};
InterpretationList.propTypes = {
  interpretationIdsByDate: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onInterpretationClick: PropTypes.func.isRequired,
  onReplyIconClick: PropTypes.func.isRequired,
  dashboardRedirectUrl: PropTypes.string,
  disabled: PropTypes.bool
};