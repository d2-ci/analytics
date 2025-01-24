"use strict";

var _axisHasDataDimension = require("../axisHasDataDimension.js");
var _testResources = require("../testResources.js");
describe('axisHasDataDimension', () => {
  it('should return true if the dimension is found in the axis', () => {
    expect((0, _axisHasDataDimension.axisHasDataDimension)(_testResources.TEST_AXIS_COLUMNS)).toBe(true);
    expect((0, _axisHasDataDimension.axisHasDataDimension)(_testResources.TEST_AXIS_ROWS)).toBe(false);
  });
});