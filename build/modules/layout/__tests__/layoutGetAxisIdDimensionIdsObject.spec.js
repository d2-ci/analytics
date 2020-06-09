"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _layoutGetAxisIdDimensionIdsObject = require("../layoutGetAxisIdDimensionIdsObject");

var _axis = require("../axis");

var _testResources = require("../testResources");

var _dimension = require("../dimension");

describe('layoutGetAxisIdDimensionIdsObject', function () {
  it('should return an axisId:[dimensionIds] object based on the layout', function () {
    var _expectedState;

    var expectedState = (_expectedState = {}, (0, _defineProperty2.default)(_expectedState, _axis.AXIS_ID_COLUMNS, _testResources.TEST_AXIS_COLUMNS.map(function (dimension) {
      return dimension[_dimension.DIMENSION_PROP_ID.name];
    })), (0, _defineProperty2.default)(_expectedState, _axis.AXIS_ID_ROWS, _testResources.TEST_AXIS_ROWS.map(function (dimension) {
      return dimension[_dimension.DIMENSION_PROP_ID.name];
    })), (0, _defineProperty2.default)(_expectedState, _axis.AXIS_ID_FILTERS, _testResources.TEST_AXIS_FILTERS.map(function (dimension) {
      return dimension[_dimension.DIMENSION_PROP_ID.name];
    })), _expectedState);
    expect((0, _layoutGetAxisIdDimensionIdsObject.layoutGetAxisIdDimensionIdsObject)(_testResources.TEST_LAYOUT)).toEqual(expectedState);
  });
});