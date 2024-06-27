"use strict";

var _dimension = require("../dimension.js");

var _dimensionGetId = require("../dimensionGetId.js");

var _testResources = require("../testResources.js");

describe('dimensionGetId', () => {
  it('should return the dimension id', () => {
    expect((0, _dimensionGetId.dimensionGetId)(_testResources.TEST_DIMENSION_1)).toBe(_testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name]);
  });
});