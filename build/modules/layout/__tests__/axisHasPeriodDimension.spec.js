"use strict";

var _testResources = require("../testResources");

var _axisHasPeriodDimension = require("../axisHasPeriodDimension");

describe('axisHasPeriodDimension', function () {
  it('should return true if the dimension is found in the axis', function () {
    expect((0, _axisHasPeriodDimension.axisHasPeriodDimension)(_testResources.TEST_AXIS_COLUMNS)).toBe(false);
    expect((0, _axisHasPeriodDimension.axisHasPeriodDimension)(_testResources.TEST_AXIS_ROWS)).toBe(true);
  });
});