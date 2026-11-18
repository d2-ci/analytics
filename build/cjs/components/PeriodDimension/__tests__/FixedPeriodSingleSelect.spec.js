"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _FixedPeriodSelect = _interopRequireDefault(require("../FixedPeriodSelect.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test('FixedPeriodSelect renders correctly', () => {
  const props = {
    value: '201405',
    onChange: () => {}
  };
  (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_FixedPeriodSelect.default, props));
  expect(_react.screen.getByTestId('dhis2-analytics-fixedperiodselect')).toBeInTheDocument();
  expect(_react.screen.getByText('Period type')).toBeInTheDocument();
  expect(_react.screen.getByText('Monthly')).toBeInTheDocument();
  expect(_react.screen.getByText('Year')).toBeInTheDocument();
  const yearSelectEl = _react.screen.getByPlaceholderText('Select year');
  expect(yearSelectEl).toBeInTheDocument();
  expect(yearSelectEl.value).toEqual('2014');
});