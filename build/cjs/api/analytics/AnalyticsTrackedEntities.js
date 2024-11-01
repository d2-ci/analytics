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
 * Analytics tracked entities class used to request analytics tracked entities data from Web API.
 *
 * @memberof module:analytics
 */
class AnalyticsTrackedEntities extends _AnalyticsBase.default {
  /**
   * @param {!AnalyticsRequest} req Request object
   *
   * @returns {Promise} Promise that resolves with the analytics query data from the api.
   *
   * @example
      // TODO: provide working example
   */
  getQuery(req) {
    return this.fetch(req.withPath('trackedEntities/query'));
  }
}
var _default = AnalyticsTrackedEntities;
exports.default = _default;