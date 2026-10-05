"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLevelsWithOrgUnits = exports.getAssignedOrgUnitLevels = exports.addAssignedOrgUnitLevels = void 0;
var _sources = require("../sources.js");
// The levels with at least one org unit, from counts by level
const getLevelsWithOrgUnits = (countsByLevel = {}) => Object.keys(countsByLevel).map(Number).filter(level => countsByLevel[level] > 0);

/**
 * The org unit levels an item's data sets and programs are assigned at,
 * deepest first, from each source's `assignedOrgUnitCounts`; the deepest
 * (`deepestLevel`); and whether sources have different deepest levels
 * (`hasSeveral`).
 */
exports.getLevelsWithOrgUnits = getLevelsWithOrgUnits;
const getAssignedOrgUnitLevels = sources => {
  var _levels$;
  const levelsBySource = sources.filter(({
    assignedOrgUnitCounts
  }) => assignedOrgUnitCounts).map(({
    assignedOrgUnitCounts
  }) => getLevelsWithOrgUnits(assignedOrgUnitCounts));
  const levels = [...new Set(levelsBySource.flat())].sort((a, b) => b - a);
  const deepestOfEach = levelsBySource.filter(sourceLevels => sourceLevels.length).map(sourceLevels => Math.max(...sourceLevels));
  return {
    levels,
    deepestLevel: (_levels$ = levels[0]) !== null && _levels$ !== void 0 ? _levels$ : null,
    hasSeveral: new Set(deepestOfEach).size > 1
  };
};

/**
 * The profile with its assigned org unit levels, from the number of org units
 * each data set or program is assigned to per level (`{ [sourceId]:
 * { [level]: count } }`, as fetchAssignedOrgUnitCounts gives them): each
 * source gains its `assignedOrgUnitCounts`, except program indicators whose
 * values can be at any org unit.
 */
exports.getAssignedOrgUnitLevels = getAssignedOrgUnitLevels;
const addAssignedOrgUnitLevels = (profile, assignedOrgUnitCounts) => {
  const sources = profile.sources.map(source => {
    var _assignedOrgUnitCount;
    return (0, _sources.getSourceId)(source) && !(0, _sources.canBeAtAnyOrgUnit)(source) ? {
      ...source,
      assignedOrgUnitCounts: (_assignedOrgUnitCount = assignedOrgUnitCounts[(0, _sources.getSourceId)(source)]) !== null && _assignedOrgUnitCount !== void 0 ? _assignedOrgUnitCount : {}
    } : source;
  });
  return {
    ...profile,
    sources,
    assignedOrgUnitLevels: getAssignedOrgUnitLevels(sources)
  };
};
exports.addAssignedOrgUnitLevels = addAssignedOrgUnitLevels;