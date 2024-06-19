"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isArray = _interopRequireDefault(require("d2-utilizr/lib/isArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(metaData, dimensionId) {
  const dimensionItemsIds = (0, _isArray.default)(metaData.dimensions[dimensionId]) ? metaData.dimensions[dimensionId] : [];
  return dimensionItemsIds.map(id => metaData.items[id].name);
}