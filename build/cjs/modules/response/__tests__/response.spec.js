"use strict";

var _booleanData = _interopRequireDefault(require("../../../__demo__/data/event/boolean.data.json"));
var _booleanDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/boolean.data.org.json"));
var _numericData = _interopRequireDefault(require("../../../__demo__/data/event/numeric.data.json"));
var _numericDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/numeric.data.org.json"));
var _optionsetData = _interopRequireDefault(require("../../../__demo__/data/event/optionset.data.json"));
var _optionsetDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/optionset.data.org.json"));
var _optionsetsData = _interopRequireDefault(require("../../../__demo__/data/event/optionsets.data.json"));
var _optionsetsDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/optionsets.data.org.json"));
var _yesonlyData = _interopRequireDefault(require("../../../__demo__/data/event/yesonly.data.json"));
var _yesonlyDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/yesonly.data.org.json"));
var _response = require("../response.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('response', () => {
  describe('removeNaDimensionItems', () => {
    it('removes empty strings from array values', () => {
      const input = {
        dim1: ['a', '', 'b'],
        dim2: ['']
      };
      const expected = {
        dim1: ['a', 'b'],
        dim2: []
      };
      expect((0, _response.removeNaDimensionItems)(input)).toEqual(expected);
    });
    it('leaves non-array values unchanged', () => {
      const input = {
        dim1: 'abc',
        dim2: 123,
        dim3: null
      };
      const expected = {
        dim1: 'abc',
        dim2: 123,
        dim3: null
      };
      expect((0, _response.removeNaDimensionItems)(input)).toEqual(expected);
    });
    it('returns an empty object when given an empty object', () => {
      expect((0, _response.removeNaDimensionItems)({})).toEqual({});
    });
  });
  describe('transformResponse', () => {
    describe('numeric', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_numericDataOrg.default)).toEqual(_numericData.default);
      });
      it('transforms response and hides N/A', () => {
        expect((0, _response.transformResponse)(_numericDataOrg.default, {
          hideNaData: true
        }).metaData.dimensions['Zj7UnCAulEk.qrur9Dvnyt5'].includes('')).toEqual(false);
      });
    });
    describe('option set', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_optionsetDataOrg.default, {
          hideNaData: false
        })).toEqual(_optionsetData.default);
      });
      it('transforms response and hides N/A', () => {
        expect((0, _response.transformResponse)(_optionsetDataOrg.default, {
          hideNaData: true
        }).metaData.dimensions['Zj7UnCAulEk.fWIAEtYVEGk'].includes('')).toBe(false);
      });
      it('transforms response with non-unique codes across two option sets', () => {
        expect((0, _response.transformResponse)(_optionsetsDataOrg.default)).toEqual(_optionsetsData.default);
      });
    });
    describe('boolean', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_booleanDataOrg.default)).toEqual(_booleanData.default);
      });
      it('transforms response and hides N/A', () => {
        expect((0, _response.transformResponse)(_booleanDataOrg.default, {
          hideNaData: true
        }).metaData.dimensions['A03MvHHogjR.bx6fsa0t90x'].includes('')).toBe(false);
      });
    });
    describe('yes only', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_yesonlyDataOrg.default)).toEqual(_yesonlyData.default);
      });
      it('transforms response and hides N/A', () => {
        expect((0, _response.transformResponse)(_yesonlyDataOrg.default, {
          hideNaData: true
        }).metaData.dimensions['jfuXZB3A1ko.hwG20Dyj6RK'].includes('')).toBe(false);
      });
    });
  });
});