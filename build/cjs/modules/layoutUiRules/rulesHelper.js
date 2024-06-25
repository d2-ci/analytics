"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllLockedDimIdsByVisType = void 0;
Object.defineProperty(exports, "getAvailableAxesByVisType", {
  enumerable: true,
  get: function () {
    return _rules.getAvailableAxesByVisType;
  }
});
exports.getAxisPerLockedDimByVisType = exports.getAxisMinNumberOfDimsByVisType = exports.getAxisMaxNumberOfItemsByVisType = exports.getAxisMaxNumberOfDimsByVisType = void 0;
Object.defineProperty(exports, "getDisallowedDimsByVisType", {
  enumerable: true,
  get: function () {
    return _rules.getDisallowedDimsByVisType;
  }
});

var _rules = require("./rules.js");

// Selectors
const getAxisMaxNumberOfItemsByVisType = (visType, axisId) => (0, _rules.getMaxNumberOfItemsPerAxisByVisType)(visType)[axisId];

exports.getAxisMaxNumberOfItemsByVisType = getAxisMaxNumberOfItemsByVisType;

const getAxisMaxNumberOfDimsByVisType = (visType, axisId) => (0, _rules.getMaxNumberOfDimsPerAxisByVisType)(visType)[axisId];

exports.getAxisMaxNumberOfDimsByVisType = getAxisMaxNumberOfDimsByVisType;

const getAxisMinNumberOfDimsByVisType = (visType, axisId) => (0, _rules.getMinNumberOfDimsPerAxisByVisType)(visType)[axisId];

exports.getAxisMinNumberOfDimsByVisType = getAxisMinNumberOfDimsByVisType;

const getAxisPerLockedDimByVisType = (visType, dimensionId) => (0, _rules.getLockedDimsByVisType)(visType)[dimensionId];

exports.getAxisPerLockedDimByVisType = getAxisPerLockedDimByVisType;

const getAllLockedDimIdsByVisType = visType => Object.keys((0, _rules.getLockedDimsByVisType)(visType));

exports.getAllLockedDimIdsByVisType = getAllLockedDimIdsByVisType;