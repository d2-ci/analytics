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
var _index2 = require("./utils/index.js");
var _relativePeriods = require("./utils/relativePeriods.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RelativePeriodFilter = ({
  currentFilter,
  onSelectFilter,
  dataTest,
  excludedPeriodTypes,
  availableOptions = null,
  supportsEnabledPeriodTypes = false
}) => {
  // v43+: Use server-provided enabled options, v40-42: Use legacy excluded period types
  const periodOptions = supportsEnabledPeriodTypes && availableOptions ? availableOptions // Server-provided enabled period types
  : (0, _index2.filterPeriodTypesById)((0, _relativePeriods.getRelativePeriodsOptions)(), excludedPeriodTypes // Legacy keyHide*Periods system settings
  );
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-test": dataTest,
    className: `jsx-${_PeriodFilterStyle.default.__hash}` + " " + "leftSection"
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    label: _index.default.t('Period type'),
    onChange: ({
      selected
    }) => onSelectFilter(selected),
    dense: true,
    selected: currentFilter,
    className: "filterElement",
    dataTest: `${dataTest}-period-type`
  }, periodOptions.map(option => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    key: option.id,
    value: option.id,
    label: option.name,
    dataTest: `${dataTest}-period-type-option-${option.id}`
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PeriodFilterStyle.default.__hash
  }, _PeriodFilterStyle.default));
};
RelativePeriodFilter.propTypes = {
  currentFilter: _propTypes.default.string.isRequired,
  onSelectFilter: _propTypes.default.func.isRequired,
  availableOptions: _propTypes.default.array,
  dataTest: _propTypes.default.string,
  excludedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string),
  supportsEnabledPeriodTypes: _propTypes.default.bool
};
var _default = exports.default = RelativePeriodFilter;