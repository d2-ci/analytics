"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _FixedPeriodSelect = _interopRequireDefault(require("../FixedPeriodSelect.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test('FixedPeriodSingleSelect matches the snapshot', () => {
  const props = {
    value: '201405',
    onChange: () => {}
  };
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_FixedPeriodSelect.default, props));
  expect(container).toMatchSnapshot();
});