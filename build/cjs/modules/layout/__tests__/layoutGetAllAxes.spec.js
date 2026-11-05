"use strict";

var _layoutGetAllAxes = require("../layoutGetAllAxes.js");
var _testResources = require("../testResources.js");
describe('layoutGetAllAxes', () => {
  it('should return all axes in the layout', () => {
    expect((0, _layoutGetAllAxes.layoutGetAllAxes)(_testResources.TEST_LAYOUT)).toEqual(_testResources.TEST_AXES_IN_LAYOUT);
  });
});