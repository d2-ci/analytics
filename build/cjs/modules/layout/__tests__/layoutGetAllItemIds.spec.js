"use strict";

var _item = require("../item.js");
var _layoutGetAllItemIds = require("../layoutGetAllItemIds.js");
var _testResources = require("../testResources.js");
describe('layoutGetAllItemIds', () => {
  it('should return all item ids in the layout', () => {
    expect((0, _layoutGetAllItemIds.layoutGetAllItemIds)(_testResources.TEST_LAYOUT)).toEqual(_testResources.TEST_ITEMS_IN_LAYOUT.map(item => item[_item.ITEM_PROP_ID.name]));
  });
});