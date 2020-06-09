"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _layoutFilterDimensions = require("../layoutFilterDimensions");

var _dimension = require("../dimension");

var _axis = require("../axis");

var _testResources = require("../testResources");

describe('layoutFilterDimensions', function () {
  it('should return a copy of the layout without the specified dimensions', function () {
    var idsToFilter = _testResources.TEST_LAYOUT[_axis.AXIS_ID_FILTERS].map(function (dimension) {
      return dimension[_dimension.DIMENSION_PROP_ID.name];
    });

    var actualState = (0, _layoutFilterDimensions.layoutFilterDimensions)(_testResources.TEST_LAYOUT, idsToFilter);
    var expectedState = Object.assign({}, _testResources.TEST_LAYOUT, (0, _defineProperty2.default)({}, _axis.AXIS_ID_FILTERS, _axis.AXIS.defaultValue));
    expect(actualState).toEqual(expectedState);
  });
});