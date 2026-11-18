"use strict";

var _singleValue = require("../singleValue.js");
jest.mock('../../../../../util/getFilterText', () => () => 'The filter text');
describe('getSingleValueTitle', () => {
  it('returns empty title when flag hideTitle exists', () => {
    expect((0, _singleValue.getSingleValueTitleText)({
      hideTitle: true
    })).toEqual('');
  });
  it('returns the title provided in the layout', () => {
    const title = 'The title was already set';
    expect((0, _singleValue.getSingleValueTitleText)({
      title
    })).toEqual(title);
  });
  it('returns null when layout does not have columns', () => {
    expect((0, _singleValue.getSingleValueTitleText)({})).toEqual('');
  });
  it('returns the filter text based on column items', () => {
    expect((0, _singleValue.getSingleValueTitleText)({
      columns: [{
        items: [{}]
      }]
    })).toEqual('The filter text');
  });
  describe('not dashboard', () => {
    it('returns filter text as title', () => {
      expect((0, _singleValue.getSingleValueTitleText)({
        columns: [{
          items: [{}]
        }],
        filters: []
      }, {}, false)).toEqual('The filter text');
    });
  });
  describe('dashboard', () => {
    it('returns empty string', () => {
      expect((0, _singleValue.getSingleValueTitleText)({
        filters: {}
      }, {}, true)).toEqual('');
    });
  });
});