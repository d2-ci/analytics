"use strict";

var _react = require("@storybook/react");
var _react2 = _interopRequireDefault(require("react"));
var _ItemSelector = _interopRequireDefault(require("../components/DynamicDimension/ItemSelector.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const items = [{
  id: '1',
  name: 'One'
}, {
  id: '2',
  name: 'Two'
}, {
  id: '3',
  name: 'Three'
}, {
  id: '4',
  name: 'Four'
}, {
  id: '5',
  name: 'Five'
}, {
  id: '6',
  name: 'Six - disabled',
  disabled: true
}];
(0, _react.storiesOf)('DynamicDimension', module).add('ItemSelector no items selected', () => {
  return /*#__PURE__*/_react2.default.createElement(_ItemSelector.default, {
    onSelect: selected => console.log(selected),
    onFetch: () => ({
      dimensionItems: items
    })
  });
});
(0, _react.storiesOf)('DynamicDimension', module).add('ItemSelector one item selected', () => {
  return /*#__PURE__*/_react2.default.createElement(_ItemSelector.default, {
    onSelect: selected => console.log(selected),
    onFetch: () => ({
      dimensionItems: items
    }),
    initialSelected: [items[2]].map(item => ({
      value: item.id,
      label: item.name
    }))
  });
});
(0, _react.storiesOf)('DynamicDimension', module).add('ItemSelector disabled item selected', () => {
  return /*#__PURE__*/_react2.default.createElement(_ItemSelector.default, {
    onSelect: selected => console.log(selected),
    onFetch: () => ({
      dimensionItems: items
    }),
    initialSelected: [items[5]].map(item => ({
      value: item.id,
      label: item.name
    }))
  });
});