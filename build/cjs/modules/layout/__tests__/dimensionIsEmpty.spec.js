"use strict";

var _dimensionIsEmpty = require("../dimensionIsEmpty.js");

var _testResources = require("../testResources.js");

describe('dimensionIsEmpty', () => {
  it('should return true if the dimension has no items', () => {
    expect((0, _dimensionIsEmpty.dimensionIsEmpty)(_testResources.TEST_DIMENSION_1)).toEqual(false);
    expect((0, _dimensionIsEmpty.dimensionIsEmpty)(_testResources.TEST_DIMENSION_EMPTY_1)).toEqual(true);
  });
});