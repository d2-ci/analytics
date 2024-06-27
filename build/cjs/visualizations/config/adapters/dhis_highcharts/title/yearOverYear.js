"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(layout, metaData, dashboard) {
  const titleFragments = [];

  if (layout.columns && layout.columns.length && !dashboard) {
    titleFragments.push((0, _getFilterText.default)(layout.columns, metaData));
  }

  if (layout.filters && layout.filters.length && !dashboard) {
    titleFragments.push((0, _getFilterText.default)(layout.filters, metaData));
  }

  return titleFragments.length ? titleFragments.join(' - ') : null;
}