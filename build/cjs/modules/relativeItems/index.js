"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasRelativeItems = void 0;
var _relativePeriods = require("../../components/PeriodDimension/utils/relativePeriods.js");
var _index = require("../ouIdHelper/index.js");
var _predefinedDimensions = require("../predefinedDimensions.js");
const hasRelativeItems = function (dimension) {
  let itemIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return dimension === _predefinedDimensions.DIMENSION_ID_ASSIGNED_CATEGORIES || dimension === _predefinedDimensions.DIMENSION_ID_ORGUNIT && Array.isArray(itemIds) && itemIds.some(id => _index.ouIdHelper.hasLevelPrefix(id) || _index.ouIdHelper.hasGroupPrefix(id) || [_index.USER_ORG_UNIT, _index.USER_ORG_UNIT_CHILDREN, _index.USER_ORG_UNIT_GRANDCHILDREN].includes(id)) || dimension === _predefinedDimensions.DIMENSION_ID_PERIOD && Array.isArray(itemIds) && itemIds.some(id => (0, _relativePeriods.getRelativePeriodIds)().includes(id));
};
exports.hasRelativeItems = hasRelativeItems;