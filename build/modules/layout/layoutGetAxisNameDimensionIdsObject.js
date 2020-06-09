"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAxisNameDimensionIdsObject = void 0;

var _axis = require("./axis");

var _axisGetDimensionIds = require("./axisGetDimensionIds");

var layoutGetAxisNameDimensionIdsObject = function layoutGetAxisNameDimensionIdsObject(layout) {
  return _axis.AXIS_NAMES.reduce(function (obj, axisName) {
    if (_axis.AXIS.isValid(layout[axisName])) {
      obj[axisName] = (0, _axisGetDimensionIds.axisGetDimensionIds)(layout[axisName]);
    }

    return obj;
  }, {});
};

exports.layoutGetAxisNameDimensionIdsObject = layoutGetAxisNameDimensionIdsObject;