"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visTypeIcons = exports.visTypeDisplayNames = exports.isYearOverYear = exports.isVerticalType = exports.isTwoCategoryChartType = exports.isStacked = exports.isSingleValue = exports.isOutlierTable = exports.isMultiType = exports.isLegendSetType = exports.isDualAxisType = exports.isColumnBasedType = exports.getDisplayNameByVisType = exports.defaultVisType = exports.VIS_TYPE_YEAR_OVER_YEAR_LINE = exports.VIS_TYPE_YEAR_OVER_YEAR_COLUMN = exports.VIS_TYPE_STACKED_COLUMN = exports.VIS_TYPE_STACKED_BAR = exports.VIS_TYPE_STACKED_AREA = exports.VIS_TYPE_SINGLE_VALUE = exports.VIS_TYPE_SCATTER = exports.VIS_TYPE_RADAR = exports.VIS_TYPE_PIVOT_TABLE = exports.VIS_TYPE_PIE = exports.VIS_TYPE_OUTLIER_TABLE = exports.VIS_TYPE_LINE_LIST = exports.VIS_TYPE_LINE = exports.VIS_TYPE_GROUP_CHARTS = exports.VIS_TYPE_GROUP_ALL = exports.VIS_TYPE_GAUGE = exports.VIS_TYPE_COLUMN = exports.VIS_TYPE_BUBBLE = exports.VIS_TYPE_BAR = exports.VIS_TYPE_AREA = void 0;
var _ui = require("@dhis2/ui");
var _index = _interopRequireDefault(require("../locales/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const VIS_TYPE_PIVOT_TABLE = exports.VIS_TYPE_PIVOT_TABLE = 'PIVOT_TABLE';
const VIS_TYPE_AREA = exports.VIS_TYPE_AREA = 'AREA';
const VIS_TYPE_STACKED_AREA = exports.VIS_TYPE_STACKED_AREA = 'STACKED_AREA';
const VIS_TYPE_BAR = exports.VIS_TYPE_BAR = 'BAR';
const VIS_TYPE_STACKED_BAR = exports.VIS_TYPE_STACKED_BAR = 'STACKED_BAR';
const VIS_TYPE_COLUMN = exports.VIS_TYPE_COLUMN = 'COLUMN';
const VIS_TYPE_YEAR_OVER_YEAR_COLUMN = exports.VIS_TYPE_YEAR_OVER_YEAR_COLUMN = 'YEAR_OVER_YEAR_COLUMN';
const VIS_TYPE_STACKED_COLUMN = exports.VIS_TYPE_STACKED_COLUMN = 'STACKED_COLUMN';
const VIS_TYPE_GAUGE = exports.VIS_TYPE_GAUGE = 'GAUGE';
const VIS_TYPE_LINE = exports.VIS_TYPE_LINE = 'LINE';
const VIS_TYPE_LINE_LIST = exports.VIS_TYPE_LINE_LIST = 'LINE_LIST';
const VIS_TYPE_YEAR_OVER_YEAR_LINE = exports.VIS_TYPE_YEAR_OVER_YEAR_LINE = 'YEAR_OVER_YEAR_LINE';
const VIS_TYPE_PIE = exports.VIS_TYPE_PIE = 'PIE';
const VIS_TYPE_RADAR = exports.VIS_TYPE_RADAR = 'RADAR';
const VIS_TYPE_SCATTER = exports.VIS_TYPE_SCATTER = 'SCATTER';
const VIS_TYPE_SINGLE_VALUE = exports.VIS_TYPE_SINGLE_VALUE = 'SINGLE_VALUE';
const VIS_TYPE_BUBBLE = exports.VIS_TYPE_BUBBLE = 'BUBBLE';
const VIS_TYPE_GROUP_ALL = exports.VIS_TYPE_GROUP_ALL = 'ALL';
const VIS_TYPE_GROUP_CHARTS = exports.VIS_TYPE_GROUP_CHARTS = 'CHARTS';
const VIS_TYPE_OUTLIER_TABLE = exports.VIS_TYPE_OUTLIER_TABLE = 'OUTLIER_TABLE';
const visTypeDisplayNames = exports.visTypeDisplayNames = {
  [VIS_TYPE_PIVOT_TABLE]: _index.default.t('Pivot table'),
  [VIS_TYPE_AREA]: _index.default.t('Area'),
  [VIS_TYPE_STACKED_AREA]: _index.default.t('Stacked area'),
  [VIS_TYPE_BAR]: _index.default.t('Bar'),
  [VIS_TYPE_STACKED_BAR]: _index.default.t('Stacked bar'),
  [VIS_TYPE_COLUMN]: _index.default.t('Column'),
  [VIS_TYPE_YEAR_OVER_YEAR_COLUMN]: _index.default.t('Year over year (column)'),
  [VIS_TYPE_STACKED_COLUMN]: _index.default.t('Stacked column'),
  [VIS_TYPE_GAUGE]: _index.default.t('Gauge'),
  [VIS_TYPE_LINE]: _index.default.t('Line'),
  [VIS_TYPE_LINE_LIST]: _index.default.t('Line list'),
  [VIS_TYPE_YEAR_OVER_YEAR_LINE]: _index.default.t('Year over year (line)'),
  [VIS_TYPE_PIE]: _index.default.t('Pie'),
  [VIS_TYPE_RADAR]: _index.default.t('Radar'),
  [VIS_TYPE_SCATTER]: _index.default.t('Scatter'),
  [VIS_TYPE_SINGLE_VALUE]: _index.default.t('Single value'),
  [VIS_TYPE_OUTLIER_TABLE]: _index.default.t('Outlier table'),
  [VIS_TYPE_GROUP_ALL]: _index.default.t('All types'),
  [VIS_TYPE_GROUP_CHARTS]: _index.default.t('All charts')
};
const visTypeIcons = exports.visTypeIcons = {
  [VIS_TYPE_PIVOT_TABLE]: _ui.IconVisualizationPivotTable24,
  [VIS_TYPE_AREA]: _ui.IconVisualizationArea24,
  [VIS_TYPE_STACKED_AREA]: _ui.IconVisualizationAreaStacked24,
  [VIS_TYPE_BAR]: _ui.IconVisualizationBar24,
  [VIS_TYPE_STACKED_BAR]: _ui.IconVisualizationBarStacked24,
  [VIS_TYPE_COLUMN]: _ui.IconVisualizationColumn24,
  [VIS_TYPE_YEAR_OVER_YEAR_COLUMN]: _ui.IconVisualizationColumnMulti24,
  [VIS_TYPE_STACKED_COLUMN]: _ui.IconVisualizationColumnStacked24,
  [VIS_TYPE_GAUGE]: _ui.IconVisualizationGauge24,
  [VIS_TYPE_LINE]: _ui.IconVisualizationLine24,
  [VIS_TYPE_LINE_LIST]: _ui.IconVisualizationLinelist24,
  [VIS_TYPE_YEAR_OVER_YEAR_LINE]: _ui.IconVisualizationLineMulti24,
  [VIS_TYPE_PIE]: _ui.IconVisualizationPie24,
  [VIS_TYPE_RADAR]: _ui.IconVisualizationRadar24,
  [VIS_TYPE_SCATTER]: _ui.IconVisualizationScatter24,
  [VIS_TYPE_SINGLE_VALUE]: _ui.IconVisualizationSingleValue24,
  [VIS_TYPE_OUTLIER_TABLE]: _ui.IconVisualizationOutlierTable24
};
const getDisplayNameByVisType = visType => {
  const displayName = visTypeDisplayNames[visType];
  if (!displayName) {
    throw new Error(`${visType} is not a valid visualization type`);
  }
  return displayName;
};
exports.getDisplayNameByVisType = getDisplayNameByVisType;
const stackedTypes = [VIS_TYPE_STACKED_COLUMN, VIS_TYPE_STACKED_BAR, VIS_TYPE_STACKED_AREA];
const yearOverYearTypes = [VIS_TYPE_YEAR_OVER_YEAR_LINE, VIS_TYPE_YEAR_OVER_YEAR_COLUMN];
const dualAxisTypes = [VIS_TYPE_COLUMN, VIS_TYPE_BAR, VIS_TYPE_LINE, VIS_TYPE_AREA];
const multiTypeTypes = [VIS_TYPE_COLUMN, VIS_TYPE_LINE];
const twoCategoryChartTypes = [VIS_TYPE_COLUMN, VIS_TYPE_STACKED_COLUMN, VIS_TYPE_BAR, VIS_TYPE_STACKED_BAR, VIS_TYPE_LINE, VIS_TYPE_AREA, VIS_TYPE_STACKED_AREA];
const columnBasedTypes = [VIS_TYPE_COLUMN, VIS_TYPE_BAR, VIS_TYPE_YEAR_OVER_YEAR_COLUMN, VIS_TYPE_STACKED_COLUMN, VIS_TYPE_STACKED_BAR];
const verticalTypes = [VIS_TYPE_BAR, VIS_TYPE_STACKED_BAR, VIS_TYPE_GAUGE];
const legendSetTypes = [VIS_TYPE_COLUMN, VIS_TYPE_BAR, VIS_TYPE_GAUGE, VIS_TYPE_SINGLE_VALUE, VIS_TYPE_PIVOT_TABLE, VIS_TYPE_STACKED_COLUMN, VIS_TYPE_STACKED_BAR];
const defaultVisType = exports.defaultVisType = VIS_TYPE_PIVOT_TABLE;
const isStacked = type => stackedTypes.includes(type);
exports.isStacked = isStacked;
const isYearOverYear = type => yearOverYearTypes.includes(type);
exports.isYearOverYear = isYearOverYear;
const isDualAxisType = type => dualAxisTypes.includes(type);
exports.isDualAxisType = isDualAxisType;
const isMultiType = type => multiTypeTypes.includes(type);
exports.isMultiType = isMultiType;
const isSingleValue = type => type === VIS_TYPE_SINGLE_VALUE;
exports.isSingleValue = isSingleValue;
const isOutlierTable = type => type === VIS_TYPE_OUTLIER_TABLE;
exports.isOutlierTable = isOutlierTable;
const isTwoCategoryChartType = type => twoCategoryChartTypes.includes(type);
exports.isTwoCategoryChartType = isTwoCategoryChartType;
const isVerticalType = type => verticalTypes.includes(type);
exports.isVerticalType = isVerticalType;
const isLegendSetType = type => legendSetTypes.includes(type);
exports.isLegendSetType = isLegendSetType;
const isColumnBasedType = type => columnBasedTypes.includes(type);
exports.isColumnBasedType = isColumnBasedType;