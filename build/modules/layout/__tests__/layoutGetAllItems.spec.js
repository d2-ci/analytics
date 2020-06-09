"use strict";

var _layoutGetAllItems = require("../layoutGetAllItems");

var _testResources = require("../testResources");

describe('layoutGetAllItems', function () {
  it('should return all items in the layout', function () {
    expect((0, _layoutGetAllItems.layoutGetAllItems)(_testResources.TEST_LAYOUT)).toEqual(_testResources.TEST_ITEMS_IN_LAYOUT);
  });
});