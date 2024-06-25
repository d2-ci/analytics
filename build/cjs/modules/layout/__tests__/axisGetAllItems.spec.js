"use strict";

var _axisGetAllItems = require("../axisGetAllItems.js");

var _testResources = require("../testResources.js");

describe('axisGetAllItems', () => {
  it('should return all items in all dimensions in the axis', () => {
    expect((0, _axisGetAllItems.axisGetAllItems)(_testResources.TEST_AXIS_COLUMNS)).toEqual(_testResources.TEST_ITEMS_IN_AXIS_1);
    expect((0, _axisGetAllItems.axisGetAllItems)(_testResources.TEST_AXIS_COLUMNS)).not.toEqual(_testResources.TEST_ITEMS_IN_AXIS_2);
  });
});