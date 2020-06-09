"use strict";

var _layoutGetDimension = require("../layoutGetDimension");

var _dimension = require("../dimension");

var _testResources = require("../testResources");

describe('layoutGetDimension', function () {
  it('should return true if the dimension id is found in the layout, otherwise false', function () {
    expect((0, _layoutGetDimension.layoutGetDimension)(_testResources.TEST_LAYOUT, _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name])).toEqual(_testResources.TEST_DIMENSION_1);
  });
});