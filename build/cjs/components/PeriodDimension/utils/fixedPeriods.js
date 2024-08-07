"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePeriodCode = exports.getYearOffsetFromNow = exports.getFixedPeriodsOptionsById = exports.getFixedPeriodsOptions = void 0;
var _multiCalendarDates = require("@dhis2/multi-calendar-dates");
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _index2 = require("./index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PERIOD_TYPE_REGEX = {
  [_index2.DAILY]: /^([0-9]{4})([0-9]{2})([0-9]{2})$/,
  // YYYYMMDD
  [_index2.WEEKLY]: /^([0-9]{4})()W([0-9]{1,2})$/,
  // YYYY"W"[1-53]
  [_index2.BIWEEKLY]: /^([0-9]{4})BiW([0-9]{1,2})$/,
  // YYYY"BiW"[1-27]
  [_index2.WEEKLYWED]: /^([0-9]{4})(Wed)W([0-9]{1,2})$/,
  // YYYY"WedW"[1-53]
  [_index2.WEEKLYTHU]: /^([0-9]{4})(Thu)W([0-9]{1,2})$/,
  // YYYY"ThuW"[1-53]
  [_index2.WEEKLYSAT]: /^([0-9]{4})(Sat)W([0-9]{1,2})$/,
  // YYYY"SatW"[1-53]
  [_index2.WEEKLYSUN]: /^([0-9]{4})(Sun)W([0-9]{1,2})$/,
  // YYYY"SunW"[1-53]
  [_index2.MONTHLY]: /^([0-9]{4})([0-9]{2})$/,
  // YYYYMM
  [_index2.BIMONTHLY]: /^([0-9]{4})([0-9]{2})B$/,
  // YYYY0[1-6]"B"
  [_index2.QUARTERLY]: /^([0-9]{4})Q([1234])$/,
  // YYYY"Q"[1-4]
  [_index2.SIXMONTHLY]: /^([0-9]{4})S([12])$/,
  // YYYY"S"[1/2]
  [_index2.SIXMONTHLYAPR]: /^([0-9]{4})AprilS([12])$/,
  // YYYY"AprilS"[1/2]
  // [SIXMONTHLYNOV]: /^([0-9]{4})NovS([12])$/, // YYYY"NovS"[1/2] Not supported?
  [_index2.YEARLY]: /^([0-9]{4})$/,
  // YYYY
  [_index2.FYNOV]: /^([0-9]{4})Nov$/,
  // YYYY"Nov"
  [_index2.FYOCT]: /^([0-9]{4})Oct$/,
  // YYYY"Oct"
  [_index2.FYJUL]: /^([0-9]{4})July$/,
  // YYYY"July"
  [_index2.FYAPR]: /^([0-9]{4})April$/ // YYYY"April"
};

