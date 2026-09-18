"use strict";

var _dataTypes = require("../dataTypes.js");
var _hash = require("../hash.js");
describe('getHash', () => {
  const textInput = 'Raymond Luxury Yacht';
  it('accepts a string and returns a hash', () => {
    const hash = (0, _hash.getHash)(textInput);
    expect(typeof hash).toBe('string');
    expect(hash).not.toBe(textInput);
  });
  it('is deterministic', () => {
    expect((0, _hash.getHash)(textInput)).toBe((0, _hash.getHash)(textInput));
  });
  it('returns undefined for invalid input', () => {
    const unsupportedTypes = ['', 1, true, null, undefined, {}, []];
    unsupportedTypes.forEach(type => expect((0, _hash.getHash)(type)).toBe(undefined));
  });
});
describe('getExpressionHashFromVisualization', () => {
  const edi1 = {
    id: 'OdiHJayrsKo',
    dimensionItemType: _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM,
    expression: '#{abc} * 10'
  };
  const edi2 = {
    id: 'Uvn6LCg7dVU',
    dimensionItemType: _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM,
    expression: '#{abc} * 20'
  };
  const dxWithEdi = {
    dimension: 'dx',
    items: [edi1, edi2]
  };
  it('generates a hash (columns)', () => {
    expect(typeof (0, _hash.getExpressionHashFromVisualization)({
      columns: [dxWithEdi],
      rows: [],
      filters: []
    })).toBe('string');
  });
  it('generates a hash (rows)', () => {
    expect(typeof (0, _hash.getExpressionHashFromVisualization)({
      columns: [],
      rows: [dxWithEdi],
      filters: []
    })).toBe('string');
  });
  it('generates a hash (filters)', () => {
    expect(typeof (0, _hash.getExpressionHashFromVisualization)({
      columns: [],
      rows: [],
      filters: [dxWithEdi]
    })).toBe('string');
  });
  it('does not generate a hash when there are no dimensions', () => {
    expect((0, _hash.getExpressionHashFromVisualization)({
      columns: [],
      rows: [],
      filters: []
    })).toBe(undefined);
  });
  it('does not generate a hash when there are no EDI dimensions', () => {
    expect((0, _hash.getExpressionHashFromVisualization)({
      columns: [{
        id: 'OdiHJayrsKo',
        dimensionItemType: 'INDICATOR'
      }],
      rows: [],
      filters: []
    })).toBe(undefined);
  });
  it('sorts the edi objects by id before generating the hash to optimize caching', () => {
    expect((0, _hash.getExpressionHashFromVisualization)({
      columns: [{
        dimension: 'dx',
        items: [edi1, edi2]
      }],
      rows: [],
      filters: []
    })).toBe((0, _hash.getExpressionHashFromVisualization)({
      columns: [{
        dimension: 'dx',
        items: [edi2, edi1]
      }],
      rows: [],
      filters: []
    }));
  });
});