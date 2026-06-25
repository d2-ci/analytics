"use strict";

var _booleanDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/boolean.data.hidena.json"));
var _booleanData = _interopRequireDefault(require("../../../../__demo__/data/event/boolean.data.json"));
var _booleanDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/boolean.data.org.json"));
var _dateDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/date.data.hidena.json"));
var _dateData = _interopRequireDefault(require("../../../../__demo__/data/event/date.data.json"));
var _dateDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/date.data.org.json"));
var _datetimeDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/datetime.data.hidena.json"));
var _datetimeData = _interopRequireDefault(require("../../../../__demo__/data/event/datetime.data.json"));
var _datetimeDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/datetime.data.org.json"));
var _emailDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/email.data.hidena.json"));
var _emailData = _interopRequireDefault(require("../../../../__demo__/data/event/email.data.json"));
var _emailDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/email.data.org.json"));
var _eventstatusDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/eventstatus.data.hidena.json"));
var _eventstatusData = _interopRequireDefault(require("../../../../__demo__/data/event/eventstatus.data.json"));
var _eventstatusDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/eventstatus.data.org.json"));
var _integerDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/integer.data.hidena.json"));
var _integerData = _interopRequireDefault(require("../../../../__demo__/data/event/integer.data.json"));
var _integerDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/integer.data.org.json"));
var _optionsetDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/optionset.data.hidena.json"));
var _optionsetData = _interopRequireDefault(require("../../../../__demo__/data/event/optionset.data.json"));
var _optionsetDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/optionset.data.org.json"));
var _optionsetnovalueDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/optionsetnovalue.data.hidena.json"));
var _optionsetnovalueData = _interopRequireDefault(require("../../../../__demo__/data/event/optionsetnovalue.data.json"));
var _optionsetnovalueDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/optionsetnovalue.data.org.json"));
var _timeDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/time.data.hidena.json"));
var _timeData = _interopRequireDefault(require("../../../../__demo__/data/event/time.data.json"));
var _timeDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/time.data.org.json"));
var _yesonlyDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/yesonly.data.hidena.json"));
var _yesonlyData = _interopRequireDefault(require("../../../../__demo__/data/event/yesonly.data.json"));
var _yesonlyDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/yesonly.data.org.json"));
var _valueTypes = require("../../../valueTypes.js");
var _response = require("../response.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('response', () => {
  describe('getItemFormatterByHeaderName', () => {
    it('should return the correct formatter and format correctly', () => {
      expect((0, _response.getItemFormatterByHeaderName)('eventstatus')('ACTIVE')).toBe('Active');
      expect((0, _response.getItemFormatterByHeaderName)('eventstatus')('COMPLETED')).toBe('Completed');
      expect((0, _response.getItemFormatterByHeaderName)('eventstatus')('SCHEDULE')).toBe('Scheduled');
      expect((0, _response.getItemFormatterByHeaderName)('programstatus')('ACTIVE')).toBe('Active');
      expect((0, _response.getItemFormatterByHeaderName)('programstatus')('COMPLETED')).toBe('Completed');
      expect((0, _response.getItemFormatterByHeaderName)('programstatus')('CANCELLED')).toBe('Cancelled');
    });
  });
  describe('getItemFormatterByValueType', () => {
    it('should return the correct formatter and format correctly', () => {
      expect((0, _response.getItemFormatterByValueType)(_valueTypes.VALUE_TYPE_BOOLEAN)('1')).toBe('Yes');
      expect((0, _response.getItemFormatterByValueType)(_valueTypes.VALUE_TYPE_BOOLEAN)('0')).toBe('No');
      expect((0, _response.getItemFormatterByValueType)(_valueTypes.VALUE_TYPE_TRUE_ONLY)('1')).toBe('Yes');
      expect((0, _response.getItemFormatterByValueType)(_valueTypes.VALUE_TYPE_AGE)('1985-01-01 00:00:00.0')).toBe('1985-01-01');
      expect((0, _response.getItemFormatterByValueType)(_valueTypes.VALUE_TYPE_DATE)('2023-01-01 00:00:00.0')).toBe('2023-01-01');
      expect((0, _response.getItemFormatterByValueType)(_valueTypes.VALUE_TYPE_DATETIME)('2023-01-01 12:00:00.0')).toBe('2023-01-01 12:00');
      expect((0, _response.getItemFormatterByValueType)(_valueTypes.VALUE_TYPE_PERCENTAGE)('50.0')).toBe('50');
      expect((0, _response.getItemFormatterByValueType)('NOT_A_TYPE')).toBe(undefined);
    });
  });
  describe('transformResponse', () => {
    describe('boolean', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_booleanDataOrg.default)).toEqual(_booleanData.default);
      });
      it('transforms response and hides N/A data', () => {
        expect((0, _response.transformResponse)(_booleanDataOrg.default, {
          hideNaData: true
        })).toEqual(_booleanDataHidena.default);
      });
    });
    describe('date', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_dateDataOrg.default)).toEqual(_dateData.default);
      });
      it('transforms response and hides N/A data', () => {
        expect((0, _response.transformResponse)(_dateDataOrg.default, {
          hideNaData: true
        })).toEqual(_dateDataHidena.default);
      });
    });
    describe('datetime', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_datetimeDataOrg.default)).toEqual(_datetimeData.default);
      });
      it('transforms response and hides N/A data', () => {
        expect((0, _response.transformResponse)(_datetimeDataOrg.default, {
          hideNaData: true
        })).toEqual(_datetimeDataHidena.default);
      });
    });
    describe('numeric', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_integerDataOrg.default)).toEqual(_integerData.default);
      });
      it('transforms response and hides N/A data', () => {
        expect((0, _response.transformResponse)(_integerDataOrg.default, {
          hideNaData: true
        })).toEqual(_integerDataHidena.default);
      });
    });
    describe('option set', () => {
      it('transforms response with non-unique codes across two option sets', () => {
        expect((0, _response.transformResponse)(_optionsetDataOrg.default)).toEqual(_optionsetData.default);
      });
      it('transforms response with non-unique codes across two option sets and hides N/A data', () => {
        expect((0, _response.transformResponse)(_optionsetDataOrg.default, {
          hideNaData: true
        })).toEqual(_optionsetDataHidena.default);
      });
    });
    describe('option set with no value', () => {
      it('maps D2__NOVALUE to the "No value" item', () => {
        expect((0, _response.transformResponse)(_optionsetnovalueDataOrg.default)).toEqual(_optionsetnovalueData.default);
      });

      // D2__NOVALUE is an explicitly requested "no value" category, so it
      // must survive even when incidental N/A data is hidden.
      it('keeps the explicitly requested "No value" item when N/A data is hidden', () => {
        expect((0, _response.transformResponse)(_optionsetnovalueDataOrg.default, {
          hideNaData: true
        })).toEqual(_optionsetnovalueDataHidena.default);
      });
    });
    describe('text', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_emailDataOrg.default)).toEqual(_emailData.default);
      });
      it('transforms response and hides N/A data', () => {
        expect((0, _response.transformResponse)(_emailDataOrg.default, {
          hideNaData: true
        })).toEqual(_emailDataHidena.default);
      });
    });
    describe('time', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_timeDataOrg.default)).toEqual(_timeData.default);
      });
      it('transforms response and hides N/A data', () => {
        expect((0, _response.transformResponse)(_timeDataOrg.default, {
          hideNaData: true
        })).toEqual(_timeDataHidena.default);
      });
    });
    describe('yes only', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_yesonlyDataOrg.default)).toEqual(_yesonlyData.default);
      });
      it('transforms response and hides N/A data', () => {
        expect((0, _response.transformResponse)(_yesonlyDataOrg.default, {
          hideNaData: true
        })).toEqual(_yesonlyDataHidena.default);
      });
    });
    describe('eventstatus', () => {
      it('transforms response', () => {
        expect((0, _response.transformResponse)(_eventstatusDataOrg.default)).toEqual(_eventstatusData.default);
      });
      it('transforms response and hides N/A data', () => {
        expect((0, _response.transformResponse)(_eventstatusDataOrg.default, {
          hideNaData: true
        })).toEqual(_eventstatusDataHidena.default);
      });
    });
    describe('category (non-optionset id column)', () => {
      // Regression: a meta column whose cell values are ids (e.g. a
      // CATEGORY data element) that are already named in metaData.items
      // must surface those names, not the raw ids.
      const headerName = 'kO3z4Dhc038.LFsZ8v5v7rq';
      const response = {
        headers: [{
          name: headerName,
          column: 'Implementing Partner',
          valueType: 'TEXT',
          type: 'java.lang.String',
          hidden: false,
          meta: true
        }],
        metaData: {
          items: {
            C6nZpLKjEJr: {
              name: 'African Medical and Research Foundation'
            },
            CW81uF03hvV: {
              name: 'AIDSRelief Consortium'
            },
            [headerName]: {
              name: 'Implementing Partner'
            }
          },
          dimensions: {
            [headerName]: ['C6nZpLKjEJr', 'CW81uF03hvV']
          }
        },
        rows: [['C6nZpLKjEJr'], ['CW81uF03hvV']]
      };
      it('resolves row-value ids to their metaData.items names', () => {
        const result = (0, _response.transformResponse)(response);
        expect(result.metaData.items[`${headerName}_C6nZpLKjEJr`]).toEqual({
          name: 'African Medical and Research Foundation'
        });
        expect(result.metaData.items[`${headerName}_CW81uF03hvV`]).toEqual({
          name: 'AIDSRelief Consortium'
        });
      });
    });
  });
});