const getPeriods = _ref => {
  let {
    periodType,
    config,
    fnFilter,
    periodSettings = {}
  } = _ref;
  const offset = parseInt(config.offset, 10);
  const isFilter = config.filterFuturePeriods;
  const isReverse = periodType.match(/^FY|YEARLY/) ? true : config.reversePeriods;
  const {
    calendar = 'gregory',
    locale = 'en'
  } = periodSettings;
  const now = (0, _multiCalendarDates.getNowInCalendar)(calendar);
  const year = (now.eraYear || now.year) + offset;
  const params = {
    periodType,
    year,
    calendar,
    locale,
    startingDay: config.startDay
  };
  let periods = (0, _multiCalendarDates.generateFixedPeriods)(params);
  periods = isFilter ? fnFilter(periods) : periods;
  periods = !isReverse ? periods : periods.reverse();
  return periods;
};
const getDailyPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'DAILY',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getWeeklyPeriodType = (weekObj, fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'WEEKLY',
      config: {
        ...config,
        startDay: weekObj.startDay
      },
      fnFilter,
      periodSettings
    });
  };
};
const getBiWeeklyPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'BIWEEKLY',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getMonthlyPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'MONTHLY',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getBiMonthlyPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'BIMONTHLY',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getQuarterlyPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'QUARTERLY',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getSixMonthlyPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'SIXMONTHLY',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getSixMonthlyAprilPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'SIXMONTHLYAPR',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getYearlyPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'YEARLY',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getFinancialOctoberPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'FYOCT',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getFinancialNovemberPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'FYNOV',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getFinancialJulyPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'FYJUL',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const getFinancialAprilPeriodType = (fnFilter, periodSettings) => {
  return config => {
    return getPeriods({
      periodType: 'FYAPR',
      config,
      fnFilter,
      periodSettings
    });
  };
};
const filterFuturePeriods = periods => {
  const array = [];
  const now = new Date(Date.now());
  for (let i = 0; i < periods.length; i++) {
    if (new Date(periods[i].startDate) <= now) {
      array.push(periods[i]);
    }
  }
  return array;
};
const getOptions = periodSettings => {
  return [{
    id: _index2.DAILY,
    getPeriods: getDailyPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Daily')
  }, {
    id: _index2.WEEKLY,
    getPeriods: getWeeklyPeriodType({
      startDay: 1
    }, filterFuturePeriods, periodSettings),
    name: _index.default.t('Weekly')
  }, {
    id: _index2.WEEKLYWED,
    getPeriods: getWeeklyPeriodType({
      startDay: 3
    }, filterFuturePeriods, periodSettings),
    name: _index.default.t('Weekly (Start Wednesday)')
  }, {
    id: _index2.WEEKLYTHU,
    getPeriods: getWeeklyPeriodType({
      startDay: 4
    }, filterFuturePeriods, periodSettings),
    name: _index.default.t('Weekly (Start Thursday)')
  }, {
    id: _index2.WEEKLYSAT,
    getPeriods: getWeeklyPeriodType({
      startDay: 6
    }, filterFuturePeriods, periodSettings),
    name: _index.default.t('Weekly (Start Saturday)')
  }, {
    id: _index2.WEEKLYSUN,
    getPeriods: getWeeklyPeriodType({
      startDay: 7
    }, filterFuturePeriods, periodSettings),
    name: _index.default.t('Weekly (Start Sunday)')
  }, {
    id: _index2.BIWEEKLY,
    getPeriods: getBiWeeklyPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Bi-weekly')
  }, {
    id: _index2.MONTHLY,
    getPeriods: getMonthlyPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Monthly')
  }, {
    id: _index2.BIMONTHLY,
    getPeriods: getBiMonthlyPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Bi-monthly')
  }, {
    id: _index2.QUARTERLY,
    getPeriods: getQuarterlyPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Quarterly')
  }, {
    id: _index2.SIXMONTHLY,
    getPeriods: getSixMonthlyPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Six-monthly')
  }, {
    id: _index2.SIXMONTHLYAPR,
    getPeriods: getSixMonthlyAprilPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Six-monthly April')
  }, {
    id: _index2.YEARLY,
    getPeriods: getYearlyPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Yearly')
  }, {
    id: _index2.FYNOV,
    getPeriods: getFinancialNovemberPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Financial year (Start November)')
  }, {
    id: _index2.FYOCT,
    getPeriods: getFinancialOctoberPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Financial year (Start October)')
  }, {
    id: _index2.FYJUL,
    getPeriods: getFinancialJulyPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Financial year (Start July)')
  }, {
    id: _index2.FYAPR,
    getPeriods: getFinancialAprilPeriodType(filterFuturePeriods, periodSettings),
    name: _index.default.t('Financial year (Start April)')
  }];
};
const getFixedPeriodsOptionsById = (id, periodSettings) => {
  return getOptions(periodSettings).find(option => option.id === id);
};
exports.getFixedPeriodsOptionsById = getFixedPeriodsOptionsById;
const getFixedPeriodsOptions = () => getOptions();
exports.getFixedPeriodsOptions = getFixedPeriodsOptions;
const getYearOffsetFromNow = yearStr => parseInt(yearStr) - new Date(Date.now()).getFullYear();
exports.getYearOffsetFromNow = getYearOffsetFromNow;
const parsePeriodCode = (code, allowedTypes) => {
  const periodTypes = Object.keys(PERIOD_TYPE_REGEX);
  let i = 0;
  let type = undefined;
  let match = undefined;
  while (i < periodTypes.length && !match) {
    type = periodTypes[i];
    match = code.match(PERIOD_TYPE_REGEX[type]);
    i++;
  }
  if (!match || Array.isArray(allowedTypes) && !allowedTypes.some(t => t === type)) {
    return undefined;
  }
  const period = getFixedPeriodsOptionsById(type);
  const offset = getYearOffsetFromNow(match[1]);
  const options = period.getPeriods({
    offset
  });
  return {
    id: period.id,
    name: period.name,
    year: match[1],
    options
  };
};
exports.parsePeriodCode = parsePeriodCode;