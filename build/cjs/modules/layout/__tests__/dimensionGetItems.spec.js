"use strict";

var _dimension = require("../dimension.js");

var _dimensionGetItems = require("../dimensionGetItems.js");

var _testResources = require("../testResources.js");

describe('dimensionGetItems', () => {
  it('should return the items in the dimension', () => {
    expect((0, _dimensionGetItems.dimensionGetItems)(_testResources.TEST_DIMENSION_1)).toEqual(_testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ITEMS.name]);
  });
  it('should return the default value', () => {
    expect((0, _dimensionGetItems.dimensionGetItems)('Not a dimension')).toEqual(_dimension.DIMENSION_PROP_ITEMS.defaultValue);
  });
});