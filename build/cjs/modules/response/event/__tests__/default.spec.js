"use strict";

var _valueTypes = require("../../../valueTypes.js");
var _default = require("../default.js");
var _response = require("../response.js");
const testId = 'Zj7UnCAulEk.qrur9Dvnyt5';
describe('default', () => {
  // applyDefaultHandler is tested by response.spec.js

  describe('getUnique', () => {
    it('removes duplicate string numbers', () => {
      const arr = ['2', '10', '2', '01', '1', '-1', '-1', '1', '10'];
      expect((0, _default.getUnique)(arr)).toEqual(['2', '10', '01', '1', '-1']);
    });
    it('treats "01" and "1" as different strings', () => {
      const arr = ['01', '1', '01'];
      expect((0, _default.getUnique)(arr)).toEqual(['01', '1']);
    });
    it('handles empty array', () => {
      expect((0, _default.getUnique)([])).toEqual([]);
    });
    it('preserves order of first occurrence', () => {
      const arr = ['2', '1', '2', '1'];
      expect((0, _default.getUnique)(arr)).toEqual(['2', '1']);
    });
  });
  describe('getValuesUniqueSortedAsc', () => {
    it('sorts string numbers numerically', () => {
      expect((0, _default.getValuesUniqueSortedAsc)(['1', '10', '-1', '5', '5', '3'], _valueTypes.VALUE_TYPE_NUMBER)).toEqual(['-1', '1', '3', '5', '10']);
    });
    it('sorts non-numeric strings as strings', () => {
      expect((0, _default.getValuesUniqueSortedAsc)(['1995-04-18 13:54:00.0', '1991-12-03 12:02:00.0', '1992-01-05 12:51:00.0', '1991-05-21 14:46:00.0', '1998-03-01 11:21:00.0', '1991-09-02 10:21:00.0', '1992-01-04 12:02:00.0', '1991-12-02 12:01:00.0', '1990-01-25 14:51:00.0', '1991-05-22 14:47:00.0'])).toEqual(['1990-01-25 14:51:00.0', '1991-05-21 14:46:00.0', '1991-05-22 14:47:00.0', '1991-09-02 10:21:00.0', '1991-12-02 12:01:00.0', '1991-12-03 12:02:00.0', '1992-01-04 12:02:00.0', '1992-01-05 12:51:00.0', '1995-04-18 13:54:00.0', '1998-03-01 11:21:00.0']);
    });
  });
  describe('getPrefixedValue', () => {
    it('returns prefix and value separated by a colon', () => {
      expect((0, _default.getPrefixedValue)('123', 'id')).toBe(`id${_response.PREFIX_SEPARATOR}123`);
    });
  });
  describe('getItems', () => {
    it('returns an object with prefixed keys and correct names', () => {
      expect((0, _default.getItems)(['1', '2'], testId)).toEqual({
        [testId + `${_response.PREFIX_SEPARATOR}1`]: {
          name: '1'
        },
        [testId + `${_response.PREFIX_SEPARATOR}2`]: {
          name: '2'
        }
      });
    });
    it('uses the formatter if one is provided', () => {
      expect((0, _default.getItems)(['world'], 'hello', {
        itemFormatter: str => str.toUpperCase()
      })).toEqual({
        [`hello${_response.PREFIX_SEPARATOR}world`]: {
          name: 'WORLD'
        }
      });
    });
    it('resolves names from the items map when value matches an item id', () => {
      const items = {
        C6nZpLKjEJr: {
          name: 'African Medical and Research Foundation'
        },
        CW81uF03hvV: {
          name: 'AIDSRelief Consortium'
        }
      };
      expect((0, _default.getItems)(['C6nZpLKjEJr', 'CW81uF03hvV'], 'kO3z4Dhc038.LFsZ8v5v7rq', {
        items
      })).toEqual({
        [`kO3z4Dhc038.LFsZ8v5v7rq${_response.PREFIX_SEPARATOR}C6nZpLKjEJr`]: {
          name: 'African Medical and Research Foundation'
        },
        [`kO3z4Dhc038.LFsZ8v5v7rq${_response.PREFIX_SEPARATOR}CW81uF03hvV`]: {
          name: 'AIDSRelief Consortium'
        }
      });
    });
    it('falls back to the raw value when no matching item exists (free text)', () => {
      const items = {
        jfuXZB3A1ko: {
          name: 'Stage 1 - Repeatable'
        }
      };
      expect((0, _default.getItems)(['email@address.com'], 'jfuXZB3A1ko.RUZ2EBP6HQn', {
        items
      })).toEqual({
        [`jfuXZB3A1ko.RUZ2EBP6HQn${_response.PREFIX_SEPARATOR}email@address.com`]: {
          name: 'email@address.com'
        }
      });
    });
    it('prefers the formatter over the items lookup when both are provided', () => {
      const items = {
        1: {
          name: 'should not be used'
        }
      };
      expect((0, _default.getItems)(['1'], 'foo', {
        items,
        itemFormatter: () => 'Yes'
      })).toEqual({
        [`foo${_response.PREFIX_SEPARATOR}1`]: {
          name: 'Yes'
        }
      });
    });
  });
  describe('getDimensions', () => {
    it('returns an object with dimensionId as key and correctly prefixed values', () => {
      expect((0, _default.getDimensions)(['1', '2'], testId)).toEqual({
        [testId]: [testId + `${_response.PREFIX_SEPARATOR}1`, testId + `${_response.PREFIX_SEPARATOR}2`]
      });
    });
  });
  describe('getRows', () => {
    it('prefixes value at headerIndex for each row', () => {
      const rows = [['a', '1', 'x'], ['b', '2', 'y']];
      expect((0, _default.getRows)(rows, 1, testId)).toEqual([['a', `${testId}${_response.PREFIX_SEPARATOR}1`, 'x'], ['b', `${testId}${_response.PREFIX_SEPARATOR}2`, 'y']]);
    });
    it('handles empty rows array', () => {
      expect((0, _default.getRows)([], 1, 'a')).toEqual([]);
    });
  });
});