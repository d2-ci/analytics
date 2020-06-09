"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _testResources = require("../testResources");

var _axis = require("../axis");

var _layoutHasDimension = require("../layoutHasDimension");

var _fixedDimensions = require("../../fixedDimensions");

describe('layoutHasDimension', function () {
  it('should return true if the dimension id is found in the layout, otherwise false', function () {
    expect((0, _layoutHasDimension.layoutHasDimension)(_testResources.TEST_LAYOUT, _fixedDimensions.DIMENSION_ID_ORGUNIT)).toBe(true);
    var layoutWithoutPeriod = (0, _objectSpread3.default)({}, _testResources.TEST_LAYOUT, (0, _defineProperty2.default)({}, _axis.AXIS_NAME_FILTERS, _axis.AXIS.defaultValue));
    expect((0, _layoutHasDimension.layoutHasDimension)(layoutWithoutPeriod, _fixedDimensions.DIMENSION_ID_ORGUNIT)).toBe(false);
  });
});