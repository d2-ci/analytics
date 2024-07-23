"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INDICATOR_FACTOR_100 = void 0;
exports.default = _default;
var _index = _interopRequireDefault(require("./subtitle/index.js"));
var _index2 = _interopRequireDefault(require("./title/index.js"));
var _index3 = _interopRequireDefault(require("./value/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const INDICATOR_FACTOR_100 = 100;
exports.INDICATOR_FACTOR_100 = INDICATOR_FACTOR_100;
function _default(_ref) {
  let {
    store,
    layout,
    extraOptions
  } = _ref;
  const data = store.generateData({
    type: layout.type,
    seriesId: layout.columns && layout.columns.length ? layout.columns[0].dimension : null,
    categoryId: layout.rows && layout.rows.length ? layout.rows[0].dimension : null
  });
  const metaData = store.data[0].metaData;
  const config = {
    value: data[0],
    formattedValue: data[0] === undefined ? extraOptions.noData.text : (0, _index3.default)(data[0], layout, metaData),
    title: (0, _index2.default)(layout, metaData, extraOptions.dashboard),
    subtitle: (0, _index.default)(layout, metaData, extraOptions.dashboard)
  };
  const indicatorType = metaData.items[metaData.dimensions.dx[0]].indicatorType;

  // Use % symbol for factor 100 and the full string for others
  if ((indicatorType === null || indicatorType === void 0 ? void 0 : indicatorType.factor) !== INDICATOR_FACTOR_100) {
    config.subText = indicatorType === null || indicatorType === void 0 ? void 0 : indicatorType.displayName;
  }
  return config;
}