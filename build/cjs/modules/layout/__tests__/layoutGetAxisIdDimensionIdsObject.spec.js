"use strict";

var _axis = require("../axis.js");

var _dimension = require("../dimension.js");

var _layoutGetAxisIdDimensionIdsObject = require("../layoutGetAxisIdDimensionIdsObject.js");

var _testResources = require("../testResources.js");

describe('layoutGetAxisIdDimensionIdsObject', () => {
  it('should return an axisId:[dimensionIds] object based on the layout', () => {
    const expectedState = {
      [_axis.AXIS_ID_COLUMNS]: _testResources.TEST_AXIS_COLUMNS.map(dimension => dimension[_dimension.DIMENSION_PROP_ID.name]),
      [_axis.AXIS_ID_ROWS]: _testResources.TEST_AXIS_ROWS.map(dimension => dimension[_dimension.DIMENSION_PROP_ID.name]),
      [_axis.AXIS_ID_FILTERS]: _testResources.TEST_AXIS_FILTERS.map(dimension => dimension[_dimension.DIMENSION_PROP_ID.name])
    };
    expect((0, _layoutGetAxisIdDimensionIdsObject.layoutGetAxisIdDimensionIdsObject)(_testResources.TEST_LAYOUT)).toEqual(expectedState);
  });
});