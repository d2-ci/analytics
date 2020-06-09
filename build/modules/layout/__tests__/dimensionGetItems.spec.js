"use strict";

var _dimension = require("../dimension");

var _testResources = require("../testResources");

var _dimensionGetItems = require("../dimensionGetItems");

describe('dimensionGetItems', function () {
  it('should return the items in the dimension', function () {
    expect((0, _dimensionGetItems.dimensionGetItems)(_testResources.TEST_DIMENSION_1)).toEqual(_testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ITEMS.name]);
  });
  it('should return the default value', function () {
    expect((0, _dimensionGetItems.dimensionGetItems)('Not a dimension')).toEqual(_dimension.DIMENSION_PROP_ITEMS.defaultValue);
  });
});