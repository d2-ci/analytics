"use strict";

var _axisHasDimension = require("../axisHasDimension.js");

var _dimension = require("../dimension.js");

var _testResources = require("../testResources.js");

describe('axisHasDimension', () => {
  it('should return true if the dimension is found in the axis, otherwise false', () => {
    expect((0, _axisHasDimension.axisHasDimension)(_testResources.TEST_AXIS_COLUMNS, _testResources.TEST_AXIS_COLUMNS[0][_dimension.DIMENSION_PROP_ID.name])).toBe(true);
    expect((0, _axisHasDimension.axisHasDimension)(_testResources.TEST_AXIS_COLUMNS, _testResources.TEST_AXIS_ROWS[0][_dimension.DIMENSION_PROP_ID.name])).toBe(false);
  });
});