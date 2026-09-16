"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ItemSelectorOneItemSelected = exports.ItemSelectorNoItemsSelected = exports.ItemSelectorDisabledItemSelected = void 0;
var _react = _interopRequireDefault(require("react"));
var _ItemSelector = _interopRequireDefault(require("../components/DynamicDimension/ItemSelector.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var _default = exports.default = {
  title: 'DynamicDimension'
};
const ItemSelectorNoItemsSelected = () => {
  return /*#__PURE__*/_react.default.createElement(_ItemSelector.default, {
    onSelect: selected => console.log(selected),
    onFetch: () => ({
      dimensionItems: items
    })
  });
};
exports.ItemSelectorNoItemsSelected = ItemSelectorNoItemsSelected;
ItemSelectorNoItemsSelected.story = {
  name: 'ItemSelector no items selected'
};
const ItemSelectorOneItemSelected = () => {
  return /*#__PURE__*/_react.default.createElement(_ItemSelector.default, {
    onSelect: selected => console.log(selected),
    onFetch: () => ({
      dimensionItems: items
    }),
    initialSelected: [items[2]].map(item => ({
      value: item.id,
      label: item.name
    }))
  });
};
exports.ItemSelectorOneItemSelected = ItemSelectorOneItemSelected;
ItemSelectorOneItemSelected.story = {
  name: 'ItemSelector one item selected'
};
const ItemSelectorDisabledItemSelected = () => {
  return /*#__PURE__*/_react.default.createElement(_ItemSelector.default, {
    onSelect: selected => console.log(selected),
    onFetch: () => ({
      dimensionItems: items
    }),
    initialSelected: [items[5]].map(item => ({
      value: item.id,
      label: item.name
    }))
  });
};
exports.ItemSelectorDisabledItemSelected = ItemSelectorDisabledItemSelected;
ItemSelectorDisabledItemSelected.story = {
  name: 'ItemSelector disabled item selected'
};