"use strict";

var _axisHasOuDimension = require("../axisHasOuDimension.js");

var _testResources = require("../testResources.js");

describe('axisHasOuDimension', () => {
  it('should return true if the ou dimension is found in the axis', () => {
    expect((0, _axisHasOuDimension.axisHasOuDimension)(_testResources.TEST_AXIS_COLUMNS)).toBe(false);
    expect((0, _axisHasOuDimension.axisHasOuDimension)(_testResources.TEST_AXIS_FILTERS)).toBe(true);
  });
});