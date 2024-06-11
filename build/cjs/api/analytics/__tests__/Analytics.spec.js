"use strict";

var _Analytics = _interopRequireDefault(require("../Analytics.js"));
var _AnalyticsAggregate = _interopRequireDefault(require("../AnalyticsAggregate.js"));
var _AnalyticsEnrollments = _interopRequireDefault(require("../AnalyticsEnrollments.js"));
var _AnalyticsEvents = _interopRequireDefault(require("../AnalyticsEvents.js"));
var _AnalyticsRequest = _interopRequireDefault(require("../AnalyticsRequest.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Analytics', () => {
  let analytics;
  beforeEach(() => {
    analytics = new _Analytics.default({
      aggregate: new _AnalyticsAggregate.default(),
      enrollments: new _AnalyticsEnrollments.default(),
      events: new _AnalyticsEvents.default(),
      request: _AnalyticsRequest.default
    });
  });
  it('should create an instance of Analytics', () => {
    expect(_Analytics.default.getAnalytics()).toBeInstanceOf(_Analytics.default);
  });
  it('should not be allowed to be called without new', () => {
    expect(() => (0, _Analytics.default)()).toThrowErrorMatchingSnapshot();
  });
  it('should contain an instance of AnalyticsAggregate', () => {
    expect(analytics.aggregate).toBeInstanceOf(_AnalyticsAggregate.default);
  });
  it('should contain an instance of AnalyticsEnrollments', () => {
    expect(analytics.enrollments).toBeInstanceOf(_AnalyticsEnrollments.default);
  });
  it('should contain an instance of AnalyticsEvents', () => {
    expect(analytics.events).toBeInstanceOf(_AnalyticsEvents.default);
  });
  it('should contain a reference to AnalyticsRequest', () => {
    expect(analytics.request).toBe(_AnalyticsRequest.default);
  });
  describe('getAnalytics', () => {
    it('should return the same instance on consecutive requests', () => {
      expect(_Analytics.default.getAnalytics()).toBe(_Analytics.default.getAnalytics());
    });
  });
});