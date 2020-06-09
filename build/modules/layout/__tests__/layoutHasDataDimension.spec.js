"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _testResources = require("../testResources");

var _axis = require("../axis");

var _layoutHasDataDimension = require("../layoutHasDataDimension");

describe('layoutHasDataDimension', function () {
  it('should return true if the dx dimension is found in the layout, otherwise false', function () {
    expect((0, _layoutHasDataDimension.layoutHasDataDimension)(_testResources.TEST_LAYOUT)).toBe(true);
    var layoutWithoutData = (0, _objectSpread3.default)({}, _testResources.TEST_LAYOUT, (0, _defineProperty2.default)({}, _axis.AXIS_NAME_COLUMNS, _axis.AXIS.defaultValue));
    expect((0, _layoutHasDataDimension.layoutHasDataDimension)(layoutWithoutData)).toBe(false);
  });
});