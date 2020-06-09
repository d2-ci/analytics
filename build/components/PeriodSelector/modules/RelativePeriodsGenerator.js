"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MONTHS = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var MONTHS = 'Months';
exports.MONTHS = MONTHS;
var DaysPeriodType = {
  generatePeriods: function generatePeriods() {
    return [{
      id: 'TODAY',
      name: function name() {
        return _d2I18n.default.t('Today');
      }
    }, {
      id: 'YESTERDAY',
      name: function name() {
        return _d2I18n.default.t('Yesterday');
      }
    }, {
      id: 'LAST_3_DAYS',
      name: function name() {
        return _d2I18n.default.t('Last 3 days');
      }
    }, {
      id: 'LAST_7_DAYS',
      name: function name() {
        return _d2I18n.default.t('Last 7 days');
      }
    }, {
      id: 'LAST_14_DAYS',
      name: function name() {
        return _d2I18n.default.t('Last 14 days');
      }
    }];
  }
};
var WeeksPeriodType = {
  generatePeriods: function generatePeriods() {
    return [{
      id: 'THIS_WEEK',
      name: function name() {
        return _d2I18n.default.t('This week');
      }
    }, {
      id: 'LAST_WEEK',
      name: function name() {
        return _d2I18n.default.t('Last week');
      }
    }, {
      id: 'LAST_4_WEEKS',
      name: function name() {
        return _d2I18n.default.t('Last 4 weeks');
      }
    }, {
      id: 'LAST_12_WEEKS',
      name: function name() {
        return _d2I18n.default.t('Last 12 weeks');
      }
    }, {
      id: 'LAST_52_WEEKS',
      name: function name() {
        return _d2I18n.default.t('Last 52 weeks');
      }
    }, {
      id: 'WEEKS_THIS_YEAR',
      name: function name() {
        return _d2I18n.default.t('Weeks this year');
      }
    }];
  }
};
var BiWeeksPeriodType = {
  generatePeriods: function generatePeriods() {
    return [{
      id: 'THIS_BIWEEK',
      name: function name() {
        return _d2I18n.default.t('This bi-week');
      }
    }, {
      id: 'LAST_BIWEEK',
      name: function name() {
        return _d2I18n.default.t('Last bi-week');
      }
    }, {
      id: 'LAST_4_BIWEEKS',
      name: function name() {
        return _d2I18n.default.t('Last 4 bi-weeks');
      }
    }];
  }
};
var MonthsPeriodType = {
  generatePeriods: function generatePeriods() {
    return [{
      id: 'THIS_MONTH',
      name: function name() {
        return _d2I18n.default.t('This month');
      }
    }, {
      id: 'LAST_MONTH',
      name: function name() {
        return _d2I18n.default.t('Last month');
      }
    }, {
      id: 'LAST_3_MONTHS',
      name: function name() {
        return _d2I18n.default.t('Last 3 months');
      }
    }, {
      id: 'LAST_6_MONTHS',
      name: function name() {
        return _d2I18n.default.t('Last 6 months');
      }
    }, {
      id: 'LAST_12_MONTHS',
      name: function name() {
        return _d2I18n.default.t('Last 12 months');
      }
    }, {
      id: 'MONTHS_THIS_YEAR',
      name: function name() {
        return _d2I18n.default.t('Months this year');
      }
    }];
  }
};
var BiMonthsPeriodType = {
  generatePeriods: function generatePeriods() {
    return [{
      id: 'THIS_BIMONTH',
      name: function name() {
        return _d2I18n.default.t('This bi-month');
      }
    }, {
      id: 'LAST_BIMONTH',
      name: function name() {
        return _d2I18n.default.t('Last bi-month');
      }
    }, {
      id: 'LAST_6_BIMONTHS',
      name: function name() {
        return _d2I18n.default.t('Last 6 bi-months');
      }
    }, {
      id: 'BIMONTHS_THIS_YEAR',
      name: function name() {
        return _d2I18n.default.t('Bi-months this year');
      }
    }];
  }
};
var QuartersPeriodType = {
  generatePeriods: function generatePeriods() {
    return [{
      id: 'THIS_QUARTER',
      name: function name() {
        return _d2I18n.default.t('This quarter');
      }
    }, {
      id: 'LAST_QUARTER',
      name: function name() {
        return _d2I18n.default.t('Last quarter');
      }
    }, {
      id: 'LAST_4_QUARTERS',
      name: function name() {
        return _d2I18n.default.t('Last 4 quarters');
      }
    }, {
      id: 'QUARTERS_THIS_YEAR',
      name: function name() {
        return _d2I18n.default.t('Quarters this year');
      }
    }];
  }
};
var SixMonthsPeriodType = {
  generatePeriods: function generatePeriods() {
    return [{
      id: 'THIS_SIX_MONTH',
      name: function name() {
        return _d2I18n.default.t('This six-month');
      }
    }, {
      id: 'LAST_SIX_MONTH',
      name: function name() {
        return _d2I18n.default.t('Last six-month');
      }
    }, {
      id: 'LAST_2_SIXMONTHS',
      name: function name() {
        return _d2I18n.default.t('Last 2 six-month');
      }
    }];
  }
};
var FinancialYearsPeriodType = {
  generatePeriods: function generatePeriods() {
    return [{
      id: 'THIS_FINANCIAL_YEAR',
      name: function name() {
        return _d2I18n.default.t('This financial year');
      }
    }, {
      id: 'LAST_FINANCIAL_YEAR',
      name: function name() {
        return _d2I18n.default.t('Last financial year');
      }
    }, {
      id: 'LAST_5_FINANCIAL_YEARS',
      name: function name() {
        return _d2I18n.default.t('Last 5 financial years');
      }
    }];
  }
};
var YearsPeriodType = {
  generatePeriods: function generatePeriods() {
    return [{
      id: 'THIS_YEAR',
      name: function name() {
        return _d2I18n.default.t('This year');
      }
    }, {
      id: 'LAST_YEAR',
      name: function name() {
        return _d2I18n.default.t('Last year');
      }
    }, {
      id: 'LAST_5_YEARS',
      name: function name() {
        return _d2I18n.default.t('Last 5 years');
      }
    }];
  }
};

