"use strict";

var _layoutGetAllItems = require("../layoutGetAllItems.js");
var _testResources = require("../testResources.js");
describe('layoutGetAllItems', () => {
  it('should return all items in the layout', () => {
    expect((0, _layoutGetAllItems.layoutGetAllItems)(_testResources.TEST_LAYOUT)).toEqual(_testResources.TEST_ITEMS_IN_LAYOUT);
  });
});