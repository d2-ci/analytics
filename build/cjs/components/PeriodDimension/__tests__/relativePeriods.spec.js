"use strict";

var _relativePeriods = require("../utils/relativePeriods.js");
describe('relativePeriods utils', () => {
  it('should correctly return relative periods details', () => {
    const details = (0, _relativePeriods.getRelativePeriodsDetails)();
    expect(details).toMatchSnapshot();
  });
  it('should correctly return relative periods names', () => {
    const names = (0, _relativePeriods.getRelativePeriodsName)();
    expect(names).toMatchSnapshot();
  });
});