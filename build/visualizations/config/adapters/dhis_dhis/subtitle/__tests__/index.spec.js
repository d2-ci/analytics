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
    return 'The default filter text';
  };
});
describe('getSubtitle', function () {
  it('returns empty subtitle when flag hideSubtitle exists', function () {
    expect((0, _index.default)({
      hideSubtitle: true
    })).toEqual('');
  });
  it('returns the subtitle provided in the layout', function () {
    var subtitle = 'The subtitle was already set';
    expect((0, _index.default)({
      subtitle: subtitle
    })).toEqual(subtitle);
  });
  it('returns subtitle for single value vis', function () {
    expect((0, _index.default)({
      type: _visTypes.VIS_TYPE_SINGLE_VALUE
    })).toEqual('The sv filter title');
  });
  describe('not dashboard', function () {
    describe('layout does not include title', function () {
      it('returns empty subtitle', function () {
        expect((0, _index.default)({
          filters: {}
        }, {}, false)).toEqual('');
      });
    });
    describe('layout includes title', function () {
      it('returns filter title as subtitle', function () {
        expect((0, _index.default)({
          filters: {},
          title: 'Chart title'
        }, {}, false)).toEqual('The default filter text');
      });
    });
  });
  describe('dashboard', function () {
    it('returns filter title as subtitle', function () {
      expect((0, _index.default)({
        filters: {}
      }, {}, true)).toEqual('The default filter text');
    });
  });
});