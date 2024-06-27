"use strict";

var _axisIsEmpty = require("../axisIsEmpty.js");

var _testResources = require("../testResources.js");

describe('axisIsEmpty', () => {
  it('should return true if the axis has no dimensions, otherwise false', () => {
    expect((0, _axisIsEmpty.axisIsEmpty)(_testResources.TEST_AXIS_COLUMNS)).toBe(false);
    expect((0, _axisIsEmpty.axisIsEmpty)(_testResources.TEST_AXIS_EMPTY)).toBe(true);
  });
});