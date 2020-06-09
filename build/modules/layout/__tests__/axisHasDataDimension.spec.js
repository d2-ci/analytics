"use strict";

var _testResources = require("../testResources");

var _axisHasDataDimension = require("../axisHasDataDimension");

describe('axisHasDataDimension', function () {
  it('should return true if the dimension is found in the axis', function () {
    expect((0, _axisHasDataDimension.axisHasDataDimension)(_testResources.TEST_AXIS_COLUMNS)).toBe(true);
    expect((0, _axisHasDataDimension.axisHasDataDimension)(_testResources.TEST_AXIS_ROWS)).toBe(false);
  });
});