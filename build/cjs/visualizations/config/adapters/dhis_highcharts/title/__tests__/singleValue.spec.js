"use strict";

var _visTypes = require("../../../../../../modules/visTypes.js");
var _singleValue = _interopRequireDefault(require("../singleValue.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
jest.mock('../../../../../util/getFilterText', () => () => 'The filter text');
describe('getSingleValueTitle', () => {
  it('returns empty title when flag hideTitle exists', () => {
    expect((0, _singleValue.default)({
      hideTitle: true
    })).toEqual('');
  });
  it('returns the title provided in the layout', () => {
    const title = 'The title was already set';
    expect((0, _singleValue.default)({
      title
    })).toEqual(title);
  });
  it('returns null when layout does not have columns', () => {
    expect((0, _singleValue.default)({})).toEqual('');
  });
  it('returns the filter text based on column items', () => {
    expect((0, _singleValue.default)({
      columns: [{
        items: [{}]
      }]
    })).toEqual('The filter text');
  });
  describe('not dashboard', () => {
    it('returns filter text as title', () => {
      expect((0, _singleValue.default)({
        columns: [{
          items: [{}]
        }],
        filters: []
      }, {}, false)).toEqual('The filter text');
    });
  });
  describe('dashboard', () => {
    it('returns empty string', () => {
      expect((0, _singleValue.default)({
        filters: {}
      }, {}, true)).toEqual('');
    });
  });
});