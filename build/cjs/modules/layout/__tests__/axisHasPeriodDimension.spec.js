"use strict";

var _axisHasPeriodDimension = require("../axisHasPeriodDimension.js");

var _testResources = require("../testResources.js");

describe('axisHasPeriodDimension', () => {
  it('should return true if the dimension is found in the axis', () => {
    expect((0, _axisHasPeriodDimension.axisHasPeriodDimension)(_testResources.TEST_AXIS_COLUMNS)).toBe(false);
    expect((0, _axisHasPeriodDimension.axisHasPeriodDimension)(_testResources.TEST_AXIS_ROWS)).toBe(true);
  });
});