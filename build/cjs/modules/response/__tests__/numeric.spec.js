"use strict";

var _numericData = _interopRequireDefault(require("../../../__demo__/data/event/numeric.data.json"));
var _numericDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/numeric.data.org.json"));
var _numeric = require("../numeric.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const testId = 'Zj7UnCAulEk.qrur9Dvnyt5';
const headerIndex = 0;
describe('numeric', () => {
  describe('getUnique', () => {
    it('removes duplicate string numbers and preserves first occurrence', () => {
      const arr = ['2', '10', '2', '01', '1', '-1', '-1', '1', '10'];
      expect((0, _numeric.getUnique)(arr)).toEqual(['2', '10', '01', '1', '-1']);
    });
    it('treats "01" and "1" as different strings', () => {
      const arr = ['01', '1', '01'];
      expect((0, _numeric.getUnique)(arr)).toEqual(['01', '1']);
    });
    it('returns an empty array when given an empty array', () => {
      expect((0, _numeric.getUnique)([])).toEqual([]);
    });
    it('handles array with only one item', () => {
      expect((0, _numeric.getUnique)(['42'])).toEqual(['42']);
    });
    it('preserves order of first occurrence', () => {
      const arr = ['2', '1', '2', '1'];
      expect((0, _numeric.getUnique)(arr)).toEqual(['2', '1']);
    });
  });
  describe('sortStringsAsNumbersAsc', () => {
    it('sorts array of number strings numerically ascending', () => {
      const arr = ['10', '2', '1'];
      expect((0, _numeric.sortStringsAsNumbersAsc)(arr)).toEqual(['1', '2', '10']);
    });
    it('handles negative numbers and zeros as strings', () => {
      const arr = ['0', '-2', '5', '-10'];
      expect((0, _numeric.sortStringsAsNumbersAsc)(arr)).toEqual(['-10', '-2', '0', '5']);
    });
    it('sorts strings with leading zeros numerically', () => {
      const arr = ['01', '1', '002', '2'];
      expect((0, _numeric.sortStringsAsNumbersAsc)(arr)).toEqual(['01', '1', '002', '2']);
    });
    it('returns empty array when given empty array', () => {
      expect((0, _numeric.sortStringsAsNumbersAsc)([])).toEqual([]);
    });
    it('handles array with one item', () => {
      expect((0, _numeric.sortStringsAsNumbersAsc)(['7'])).toEqual(['7']);
    });
  });
  describe('getPrefixedValue', () => {
    it('returns prefix and value separated by a colon', () => {
      expect((0, _numeric.getPrefixedValue)('123', 'id')).toBe('id:123');
    });
    it('works with empty string prefix', () => {
      expect((0, _numeric.getPrefixedValue)('abc', '')).toBe(':abc');
    });
    it('works with empty string value', () => {
      expect((0, _numeric.getPrefixedValue)('', 'test')).toBe('');
    });
    it('works with both prefix and value empty', () => {
      expect((0, _numeric.getPrefixedValue)('', '')).toBe('');
    });
  });
  describe('getNumericItems', () => {
    it('returns an object with prefixed keys and correct names', () => {
      const values = ['1', '2', ''];
      expect((0, _numeric.getNumericItems)(values, testId)).toEqual({
        [testId + ':1']: {
          name: '1'
        },
        [testId + ':2']: {
          name: '2'
        },
        '': {
          name: 'N/A'
        }
      });
    });
    it('handles empty values array', () => {
      expect((0, _numeric.getNumericItems)([], 'prefix')).toEqual({});
    });
  });
  describe('getNumericDimension', () => {
    it('returns object with dimensionId as key and correctly prefixed values', () => {
      const values = ['1', '2', ''];
      expect((0, _numeric.getNumericDimension)(values, testId)).toEqual({
        [testId]: [testId + ':1', testId + ':2', '']
      });
    });
    it('handles empty values array', () => {
      expect((0, _numeric.getNumericDimension)([], 'prefix')).toEqual({
        prefix: []
      });
    });
  });
  describe('getNumericRows', () => {
    it('prefixes value at headerIndex for each row', () => {
      const rows = [['a', '1', 'x'], ['b', '2', 'y'], ['c', '', 'z']];
      const headerIndex = 1;
      expect((0, _numeric.getNumericRows)(rows, headerIndex, testId)).toEqual([['a', testId + ':1', 'x'], ['b', testId + ':2', 'y'], ['c', '', 'z']]);
    });
    it('handles empty rows array', () => {
      expect((0, _numeric.getNumericRows)([], 1, 'a')).toEqual([]);
    });
  });
  describe('applyNumericHandler', () => {
    it('should return the transformed response', () => {
      expect((0, _numeric.applyNumericHandler)(_numericDataOrg.default, headerIndex)).toEqual(_numericData.default);
    });
  });
});