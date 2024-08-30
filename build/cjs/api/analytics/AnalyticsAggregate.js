"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AnalyticsBase = _interopRequireDefault(require("./AnalyticsBase.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @extends module:analytics.AnalyticsBase
 *
 * @description
 * Analytics aggregate class used to request aggregate analytics data from Web API.
 *
 * @memberof module:analytics
 *
 * @see https://docs.dhis2.org/master/en/developer/html/webapi_analytics.html
 */
class AnalyticsAggregate extends _AnalyticsBase.default {
  /**
   * @param {!AnalyticsRequest} req Request object
   *
   * @returns {Promise} Promise that resolves with the analytics data value set data from the API.
   *
   * @example
   * const req = new analytics.request()
   *  .addDataDimension(['Uvn6LCg7dVU','OdiHJayrsKo'])
   *  .addPeriodDimension('LAST_4_QUARTERS')
   *  .addOrgUnitDimension(['lc3eMKXaEfw','PMa2VCrupOd'])
   *  .addOrgUnitFilter('O6uvpzGd5pu')
   *  .withStartDate('2017-10-01')
   *  .withEndDate('2017-10-31');
   *
   * analytics.aggregate.getDataValueSet(req)
   * .then(console.log);
   */
  getDataValueSet(req) {
    return this.fetch(req.withPath('dataValueSet'));
  }
  /**
   * @param {!AnalyticsRequest} req Request object
   *
   * @returns {Promise} Promise that resolves with the raw data from the API.
   *
   * @example
   * const req = new analytics.request()
   *  .addDataDimension(['Uvn6LCg7dVU','OdiHJayrsKo'])
   *  .addPeriodDimension('LAST_4_QUARTERS')
   *  .addOrgUnitDimension(['lc3eMKXaEfw', 'PMa2VCrupOd'])
   *  .addOrgUnitFilter('O6uvpzGd5pu');
   *  .withStartDate('2017-10-01')
   *  .withEndDate('2017-10-31')
   *  .withFormat('xml');
   *
   *  analytics.aggregate.getRawData(req)
   *  .then(console.log);
   */


  getRawData(req) {
    return this.fetch(req.withPath('rawData'));
  }
  /**
   * @param {!AnalyticsRequest} req Request object
   *
   * @returns {Promise} Promise that resolves with the SQL statement used to query the database.
   *
   * @example
   * const req = new analytics.request()
   *  .addDataDimension(['Uvn6LCg7dVU','OdiHJayrsKo'])
   *  .addPeriodDimension('LAST_4_QUARTERS')
   *  .addOrgUnitDimension(['lc3eMKXaEfw', 'PMa2VCrupOd'])
   *  .addOrgUnitFilter('O6uvpzGd5pu');
   *  .withStartDate('2017-10-01')
   *  .withEndDate('2017-10-31');
   *
   *  analytics.aggregate.getDebugSql(req);
   *  .then(console.log);
   */


  getDebugSql(req) {
    return this.fetch(req.withPath('debug/sql'));
  }

}

var _default = AnalyticsAggregate;
exports.default = _default;