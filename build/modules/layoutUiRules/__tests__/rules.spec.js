"use strict";

var _rules = require("../rules");

var _axis = require("../../layout/axis");

var _predefinedDimensions = require("../../predefinedDimensions");

// Consts
var lockableDims = [_predefinedDimensions.DIMENSION_ID_DATA, _predefinedDimensions.DIMENSION_ID_PERIOD];
var disallowableDims = [_predefinedDimensions.DIMENSION_ID_DATA, _predefinedDimensions.DIMENSION_ID_PERIOD]; // Helper fns

var allArrayItemsAreValid = function allArrayItemsAreValid(allItems, validItems) {
  return allItems.every(function (value) {
    return validItems.includes(value);
  });
};

var allArrayItemsAreValidAxisIds = function allArrayItemsAreValidAxisIds(array) {
  return allArrayItemsAreValid(array, _axis.ALL_AXIS_IDS);
};

var onlyRulesWithProp = function onlyRulesWithProp(ruleProp) {
  return _rules.testResourceRules.filter(function (rule) {
    return rule[ruleProp];
  });
}; // Partial tests


var testPropHasKeysAndValues = function testPropHasKeysAndValues(ruleProp) {
  return it('has keys and values', function () {
    expect(onlyRulesWithProp(ruleProp).every(function (rule) {
      return Object.keys(rule[ruleProp]).length && Object.values(rule[ruleProp]).length;
    })).toBe(true);
  });
};

var testPropIsArray = function testPropIsArray(ruleProp) {
  return it('is an array', function () {
    expect(onlyRulesWithProp(ruleProp).every(function (rule) {
      return Array.isArray(rule[ruleProp]);
    })).toBe(true);
  });
};

var testKeysAreValidAxisIds = function testKeysAreValidAxisIds(ruleProp) {
  return it('keys should be valid axis ids', function () {
    expect(onlyRulesWithProp(ruleProp).every(function (rule) {
      return allArrayItemsAreValidAxisIds(Object.keys(rule[ruleProp]));
    })).toBe(true);
  });
};

var testNoValuesZero = function testNoValuesZero(ruleProp) {
  return it('values should not be 0', function () {
    expect(onlyRulesWithProp(ruleProp).every(function (rule) {
      return Object.values(rule[ruleProp]).every(function (value) {
        return value !== 0;
      });
    })).toBe(true);
  });
};

var testNoValuesNegative = function testNoValuesNegative(ruleProp) {
  return it('values should not be negative', function () {
    expect(onlyRulesWithProp(ruleProp).every(function (rule) {
      return Object.values(rule[ruleProp]).every(function (value) {
        return value >= 0;
      });
    })).toBe(true);
  });
}; // Test implementations


describe('verify test resource', function () {
  it('testResourceRules is array', function () {
    expect(Array.isArray(_rules.testResourceRules)).toBe(true);
  });
  it('testResourceRequiredProps is array', function () {
    expect(Array.isArray(_rules.testResourceRequiredProps)).toBe(true);
  });
});
describe('verify all rules', function () {
  it('implements all required props', function () {
    expect(_rules.testResourceRules.every(function (rule) {
      return _rules.testResourceRequiredProps.every(function (val) {
        return Object.keys(rule).indexOf(val) !== -1;
      });
    })).toBe(true);
  });
  it('only implements allowed rule props', function () {
    expect(_rules.testResourceRules.every(function (rule) {
      return allArrayItemsAreValid(Object.keys(rule), Object.values(_rules.testResourceAllRuleProps));
    })).toBe(true);
  });
});
describe("verify each rule's ", function () {
  var axisIdNumericProps = ['MAX_DIMS_PER_AXIS', 'MIN_DIMS_PER_AXIS', 'MAX_ITEMS_PER_AXIS'];
  axisIdNumericProps.forEach(function (prop) {
    describe(prop, function () {
      var ruleProp = _rules.testResourceAllRuleProps[prop];
      testPropHasKeysAndValues(ruleProp);
      testKeysAreValidAxisIds(ruleProp);
      testNoValuesZero(ruleProp);
      testNoValuesNegative(ruleProp);
    });
  });
  describe('AVAILABLE_AXES', function () {
    var ruleProp = _rules.testResourceAllRuleProps['AVAILABLE_AXES'];
    testPropIsArray(ruleProp);
    it('array items should be valid axis ids', function () {
      expect(onlyRulesWithProp(ruleProp).every(function (rule) {
        return allArrayItemsAreValidAxisIds(rule[ruleProp]);
      })).toBe(true);
    });
    it('array should not be empty', function () {
      expect(onlyRulesWithProp(ruleProp).every(function (rule) {
        return rule[ruleProp].length > 0;
      })).toBe(true);
    });
  });
  describe('LOCKED_DIMS', function () {
    var ruleProp = _rules.testResourceAllRuleProps['LOCKED_DIMS'];
    testPropHasKeysAndValues(ruleProp);
    it('keys should be valid lockable dimensions', function () {
      expect(onlyRulesWithProp(ruleProp).every(function (rule) {
        return allArrayItemsAreValid(Object.keys(rule[ruleProp]), lockableDims);
      })).toBe(true);
    });
    it('values should be valid axis id', function () {
      expect(onlyRulesWithProp(ruleProp).every(function (rule) {
        return allArrayItemsAreValidAxisIds(Object.values(rule[ruleProp]));
      })).toBe(true);
    });
  });
  describe('DISALLOWED_DIMS', function () {
    var ruleProp = _rules.testResourceAllRuleProps['DISALLOWED_DIMS'];
    testPropIsArray(ruleProp);
    it('array items should be valid disallowable dims', function () {
      expect(onlyRulesWithProp(ruleProp).every(function (rule) {
        return allArrayItemsAreValid(rule[ruleProp], disallowableDims);
      })).toBe(true);
    });
  });
});