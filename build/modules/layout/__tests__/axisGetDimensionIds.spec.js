"use strict";

var _axis = require("../axis");

var _axisGetDimensionIds = require("../axisGetDimensionIds");

var _dimension = require("../dimension");

var _testResources = require("../testResources");

describe('axisGetDimensionIds', function () {
  it('should return the id of the dimensions in the axis', function () {
    var columnDimIds = _testResources.TEST_AXIS_COLUMNS.map(function (item) {
      return item[_dimension.DIMENSION_PROP_ID.name];
    });

    expect((0, _axisGetDimensionIds.axisGetDimensionIds)(_testResources.TEST_AXIS_COLUMNS)).toEqual(columnDimIds);
    expect((0, _axisGetDimensionIds.axisGetDimensionIds)(_testResources.TEST_AXIS_ROWS)).not.toEqual(columnDimIds);
  });
  it('should return the default value', function () {
    expect((0, _axisGetDimensionIds.axisGetDimensionIds)('Not an axis')).toEqual(_axis.AXIS.defaultValue);
  });
});