"use strict";

var _dimension = require("../dimension.js");
var _layoutGetDimensionItems = require("../layoutGetDimensionItems.js");
var _testResources = require("../testResources.js");
describe('layoutGetDimensionItems', () => {
  it('should return an array of items', () => {
    expect((0, _layoutGetDimensionItems.layoutGetDimensionItems)(_testResources.TEST_LAYOUT, _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name])).toEqual(_testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ITEMS.name]);
  });
  it('should return empty array as the dimension is not found', () => {
    expect((0, _layoutGetDimensionItems.layoutGetDimensionItems)(_testResources.TEST_LAYOUT, 'nonExistingId')).toEqual([]);
  });
});