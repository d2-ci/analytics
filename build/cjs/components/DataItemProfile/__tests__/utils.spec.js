"use strict";

var _utils = require("../utils.js");
const settingsEngine = settings => ({
  query: jest.fn(async ({
    setting
  }) => {
    const key = setting.resource.split('/')[1];
    if (!(key in settings)) {
      throw new Error('not found');
    }
    return {
      setting: {
        [key]: settings[key]
      }
    };
  })
});
describe('fetchRelativePeriodTypeOptions', () => {
  it('reads the period types of relative weeks and financial years from the settings', async () => {
    expect(await (0, _utils.fetchRelativePeriodTypeOptions)(settingsEngine({
      analyticsWeeklyStart: 'WEEKLY_WEDNESDAY',
      analyticsFinancialYearStart: 'FINANCIAL_YEAR_APRIL'
    }))).toEqual({
      weeklyPeriodType: 'WeeklyWednesday',
      financialYearPeriodType: 'FinancialApril'
    });
  });
  it('leaves out a setting the server doesn’t have', async () => {
    expect(await (0, _utils.fetchRelativePeriodTypeOptions)(settingsEngine({
      analyticsWeeklyStart: 'WEEKLY'
    }))).toEqual({
      weeklyPeriodType: 'Weekly',
      financialYearPeriodType: undefined
    });
  });
});
describe('items keys', () => {
  it('compare items by value, and read them back', () => {
    const items = [{
      id: 'elementAAAA',
      dimensionItemType: 'DATA_ELEMENT'
    }];
    const key = (0, _utils.getItemsKey)(items);
    expect((0, _utils.getItemsKey)([...items])).toBe(key);
    expect((0, _utils.parseItemsKey)(key)).toEqual(items);
  });
  it('accept ids alone, and no items', () => {
    expect((0, _utils.parseItemsKey)((0, _utils.getItemsKey)(['elementAAAA']))).toEqual([{
      id: 'elementAAAA',
      dimensionItemType: undefined
    }]);
    expect((0, _utils.getItemsKey)()).toBe('[]');
  });
});