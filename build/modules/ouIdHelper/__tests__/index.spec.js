"use strict";

var _ = require("..");

describe('ouIdHelper', function () {
  describe('addGroupPrefix', function () {
    it('returns the id with the "OU_GROUP-" prefix', function () {
      expect(_.ouIdHelper.addGroupPrefix('fruit-group')).toEqual('OU_GROUP-fruit-group');
    });
    it('returns the id with the "OU_GROUP-" prefix when id already contained GROUP-', function () {
      expect(_.ouIdHelper.addGroupPrefix('OU_GROUP-fruit-group')).toEqual('OU_GROUP-fruit-group');
    });
  });
  describe('addLevelPrefix', function () {
    it('returns the id with the "LEVEL-" prefix', function () {
      expect(_.ouIdHelper.addLevelPrefix('2nd-floor')).toEqual('LEVEL-2nd-floor');
    });
    it('returns the id with the "LEVEL-" prefix when id already contained LEVEL-', function () {
      expect(_.ouIdHelper.addLevelPrefix('LEVEL-2nd-floor')).toEqual('LEVEL-2nd-floor');
    });
  });
  describe('removePrefix', function () {
    it('returns the uid of a level-id', function () {
      expect(_.ouIdHelper.removePrefix('LEVEL-2nd-floor')).toEqual('2nd-floor');
    });
    it('returns the uid of a group-id', function () {
      expect(_.ouIdHelper.removePrefix('OU_GROUP-fruit-group')).toEqual('fruit-group');
    });
    it('returns the uid of plain orgunit id', function () {
      expect(_.ouIdHelper.removePrefix('lmao')).toEqual('lmao');
    });
  });
  describe('hasGroupPrefix', function () {
    it('returns false for empty string', function () {
      expect(_.ouIdHelper.hasGroupPrefix('')).toBe(false);
    });
    it('returns true for group id', function () {
      var id = 'OU_GROUP-fruit-group';
      expect(_.ouIdHelper.hasGroupPrefix(id)).toBe(true);
    });
    it('returns false for non-group id', function () {
      var id = 'NON_GROUP_ID';
      expect(_.ouIdHelper.hasGroupPrefix(id)).toBe(false);
    });
  });
  describe('hasLevelPrefix', function () {
    it('returns false for empty string', function () {
      expect(_.ouIdHelper.hasLevelPrefix('')).toBe(false);
    });
    it('returns true for level id', function () {
      var id = 'LEVEL-2nd-floor';
      expect(_.ouIdHelper.hasLevelPrefix(id)).toBe(true);
    });
    it('returns false for non-level id', function () {
      var id = 'NON_LEVEL_ID';
      expect(_.ouIdHelper.hasLevelPrefix(id)).toBe(false);
    });
  });
});