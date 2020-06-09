"use strict";

var _layoutGetAllDimensions = require("../layoutGetAllDimensions");

var _testResources = require("../testResources");

describe('layoutGetAllDimensions', function () {
  it('should return all dimensions in the layout', function () {
    expect((0, _layoutGetAllDimensions.layoutGetAllDimensions)(_testResources.TEST_LAYOUT)).toEqual(_testResources.TEST_DIMENSIONS_IN_LAYOUT);
  });
});