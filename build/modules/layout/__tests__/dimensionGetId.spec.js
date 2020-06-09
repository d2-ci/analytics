"use strict";

var _dimensionGetId = require("../dimensionGetId");

var _dimension = require("../dimension");

var _testResources = require("../testResources");

describe('dimensionGetId', function () {
  it('should return the dimension id', function () {
    expect((0, _dimensionGetId.dimensionGetId)(_testResources.TEST_DIMENSION_1)).toBe(_testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name]);
  });
});