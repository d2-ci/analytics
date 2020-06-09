"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText"));

function _default(layout, metaData) {
  if (layout.columns) {
    var firstItem = layout.columns[0].items[0];
    var column = Object.assign({}, layout.columns[0], {
      items: [firstItem]
    });
    return (0, _getFilterText.default)([column], metaData);
  }

  return '';
}