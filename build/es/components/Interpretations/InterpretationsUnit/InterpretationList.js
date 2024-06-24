import _JSXStyle from "styled-jsx/style";
import { useTimeZoneConversion } from '@dhis2/app-runtime';
import { IconCalendar24, colors, spacers } from '@dhis2/ui';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Interpretation } from '../common/index.js';
const sortByCreatedDateDesc = (a, b) => {
  const dateA = a.created;
  const dateB = b.created;
  if (dateA < dateB) {
    return 1;
  }
  if (dateA > dateB) {
    return -1;
  }
  return 0;
};
export const InterpretationList = _ref => {
  let {
    currentUser,
    interpretations,
    onInterpretationClick,
    onLikeToggled,
    onReplyIconClick,
    refresh,
    disabled,
    dashboardRedirectUrl
  } = _ref;
  const {
    fromServerDate
  } = useTimeZoneConversion();
  const interpretationsByDate = interpretations.reduce((groupedInterpretations, interpretation) => {
    const date = interpretation.created.split('T')[0];
    if (date in groupedInterpretations) {
      groupedInterpretations[date].push(interpretation);
    } else {
      groupedInterpretations[date] = [interpretation];
    }
    return groupedInterpretations;
  }, {});
  return /*#__PURE__*/React.createElement("ol", {
    "data-test": "interpretations-list",
    className: _JSXStyle.dynamic([["4058400613", [spacers.dp8, spacers.dp8, spacers.dp16, colors.grey800, spacers.dp12, spacers.dp12, spacers.dp32, spacers.dp4]]]) + " " + "interpretation-groups"
  }, Object.keys(interpretationsByDate).sort().reverse().map(date => /*#__PURE__*/React.createElement("li", {
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
  }, interpretationsByDate[date].sort(sortByCreatedDateDesc).map(interpretation => /*#__PURE__*/React.createElement(Interpretation, {
    key: interpretation.id,
    interpretation: interpretation,
    currentUser: currentUser,
    onClick: onInterpretationClick,
    onLikeToggled: onLikeToggled,
    onReplyIconClick: onReplyIconClick,
    onDeleted: refresh,
    onUpdated: refresh,
    disabled: disabled,
    dashboardRedirectUrl: dashboardRedirectUrl
  }))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4058400613",
    dynamic: [spacers.dp8, spacers.dp8, spacers.dp16, colors.grey800, spacers.dp12, spacers.dp12, spacers.dp32, spacers.dp4]
  }, [`.date-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:${spacers.dp8};-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:${spacers.dp8};}`, `.date-header.__jsx-style-dynamic-selector{font-size:14px;font-weight:500;line-height:${spacers.dp16};color:${colors.grey800};}`, `.interpretation-groups.__jsx-style-dynamic-selector{margin:0;padding:0;padding-top:${spacers.dp12};list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:${spacers.dp12};}`, `.interpretation-list.__jsx-style-dynamic-selector{margin:0;padding-left:${spacers.dp32};list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:${spacers.dp4};}`]));
};
InterpretationList.propTypes = {
  currentUser: PropTypes.object.isRequired,
  interpretations: PropTypes.array.isRequired,
  refresh: PropTypes.func.isRequired,
  onInterpretationClick: PropTypes.func.isRequired,
  onLikeToggled: PropTypes.func.isRequired,
  onReplyIconClick: PropTypes.func.isRequired,
  dashboardRedirectUrl: PropTypes.string,
  disabled: PropTypes.bool
};