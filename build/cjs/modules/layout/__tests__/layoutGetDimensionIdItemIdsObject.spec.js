"use strict";

var _dimension = require("../dimension.js");

var _item = require("../item.js");

var _layoutGetDimensionIdItemIdsObject = require("../layoutGetDimensionIdItemIdsObject.js");

var _testResources = require("../testResources.js");

describe('layoutGetDimensionIdItemIdsObject', () => {
  it('should return a dimensionId:[itemdIds] object based on the layout', () => {
    const expectedState = {};

    _testResources.TEST_DIMENSIONS_IN_LAYOUT.forEach(dimension => {
      expectedState[dimension[_dimension.DIMENSION_PROP_ID.name]] = dimension[_dimension.DIMENSION_PROP_ITEMS.name].map(item => item[_item.ITEM_PROP_ID.name]);
    });

    expect((0, _layoutGetDimensionIdItemIdsObject.layoutGetDimensionIdItemIdsObject)(_testResources.TEST_LAYOUT)).toEqual(expectedState);
  });
});