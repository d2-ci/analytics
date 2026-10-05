"use strict";

var _utils = require("../utils.js");
const settingsEngine = settings => ({
  query: jest.fn(async ({
    setting
  }) => {
    const key = setting.resource.split('/')[1];
    if (!(key in settings)) {
      throw Object.assign(new Error('Setting does not exist'), {
        details: {
          httpStatusCode: 404
        }
      });
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
  it('fails on any other error', async () => {
    const engine = {
      query: jest.fn().mockRejectedValue(new Error('Unauthorized'))
    };
    await expect((0, _utils.fetchRelativePeriodTypeOptions)(engine)).rejects.toThrow('Unauthorized');
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
  it('ignore the order of items', () => {
    const elementA = {
      id: 'elementAAAA',
      dimensionItemType: 'DATA_ELEMENT'
    };
    const elementB = {
      id: 'elementBBBB',
      dimensionItemType: 'DATA_ELEMENT'
    };
    expect((0, _utils.getItemsKey)([elementB, elementA])).toBe((0, _utils.getItemsKey)([elementA, elementB]));
  });
  it('accept no items', () => {
    expect((0, _utils.getItemsKey)()).toBe('[]');
  });
});