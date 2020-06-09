"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAxisIdDimensionIdsObject = void 0;

var _axis = require("./axis");

var _axisGetDimensionIds = require("./axisGetDimensionIds");

var layoutGetAxisIdDimensionIdsObject = function layoutGetAxisIdDimensionIdsObject(layout) {
  return _axis.DEFAULT_AXIS_IDS.reduce(function (obj, axisId) {
    if (_axis.AXIS.isValid(layout[axisId])) {
      obj[axisId] = (0, _axisGetDimensionIds.axisGetDimensionIds)(layout[axisId]);
    }

    return obj;
  }, {});
};

exports.layoutGetAxisIdDimensionIdsObject = layoutGetAxisIdDimensionIdsObject;