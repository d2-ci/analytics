"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AnalyticsAggregate = _interopRequireDefault(require("./AnalyticsAggregate.js"));

var _AnalyticsEnrollments = _interopRequireDefault(require("./AnalyticsEnrollments.js"));

var _AnalyticsEvents = _interopRequireDefault(require("./AnalyticsEvents.js"));

var _AnalyticsRequest = _interopRequireDefault(require("./AnalyticsRequest.js"));

var _AnalyticsResponse = _interopRequireDefault(require("./AnalyticsResponse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module analytics
 */

/**
 * @description
 * Analytics class used to request analytics data from Web API.
 *
 * @requires analytics.AnalyticsAggregate
 * @requires analytics.AnalyticsEvents
 * @requires analytics.AnalyticsRequest
 * @requires analytics.AnalyticsResponse
 *
 * @example
 * const analytics = new Analytics(
 *  new AnalyticsAggregate(),
 *  new AnalyticsEvents(),
 *  AnalyticsRequest,
 *  AnalyticsResponse
 * )
 *
 * @memberof module:analytics
 * @see {@link https://docs.dhis2.org/master/en/developer/html/webapi_analytics.html} Analytics API documentation
 * @see {@link https://docs.dhis2.org/master/en/developer/html/webapi_event_analytics.html} Event analytics API documentation
 */
class Analytics {
  /**
   * @param {!module:analytics.AnalyticsAggregate} analyticsAggregate The AnalyticsAggregate instance
   * @param {!module:analytics.AnalyticsEnrollments} analyticsEnrollments The AnalyticsEnrollments instance
   * @param {!module:analytics.AnalyticsEvents} analyticsEvents The AnalyticsEvents instance
   * @param {!module:analytics.AnalyticsRequest} analyticsRequest The AnalyticsRequest class
   * @param {!module:analytics.AnalyticsResponse} analyticsResponse The AnalyticsResponse class
   */
  constructor(_ref) {
    let {
      aggregate,
      enrollments,
      events,
      request,
      response
    } = _ref;
    this.aggregate = aggregate;
    this.enrollments = enrollments;
    this.events = events;
    this.request = request;
    this.response = response;
  }
  /**
   * @static
   *
   * @description
   * Get a new instance of the Analytics object. This will function as a singleton, once Analytics object
   * has been created when requesting getAnalytics again the original version will be returned.
   *
   * @returns {Analytics} Object with the analytics interaction properties
   *
   * @example
   * const analytics = Analytics.getAnalytics();
   */


  static getAnalytics(dataEngine) {
    if (!Analytics.getAnalytics.analytics) {
      Analytics.getAnalytics.analytics = new Analytics({
        aggregate: new _AnalyticsAggregate.default(dataEngine),
        enrollments: new _AnalyticsEnrollments.default(dataEngine),
        events: new _AnalyticsEvents.default(dataEngine),
        request: _AnalyticsRequest.default,
        response: _AnalyticsResponse.default
      });
    }

    return Analytics.getAnalytics.analytics;
  }

}

var _default = Analytics;
exports.default = _default;