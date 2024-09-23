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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FixedPeriodFilter = _ref => {
  let {
    allowedPeriodTypes,
    excludedPeriodTypes,
    currentPeriodType,
    currentYear,
    onSelectPeriodType,
    onSelectYear,
    dataTest
  } = _ref;
  const onlyAllowedTypeIsSelected = Array.isArray(allowedPeriodTypes) && allowedPeriodTypes.length === 1 && allowedPeriodTypes[0] === currentPeriodType;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_PeriodFilterStyle.default.__hash}` + " " + "leftSection"
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    label: _index.default.t('Period type'),
    onChange: _ref2 => {
      let {
        selected
      } = _ref2;
      return onSelectPeriodType(selected);
    },
    dense: true,
    selected: currentPeriodType,
    disabled: onlyAllowedTypeIsSelected,
    className: "filterElement",
    dataTest: `${dataTest}-period-type`
  }, (allowedPeriodTypes ? (0, _fixedPeriods.getFixedPeriodsOptions)().filter(option => allowedPeriodTypes.some(type => type === option.id)) : (0, _index2.filterPeriodTypesById)((0, _fixedPeriods.getFixedPeriodsOptions)(), excludedPeriodTypes)).map(option => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
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
    onChange: _ref3 => {
      let {
        value
      } = _ref3;
      return onSelectYear(value);
    },
    dense: true,
    dataTest: `${dataTest}-year`
  })), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PeriodFilterStyle.default.__hash
  }, _PeriodFilterStyle.default));
};
FixedPeriodFilter.defaultProps = {
  excludedPeriodTypes: []
};
FixedPeriodFilter.propTypes = {
  currentPeriodType: _propTypes.default.string.isRequired,
  currentYear: _propTypes.default.string.isRequired,
  onSelectPeriodType: _propTypes.default.func.isRequired,
  onSelectYear: _propTypes.default.func.isRequired,
  allowedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string),
  dataTest: _propTypes.default.string,
  excludedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = FixedPeriodFilter;
exports.default = _default;