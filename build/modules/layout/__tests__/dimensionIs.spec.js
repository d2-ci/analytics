"use strict";

var _testResources = require("../testResources");

var _dimension = require("../dimension");

var _dimensionIs = require("../dimensionIs");

describe('dimensionIs', function () {
  it('should return true if it is the specified dimension, otherwise false', function () {
    expect((0, _dimensionIs.dimensionIs)(_testResources.TEST_DIMENSION_1, _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name])).toBe(true);
    expect((0, _dimensionIs.dimensionIs)(_testResources.TEST_DIMENSION_2, _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name])).toBe(false);
  });
});