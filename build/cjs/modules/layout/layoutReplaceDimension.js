"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutReplaceDimension = void 0;

var _axis = require("./axis.js");

var _axisHasDimension = require("./axisHasDimension.js");

var _dimensionIs = require("./dimensionIs.js");

const layoutReplaceDimension = (layout, dimensionId, items) => {
  const axisId = _axis.DEFAULT_AXIS_IDS.find(a => (0, _axisHasDimension.axisHasDimension)(layout[a], dimensionId));

  if (!axisId) {
    return Object.assign({}, layout);
  }

  const newAxisDimensions = layout[axisId].map(dimension => {
    if ((0, _dimensionIs.dimensionIs)(dimension, dimensionId)) {
      return Object.assign({}, dimension, {
        items
      });
    }

    return dimension;
  });
  return Object.assign({}, layout, {
    [axisId]: newAxisDimensions
  });
};

exports.layoutReplaceDimension = layoutReplaceDimension;