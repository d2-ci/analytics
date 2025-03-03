"use strict";

var _axis = require("../axis.js");
var _dimension = require("../dimension.js");
var _layoutFilterDimensions = require("../layoutFilterDimensions.js");
var _testResources = require("../testResources.js");
describe('layoutFilterDimensions', () => {
  it('should return a copy of the layout without the specified dimensions', () => {
    const idsToFilter = _testResources.TEST_LAYOUT[_axis.AXIS_ID_FILTERS].map(dimension => dimension[_dimension.DIMENSION_PROP_ID.name]);
    const actualState = (0, _layoutFilterDimensions.layoutFilterDimensions)(_testResources.TEST_LAYOUT, idsToFilter);
    const expectedState = Object.assign({}, _testResources.TEST_LAYOUT, {
      [_axis.AXIS_ID_FILTERS]: _axis.AXIS.defaultValue
    });
    expect(actualState).toEqual(expectedState);
  });
});