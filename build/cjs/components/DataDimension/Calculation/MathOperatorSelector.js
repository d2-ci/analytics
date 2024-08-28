"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _expressions = require("../../../modules/expressions.js");
var _Operator = _interopRequireDefault(require("./Operator.js"));
var _MathOperatorSelectorStyle = _interopRequireDefault(require("./styles/MathOperatorSelector.style.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MathOperatorSelector = _ref => {
  let {
    onDoubleClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_MathOperatorSelectorStyle.default.__hash}` + " " + "wrapper"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: `jsx-${_MathOperatorSelectorStyle.default.__hash}` + " " + "sub-header"
  }, _index.default.t('Math operators')), /*#__PURE__*/_react.default.createElement("div", {
    "data-test": "operators-list",
    className: `jsx-${_MathOperatorSelectorStyle.default.__hash}` + " " + "operators"
  }, (0, _expressions.getOperators)().map((_ref2, index) => {
    let {
      label,
      value,
      type
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_Operator.default, {
      key: `${label}-${index}`,
      label: label,
      value: value,
      type: type,
      index: index,
      onDoubleClick: onDoubleClick
    });
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _MathOperatorSelectorStyle.default.__hash
  }, _MathOperatorSelectorStyle.default));
};
MathOperatorSelector.propTypes = {
  onDoubleClick: _propTypes.default.func.isRequired
};
var _default = MathOperatorSelector;
exports.default = _default;