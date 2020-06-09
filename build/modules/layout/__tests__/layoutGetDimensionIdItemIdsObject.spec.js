"use strict";

var _layoutGetDimensionIdItemIdsObject = require("../layoutGetDimensionIdItemIdsObject");

var _dimension = require("../dimension");

var _item = require("../item");

var _testResources = require("../testResources");

describe('layoutGetDimensionIdItemIdsObject', function () {
  it('should return a dimensionId:[itemdIds] object based on the layout', function () {
    var expectedState = {};

    _testResources.TEST_DIMENSIONS_IN_LAYOUT.forEach(function (dimension) {
      expectedState[dimension[_dimension.DIMENSION_PROP_ID.name]] = dimension[_dimension.DIMENSION_PROP_ITEMS.name].map(function (item) {
        return item[_item.ITEM_PROP_ID.name];
      });
    });

    expect((0, _layoutGetDimensionIdItemIdsObject.layoutGetDimensionIdItemIdsObject)(_testResources.TEST_LAYOUT)).toEqual(expectedState);
  });
});