"use strict";

var _combineResults = require("../combineResults.js");
const full = reasons => (0, _combineResults.createResult)('full', reasons);
const partial = reasons => (0, _combineResults.createResult)('partial', reasons);
const none = reasons => (0, _combineResults.createResult)('none', reasons);
describe('combineResults', () => {
  it('creates a result with no reason by default', () => {
    expect((0, _combineResults.createResult)('full')).toEqual({
      status: 'full',
      reasons: []
    });
    expect((0, _combineResults.getUnknownResult)('UNKNOWN_PERIOD')).toEqual({
      status: 'unknown',
      reasons: ['UNKNOWN_PERIOD']
    });
  });
  it('lists every reason once, in the reason order', () => {
    expect((0, _combineResults.unionOfReasons)([full(['REPEATED_VALUE']), none(['PERIOD_TOO_SHORT', 'REPEATED_VALUE'])])).toEqual(['PERIOD_TOO_SHORT', 'REPEATED_VALUE']);
  });
  it('picks the most severe result: none, partial, unknown, full', () => {
    const unknown = (0, _combineResults.getUnknownResult)('UNKNOWN_PERIOD');
    expect((0, _combineResults.getMostSevere)([full(), unknown, partial()])).toEqual(partial());
    expect((0, _combineResults.getMostSevere)([full(), unknown])).toBe(unknown);
    expect((0, _combineResults.getMostSevere)([])).toBeUndefined();
  });
  it('combines into the most severe status with every reason', () => {
    expect((0, _combineResults.combineResults)([full(['REPEATED_VALUE']), none(['PERIOD_TOO_SHORT'])])).toEqual(none(['PERIOD_TOO_SHORT', 'REPEATED_VALUE']));
    expect((0, _combineResults.combineResults)([])).toEqual(full());
  });
  describe('combineOperandResults', () => {
    it('says first when an operand of an expression gives none or leaves values out', () => {
      expect((0, _combineResults.combineOperandResults)([full(), none(['PERIOD_TOO_SHORT'])])).toEqual(none(['OPERAND_EMPTY', 'PERIOD_TOO_SHORT']));
      expect((0, _combineResults.combineOperandResults)([full(), partial(['PERIOD_TYPE_MISMATCH'])])).toEqual(partial(['OPERAND_PARTIAL', 'PERIOD_TYPE_MISMATCH']));
    });
    it('says nothing more for a single operand, or a full result', () => {
      expect((0, _combineResults.combineOperandResults)([none(['PERIOD_TOO_SHORT'])])).toEqual(none(['PERIOD_TOO_SHORT']));
      expect((0, _combineResults.combineOperandResults)([full(), full()])).toEqual(full());
    });
  });
});