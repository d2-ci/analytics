"use strict";

var _booleanDataHidena = _interopRequireDefault(require("../../../__demo__/data/event/boolean.data.hidena.json"));
var _booleanDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/boolean.data.org.json"));
var _yesonlyDataHidena = _interopRequireDefault(require("../../../__demo__/data/event/yesonly.data.hidena.json"));
var _yesonlyDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/yesonly.data.org.json"));
var _boolean = require("../boolean.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const headerIndex = 0;
describe('boolean', () => {
  describe('applyBooleanHandler', () => {
    describe('yes/no', () => {
      it('should return the transformed response', () => {
        expect((0, _boolean.applyBooleanHandler)(_booleanDataOrg.default, headerIndex)).toEqual(_booleanDataHidena.default);
      });
    });
    describe('yes only', () => {
      it('should return the transformed response', () => {
        expect((0, _boolean.applyBooleanHandler)(_yesonlyDataOrg.default, headerIndex)).toEqual(_yesonlyDataHidena.default);
      });
    });
  });
});