"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DateField = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DateField = _ref => {
  let {
    date
  } = _ref;
  const d = new Date(date);
  return /*#__PURE__*/_react.default.createElement("time", {
    dateTime: d.toISOString()
  }, (0, _moment.default)(date).format('L'));
};
exports.DateField = DateField;
DateField.propTypes = {
  date: _propTypes.default.string.isRequired
};
var _default = exports.default = DateField;