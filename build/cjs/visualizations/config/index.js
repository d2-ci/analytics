"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _index = require("../util/colors/index.js");
var _index2 = _interopRequireDefault(require("./adapters/index.js"));
var _index3 = _interopRequireDefault(require("./generators/index.js"));
var _index4 = _interopRequireDefault(require("./validators/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _default(_ref) {
  let {
    store,
    layout,
    el,
    inputFormat = 'dhis',
    outputFormat = 'highcharts',
    extraLayout,
    extraOptions,
    onError,
    onWarning
  } = _ref;
  const _validator = _index4.default[inputFormat] || _index4.default.noValidation;
  const _adapter = _index2.default[inputFormat + '_' + outputFormat];
  const _generator = _index3.default[outputFormat];
  if (_validator === _index4.default.noValidation) {
    onWarning(`No validation implementation for config input format "${inputFormat}"`);
  }
  if (!_adapter) {
    onError(`No config tranformation implementation for format "${inputFormat}" to format "${outputFormat}"`);
  }
  if (!_generator) {
    onError(`No visualization implementation for format ${outputFormat}`);
  }
  const DEFAULT_EXTRA_OPTIONS = {
    colors: _index.theme1,
    noData: {
      text: _d2I18n.default.t('No data')
    },
    resetZoom: {
      text: _d2I18n.default.t('Reset zoom')
    }
  };
  this.getConfig = () => {
    const config = _adapter({
      layout: _validator({
        layout,
        onError,
        onWarning
      }),
      extraOptions: Object.assign({}, DEFAULT_EXTRA_OPTIONS, extraOptions),
      store,
      el,
      extraLayout
    });
    window.$config = {
      ...config,
      chart: {
        ...config.chart,
        renderTo: null
      }
    };
    return config;
  };
  this.createVisualization = () => _generator(this.getConfig(), el, {
    ...extraOptions,
    noData: DEFAULT_EXTRA_OPTIONS.noData,
    fontStyle: layout.fontStyle,
    legendOptions: layout.legend
  });
}