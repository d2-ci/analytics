"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<HoverMenuDropdown/>', () => {
  /* Most of the props for this component are included
   * in the mouse interaction tests for the HoverMenuBar.
   * Only the `dataTest` prop needs to be verified here. */

  test('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuDropdown, {
      label: "test dropdown",
      dataTest: dataTest
    }, "children"));
    expect(_react.screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  test('accepts a `className` prop', () => {
    const className = 'test';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuDropdown, {
      label: "test dropdown",
      className: className
    }, "children"));
    expect(_react.screen.getByRole('button')).toHaveClass(className);
  });
});