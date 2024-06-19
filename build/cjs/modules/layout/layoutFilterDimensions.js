"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutFilterDimensions = void 0;

var _axis = require("./axis.js");

var _dimensionGetId = require("./dimensionGetId.js");

const layoutFilterDimensions = (layout, dimensionIds) => {
  const idArray = Array.isArray(dimensionIds) ? dimensionIds : [dimensionIds];
  const filteredLayout = Object.assign({}, layout);

  _axis.DEFAULT_AXIS_IDS.forEach(axisId => {
    if (_axis.AXIS.isValid(filteredLayout[axisId])) {
      filteredLayout[axisId] = filteredLayout[axisId].filter(dimension => !idArray.includes((0, _dimensionGetId.dimensionGetId)(dimension)));
    }
  });

  return filteredLayout;
};

exports.layoutFilterDimensions = layoutFilterDimensions;