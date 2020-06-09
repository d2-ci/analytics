"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _axis = require("../axis");

var _layoutHasDynamicDimension = require("../layoutHasDynamicDimension");

var _testResources = require("../testResources");

describe('layoutHasDynamicDimension', function () {
  it('should return true if a dynamic dimension id is found in the layout, otherwise false', function () {
    expect((0, _layoutHasDynamicDimension.layoutHasDynamicDimension)(_testResources.TEST_LAYOUT)).toBe(true);
    var layoutWithoutDynamicDimension = (0, _objectSpread3.default)({}, _testResources.TEST_LAYOUT, (0, _defineProperty2.default)({}, _axis.AXIS_NAME_FILTERS, _axis.AXIS.defaultValue));
    expect((0, _layoutHasDynamicDimension.layoutHasDynamicDimension)(layoutWithoutDynamicDimension)).toBe(false);
  });
});