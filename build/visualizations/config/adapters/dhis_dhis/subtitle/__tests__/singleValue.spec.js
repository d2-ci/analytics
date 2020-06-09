"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _singleValue = _interopRequireDefault(require("../singleValue"));

jest.mock('../../../../../util/getFilterText', function () {
  return function () {
    return 'The filter text';
  };
});
describe('getSingleValueSubtitle', function () {
  it('returns null when layout does not have filters', function () {
    expect((0, _singleValue.default)({})).toEqual('');
  });
  it('returns the filter text', function () {
    expect((0, _singleValue.default)({
      filters: []
    })).toEqual('The filter text');
  });
});