"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationList = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
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
  return /*#__PURE__*/_react.default.createElement("ol", {
    "data-test": "interpretations-list",
    className: "jsx-312161546" + " " + "interpretation-groups"
  }, Object.keys(interpretationIdsByDate).map(date => /*#__PURE__*/_react.default.createElement("li", {
    key: date,
    className: "jsx-312161546"
  }, /*#__PURE__*/_react.default.createElement("ol", {
    className: "jsx-312161546" + " " + "interpretation-list"
  }, interpretationIdsByDate[date].map(interpretationId => /*#__PURE__*/_react.default.createElement(_index.Interpretation, {
    key: interpretationId,
    id: interpretationId,
    onReplyIconClick: onReplyIconClick,
    dashboardRedirectUrl: dashboardRedirectUrl,
    disabled: disabled,
    onClick: onInterpretationClick
  }))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "312161546"
  }, [".interpretation-groups.jsx-312161546{margin:0;padding:0;padding-block-start:20px;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:20px;}", ".interpretation-list.jsx-312161546{margin:0;padding-inline-start:0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:20px;}"]));
};
exports.InterpretationList = InterpretationList;
InterpretationList.propTypes = {
  interpretationIdsByDate: _propTypes.default.objectOf(_propTypes.default.arrayOf(_propTypes.default.string)).isRequired,
  onInterpretationClick: _propTypes.default.func.isRequired,
  onReplyIconClick: _propTypes.default.func.isRequired,
  dashboardRedirectUrl: _propTypes.default.string,
  disabled: _propTypes.default.bool
};