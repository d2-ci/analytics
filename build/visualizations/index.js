"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVisualization = createVisualization;
Object.defineProperty(exports, "Store", {
  enumerable: true,
  get: function get() {
    return _store.default;
  }
});
Object.defineProperty(exports, "Config", {
  enumerable: true,
  get: function get() {
    return _config.default;
  }
});
exports.default = void 0;

var _isArray = _interopRequireDefault(require("d2-utilizr/lib/isArray"));

require("core-js/fn/array/find-index");

var _store = _interopRequireDefault(require("./store"));

var _config = _interopRequireDefault(require("./config"));

var defaultError = function defaultError(error) {
  throw new Error(error);
};

var defaultWarning = function defaultWarning(warning) {
  console.log(warning);
};

function createVisualization(data, layout, el, extraOptions) {
  var error = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultError;
  var warning = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultWarning;
  var outputFormat = arguments.length > 6 ? arguments[6] : undefined;

  var _data = (0, _isArray.default)(data) ? data : [data];

  var store = new _store.default({
    data: _data,
    error: error,
    warning: warning,
    outputFormat: outputFormat
  });
  var config = new _config.default({
    store: store,
    layout: layout,
    el: el,
    outputFormat: outputFormat,
    extraOptions: extraOptions,
    error: error,
    warning: warning
  });
  return {
    store: store,
    config: config,
    visualization: config.createVisualization()
  };
}

var _default = createVisualization;
exports.default = _default;