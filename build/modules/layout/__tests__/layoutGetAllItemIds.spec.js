"use strict";

var _layoutGetAllItemIds = require("../layoutGetAllItemIds");

var _testResources = require("../testResources");

var _item = require("../item");

describe('layoutGetAllItemIds', function () {
  it('should return all item ids in the layout', function () {
    expect((0, _layoutGetAllItemIds.layoutGetAllItemIds)(_testResources.TEST_LAYOUT)).toEqual(_testResources.TEST_ITEMS_IN_LAYOUT.map(function (item) {
      return item[_item.ITEM_PROP_ID.name];
    }));
  });
});