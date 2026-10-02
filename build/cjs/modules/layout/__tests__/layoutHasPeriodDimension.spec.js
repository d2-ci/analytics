"use strict";

var _axis = require("../axis.js");
var _layoutHasPeriodDimension = require("../layoutHasPeriodDimension.js");
var _testResources = require("../testResources.js");
describe('layoutHasPeriodDimension', () => {
  it('should return true if the pe dimension is found in the layout, otherwise false', () => {
    expect((0, _layoutHasPeriodDimension.layoutHasPeriodDimension)(_testResources.TEST_LAYOUT)).toBe(true);
    const layoutWithoutPeriod = {
      ..._testResources.TEST_LAYOUT,
      [_axis.AXIS_ID_ROWS]: _axis.AXIS.defaultValue
    };
    expect((0, _layoutHasPeriodDimension.layoutHasPeriodDimension)(layoutWithoutPeriod)).toBe(false);
  });
});