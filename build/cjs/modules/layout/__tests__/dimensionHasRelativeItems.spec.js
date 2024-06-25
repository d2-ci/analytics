"use strict";

var _dimensionHasRelativeItems = require("../dimensionHasRelativeItems.js");

var _testResources = require("../testResources.js");

describe('dimensionHasRelativeItems', () => {
  it('has relative items and should return true', () => {
    expect((0, _dimensionHasRelativeItems.dimensionHasRelativeItems)(_testResources.TEST_DIMENSION_5)).toBe(true);
  });
  it('has no relative items and should return false', () => {
    expect((0, _dimensionHasRelativeItems.dimensionHasRelativeItems)(_testResources.TEST_DIMENSION_1)).toBe(false);
  });
});