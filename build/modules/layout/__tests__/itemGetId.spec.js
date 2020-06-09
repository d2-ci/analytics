"use strict";

var _itemGetId = require("../itemGetId");

var _testResources = require("../testResources");

var _item = require("../item");

describe('itemGetId', function () {
  it('should return the item id', function () {
    expect((0, _itemGetId.itemGetId)(_testResources.TEST_ITEM_1)).toBe(_testResources.TEST_ITEM_ID_1);
  });
  it('should return the default value', function () {
    expect((0, _itemGetId.itemGetId)('Not an item')).toBe(_item.ITEM_PROP_ID.defaultValue);
  });
});