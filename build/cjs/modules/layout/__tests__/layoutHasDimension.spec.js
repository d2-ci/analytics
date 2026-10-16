"use strict";

var _predefinedDimensions = require("../../predefinedDimensions.js");
var _axis = require("../axis.js");
var _layoutHasDimension = require("../layoutHasDimension.js");
var _testResources = require("../testResources.js");
describe('layoutHasDimension', () => {
  it('should return true if the dimension id is found in the layout, otherwise false', () => {
    expect((0, _layoutHasDimension.layoutHasDimension)(_testResources.TEST_LAYOUT, _predefinedDimensions.DIMENSION_ID_ORGUNIT)).toBe(true);
    const layoutWithoutPeriod = {
      ..._testResources.TEST_LAYOUT,
      [_axis.AXIS_ID_FILTERS]: _axis.AXIS.defaultValue
    };
    expect((0, _layoutHasDimension.layoutHasDimension)(layoutWithoutPeriod, _predefinedDimensions.DIMENSION_ID_ORGUNIT)).toBe(false);
  });
});