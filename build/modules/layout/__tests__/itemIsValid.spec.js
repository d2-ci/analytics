"use strict";

var _itemIsValid = require("../itemIsValid");

var _testResources = require("../testResources");

describe('itemIsValid', function () {
  it('should return true if valid, otherwise false', function () {
    expect((0, _itemIsValid.itemIsValid)(_testResources.TEST_ITEM_1)).toBe(true);
    expect((0, _itemIsValid.itemIsValid)(_testResources.TEST_ITEM_INVALID_1)).toBe(false);
    expect((0, _itemIsValid.itemIsValid)(_testResources.TEST_ITEM_INVALID_2)).toBe(false);
  });
});