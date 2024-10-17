"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getSingleValueTitleColor", {
  enumerable: true,
  get: function () {
    return _index.getSingleValueTitleColor;
  }
});
exports.getSingleValueTitleText = getSingleValueTitleText;
var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText.js"));
var _index = require("../customSVGOptions/singleValue/index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getSingleValueTitleText(layout, metaData) {
  if (layout.hideTitle) {
    return '';
  }
  if (typeof layout.title === 'string' && layout.title.length) {
    return layout.title;
  }
  if (layout.columns) {
    const firstItem = layout.columns[0].items[0];
    const column = Object.assign({}, layout.columns[0], {
      items: [firstItem]
    });
    return (0, _getFilterText.default)([column], metaData);
  }
  return '';
}