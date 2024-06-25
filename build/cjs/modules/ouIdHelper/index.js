"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ouIdHelper = exports.USER_ORG_UNIT_GRANDCHILDREN = exports.USER_ORG_UNIT_CHILDREN = exports.USER_ORG_UNIT = void 0;
const LEVEL_ID_PREFIX = 'LEVEL';
const GROUP_ID_PREFIX = 'OU_GROUP';
const USER_ORG_UNIT = 'USER_ORGUNIT';
exports.USER_ORG_UNIT = USER_ORG_UNIT;
const USER_ORG_UNIT_CHILDREN = 'USER_ORGUNIT_CHILDREN';
exports.USER_ORG_UNIT_CHILDREN = USER_ORG_UNIT_CHILDREN;
const USER_ORG_UNIT_GRANDCHILDREN = 'USER_ORGUNIT_GRANDCHILDREN';
exports.USER_ORG_UNIT_GRANDCHILDREN = USER_ORG_UNIT_GRANDCHILDREN;

const hasGroupPrefix = id => id.substr(0, GROUP_ID_PREFIX.length) === GROUP_ID_PREFIX;

const hasLevelPrefix = id => id.substr(0, LEVEL_ID_PREFIX.length) === LEVEL_ID_PREFIX;

const stripLevelPrefix = id => hasLevelPrefix(id) ? id.substr(LEVEL_ID_PREFIX.length + 1) : id;

const stripGroupPrefix = id => hasGroupPrefix(id) ? id.substr(GROUP_ID_PREFIX.length + 1) : id;

const removePrefix = id => stripGroupPrefix(stripLevelPrefix(id));

const ouIdHelper = Object.freeze({
  addLevelPrefix: id => "".concat(LEVEL_ID_PREFIX, "-").concat(removePrefix(id)),
  addGroupPrefix: id => "".concat(GROUP_ID_PREFIX, "-").concat(removePrefix(id)),
  removePrefix,
  hasGroupPrefix,
  hasLevelPrefix
});
exports.ouIdHelper = ouIdHelper;