"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MONTHLY = void 0;

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

// generatePeriods config object: { boolean offset, boolean filterFuturePeriods, boolean reversePeriods }
var MONTHLY = 'Monthly';
exports.MONTHLY = MONTHLY;

var getMonthName = function getMonthName(key) {
  var monthNames = [_d2I18n.default.t('January'), _d2I18n.default.t('February'), _d2I18n.default.t('March'), _d2I18n.default.t('April'), _d2I18n.default.t('May'), _d2I18n.default.t('June'), _d2I18n.default.t('July'), _d2I18n.default.t('August'), _d2I18n.default.t('September'), _d2I18n.default.t('October'), _d2I18n.default.t('November'), _d2I18n.default.t('December')];
  return monthNames[key];
};

function DailyPeriodType(formatYyyyMmDd, fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = new Date("01 Jan ".concat(year));

    var _loop = function _loop() {
      var period = {};
      period.startDate = formatYyyyMmDd(date);
      period.endDate = period.startDate;

      period.name = function () {
        return period.startDate;
      };

      period.iso = period.startDate.replace(/-/g, '');
      period.id = period.iso;
      periods.push(period);
      date.setDate(date.getDate() + 1);
    };

    while (date.getFullYear() === year) {
      _loop();
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods.reverse() : periods;
    return periods;
  };
}

function WeeklyPeriodType(formatYyyyMmDd, weekObj, fnFilter) {
  // Calculate the first date of an EPI year base on ISO standard  ( first week always contains 4th Jan )
  var getEpiWeekStartDay = function getEpiWeekStartDay(year, startDayOfWeek) {
    var jan4 = new Date(year, 0, 4);
    var jan4DayOfWeek = jan4.getDay();
    var startDate = jan4;
    var dayDiff = jan4DayOfWeek - startDayOfWeek;

    if (dayDiff > 0) {
      startDate.setDate(jan4.getDate() - dayDiff);
    } else if (dayDiff < 0) {
      startDate.setDate(jan4.getDate() - dayDiff);
      startDate.setDate(startDate.getDate() - 7);
    }

    return startDate;
  };

  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = getEpiWeekStartDay(year, weekObj.startDay);
    var week = 1;

    var _loop2 = function _loop2() {
      var period = {};
      period.startDate = formatYyyyMmDd(date);
      period.iso = "".concat(year).concat(weekObj.shortName, "W").concat(week);
      period.id = period.iso;
      date.setDate(date.getDate() + 6);
      period.endDate = formatYyyyMmDd(date);
      var weekNumber = week;

      period.name = function () {
        return "".concat(_d2I18n.default.t('Week {{weekNumber}}', {
          weekNumber: weekNumber
        }), " - ").concat(period.startDate, " - ").concat(period.endDate);
      }; // if end date is Jan 4th or later, week belongs to next year


      if (date.getFullYear() > year && date.getDate() >= 4) {
        return "break";
      }

      periods.push(period);
      date.setDate(date.getDate() + 1);
      week += 1;
    };

    while (date.getFullYear() <= year) {
      var _ret = _loop2();

      if (_ret === "break") break;
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods.reverse() : periods;
    return periods;
  };
}

function BiWeeklyPeriodType(formatYyyyMmDd, fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = new Date("01 Jan ".concat(year));
    var day = date.getDay();
    var biWeek = 1;

    if (day <= 4) {
      date.setDate(date.getDate() - (day - 1));
    } else {
      date.setDate(date.getDate() + (8 - day));
    }

    var _loop3 = function _loop3() {
      var period = {};
      period.iso = "".concat(year, "BiW").concat(biWeek);
      period.id = period.iso;
      period.startDate = formatYyyyMmDd(date);
      date.setDate(date.getDate() + 13);
      period.endDate = formatYyyyMmDd(date);
      var biWeekNumber = biWeek;

      period.name = function () {
        return "".concat(_d2I18n.default.t('Bi-Week {{biWeekNumber}}', {
          biWeekNumber: biWeekNumber
        }), " - ").concat(period.startDate, " - ").concat(period.endDate);
      }; // if end date is Jan 4th or later, biweek belongs to next year


      if (date.getFullYear() > year && date.getDate() >= 4) {
        return "break";
      }

      periods.push(period);
      date.setDate(date.getDate() + 1);
      biWeek += 1;
    };

    while (date.getFullYear() <= year) {
      var _ret2 = _loop3();

      if (_ret2 === "break") break;
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods.reverse() : periods;
    return periods;
  };
}

