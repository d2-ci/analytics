"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _default(layout, metaData, dashboard) {
  var _layout$rows, _layout$columns;
  if ((_layout$rows = layout.rows) !== null && _layout$rows !== void 0 && _layout$rows.length && (_layout$columns = layout.columns) !== null && _layout$columns !== void 0 && _layout$columns.length && !dashboard) {
    const columns = (0, _getFilterText.default)(layout.columns, metaData).split(', ');
    return `${(0, _getFilterText.default)(layout.rows, metaData)}: ${columns[0]} - ${columns[1]}`;
  }
}