"use strict";

var _axisGetDimension = require("../axisGetDimension.js");

var _dimensionGetId = require("../dimensionGetId.js");

var _testResources = require("../testResources.js");

describe('axisGetDimension', () => {
  it('should return the dimension specified by id', () => {
    const columnDimension = _testResources.TEST_AXIS_COLUMNS[0];
    const rowDimension = _testResources.TEST_AXIS_ROWS[0];
    expect((0, _axisGetDimension.axisGetDimension)(_testResources.TEST_AXIS_COLUMNS, (0, _dimensionGetId.dimensionGetId)(columnDimension))).toEqual(columnDimension);
    expect((0, _axisGetDimension.axisGetDimension)(_testResources.TEST_AXIS_COLUMNS, (0, _dimensionGetId.dimensionGetId)(rowDimension))).not.toEqual(columnDimension);
  });
});