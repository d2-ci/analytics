"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _title = _interopRequireDefault(require("./title"));

var _subtitle = _interopRequireDefault(require("./subtitle"));

function _default(_ref) {
  var store = _ref.store,
      layout = _ref.layout,
      extraOptions = _ref.extraOptions;
  var data = store.generateData({
    type: layout.type,
    seriesId: layout.columns && layout.columns.length ? layout.columns[0].dimension : null,
    categoryId: layout.rows && layout.rows.length ? layout.rows[0].dimension : null
  });
  var value = data[0] === undefined ? extraOptions.noData.text : data[0];
  var config = {
    value: value,
    title: (0, _title.default)(layout, store.data[0].metaData, extraOptions.dashboard),
    subtitle: (0, _subtitle.default)(layout, store.data[0].metaData, extraOptions.dashboard)
  };
  return config;
}