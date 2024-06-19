"use strict";

var _singleValue = _interopRequireDefault(require("../singleValue.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('../../../../../util/getFilterText', () => () => 'The filter text');
describe('getSingleValueTitle', () => {
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
});