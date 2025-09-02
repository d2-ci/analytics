"use strict";

var _booleanDataHidena = _interopRequireDefault(require("../../../__demo__/data/event/boolean.data.hidena.json"));
var _booleanData = _interopRequireDefault(require("../../../__demo__/data/event/boolean.data.json"));
var _booleanDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/boolean.data.org.json"));
var _dateDataHidena = _interopRequireDefault(require("../../../__demo__/data/event/date.data.hidena.json"));
var _dateData = _interopRequireDefault(require("../../../__demo__/data/event/date.data.json"));
var _dateDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/date.data.org.json"));
var _emailDataHidena = _interopRequireDefault(require("../../../__demo__/data/event/email.data.hidena.json"));
var _emailData = _interopRequireDefault(require("../../../__demo__/data/event/email.data.json"));
var _emailDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/email.data.org.json"));
var _integerDataHidena = _interopRequireDefault(require("../../../__demo__/data/event/integer.data.hidena.json"));
var _integerData = _interopRequireDefault(require("../../../__demo__/data/event/integer.data.json"));
var _integerDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/integer.data.org.json"));
var _optionsetDataHidena = _interopRequireDefault(require("../../../__demo__/data/event/optionset.data.hidena.json"));
var _optionsetData = _interopRequireDefault(require("../../../__demo__/data/event/optionset.data.json"));
var _optionsetDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/optionset.data.org.json"));
var _yesonlyDataHidena = _interopRequireDefault(require("../../../__demo__/data/event/yesonly.data.hidena.json"));
var _yesonlyData = _interopRequireDefault(require("../../../__demo__/data/event/yesonly.data.json"));
var _yesonlyDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/yesonly.data.org.json"));
var _response = require("../response.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('response', () => {
  describe('transformResponse', () => {
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
  });
});