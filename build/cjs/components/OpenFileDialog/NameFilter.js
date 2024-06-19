"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NameFilter = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NameFilter = _ref => {
  let {
    dataTest,
    value,
    onChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ui.Input, {
    type: "search",
    placeholder: _d2I18n.default.t('Filter by name'),
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return onChange(value);
    },
    value: value,
    initialFocus: true,
    dense: true,
    dataTest: dataTest
  });
};
exports.NameFilter = NameFilter;
NameFilter.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  value: _propTypes.default.string
};
var _default = exports.default = NameFilter;