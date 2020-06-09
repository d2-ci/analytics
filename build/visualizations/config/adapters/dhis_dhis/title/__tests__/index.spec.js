"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _index = _interopRequireDefault(require("../index"));

var _visTypes = require("../../../../../../modules/visTypes");

jest.mock('../singleValue', function () {
  return function () {
    return 'The sv filter title';
  };
});
jest.mock('../../../../../util/getFilterText', function () {
  return function () {
    return 'The filter text';
  };
});
describe('getTitle', function () {
  it('returns empty title when flag hideTitle exists', function () {
    expect((0, _index.default)({
      hideTitle: true
    })).toEqual('');
  });
  it('returns the title provided in the layout', function () {
    var title = 'The title was already set';
    expect((0, _index.default)({
      title: title
    })).toEqual(title);
  });
  it('returns title for single value vis', function () {
    expect((0, _index.default)({
      type: _visTypes.VIS_TYPE_SINGLE_VALUE
    })).toEqual('The sv filter title');
  });
  describe('not dashboard', function () {
    it('returns filter text as title', function () {
      expect((0, _index.default)({
        filters: {}
      }, {}, false)).toEqual('The filter text');
    });
  });
  describe('dashboard', function () {
    it('returns empty string', function () {
      expect((0, _index.default)({
        filters: {}
      }, {}, true)).toEqual('');
    });
  });
});