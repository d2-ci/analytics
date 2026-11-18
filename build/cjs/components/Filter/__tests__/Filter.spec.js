"use strict";

var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
var _react2 = _interopRequireDefault(require("react"));
var _Filter = _interopRequireDefault(require("../Filter.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const props = {
  placeholder: 'testplaceholder',
  text: '',
  onChange: jest.fn(),
  onClear: jest.fn()
};
test('Filter renders an InputField component ', () => {
  (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_Filter.default, props));
  const inputField = _react.screen.getByTestId('dhis2-uiwidgets-inputfield');
  expect(inputField).toBeInTheDocument();
});
test('Filter renders an input field with the given placeholder', () => {
  (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_Filter.default, props));
  const inputField = _react.screen.getByPlaceholderText(props.placeholder);
  expect(inputField).toBeInTheDocument();
});
test('Filter should call prop onClear if onChange receives text string with length < 1 (Ctrl-A  + BackSpace)', async () => {
  const user = _userEvent.default.setup();
  props.text = 'anotherTestString';
  (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_Filter.default, props));
  const inputField = _react.screen.getByPlaceholderText(props.placeholder);

  // focus on the input field in order to interact with it
  await user.click(inputField);
  await user.keyboard('{Control>}A{/Control}{Backspace}');
  expect(props.onClear).toHaveBeenCalledTimes(1);
});