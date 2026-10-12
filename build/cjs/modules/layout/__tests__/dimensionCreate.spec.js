"use strict";

var _dimension = require("../dimension.js");
var _dimensionCreate = require("../dimensionCreate.js");
var _testResources = require("../testResources.js");
describe('dimensionCreate', () => {
  it('should return the created dimension', () => {
    const dimensionId = _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ID.name];
    const itemIds = _testResources.TEST_DIMENSION_1[_dimension.DIMENSION_PROP_ITEMS.name].map(item => item.id);
    expect((0, _dimensionCreate.dimensionCreate)(dimensionId, itemIds)).toEqual(_testResources.TEST_DIMENSION_1);
  });
});