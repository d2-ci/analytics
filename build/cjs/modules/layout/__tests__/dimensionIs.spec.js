"use strict";

var _dimension = require("../dimension.js");

var _dimensionIs = require("../dimensionIs.js");

var _testResources = require("../testResources.js");

describe('dimensionIs', () => {
  it('should return true if it is the specified dimension, otherwise false', () => {
    expect((0, _dimensionIs.dimensionIs)(_testResources.TEST_DIMENSION_1, _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name])).toBe(true);
    expect((0, _dimensionIs.dimensionIs)(_testResources.TEST_DIMENSION_2, _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name])).toBe(false);
  });
});