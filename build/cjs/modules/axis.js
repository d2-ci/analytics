"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasCustomAxes = exports.getAxisNameByLayoutType = exports.getAxisName = void 0;
var _index = _interopRequireDefault(require("../locales/index.js"));
var _axis = require("./layout/axis.js");
var _layoutTypes = require("./layoutTypes.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAxisNamesByLayoutType = layoutType => {
  switch (layoutType) {
    case _layoutTypes.LAYOUT_TYPE_DEFAULT:
    case _layoutTypes.LAYOUT_TYPE_PIE:
    case _layoutTypes.LAYOUT_TYPE_YEAR_OVER_YEAR:
    default:
      return {
        [_axis.AXIS_ID_COLUMNS]: _index.default.t('Series'),
        [_axis.AXIS_ID_ROWS]: _index.default.t('Category'),
        [_axis.AXIS_ID_FILTERS]: _index.default.t('Filter')
      };
    case _layoutTypes.LAYOUT_TYPE_PIVOT_TABLE:
      return {
        [_axis.AXIS_ID_COLUMNS]: _index.default.t('Columns'),
        [_axis.AXIS_ID_ROWS]: _index.default.t('Rows'),
        [_axis.AXIS_ID_FILTERS]: _index.default.t('Filter')
      };
    case _layoutTypes.LAYOUT_TYPE_LINE_LIST:
      return {
        [_axis.AXIS_ID_COLUMNS]: _index.default.t('Columns'),
        [_axis.AXIS_ID_FILTERS]: _index.default.t('Filter')
      };
    case _layoutTypes.LAYOUT_TYPE_SCATTER:
      return {
        [_axis.AXIS_ID_ROWS]: _index.default.t('Points'),
        [_axis.AXIS_ID_FILTERS]: _index.default.t('Filter')
      };
    case _layoutTypes.LAYOUT_TYPE_OUTLIER_TABLE:
      return {
        [_axis.AXIS_ID_COLUMNS]: _index.default.t('Columns')
      };
  }
};
const getAxisNameByLayoutType = (axisId, layoutType) => {
  const name = getAxisNamesByLayoutType(layoutType)[axisId];
  if (!name) {
    throw new Error(`${axisId} is not a valid axis id`);
  }
  return name;
};
exports.getAxisNameByLayoutType = getAxisNameByLayoutType;
const getAxisName = axisId => getAxisNameByLayoutType(axisId, _layoutTypes.LAYOUT_TYPE_DEFAULT);
exports.getAxisName = getAxisName;
const hasCustomAxes = series => Boolean((series === null || series === void 0 ? void 0 : series.length) && series.some(item => item.axis > 0));
exports.hasCustomAxes = hasCustomAxes;