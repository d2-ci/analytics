"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "canDimensionBeAddedToAxis", {
  enumerable: true,
  get: function () {
    return _rulesUtils.canDimensionBeAddedToAxisByVisType;
  }
});
Object.defineProperty(exports, "getAllLockedDimensionIds", {
  enumerable: true,
  get: function () {
    return _rulesHelper.getAllLockedDimIdsByVisType;
  }
});
Object.defineProperty(exports, "getAvailableAxes", {
  enumerable: true,
  get: function () {
    return _rulesHelper.getAvailableAxesByVisType;
  }
});
Object.defineProperty(exports, "getAxisMaxNumberOfDimensions", {
  enumerable: true,
  get: function () {
    return _rulesHelper.getAxisMaxNumberOfDimsByVisType;
  }
});
Object.defineProperty(exports, "getAxisMaxNumberOfItems", {
  enumerable: true,
  get: function () {
    return _rulesHelper.getAxisMaxNumberOfItemsByVisType;
  }
});
Object.defineProperty(exports, "getAxisMinNumberOfDimensions", {
  enumerable: true,
  get: function () {
    return _rulesHelper.getAxisMinNumberOfDimsByVisType;
  }
});
Object.defineProperty(exports, "getAxisPerLockedDimension", {
  enumerable: true,
  get: function () {
    return _rulesHelper.getAxisPerLockedDimByVisType;
  }
});
Object.defineProperty(exports, "getDisallowedDimensions", {
  enumerable: true,
  get: function () {
    return _rulesHelper.getDisallowedDimsByVisType;
  }
});
Object.defineProperty(exports, "getTransferableDimension", {
  enumerable: true,
  get: function () {
    return _rulesUtils.getTransferableDimensionPerAxisByVisType;
  }
});
Object.defineProperty(exports, "hasAxisTooManyItems", {
  enumerable: true,
  get: function () {
    return _rulesUtils.hasAxisTooManyItemsByVisType;
  }
});
Object.defineProperty(exports, "isAxisFull", {
  enumerable: true,
  get: function () {
    return _rulesUtils.isAxisFullByVisType;
  }
});
Object.defineProperty(exports, "isDimensionLocked", {
  enumerable: true,
  get: function () {
    return _rulesUtils.isDimensionLockedByVisType;
  }
});

var _rulesHelper = require("./rulesHelper.js");

var _rulesUtils = require("./rulesUtils.js");