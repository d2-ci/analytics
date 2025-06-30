"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _dataTypes = require("../../../modules/dataTypes.js");
var _dimensionListItem = require("../../../modules/dimensionListItem.js");
var _expressions = require("../../../modules/expressions.js");
var _DataElementOptionStyle = _interopRequireDefault(require("./styles/DataElementOption.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DataElementOption = _ref => {
  let {
    label,
    value,
    onDoubleClick
  } = _ref;
  const data = {
    label,
    value,
    type: _expressions.EXPRESSION_TYPE_DATA
  };
  const {
    attributes,
    listeners,
    setNodeRef,
    transform
  } = (0, _sortable.useSortable)({
    id: value,
    data
  });
  const style = {
    transform: _utilities.CSS.Translate.toString(transform)
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DataElementOptionStyle.default.__hash}` + " " + "wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", _extends({}, attributes, listeners, {
    ref: setNodeRef,
    style: style,
    className: `jsx-${_DataElementOptionStyle.default.__hash}` + " " + (listeners && listeners.className != null && listeners.className || attributes && attributes.className != null && attributes.className || "draggable-item")
  }), /*#__PURE__*/_react.default.createElement("div", {
    onDoubleClick: () => onDoubleClick(data),
    "data-test": "data-element-option",
    className: `jsx-${_DataElementOptionStyle.default.__hash}` + " " + "chip"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_DataElementOptionStyle.default.__hash}` + " " + "icon"
  }, (0, _dimensionListItem.getIcon)(_dataTypes.DIMENSION_TYPE_DATA_ELEMENT)), /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_DataElementOptionStyle.default.__hash}` + " " + "label"
  }, label))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DataElementOptionStyle.default.__hash
  }, _DataElementOptionStyle.default));
};
DataElementOption.propTypes = {
  label: _propTypes.default.string,
  value: _propTypes.default.string,
  onDoubleClick: _propTypes.default.func
};
var _default = exports.default = DataElementOption;