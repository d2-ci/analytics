"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountableSources = exports.fetchAssignedOrgUnitCounts = void 0;
var _sources = require("../../modules/dataItemProfile/sources.js");
var _orgUnitQueries = require("./orgUnitQueries.js");
/**
 * The data sets and programs behind profiles (getDataItemProfile results)
 * whose assignment can be counted: `[{ id, field }]`, `field` being the org
 * unit field that lists them (dataSets or programs). Program indicators
 * whose values can be at any org unit are left out.
 */
const getCountableSources = (profiles = []) => [...new Map(profiles.flatMap(profile => {
  var _profile$sources;
  return (_profile$sources = profile === null || profile === void 0 ? void 0 : profile.sources) !== null && _profile$sources !== void 0 ? _profile$sources : [];
}).filter(source => (0, _sources.getSourceId)(source) && !(0, _sources.canBeAtAnyOrgUnit)(source)).map(source => [(0, _sources.getSourceId)(source), {
  id: (0, _sources.getSourceId)(source),
  field: (0, _sources.getAssignmentField)(source)
}])).values()];

/**
 * The number of org units each data set or program (`sources`, from
 * getCountableSources) is assigned to, per level, across the hierarchy: one
 * count per source and level. `levels` are fetched when not given. Gives
 * `{ levels, assignedOrgUnitCounts: { [sourceId]: { [level]: count } },
 * requests }`.
 */
exports.getCountableSources = getCountableSources;
const fetchAssignedOrgUnitCounts = async (engine, sources, levels) => {
  const knownLevels = levels !== null && levels !== void 0 ? levels : (0, _orgUnitQueries.readLevels)(await engine.query(_orgUnitQueries.levelsQuery));
  const queries = sources.flatMap(source => knownLevels.map(({
    level
  }) => [[source.id, level], (0, _orgUnitQueries.countQuery)([`level:eq:${level}`, (0, _orgUnitQueries.assignedTo)(source)])]));
  const response = await (0, _orgUnitQueries.queryAll)(engine, queries);
  const assignedOrgUnitCounts = Object.fromEntries(sources.map(({
    id
  }) => [id, {}]));
  queries.forEach(([[sourceId, level]], i) => {
    const total = (0, _orgUnitQueries.getTotal)(response[`count${i}`]);
    if (total) {
      assignedOrgUnitCounts[sourceId][level] = total;
    }
  });
  return {
    levels: knownLevels,
    assignedOrgUnitCounts,
    requests: queries.length
  };
};
exports.fetchAssignedOrgUnitCounts = fetchAssignedOrgUnitCounts;