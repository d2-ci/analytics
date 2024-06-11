"use strict";

var _singleValue = _interopRequireDefault(require("../singleValue.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
jest.mock('../../../../../util/getFilterText', () => () => 'The filter text');
describe('getSingleValueSubtitle', () => {
  it('returns null when layout does not have filters', () => {
    expect((0, _singleValue.default)({})).toEqual('');
  });
  it('returns the filter text', () => {
    expect((0, _singleValue.default)({
      filters: []
    })).toEqual('The filter text');
  });
});