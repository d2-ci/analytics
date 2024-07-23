"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _dataTypes = require("../../../modules/dataTypes.js");
var _dimensionListItem = require("../../../modules/dimensionListItem.js");
var _expressions = require("../../../modules/expressions.js");
var _DraggingItemStyle = _interopRequireDefault(require("./styles/DraggingItem.style.js"));
var _FormulaItemStyle = _interopRequireDefault(require("./styles/FormulaItem.style.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DraggingItem = _ref => {
  let {
    label,
    type,
    value
  } = _ref;
  const displayLabel = type === _expressions.EXPRESSION_TYPE_NUMBER ? value || label : label;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DraggingItemStyle.default.__hash} jsx-${_FormulaItemStyle.default.__hash}` + " " + ((0, _classnames.default)('dragging', 'content', {
      operator: type === _expressions.EXPRESSION_TYPE_OPERATOR,
      number: type === _expressions.EXPRESSION_TYPE_NUMBER,
      data: type === _expressions.EXPRESSION_TYPE_DATA
    }) || "")
  }, type === _expressions.EXPRESSION_TYPE_DATA && /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_DraggingItemStyle.default.__hash} jsx-${_FormulaItemStyle.default.__hash}` + " " + "icon"
  }, (0, _dimensionListItem.getIcon)(_dataTypes.DIMENSION_TYPE_DATA_ELEMENT)), /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_DraggingItemStyle.default.__hash} jsx-${_FormulaItemStyle.default.__hash}` + " " + "label"
  }, displayLabel)), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DraggingItemStyle.default.__hash
  }, _DraggingItemStyle.default), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _FormulaItemStyle.default.__hash
  }, _FormulaItemStyle.default));
};
DraggingItem.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  value: _propTypes.default.string
};
var _default = DraggingItem;
exports.default = _default;