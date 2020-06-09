"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _testResources = require("../testResources");

var _axis = require("../axis");

var _layoutHasDimension = require("../layoutHasDimension");

var _predefinedDimensions = require("../../predefinedDimensions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

describe('layoutHasDimension', function () {
  it('should return true if the dimension id is found in the layout, otherwise false', function () {
    expect((0, _layoutHasDimension.layoutHasDimension)(_testResources.TEST_LAYOUT, _predefinedDimensions.DIMENSION_ID_ORGUNIT)).toBe(true);

    var layoutWithoutPeriod = _objectSpread(_objectSpread({}, _testResources.TEST_LAYOUT), {}, (0, _defineProperty2.default)({}, _axis.AXIS_ID_FILTERS, _axis.AXIS.defaultValue));

    expect((0, _layoutHasDimension.layoutHasDimension)(layoutWithoutPeriod, _predefinedDimensions.DIMENSION_ID_ORGUNIT)).toBe(false);
  });
});