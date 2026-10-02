"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAssignment = exports.getOperandResult = void 0;
var _constants = require("../constants.js");
var _sources = require("../sources.js");
var _combineResults = require("./combineResults.js");
/* Org unit results carry `assignment`: how many org units at the deepest
 * level assigned are assigned ({ assigned, total, level }), or null */
const withAssignment = (result, assignment = null) => ({
  ...result,
  assignment
});
exports.withAssignment = withAssignment;
const getLevelsWithOrgUnits = countsByLevel => Object.keys(countsByLevel).map(Number).filter(level => countsByLevel[level] > 0);

/* Analytics nulls the levels up to each aggregation level for values from
 * org units below it (dhis2-core AggregationLevelsHelper): a value from
 * `assignedLevel` can't reach `requestedLevel` when an aggregation level lies
 * between them (requestedLevel ≤ L < assignedLevel; checked by the test tool
 * on 2.40 to 2.44) */
const isBlockedByAggregationLevel = (assignedLevel, requestedLevel, aggregationLevels) => aggregationLevels.some(aggregationLevel => requestedLevel <= aggregationLevel && aggregationLevel < assignedLevel);
const getNotReachingReason = ({
  byLevel,
  ancestors,
  assignedOrgUnitCounts,
  level
}) => {
  const assignedAtThisLevelElsewhere = getLevelsWithOrgUnits(assignedOrgUnitCounts).some(assignedLevel => assignedLevel >= level);
  const assignedHigher = ancestors > 0 || getLevelsWithOrgUnits(byLevel).some(assignedLevel => assignedLevel < level);
  return assignedHigher && !assignedAtThisLevelElsewhere ? _constants.REASON_ASSIGNED_AT_HIGHER_LEVEL : _constants.REASON_NOT_ASSIGNED;
};

/* One data set or program at one requested level, from its assignment
 * counts. Values add up from lower levels, but are never split down, so a
 * source assigned only at higher levels can't fill the level asked. The
 * deepest level assigned says how much of the org unit it covers. */
const getSourceResult = ({
  sourceCounts,
  assignedOrgUnitCounts = {},
  aggregationLevels = [],
  totals,
  level
}) => {
  var _totals$deepestLevel;
  const {
    byLevel = {},
    ancestors = 0
  } = sourceCounts !== null && sourceCounts !== void 0 ? sourceCounts : {};
  const assignedAtOrBelow = getLevelsWithOrgUnits(byLevel).filter(assignedLevel => assignedLevel >= level);
  const reaching = assignedAtOrBelow.filter(assignedLevel => !isBlockedByAggregationLevel(assignedLevel, level, aggregationLevels));
  if (assignedAtOrBelow.length && !reaching.length) {
    return withAssignment((0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, [_constants.REASON_STOPPED_BY_AGGREGATION_LEVEL]));
  }
  if (!reaching.length) {
    return withAssignment((0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, [getNotReachingReason({
      byLevel,
      ancestors,
      assignedOrgUnitCounts,
      level
    })]));
  }
  const deepestLevel = Math.max(...reaching);
  const assignment = {
    assigned: byLevel[deepestLevel],
    total: (_totals$deepestLevel = totals[deepestLevel]) !== null && _totals$deepestLevel !== void 0 ? _totals$deepestLevel : byLevel[deepestLevel],
    level: deepestLevel
  };

  // Org units it isn't assigned to collect nothing: nothing is left out
  return withAssignment((0, _combineResults.createResult)(_constants.COMPATIBILITY_FULL, assignment.assigned < assignment.total ? [_constants.REASON_PARTLY_ASSIGNED] : []), assignment);
};
const AT_ANY_ORG_UNIT = withAssignment((0, _combineResults.createResult)(_constants.COMPATIBILITY_FULL, [_constants.REASON_ANY_ORG_UNIT]));
const isLeftOut = ({
  reasons
}) => reasons.some(reason => _constants.LEFT_OUT_REASONS.has(reason));

/* One operand over its sources. A source not assigned there leaves nothing
 * out; one whose values can't reach the level asked (assigned higher, or
 * stopped by aggregation levels) leaves them out, so with another that fills
 * the org unit, the value is partial. */
const combineSources = bySource => {
  const filling = bySource.filter(({
    status
  }) => status === _constants.COMPATIBILITY_FULL);
  const reasons = (0, _combineResults.unionOfReasons)(bySource);
  const leftOut = bySource.some(isLeftOut);
  if (!filling.length) {
    return withAssignment((0, _combineResults.createResult)(_constants.COMPATIBILITY_NONE, leftOut ? reasons.filter(reason => _constants.LEFT_OUT_REASONS.has(reason)) : [_constants.REASON_NOT_ASSIGNED]));
  }
  const bestAssignment = filling.map(({
    assignment
  }) => assignment).filter(Boolean).sort((a, b) => b.assigned / b.total - a.assigned / a.total)[0];
  return withAssignment((0, _combineResults.createResult)(leftOut ? _constants.COMPATIBILITY_PARTIAL : _constants.COMPATIBILITY_FULL, reasons.filter(reason => reason !== _constants.REASON_NOT_ASSIGNED)), bestAssignment);
};

/**
 * One operand ({ element, sources }, getItemOperands) at one requested level,
 * from the counts kept for it in the coverage, with the `level` asked and the
 * sources' `assignedOrgUnitCounts` across the hierarchy.
 */
const getOperandResult = ({
  element,
  sources
}, counts) => combineSources(sources.map(source => {
  var _counts$sources, _counts$assignedOrgUn, _counts$totals;
  return (0, _sources.canBeAtAnyOrgUnit)(source) ? AT_ANY_ORG_UNIT : getSourceResult({
    sourceCounts: (_counts$sources = counts.sources) === null || _counts$sources === void 0 ? void 0 : _counts$sources[(0, _sources.getSourceId)(source)],
    assignedOrgUnitCounts: (_counts$assignedOrgUn = counts.assignedOrgUnitCounts) === null || _counts$assignedOrgUn === void 0 ? void 0 : _counts$assignedOrgUn[(0, _sources.getSourceId)(source)],
    aggregationLevels: element === null || element === void 0 ? void 0 : element.aggregationLevels,
    totals: (_counts$totals = counts.totals) !== null && _counts$totals !== void 0 ? _counts$totals : {},
    level: counts.level
  });
}));
exports.getOperandResult = getOperandResult;