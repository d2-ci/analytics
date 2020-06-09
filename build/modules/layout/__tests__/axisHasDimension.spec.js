"use strict";

var _axisHasDimension = require("../axisHasDimension");

var _testResources = require("../testResources");

var _dimension = require("../dimension");

describe('axisHasDimension', function () {
  it('should return true if the dimension is found in the axis, otherwise false', function () {
    expect((0, _axisHasDimension.axisHasDimension)(_testResources.TEST_AXIS_COLUMNS, _testResources.TEST_AXIS_COLUMNS[0][_dimension.DIMENSION_PROP_ID.name])).toBe(true);
    expect((0, _axisHasDimension.axisHasDimension)(_testResources.TEST_AXIS_COLUMNS, _testResources.TEST_AXIS_ROWS[0][_dimension.DIMENSION_PROP_ID.name])).toBe(false);
  });
});