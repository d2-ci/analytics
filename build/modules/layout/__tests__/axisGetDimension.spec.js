"use strict";

var _axisGetDimension = require("../axisGetDimension");

var _testResources = require("../testResources");

var _dimensionGetId = require("../dimensionGetId");

describe('axisGetDimension', function () {
  it('should return the dimension specified by id', function () {
    var columnDimension = _testResources.TEST_AXIS_COLUMNS[0];
    var rowDimension = _testResources.TEST_AXIS_ROWS[0];
    expect((0, _axisGetDimension.axisGetDimension)(_testResources.TEST_AXIS_COLUMNS, (0, _dimensionGetId.dimensionGetId)(columnDimension))).toEqual(columnDimension);
    expect((0, _axisGetDimension.axisGetDimension)(_testResources.TEST_AXIS_COLUMNS, (0, _dimensionGetId.dimensionGetId)(rowDimension))).not.toEqual(columnDimension);
  });
});