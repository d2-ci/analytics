"use strict";

var _testResources = require("../testResources");

var _dimensionIsEmpty = require("../dimensionIsEmpty");

describe('dimensionIsEmpty', function () {
  it('should return true if the dimension has no items', function () {
    expect((0, _dimensionIsEmpty.dimensionIsEmpty)(_testResources.TEST_DIMENSION_1)).toEqual(false);
    expect((0, _dimensionIsEmpty.dimensionIsEmpty)(_testResources.TEST_DIMENSION_EMPTY_1)).toEqual(true);
  });
});