"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _PeriodFilterStyle = _interopRequireDefault(require("./styles/PeriodFilter.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FixedPeriodFilter = ({
  availableOptions,
  currentPeriodType,
  currentYear,
  onSelectPeriodType,
  onSelectYear,
  dataTest
}) => {
  const onlyAllowedTypeIsSelected = availableOptions.length === 1 && availableOptions[0].id === currentPeriodType;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    "data-test": dataTest,
    className: `jsx-${_PeriodFilterStyle.default.__hash}` + " " + "leftSection"
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    label: _index.default.t('Period type'),
    onChange: ({
      selected
    }) => onSelectPeriodType(selected),
    dense: true,
    selected: currentPeriodType,
    disabled: onlyAllowedTypeIsSelected,
    className: "filterElement",
    dataTest: `${dataTest}-period-type`
  }, availableOptions.map(option => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    key: option.id,
    value: option.id,
    label: option.name,
    dataTest: `${dataTest}-period-type-option-${option.id}`
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_PeriodFilterStyle.default.__hash}` + " " + "rightSection"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    label: _index.default.t('Year'),
    className: "filterElement",
    type: "number",
    placeholder: _index.default.t('Select year'),
    value: currentYear,
    onChange: ({
      value
    }) => onSelectYear(value),
    dense: true,
    dataTest: `${dataTest}-year`
  })), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PeriodFilterStyle.default.__hash
  }, _PeriodFilterStyle.default));
};
FixedPeriodFilter.propTypes = {
  availableOptions: _propTypes.default.array.isRequired,
  currentPeriodType: _propTypes.default.string.isRequired,
  currentYear: _propTypes.default.string.isRequired,
  onSelectPeriodType: _propTypes.default.func.isRequired,
  onSelectYear: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string
};
var _default = exports.default = FixedPeriodFilter;