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
const RelativePeriodFilter = ({
  currentFilter,
  onSelectFilter,
  dataTest,
  availableOptions
}) => /*#__PURE__*/_react.default.createElement("div", {
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
}, availableOptions.map(option => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
  key: option.id,
  value: option.id,
  label: option.name,
  dataTest: `${dataTest}-period-type-option-${option.id}`
}))), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _PeriodFilterStyle.default.__hash
}, _PeriodFilterStyle.default));
RelativePeriodFilter.propTypes = {
  availableOptions: _propTypes.default.array.isRequired,
  currentFilter: _propTypes.default.string.isRequired,
  onSelectFilter: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string
};
var _default = exports.default = RelativePeriodFilter;