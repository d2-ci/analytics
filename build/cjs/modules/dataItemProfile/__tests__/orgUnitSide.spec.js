"use strict";

var _orgUnitSide = require("../orgUnitSide.js");
const source = (id, orgUnitLevels) => ({
  dataSet: id && {
    id,
    periodType: 'Monthly'
  },
  elements: [],
  reportingRate: false,
  ...(orgUnitLevels && {
    orgUnitLevels
  })
});
describe('getOrgUnitSide', () => {
  it('gives the levels assigned, deepest first, and the deepest', () => {
    expect((0, _orgUnitSide.getOrgUnitSide)([source('formA', {
      1: 1,
      2: 0,
      4: 1159
    })])).toEqual({
      levels: [4, 1],
      entryLevel: 4,
      mixed: false
    });
  });
  it('is mixed when data sets are entered at different levels', () => {
    expect((0, _orgUnitSide.getOrgUnitSide)([source('formA', {
      4: 10
    }), source('formB', {
      2: 3
    })])).toEqual({
      levels: [4, 2],
      entryLevel: 4,
      mixed: true
    });
  });
  it('has no level without assignments', () => {
    expect((0, _orgUnitSide.getOrgUnitSide)([source('formA', {}), source(null)])).toEqual({
      levels: [],
      entryLevel: null,
      mixed: false
    });
  });
});
describe('withOrgUnitSide', () => {
  it('gives each source its levels, and the profile its org unit side', () => {
    const profile = {
      sources: [source('formA'), source(null)],
      unknown: false,
      reasons: [],
      period: {
        types: ['Monthly']
      }
    };
    expect((0, _orgUnitSide.withOrgUnitSide)(profile, {
      formA: {
        4: 2
      }
    })).toEqual({
      ...profile,
      sources: [source('formA', {
        4: 2
      }), source(null)],
      orgUnit: {
        levels: [4],
        entryLevel: 4,
        mixed: false
      }
    });
    expect((0, _orgUnitSide.withOrgUnitSide)(profile, {}).sources[0].orgUnitLevels).toEqual({});
  });
  it('gives no levels to a program indicator placed anywhere', () => {
    const placedAnywhere = {
      dataSet: null,
      program: {
        id: 'programAAA'
      },
      orgUnitField: 'REGISTRATION',
      elements: [],
      reportingRate: false
    };
    expect((0, _orgUnitSide.withOrgUnitSide)({
      sources: [placedAnywhere]
    }, {
      programAAA: {
        4: 2
      }
    })).toEqual({
      sources: [placedAnywhere],
      orgUnit: {
        levels: [],
        entryLevel: null,
        mixed: false
      }
    });
  });
});