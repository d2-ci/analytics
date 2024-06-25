import { getFixedDimensions } from '../../modules/predefinedDimensions.js';
import AnalyticsRequestBase from './AnalyticsRequestBase.js';
import AnalyticsRequestDimensionsMixin from './AnalyticsRequestDimensionsMixin.js';
import AnalyticsRequestFiltersMixin from './AnalyticsRequestFiltersMixin.js';
import AnalyticsRequestPropertiesMixin from './AnalyticsRequestPropertiesMixin.js';
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

class AnalyticsRequest extends AnalyticsRequestDimensionsMixin(AnalyticsRequestFiltersMixin(AnalyticsRequestPropertiesMixin(AnalyticsRequestBase))) {
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
    let request = this; // extract dimensions from visualization

    const columns = visualization.columns || [];
    const rows = visualization.rows || [];
    columns.concat(rows).forEach(d => {
      var _d$legendSet, _d$programStage, _d$repetition, _d$repetition$indexes;

      let dimension = d.dimension;

      if ((_d$legendSet = d.legendSet) !== null && _d$legendSet !== void 0 && _d$legendSet.id) {
        dimension += "-".concat(d.legendSet.id);
      }

      if ((_d$programStage = d.programStage) !== null && _d$programStage !== void 0 && _d$programStage.id) {
        dimension = "".concat(d.programStage.id, ".").concat(dimension);
      }

      if (d.filter) {
        dimension += ":".concat(d.filter);
      }

      if ((_d$repetition = d.repetition) !== null && _d$repetition !== void 0 && (_d$repetition$indexes = _d$repetition.indexes) !== null && _d$repetition$indexes !== void 0 && _d$repetition$indexes.length) {
        d.repetition.indexes.forEach(index => {
          request = request.addDimension(dimension.replace(/\./, "[".concat(index, "].")));
        });
      } else {
        var _d$items;

        request = request.addDimension(dimension, (_d$items = d.items) === null || _d$items === void 0 ? void 0 : _d$items.map(item => item.id));
      }
    }); // extract filters from visualization

    const filters = visualization.filters || []; // only pass dx/pe/ou as dimension

    const fixedIds = Object.keys(getFixedDimensions());
    filters.forEach(f => {
      if (passFilterAsDimension && fixedIds.includes(f.dimension)) {
        var _f$items;

        request = request.addDimension(f.dimension, (_f$items = f.items) === null || _f$items === void 0 ? void 0 : _f$items.map(item => item.id));
      } else {
        var _f$programStage, _f$repetition, _f$repetition$indexes;

        let filterString = (_f$programStage = f.programStage) !== null && _f$programStage !== void 0 && _f$programStage.id ? "".concat(f.programStage.id, ".").concat(f.dimension) : f.dimension;

        if (f.filter) {
          filterString += ":".concat(f.filter);
        }

        if ((_f$repetition = f.repetition) !== null && _f$repetition !== void 0 && (_f$repetition$indexes = _f$repetition.indexes) !== null && _f$repetition$indexes !== void 0 && _f$repetition$indexes.length) {
          f.repetition.indexes.forEach(index => {
            request = request.addFilter(filterString.replace(/\./, "[".concat(index, "].")));
          });
        } else {
          var _f$items2;

          request = request.addFilter(filterString, (_f$items2 = f.items) === null || _f$items2 === void 0 ? void 0 : _f$items2.map(item => item.id));
        }
      }
    });
    return request;
  }

}

export default AnalyticsRequest;