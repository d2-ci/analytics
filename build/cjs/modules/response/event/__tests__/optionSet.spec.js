"use strict";

var _optionsetDataHidena = _interopRequireDefault(require("../../../../__demo__/data/event/optionset.data.hidena.json"));
var _optionsetDataOrg = _interopRequireDefault(require("../../../../__demo__/data/event/optionset.data.org.json"));
var _optionSet = require("../optionSet.js");
var _response = require("../response.js");
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

  // When "no value" is explicitly requested, the option set dimension
  // contains D2__NOVALUE (with no matching item) and rows contain the
  // empty NO_VALUE. The handler maps codes to ids, replaces D2__NOVALUE
  // with NO_VALUE in the dimension, and adds the NO_VALUE item.
  describe('applyOptionSetHandler', () => {
    const response = {
      headers: [{
        name: 'stageA.element1',
        valueType: 'TEXT',
        meta: true,
        optionSet: 'optionset1'
      }],
      metaData: {
        dimensions: {
          'stageA.element1': ['optionId1', 'optionId2', _response.D2__NOVALUE]
        },
        items: {
          optionId1: {
            code: 'ONE',
            name: 'One'
          },
          optionId2: {
            code: 'TWO',
            name: 'Two'
          }
        }
      },
      rows: [['ONE'], ['TWO'], [_response.NO_VALUE]]
    };
    it('maps D2__NOVALUE to NO_VALUE and adds the NO_VALUE item', () => {
      const result = (0, _optionSet.applyOptionSetHandler)(response, 0);
      expect(result.metaData.dimensions['stageA.element1']).toEqual(['optionId1', 'optionId2', _response.NO_VALUE]);
      expect(result.metaData.items[_response.NO_VALUE]).toEqual(_response.NO_VALUE_ITEM);
      expect(result.rows).toEqual([['optionId1'], ['optionId2'], [_response.NO_VALUE]]);
    });
  });
});