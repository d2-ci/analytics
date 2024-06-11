"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REPORTING_RATE_ON_TIME = exports.REPORTING_RATE = exports.EXPECTED_REPORTS = exports.DATA_SETS_CONSTANTS = exports.ACTUAL_REPORTS_ON_TIME = exports.ACTUAL_REPORTS = void 0;
var _index = _interopRequireDefault(require("../locales/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const REPORTING_RATE = 'REPORTING_RATE';
exports.REPORTING_RATE = REPORTING_RATE;
const REPORTING_RATE_ON_TIME = 'REPORTING_RATE_ON_TIME';
exports.REPORTING_RATE_ON_TIME = REPORTING_RATE_ON_TIME;
const ACTUAL_REPORTS = 'ACTUAL_REPORTS';
exports.ACTUAL_REPORTS = ACTUAL_REPORTS;
const ACTUAL_REPORTS_ON_TIME = 'ACTUAL_REPORTS_ON_TIME';
exports.ACTUAL_REPORTS_ON_TIME = ACTUAL_REPORTS_ON_TIME;
const EXPECTED_REPORTS = 'EXPECTED_REPORTS';
exports.EXPECTED_REPORTS = EXPECTED_REPORTS;
const DATA_SETS_CONSTANTS = [{
  id: REPORTING_RATE,
  getName: () => _index.default.t('Reporting rate')
}, {
  id: REPORTING_RATE_ON_TIME,
  getName: () => _index.default.t('Reporting rate on time')
}, {
  id: ACTUAL_REPORTS,
  getName: () => _index.default.t('Actual reports')
}, {
  id: ACTUAL_REPORTS_ON_TIME,
  getName: () => _index.default.t('Actual reports on time')
}, {
  id: EXPECTED_REPORTS,
  getName: () => _index.default.t('Expected reports')
}];
exports.DATA_SETS_CONSTANTS = DATA_SETS_CONSTANTS;