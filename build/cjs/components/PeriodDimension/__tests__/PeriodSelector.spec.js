"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _PeriodTransfer = _interopRequireDefault(require("../PeriodTransfer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test('PeriodSelector matched the snapshot', () => {
  const props = {
    initialSelectedPeriods: [],
    onSelect: jest.fn(),
    rightFooter: /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null),
    dataTest: 'period-dimension'
  };
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_PeriodTransfer.default, props));
  expect(container).toMatchSnapshot();
});