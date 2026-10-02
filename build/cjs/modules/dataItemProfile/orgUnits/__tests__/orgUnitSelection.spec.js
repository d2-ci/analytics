"use strict";

var _orgUnitSelection = require("../orgUnitSelection.js");
describe('parseOrgUnitSelectionItem', () => {
  it.each([['ImspTQPwCqd', {
    type: 'ORG_UNIT'
  }], ['LEVEL-2', {
    type: 'LEVEL',
    level: 2
  }], ['LEVEL-wjP19dkFeIk', {
    type: 'LEVEL',
    level: 'wjP19dkFeIk'
  }], ['OU_GROUP-RXL3lPSK8oG', {
    type: 'GROUP',
    groupId: 'RXL3lPSK8oG'
  }], ['USER_ORGUNIT', {
    type: 'USER',
    depth: 0
  }], ['USER_ORGUNIT_CHILDREN', {
    type: 'USER',
    depth: 1
  }], ['USER_ORGUNIT_GRANDCHILDREN', {
    type: 'USER',
    depth: 2
  }], ['not an id', {
    type: 'UNKNOWN'
  }]])('reads %s', (id, expected) => {
    expect((0, _orgUnitSelection.parseOrgUnitSelectionItem)(id)).toEqual({
      id,
      ...expected
    });
  });
});
describe('readOrgUnitSelection', () => {
  it('judges units on their own', () => {
    expect((0, _orgUnitSelection.readOrgUnitSelection)(['unitAAAAAAA', 'unitBBBBBBB'])).toEqual({
      selectionItems: [{
        id: 'unitAAAAAAA',
        type: 'ORG_UNIT'
      }, {
        id: 'unitBBBBBBB',
        type: 'ORG_UNIT'
      }],
      parentOrgUnitIds: []
    });
  });
  it('takes the units as boundaries of a level or a group', () => {
    expect((0, _orgUnitSelection.readOrgUnitSelection)(['unitAAAAAAA', 'LEVEL-3', 'USER_ORGUNIT'])).toEqual({
      selectionItems: [{
        id: 'LEVEL-3',
        type: 'LEVEL',
        level: 3
      }, {
        id: 'USER_ORGUNIT',
        type: 'USER',
        depth: 0
      }],
      parentOrgUnitIds: ['unitAAAAAAA']
    });
  });
  it('reads nothing from no selection', () => {
    expect((0, _orgUnitSelection.readOrgUnitSelection)()).toEqual({
      selectionItems: [],
      parentOrgUnitIds: []
    });
  });
});
describe('getOrgUnitsToFetch', () => {
  it('counts the units of a selection', () => {
    expect((0, _orgUnitSelection.getOrgUnitsToFetch)(['unitAAAAAAA', 'LEVEL-2'])).toEqual({
      orgUnitIds: ['unitAAAAAAA'],
      needsRoots: false,
      needsUserOrgUnits: false,
      groupIds: []
    });
  });
  it('counts the roots for a level alone, and the user units', () => {
    expect((0, _orgUnitSelection.getOrgUnitsToFetch)(['LEVEL-2', 'USER_ORGUNIT_CHILDREN'])).toEqual({
      orgUnitIds: [],
      needsRoots: true,
      needsUserOrgUnits: true,
      groupIds: []
    });
    expect((0, _orgUnitSelection.getOrgUnitsToFetch)()).toEqual({
      orgUnitIds: [],
      needsRoots: false,
      needsUserOrgUnits: false,
      groupIds: []
    });
  });
  it('lists the groups once each, with no roots for them', () => {
    expect((0, _orgUnitSelection.getOrgUnitsToFetch)(['OU_GROUP-groupAAAAAA', 'OU_GROUP-groupAAAAAA'])).toEqual({
      orgUnitIds: [],
      needsRoots: false,
      needsUserOrgUnits: false,
      groupIds: ['groupAAAAAA']
    });
  });
});
describe('getRequestedLevels', () => {
  const COVERAGE = {
    levels: [{
      id: 'levelNation',
      level: 1
    }, {
      id: 'levelDistri',
      level: 2
    }],
    orgUnits: {
      nation: {
        id: 'nation',
        level: 1
      },
      district: {
        id: 'district',
        level: 2
      },
      facility: {
        id: 'facility',
        level: 4
      }
    },
    rootIds: ['nation'],
    userOrgUnitIds: ['district'],
    groups: {
      groupAAAAAA: {
        2: 3,
        3: 0,
        4: 5
      }
    }
  };
  const targets = (id, boundaries = [], coverage = COVERAGE) => (0, _orgUnitSelection.getRequestedLevels)((0, _orgUnitSelection.parseOrgUnitSelectionItem)(id), boundaries, coverage);
  it('asks a unit at its own level', () => {
    expect(targets('district')).toBeNull();
    expect((0, _orgUnitSelection.getRequestedLevels)({
      id: 'district',
      type: 'ORG_UNIT'
    }, [], COVERAGE)).toEqual([{
      countsKey: 'district',
      level: 2
    }]);
  });
  it('asks a level under each boundary that is above it', () => {
    expect(targets('LEVEL-3', ['nation', 'facility'])).toEqual([{
      countsKey: 'nation',
      level: 3
    }]);
  });
  it('asks a level under the roots without boundaries, by number or id', () => {
    expect(targets('LEVEL-levelDistri')).toEqual([{
      countsKey: 'nation',
      level: 2
    }]);
  });
  it('asks the user units at their level plus the depth', () => {
    expect(targets('USER_ORGUNIT_GRANDCHILDREN')).toEqual([{
      countsKey: 'district',
      level: 4
    }]);
  });
  it('asks a group at each level its members are at', () => {
    expect(targets('OU_GROUP-groupAAAAAA')).toEqual([{
      countsKey: 'groupAAAAAA:2:',
      level: 2,
      groupId: 'groupAAAAAA'
    }, {
      countsKey: 'groupAAAAAA:4:',
      level: 4,
      groupId: 'groupAAAAAA'
    }]);
  });
  it('asks a group under each boundary at or above its members', () => {
    expect(targets('OU_GROUP-groupAAAAAA', ['district', 'facility'])).toEqual([{
      countsKey: 'groupAAAAAA:2:district',
      level: 2,
      groupId: 'groupAAAAAA'
    }, {
      countsKey: 'groupAAAAAA:4:district',
      level: 4,
      groupId: 'groupAAAAAA'
    }, {
      countsKey: 'groupAAAAAA:4:facility',
      level: 4,
      groupId: 'groupAAAAAA'
    }]);
  });
  it('cannot tell for a group, an unknown level, or units not loaded', () => {
    expect(targets('OU_GROUP-notLoadedGr')).toBeNull();
    expect(targets('OU_GROUP-groupAAAAAA', ['notLoadedUn'])).toBeNull();
    expect(targets('LEVEL-unknownLvl')).toBeNull();
    expect(targets('LEVEL-3', ['notLoadedUn'])).toBeNull();
    expect(targets('USER_ORGUNIT', [], {
      ...COVERAGE,
      userOrgUnitIds: null
    })).toBeNull();
    expect(targets('USER_ORGUNIT', [], {
      ...COVERAGE,
      userOrgUnitIds: ['other']
    })).toBeNull();
  });
});