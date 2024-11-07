"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MetricSelector = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _dataSets = require("../../modules/dataSets.js");
var _dataTypes = require("../../modules/dataTypes.js");
var _MetricSelectorStyle = _interopRequireDefault(require("./styles/MetricSelector.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MetricSelector = _ref => {
  let {
    currentValue,
    onChange,
    dataTest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_MetricSelectorStyle.default.__hash}` + " " + "metric-container"
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    label: _index.default.t('Metric type'),
    selected: currentValue || _dataTypes.DIMENSION_TYPE_ALL,
    onChange: ref => onChange(ref.selected),
    dense: true,
    dataTest: dataTest
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: _dataTypes.DIMENSION_TYPE_ALL,
    key: _dataTypes.DIMENSION_TYPE_ALL,
    label: _index.default.t('All metrics'),
    dataTest: `${dataTest}-option-${_dataTypes.DIMENSION_TYPE_ALL}`
  }), _dataSets.DATA_SETS_CONSTANTS.map(option => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: option.id,
    key: option.id,
    label: option.getName(),
    dataTest: `${dataTest}-option-${option.id}`
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _MetricSelectorStyle.default.__hash
  }, _MetricSelectorStyle.default));
};
exports.MetricSelector = MetricSelector;
MetricSelector.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  currentValue: _propTypes.default.string,
  dataTest: _propTypes.default.string
};
var _default = exports.default = MetricSelector;