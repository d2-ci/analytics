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
  describe('transformResponse', () => {
    it('transforms numeric response', () => {
      expect((0, _response.transformResponse)(_numericDataOrg.default)).toEqual(_numericData.default);
    });
    it('transforms option set response', () => {
      expect((0, _response.transformResponse)(_optionsetDataOrg.default)).toEqual(_optionsetData.default);
    });
    it('transforms option set response with non-unique codes across two option sets', () => {
      expect((0, _response.transformResponse)(_optionsetsDataOrg.default)).toEqual(_optionsetsData.default);
    });
    it('transforms boolean response', () => {
      expect((0, _response.transformResponse)(_booleanDataOrg.default)).toEqual(_booleanData.default);
    });
    it('transforms yes only response', () => {
      expect((0, _response.transformResponse)(_yesonlyDataOrg.default)).toEqual(_yesonlyData.default);
    });
  });
});