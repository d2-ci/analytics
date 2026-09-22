"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _index = require("../index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('<HoverMenuListItem/>', () => {
  /* Some of the props for this component are included
   * in the mouse interaction tests for the HoverMenuBar.
   * Only the `className`, `dataTest`, `destructive` and
   * `icon` prop need to be verified here. */

  test('accepts a `className` prop', () => {
    const className = 'className';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
      className: className
    }));
    expect(_react.screen.getByTestId('dhis2-uicore-hovermenulistitem')).toHaveClass(className);
  });
  test('accepts a `dataTest` prop', () => {
    const dataTest = 'test';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
      dataTest: dataTest
    }));
    expect(_react.screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  test('accepts a `destructive` prop', () => {
    const dataTest = 'test';
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
      dataTest: dataTest,
      destructive: true
    }));
    expect(_react.screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  test('accepts an `icon` prop', () => {
    const dataTest = 'test';
    const iconText = 'I am an icon';
    const icon = /*#__PURE__*/_react2.default.createElement("span", {
      id: "testicon"
    }, iconText);
    (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_index.HoverMenuListItem, {
      dataTest: dataTest,
      icon: icon
    }));
    const iconWrapperEl = _react.screen.getByTestId(dataTest).firstChild;
    expect(iconWrapperEl).toBeInTheDocument();
    expect(iconWrapperEl).toHaveClass('icon');
    const iconEl = iconWrapperEl.closest('span');
    expect(iconEl).toHaveTextContent(iconText);
  });
});