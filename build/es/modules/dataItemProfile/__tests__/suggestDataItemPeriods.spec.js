import { inDataSets } from '../../../__fixtures__/dataItemProfileMetadata.js';
import { getDataItemProfile } from '../getDataItemProfile.js';
import { suggestDataItemPeriods } from '../suggestDataItemPeriods.js';
const METADATA = {
  dataElements: {
    monthly: {
      aggregationType: 'SUM',
      dataSets: inDataSets(['Monthly'])
    },
    mondayWednesday: {
      aggregationType: 'SUM',
      dataSets: inDataSets(['Weekly', 'WeeklyWednesday'])
    },
    financial: {
      aggregationType: 'SUM',
      dataSets: inDataSets(['FinancialApril'])
    }
  },
  dataSets: {
    MonthlyForm: {
      periodType: 'Monthly'
    }
  }
};
const profileOf = (id, dimensionItemType = 'DATA_ELEMENT') => getDataItemProfile({
  id,
  dimensionItemType
}, METADATA);
describe('suggestDataItemPeriods', () => {
  it('suggests the shortest periods of a type that suits the item', () => {
    expect(suggestDataItemPeriods(profileOf('monthly'), ['2025W2'])).toEqual(['202501']);
  });
  it('takes the next type up for two types of the same length', () => {
    expect(suggestDataItemPeriods(profileOf('mondayWednesday'), ['2025W2'])).toEqual(['2025BiW1']);
  });
  it('covers every period, in date order', () => {
    expect(suggestDataItemPeriods(profileOf('mondayWednesday'), ['2025W1', '2024WedW52'])).toEqual(['2024BiW26', '2025BiW1']);
  });
  it('covers a period that spans two periods of the type', () => {
    expect(suggestDataItemPeriods(profileOf('monthly'), ['2025W5'])).toEqual(['202501', '202502']);
  });
  it('suggests nothing when the periods suit the item', () => {
    expect(suggestDataItemPeriods(profileOf('monthly'), ['2025Q1'])).toBeNull();
  });
  it('suggests nothing when no type tried suits the item', () => {
    expect(suggestDataItemPeriods(profileOf('financial'), ['202501'])).toBeNull();
  });
  it('tries the types it is given', () => {
    expect(suggestDataItemPeriods(profileOf('financial'), ['202501'], {
      periodTypes: ['FinancialApril', 'Yearly']
    })).toEqual(['2024April']);
  });
  it('skips types shorter than a period', () => {
    expect(suggestDataItemPeriods(profileOf('mondayWednesday'), ['2025W2'], {
      periodTypes: ['Daily', 'BiWeekly']
    })).toEqual(['2025BiW1']);
  });
  it('suggests nothing without periods', () => {
    expect(suggestDataItemPeriods(profileOf('monthly'), [])).toBeNull();
    expect(suggestDataItemPeriods(profileOf('monthly'))).toBeNull();
  });
  it('suggests nothing for a period it cannot read', () => {
    expect(suggestDataItemPeriods(profileOf('monthly'), ['NOT_A_PERIOD'])).toBeNull();
  });
  it('suggests nothing when a type has no period for a date', () => {
    expect(suggestDataItemPeriods(profileOf('monthly'), ['2025W2'], {
      periodTypes: ['TwoYearly']
    })).toBeNull();
  });
  describe('for period types', () => {
    it('suggests the shortest type that suits the item', () => {
      expect(suggestDataItemPeriods(profileOf('monthly'), ['Weekly'])).toEqual(['Monthly']);
      expect(suggestDataItemPeriods(profileOf('mondayWednesday'), ['Weekly'])).toEqual(['BiWeekly']);
    });
    it('suggests nothing when the type suits the item', () => {
      expect(suggestDataItemPeriods(profileOf('monthly'), ['Quarterly'])).toBeNull();
    });
    it('suggests nothing when no type tried suits the item', () => {
      expect(suggestDataItemPeriods(profileOf('financial'), ['Monthly'])).toBeNull();
    });
  });
  describe('for relative periods', () => {
    const WEEKLY = {
      weeklyPeriodType: 'Weekly'
    };
    it.each([['LAST_4_WEEKS', 'LAST_MONTH'], ['LAST_WEEK', 'LAST_MONTH'], ['THIS_WEEK', 'THIS_MONTH'], ['LAST_52_WEEKS', 'LAST_12_MONTHS'], ['WEEKS_THIS_YEAR', 'MONTHS_THIS_YEAR'], ['LAST_30_DAYS', 'LAST_MONTH']])('suggests one of a longer type with the same anchor (%s)', (period, suggestion) => {
      expect(suggestDataItemPeriods(profileOf('monthly'), [period], WEEKLY)).toEqual([suggestion]);
    });
    it('takes the shortest that lasts at least as long', () => {
      expect(suggestDataItemPeriods(profileOf('mondayWednesday'), ['LAST_4_WEEKS'], WEEKLY)).toEqual(['LAST_4_BIWEEKS']);
    });
    it('suggests nothing when the relative period suits the item', () => {
      expect(suggestDataItemPeriods(profileOf('monthly'), ['LAST_3_MONTHS'])).toBeNull();
    });
    it('tries only the types it is given, with the settings', () => {
      const profile = profileOf('financial');
      expect(suggestDataItemPeriods(profile, ['LAST_12_MONTHS'])).toBeNull();
      expect(suggestDataItemPeriods(profile, ['LAST_12_MONTHS'], {
        periodTypes: ['FinancialApril'],
        financialYearPeriodType: 'FinancialApril'
      })).toEqual(['LAST_FINANCIAL_YEAR']);
    });
  });
  describe('for mixed periods', () => {
    it('suggests for each part', () => {
      expect(suggestDataItemPeriods(profileOf('monthly'), ['2025W2', 'LAST_4_WEEKS', 'Weekly'], {
        weeklyPeriodType: 'Weekly'
      })).toEqual(['202501', 'LAST_MONTH', 'Monthly']);
    });
    it('keeps the parts that suit the item', () => {
      expect(suggestDataItemPeriods(profileOf('monthly'), ['2025Q1', 'LAST_4_WEEKS', 'LAST_3_MONTHS'], {
        weeklyPeriodType: 'Weekly'
      })).toEqual(['2025Q1', 'LAST_MONTH', 'LAST_3_MONTHS']);
    });
    it('suggests nothing when a part has no suggestion', () => {
      expect(suggestDataItemPeriods(profileOf('financial'), ['2024April', 'LAST_MONTH'])).toBeNull();
    });
  });
});