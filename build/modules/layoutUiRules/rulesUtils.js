"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransferableDimensionPerAxisByVisType = exports.canDimensionBeAddedToAxisByVisType = exports.isAxisFullByVisType = exports.isDimensionLockedByVisType = exports.hasAxisTooManyItemsByVisType = void 0;

var _rules = require("./rules");

var _rulesHelper = require("./rulesHelper");

var hasAxisTooManyItemsByVisType = function hasAxisTooManyItemsByVisType(visType, axisId, numberOfItems) {
  var maxNumberOfItemsPerAxis = (0, _rulesHelper.getAxisMaxNumberOfItemsByVisType)(visType, axisId);
  return maxNumberOfItemsPerAxis ? numberOfItems > maxNumberOfItemsPerAxis : false;
};

exports.hasAxisTooManyItemsByVisType = hasAxisTooManyItemsByVisType;

var isDimensionLockedByVisType = function isDimensionLockedByVisType(visType, dimensionId) {
  return (0, _rulesHelper.getAllLockedDimIdsByVisType)(visType).includes(dimensionId);
};

exports.isDimensionLockedByVisType = isDimensionLockedByVisType;

var isAxisFullByVisType = function isAxisFullByVisType(visType, axisId, axisDimensionsCount) {
  return axisDimensionsCount >= (0, _rulesHelper.getAxisMaxNumberOfDimsByVisType)(visType, axisId);
};

exports.isAxisFullByVisType = isAxisFullByVisType;

var canDimensionBeAddedToAxisByVisType = function canDimensionBeAddedToAxisByVisType(visType, axis, axisId) {
  var axisIsFull = isAxisFullByVisType(visType, axisId, axis.length);
  var transferableDimension = getTransferableDimensionPerAxisByVisType(visType, axisId, axis); // 1 dimension allowed in axis
  // 1 dimension is already present and not locked
  // the dragged one can be added and will cause the old one to be moved to filters
  // what happens with max limit > 1, axis full and 1 or more locked dimensions?

  return !(axisIsFull && !transferableDimension);
};

exports.canDimensionBeAddedToAxisByVisType = canDimensionBeAddedToAxisByVisType;

var getTransferableDimensionPerAxisByVisType = function getTransferableDimensionPerAxisByVisType(visType, axisId, axis) {
  var lockedDimsByVisType = (0, _rules.getLockedDimsByVisType)(visType);
  var lockedDimIdsByAxis = Object.keys(lockedDimsByVisType).filter(function (dimId) {
    return lockedDimsByVisType[dimId] === axisId;
  }); // return the last "transferable" dimension, this needs to be adjusted
  // if we allow a defined max limit > 1 and the DND wants to drop the new
  // dimension in a specific position

  return axis.filter(function (dimId) {
    return !lockedDimIdsByAxis.includes(dimId);
  }).pop();
};

exports.getTransferableDimensionPerAxisByVisType = getTransferableDimensionPerAxisByVisType;