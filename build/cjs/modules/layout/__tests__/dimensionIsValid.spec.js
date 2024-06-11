"use strict";

var _dimensionIsValid = require("../dimensionIsValid.js");
var _testResources = require("../testResources.js");
describe('dimensionIsValid', () => {
  it('should return true if required props are valid, otherwise false', () => {
    expect((0, _dimensionIsValid.dimensionIsValid)(_testResources.TEST_DIMENSION_1)).toBe(true);
    expect((0, _dimensionIsValid.dimensionIsValid)(_testResources.TEST_DIMENSION_INVALID_ID_1)).toBe(false);
    expect((0, _dimensionIsValid.dimensionIsValid)(_testResources.TEST_DIMENSION_INVALID_ID_2)).toBe(false);
  });
  it('should return true if all props are valid, otherwise false', () => {
    expect((0, _dimensionIsValid.dimensionIsValid)(_testResources.TEST_DIMENSION_1, {
      requireItems: true
    })).toBe(true);
    expect((0, _dimensionIsValid.dimensionIsValid)(_testResources.TEST_DIMENSION_INVALID_ITEMS_1, {
      requireItems: true
    })).toBe(false);
  });
});