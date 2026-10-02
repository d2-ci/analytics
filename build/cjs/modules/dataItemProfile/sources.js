"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isProgramSource = exports.isPlacedAnywhere = exports.isBoundedOrgUnitField = exports.getSourceId = exports.getSourceField = void 0;
/* A profile source is a data set ({ dataSet, elements, reportingRate }) or a
 * program ({ program, elements: [], reportingRate: false }), or an element in
 * no data set (dataSet null) */

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

/* A program indicator's orgUnitField places values by the event's or
 * enrollment's org unit (unset, EVENT, ENROLLMENT), or by the owner's, which
 * fall back to it: those are where the program is assigned. REGISTRATION and
 * an org unit data element or attribute (its id) can be anywhere. */
exports.getSourceId = getSourceId;
const BOUNDED_ORG_UNIT_FIELDS = ['EVENT', 'ENROLLMENT', 'OWNER_AT_START', 'OWNER_AT_END'];
const isBoundedOrgUnitField = orgUnitField => !orgUnitField || BOUNDED_ORG_UNIT_FIELDS.includes(orgUnitField);

// Whether a source's values can be at any org unit, its assignment aside
exports.isBoundedOrgUnitField = isBoundedOrgUnitField;
const isPlacedAnywhere = ({
  orgUnitField
}) => !isBoundedOrgUnitField(orgUnitField);

// The metadata field units are assigned to a source by, for counts
exports.isPlacedAnywhere = isPlacedAnywhere;
const getSourceField = source => isProgramSource(source) ? 'programs' : 'dataSets';
exports.getSourceField = getSourceField;