function MonthlyPeriodType(formatYyyyMmDd, fnFilter) {
  var formatIso = function formatIso(date) {
    var y = date.getFullYear();
    var m = String(date.getMonth() + 1);
    m = m.length < 2 ? "0".concat(m) : m;
    return y + m;
  };

  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = new Date("31 Dec ".concat(year));

    var _loop4 = function _loop4() {
      var period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setDate(1);
      period.startDate = formatYyyyMmDd(date);
      var monthName = getMonthName(date.getMonth());

      period.name = function () {
        return "".concat(monthName, " ").concat(year);
      };

      period.iso = formatIso(date);
      period.id = period.iso;
      periods.push(period);
      date.setDate(0);
    };

    while (date.getFullYear() === year) {
      _loop4();
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // Months are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
}

function BiMonthlyPeriodType(formatYyyyMmDd, fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = new Date("31 Dec ".concat(year));
    var index = 6;

    var _loop5 = function _loop5() {
      var period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setDate(0);
      date.setDate(1);
      period.startDate = formatYyyyMmDd(date);
      var monthStart = getMonthName(date.getMonth());
      var monthEnd = getMonthName(date.getMonth() + 1);
      var fullYear = date.getFullYear();

      period.name = function () {
        return "".concat(monthStart, " - ").concat(monthEnd, " ").concat(fullYear);
      };

      period.iso = "".concat(year, "0").concat(index, "B");
      period.id = period.iso;
      periods.push(period);
      date.setDate(0);
      index--;
    };

    while (date.getFullYear() === year) {
      _loop5();
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // Bi-months are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
}

function QuarterlyPeriodType(formatYyyyMmDd, fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = new Date("31 Dec ".concat(year));
    var quarter = 4;

    var _loop6 = function _loop6() {
      var period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setDate(0);
      date.setDate(0);
      date.setDate(1);
      period.startDate = formatYyyyMmDd(date);
      var monthStart = getMonthName(date.getMonth());
      var monthEnd = getMonthName(date.getMonth() + 2);
      var fullYear = date.getFullYear();

      period.name = function () {
        return "".concat(monthStart, " - ").concat(monthEnd, " ").concat(fullYear);
      };

      period.iso = "".concat(year, "Q").concat(quarter);
      period.id = period.iso;
      periods.push(period);
      date.setDate(0);
      quarter -= 1;
    };

    while (date.getFullYear() === year) {
      _loop6();
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // Quarters are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
}

function SixMonthlyPeriodType(fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var period = {};
    period.startDate = "".concat(year, "-01-01");
    period.endDate = "".concat(year, "-06-30");

    period.name = function () {
      return "".concat(getMonthName(0), " - ").concat(getMonthName(5), " ").concat(year);
    };

    period.iso = "".concat(year, "S1");
    period.id = period.iso;
    periods.push(period);
    period = {};
    period.startDate = "".concat(year, "-07-01");
    period.endDate = "".concat(year, "-12-31");

    period.name = function () {
      return "".concat(getMonthName(6), " - ").concat(getMonthName(11), " ").concat(year);
    };

    period.iso = "".concat(year, "S2");
    period.id = period.iso;
    periods.push(period);
    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods.reverse() : periods;
    return periods;
  };
}

function SixMonthlyAprilPeriodType(fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var period = {};
    period.startDate = "".concat(year, "-04-01");
    period.endDate = "".concat(year, "-09-30");

    period.name = function () {
      return "".concat(getMonthName(3), " - ").concat(getMonthName(8), " ").concat(year);
    };

    period.iso = "".concat(year, "AprilS1");
    period.id = period.iso;
    periods.push(period);
    period = {};
    period.startDate = "".concat(year, "-10-01");
    period.endDate = "".concat(year + 1, "-03-31");

    period.name = function () {
      return "".concat(getMonthName(9), " ").concat(year, " - ").concat(getMonthName(2), " ").concat(year + 1);
    };

    period.iso = "".concat(year, "AprilS2");
    period.id = period.iso;
    periods.push(period);
    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods.reverse() : periods;
    return periods;
  };
}

function YearlyPeriodType(formatYyyyMmDd, fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = new Date("31 Dec ".concat(year));

    var _loop7 = function _loop7() {
      var period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setMonth(0, 1);
      period.startDate = formatYyyyMmDd(date);
      var dateString = date.getFullYear().toString();

      period.name = function () {
        return dateString;
      };

      period.iso = date.getFullYear().toString();
      period.id = period.iso.toString();
      periods.push(period);
      date.setDate(0);
    };

    while (year - date.getFullYear() < 10) {
      _loop7();
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // Years are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
}

function FinancialOctoberPeriodType(formatYyyyMmDd, fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = new Date("30 Sep ".concat(year + 1));

    var _loop8 = function _loop8(i) {
      var period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setYear(date.getFullYear() - 1);
      date.setDate(date.getDate() + 1);
      period.startDate = formatYyyyMmDd(date);
      var yearStart = date.getFullYear();
      var yearEnd = date.getFullYear() + 1;

      period.name = function () {
        return "".concat(getMonthName(9), " ").concat(yearStart, " - ").concat(getMonthName(8), " ").concat(yearEnd);
      };

      period.id = "".concat(date.getFullYear(), "Oct");
      periods.push(period);
      date.setDate(date.getDate() - 1);
    };

    for (var i = 0; i < 10; i++) {
      _loop8(i);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // FinancialOctober periods are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
}

function FinancialNovemberPeriodType(formatYyyyMmDd, fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = new Date("31 Oct ".concat(year + 1));

    var _loop9 = function _loop9(i) {
      var period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setYear(date.getFullYear() - 1);
      date.setDate(date.getDate() + 1);
      period.startDate = formatYyyyMmDd(date);
      var yearStart = date.getFullYear();
      var yearEnd = date.getFullYear() + 1;

      period.name = function () {
        return "".concat(getMonthName(10), " ").concat(yearStart, " - ").concat(getMonthName(9), " ").concat(yearEnd);
      };

      period.id = "".concat(date.getFullYear(), "Nov");
      periods.push(period);
      date.setDate(date.getDate() - 1);
    };

    for (var i = 0; i < 10; i++) {
      _loop9(i);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // FinancialNovember periods are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
}

function FinancialJulyPeriodType(formatYyyyMmDd, fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = new Date("30 Jun ".concat(year + 1));

    var _loop10 = function _loop10(i) {
      var period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setYear(date.getFullYear() - 1);
      date.setDate(date.getDate() + 1);
      period.startDate = formatYyyyMmDd(date);
      var yearStart = date.getFullYear();
      var yearEnd = date.getFullYear() + 1;

      period.name = function () {
        return "".concat(getMonthName(6), " ").concat(yearStart, " - ").concat(getMonthName(5), " ").concat(yearEnd);
      };

      period.id = "".concat(date.getFullYear(), "July");
      periods.push(period);
      date.setDate(date.getDate() - 1);
    };

    for (var i = 0; i < 10; i++) {
      _loop10(i);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // FinancialJuly periods are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
}

function FinancialAprilPeriodType(formatYyyyMmDd, fnFilter) {
  this.generatePeriods = function (config) {
    var periods = [];
    var offset = parseInt(config.offset, 10);
    var isFilter = config.filterFuturePeriods;
    var isReverse = config.reversePeriods;
    var year = new Date(Date.now()).getFullYear() + offset;
    var date = new Date("31 Mar ".concat(year + 1));

    var _loop11 = function _loop11(i) {
      var period = {};
      period.endDate = formatYyyyMmDd(date);
      date.setYear(date.getFullYear() - 1);
      date.setDate(date.getDate() + 1);
      period.startDate = formatYyyyMmDd(date);
      var yearStart = date.getFullYear();
      var yearEnd = date.getFullYear() + 1;

      period.name = function () {
        return "".concat(getMonthName(3), " ").concat(yearStart, " - ").concat(getMonthName(2), " ").concat(yearEnd);
      };

      period.id = "".concat(date.getFullYear(), "April");
      periods.push(period);
      date.setDate(date.getDate() - 1);
    };

    for (var i = 0; i < 10; i++) {
      _loop11(i);
    }

    periods = isFilter ? fnFilter(periods) : periods;
    periods = isReverse ? periods : periods.reverse(); // FinancialApril periods are collected backwards. If isReverse is true, then do nothing. Else reverse to correct order and return.

    return periods;
  };
}

function PeriodType() {
  var formatYyyyMmDd = function formatYyyyMmDd(date) {
    var y = date.getFullYear();
    var m = String(date.getMonth() + 1);
    var d = String(date.getDate());
    m = m.length < 2 ? "0".concat(m) : m;
    d = d.length < 2 ? "0".concat(d) : d;
    return "".concat(y, "-").concat(m, "-").concat(d);
  };

  var filterFuturePeriods = function filterFuturePeriods(periods) {
    var array = [];
    var now = new Date(Date.now());

    for (var i = 0; i < periods.length; i++) {
      if (new Date(periods[i].startDate) <= now) {
        array.push(periods[i]);
      }
    }

    return array;
  };

  var periodTypes = {};
  periodTypes.Daily = {
    generator: new DailyPeriodType(formatYyyyMmDd, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Daily');
    }
  };
  periodTypes.Weekly = {
    generator: new WeeklyPeriodType(formatYyyyMmDd, {
      shortName: '',
      startDay: 1
    }, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Weekly');
    }
  };
  periodTypes['Bi-weekly'] = {
    generator: new BiWeeklyPeriodType(formatYyyyMmDd, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Bi-weekly');
    }
  };
  periodTypes['Weekly (Start Wednesday)'] = {
    generator: new WeeklyPeriodType(formatYyyyMmDd, {
      shortName: 'Wed',
      startDay: 3
    }, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Weekly (Start Wednesday)');
    }
  };
  periodTypes['Weekly (Start Thursday)'] = {
    generator: new WeeklyPeriodType(formatYyyyMmDd, {
      shortName: 'Thu',
      startDay: 4
    }, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Weekly (Start Thursday)');
    }
  };
  periodTypes['Weekly (Start Saturday)'] = {
    generator: new WeeklyPeriodType(formatYyyyMmDd, {
      shortName: 'Sat',
      startDay: 6
    }, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Weekly (Start Saturday)');
    }
  };
  periodTypes['Weekly (Start Sunday)'] = {
    generator: new WeeklyPeriodType(formatYyyyMmDd, {
      shortName: 'Sun',
      startDay: 7
    }, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Weekly (Start Sunday)');
    }
  };
  periodTypes[MONTHLY] = {
    generator: new MonthlyPeriodType(formatYyyyMmDd, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Monthly');
    }
  };
  periodTypes['Bi-monthly'] = {
    generator: new BiMonthlyPeriodType(formatYyyyMmDd, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Bi-monthly');
    }
  };
  periodTypes.Quarterly = {
    generator: new QuarterlyPeriodType(formatYyyyMmDd, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Quarterly');
    }
  };
  periodTypes['Six-monthly'] = {
    generator: new SixMonthlyPeriodType(filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Six-monthly');
    }
  };
  periodTypes['Six-monthly April'] = {
    generator: new SixMonthlyAprilPeriodType(filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Six-monthly April');
    }
  };
  periodTypes.Yearly = {
    generator: new YearlyPeriodType(formatYyyyMmDd, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Yearly');
    }
  };
  periodTypes['Financial year (Start November)'] = {
    generator: new FinancialNovemberPeriodType(formatYyyyMmDd, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Financial year (Start November)');
    }
  };
  periodTypes['Financial year (Start October)'] = {
    generator: new FinancialOctoberPeriodType(formatYyyyMmDd, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Financial year (Start October)');
    }
  };
  periodTypes['Financial year (Start July)'] = {
    generator: new FinancialJulyPeriodType(formatYyyyMmDd, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Financial year (Start July)');
    }
  };
  periodTypes['Financial year (Start April)'] = {
    generator: new FinancialAprilPeriodType(formatYyyyMmDd, filterFuturePeriods),
    name: function name() {
      return _d2I18n.default.t('Financial year (Start April)');
    }
  };

  this.getOptions = function () {
    return periodTypes;
  };

  this.get = function (key) {
    return periodTypes[key].generator;
  };
}

var _default = PeriodType;
exports.default = _default;