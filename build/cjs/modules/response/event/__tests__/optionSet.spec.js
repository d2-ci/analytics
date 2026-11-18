"use strict";

var _optionsetDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/optionset.data.hidena.json"));
var _optionsetDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/optionset.data.org.json"));
var _optionSet = require("../optionSet.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const testOptionCodeIdMap1 = {
  ONE: 'optionId1',
  TWO: 'optionId2'
};
const testOptionCodeIdMap2 = {
  ONE: 'optionId3',
  TWO: 'optionId4'
};
describe('optionSet', () => {
  // applyOptionSetHandler is tested by response.spec.js

  describe('getOptionCodeIdMap', () => {
    it('should create an option code:id object', () => {
      const testId = _optionsetDataHidena.default.headers[0].name;
      const testOptionIds = _optionsetDataHidena.default.metaData.dimensions[testId];
      const testOptionItems = _optionsetDataHidena.default.metaData.items;
      expect((0, _optionSet.getOptionCodeIdMap)(testOptionIds, testOptionItems)).toEqual(testOptionCodeIdMap1);
    });
  });

  // Test the solution for two option sets with shared option codes
  describe('getOptionIdRows', () => {
    it('should replace option codes with ids in the right index', () => {
      const optionSet1Rows = (0, _optionSet.getOptionIdRows)(_optionsetDataOrg.default.rows, testOptionCodeIdMap1, 0);
      const optionSet1And2Rows = (0, _optionSet.getOptionIdRows)(optionSet1Rows, testOptionCodeIdMap2, 1);
      expect(optionSet1And2Rows).toEqual(_optionsetDataHidena.default.rows);
    });
  });
});