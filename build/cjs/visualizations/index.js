"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Config", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
Object.defineProperty(exports, "Store", {
  enumerable: true,
  get: function () {
    return _index2.default;
  }
});
exports.createVisualization = createVisualization;
exports.default = void 0;
var _isArray = _interopRequireDefault(require("d2-utilizr/lib/isArray"));
var _index = _interopRequireDefault(require("./config/index.js"));
var _index2 = _interopRequireDefault(require("./store/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const defaultError = error => {
  throw new Error(error);
};
const defaultWarning = warning => {
  console.log(warning);
};
function createVisualization(data, layout, el, extraOptions, error = defaultError, warning = defaultWarning, outputFormat) {
  const _data = (0, _isArray.default)(data) ? data : [data];
  const store = new _index2.default({
    data: _data,
    error,
    warning,
    outputFormat
  });
  const config = new _index.default({
    store,
    layout,
    el,
    outputFormat,
    extraOptions,
    error,
    warning
  });
  return {
    store,
    config,
    visualization: config.createVisualization()
  };
}
var _default = exports.default = createVisualization;