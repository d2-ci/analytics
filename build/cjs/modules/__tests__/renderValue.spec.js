"use strict";

var _pivotTableConstants = require("../pivotTable/pivotTableConstants.js");

var _renderValue = require("../renderValue.js");

var _valueTypes = require("../valueTypes.js");

const DGS_COMMA = 'COMMA';
const DGS_SPACE = 'SPACE';
const DGS_NONE = 'NONE';
const tests = [// Numbers
{
  value: 1000.5,
  expected: '1 000.5',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 33777889.55,
  expected: '33,777,889.5',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  round: true,
  dgs: DGS_COMMA
}, {
  value: 33777889.556,
  expected: '33 777 889.6',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 33777889.556,
  expected: '33 777 889.5560000017',
  // float issue?
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  round: false,
  dgs: DGS_SPACE
}, {
  value: 33777889.56,
  expected: '33777889.6',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  round: true,
  dgs: DGS_NONE
}, {
  value: 0.0005,
  expected: '0',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 0.109,
  expected: '0.11',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 1.101,
  expected: '1.1',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 1.101,
  expected: '1.1010000000',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  round: false,
  dgs: DGS_SPACE
}, {
  value: 0.0005,
  expected: '0.0005000000',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  round: false,
  dgs: DGS_SPACE
}, // Numbers showing as column/row percentage
{
  value: 0.234,
  expected: '23.4%',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 0.234,
  expected: '23.4%',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
  round: false,
  dgs: DGS_SPACE
}, {
  value: 0.000234,
  expected: '0.02%',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 0.0000432,
  expected: '0%',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 0.000234,
  expected: '0.0234%',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
  round: false,
  dgs: DGS_SPACE
}, {
  value: -0.0234,
  expected: '-2.3%',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
  round: true,
  dgs: DGS_SPACE
}, {
  value: -0.0234,
  expected: '-2.34%',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
  round: false,
  dgs: DGS_SPACE
}, {
  value: 0.450048675309,
  expected: '45.0048675309%',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
  round: false,
  dgs: DGS_SPACE
}, {
  value: 77.893,
  expected: '7 789.3%',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  numberType: _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 77.893,
  expected: '7,789.3%',
  valueType: _valueTypes.VALUE_TYPE_NUMBER,
  numberType: _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE,
  round: true,
  dgs: DGS_COMMA
}, // Integers
{
  value: 99777888,
  expected: '99 777 888',
  valueType: _valueTypes.VALUE_TYPE_INTEGER,
  round: true,
  dgs: DGS_SPACE
}, {
  value: -99777888,
  expected: '-99 777 888',
  valueType: _valueTypes.VALUE_TYPE_INTEGER,
  round: true,
  dgs: DGS_SPACE
}, {
  value: -9977888,
  expected: '-9977888',
  valueType: _valueTypes.VALUE_TYPE_INTEGER,
  round: true,
  dgs: DGS_NONE
}, {
  value: 345,
  expected: '345',
  valueType: _valueTypes.VALUE_TYPE_INTEGER_POSITIVE,
  round: true,
  dgs: DGS_COMMA
}, {
  value: 334445577,
  expected: '334,445,577',
  valueType: _valueTypes.VALUE_TYPE_INTEGER_POSITIVE,
  round: false,
  dgs: DGS_COMMA
}, {
  value: -44555777,
  expected: '-44 555 777',
  valueType: _valueTypes.VALUE_TYPE_INTEGER_NEGATIVE,
  round: true,
  dgs: DGS_SPACE
}, {
  value: -4445577,
  expected: '-4,445,577',
  valueType: _valueTypes.VALUE_TYPE_INTEGER_NEGATIVE,
  round: false,
  dgs: DGS_COMMA
}, {
  value: -445577,
  expected: '-445577',
  valueType: _valueTypes.VALUE_TYPE_INTEGER_NEGATIVE,
  round: true,
  dgs: DGS_NONE
}, {
  value: -4445577,
  expected: '-4,445,577',
  valueType: _valueTypes.VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE,
  round: false,
  dgs: DGS_COMMA
}, {
  value: 57,
  expected: '5 700%',
  valueType: _valueTypes.VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE,
  numberType: _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 557,
  expected: '55700%',
  valueType: _valueTypes.VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE,
  numberType: _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE,
  round: true,
  dgs: DGS_NONE
}, // Phone number
{
  value: '99777888',
  expected: '99777888',
  valueType: _valueTypes.VALUE_TYPE_PHONE_NUMBER,
  round: true,
  dgs: DGS_SPACE
}, {
  value: '(303)9977888',
  expected: '(303)9977888',
  valueType: _valueTypes.VALUE_TYPE_PHONE_NUMBER,
  round: true,
  dgs: DGS_NONE
}, {
  value: '303-8485-9922',
  expected: '303-8485-9922',
  valueType: _valueTypes.VALUE_TYPE_PHONE_NUMBER,
  round: true,
  dgs: DGS_COMMA
}, {
  value: '303  848  9922',
  expected: '303 848  9922',
  valueType: _valueTypes.VALUE_TYPE_PHONE_NUMBER,
  round: false,
  dgs: DGS_COMMA
}, // Date
{
  value: '05/04/2022',
  expected: '05/04/2022',
  valueType: _valueTypes.VALUE_TYPE_DATE,
  round: true,
  dgs: DGS_SPACE
}, {
  value: '2022-05-04 00:00:000',
  expected: '2022-05-04 00:00:000',
  valueType: _valueTypes.VALUE_TYPE_DATETIME,
  round: true,
  dgs: DGS_COMMA
}, {
  value: '2022-05-04 00:00:000',
  expected: '2022-05-04 00:00:000',
  valueType: _valueTypes.VALUE_TYPE_DATETIME,
  round: true,
  dgs: DGS_NONE
}, // Percentage
{
  value: 5,
  expected: '5',
  valueType: _valueTypes.VALUE_TYPE_PERCENTAGE,
  round: true,
  dgs: DGS_SPACE
}, {
  value: 53,
  expected: '53',
  valueType: _valueTypes.VALUE_TYPE_PERCENTAGE,
  round: false,
  dgs: DGS_SPACE
}, {
  value: 53,
  expected: '5 300%',
  valueType: _valueTypes.VALUE_TYPE_PERCENTAGE,
  numberType: _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE,
  round: true,
  dgs: DGS_SPACE
}, // Unit interval
{
  value: 4,
  expected: '4',
  valueType: _valueTypes.VALUE_TYPE_UNIT_INTERVAL,
  round: true,
  dgs: DGS_COMMA
}, {
  value: 4600,
  expected: '4 600',
  valueType: _valueTypes.VALUE_TYPE_UNIT_INTERVAL,
  round: false,
  dgs: DGS_SPACE
}, {
  value: 46,
  expected: '4,600%',
  valueType: _valueTypes.VALUE_TYPE_UNIT_INTERVAL,
  numberType: _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE,
  round: true,
  dgs: DGS_COMMA
}, // Texts
{
  value: 'This    string has multiple whitespace     characters',
  expected: 'This string has multiple whitespace     characters',
  valueType: _valueTypes.VALUE_TYPE_TEXT
}, {
  value: 'Characters          \n',
  expected: 'Characters \n',
  valueType: _valueTypes.VALUE_TYPE_TEXT
}, {
  value: 'Characters          \nmorecharacters   here',
  expected: 'Characters \nmorecharacters   here',
  valueType: _valueTypes.VALUE_TYPE_TEXT
}, // Undefined values
{
  value: undefined,
  expected: 'undefined',
  valueType: _valueTypes.VALUE_TYPE_NUMBER
}, {
  value: undefined,
  expected: 'undefined',
  valueType: _valueTypes.VALUE_TYPE_TEXT
}];
describe('renderValue', () => {
  tests.forEach(t => {
    const testname = "valueType: ".concat(t.valueType, ", value: ").concat(t.value, ", dgs: ").concat(t.dgs, ", round: ").concat(t.round, ", isPercent: ").concat([_pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE, _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE].includes(t.numberType));
    it(testname, () => {
      const actual = (0, _renderValue.renderValue)(t.value, t.valueType, {
        skipRounding: !t.round,
        digitGroupSeparator: t.dgs,
        numberType: t.numberType
      });
      expect(actual).toEqual(t.expected);
    });
  });
});