"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hash = require("../../modules/hash.js");
var _predefinedDimensions = require("../../modules/predefinedDimensions.js");
var _AnalyticsRequestBase = _interopRequireDefault(require("./AnalyticsRequestBase.js"));
var _AnalyticsRequestDimensionsMixin = _interopRequireDefault(require("./AnalyticsRequestDimensionsMixin.js"));
var _AnalyticsRequestFiltersMixin = _interopRequireDefault(require("./AnalyticsRequestFiltersMixin.js"));
var _AnalyticsRequestPropertiesMixin = _interopRequireDefault(require("./AnalyticsRequestPropertiesMixin.js"));
var _utils = require("./utils.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description
 * Class for constructing a request object to use for communicating with the analytics API endpoint.
 *
 * @param {!Object} options Object with analytics request options
 *
 * @memberof module:analytics
 *
 * @extends module:analytics.AnalyticsRequestDimensionsMixin
 * @extends module:analytics.AnalyticsRequestFiltersMixin
 * @extends module:analytics.AnalyticsRequestPropertiesMixin
 * @extends module:analytics.AnalyticsRequestBase
 */
class AnalyticsRequest extends (0, _AnalyticsRequestDimensionsMixin.default)((0, _AnalyticsRequestFiltersMixin.default)((0, _AnalyticsRequestPropertiesMixin.default)(_AnalyticsRequestBase.default))) {
  /**
   * Extracts dimensions and filters from an analytic object visualization and add them to the request
   *
   * @param {Object} visualization The analytics object visualization from which extract the dimensions/filters
   * @param {Boolean} [passFilterAsDimension=false] Pass filters as dimension in the query string (used in dataValueSet requests)
   *
   * @returns {AnalyticsRequest} A new instance of the class for chaining purposes
   *
   * @example
   * const req = new analytics.request()
   *    .fromVisualization(visualization);
   *
   * // dimension=pe:last_12_month&dimension=dx:fbfjhsppuqd;cyeuwxtcpku;jtf34knzhzp;hfdmmspbglg&filter=ou:imsptqpwcqd
   *
   * const req2 = new analytics.request()
   *    .fromvisualization(visualization, true);
   *
   * // dimension=pe:last_12_month&dimension=dx:fbfjhsppuqd;cyeuwxtcpku;jtf34knzhzp;hfdmmspbglg&dimension=ou:imsptqpwcqd
   */
  fromVisualization(visualization) {
    let passFilterAsDimension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let request = this;
    const outputType = visualization.outputType;

    // extract dimensions from visualization
    const columns = visualization.columns || [];
    const rows = visualization.rows || [];
    columns.concat(rows).forEach(d => {
      var _d$legendSet, _d$programStage, _d$repetition, _d$repetition$indexes;
      let dimension = d.dimension;
      if ((_d$legendSet = d.legendSet) !== null && _d$legendSet !== void 0 && _d$legendSet.id) {
        dimension += `-${d.legendSet.id}`;
      }
      if (d.filter) {
        dimension += `:${d.filter}`;
      }
      const programStageId = (_d$programStage = d.programStage) === null || _d$programStage === void 0 ? void 0 : _d$programStage.id;
      if ((_d$repetition = d.repetition) !== null && _d$repetition !== void 0 && (_d$repetition$indexes = _d$repetition.indexes) !== null && _d$repetition$indexes !== void 0 && _d$repetition$indexes.length) {
        d.repetition.indexes.forEach(index => {
          var _d$program;
          request = request.addDimension((0, _utils.formatDimension)({
            programId: (_d$program = d.program) === null || _d$program === void 0 ? void 0 : _d$program.id,
            programStageId: `${programStageId}[${index}]`,
            dimension,
            outputType
          }));
        });
      } else {
        var _d$program2, _d$items;
        request = request.addDimension((0, _utils.formatDimension)({
          programId: (_d$program2 = d.program) === null || _d$program2 === void 0 ? void 0 : _d$program2.id,
          programStageId,
          dimension,
          outputType
        }), (_d$items = d.items) === null || _d$items === void 0 ? void 0 : _d$items.map(item => item.id));
      }
    });

    // extract filters from visualization
    const filters = visualization.filters || [];

    // only pass dx/pe/ou as dimension
    const fixedIds = Object.keys((0, _predefinedDimensions.getFixedDimensions)());
    filters.forEach(f => {
      if (passFilterAsDimension && fixedIds.includes(f.dimension)) {
        var _f$items;
        request = request.addDimension(f.dimension, (_f$items = f.items) === null || _f$items === void 0 ? void 0 : _f$items.map(item => item.id));
      } else {
        var _f$programStage, _f$repetition, _f$repetition$indexes;
        let filterString = f.dimension;
        if (f.filter) {
          filterString += `:${f.filter}`;
        }
        const programStageId = (_f$programStage = f.programStage) === null || _f$programStage === void 0 ? void 0 : _f$programStage.id;
        if ((_f$repetition = f.repetition) !== null && _f$repetition !== void 0 && (_f$repetition$indexes = _f$repetition.indexes) !== null && _f$repetition$indexes !== void 0 && _f$repetition$indexes.length) {
          f.repetition.indexes.forEach(index => {
            var _f$program;
            request = request.addFilter((0, _utils.formatDimension)({
              programId: (_f$program = f.program) === null || _f$program === void 0 ? void 0 : _f$program.id,
              programStageId: `${programStageId}[${index}]`,
              dimension: filterString,
              outputType
            }));
          });
        } else {
          var _f$program2, _f$items2;
          request = request.addFilter((0, _utils.formatDimension)({
            programId: (_f$program2 = f.program) === null || _f$program2 === void 0 ? void 0 : _f$program2.id,
            programStageId,
            dimension: filterString,
            outputType
          }), (_f$items2 = f.items) === null || _f$items2 === void 0 ? void 0 : _f$items2.map(item => item.id));
        }
      }
    });

    // add cache param for expression dimension items
    const expressionHash = (0, _hash.getExpressionHashFromVisualization)(visualization);
    if (expressionHash) {
      request.withParameters({
        edi_cache: expressionHash
      });
    }
    return request;
  }
}
var _default = AnalyticsRequest;
exports.default = _default;