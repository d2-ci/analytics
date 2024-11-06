"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WeeklyExcluded = exports.UsingRightFooter = exports.OneSelected = exports.NoneSelected = exports.MonthlyExcluded = exports.AllBelowQuarterlyExcluded = void 0;
var _react = _interopRequireDefault(require("react"));
var _PeriodDimension = _interopRequireDefault(require("../components/PeriodDimension/PeriodDimension.js"));
var _index = require("../components/PeriodDimension/utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const selectedPeriods = [{
  id: 'LAST_12_MONTHS',
  name: 'Last 12 months'
}];
var _default = exports.default = {
  title: 'PeriodDimension'
};
const NoneSelected = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    onSelect: selected => console.log(selected)
  });
};
exports.NoneSelected = NoneSelected;
NoneSelected.story = {
  name: 'None selected'
};
const OneSelected = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    selectedPeriods: selectedPeriods,
    onSelect: selected => console.log(selected)
  });
};
exports.OneSelected = OneSelected;
OneSelected.story = {
  name: 'One selected'
};
const MonthlyExcluded = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    excludedPeriodTypes: [_index.MONTHLY],
    onSelect: selected => console.log(selected)
  });
};
exports.MonthlyExcluded = MonthlyExcluded;
MonthlyExcluded.story = {
  name: 'Monthly excluded'
};
const WeeklyExcluded = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    excludedPeriodTypes: [_index.WEEKLY, _index.WEEKLYWED, _index.WEEKLYTHU, _index.WEEKLYSAT, _index.WEEKLYSUN],
    onSelect: selected => console.log(selected)
  });
};
exports.WeeklyExcluded = WeeklyExcluded;
WeeklyExcluded.story = {
  name: 'Weekly excluded'
};
const AllBelowQuarterlyExcluded = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    excludedPeriodTypes: [_index.DAILY, _index.WEEKLY, _index.WEEKLYWED, _index.WEEKLYTHU, _index.WEEKLYSAT, _index.WEEKLYSUN, _index.BIWEEKLY, _index.MONTHLY, _index.BIMONTHLY],
    onSelect: selected => console.log(selected)
  });
};
exports.AllBelowQuarterlyExcluded = AllBelowQuarterlyExcluded;
AllBelowQuarterlyExcluded.story = {
  name: 'All below Quarterly excluded'
};
const UsingRightFooter = () => {
  return /*#__PURE__*/_react.default.createElement(_PeriodDimension.default, {
    rightFooter: /*#__PURE__*/_react.default.createElement("div", {
      style: {
        padding: '8px',
        margin: '8px 0',
        border: '1px solid #f79533'
      }
    }, /*#__PURE__*/_react.default.createElement("p", null, "Right footer goes here")),
    onSelect: selected => console.log(selected)
  });
};
exports.UsingRightFooter = UsingRightFooter;
UsingRightFooter.story = {
  name: 'Using right footer'
};