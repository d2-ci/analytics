"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ouIdHelper = void 0;
var LEVEL_ID_PREFIX = 'LEVEL';
var GROUP_ID_PREFIX = 'OU_GROUP';

var hasGroupPrefix = function hasGroupPrefix(id) {
  return id.substr(0, GROUP_ID_PREFIX.length) === GROUP_ID_PREFIX;
};

var hasLevelPrefix = function hasLevelPrefix(id) {
  return id.substr(0, LEVEL_ID_PREFIX.length) === LEVEL_ID_PREFIX;
};

var stripLevelPrefix = function stripLevelPrefix(id) {
  return hasLevelPrefix(id) ? id.substr(LEVEL_ID_PREFIX.length + 1) : id;
};

var stripGroupPrefix = function stripGroupPrefix(id) {
  return hasGroupPrefix(id) ? id.substr(GROUP_ID_PREFIX.length + 1) : id;
};

var removePrefix = function removePrefix(id) {
  return stripGroupPrefix(stripLevelPrefix(id));
};

var ouIdHelper = Object.freeze({
  addLevelPrefix: function addLevelPrefix(id) {
    return "".concat(LEVEL_ID_PREFIX, "-").concat(removePrefix(id));
  },
  addGroupPrefix: function addGroupPrefix(id) {
    return "".concat(GROUP_ID_PREFIX, "-").concat(removePrefix(id));
  },
  removePrefix: removePrefix,
  hasGroupPrefix: hasGroupPrefix,
  hasLevelPrefix: hasLevelPrefix
});
exports.ouIdHelper = ouIdHelper;