"use strict";

var _dimension = require("../dimension");

var _dimensionCreate = require("../dimensionCreate");

var _testResources = require("../testResources");

describe('dimensionCreate', function () {
  it('should return the created dimension', function () {
    var dimensionId = _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name];

    var itemIds = _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ITEMS.name].map(function (item) {
      return item.id;
    });

    expect((0, _dimensionCreate.dimensionCreate)(dimensionId, itemIds)).toEqual(_testResources.TEST_DIMENSION_1);
  });
});