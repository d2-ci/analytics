"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSourcePeriodType = exports.getAssignedPeriodTypes = void 0;
var _constants = require("../constants.js");
var _periodTypes = require("../periods/periodTypes.js");
// The source's period type, or null for a program, an element in no data set, or an unknown type
const getSourcePeriodType = ({
  dataSet
}) => (0, _periodTypes.isPeriodType)(dataSet === null || dataSet === void 0 ? void 0 : dataSet.periodType) ? dataSet.periodType : null;

/* The shortest query type that every type adds up into: the longest of them
 * when they nest, the next type up when two have the same length (Monday and
 * Wednesday weeks: BiWeekly) */
exports.getSourcePeriodType = getSourcePeriodType;
const getShortestDirectType = periodTypes => {
  var _sortPeriodTypes$find;
  return (_sortPeriodTypes$find = (0, _periodTypes.sortPeriodTypes)(_constants.PERIOD_TYPES).find(queryPeriodType => periodTypes.every(periodType => (0, _periodTypes.canAggregateInto)(periodType, queryPeriodType)))) !== null && _sortPeriodTypes$find !== void 0 ? _sortPeriodTypes$find : null;
};

/**
 * The period types of the data sets an item is assigned to, shortest first;
 * `shortestDirectType`, the shortest type at which every value adds up
 * directly (shorter ones get repeated or earlier values, or none, see
 * getDataItemProfilePeriodCompatibility), or null when nothing is assigned by
 * period (event data); and whether there are several types (`hasSeveral`).
 */
const getAssignedPeriodTypes = sources => {
  const types = (0, _periodTypes.sortPeriodTypes)([...new Set(sources.map(getSourcePeriodType).filter(Boolean))]);
  return {
    types,
    shortestDirectType: types.length ? getShortestDirectType(types) : null,
    hasSeveral: types.length > 1
  };
};
exports.getAssignedPeriodTypes = getAssignedPeriodTypes;