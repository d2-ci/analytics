"use strict";

var _dimension = require("../dimension.js");

var _dimensionGetItemIds = require("../dimensionGetItemIds.js");

var _item = require("../item.js");

var _testResources = require("../testResources.js");

describe('dimensionGetItemIds', () => {
  it('should return the item ids in the dimension', () => {
    expect((0, _dimensionGetItemIds.dimensionGetItemIds)(_testResources.TEST_DIMENSION_1)).toEqual(_testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ITEMS.name].map(item => item[_item.ITEM_PROP_ID.name]));
  });
});