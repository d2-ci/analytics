"use strict";

var _react = require("@testing-library/react");
var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));
var _react2 = _interopRequireDefault(require("react"));
var _DimensionsPanel = _interopRequireDefault(require("../DimensionsPanel.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const props = {
  dimensions: [{
    id: 'id1',
    name: 'Dimension 1'
  }, {
    id: 'id2',
    name: 'Dimension 2'
  }]
};
test('DimensionsPanel matches the snapshot', () => {
  const {
    container
  } = (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, props));
  expect(container).toMatchSnapshot();
});
test('DimensionsPanel renders a DimensionList component', () => {
  (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, props));
  const dimensionListComponent = _react.screen.getByTestId('dimension-list');
  expect(dimensionListComponent).toBeInTheDocument();
  const liElements = _react.screen.getAllByTestId('dimension-item');
  expect(liElements).toHaveLength(2);
  const dim1Element = _react.screen.getByText(props.dimensions[0].name);
  expect(dim1Element).toBeInTheDocument();
  const dim2Element = _react.screen.getByText(props.dimensions[1].name);
  expect(dim2Element).toBeInTheDocument();
});
test('DimensionsPanel can filter the dimension list', async () => {
  const user = _userEvent.default.setup();
  (0, _react.render)(/*#__PURE__*/_react2.default.createElement(_DimensionsPanel.default, props));
  const filterComponent = _react.screen.getByPlaceholderText('Filter dimensions');
  expect(filterComponent).toBeInTheDocument();
  await user.click(filterComponent);
  await user.keyboard('1');
  const liElements = _react.screen.getAllByTestId('dimension-item');
  expect(liElements).toHaveLength(1);
  const dim1Element = _react.screen.getByText(props.dimensions[0].name);
  expect(dim1Element).toBeInTheDocument();
  const dim2Element = _react.screen.queryByText(props.dimensions[1].name);
  expect(dim2Element).not.toBeInTheDocument();
});