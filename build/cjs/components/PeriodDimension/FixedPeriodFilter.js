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
var _fixedPeriods = require("./utils/fixedPeriods.js");
var _index2 = require("./utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const EXCLUDED_PERIOD_TYPES_PROP_DEFAULT = [];
const FixedPeriodFilter = ({
  allowedPeriodTypes,
  excludedPeriodTypes = EXCLUDED_PERIOD_TYPES_PROP_DEFAULT,
  currentPeriodType,
  currentYear,
  onSelectPeriodType,
  onSelectYear,
  dataTest,
  availableOptions = null,
  supportsEnabledPeriodTypes = false
}) => {
  // Determine which period options to show
  let periodOptions;
  if (supportsEnabledPeriodTypes && availableOptions) {
    // v43+: Use server-provided enabled period types
    periodOptions = availableOptions;
  } else if (allowedPeriodTypes) {
    // Legacy: Filter by allowedPeriodTypes if provided
    periodOptions = (0, _fixedPeriods.getFixedPeriodsOptions)().filter(option => allowedPeriodTypes.some(type => type === option.id));
  } else {
    // v40-42: Filter by legacy excluded period types (keyHide*Periods system settings)
    periodOptions = (0, _index2.filterPeriodTypesById)((0, _fixedPeriods.getFixedPeriodsOptions)(), excludedPeriodTypes);
  }
  const onlyAllowedTypeIsSelected = periodOptions.length === 1 && periodOptions[0].id === currentPeriodType;
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
  }, periodOptions.map(option => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
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
  currentPeriodType: _propTypes.default.string.isRequired,
  currentYear: _propTypes.default.string.isRequired,
  onSelectPeriodType: _propTypes.default.func.isRequired,
  onSelectYear: _propTypes.default.func.isRequired,
  allowedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string),
  availableOptions: _propTypes.default.array,
  dataTest: _propTypes.default.string,
  excludedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string),
  supportsEnabledPeriodTypes: _propTypes.default.bool
};
var _default = exports.default = FixedPeriodFilter;