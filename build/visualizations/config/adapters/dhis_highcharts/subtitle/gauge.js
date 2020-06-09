"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));

function _default(series, layout, dashboard, filterTitle) {
  var seriesName = series[0].name;
  var mergedTitle = seriesName + ' - ' + filterTitle;
  return {
    text: dashboard || (0, _isString.default)(layout.title) ? mergedTitle : seriesName
  };
}