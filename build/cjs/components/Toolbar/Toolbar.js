"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _uiConstants = require("@dhis2/ui-constants");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Toolbar = _ref => {
  let {
    children,
    dataTest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-test": dataTest,
    className: _style.default.dynamic([["2617706539", [_uiConstants.colors.grey400, _uiConstants.colors.white]]])
  }, children, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2617706539",
    dynamic: [_uiConstants.colors.grey400, _uiConstants.colors.white]
  }, [`div.__jsx-style-dynamic-selector{box-sizing:border-box;min-height:32px;max-height:32px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-bottom:1px solid ${_uiConstants.colors.grey400};background-color:${_uiConstants.colors.white};}`]));
};
exports.Toolbar = Toolbar;
Toolbar.defaultProps = {
  dataTest: 'dhis2-analytics-toolbar'
};
Toolbar.propTypes = {
  children: _propTypes.default.node,
  dataTest: _propTypes.default.string
};