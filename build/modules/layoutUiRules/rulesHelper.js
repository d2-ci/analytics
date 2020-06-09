"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getAvailableAxesByVisType", {
  enumerable: true,
  get: function get() {
    return _rules.getAvailableAxesByVisType;
  }
});
Object.defineProperty(exports, "getDisallowedDimsByVisType", {
  enumerable: true,
  get: function get() {
    return _rules.getDisallowedDimsByVisType;
  }
});
exports.getAllLockedDimIdsByVisType = exports.getAxisPerLockedDimByVisType = exports.getAxisMinNumberOfDimsByVisType = exports.getAxisMaxNumberOfDimsByVisType = exports.getAxisMaxNumberOfItemsByVisType = void 0;

var _rules = require("./rules");

// Selectors
var getAxisMaxNumberOfItemsByVisType = function getAxisMaxNumberOfItemsByVisType(visType, axisId) {
  return (0, _rules.getMaxNumberOfItemsPerAxisByVisType)(visType)[axisId];
};

exports.getAxisMaxNumberOfItemsByVisType = getAxisMaxNumberOfItemsByVisType;

var getAxisMaxNumberOfDimsByVisType = function getAxisMaxNumberOfDimsByVisType(visType, axisId) {
  return (0, _rules.getMaxNumberOfDimsPerAxisByVisType)(visType)[axisId];
};

exports.getAxisMaxNumberOfDimsByVisType = getAxisMaxNumberOfDimsByVisType;

var getAxisMinNumberOfDimsByVisType = function getAxisMinNumberOfDimsByVisType(visType, axisId) {
  return (0, _rules.getMinNumberOfDimsPerAxisByVisType)(visType)[axisId];
};

exports.getAxisMinNumberOfDimsByVisType = getAxisMinNumberOfDimsByVisType;

var getAxisPerLockedDimByVisType = function getAxisPerLockedDimByVisType(visType, dimensionId) {
  return (0, _rules.getLockedDimsByVisType)(visType)[dimensionId];
};

exports.getAxisPerLockedDimByVisType = getAxisPerLockedDimByVisType;

var getAllLockedDimIdsByVisType = function getAllLockedDimIdsByVisType(visType) {
  return Object.keys((0, _rules.getLockedDimsByVisType)(visType));
};

exports.getAllLockedDimIdsByVisType = getAllLockedDimIdsByVisType;