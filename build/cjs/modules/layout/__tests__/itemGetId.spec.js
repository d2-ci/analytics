"use strict";

var _item = require("../item.js");

var _itemGetId = require("../itemGetId.js");

var _testResources = require("../testResources.js");

describe('itemGetId', () => {
  it('should return the item id', () => {
    expect((0, _itemGetId.itemGetId)(_testResources.TEST_ITEM_1)).toBe(_testResources.TEST_ITEM_ID_1);
  });
  it('should return the default value', () => {
    expect((0, _itemGetId.itemGetId)('Not an item')).toBe(_item.ITEM_PROP_ID.defaultValue);
  });
});