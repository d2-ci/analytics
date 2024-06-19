"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: This file is unused, delete?
function _default(series, layout, dashboard, filterTitle) {
  const seriesName = series[0].name;
  const mergedTitle = seriesName + ' - ' + filterTitle;
  return {
    text: dashboard || (0, _isString.default)(layout.title) ? mergedTitle : seriesName
  };
}