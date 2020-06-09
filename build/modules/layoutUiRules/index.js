"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getAvailableAxes", {
  enumerable: true,
  get: function get() {
    return _rulesHelper.getAvailableAxesByVisType;
  }
});
Object.defineProperty(exports, "getDisallowedDimensions", {
  enumerable: true,
  get: function get() {
    return _rulesHelper.getDisallowedDimsByVisType;
  }
});
Object.defineProperty(exports, "getAxisMaxNumberOfItems", {
  enumerable: true,
  get: function get() {
    return _rulesHelper.getAxisMaxNumberOfItemsByVisType;
  }
});
Object.defineProperty(exports, "getAxisMaxNumberOfDimensions", {
  enumerable: true,
  get: function get() {
    return _rulesHelper.getAxisMaxNumberOfDimsByVisType;
  }
});
Object.defineProperty(exports, "getAxisMinNumberOfDimensions", {
  enumerable: true,
  get: function get() {
    return _rulesHelper.getAxisMinNumberOfDimsByVisType;
  }
});
Object.defineProperty(exports, "getAxisPerLockedDimension", {
  enumerable: true,
  get: function get() {
    return _rulesHelper.getAxisPerLockedDimByVisType;
  }
});
Object.defineProperty(exports, "getAllLockedDimensionIds", {
  enumerable: true,
  get: function get() {
    return _rulesHelper.getAllLockedDimIdsByVisType;
  }
});
Object.defineProperty(exports, "hasAxisTooManyItems", {
  enumerable: true,
  get: function get() {
    return _rulesUtils.hasAxisTooManyItemsByVisType;
  }
});
Object.defineProperty(exports, "isDimensionLocked", {
  enumerable: true,
  get: function get() {
    return _rulesUtils.isDimensionLockedByVisType;
  }
});
Object.defineProperty(exports, "isAxisFull", {
  enumerable: true,
  get: function get() {
    return _rulesUtils.isAxisFullByVisType;
  }
});
Object.defineProperty(exports, "canDimensionBeAddedToAxis", {
  enumerable: true,
  get: function get() {
    return _rulesUtils.canDimensionBeAddedToAxisByVisType;
  }
});
Object.defineProperty(exports, "getTransferableDimension", {
  enumerable: true,
  get: function get() {
    return _rulesUtils.getTransferableDimensionPerAxisByVisType;
  }
});

var _rulesHelper = require("./rulesHelper");

var _rulesUtils = require("./rulesUtils");