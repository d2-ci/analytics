"use strict";

var _dateDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/date.data.hidena.json"));
var _dateDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/date.data.org.json"));
var _datetimeDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/datetime.data.hidena.json"));
var _datetimeDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/datetime.data.org.json"));
var _integerDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/integer.data.hidena.json"));
var _integerDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/integer.data.org.json"));
var _valueTypes = require("../../../valueTypes.js");
var _default = require("../default.js");
var _response = require("../response.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const testId = 'Zj7UnCAulEk.qrur9Dvnyt5';
const headerIndex = 0;
describe('default', () => {
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
  describe('applyDefaultHandler', () => {
    describe('should return the transformed response', () => {
      test('date', () => {
        expect((0, _default.applyDefaultHandler)(_dateDataOrg.default, headerIndex, {
          itemFormatter: (0, _response.getItemFormatterByValueType)(_valueTypes.VALUE_TYPE_DATE)
        })).toEqual(_dateDataHidena.default);
      });
      test('datetime', () => {
        expect((0, _default.applyDefaultHandler)(_datetimeDataOrg.default, headerIndex, {
          itemFormatter: (0, _response.getItemFormatterByValueType)(_valueTypes.VALUE_TYPE_DATETIME)
        })).toEqual(_datetimeDataHidena.default);
      });
      test('numeric', () => {
        expect((0, _default.applyDefaultHandler)(_integerDataOrg.default, headerIndex)).toEqual(_integerDataHidena.default);
      });
    });
  });
});