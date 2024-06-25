"use strict";

var _react = require("@storybook/react");

var _react2 = _interopRequireDefault(require("react"));

var _PeriodDimension = _interopRequireDefault(require("../components/PeriodDimension/PeriodDimension.js"));

var _index = require("../components/PeriodDimension/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const selectedPeriods = [{
  id: 'LAST_12_MONTHS',
  name: 'Last 12 months'
}];
(0, _react.storiesOf)('PeriodDimension', module).add('None selected', () => {
  return /*#__PURE__*/_react2.default.createElement(_PeriodDimension.default, {
    onSelect: selected => console.log(selected)
  });
});
(0, _react.storiesOf)('PeriodDimension', module).add('One selected', () => {
  return /*#__PURE__*/_react2.default.createElement(_PeriodDimension.default, {
    selectedPeriods: selectedPeriods,
    onSelect: selected => console.log(selected)
  });
});
(0, _react.storiesOf)('PeriodDimension', module).add('Monthly excluded', () => {
  return /*#__PURE__*/_react2.default.createElement(_PeriodDimension.default, {
    excludedPeriodTypes: [_index.MONTHLY],
    onSelect: selected => console.log(selected)
  });
});
(0, _react.storiesOf)('PeriodDimension', module).add('Weekly excluded', () => {
  return /*#__PURE__*/_react2.default.createElement(_PeriodDimension.default, {
    excludedPeriodTypes: [_index.WEEKLY, _index.WEEKLYWED, _index.WEEKLYTHU, _index.WEEKLYSAT, _index.WEEKLYSUN],
    onSelect: selected => console.log(selected)
  });
});
(0, _react.storiesOf)('PeriodDimension', module).add('All below Quarterly excluded', () => {
  return /*#__PURE__*/_react2.default.createElement(_PeriodDimension.default, {
    excludedPeriodTypes: [_index.DAILY, _index.WEEKLY, _index.WEEKLYWED, _index.WEEKLYTHU, _index.WEEKLYSAT, _index.WEEKLYSUN, _index.BIWEEKLY, _index.MONTHLY, _index.BIMONTHLY],
    onSelect: selected => console.log(selected)
  });
});
(0, _react.storiesOf)('PeriodDimension', module).add('Using right footer', () => {
  return /*#__PURE__*/_react2.default.createElement(_PeriodDimension.default, {
    rightFooter: /*#__PURE__*/_react2.default.createElement("div", {
      style: {
        padding: '8px',
        margin: '8px 0',
        border: '1px solid #f79533'
      }
    }, /*#__PURE__*/_react2.default.createElement("p", null, "Right footer goes here")),
    onSelect: selected => console.log(selected)
  });
});