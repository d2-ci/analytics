"use strict";

var _testResources = require("../testResources");

var _axisIsEmpty = require("../axisIsEmpty");

describe('axisIsEmpty', function () {
  it('should return true if the axis has no dimensions, otherwise false', function () {
    expect((0, _axisIsEmpty.axisIsEmpty)(_testResources.TEST_AXIS_COLUMNS)).toBe(false);
    expect((0, _axisIsEmpty.axisIsEmpty)(_testResources.TEST_AXIS_EMPTY)).toBe(true);
  });
});