"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdaptedUiLayoutByType = void 0;
var _isObject = _interopRequireDefault(require("lodash/isObject"));
var _axis = require("./layout/axis.js");
var _predefinedDimensions = require("./predefinedDimensions.js");
var _visTypes = require("./visTypes.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getAdaptedUiLayoutByType = (layout, type) => {
  var _layout$rows;
  if ((0, _visTypes.isTwoCategoryChartType)(type) && ((_layout$rows = layout.rows) === null || _layout$rows === void 0 ? void 0 : _layout$rows.length) > 1) {
    return getDualCategoryLayout(layout);
  }
  switch (type) {
    case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE:
    case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
      {
        return getYearOverYearLayout(layout);
      }
    case _visTypes.VIS_TYPE_PIE:
      {
        return getPieLayout(layout);
      }
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
    case _visTypes.VIS_TYPE_GAUGE:
      {
        return getSingleValueLayout(layout);
      }
    case _visTypes.VIS_TYPE_PIVOT_TABLE:
      return layout;
    case _visTypes.VIS_TYPE_SCATTER:
      return getScatterLayout(layout);
    case _visTypes.VIS_TYPE_OUTLIER_TABLE:
      return getOutlierTableLayout(layout);
    default:
      return getDefaultLayout(layout);
  }
};

// Transform from ui.layout to default layout format
exports.getAdaptedUiLayoutByType = getAdaptedUiLayoutByType;
const getDefaultLayout = layout => {
  const columns = layout[_axis.AXIS_ID_COLUMNS].slice();
  const rows = layout[_axis.AXIS_ID_ROWS].slice();
  return {
    [_axis.AXIS_ID_COLUMNS]: columns.length ? [columns.shift()] : columns,
    [_axis.AXIS_ID_ROWS]: rows.length ? [rows.shift()] : rows,
    [_axis.AXIS_ID_FILTERS]: [...layout[_axis.AXIS_ID_FILTERS], ...columns, ...rows]
  };
};
const getDualCategoryLayout = layout => {
  const columns = layout[_axis.AXIS_ID_COLUMNS].slice();
  const rows = layout[_axis.AXIS_ID_ROWS].slice();
  return {
    [_axis.AXIS_ID_COLUMNS]: columns.length ? [columns.shift()] : columns,
    [_axis.AXIS_ID_ROWS]: rows.length > 2 ? rows.splice(0, 2) : rows.splice(0, rows.length),
    [_axis.AXIS_ID_FILTERS]: [...layout[_axis.AXIS_ID_FILTERS], ...columns, ...rows]
  };
};

// Transform from ui.layout to pie layout format
const getPieLayout = layout => {
  const columns = layout[_axis.AXIS_ID_COLUMNS].slice();
  const rows = layout[_axis.AXIS_ID_ROWS].slice();
  return {
    [_axis.AXIS_ID_COLUMNS]: columns.length ? [columns.shift()] : rows.length ? [rows.shift()] : [],
    [_axis.AXIS_ID_ROWS]: [],
    [_axis.AXIS_ID_FILTERS]: [...layout[_axis.AXIS_ID_FILTERS], ...columns, ...rows]
  };
};
const getYearOverYearLayout = layout => ({
  [_axis.AXIS_ID_COLUMNS]: [],
  [_axis.AXIS_ID_ROWS]: [],
  [_axis.AXIS_ID_FILTERS]: [...layout[_axis.AXIS_ID_FILTERS], ...layout[_axis.AXIS_ID_COLUMNS], ...layout[_axis.AXIS_ID_ROWS]].filter(dim => getDimensionId(dim) !== _predefinedDimensions.DIMENSION_ID_PERIOD)
});
const getScatterLayout = layout => ({
  [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA],
  [_axis.AXIS_ID_ROWS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT],
  [_axis.AXIS_ID_FILTERS]: [...layout[_axis.AXIS_ID_COLUMNS], ...layout[_axis.AXIS_ID_ROWS], ...layout[_axis.AXIS_ID_FILTERS]].filter(dim => ![_predefinedDimensions.DIMENSION_ID_DATA, _predefinedDimensions.DIMENSION_ID_ORGUNIT].includes(getDimensionId(dim)))
});

// Transform from ui.layout to single value layout format
const getSingleValueLayout = layout => {
  const columns = layout[_axis.AXIS_ID_COLUMNS].slice();
  const rows = layout[_axis.AXIS_ID_ROWS].slice();
  const filters = layout[_axis.AXIS_ID_FILTERS].slice();
  let dxDimensionArr = [];
  const clonedLayout = [columns, rows, filters];
  for (let i = 0; i < clonedLayout.length; ++i) {
    const axis = clonedLayout[i];
    for (let j = 0; j < axis.length; ++j) {
      const dimension = axis[j];
      if (getDimensionId(dimension) == _predefinedDimensions.DIMENSION_ID_DATA) {
        dxDimensionArr = axis.splice(j, 1);
        break;
      }
    }
    if (dxDimensionArr.length > 0) {
      break;
    }
  }
  return {
    [_axis.AXIS_ID_COLUMNS]: dxDimensionArr,
    [_axis.AXIS_ID_ROWS]: [],
    [_axis.AXIS_ID_FILTERS]: [...filters, ...columns, ...rows]
  };
};

// Transform from ui.layout to outlier table layout format
const getOutlierTableLayout = () => ({
  [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA, _predefinedDimensions.DIMENSION_ID_PERIOD, _predefinedDimensions.DIMENSION_ID_ORGUNIT],
  [_axis.AXIS_ID_ROWS]: [],
  [_axis.AXIS_ID_FILTERS]: []
});

/**
 *
 * @param {string|object} dimension
 * @returns {string}
 */
const getDimensionId = dimension => {
  return (0, _isObject.default)(dimension) ? dimension.dimension : dimension;
};