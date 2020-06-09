"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutReplaceDimension = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _axis = require("./axis");

var _axisHasDimension = require("./axisHasDimension");

var _dimensionIs = require("./dimensionIs");

var layoutReplaceDimension = function layoutReplaceDimension(layout, dimensionId, items) {
  var axisId = _axis.DEFAULT_AXIS_IDS.find(function (a) {
    return (0, _axisHasDimension.axisHasDimension)(layout[a], dimensionId);
  });

  if (!axisId) {
    return Object.assign({}, layout);
  }

  var newAxisDimensions = layout[axisId].map(function (dimension) {
    if ((0, _dimensionIs.dimensionIs)(dimension, dimensionId)) {
      return Object.assign({}, dimension, {
        items: items
      });
    }

    return dimension;
  });
  return Object.assign({}, layout, (0, _defineProperty2.default)({}, axisId, newAxisDimensions));
};

exports.layoutReplaceDimension = layoutReplaceDimension;