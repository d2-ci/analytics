"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usesProgramOrgUnits = exports.isProgramSource = exports.getSourceId = exports.getReportingRateOperandKey = exports.getProgramOperandKey = exports.getItemOperands = exports.getElementOperandKey = exports.getAssignmentField = exports.canBeAtAnyOrgUnit = void 0;
var _constants = require("./constants.js");
/* A profile source is where an item's data comes from:
 * - a data set: { dataSet: { id, periodType }, elements, reportingRate };
 * - a program: { dataSet: null, program: { id }, elements: [], reportingRate: false },
 *   with `orgUnitField` when its values can be at any org unit, and
 *   `missingPeriodBoundaries` for a program indicator without them;
 * - a data element in no data set: { dataSet: null, elements, reportingRate: false },
 *   assigned nowhere. */

const isProgramSource = ({
  program
}) => Boolean(program);

// The id of the data set or program behind a source, or null
exports.isProgramSource = isProgramSource;
const getSourceId = ({
  dataSet,
  program
}) => {
  var _ref, _dataSet$id;
  return (_ref = (_dataSet$id = dataSet === null || dataSet === void 0 ? void 0 : dataSet.id) !== null && _dataSet$id !== void 0 ? _dataSet$id : program === null || program === void 0 ? void 0 : program.id) !== null && _ref !== void 0 ? _ref : null;
};

// The org unit field that lists the org units a source is assigned to
exports.getSourceId = getSourceId;
const getAssignmentField = source => isProgramSource(source) ? 'programs' : 'dataSets';

// Whether a program indicator's orgUnitField places values where its program is assigned
exports.getAssignmentField = getAssignmentField;
const usesProgramOrgUnits = orgUnitField => !orgUnitField || _constants.PROGRAM_ORG_UNIT_FIELDS.has(orgUnitField);

// Whether a source's values can be at any org unit, wherever it is assigned
exports.usesProgramOrgUnits = usesProgramOrgUnits;
const canBeAtAnyOrgUnit = ({
  orgUnitField
}) => !usesProgramOrgUnits(orgUnitField);

/* Operand keys: how a profile's expression (profile.expression) names the
 * operands getItemOperands gives */
exports.canBeAtAnyOrgUnit = canBeAtAnyOrgUnit;
const getElementOperandKey = ({
  id,
  aggregationType
}) => `element:${id}:${aggregationType}`;
exports.getElementOperandKey = getElementOperandKey;
const getReportingRateOperandKey = dataSetId => `reportingRate:${dataSetId}`;
exports.getReportingRateOperandKey = getReportingRateOperandKey;
const getProgramOperandKey = ({
  program,
  orgUnitField,
  missingPeriodBoundaries
}) => ['program', program.id, orgUnitField !== null && orgUnitField !== void 0 ? orgUnitField : '', missingPeriodBoundaries ? 'missingPeriodBoundaries' : ''].join(':');

/**
 * The operands an item's value is computed from, each with its `key`: each
 * data element (by id and aggregation type) with the sources it is in, each
 * reporting rate, and each program. One element adds up over its sources;
 * profile.expression says how the operands combine.
 */
exports.getProgramOperandKey = getProgramOperandKey;
const getItemOperands = profile => {
  const elements = new Map();
  profile.sources.forEach(source => source.elements.forEach(element => {
    var _elements$get;
    const key = getElementOperandKey(element);
    const operand = (_elements$get = elements.get(key)) !== null && _elements$get !== void 0 ? _elements$get : {
      key,
      element,
      sources: []
    };
    operand.sources.push(source);
    elements.set(key, operand);
  }));
  return [...elements.values(), ...profile.sources.filter(({
    reportingRate
  }) => reportingRate).map(source => ({
    key: getReportingRateOperandKey(source.dataSet.id),
    reportingRate: true,
    sources: [source]
  })), ...profile.sources.filter(isProgramSource).map(source => ({
    key: getProgramOperandKey(source),
    program: true,
    sources: [source]
  }))];
};
exports.getItemOperands = getItemOperands;