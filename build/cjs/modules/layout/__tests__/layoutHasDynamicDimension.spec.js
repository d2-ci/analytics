"use strict";

var _axis = require("../axis.js");
var _layoutHasDynamicDimension = require("../layoutHasDynamicDimension.js");
var _testResources = require("../testResources.js");
describe('layoutHasDynamicDimension', () => {
  it('should return true if a dynamic dimension id is found in the layout, otherwise false', () => {
    expect((0, _layoutHasDynamicDimension.layoutHasDynamicDimension)(_testResources.TEST_LAYOUT)).toBe(true);
    const layoutWithoutDynamicDimension = {
      ..._testResources.TEST_LAYOUT,
      [_axis.AXIS_ID_FILTERS]: _axis.AXIS.defaultValue
    };
    expect((0, _layoutHasDynamicDimension.layoutHasDynamicDimension)(layoutWithoutDynamicDimension)).toBe(false);
  });
});