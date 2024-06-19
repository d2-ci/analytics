"use strict";

var _layoutGetAllDimensions = require("../layoutGetAllDimensions.js");

var _testResources = require("../testResources.js");

describe('layoutGetAllDimensions', () => {
  it('should return all dimensions in the layout', () => {
    expect((0, _layoutGetAllDimensions.layoutGetAllDimensions)(_testResources.TEST_LAYOUT)).toEqual(_testResources.TEST_DIMENSIONS_IN_LAYOUT);
  });
});