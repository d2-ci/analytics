"use strict";

var _testResources = require("../testResources");

var _axisHasOuDimension = require("../axisHasOuDimension");

describe('axisHasOuDimension', function () {
  it('should return true if the ou dimension is found in the axis', function () {
    expect((0, _axisHasOuDimension.axisHasOuDimension)(_testResources.TEST_AXIS_COLUMNS)).toBe(false);
    expect((0, _axisHasOuDimension.axisHasOuDimension)(_testResources.TEST_AXIS_FILTERS)).toBe(true);
  });
});