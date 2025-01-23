"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceEmptyPlaceholder = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../../../locales/index.js"));
var _OptionsSelectorStyle = _interopRequireDefault(require("./styles/OptionsSelector.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SourceEmptyPlaceholder = _ref => {
  let {
    loading,
    searchTerm,
    options,
    dataTest
  } = _ref;
  return !loading && !options.length && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    "data-test": dataTest,
    className: `jsx-${_OptionsSelectorStyle.default.__hash}` + " " + "empty-list"
  }, searchTerm ? _index.default.t('No options found for "{{- searchTerm}}"', {
    searchTerm
  }) : _index.default.t('No options found')), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _OptionsSelectorStyle.default.__hash
  }, _OptionsSelectorStyle.default));
};
exports.SourceEmptyPlaceholder = SourceEmptyPlaceholder;
SourceEmptyPlaceholder.propTypes = {
  dataTest: _propTypes.default.string,
  loading: _propTypes.default.bool,
  options: _propTypes.default.array,
  searchTerm: _propTypes.default.string
};