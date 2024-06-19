"use strict";

var _axis = require("../axis.js");

var _layoutHasDataDimension = require("../layoutHasDataDimension.js");

var _testResources = require("../testResources.js");

describe('layoutHasDataDimension', () => {
  it('should return true if the dx dimension is found in the layout, otherwise false', () => {
    expect((0, _layoutHasDataDimension.layoutHasDataDimension)(_testResources.TEST_LAYOUT)).toBe(true);
    const layoutWithoutData = { ..._testResources.TEST_LAYOUT,
      [_axis.AXIS_ID_COLUMNS]: _axis.AXIS.defaultValue
    };
    expect((0, _layoutHasDataDimension.layoutHasDataDimension)(layoutWithoutData)).toBe(false);
  });
});