var Generator = function Generator() {
  var _defineProperty2,
      _this = this;

  (0, _classCallCheck2.default)(this, Generator);
  (0, _defineProperty3.default)(this, "options", (_defineProperty2 = {
    Days: {
      generator: DaysPeriodType,
      name: function name() {
        return _d2I18n.default.t('Days');
      }
    },
    Weeks: {
      generator: WeeksPeriodType,
      name: function name() {
        return _d2I18n.default.t('Weeks');
      }
    },
    BiWeeks: {
      generator: BiWeeksPeriodType,
      name: function name() {
        return _d2I18n.default.t('Bi-weeks');
      }
    }
  }, (0, _defineProperty3.default)(_defineProperty2, MONTHS, {
    generator: MonthsPeriodType,
    name: function name() {
      return _d2I18n.default.t('Months');
    }
  }), (0, _defineProperty3.default)(_defineProperty2, "BiMonths", {
    generator: BiMonthsPeriodType,
    name: function name() {
      return _d2I18n.default.t('Bi-months');
    }
  }), (0, _defineProperty3.default)(_defineProperty2, "Quarters", {
    generator: QuartersPeriodType,
    name: function name() {
      return _d2I18n.default.t('Quarters');
    }
  }), (0, _defineProperty3.default)(_defineProperty2, "SixMonths", {
    generator: SixMonthsPeriodType,
    name: function name() {
      return _d2I18n.default.t('Six-months');
    }
  }), (0, _defineProperty3.default)(_defineProperty2, "FinancialYears", {
    generator: FinancialYearsPeriodType,
    name: function name() {
      return _d2I18n.default.t('Financial Years');
    }
  }), (0, _defineProperty3.default)(_defineProperty2, "Years", {
    generator: YearsPeriodType,
    name: function name() {
      return _d2I18n.default.t('Years');
    }
  }), _defineProperty2));
  (0, _defineProperty3.default)(this, "get", function (key) {
    return _this.options[key].generator;
  });
  (0, _defineProperty3.default)(this, "getOptions", function () {
    return _this.options;
  });
};

exports.default = Generator;