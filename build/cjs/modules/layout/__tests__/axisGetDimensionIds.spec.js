"use strict";

var _axis = require("../axis.js");

var _axisGetDimensionIds = require("../axisGetDimensionIds.js");

var _dimension = require("../dimension.js");

var _testResources = require("../testResources.js");

describe('axisGetDimensionIds', () => {
  it('should return the id of the dimensions in the axis', () => {
    const columnDimIds = _testResources.TEST_AXIS_COLUMNS.map(item => item[_dimension.DIMENSION_PROP_ID.name]);

    expect((0, _axisGetDimensionIds.axisGetDimensionIds)(_testResources.TEST_AXIS_COLUMNS)).toEqual(columnDimIds);
    expect((0, _axisGetDimensionIds.axisGetDimensionIds)(_testResources.TEST_AXIS_ROWS)).not.toEqual(columnDimIds);
  });
  it('should return the default value', () => {
    expect((0, _axisGetDimensionIds.axisGetDimensionIds)('Not an axis')).toEqual(_axis.AXIS.defaultValue);
  });
});