"use strict";

var _orgUnitQueries = require("../orgUnitQueries.js");
describe('orgUnitQueries', () => {
  it('counts with one org unit per page', () => {
    expect((0, _orgUnitQueries.countQuery)(['level:eq:2'])).toEqual({
      resource: 'organisationUnits',
      params: {
        filter: ['level:eq:2'],
        fields: 'id',
        pageSize: 1
      }
    });
  });
  it('reads the total from the pager', () => {
    expect((0, _orgUnitQueries.getTotal)({
      pager: {
        total: 1166
      }
    })).toBe(1166);
    expect((0, _orgUnitQueries.getTotal)({
      organisationUnits: []
    })).toBe(0);
    expect((0, _orgUnitQueries.getTotal)(undefined)).toBe(0);
  });
  it('filters by assignment and by group', () => {
    expect((0, _orgUnitQueries.assignedTo)({
      id: 'formAAAAAAA',
      field: 'dataSets'
    })).toBe('dataSets.id:eq:formAAAAAAA');
    expect((0, _orgUnitQueries.inGroup)('groupAAAAAA')).toBe('organisationUnitGroups.id:eq:groupAAAAAA');
  });
  it('sends every query in one request, keyed by position', async () => {
    const engine = {
      query: jest.fn(async () => ({
        count0: 1
      }))
    };
    expect(await (0, _orgUnitQueries.queryAll)(engine, [['a', (0, _orgUnitQueries.countQuery)([])]])).toEqual({
      count0: 1
    });
    expect(engine.query).toHaveBeenCalledWith({
      count0: (0, _orgUnitQueries.countQuery)([])
    });
    expect(await (0, _orgUnitQueries.queryAll)(engine, [])).toEqual({});
    expect(engine.query).toHaveBeenCalledTimes(1);
  });
  it('sorts the levels', () => {
    expect((0, _orgUnitQueries.readLevels)({
      levels: {
        organisationUnitLevels: [{
          id: 'levelTwo',
          level: 2,
          displayName: 'District'
        }, {
          id: 'levelOne',
          level: 1,
          displayName: 'National'
        }]
      }
    })).toEqual([{
      id: 'levelOne',
      level: 1,
      name: 'National'
    }, {
      id: 'levelTwo',
      level: 2,
      name: 'District'
    }]);
    expect((0, _orgUnitQueries.readLevels)(undefined)).toEqual([]);
  });
});