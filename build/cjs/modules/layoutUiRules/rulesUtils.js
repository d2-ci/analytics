"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDimensionLockedByVisType = exports.isAxisFullByVisType = exports.hasDimensionTooManyItemsByVisType = exports.hasAxisTooManyItemsByVisType = exports.getTransferableDimensionPerAxisByVisType = exports.canDimensionBeAddedToAxisByVisType = void 0;
var _rules = require("./rules.js");
var _rulesHelper = require("./rulesHelper.js");
const hasAxisTooManyItemsByVisType = (visType, axisId, numberOfItems) => {
  const maxNumberOfItemsPerAxis = (0, _rulesHelper.getAxisMaxNumberOfItemsByVisType)(visType, axisId);
  return maxNumberOfItemsPerAxis && numberOfItems > maxNumberOfItemsPerAxis;
};
exports.hasAxisTooManyItemsByVisType = hasAxisTooManyItemsByVisType;
const hasDimensionTooManyItemsByVisType = (visType, dimensionId, numberOfItems) => {
  const maxNumberOfItemsPerDimension = (0, _rulesHelper.getDimMaxNumberOfItemsByVisType)(visType, dimensionId);
  return maxNumberOfItemsPerDimension && numberOfItems > maxNumberOfItemsPerDimension;
};
exports.hasDimensionTooManyItemsByVisType = hasDimensionTooManyItemsByVisType;
const isDimensionLockedByVisType = (visType, dimensionId) => (0, _rulesHelper.getAllLockedDimIdsByVisType)(visType).includes(dimensionId);
exports.isDimensionLockedByVisType = isDimensionLockedByVisType;
const isAxisFullByVisType = (visType, axisId, axisDimensionsCount) => axisDimensionsCount >= (0, _rulesHelper.getAxisMaxNumberOfDimsByVisType)(visType, axisId);
exports.isAxisFullByVisType = isAxisFullByVisType;
const canDimensionBeAddedToAxisByVisType = (visType, axis, axisId) => {
  const axisIsFull = isAxisFullByVisType(visType, axisId, axis.length);
  const transferableDimension = getTransferableDimensionPerAxisByVisType(visType, axisId, axis);

  // 1 dimension allowed in axis
  // 1 dimension is already present and not locked
  // the dragged one can be added and will cause the old one to be moved to filters
  // what happens with max limit > 1, axis full and 1 or more locked dimensions?
  return !(axisIsFull && !transferableDimension);
};
exports.canDimensionBeAddedToAxisByVisType = canDimensionBeAddedToAxisByVisType;
const getTransferableDimensionPerAxisByVisType = (visType, axisId, axis) => {
  const lockedDimsByVisType = (0, _rules.getLockedDimsByVisType)(visType);
  const lockedDimIdsByAxis = Object.keys(lockedDimsByVisType).filter(dimId => lockedDimsByVisType[dimId] === axisId);

  // return the last "transferable" dimension, this needs to be adjusted
  // if we allow a defined max limit > 1 and the DND wants to drop the new
  // dimension in a specific position
  return axis.filter(dimId => !lockedDimIdsByAxis.includes(dimId)).pop();
};
exports.getTransferableDimensionPerAxisByVisType = getTransferableDimensionPerAxisByVisType;