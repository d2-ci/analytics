"use strict";

var _axis = require("../../layout/axis.js");

var _predefinedDimensions = require("../../predefinedDimensions.js");

var _rules = require("../rules.js");

// Consts
const lockableDims = [_predefinedDimensions.DIMENSION_ID_DATA, _predefinedDimensions.DIMENSION_ID_PERIOD, _predefinedDimensions.DIMENSION_ID_ORGUNIT];
const disallowableDims = [_predefinedDimensions.DIMENSION_ID_DATA, _predefinedDimensions.DIMENSION_ID_PERIOD]; // Helper fns

const allArrayItemsAreValid = (allItems, validItems) => allItems.every(value => validItems.includes(value));

const allArrayItemsAreValidAxisIds = array => allArrayItemsAreValid(array, _axis.ALL_AXIS_IDS);

const onlyRulesWithProp = ruleProp => _rules.testResourceRules.filter(rule => rule[ruleProp]); // Partial tests


const testPropHasKeysAndValues = ruleProp => it('has keys and values', () => {
  expect(onlyRulesWithProp(ruleProp).every(rule => Object.keys(rule[ruleProp]).length && Object.values(rule[ruleProp]).length)).toBe(true);
});

const testPropIsArray = ruleProp => it('is an array', () => {
  expect(onlyRulesWithProp(ruleProp).every(rule => Array.isArray(rule[ruleProp]))).toBe(true);
});

const testKeysAreValidAxisIds = ruleProp => it('keys should be valid axis ids', () => {
  expect(onlyRulesWithProp(ruleProp).every(rule => allArrayItemsAreValidAxisIds(Object.keys(rule[ruleProp])))).toBe(true);
});

const testNoValuesZero = ruleProp => it('values should not be 0', () => {
  expect(onlyRulesWithProp(ruleProp).every(rule => Object.values(rule[ruleProp]).every(value => value !== 0))).toBe(true);
});

const testNoValuesNegative = ruleProp => it('values should not be negative', () => {
  expect(onlyRulesWithProp(ruleProp).every(rule => Object.values(rule[ruleProp]).every(value => value >= 0))).toBe(true);
}); // Test implementations


describe('verify test resource', () => {
  it('testResourceRules is array', () => {
    expect(Array.isArray(_rules.testResourceRules)).toBe(true);
  });
  it('testResourceRequiredProps is array', () => {
    expect(Array.isArray(_rules.testResourceRequiredProps)).toBe(true);
  });
});
describe('verify all rules', () => {
  it('implements all required props', () => {
    expect(_rules.testResourceRules.every(rule => _rules.testResourceRequiredProps.every(val => Object.keys(rule).indexOf(val) !== -1))).toBe(true);
  });
  it('only implements allowed rule props', () => {
    expect(_rules.testResourceRules.every(rule => allArrayItemsAreValid(Object.keys(rule), Object.values(_rules.testResourceAllRuleProps)))).toBe(true);
  });
});
describe("verify each rule's ", () => {
  const axisIdNumericProps = ['MAX_DIMS_PER_AXIS', 'MIN_DIMS_PER_AXIS', 'MAX_ITEMS_PER_AXIS'];
  axisIdNumericProps.forEach(prop => {
    describe(prop, () => {
      const ruleProp = _rules.testResourceAllRuleProps[prop];
      testPropHasKeysAndValues(ruleProp);
      testKeysAreValidAxisIds(ruleProp);
      testNoValuesZero(ruleProp);
      testNoValuesNegative(ruleProp);
    });
  });
  describe('AVAILABLE_AXES', () => {
    const ruleProp = _rules.testResourceAllRuleProps['AVAILABLE_AXES'];
    testPropIsArray(ruleProp);
    it('array items should be valid axis ids', () => {
      expect(onlyRulesWithProp(ruleProp).every(rule => allArrayItemsAreValidAxisIds(rule[ruleProp]))).toBe(true);
    });
    it('array should not be empty', () => {
      expect(onlyRulesWithProp(ruleProp).every(rule => rule[ruleProp].length > 0)).toBe(true);
    });
  });
  describe('LOCKED_DIMS', () => {
    const ruleProp = _rules.testResourceAllRuleProps['LOCKED_DIMS'];
    testPropHasKeysAndValues(ruleProp);
    it('keys should be valid lockable dimensions', () => {
      expect(onlyRulesWithProp(ruleProp).every(rule => allArrayItemsAreValid(Object.keys(rule[ruleProp]), lockableDims))).toBe(true);
    });
    it('values should be valid axis id', () => {
      expect(onlyRulesWithProp(ruleProp).every(rule => allArrayItemsAreValidAxisIds(Object.values(rule[ruleProp])))).toBe(true);
    });
  });
  describe('DISALLOWED_DIMS', () => {
    const ruleProp = _rules.testResourceAllRuleProps['DISALLOWED_DIMS'];
    testPropIsArray(ruleProp);
    it('array items should be valid disallowable dims', () => {
      expect(onlyRulesWithProp(ruleProp).every(rule => allArrayItemsAreValid(rule[ruleProp], disallowableDims))).toBe(true);
    });
  });
});