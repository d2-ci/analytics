"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationList = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = require("../common/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InterpretationList = ({
  interpretationIdsByDate,
  onInterpretationClick,
  onReplyIconClick,
  disabled,
  dashboardRedirectUrl
}) => {
  const {
    fromServerDate
  } = (0, _appRuntime.useTimeZoneConversion)();
  return /*#__PURE__*/_react.default.createElement("ol", {
    "data-test": "interpretations-list",
    className: _style.default.dynamic([["4058400613", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]]]) + " " + "interpretation-groups"
  }, Object.keys(interpretationIdsByDate).map(date => /*#__PURE__*/_react.default.createElement("li", {
    key: date,
    className: _style.default.dynamic([["4058400613", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]]])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["4058400613", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]]]) + " " + "date-section"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconCalendar24, {
    color: _ui.colors.grey600
  }), /*#__PURE__*/_react.default.createElement("time", {
    dateTime: date,
    className: _style.default.dynamic([["4058400613", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]]]) + " " + "date-header"
  }, (0, _moment.default)(fromServerDate(date)).format('ll'))), /*#__PURE__*/_react.default.createElement("ol", {
    className: _style.default.dynamic([["4058400613", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]]]) + " " + "interpretation-list"
  }, interpretationIdsByDate[date].map(interpretationId => /*#__PURE__*/_react.default.createElement(_index.Interpretation, {
    key: interpretationId,
    id: interpretationId,
    onReplyIconClick: onReplyIconClick,
    dashboardRedirectUrl: dashboardRedirectUrl,
    disabled: disabled,
    onClick: onInterpretationClick
  }))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "4058400613",
    dynamic: [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]
  }, [`.date-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:${_ui.spacers.dp8};-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:${_ui.spacers.dp8};}`, `.date-header.__jsx-style-dynamic-selector{font-size:14px;font-weight:500;line-height:${_ui.spacers.dp16};color:${_ui.colors.grey800};}`, `.interpretation-groups.__jsx-style-dynamic-selector{margin:0;padding:0;padding-top:${_ui.spacers.dp12};list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:${_ui.spacers.dp12};}`, `.interpretation-list.__jsx-style-dynamic-selector{margin:0;padding-left:${_ui.spacers.dp32};list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:${_ui.spacers.dp4};}`]));
};
exports.InterpretationList = InterpretationList;
InterpretationList.propTypes = {
  interpretationIdsByDate: _propTypes.default.objectOf(_propTypes.default.arrayOf(_propTypes.default.string)).isRequired,
  onInterpretationClick: _propTypes.default.func.isRequired,
  onReplyIconClick: _propTypes.default.func.isRequired,
  dashboardRedirectUrl: _propTypes.default.string,
  disabled: _propTypes.default.bool
};