"use strict";

var _visTypes = require("../../../../../../modules/visTypes.js");
var _index = _interopRequireDefault(require("../index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('../singleValue', () => () => 'The sv filter title');
jest.mock('../../../../../util/getFilterText', () => () => 'The default filter text');
describe('getSubtitle', () => {
  it('returns empty subtitle when flag hideSubtitle exists', () => {
    expect((0, _index.default)({
      hideSubtitle: true
    })).toEqual('');
  });
  it('returns the subtitle provided in the layout', () => {
    const subtitle = 'The subtitle was already set';
    expect((0, _index.default)({
      subtitle
    })).toEqual(subtitle);
  });
  it('returns subtitle for single value vis', () => {
    expect((0, _index.default)({
      type: _visTypes.VIS_TYPE_SINGLE_VALUE
    })).toEqual('The sv filter title');
  });
  describe('not dashboard', () => {
    describe('layout does not include title', () => {
      it('returns empty subtitle', () => {
        expect((0, _index.default)({
          filters: {}
        }, {}, false)).toEqual('');
      });
    });
    describe('layout includes title', () => {
      it('returns filter title as subtitle', () => {
        expect((0, _index.default)({
          filters: {},
          title: 'Chart title'
        }, {}, false)).toEqual('The default filter text');
      });
    });
  });
  describe('dashboard', () => {
    it('returns filter title as subtitle', () => {
      expect((0, _index.default)({
        filters: {}
      }, {}, true)).toEqual('The default filter text');
    });
  });
});