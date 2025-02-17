"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarSidebar = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ToolbarSidebar = _ref => {
  let {
    children,
    dataTest,
    isHidden
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-test": dataTest,
    className: _style.default.dynamic([["1150014343", [_ui.colors.grey400]]]) + " " + ((0, _classnames.default)('container', {
      isHidden
    }) || "")
  }, children, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "1150014343",
    dynamic: [_ui.colors.grey400]
  }, [`div.__jsx-style-dynamic-selector{width:260px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-right:1px solid ${_ui.colors.grey400};}`, "div.isHidden.__jsx-style-dynamic-selector{display:none;}"]));
};
exports.ToolbarSidebar = ToolbarSidebar;
ToolbarSidebar.defaultProps = {
  dataTest: 'dhis2-analytics-toolbarsidebar'
};
ToolbarSidebar.propTypes = {
  children: _propTypes.default.node,
  dataTest: _propTypes.default.string,
  isHidden: _propTypes.default.bool
};