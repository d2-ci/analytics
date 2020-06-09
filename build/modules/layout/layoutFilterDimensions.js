"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutFilterDimensions = void 0;

var _axis = require("./axis");

var _dimensionGetId = require("./dimensionGetId");

var layoutFilterDimensions = function layoutFilterDimensions(layout, dimensionIds) {
  var idArray = Array.isArray(dimensionIds) ? dimensionIds : [dimensionIds];
  var filteredLayout = Object.assign({}, layout);

  _axis.DEFAULT_AXIS_IDS.forEach(function (axisId) {
    if (_axis.AXIS.isValid(filteredLayout[axisId])) {
      filteredLayout[axisId] = filteredLayout[axisId].filter(function (dimension) {
        return !idArray.includes((0, _dimensionGetId.dimensionGetId)(dimension));
      });
    }
  });

  return filteredLayout;
};

exports.layoutFilterDimensions = layoutFilterDimensions;