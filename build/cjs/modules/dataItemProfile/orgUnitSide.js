"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withOrgUnitSide = exports.getOrgUnitSide = void 0;
var _sources = require("./sources.js");
const levelsOf = (orgUnitLevels = {}) => Object.keys(orgUnitLevels).map(Number).filter(level => orgUnitLevels[level] > 0);

/**
 * The profile's org unit side, from its sources' `orgUnitLevels`: the levels
 * its data sets are assigned at, deepest first, the deepest (`entryLevel`,
 * where most data is entered), and whether they are assigned at different
 * levels (`mixed`).
 */
const getOrgUnitSide = sources => {
  var _levels$;
  const assigned = sources.filter(({
    orgUnitLevels
  }) => orgUnitLevels).map(({
    orgUnitLevels
  }) => levelsOf(orgUnitLevels));
  const levels = [...new Set(assigned.flat())].sort((a, b) => b - a);
  const deepestOfEach = assigned.filter(sourceLevels => sourceLevels.length).map(sourceLevels => Math.max(...sourceLevels));
  return {
    levels,
    entryLevel: (_levels$ = levels[0]) !== null && _levels$ !== void 0 ? _levels$ : null,
    mixed: new Set(deepestOfEach).size > 1
  };
};

/**
 * The profile with its org unit side, from each data set's or program's
 * assigned units per level (`assignedLevels`, by id, as
 * fetchSourceOrgUnitLevels gives them): each source gains its
 * `orgUnitLevels`, except program indicators placed anywhere
 * (isPlacedAnywhere).
 */
exports.getOrgUnitSide = getOrgUnitSide;
const withOrgUnitSide = (profile, assignedLevels) => {
  const sources = profile.sources.map(source => {
    var _assignedLevels$getSo;
    return (0, _sources.getSourceId)(source) && !(0, _sources.isPlacedAnywhere)(source) ? {
      ...source,
      orgUnitLevels: (_assignedLevels$getSo = assignedLevels[(0, _sources.getSourceId)(source)]) !== null && _assignedLevels$getSo !== void 0 ? _assignedLevels$getSo : {}
    } : source;
  });
  return {
    ...profile,
    sources,
    orgUnit: getOrgUnitSide(sources)
  };
};
exports.withOrgUnitSide = withOrgUnitSide;