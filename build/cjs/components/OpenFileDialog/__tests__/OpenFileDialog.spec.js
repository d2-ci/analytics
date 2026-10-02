"use strict";

var _visTypes = require("../../../modules/visTypes.js");
var _CreatedByFilter = require("../CreatedByFilter.js");
var _OpenFileDialog = require("../OpenFileDialog.js");
describe('OpenFileDialog - formatFilters', () => {
  const currentUser = {
    id: 'test-user'
  };
  const createdByTestCases = [[_CreatedByFilter.CREATED_BY_ALL, []], [_CreatedByFilter.CREATED_BY_CURRENT_USER, [`user.id:eq:${currentUser.id}`]], [_CreatedByFilter.CREATED_BY_ALL_BUT_CURRENT_USER, [`user.id:!eq:${currentUser.id}`]]];
  test.each(createdByTestCases)('formats the createdBy filter given %p', (createdBy, expected) => expect((0, _OpenFileDialog.formatFilters)(currentUser, {
    createdBy
  })).toEqual(expected));
  test('formats the searchTerm filter', () => {
    const testSearchTerm = 'test search term';
    expect((0, _OpenFileDialog.formatFilters)(currentUser, {
      searchTerm: testSearchTerm
    })).toEqual([`identifiable:token:${testSearchTerm}`]);
  });
  const typeTestCases = [
  // no type filter when no visType nor filterVisTypes
  [undefined, undefined, []],
  // no type filter because VIS_TYPE_GROUP_ALL is selected
  [undefined, _visTypes.VIS_TYPE_GROUP_ALL, []],
  // only VIS_TYPE_PIVOT_TABLE ignored because no filterVisTypes is passed and VIS_TYPE_GROUP_CHARTS is selected
  [undefined, _visTypes.VIS_TYPE_GROUP_CHARTS, [`type:!eq:${_visTypes.VIS_TYPE_PIVOT_TABLE}`]],
  // no filterVisTypes and VIS_TYPE_PIVOT_TABLE selected
  [undefined, _visTypes.VIS_TYPE_PIVOT_TABLE, [`type:eq:${_visTypes.VIS_TYPE_PIVOT_TABLE}`]],
  // group types are ignored
  [[_visTypes.VIS_TYPE_PIVOT_TABLE, _visTypes.VIS_TYPE_GROUP_ALL, _visTypes.VIS_TYPE_GROUP_CHARTS], _visTypes.VIS_TYPE_GROUP_ALL, [`type:in:[${_visTypes.VIS_TYPE_PIVOT_TABLE}]`]],
  // VIS_TYPE_PIVOT_TABLE is ignored because VIS_TYPE_GROUP_CHARTS is selected
  [[_visTypes.VIS_TYPE_PIVOT_TABLE, _visTypes.VIS_TYPE_COLUMN, _visTypes.VIS_TYPE_GROUP_CHARTS], _visTypes.VIS_TYPE_GROUP_CHARTS, [`type:in:[${_visTypes.VIS_TYPE_COLUMN}]`]],
  // when filterVisTypes is passed the default type filter only include those
  [[_visTypes.VIS_TYPE_PIVOT_TABLE], '', [`type:in:[${_visTypes.VIS_TYPE_PIVOT_TABLE}]`]], [[_visTypes.VIS_TYPE_LINE_LIST, _visTypes.VIS_TYPE_PIVOT_TABLE], '', [`type:in:[${_visTypes.VIS_TYPE_LINE_LIST},${_visTypes.VIS_TYPE_PIVOT_TABLE}]`]]];
  test.each(typeTestCases)('formats the type filter given %p and %p', (types, visType, expected) => expect((0, _OpenFileDialog.formatFilters)(currentUser, {
    visType
  }, types === null || types === void 0 ? void 0 : types.map(type => ({
    type
  })))).toEqual(expected));
  test('combined filters', () => {
    expect((0, _OpenFileDialog.formatFilters)(currentUser, {
      createdBy: _CreatedByFilter.CREATED_BY_CURRENT_USER,
      searchTerm: 'test',
      visType: _visTypes.VIS_TYPE_GROUP_ALL
    }, [{
      type: _visTypes.VIS_TYPE_LINE_LIST
    }, {
      type: _visTypes.VIS_TYPE_PIVOT_TABLE
    }])).toEqual([`identifiable:token:test`, `user.id:eq:${currentUser.id}`, `type:in:[${_visTypes.VIS_TYPE_LINE_LIST},${_visTypes.VIS_TYPE_PIVOT_TABLE}]`]);
  });
});