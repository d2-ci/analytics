"use strict";

var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
var _react2 = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<InterpretationsAndDetailsToggler/>', () => {
  const noop = () => {};
  test('accepts an `onClick` prop', async () => {
    const user = _userEvent.default.setup();
    const onClick = jest.fn();
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.InterpretationsAndDetailsToggler, {
      onClick: onClick
    }));
    await user.click(_react.screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.InterpretationsAndDetailsToggler, {
      onClick: noop,
      dataTest: dataTest
    }));
    expect(_react.screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  test('accepts a `disabled` prop', () => {
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.InterpretationsAndDetailsToggler, {
      disabled: true,
      onClick: noop
    }));
    expect(_react.screen.getByRole('button')).toBeDisabled();
  });
  test('accepts an `isShowing` prop', () => {
    const showingDataTest = 'dhis2-analytics-interpretationsanddetailstoggler-showing';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.InterpretationsAndDetailsToggler, {
      onClick: noop
    }));
    expect(_react.screen.queryByTestId(showingDataTest)).not.toBeInTheDocument();
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.InterpretationsAndDetailsToggler, {
      isShowing: true,
      onClick: noop
    }));
    expect(_react.screen.getByTestId(showingDataTest)).toBeInTheDocument();
  });
});