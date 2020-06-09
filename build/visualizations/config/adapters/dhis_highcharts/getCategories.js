"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isArray = _interopRequireDefault(require("d2-utilizr/lib/isArray"));

function _default(metaData, layout) {
  var dimensionName = layout.rows[0].dimension;
  var dimensionIds = (0, _isArray.default)(metaData.dimensions[dimensionName]) ? metaData.dimensions[dimensionName] : [];
  return dimensionIds.map(function (id) {
    return metaData.items[id].name;
  });
}