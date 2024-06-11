import adapters from './adapters/index.js';
import validators from './validators/index.js';
export default function (_ref) {
  let {
    data,
    inputFormat = 'dhis',
    outputFormat = 'highcharts',
    seriesId: initialSeriesId,
    categoryId: initialCategoryId,
    error,
    warning
  } = _ref;
  const _validator = validators[inputFormat] || validators.noValidation;
  const _adapter = adapters[inputFormat + '_' + outputFormat];
  if (_validator === validators.noValidation) {
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