"use strict";

var _predefinedDimensions = require("../../predefinedDimensions.js");

var _layoutReplaceDimension = require("../layoutReplaceDimension.js");

var _testResources = require("../testResources.js");

const newOuDimensions = [{
  name: 'bob',
  occupation: 'the builder'
}];
describe('layoutReplaceDimension', () => {
  it('replaces the dimension in the provided layout', () => {
    const updatedLayout = (0, _layoutReplaceDimension.layoutReplaceDimension)(_testResources.TEST_LAYOUT, _predefinedDimensions.DIMENSION_ID_ORGUNIT, newOuDimensions);
    expect(updatedLayout.filters).toMatchObject([{
      dimension: 'ou',
      items: newOuDimensions
    }, _testResources.TEST_DIMENSION_4]);
  });
  it('returns layout unchanged if dimension not found', () => {
    const updatedLayout = (0, _layoutReplaceDimension.layoutReplaceDimension)(_testResources.TEST_LAYOUT, 'non-existing-dimension', newOuDimensions);
    expect(updatedLayout).toMatchObject(_testResources.TEST_LAYOUT);
  });
});