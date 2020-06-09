"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _layoutGetAxisNameDimensionIdsObject = require("../layoutGetAxisNameDimensionIdsObject");

var _axis = require("../axis");

var _testResources = require("../testResources");

var _dimension = require("../dimension");

describe('layoutGetAxisNameDimensionIdsObject', function () {
  it('should return an axisName:[dimensionIds] object based on the layout', function () {
    var _expectedState;

    var expectedState = (_expectedState = {}, (0, _defineProperty2.default)(_expectedState, _axis.AXIS_NAME_COLUMNS, _testResources.TEST_AXIS_COLUMNS.map(function (dimension) {
      return dimension[_dimension.DIMENSION_PROP_ID.name];
    })), (0, _defineProperty2.default)(_expectedState, _axis.AXIS_NAME_ROWS, _testResources.TEST_AXIS_ROWS.map(function (dimension) {
      return dimension[_dimension.DIMENSION_PROP_ID.name];
    })), (0, _defineProperty2.default)(_expectedState, _axis.AXIS_NAME_FILTERS, _testResources.TEST_AXIS_FILTERS.map(function (dimension) {
      return dimension[_dimension.DIMENSION_PROP_ID.name];
    })), _expectedState);
    expect((0, _layoutGetAxisNameDimensionIdsObject.layoutGetAxisNameDimensionIdsObject)(_testResources.TEST_LAYOUT)).toEqual(expectedState);
  });
});