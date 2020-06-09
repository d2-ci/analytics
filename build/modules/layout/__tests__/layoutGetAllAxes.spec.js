"use strict";

var _layoutGetAllAxes = require("../layoutGetAllAxes");

var _testResources = require("../testResources");

describe('layoutGetAllAxes', function () {
  it('should return all axes in the layout', function () {
    expect((0, _layoutGetAllAxes.layoutGetAllAxes)(_testResources.TEST_LAYOUT)).toEqual(_testResources.TEST_AXES_IN_LAYOUT);
  });
});