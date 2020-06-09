"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _validators = _interopRequireDefault(require("./validators"));

var _adapters = _interopRequireDefault(require("./adapters"));

function _default(_ref) {
  var data = _ref.data,
      _ref$inputFormat = _ref.inputFormat,
      inputFormat = _ref$inputFormat === void 0 ? 'dhis' : _ref$inputFormat,
      _ref$outputFormat = _ref.outputFormat,
      outputFormat = _ref$outputFormat === void 0 ? 'highcharts' : _ref$outputFormat,
      seriesId = _ref.seriesId,
      categoryId = _ref.categoryId,
      error = _ref.error,
      warning = _ref.warning;

  var _validator = _validators.default[inputFormat] || _validators.default.noValidation;

  var _adapter = _adapters.default[inputFormat + '_' + outputFormat];

  if (_validator === _validators.default.noValidation) {
    warning("Validation not supported for data input format \"".concat(inputFormat, "\""));
  }

  if (!_adapter) {
    error("Data tranformation from \"".concat(inputFormat, "\" to \"").concat(outputFormat, "\" is not supported"));
  }

  this.data = data;

  this.generateData = function (_ref2) {
    var type = _ref2.type,
        _ref2$seriesId = _ref2.seriesId,
        seriesId = _ref2$seriesId === void 0 ? seriesId : _ref2$seriesId,
        _ref2$categoryId = _ref2.categoryId,
        categoryId = _ref2$categoryId === void 0 ? categoryId : _ref2$categoryId;
    return _adapter({
      type: type,
      data: data.map(function (d) {
        return _validator({
          data: d,
          error: error,
          warning: warning
        });
      }),
      seriesId: seriesId,
      categoryId: categoryId
    });
  };
}