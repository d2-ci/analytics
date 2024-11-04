"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _PeriodFilterStyle = _interopRequireDefault(require("./styles/PeriodFilter.style.js"));
var _index = require("./utils/index.js");
var _relativePeriods = require("./utils/relativePeriods.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RelativePeriodFilter = _ref => {
  let {
    currentFilter,
    onSelectFilter,
    dataTest,
    excludedPeriodTypes
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_PeriodFilterStyle.default.__hash}` + " " + "leftSection"
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    label: _d2I18n.default.t('Period type'),
    onChange: _ref2 => {
      let {
        selected
      } = _ref2;
      return onSelectFilter(selected);
    },
    dense: true,
    selected: currentFilter,
    className: "filterElement",
    dataTest: dataTest
  }, (0, _index.filterPeriodTypesById)((0, _relativePeriods.getRelativePeriodsOptions)(), excludedPeriodTypes).map(option => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    key: option.id,
    value: option.id,
    label: option.name,
    dataTest: `${dataTest}-option-${option.id}`
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PeriodFilterStyle.default.__hash
  }, _PeriodFilterStyle.default));
};
RelativePeriodFilter.propTypes = {
  currentFilter: _propTypes.default.string.isRequired,
  onSelectFilter: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  excludedPeriodTypes: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = RelativePeriodFilter;
exports.default = _default;