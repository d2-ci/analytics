"use strict";

var _dimensionIsValid = require("../dimensionIsValid");

var _testResources = require("../testResources");

describe('dimensionIsValid', function () {
  it('should return true if required props are valid, otherwise false', function () {
    expect((0, _dimensionIsValid.dimensionIsValid)(_testResources.TEST_DIMENSION_1)).toBe(true);
    expect((0, _dimensionIsValid.dimensionIsValid)(_testResources.TEST_DIMENSION_INVALID_ID_1)).toBe(false);
    expect((0, _dimensionIsValid.dimensionIsValid)(_testResources.TEST_DIMENSION_INVALID_ID_2)).toBe(false);
  });
  it('should return true if all props are valid, otherwise false', function () {
    expect((0, _dimensionIsValid.dimensionIsValid)(_testResources.TEST_DIMENSION_1, {
      requireItems: true
    })).toBe(true);
    expect((0, _dimensionIsValid.dimensionIsValid)(_testResources.TEST_DIMENSION_INVALID_ITEMS_1, {
      requireItems: true
    })).toBe(false);
  });
});