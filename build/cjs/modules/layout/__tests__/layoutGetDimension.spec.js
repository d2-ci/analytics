"use strict";

var _dimension = require("../dimension.js");

var _layoutGetDimension = require("../layoutGetDimension.js");

var _testResources = require("../testResources.js");

describe('layoutGetDimension', () => {
  it('should return true if the dimension id is found in the layout, otherwise false', () => {
    expect((0, _layoutGetDimension.layoutGetDimension)(_testResources.TEST_LAYOUT, _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name])).toEqual(_testResources.TEST_DIMENSION_1);
  });
});