"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _index = _interopRequireDefault(require("./adapters/index.js"));
var _index2 = _interopRequireDefault(require("./validators/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _default(_ref) {
  let {
    data,
    inputFormat = 'dhis',
    outputFormat = 'highcharts',
    seriesId: initialSeriesId,
    categoryId: initialCategoryId,
    error,
    warning
  } = _ref;
  const _validator = _index2.default[inputFormat] || _index2.default.noValidation;
  const _adapter = _index.default[inputFormat + '_' + outputFormat];
  if (_validator === _index2.default.noValidation) {
    warning(`Validation not supported for data input format "${inputFormat}"`);
  }
  if (!_adapter) {
    error(`Data tranformation from "${inputFormat}" to "${outputFormat}" is not supported`);
  }
  this.data = data;
  this.generateData = _ref2 => {
    let {
      type,
      seriesId = initialSeriesId,
      categoryIds = [initialCategoryId],
      extraOptions = {}
    } = _ref2;
    return _adapter({
      type,
      data: data.map(d => _validator({
        data: d,
        error,
        warning
      })),
      seriesId,
      categoryIds,
      extraOptions
    });
  };
}