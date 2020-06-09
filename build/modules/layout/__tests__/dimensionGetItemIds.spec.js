"use strict";

var _dimensionGetItemIds = require("../dimensionGetItemIds");

var _testResources = require("../testResources");

var _dimension = require("../dimension");

var _item = require("../item");

describe('dimensionGetItemIds', function () {
  it('should return the item ids in the dimension', function () {
    expect((0, _dimensionGetItemIds.dimensionGetItemIds)(_testResources.TEST_DIMENSION_1)).toEqual(_testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ITEMS.name].map(function (item) {
      return item[_item.ITEM_PROP_ID.name];
    }));
  });
});