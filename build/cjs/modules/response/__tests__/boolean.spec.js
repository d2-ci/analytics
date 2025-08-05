"use strict";

var _booleanData = _interopRequireDefault(require("../../../__demo__/data/event/boolean.data.json"));
var _booleanDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/boolean.data.org.json"));
var _boolean = require("../boolean.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const headerIndex = 0;
describe('boolean', () => {
  describe('applyBooleanHandler', () => {
    it('should return the transformed response', () => {
      expect((0, _boolean.applyBooleanHandler)(_booleanDataOrg.default, headerIndex)).toEqual(_booleanData.default);
    });
  });
});