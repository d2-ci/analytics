"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateDimensionStrings = exports.default = void 0;
var _sortBy = _interopRequireDefault(require("lodash/sortBy"));
var _AnalyticsRequest = _interopRequireDefault(require("./AnalyticsRequest.js"));
var _utils = require("./utils.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const analyticsQuery = {
  resource: 'analytics',
  id: _ref => {
    let {
      path,
      program,
      trackedEntityType
    } = _ref;
    return (0, _utils.formatRequestPath)({
      path,
      program,
      trackedEntityType
    });
  },
  params: _ref2 => {
    let {
      dimensions,
      filters,
      parameters
    } = _ref2;
    return {
      dimension: dimensions.length ? dimensions : undefined,
      filter: filters.length ? filters : undefined,
      ...parameters
    };
  }
};
const analyticsDataQuery = {
  resource: 'analytics',
  id: _ref3 => {
    let {
      path,
      program,
      trackedEntityType
    } = _ref3;
    return (0, _utils.formatRequestPath)({
      path,
      program,
      trackedEntityType
    });
  },
  params: _ref4 => {
    let {
      dimensions,
      filters,
      parameters
    } = _ref4;
    return {
      dimension: dimensions.length ? generateDimensionStrings(dimensions, {
        sorted: true
      }) : undefined,
      filter: filters.length ? generateDimensionStrings(filters, {
        sorted: true
      }) : undefined,
      ...parameters,
      skipMeta: true,
      skipData: false
    };
  }
};
const analyticsMetaDataQuery = {
  resource: 'analytics',
  id: _ref5 => {
    let {
      path,
      program,
      trackedEntityType
    } = _ref5;
    return (0, _utils.formatRequestPath)({
      path,
      program,
      trackedEntityType
    });
  },
  params: _ref6 => {
    let {
      dimensions,
      filters,
      parameters
    } = _ref6;
    return {
      dimension: dimensions.length ? generateDimensionStrings(dimensions) : undefined,
      filter: filters.length ? generateDimensionStrings(filters) : undefined,
      ...parameters,
      skipMeta: false,
      skipData: true,
      includeMetadataDetails: true
    };
  }
};
const generateDimensionStrings = function () {
  let dimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let options = arguments.length > 1 ? arguments[1] : undefined;
  const sortedDimensions = (0, _sortBy.default)(dimensions, 'dimension');
  return sortedDimensions.map(_ref7 => {
    let {
      dimension,
      items
    } = _ref7;
    if (Array.isArray(items) && items.length) {
      if (options && options.sorted) {
        items = items.slice().sort();
      }
      return `${dimension}:${items.join(';')}`;
    }
    return dimension;
  });
};

/**
 * @private
 * @description
 * Base class for communicating with the analytics API endpoint.
 * Its subclasses can be used to get analytics data.
 *
 * @param {Instance} [dataEngine=<DataEngine>] dataEngine to use for the requests
 *
 * @memberof module:analytics
 * @abstract
 */
exports.generateDimensionStrings = generateDimensionStrings;
class AnalyticsBase {
  constructor(dataEngine) {
    this.dataEngine = dataEngine;
  }

  /**
   * Loads the analytics data and returns them as an object from the promise.
   * Two parallel requests are made against the analytics api.
   * One for getting only the metaData and one for getting the actual data.
   * This is for caching purposes, as in many situations the metaData request changes while
   * the data one will be the same and thus have the same response.
   * This methods takes care of adding the default extra parameters to both requests.
   *
   * @param {!AnalyticsRequest} req Analytics request object with the request details
   *
   * @returns {Promise} Promise that resolves with the analytics data and metaData from the api.
   *
   * @example
   * const req = new analytics.request()
   *  .addDataDimension(['Uvn6LCg7dVU','OdiHJayrsKo'])
   *  .addPeriodDimension('LAST_4_QUARTERS')
   *  .addOrgUnitDimension(['lc3eMKXaEfw','PMa2VCrupOd']);
   *
   * analytics.aggregate
   *  .get(req)
   *  .then(analyticsData => console.log('Analytics data', analyticsData))
   *
   * // { metaData: { ... }, rows: [ ... ], headers: [ ... ], height: 0, width: 0 }
   */
  async get(req) {
    // keep metaData and data requests separate for caching purposes
    const metaDataReq = new _AnalyticsRequest.default(req).withSkipMeta(false).withSkipData(true).withIncludeMetadataDetails(true);
    const dataReq = new _AnalyticsRequest.default(req).withSkipData(false).withSkipMeta(true);

    // but run them in parallel
    const response = await this.dataEngine.query({
      data: analyticsDataQuery,
      metaData: analyticsMetaDataQuery
    }, {
      variables: {
        path: req.path,
        program: req.program,
        trackedEntityType: req.trackedEntityType,
        dimensions: req.dimensions,
        filters: req.filters,
        parameters: req.parameters,
        dataParams: dataReq.parameters,
        metaDataParams: metaDataReq.parameters
      }
    });
    return {
      ...response.data,
      metaData: response.metaData.metaData
    };
  }

  /**
   * @private
   * @description
   * This method does not manipulate the request object, but directly requests the data from the api
   * based on the request's configuration.
   *
   * @param {!AnalyticsRequest} req Request object
   * @param {Object} options Optional configurations, ie. for sorting dimensions
   *
   * @returns {Promise} Promise that resolves with the data from the api.
   *
   * @example
   * const req = new analytics.request()
   *  .fromModel(chartModel)
   *  .withSkipData();
   *
   * analytics.aggregate
   *  .fetch(req)
   *  .then(analyticsData => console.log('Analytics data', analyticsData))
   *
   * // { metaData: { ... }, rows: [], height: 0, width: 0 }
   */
  async fetch(req, options) {
    const response = await this.dataEngine.query({
      data: analyticsQuery
    }, {
      variables: {
        path: req.path,
        program: req.program,
        trackedEntityType: req.trackedEntityType,
        dimensions: generateDimensionStrings(req.dimensions, options),
        filters: generateDimensionStrings(req.filters, options),
        parameters: req.parameters
      }
    });
    return response.data;
  }
}
var _default = exports.default = AnalyticsBase;