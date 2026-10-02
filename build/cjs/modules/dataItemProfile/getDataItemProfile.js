"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataItemProfile = void 0;
var _assignedOrgUnitLevels = require("./profile/assignedOrgUnitLevels.js");
var _assignedPeriodTypes = require("./profile/assignedPeriodTypes.js");
var _collectSources = require("./profile/collectSources.js");
/**
 * The profile of a data item ({ id, dimensionItemType }), from its metadata
 * (fetchDataItemProfileMetadata): where its data comes from.
 *
 * - `sources`: one per data set it is assigned to, with the item's elements
 *   in it (a reporting rate is its data set), and one per program.
 * - `assignedPeriodTypes`: the period types of those data sets
 *   (getAssignedPeriodTypes).
 * - `assignedOrgUnitLevels`: the org unit levels its data sets and programs
 *   are assigned at (getAssignedOrgUnitLevels), when the metadata has the
 *   counts (`assignedOrgUnitCounts`, fetched by default).
 * - `unknown` and `reasons`: missing metadata makes the item unknown; it is
 *   never guessed.
 */
const getDataItemProfile = (item, metadata = {}) => {
  const {
    sources,
    reasons
  } = (0, _collectSources.collectSources)(item, metadata);
  const profile = {
    sources,
    unknown: reasons.length > 0,
    reasons,
    assignedPeriodTypes: (0, _assignedPeriodTypes.getAssignedPeriodTypes)(sources)
  };
  return metadata.assignedOrgUnitCounts ? (0, _assignedOrgUnitLevels.addAssignedOrgUnitLevels)(profile, metadata.assignedOrgUnitCounts) : profile;
};
exports.getDataItemProfile = getDataItemProfile;