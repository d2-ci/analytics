"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _default(layout, metaData) {
  if (layout.columns) {
    const firstItem = layout.columns[0].items[0];
    const column = Object.assign({}, layout.columns[0], {
      items: [firstItem]
    });
    return (0, _getFilterText.default)([column], metaData);
  }
  return '';
}