"use strict";

var _sources = require("../sources.js");
const dataSetSource = (id, elements = [], reportingRate = false) => ({
  dataSet: {
    id,
    periodType: 'Monthly'
  },
  elements,
  reportingRate
});
const programSource = (id, extra = {}) => ({
  dataSet: null,
  program: {
    id
  },
  elements: [],
  reportingRate: false,
  ...extra
});
const unassignedSource = elements => ({
  dataSet: null,
  elements,
  reportingRate: false
});
const element = (id, aggregationType = 'SUM') => ({
  id,
  aggregationType
});
describe('sources', () => {
  it('tells a program from a data set or an element in no data set', () => {
    expect((0, _sources.isProgramSource)(programSource('programAAA'))).toBe(true);
    expect((0, _sources.isProgramSource)(dataSetSource('dataSetAAA'))).toBe(false);
    expect((0, _sources.isProgramSource)(unassignedSource([]))).toBe(false);
  });
  it('gives the id of the data set or program, or null', () => {
    expect((0, _sources.getSourceId)(dataSetSource('dataSetAAA'))).toBe('dataSetAAA');
    expect((0, _sources.getSourceId)(programSource('programAAA'))).toBe('programAAA');
    expect((0, _sources.getSourceId)(unassignedSource([]))).toBeNull();
  });
  it('gives the org unit field that lists where a source is assigned', () => {
    expect((0, _sources.getAssignmentField)(dataSetSource('dataSetAAA'))).toBe('dataSets');
    expect((0, _sources.getAssignmentField)(programSource('programAAA'))).toBe('programs');
  });
  it.each([undefined, 'EVENT', 'ENROLLMENT', 'OWNER_AT_START', 'OWNER_AT_END'])('places values where the program is assigned with orgUnitField %s', orgUnitField => {
    expect((0, _sources.usesProgramOrgUnits)(orgUnitField)).toBe(true);
    expect((0, _sources.canBeAtAnyOrgUnit)(programSource('p', {
      orgUnitField
    }))).toBe(false);
  });
  it.each(['REGISTRATION', 'orgUnitDeAA'])('places values at any org unit with orgUnitField %s', orgUnitField => {
    expect((0, _sources.usesProgramOrgUnits)(orgUnitField)).toBe(false);
    expect((0, _sources.canBeAtAnyOrgUnit)(programSource('p', {
      orgUnitField
    }))).toBe(true);
  });
  describe('getItemOperands', () => {
    it('groups an element over the sources it is in', () => {
      const monthly = dataSetSource('monthlyForm', [element('elementA')]);
      const weekly = dataSetSource('weeklyForm', [element('elementA')]);
      expect((0, _sources.getItemOperands)({
        sources: [monthly, weekly]
      })).toEqual([{
        key: 'element:elementA:SUM',
        element: element('elementA'),
        sources: [monthly, weekly]
      }]);
    });
    it('keeps an element with another aggregation type apart', () => {
      const source = dataSetSource('monthlyForm', [element('elementA'), element('elementA', 'LAST')]);
      expect((0, _sources.getItemOperands)({
        sources: [source]
      })).toHaveLength(2);
    });
    it('adds each reporting rate and each program as an operand', () => {
      const rate = dataSetSource('monthlyForm', [], true);
      const program = programSource('programAAA');
      expect((0, _sources.getItemOperands)({
        sources: [rate, program]
      })).toEqual([{
        key: 'reportingRate:monthlyForm',
        reportingRate: true,
        sources: [rate]
      }, {
        key: 'program:programAAA::',
        program: true,
        sources: [program]
      }]);
    });
    it('keys a program apart by where and how its indicators place values', () => {
      expect((0, _sources.getItemOperands)({
        sources: [programSource('programAAA', {
          orgUnitField: 'REGISTRATION',
          missingPeriodBoundaries: true
        })]
      })[0].key).toBe('program:programAAA:REGISTRATION:missingPeriodBoundaries');
    });
    it('has no operand without sources', () => {
      expect((0, _sources.getItemOperands)({
        sources: []
      })).toEqual([]);
    });
  });
});