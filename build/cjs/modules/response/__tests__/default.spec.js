"use strict";

var _numericDataHidena = _interopRequireDefault(require("../../../__demo__/data/event/numeric.data.hidena.json"));
var _numericDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/numeric.data.org.json"));
var _default = require("../default.js");
var _response = require("../response.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const testId = 'Zj7UnCAulEk.qrur9Dvnyt5';
const headerIndex = 0;
describe('numeric', () => {
  describe('getUnique', () => {
    it('removes duplicate string numbers and preserves first occurrence', () => {
      const arr = ['2', '10', '2', '01', '1', '-1', '-1', '1', '10'];
      expect((0, _default.getUnique)(arr)).toEqual(['2', '10', '01', '1', '-1']);
    });
    it('treats "01" and "1" as different strings', () => {
      const arr = ['01', '1', '01'];
      expect((0, _default.getUnique)(arr)).toEqual(['01', '1']);
    });
    it('returns an empty array when given an empty array', () => {
      expect((0, _default.getUnique)([])).toEqual([]);
    });
    it('handles array with only one item', () => {
      expect((0, _default.getUnique)(['42'])).toEqual(['42']);
    });
    it('preserves order of first occurrence', () => {
      const arr = ['2', '1', '2', '1'];
      expect((0, _default.getUnique)(arr)).toEqual(['2', '1']);
    });
  });
  describe('sortStringsAsNumbersAsc', () => {
    it('sorts array of number strings numerically ascending', () => {
      const arr = ['10', '2', '1'];
      expect((0, _default.sortValuesAsc)(arr)).toEqual(['1', '2', '10']);
    });
    it('handles negative numbers and zeros as strings', () => {
      const arr = ['0', '-2', '5', '-10'];
      expect((0, _default.sortValuesAsc)(arr)).toEqual(['-10', '-2', '0', '5']);
    });
    it('sorts strings with leading zeros numerically', () => {
      const arr = ['01', '1', '002', '2'];
      expect((0, _default.sortValuesAsc)(arr)).toEqual(['01', '1', '002', '2']);
    });
    it('returns empty array when given empty array', () => {
      expect((0, _default.sortValuesAsc)([])).toEqual([]);
    });
    it('handles array with one item', () => {
      expect((0, _default.sortValuesAsc)(['7'])).toEqual(['7']);
    });
  });
  describe('sortValuesAsc', () => {
    expect((0, _default.sortValuesAsc)([['1', 'a'], ['5', 'b'], ['-1', 'c'], ['', 'd'], ['5', 'e'], ['3', 'f']], headerIndex)).toEqual(['-1', '1', '3', '5']);
  });
  describe('getPrefixedValue', () => {
    it('returns prefix and value separated by a colon', () => {
      expect((0, _default.getPrefixedValue)('123', 'id')).toBe(`id${_response.PREFIX_SEPARATOR}123`);
    });
  });
  describe('getNumericItems', () => {
    it('returns an object with prefixed keys and correct names', () => {
      const values = ['1', '2'];
      expect((0, _default.getItems)(values, testId)).toEqual({
        [testId + `${_response.PREFIX_SEPARATOR}1`]: {
          name: '1'
        },
        [testId + `${_response.PREFIX_SEPARATOR}2`]: {
          name: '2'
        }
      });
    });
  });
  describe('getNumericDimension', () => {
    it('returns object with dimensionId as key and correctly prefixed values', () => {
      const values = ['1', '2'];
      expect((0, _default.getDimensions)(values, testId)).toEqual({
        [testId]: [testId + `${_response.PREFIX_SEPARATOR}1`, testId + `${_response.PREFIX_SEPARATOR}2`]
      });
    });
  });
  describe('getNumericRows', () => {
    it('prefixes value at headerIndex for each row', () => {
      const rows = [['a', '1', 'x'], ['b', '2', 'y'], ['c', _response.NA_VALUE, 'z']];
      const headerIndex = 1;
      expect((0, _default.getRows)(rows, headerIndex, testId)).toEqual([['a', testId + `${_response.PREFIX_SEPARATOR}1`, 'x'], ['b', testId + `${_response.PREFIX_SEPARATOR}2`, 'y'], ['c', _response.NA_VALUE, 'z']]);
    });
    it('handles empty rows array', () => {
      expect((0, _default.getRows)([], 1, 'a')).toEqual([]);
    });
  });
  describe('applyNumericHandler', () => {
    it('should return the transformed response', () => {
      expect((0, _default.applyDefaultHandler)(_numericDataOrg.default, headerIndex)).toEqual(_numericDataHidena.default);
    });
  });
});