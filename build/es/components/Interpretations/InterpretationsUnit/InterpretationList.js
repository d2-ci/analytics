import _JSXStyle from "styled-jsx/style";
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
  return /*#__PURE__*/React.createElement("ol", {
    "data-test": "interpretations-list",
    className: "jsx-312161546" + " " + "interpretation-groups"
  }, Object.keys(interpretationIdsByDate).map(date => /*#__PURE__*/React.createElement("li", {
    key: date,
    className: "jsx-312161546"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "jsx-312161546" + " " + "interpretation-list"
  }, interpretationIdsByDate[date].map(interpretationId => /*#__PURE__*/React.createElement(Interpretation, {
    key: interpretationId,
    id: interpretationId,
    onReplyIconClick: onReplyIconClick,
    dashboardRedirectUrl: dashboardRedirectUrl,
    disabled: disabled,
    onClick: onInterpretationClick
  }))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "312161546"
  }, [".interpretation-groups.jsx-312161546{margin:0;padding:0;padding-block-start:20px;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:20px;}", ".interpretation-list.jsx-312161546{margin:0;padding-inline-start:0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:20px;}"]));
};
InterpretationList.propTypes = {
  interpretationIdsByDate: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onInterpretationClick: PropTypes.func.isRequired,
  onReplyIconClick: PropTypes.func.isRequired,
  dashboardRedirectUrl: PropTypes.string,
  disabled: PropTypes.bool
};