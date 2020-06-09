"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _validators = _interopRequireDefault(require("./validators"));

var _adapters = _interopRequireDefault(require("./adapters"));

var _generators = _interopRequireDefault(require("./generators"));

var _colors = require("../util/colors");

function _default(_ref) {
  var _this = this;

  var store = _ref.store,
      layout = _ref.layout,
      el = _ref.el,
      _ref$inputFormat = _ref.inputFormat,
      inputFormat = _ref$inputFormat === void 0 ? 'dhis' : _ref$inputFormat,
      _ref$outputFormat = _ref.outputFormat,
      outputFormat = _ref$outputFormat === void 0 ? 'highcharts' : _ref$outputFormat,
      extraLayout = _ref.extraLayout,
      extraOptions = _ref.extraOptions,
      onError = _ref.onError,
      onWarning = _ref.onWarning;

  var _validator = _validators.default[inputFormat] || _validators.default.noValidation;

  var _adapter = _adapters.default[inputFormat + '_' + outputFormat];
  var _generator = _generators.default[outputFormat];

  if (_validator === _validators.default.noValidation) {
    onWarning("No validation implementation for config input format \"".concat(inputFormat, "\""));
  }

  if (!_adapter) {
    onError("No config tranformation implementation for format \"".concat(inputFormat, "\" to format \"").concat(outputFormat, "\""));
  }

  if (!_generator) {
    onError("No visualization implementation for format\xA0".concat(outputFormat));
  }

  this.getConfig = function () {
    var DEFAULT_EXTRA_OPTIONS = {
      colors: _colors.theme1,
      noData: {
        text: _d2I18n.default.t('No data')
      }
    };
    return _adapter({
      layout: _validator({
        layout: layout,
        onError: onError,
        onWarning: onWarning
      }),
      extraOptions: Object.assign({}, DEFAULT_EXTRA_OPTIONS, extraOptions),
      store: store,
      el: el,
      extraLayout: extraLayout
    });
  };

  this.createVisualization = function () {
    return _generator(_this.getConfig(), el, extraOptions);
  };
}