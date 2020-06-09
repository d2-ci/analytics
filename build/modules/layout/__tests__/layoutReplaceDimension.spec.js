"use strict";

var _layoutReplaceDimension = require("../layoutReplaceDimension");

var _testResources = require("../testResources");

var _predefinedDimensions = require("../../predefinedDimensions");

var newOuDimensions = [{
  name: 'bob',
  occupation: 'the builder'
}];
describe('layoutReplaceDimension', function () {
  it('replaces the dimension in the provided layout', function () {
    var updatedLayout = (0, _layoutReplaceDimension.layoutReplaceDimension)(_testResources.TEST_LAYOUT, _predefinedDimensions.DIMENSION_ID_ORGUNIT, newOuDimensions);
    expect(updatedLayout.filters).toMatchObject([{
      dimension: 'ou',
      items: newOuDimensions
    }, _testResources.TEST_DIMENSION_4]);
  });
  it('returns layout unchanged if dimension not found', function () {
    var updatedLayout = (0, _layoutReplaceDimension.layoutReplaceDimension)(_testResources.TEST_LAYOUT, 'non-existing-dimension', newOuDimensions);
    expect(updatedLayout).toMatchObject(_testResources.TEST_LAYOUT);
  });
});