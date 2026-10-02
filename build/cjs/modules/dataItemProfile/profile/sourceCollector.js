"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUnassignedElementSource = exports.getProgramSource = exports.getDataSetSource = exports.createCollector = exports.checkDataSetPeriodType = exports.addReason = exports.addElementToSource = void 0;
var _constants = require("../constants.js");
var _periodTypes = require("../periods/periodTypes.js");
var _sources = require("../sources.js");
/* Sources, by key: one per data set; one per program, and per way its
 * indicators place values; one per data element in no data set */

const createCollector = () => ({
  sources: new Map(),
  reasons: [],
  visitedIndicators: new Set()
});
exports.createCollector = createCollector;
const addReason = (collector, reason) => collector.reasons.push(reason);
exports.addReason = addReason;
const getSource = (collector, key, createSource) => {
  if (!collector.sources.has(key)) {
    collector.sources.set(key, createSource());
  }
  return collector.sources.get(key);
};
const getDataSetSource = (collector, {
  id,
  periodType
}) => getSource(collector, `dataSet:${id !== null && id !== void 0 ? id : periodType}`, () => ({
  dataSet: {
    id,
    periodType
  },
  elements: [],
  reportingRate: false
}));
exports.getDataSetSource = getDataSetSource;
const getUnassignedElementSource = (collector, elementId) => getSource(collector, `element:${elementId}`, () => ({
  dataSet: null,
  elements: [],
  reportingRate: false
}));

/* A program is a source of its own: events and enrollments are placed by
 * their own dates, so it has no period type, and by the org units it's
 * assigned to. A program indicator that places values elsewhere, or has no
 * period boundaries, is a source apart. */
exports.getUnassignedElementSource = getUnassignedElementSource;
const getProgramSource = (collector, metadata, {
  id,
  orgUnitField,
  missingPeriodBoundaries = false
}) => {
  var _metadata$programs;
  if (!((_metadata$programs = metadata.programs) !== null && _metadata$programs !== void 0 && _metadata$programs[id])) {
    addReason(collector, {
      code: _constants.PROFILE_REASON_MISSING_METADATA,
      id
    });
    return;
  }
  const atAnyOrgUnit = !(0, _sources.usesProgramOrgUnits)(orgUnitField);
  const key = [`program:${id}`, atAnyOrgUnit && orgUnitField, missingPeriodBoundaries && 'missingPeriodBoundaries'].filter(Boolean).join(':');
  getSource(collector, key, () => ({
    dataSet: null,
    program: {
      id
    },
    ...(atAnyOrgUnit && {
      orgUnitField
    }),
    ...(missingPeriodBoundaries && {
      missingPeriodBoundaries
    }),
    elements: [],
    reportingRate: false
  }));
};
exports.getProgramSource = getProgramSource;
const addElementToSource = (source, element) => {
  const isListed = source.elements.some(({
    id,
    operand,
    aggregationType
  }) => id === element.id && operand === element.operand && aggregationType === element.aggregationType);
  if (!isListed) {
    source.elements.push(element);
  }
};
exports.addElementToSource = addElementToSource;
const checkDataSetPeriodType = (collector, id, periodType) => {
  if (!(0, _periodTypes.isPeriodType)(periodType)) {
    addReason(collector, {
      code: _constants.PROFILE_REASON_UNKNOWN_PERIOD_TYPE,
      id,
      periodType
    });
  }
};
exports.checkDataSetPeriodType = checkDataSetPeriodType;