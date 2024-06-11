"use strict";

var _fixedPeriods = require("../utils/fixedPeriods.js");
var _index = require("../utils/index.js");
var _relativePeriods = require("../utils/relativePeriods.js");
describe('utils', () => {
  describe('filterPeriodTypesById', () => {
    it('should filter fixed periods', () => {
      const excludedPeriodTypes = ['DAILY', 'WEEKLY', 'WEEKLYSAT', 'MONTHLY', 'FYOCT'];
      const periodIds = (0, _index.filterPeriodTypesById)((0, _fixedPeriods.getFixedPeriodsOptions)(), excludedPeriodTypes).map(option => option.id);
      expect(periodIds).toEqual(['WEEKLYWED', 'WEEKLYTHU', 'WEEKLYSUN', 'BIWEEKLY', 'BIMONTHLY', 'QUARTERLY', 'SIXMONTHLY', 'SIXMONTHLYAPR', 'YEARLY', 'FYNOV', 'FYJUL', 'FYAPR']);
    });
    it('should filter relative periods', () => {
      const excludedPeriodTypes = ['MONTHLY', 'BIMONTHLY'];
      const periodIds = (0, _index.filterPeriodTypesById)((0, _relativePeriods.getRelativePeriodsOptions)(), excludedPeriodTypes).map(option => option.id);
      expect(periodIds).toEqual(['DAILY', 'WEEKLY', 'BIWEEKLY', 'QUARTERLY', 'SIXMONTHLY', 'FINANCIAL', 'YEARLY']);
    });
  });
});