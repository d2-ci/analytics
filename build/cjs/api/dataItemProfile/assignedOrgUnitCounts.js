"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataItemProfileSourceKeys = exports.fetchAssignedOrgUnitCounts = void 0;
var _sources = require("../../modules/dataItemProfile/sources.js");
var _orgUnitQueries = require("./orgUnitQueries.js");
/**
 * The source keys of profiles (getDataItemProfile results): the data sets and
 * programs whose assignment can be counted, as `[{ id, field }]`, `field`
 * being the org unit field that lists them (dataSets or programs). Program
 * indicators whose values can be at any org unit are left out.
 */
const getDataItemProfileSourceKeys = (profiles = []) => [...new Map(profiles.flatMap(profile => {
  var _profile$sources;
  return (_profile$sources = profile === null || profile === void 0 ? void 0 : profile.sources) !== null && _profile$sources !== void 0 ? _profile$sources : [];
}).filter(source => (0, _sources.getSourceId)(source) && !(0, _sources.canBeAtAnyOrgUnit)(source)).map(source => [(0, _sources.getSourceId)(source), {
  id: (0, _sources.getSourceId)(source),
  field: (0, _sources.getAssignmentField)(source)
}])).values()];

/**
 * The number of org units each data set or program (`sourceKeys`, from
 * getDataItemProfileSourceKeys) is assigned to, per level, across the hierarchy: one
 * count per source and level. `levels` are fetched when not given; `signal`
 * cancels the requests. Gives
 * `{ levels, assignedOrgUnitCounts: { [sourceId]: { [level]: count } },
 * requests }`.
 */
exports.getDataItemProfileSourceKeys = getDataItemProfileSourceKeys;
const fetchAssignedOrgUnitCounts = async (engine, sourceKeys, {
  levels,
  signal
} = {}) => {
  const knownLevels = levels !== null && levels !== void 0 ? levels : (0, _orgUnitQueries.readLevels)(await engine.query(_orgUnitQueries.levelsQuery, {
    signal
  }));
  const queries = sourceKeys.flatMap(sourceKey => knownLevels.map(({
    level
  }) => [[sourceKey.id, level], (0, _orgUnitQueries.countQuery)([`level:eq:${level}`, (0, _orgUnitQueries.assignedTo)(sourceKey)])]));
  const {
    responses,
    requests
  } = await (0, _orgUnitQueries.queryAll)(engine, queries, {
    signal
  });
  const assignedOrgUnitCounts = Object.fromEntries(sourceKeys.map(({
    id
  }) => [id, {}]));
  queries.forEach(([[sourceId, level]], i) => {
    const total = (0, _orgUnitQueries.getTotal)(responses[i]);
    if (total) {
      assignedOrgUnitCounts[sourceId][level] = total;
    }
  });
  return {
    levels: knownLevels,
    assignedOrgUnitCounts,
    requests
  };
};
exports.fetchAssignedOrgUnitCounts = fetchAssignedOrgUnitCounts;