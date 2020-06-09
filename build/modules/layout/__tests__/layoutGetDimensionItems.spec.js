"use strict";

var _layoutGetDimensionItems = require("../layoutGetDimensionItems");

var _dimension = require("../dimension");

var _testResources = require("../testResources");

describe('layoutGetDimensionItems', function () {
  it('should return an array of items', function () {
    expect((0, _layoutGetDimensionItems.layoutGetDimensionItems)(_testResources.TEST_LAYOUT, _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name])).toEqual(_testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ITEMS.name]);
  });
  it('should return empty array as the dimension is not found', function () {
    expect((0, _layoutGetDimensionItems.layoutGetDimensionItems)(_testResources.TEST_LAYOUT, 'nonExistingId')).toEqual([]);
  });
});