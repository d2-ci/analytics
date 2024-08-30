"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutGetAxisIdDimensionIdsObject = void 0;

var _axis = require("./axis.js");

var _axisGetDimensionIds = require("./axisGetDimensionIds.js");

const layoutGetAxisIdDimensionIdsObject = layout => _axis.DEFAULT_AXIS_IDS.reduce((obj, axisId) => {
  if (_axis.AXIS.isValid(layout[axisId])) {
    obj[axisId] = (0, _axisGetDimensionIds.axisGetDimensionIds)(layout[axisId]);
  }

  return obj;
}, {});

exports.layoutGetAxisIdDimensionIdsObject = layoutGetAxisIdDimensionIdsObject;