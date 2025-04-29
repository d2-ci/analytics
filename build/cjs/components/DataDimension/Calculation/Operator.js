"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _expressions = require("../../../modules/expressions.js");
var _FormulaItemStyle = _interopRequireDefault(require("./styles/FormulaItem.style.js"));
var _OperatorStyle = _interopRequireDefault(require("./styles/Operator.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Operator = _ref => {
  let {
    label,
    value,
    type,
    onDoubleClick
  } = _ref;
  const data = {
    label,
    value,
    type
  };
  const {
    attributes,
    listeners,
    setNodeRef,
    transform
  } = (0, _sortable.useSortable)({
    id: `operator-${label}`,
    data
  });
  const style = {
    transform: _utilities.CSS.Translate.toString(transform)
  };
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, attributes, listeners, {
    ref: setNodeRef,
    style: style,
    className: `jsx-${_FormulaItemStyle.default.__hash} jsx-${_OperatorStyle.default.__hash}` + " " + (listeners && listeners.className != null && listeners.className || attributes && attributes.className != null && attributes.className || "")
  }), /*#__PURE__*/_react.default.createElement("div", {
    "data-test": "operator",
    onDoubleClick: () => onDoubleClick(data),
    className: `jsx-${_FormulaItemStyle.default.__hash} jsx-${_OperatorStyle.default.__hash}` + " " + ((0, _classnames.default)('content', {
      operator: type === _expressions.EXPRESSION_TYPE_OPERATOR,
      number: type === _expressions.EXPRESSION_TYPE_NUMBER
    }) || "")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_FormulaItemStyle.default.__hash} jsx-${_OperatorStyle.default.__hash}`
  }, label)), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _FormulaItemStyle.default.__hash
  }, _FormulaItemStyle.default), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _OperatorStyle.default.__hash
  }, _OperatorStyle.default));
};
Operator.propTypes = {
  label: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  onDoubleClick: _propTypes.default.func.isRequired
};
var _default = exports.default = Operator;