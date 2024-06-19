"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DetailSelector = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _dataTypes = require("../../modules/dataTypes.js");
var _DetailSelectorStyle = _interopRequireDefault(require("./styles/DetailSelector.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getOptions = () => ({
  [_dataTypes.TOTALS]: _index.default.t('Totals only'),
  [_dataTypes.DETAIL]: _index.default.t('Details only')
});
const DetailSelector = _ref => {
  let {
    currentValue,
    onChange,
    dataTest
  } = _ref;
  const options = getOptions();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DetailSelectorStyle.default.__hash}` + " " + "detail-container"
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    dataTest: dataTest,
    label: _index.default.t('Disaggregation'),
    selected: currentValue,
    onChange: ref => onChange(ref.selected),
    dense: true
  }, Object.entries(options).map(option => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: option[0],
    key: option[0],
    label: option[1],
    dataTest: `${dataTest}-option-${option[0]}`
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DetailSelectorStyle.default.__hash
  }, _DetailSelectorStyle.default));
};
exports.DetailSelector = DetailSelector;
DetailSelector.propTypes = {
  currentValue: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string
};
var _default = exports.default = DetailSelector;