"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _testResources = require("../testResources");

var _axis = require("../axis");

var _layoutHasPeriodDimension = require("../layoutHasPeriodDimension");

describe('layoutHasPeriodDimension', function () {
  it('should return true if the pe dimension is found in the layout, otherwise false', function () {
    expect((0, _layoutHasPeriodDimension.layoutHasPeriodDimension)(_testResources.TEST_LAYOUT)).toBe(true);
    var layoutWithoutPeriod = (0, _objectSpread3.default)({}, _testResources.TEST_LAYOUT, (0, _defineProperty2.default)({}, _axis.AXIS_NAME_ROWS, _axis.AXIS.defaultValue));
    expect((0, _layoutHasPeriodDimension.layoutHasPeriodDimension)(layoutWithoutPeriod)).toBe(false);
  });
});