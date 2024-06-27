"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _FilterStyle = _interopRequireDefault(require("./styles/Filter.style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Filter = _ref => {
  let {
    text,
    onChange,
    onClear,
    placeholder,
    type,
    dataTest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_FilterStyle.default.__hash) + " " + "container"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    placeholder: placeholder,
    onChange: ref => ref.value.length ? onChange(ref.value) : onClear(),
    value: text,
    dense: true,
    type: type,
    dataTest: dataTest
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _FilterStyle.default.__hash
  }, _FilterStyle.default));
};

Filter.propTypes = {
  placeholder: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onClear: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  text: _propTypes.default.string
};
Filter.defaultProps = {
  type: 'text'
};
var _default = Filter;
exports.default = _default;