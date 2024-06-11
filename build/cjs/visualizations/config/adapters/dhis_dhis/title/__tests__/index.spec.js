"use strict";

var _visTypes = require("../../../../../../modules/visTypes.js");

var _index = _interopRequireDefault(require("../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../singleValue', () => () => 'The sv filter title');
jest.mock('../../../../../util/getFilterText', () => () => 'The filter text');
describe('getTitle', () => {
  it('returns empty title when flag hideTitle exists', () => {
    expect((0, _index.default)({
      hideTitle: true
    })).toEqual('');
  });
  it('returns the title provided in the layout', () => {
    const title = 'The title was already set';
    expect((0, _index.default)({
      title
    })).toEqual(title);
  });
  it('returns title for single value vis', () => {
    expect((0, _index.default)({
      type: _visTypes.VIS_TYPE_SINGLE_VALUE
    })).toEqual('The sv filter title');
  });
  describe('not dashboard', () => {
    it('returns filter text as title', () => {
      expect((0, _index.default)({
        filters: {}
      }, {}, false)).toEqual('The filter text');
    });
  });
  describe('dashboard', () => {
    it('returns empty string', () => {
      expect((0, _index.default)({
        filters: {}
      }, {}, true)).toEqual('');
    });
  });
});