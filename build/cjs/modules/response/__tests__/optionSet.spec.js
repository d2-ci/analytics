"use strict";

var _optionsetData = _interopRequireDefault(require("../../../__demo__/data/event/optionset.data.json"));
var _optionsetDataOrg = _interopRequireDefault(require("../../../__demo__/data/event/optionset.data.org.json"));
var _optionSet = require("../optionSet.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const dimensionId = 'Zj7UnCAulEk.fWIAEtYVEGk';
const headerIndex = 0;
const testOptionCodeIdMap = {
  MODABSC: 'Fhbf4aKpZmZ',
  MODDIED: 'gj2fKKyp8OH',
  MODTRANS: 'fShHdgT7XGb',
  MODDISCH: 'yeod5tOXpkP'
};
describe('optionSet', () => {
  describe('getOptionCodeIdMap', () => {
    it('should create an option code:id object', () => {
      const testOptionIds = _optionsetData.default.metaData.dimensions[dimensionId];
      const testOptionItems = _optionsetData.default.metaData.items;
      expect((0, _optionSet.getOptionCodeIdMap)(testOptionIds, testOptionItems)).toEqual(testOptionCodeIdMap);
    });
  });
  describe('getOptionIdRows', () => {
    it('should replace option codes with ids in the right index', () => {
      expect((0, _optionSet.getOptionIdRows)(_optionsetDataOrg.default.rows, testOptionCodeIdMap, headerIndex)).toEqual(_optionsetData.default.rows);
    });
  });
  describe('applyOptionSetHandler', () => {
    it('should return the transformed response', () => {
      expect((0, _optionSet.applyOptionSetHandler)(_optionsetDataOrg.default, headerIndex)).toEqual(_optionsetData.default);
    });
  });
});