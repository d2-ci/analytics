"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  DataDimension: true,
  PeriodDimension: true,
  FixedPeriodSelect: true,
  OrgUnitDimension: true,
  DynamicDimension: true,
  ALL_DYNAMIC_DIMENSION_ITEMS: true,
  DimensionsPanel: true,
  DimensionItem: true,
  DimensionFilter: true,
  DimensionMenu: true,
  PivotTable: true,
  FileMenu: true,
  preparePayloadForSaveAs: true,
  VisTypeIcon: true,
  LegendKey: true,
  AboutAOUnit: true,
  InterpretationsUnit: true,
  InterpretationModal: true,
  InterpretationThread: true,
  TranslationDialog: true,
  OfflineTooltip: true,
  CachedDataQueryProvider: true,
  useCachedDataQuery: true,
  Analytics: true,
  apiFetchDimensions: true,
  apiFetchRecommendedIds: true,
  apiFetchItemsByDimension: true,
  apiFetchOrganisationUnitLevels: true,
  apiFetchOrganisationUnitRoots: true,
  apiFetchOrganisationUnit: true,
  getAxisName: true,
  getAxisNameByLayoutType: true,
  hasCustomAxes: true,
  DIMENSION_ID_DATA: true,
  DIMENSION_ID_PERIOD: true,
  DIMENSION_ID_ORGUNIT: true,
  DIMENSION_ID_ASSIGNED_CATEGORIES: true,
  DIMENSION_PROP_NO_ITEMS: true,
  filterOutPredefinedDimensions: true,
  getPredefinedDimensionProp: true,
  getDimensionById: true,
  getPredefinedDimensions: true,
  getFixedDimensions: true,
  getDynamicDimensions: true,
  ouIdHelper: true,
  USER_ORG_UNIT: true,
  USER_ORG_UNIT_CHILDREN: true,
  USER_ORG_UNIT_GRANDCHILDREN: true,
  convertOuLevelsToUids: true,
  getAdaptedUiLayoutByType: true,
  hasRelativeItems: true,
  LAYOUT: true,
  layoutFilterDimensions: true,
  layoutGetAllAxes: true,
  layoutGetAllDimensions: true,
  layoutGetAllItemIds: true,
  layoutGetAllItems: true,
  layoutGetAxisIdDimensionIdsObject: true,
  layoutGetDimension: true,
  layoutGetDimensionItems: true,
  layoutReplaceDimension: true,
  layoutGetDimensionIdItemIdsObject: true,
  layoutHasDataDimension: true,
  layoutHasDimension: true,
  layoutHasDynamicDimension: true,
  layoutHasPeriodDimension: true,
  VALUE_TYPE_NUMBER: true,
  VALUE_TYPE_UNIT_INTERVAL: true,
  VALUE_TYPE_PERCENTAGE: true,
  VALUE_TYPE_INTEGER: true,
  VALUE_TYPE_INTEGER_POSITIVE: true,
  VALUE_TYPE_INTEGER_NEGATIVE: true,
  VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE: true,
  VALUE_TYPE_TEXT: true,
  VALUE_TYPE_LONG_TEXT: true,
  VALUE_TYPE_LETTER: true,
  VALUE_TYPE_PHONE_NUMBER: true,
  VALUE_TYPE_EMAIL: true,
  VALUE_TYPE_USERNAME: true,
  VALUE_TYPE_URL: true,
  VALUE_TYPE_BOOLEAN: true,
  VALUE_TYPE_TRUE_ONLY: true,
  VALUE_TYPE_DATE: true,
  VALUE_TYPE_TIME: true,
  VALUE_TYPE_DATETIME: true,
  VALUE_TYPE_ORGANISATION_UNIT: true,
  VALUE_TYPE_AGE: true,
  AXIS: true,
  AXIS_ID_COLUMNS: true,
  AXIS_ID_ROWS: true,
  AXIS_ID_FILTERS: true,
  DEFAULT_AXIS_IDS: true,
  axisGetAllItems: true,
  axisGetDimension: true,
  axisGetDimensionIds: true,
  axisHasDataDimension: true,
  axisHasDimension: true,
  axisHasPeriodDimension: true,
  axisHasOuDimension: true,
  axisIsEmpty: true,
  DIMENSION: true,
  DIMENSION_PROP_ID: true,
  DIMENSION_PROP_ITEMS: true,
  DIMENSION_PROPS: true,
  dimensionCreate: true,
  dimensionGetId: true,
  dimensionGetItemIds: true,
  dimensionGetItems: true,
  dimensionIs: true,
  dimensionIsEmpty: true,
  dimensionIsValid: true,
  ITEM: true,
  ITEM_PROP_ID: true,
  ITEM_PROPS: true,
  itemGetId: true,
  itemIsValid: true,
  getLayoutTypeByVisType: true,
  VIS_TYPE_GROUP_ALL: true,
  VIS_TYPE_GROUP_CHARTS: true,
  VIS_TYPE_COLUMN: true,
  VIS_TYPE_STACKED_COLUMN: true,
  VIS_TYPE_BAR: true,
  VIS_TYPE_STACKED_BAR: true,
  VIS_TYPE_LINE: true,
  VIS_TYPE_AREA: true,
  VIS_TYPE_STACKED_AREA: true,
  VIS_TYPE_PIE: true,
  VIS_TYPE_RADAR: true,
  VIS_TYPE_GAUGE: true,
  VIS_TYPE_BUBBLE: true,
  VIS_TYPE_YEAR_OVER_YEAR_LINE: true,
  VIS_TYPE_YEAR_OVER_YEAR_COLUMN: true,
  VIS_TYPE_SINGLE_VALUE: true,
  VIS_TYPE_PIVOT_TABLE: true,
  VIS_TYPE_SCATTER: true,
  VIS_TYPE_LINE_LIST: true,
  VIS_TYPE_OUTLIER_TABLE: true,
  visTypeDisplayNames: true,
  visTypeIcons: true,
  getDisplayNameByVisType: true,
  defaultVisType: true,
  isStacked: true,
  isMultiType: true,
  isYearOverYear: true,
  isDualAxisType: true,
  isSingleValue: true,
  isOutlierTable: true,
  isTwoCategoryChartType: true,
  isLegendSetType: true,
  isColumnBasedType: true,
  isVerticalType: true,
  LAYOUT_TYPE_DEFAULT: true,
  LAYOUT_TYPE_PIE: true,
  LAYOUT_TYPE_SINGLE_VALUE: true,
  LAYOUT_TYPE_YEAR_OVER_YEAR: true,
  LAYOUT_TYPE_PIVOT_TABLE: true,
  LAYOUT_TYPE_SCATTER: true,
  LAYOUT_TYPE_LINE_LIST: true,
  LAYOUT_TYPE_OUTLIER_TABLE: true,
  getAvailableAxes: true,
  getDisallowedDimensions: true,
  getDimensionMaxNumberOfItems: true,
  getAxisMaxNumberOfItems: true,
  getAxisMaxNumberOfDimensions: true,
  getAxisMinNumberOfDimensions: true,
  hasAxisTooManyItems: true,
  hasDimensionTooManyItems: true,
  getAxisPerLockedDimension: true,
  getAllLockedDimensionIds: true,
  canDimensionBeAddedToAxis: true,
  isDimensionLocked: true,
  isAxisFull: true,
  getTransferableDimension: true,
  createVisualization: true,
  FONT_STYLE_VISUALIZATION_TITLE: true,
  FONT_STYLE_VISUALIZATION_SUBTITLE: true,
  FONT_STYLE_HORIZONTAL_AXIS_TITLE: true,
  FONT_STYLE_VERTICAL_AXIS_TITLE: true,
  FONT_STYLE_LEGEND: true,
  FONT_STYLE_AXIS_LABELS: true,
  FONT_STYLE_REGRESSION_LINE_LABEL: true,
  FONT_STYLE_OPTION_FONT: true,
  FONT_STYLE_OPTION_FONT_SIZE: true,
  FONT_STYLE_OPTION_BOLD: true,
  FONT_STYLE_OPTION_ITALIC: true,
  FONT_STYLE_OPTION_UNDERLINE: true,
  FONT_STYLE_OPTION_TEXT_COLOR: true,
  FONT_STYLE_OPTION_TEXT_ALIGN: true,
  TEXT_ALIGN_LEFT: true,
  TEXT_ALIGN_CENTER: true,
  TEXT_ALIGN_RIGHT: true,
  defaultFontStyle: true,
  getFontSizeOptions: true,
  getTextAlignOptions: true,
  deleteFontStyleOption: true,
  LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM: true,
  LEGEND_DISPLAY_STRATEGY_FIXED: true,
  LEGEND_DISPLAY_STYLE_FILL: true,
  LEGEND_DISPLAY_STYLE_TEXT: true,
  getColorByValueFromLegendSet: true,
  formatValue: true,
  COLOR_SET_DEFAULT: true,
  COLOR_SET_BASIC: true,
  COLOR_SET_EXTENDED: true,
  COLOR_SET_BRIGHT: true,
  COLOR_SET_DARK: true,
  COLOR_SET_GRAY: true,
  COLOR_SET_COLOR_BLIND: true,
  COLOR_SET_PATTERNS: true,
  colorSets: true,
  DAILY: true,
  WEEKLY: true,
  WEEKLYWED: true,
  WEEKLYTHU: true,
  WEEKLYSAT: true,
  WEEKLYSUN: true,
  WEEKS_THIS_YEAR: true,
  BIWEEKLY: true,
  MONTHLY: true,
  BIMONTHLY: true,
  QUARTERLY: true,
  SIXMONTHLY: true,
  SIXMONTHLYAPR: true,
  YEARLY: true,
  FINANCIAL: true,
  FYNOV: true,
  FYOCT: true,
  FYJUL: true,
  FYAPR: true,
  getRelativePeriodsOptionsById: true,
  getFixedPeriodsOptionsById: true,
  VisualizationOptions: true,
  DIMENSION_TYPE_INDICATOR: true,
  DIMENSION_TYPE_DATA_ELEMENT: true,
  DIMENSION_TYPE_DATA_SET: true,
  DIMENSION_TYPE_EVENT_DATA_ITEM: true,
  DIMENSION_TYPE_PROGRAM_INDICATOR: true,
  DIMENSION_TYPE_PROGRAM_DATA_ELEMENT: true,
  DIMENSION_TYPE_PROGRAM_ATTRIBUTE: true,
  DIMENSION_TYPE_DATA_ELEMENT_OPERAND: true,
  DIMENSION_TYPE_CATEGORY: true,
  DIMENSION_TYPE_CATEGORY_OPTION_GROUP_SET: true,
  DIMENSION_TYPE_ALL: true,
  DIMENSION_TYPE_DATA: true,
  DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET: true,
  DIMENSION_TYPE_ORGANISATION_UNIT: true,
  DIMENSION_TYPE_PERIOD: true,
  DIMENSION_TYPE_ORGANISATION_UNIT_GROUP_SET: true,
  DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM: true,
  dataTypeMap: true
};
Object.defineProperty(exports, "ALL_DYNAMIC_DIMENSION_ITEMS", {
  enumerable: true,
  get: function () {
    return _DynamicDimension.ALL_DYNAMIC_DIMENSION_ITEMS;
  }
});
Object.defineProperty(exports, "AXIS", {
  enumerable: true,
  get: function () {
    return _axis2.AXIS;
  }
});
Object.defineProperty(exports, "AXIS_ID_COLUMNS", {
  enumerable: true,
  get: function () {
    return _axis2.AXIS_ID_COLUMNS;
  }
});
Object.defineProperty(exports, "AXIS_ID_FILTERS", {
  enumerable: true,
  get: function () {
    return _axis2.AXIS_ID_FILTERS;
  }
});
Object.defineProperty(exports, "AXIS_ID_ROWS", {
  enumerable: true,
  get: function () {
    return _axis2.AXIS_ID_ROWS;
  }
});
Object.defineProperty(exports, "AboutAOUnit", {
  enumerable: true,
  get: function () {
    return _AboutAOUnit.default;
  }
});
Object.defineProperty(exports, "Analytics", {
  enumerable: true,
  get: function () {
    return _Analytics.default;
  }
});
Object.defineProperty(exports, "BIMONTHLY", {
  enumerable: true,
  get: function () {
    return _index12.BIMONTHLY;
  }
});
Object.defineProperty(exports, "BIWEEKLY", {
  enumerable: true,
  get: function () {
    return _index12.BIWEEKLY;
  }
});
Object.defineProperty(exports, "COLOR_SET_BASIC", {
  enumerable: true,
  get: function () {
    return _colorSets.COLOR_SET_BASIC;
  }
});
Object.defineProperty(exports, "COLOR_SET_BRIGHT", {
  enumerable: true,
  get: function () {
    return _colorSets.COLOR_SET_BRIGHT;
  }
});
Object.defineProperty(exports, "COLOR_SET_COLOR_BLIND", {
  enumerable: true,
  get: function () {
    return _colorSets.COLOR_SET_COLOR_BLIND;
  }
});
Object.defineProperty(exports, "COLOR_SET_DARK", {
  enumerable: true,
  get: function () {
    return _colorSets.COLOR_SET_DARK;
  }
});
Object.defineProperty(exports, "COLOR_SET_DEFAULT", {
  enumerable: true,
  get: function () {
    return _colorSets.COLOR_SET_DEFAULT;
  }
});
Object.defineProperty(exports, "COLOR_SET_EXTENDED", {
  enumerable: true,
  get: function () {
    return _colorSets.COLOR_SET_EXTENDED;
  }
});
Object.defineProperty(exports, "COLOR_SET_GRAY", {
  enumerable: true,
  get: function () {
    return _colorSets.COLOR_SET_GRAY;
  }
});
Object.defineProperty(exports, "COLOR_SET_PATTERNS", {
  enumerable: true,
  get: function () {
    return _colorSets.COLOR_SET_PATTERNS;
  }
});
Object.defineProperty(exports, "CachedDataQueryProvider", {
  enumerable: true,
  get: function () {
    return _CachedDataQueryProvider.CachedDataQueryProvider;
  }
});
Object.defineProperty(exports, "DAILY", {
  enumerable: true,
  get: function () {
    return _index12.DAILY;
  }
});
Object.defineProperty(exports, "DEFAULT_AXIS_IDS", {
  enumerable: true,
  get: function () {
    return _axis2.DEFAULT_AXIS_IDS;
  }
});
Object.defineProperty(exports, "DIMENSION", {
  enumerable: true,
  get: function () {
    return _dimension.DIMENSION;
  }
});
Object.defineProperty(exports, "DIMENSION_ID_ASSIGNED_CATEGORIES", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.DIMENSION_ID_ASSIGNED_CATEGORIES;
  }
});
Object.defineProperty(exports, "DIMENSION_ID_DATA", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.DIMENSION_ID_DATA;
  }
});
Object.defineProperty(exports, "DIMENSION_ID_ORGUNIT", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.DIMENSION_ID_ORGUNIT;
  }
});
Object.defineProperty(exports, "DIMENSION_ID_PERIOD", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.DIMENSION_ID_PERIOD;
  }
});
Object.defineProperty(exports, "DIMENSION_PROPS", {
  enumerable: true,
  get: function () {
    return _dimension.DIMENSION_PROPS;
  }
});
Object.defineProperty(exports, "DIMENSION_PROP_ID", {
  enumerable: true,
  get: function () {
    return _dimension.DIMENSION_PROP_ID;
  }
});
Object.defineProperty(exports, "DIMENSION_PROP_ITEMS", {
  enumerable: true,
  get: function () {
    return _dimension.DIMENSION_PROP_ITEMS;
  }
});
Object.defineProperty(exports, "DIMENSION_PROP_NO_ITEMS", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.DIMENSION_PROP_NO_ITEMS;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_ALL", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_ALL;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_CATEGORY", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_CATEGORY;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_CATEGORY_OPTION_GROUP_SET", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_CATEGORY_OPTION_GROUP_SET;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_DATA", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_DATA;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_DATA_ELEMENT", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_DATA_ELEMENT;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_DATA_ELEMENT_OPERAND", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_DATA_ELEMENT_OPERAND;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_DATA_SET", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_DATA_SET;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_EVENT_DATA_ITEM", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_INDICATOR", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_INDICATOR;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_ORGANISATION_UNIT", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_ORGANISATION_UNIT;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_ORGANISATION_UNIT_GROUP_SET", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_ORGANISATION_UNIT_GROUP_SET;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_PERIOD", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_PERIOD;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_PROGRAM_ATTRIBUTE", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_PROGRAM_DATA_ELEMENT", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT;
  }
});
Object.defineProperty(exports, "DIMENSION_TYPE_PROGRAM_INDICATOR", {
  enumerable: true,
  get: function () {
    return _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR;
  }
});
Object.defineProperty(exports, "DataDimension", {
  enumerable: true,
  get: function () {
    return _DataDimension.default;
  }
});
Object.defineProperty(exports, "DimensionFilter", {
  enumerable: true,
  get: function () {
    return _Filter.default;
  }
});
Object.defineProperty(exports, "DimensionItem", {
  enumerable: true,
  get: function () {
    return _DimensionItem.default;
  }
});
Object.defineProperty(exports, "DimensionMenu", {
  enumerable: true,
  get: function () {
    return _DimensionMenu.default;
  }
});
Object.defineProperty(exports, "DimensionsPanel", {
  enumerable: true,
  get: function () {
    return _DimensionsPanel.default;
  }
});
Object.defineProperty(exports, "DynamicDimension", {
  enumerable: true,
  get: function () {
    return _DynamicDimension.default;
  }
});
Object.defineProperty(exports, "FINANCIAL", {
  enumerable: true,
  get: function () {
    return _index12.FINANCIAL;
  }
});
Object.defineProperty(exports, "FONT_STYLE_AXIS_LABELS", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_AXIS_LABELS;
  }
});
Object.defineProperty(exports, "FONT_STYLE_HORIZONTAL_AXIS_TITLE", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_HORIZONTAL_AXIS_TITLE;
  }
});
Object.defineProperty(exports, "FONT_STYLE_LEGEND", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_LEGEND;
  }
});
Object.defineProperty(exports, "FONT_STYLE_OPTION_BOLD", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_OPTION_BOLD;
  }
});
Object.defineProperty(exports, "FONT_STYLE_OPTION_FONT", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_OPTION_FONT;
  }
});
Object.defineProperty(exports, "FONT_STYLE_OPTION_FONT_SIZE", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_OPTION_FONT_SIZE;
  }
});
Object.defineProperty(exports, "FONT_STYLE_OPTION_ITALIC", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_OPTION_ITALIC;
  }
});
Object.defineProperty(exports, "FONT_STYLE_OPTION_TEXT_ALIGN", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN;
  }
});
Object.defineProperty(exports, "FONT_STYLE_OPTION_TEXT_COLOR", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_OPTION_TEXT_COLOR;
  }
});
Object.defineProperty(exports, "FONT_STYLE_OPTION_UNDERLINE", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_OPTION_UNDERLINE;
  }
});
Object.defineProperty(exports, "FONT_STYLE_REGRESSION_LINE_LABEL", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_REGRESSION_LINE_LABEL;
  }
});
Object.defineProperty(exports, "FONT_STYLE_VERTICAL_AXIS_TITLE", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_VERTICAL_AXIS_TITLE;
  }
});
Object.defineProperty(exports, "FONT_STYLE_VISUALIZATION_SUBTITLE", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE;
  }
});
Object.defineProperty(exports, "FONT_STYLE_VISUALIZATION_TITLE", {
  enumerable: true,
  get: function () {
    return _fontStyle.FONT_STYLE_VISUALIZATION_TITLE;
  }
});
Object.defineProperty(exports, "FYAPR", {
  enumerable: true,
  get: function () {
    return _index12.FYAPR;
  }
});
Object.defineProperty(exports, "FYJUL", {
  enumerable: true,
  get: function () {
    return _index12.FYJUL;
  }
});
Object.defineProperty(exports, "FYNOV", {
  enumerable: true,
  get: function () {
    return _index12.FYNOV;
  }
});
Object.defineProperty(exports, "FYOCT", {
  enumerable: true,
  get: function () {
    return _index12.FYOCT;
  }
});
Object.defineProperty(exports, "FileMenu", {
  enumerable: true,
  get: function () {
    return _FileMenu.default;
  }
});
Object.defineProperty(exports, "FixedPeriodSelect", {
  enumerable: true,
  get: function () {
    return _FixedPeriodSelect.default;
  }
});
Object.defineProperty(exports, "ITEM", {
  enumerable: true,
  get: function () {
    return _item.ITEM;
  }
});
Object.defineProperty(exports, "ITEM_PROPS", {
  enumerable: true,
  get: function () {
    return _item.ITEM_PROPS;
  }
});
Object.defineProperty(exports, "ITEM_PROP_ID", {
  enumerable: true,
  get: function () {
    return _item.ITEM_PROP_ID;
  }
});
Object.defineProperty(exports, "InterpretationModal", {
  enumerable: true,
  get: function () {
    return _index3.InterpretationModal;
  }
});
Object.defineProperty(exports, "InterpretationThread", {
  enumerable: true,
  get: function () {
    return _index3.InterpretationThread;
  }
});
Object.defineProperty(exports, "InterpretationsUnit", {
  enumerable: true,
  get: function () {
    return _index2.InterpretationsUnit;
  }
});
Object.defineProperty(exports, "LAYOUT", {
  enumerable: true,
  get: function () {
    return _layout.LAYOUT;
  }
});
Object.defineProperty(exports, "LAYOUT_TYPE_DEFAULT", {
  enumerable: true,
  get: function () {
    return _layoutTypes.LAYOUT_TYPE_DEFAULT;
  }
});
Object.defineProperty(exports, "LAYOUT_TYPE_LINE_LIST", {
  enumerable: true,
  get: function () {
    return _layoutTypes.LAYOUT_TYPE_LINE_LIST;
  }
});
Object.defineProperty(exports, "LAYOUT_TYPE_OUTLIER_TABLE", {
  enumerable: true,
  get: function () {
    return _layoutTypes.LAYOUT_TYPE_OUTLIER_TABLE;
  }
});
Object.defineProperty(exports, "LAYOUT_TYPE_PIE", {
  enumerable: true,
  get: function () {
    return _layoutTypes.LAYOUT_TYPE_PIE;
  }
});
Object.defineProperty(exports, "LAYOUT_TYPE_PIVOT_TABLE", {
  enumerable: true,
  get: function () {
    return _layoutTypes.LAYOUT_TYPE_PIVOT_TABLE;
  }
});
Object.defineProperty(exports, "LAYOUT_TYPE_SCATTER", {
  enumerable: true,
  get: function () {
    return _layoutTypes.LAYOUT_TYPE_SCATTER;
  }
});
Object.defineProperty(exports, "LAYOUT_TYPE_SINGLE_VALUE", {
  enumerable: true,
  get: function () {
    return _layoutTypes.LAYOUT_TYPE_SINGLE_VALUE;
  }
});
Object.defineProperty(exports, "LAYOUT_TYPE_YEAR_OVER_YEAR", {
  enumerable: true,
  get: function () {
    return _layoutTypes.LAYOUT_TYPE_YEAR_OVER_YEAR;
  }
});
Object.defineProperty(exports, "LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM", {
  enumerable: true,
  get: function () {
    return _legends.LEGEND_DISPLAY_STRATEGY_BY_DATA_ITEM;
  }
});
Object.defineProperty(exports, "LEGEND_DISPLAY_STRATEGY_FIXED", {
  enumerable: true,
  get: function () {
    return _legends.LEGEND_DISPLAY_STRATEGY_FIXED;
  }
});
Object.defineProperty(exports, "LEGEND_DISPLAY_STYLE_FILL", {
  enumerable: true,
  get: function () {
    return _legends.LEGEND_DISPLAY_STYLE_FILL;
  }
});
Object.defineProperty(exports, "LEGEND_DISPLAY_STYLE_TEXT", {
  enumerable: true,
  get: function () {
    return _legends.LEGEND_DISPLAY_STYLE_TEXT;
  }
});
Object.defineProperty(exports, "LegendKey", {
  enumerable: true,
  get: function () {
    return _LegendKey.default;
  }
});
Object.defineProperty(exports, "MONTHLY", {
  enumerable: true,
  get: function () {
    return _index12.MONTHLY;
  }
});
Object.defineProperty(exports, "OfflineTooltip", {
  enumerable: true,
  get: function () {
    return _OfflineTooltip.OfflineTooltip;
  }
});
Object.defineProperty(exports, "OrgUnitDimension", {
  enumerable: true,
  get: function () {
    return _OrgUnitDimension.default;
  }
});
Object.defineProperty(exports, "PeriodDimension", {
  enumerable: true,
  get: function () {
    return _PeriodDimension.default;
  }
});
Object.defineProperty(exports, "PivotTable", {
  enumerable: true,
  get: function () {
    return _PivotTable.default;
  }
});
Object.defineProperty(exports, "QUARTERLY", {
  enumerable: true,
  get: function () {
    return _index12.QUARTERLY;
  }
});
Object.defineProperty(exports, "SIXMONTHLY", {
  enumerable: true,
  get: function () {
    return _index12.SIXMONTHLY;
  }
});
Object.defineProperty(exports, "SIXMONTHLYAPR", {
  enumerable: true,
  get: function () {
    return _index12.SIXMONTHLYAPR;
  }
});
Object.defineProperty(exports, "TEXT_ALIGN_CENTER", {
  enumerable: true,
  get: function () {
    return _fontStyle.TEXT_ALIGN_CENTER;
  }
});
Object.defineProperty(exports, "TEXT_ALIGN_LEFT", {
  enumerable: true,
  get: function () {
    return _fontStyle.TEXT_ALIGN_LEFT;
  }
});
Object.defineProperty(exports, "TEXT_ALIGN_RIGHT", {
  enumerable: true,
  get: function () {
    return _fontStyle.TEXT_ALIGN_RIGHT;
  }
});
Object.defineProperty(exports, "TranslationDialog", {
  enumerable: true,
  get: function () {
    return _index5.TranslationDialog;
  }
});
Object.defineProperty(exports, "USER_ORG_UNIT", {
  enumerable: true,
  get: function () {
    return _index7.USER_ORG_UNIT;
  }
});
Object.defineProperty(exports, "USER_ORG_UNIT_CHILDREN", {
  enumerable: true,
  get: function () {
    return _index7.USER_ORG_UNIT_CHILDREN;
  }
});
Object.defineProperty(exports, "USER_ORG_UNIT_GRANDCHILDREN", {
  enumerable: true,
  get: function () {
    return _index7.USER_ORG_UNIT_GRANDCHILDREN;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_AGE", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_AGE;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_BOOLEAN", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_BOOLEAN;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_DATE", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_DATE;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_DATETIME", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_DATETIME;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_EMAIL", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_EMAIL;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_INTEGER", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_INTEGER;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_INTEGER_NEGATIVE", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_INTEGER_NEGATIVE;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_INTEGER_POSITIVE", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_INTEGER_POSITIVE;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_INTEGER_ZERO_OR_POSITIVE;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_LETTER", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_LETTER;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_LONG_TEXT", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_LONG_TEXT;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_NUMBER", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_NUMBER;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_ORGANISATION_UNIT", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_ORGANISATION_UNIT;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_PERCENTAGE", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_PERCENTAGE;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_PHONE_NUMBER", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_PHONE_NUMBER;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_TEXT", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_TEXT;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_TIME", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_TIME;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_TRUE_ONLY", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_TRUE_ONLY;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_UNIT_INTERVAL", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_UNIT_INTERVAL;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_URL", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_URL;
  }
});
Object.defineProperty(exports, "VALUE_TYPE_USERNAME", {
  enumerable: true,
  get: function () {
    return _valueTypes.VALUE_TYPE_USERNAME;
  }
});
Object.defineProperty(exports, "VIS_TYPE_AREA", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_AREA;
  }
});
Object.defineProperty(exports, "VIS_TYPE_BAR", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_BAR;
  }
});
Object.defineProperty(exports, "VIS_TYPE_BUBBLE", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_BUBBLE;
  }
});
Object.defineProperty(exports, "VIS_TYPE_COLUMN", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_COLUMN;
  }
});
Object.defineProperty(exports, "VIS_TYPE_GAUGE", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_GAUGE;
  }
});
Object.defineProperty(exports, "VIS_TYPE_GROUP_ALL", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_GROUP_ALL;
  }
});
Object.defineProperty(exports, "VIS_TYPE_GROUP_CHARTS", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_GROUP_CHARTS;
  }
});
Object.defineProperty(exports, "VIS_TYPE_LINE", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_LINE;
  }
});
Object.defineProperty(exports, "VIS_TYPE_LINE_LIST", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_LINE_LIST;
  }
});
Object.defineProperty(exports, "VIS_TYPE_OUTLIER_TABLE", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_OUTLIER_TABLE;
  }
});
Object.defineProperty(exports, "VIS_TYPE_PIE", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_PIE;
  }
});
Object.defineProperty(exports, "VIS_TYPE_PIVOT_TABLE", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_PIVOT_TABLE;
  }
});
Object.defineProperty(exports, "VIS_TYPE_RADAR", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_RADAR;
  }
});
Object.defineProperty(exports, "VIS_TYPE_SCATTER", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_SCATTER;
  }
});
Object.defineProperty(exports, "VIS_TYPE_SINGLE_VALUE", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_SINGLE_VALUE;
  }
});
Object.defineProperty(exports, "VIS_TYPE_STACKED_AREA", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_STACKED_AREA;
  }
});
Object.defineProperty(exports, "VIS_TYPE_STACKED_BAR", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_STACKED_BAR;
  }
});
Object.defineProperty(exports, "VIS_TYPE_STACKED_COLUMN", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_STACKED_COLUMN;
  }
});
Object.defineProperty(exports, "VIS_TYPE_YEAR_OVER_YEAR_COLUMN", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN;
  }
});
Object.defineProperty(exports, "VIS_TYPE_YEAR_OVER_YEAR_LINE", {
  enumerable: true,
  get: function () {
    return _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE;
  }
});
Object.defineProperty(exports, "VisTypeIcon", {
  enumerable: true,
  get: function () {
    return _VisTypeIcon.default;
  }
});
Object.defineProperty(exports, "VisualizationOptions", {
  enumerable: true,
  get: function () {
    return _VisualizationOptions.default;
  }
});
Object.defineProperty(exports, "WEEKLY", {
  enumerable: true,
  get: function () {
    return _index12.WEEKLY;
  }
});
Object.defineProperty(exports, "WEEKLYSAT", {
  enumerable: true,
  get: function () {
    return _index12.WEEKLYSAT;
  }
});
Object.defineProperty(exports, "WEEKLYSUN", {
  enumerable: true,
  get: function () {
    return _index12.WEEKLYSUN;
  }
});
Object.defineProperty(exports, "WEEKLYTHU", {
  enumerable: true,
  get: function () {
    return _index12.WEEKLYTHU;
  }
});
Object.defineProperty(exports, "WEEKLYWED", {
  enumerable: true,
  get: function () {
    return _index12.WEEKLYWED;
  }
});
Object.defineProperty(exports, "WEEKS_THIS_YEAR", {
  enumerable: true,
  get: function () {
    return _index12.WEEKS_THIS_YEAR;
  }
});
Object.defineProperty(exports, "YEARLY", {
  enumerable: true,
  get: function () {
    return _index12.YEARLY;
  }
});
Object.defineProperty(exports, "apiFetchDimensions", {
  enumerable: true,
  get: function () {
    return _dimensions.apiFetchDimensions;
  }
});
Object.defineProperty(exports, "apiFetchItemsByDimension", {
  enumerable: true,
  get: function () {
    return _dimensions.apiFetchItemsByDimension;
  }
});
Object.defineProperty(exports, "apiFetchOrganisationUnit", {
  enumerable: true,
  get: function () {
    return _organisationUnits.apiFetchOrganisationUnit;
  }
});
Object.defineProperty(exports, "apiFetchOrganisationUnitLevels", {
  enumerable: true,
  get: function () {
    return _organisationUnits.apiFetchOrganisationUnitLevels;
  }
});
Object.defineProperty(exports, "apiFetchOrganisationUnitRoots", {
  enumerable: true,
  get: function () {
    return _organisationUnits.apiFetchOrganisationUnitRoots;
  }
});
Object.defineProperty(exports, "apiFetchRecommendedIds", {
  enumerable: true,
  get: function () {
    return _dimensions.apiFetchRecommendedIds;
  }
});
Object.defineProperty(exports, "axisGetAllItems", {
  enumerable: true,
  get: function () {
    return _axisGetAllItems.axisGetAllItems;
  }
});
Object.defineProperty(exports, "axisGetDimension", {
  enumerable: true,
  get: function () {
    return _axisGetDimension.axisGetDimension;
  }
});
Object.defineProperty(exports, "axisGetDimensionIds", {
  enumerable: true,
  get: function () {
    return _axisGetDimensionIds.axisGetDimensionIds;
  }
});
Object.defineProperty(exports, "axisHasDataDimension", {
  enumerable: true,
  get: function () {
    return _axisHasDataDimension.axisHasDataDimension;
  }
});
Object.defineProperty(exports, "axisHasDimension", {
  enumerable: true,
  get: function () {
    return _axisHasDimension.axisHasDimension;
  }
});
Object.defineProperty(exports, "axisHasOuDimension", {
  enumerable: true,
  get: function () {
    return _axisHasOuDimension.axisHasOuDimension;
  }
});
Object.defineProperty(exports, "axisHasPeriodDimension", {
  enumerable: true,
  get: function () {
    return _axisHasPeriodDimension.axisHasPeriodDimension;
  }
});
Object.defineProperty(exports, "axisIsEmpty", {
  enumerable: true,
  get: function () {
    return _axisIsEmpty.axisIsEmpty;
  }
});
Object.defineProperty(exports, "canDimensionBeAddedToAxis", {
  enumerable: true,
  get: function () {
    return _index10.canDimensionBeAddedToAxis;
  }
});
Object.defineProperty(exports, "colorSets", {
  enumerable: true,
  get: function () {
    return _colorSets.colorSets;
  }
});
Object.defineProperty(exports, "convertOuLevelsToUids", {
  enumerable: true,
  get: function () {
    return _index8.convertOuLevelsToUids;
  }
});
Object.defineProperty(exports, "createVisualization", {
  enumerable: true,
  get: function () {
    return _index11.createVisualization;
  }
});
Object.defineProperty(exports, "dataTypeMap", {
  enumerable: true,
  get: function () {
    return _dataTypes.dataTypeMap;
  }
});
Object.defineProperty(exports, "defaultFontStyle", {
  enumerable: true,
  get: function () {
    return _fontStyle.defaultFontStyle;
  }
});
Object.defineProperty(exports, "defaultVisType", {
  enumerable: true,
  get: function () {
    return _visTypes.defaultVisType;
  }
});
Object.defineProperty(exports, "deleteFontStyleOption", {
  enumerable: true,
  get: function () {
    return _fontStyle.deleteFontStyleOption;
  }
});
Object.defineProperty(exports, "dimensionCreate", {
  enumerable: true,
  get: function () {
    return _dimensionCreate.dimensionCreate;
  }
});
Object.defineProperty(exports, "dimensionGetId", {
  enumerable: true,
  get: function () {
    return _dimensionGetId.dimensionGetId;
  }
});
Object.defineProperty(exports, "dimensionGetItemIds", {
  enumerable: true,
  get: function () {
    return _dimensionGetItemIds.dimensionGetItemIds;
  }
});
Object.defineProperty(exports, "dimensionGetItems", {
  enumerable: true,
  get: function () {
    return _dimensionGetItems.dimensionGetItems;
  }
});
Object.defineProperty(exports, "dimensionIs", {
  enumerable: true,
  get: function () {
    return _dimensionIs.dimensionIs;
  }
});
Object.defineProperty(exports, "dimensionIsEmpty", {
  enumerable: true,
  get: function () {
    return _dimensionIsEmpty.dimensionIsEmpty;
  }
});
Object.defineProperty(exports, "dimensionIsValid", {
  enumerable: true,
  get: function () {
    return _dimensionIsValid.dimensionIsValid;
  }
});
Object.defineProperty(exports, "filterOutPredefinedDimensions", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.filterOutPredefinedDimensions;
  }
});
Object.defineProperty(exports, "formatValue", {
  enumerable: true,
  get: function () {
    return _renderValue.renderValue;
  }
});
Object.defineProperty(exports, "getAdaptedUiLayoutByType", {
  enumerable: true,
  get: function () {
    return _getAdaptedUiLayoutByType.getAdaptedUiLayoutByType;
  }
});
Object.defineProperty(exports, "getAllLockedDimensionIds", {
  enumerable: true,
  get: function () {
    return _index10.getAllLockedDimensionIds;
  }
});
Object.defineProperty(exports, "getAvailableAxes", {
  enumerable: true,
  get: function () {
    return _index10.getAvailableAxes;
  }
});
Object.defineProperty(exports, "getAxisMaxNumberOfDimensions", {
  enumerable: true,
  get: function () {
    return _index10.getAxisMaxNumberOfDimensions;
  }
});
Object.defineProperty(exports, "getAxisMaxNumberOfItems", {
  enumerable: true,
  get: function () {
    return _index10.getAxisMaxNumberOfItems;
  }
});
Object.defineProperty(exports, "getAxisMinNumberOfDimensions", {
  enumerable: true,
  get: function () {
    return _index10.getAxisMinNumberOfDimensions;
  }
});
Object.defineProperty(exports, "getAxisName", {
  enumerable: true,
  get: function () {
    return _axis.getAxisName;
  }
});
Object.defineProperty(exports, "getAxisNameByLayoutType", {
  enumerable: true,
  get: function () {
    return _axis.getAxisNameByLayoutType;
  }
});
Object.defineProperty(exports, "getAxisPerLockedDimension", {
  enumerable: true,
  get: function () {
    return _index10.getAxisPerLockedDimension;
  }
});
Object.defineProperty(exports, "getColorByValueFromLegendSet", {
  enumerable: true,
  get: function () {
    return _legends.getColorByValueFromLegendSet;
  }
});
Object.defineProperty(exports, "getDimensionById", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.getDimensionById;
  }
});
Object.defineProperty(exports, "getDimensionMaxNumberOfItems", {
  enumerable: true,
  get: function () {
    return _index10.getDimensionMaxNumberOfItems;
  }
});
Object.defineProperty(exports, "getDisallowedDimensions", {
  enumerable: true,
  get: function () {
    return _index10.getDisallowedDimensions;
  }
});
Object.defineProperty(exports, "getDisplayNameByVisType", {
  enumerable: true,
  get: function () {
    return _visTypes.getDisplayNameByVisType;
  }
});
Object.defineProperty(exports, "getDynamicDimensions", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.getDynamicDimensions;
  }
});
Object.defineProperty(exports, "getFixedDimensions", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.getFixedDimensions;
  }
});
Object.defineProperty(exports, "getFixedPeriodsOptionsById", {
  enumerable: true,
  get: function () {
    return _fixedPeriods.getFixedPeriodsOptionsById;
  }
});
Object.defineProperty(exports, "getFontSizeOptions", {
  enumerable: true,
  get: function () {
    return _fontStyle.getFontSizeOptions;
  }
});
Object.defineProperty(exports, "getLayoutTypeByVisType", {
  enumerable: true,
  get: function () {
    return _visTypeToLayoutType.getLayoutTypeByVisType;
  }
});
Object.defineProperty(exports, "getPredefinedDimensionProp", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.getPredefinedDimensionProp;
  }
});
Object.defineProperty(exports, "getPredefinedDimensions", {
  enumerable: true,
  get: function () {
    return _predefinedDimensions.getPredefinedDimensions;
  }
});
Object.defineProperty(exports, "getRelativePeriodsOptionsById", {
  enumerable: true,
  get: function () {
    return _relativePeriods.getRelativePeriodsOptionsById;
  }
});
Object.defineProperty(exports, "getTextAlignOptions", {
  enumerable: true,
  get: function () {
    return _fontStyle.getTextAlignOptions;
  }
});
Object.defineProperty(exports, "getTransferableDimension", {
  enumerable: true,
  get: function () {
    return _index10.getTransferableDimension;
  }
});
Object.defineProperty(exports, "hasAxisTooManyItems", {
  enumerable: true,
  get: function () {
    return _index10.hasAxisTooManyItems;
  }
});
Object.defineProperty(exports, "hasCustomAxes", {
  enumerable: true,
  get: function () {
    return _axis.hasCustomAxes;
  }
});
Object.defineProperty(exports, "hasDimensionTooManyItems", {
  enumerable: true,
  get: function () {
    return _index10.hasDimensionTooManyItems;
  }
});
Object.defineProperty(exports, "hasRelativeItems", {
  enumerable: true,
  get: function () {
    return _index9.hasRelativeItems;
  }
});
Object.defineProperty(exports, "isAxisFull", {
  enumerable: true,
  get: function () {
    return _index10.isAxisFull;
  }
});
Object.defineProperty(exports, "isColumnBasedType", {
  enumerable: true,
  get: function () {
    return _visTypes.isColumnBasedType;
  }
});
Object.defineProperty(exports, "isDimensionLocked", {
  enumerable: true,
  get: function () {
    return _index10.isDimensionLocked;
  }
});
Object.defineProperty(exports, "isDualAxisType", {
  enumerable: true,
  get: function () {
    return _visTypes.isDualAxisType;
  }
});
Object.defineProperty(exports, "isLegendSetType", {
  enumerable: true,
  get: function () {
    return _visTypes.isLegendSetType;
  }
});
Object.defineProperty(exports, "isMultiType", {
  enumerable: true,
  get: function () {
    return _visTypes.isMultiType;
  }
});
Object.defineProperty(exports, "isOutlierTable", {
  enumerable: true,
  get: function () {
    return _visTypes.isOutlierTable;
  }
});
Object.defineProperty(exports, "isSingleValue", {
  enumerable: true,
  get: function () {
    return _visTypes.isSingleValue;
  }
});
Object.defineProperty(exports, "isStacked", {
  enumerable: true,
  get: function () {
    return _visTypes.isStacked;
  }
});
Object.defineProperty(exports, "isTwoCategoryChartType", {
  enumerable: true,
  get: function () {
    return _visTypes.isTwoCategoryChartType;
  }
});
Object.defineProperty(exports, "isVerticalType", {
  enumerable: true,
  get: function () {
    return _visTypes.isVerticalType;
  }
});
Object.defineProperty(exports, "isYearOverYear", {
  enumerable: true,
  get: function () {
    return _visTypes.isYearOverYear;
  }
});
Object.defineProperty(exports, "itemGetId", {
  enumerable: true,
  get: function () {
    return _itemGetId.itemGetId;
  }
});
Object.defineProperty(exports, "itemIsValid", {
  enumerable: true,
  get: function () {
    return _itemIsValid.itemIsValid;
  }
});
Object.defineProperty(exports, "layoutFilterDimensions", {
  enumerable: true,
  get: function () {
    return _layoutFilterDimensions.layoutFilterDimensions;
  }
});
Object.defineProperty(exports, "layoutGetAllAxes", {
  enumerable: true,
  get: function () {
    return _layoutGetAllAxes.layoutGetAllAxes;
  }
});
Object.defineProperty(exports, "layoutGetAllDimensions", {
  enumerable: true,
  get: function () {
    return _layoutGetAllDimensions.layoutGetAllDimensions;
  }
});
Object.defineProperty(exports, "layoutGetAllItemIds", {
  enumerable: true,
  get: function () {
    return _layoutGetAllItemIds.layoutGetAllItemIds;
  }
});
Object.defineProperty(exports, "layoutGetAllItems", {
  enumerable: true,
  get: function () {
    return _layoutGetAllItems.layoutGetAllItems;
  }
});
Object.defineProperty(exports, "layoutGetAxisIdDimensionIdsObject", {
  enumerable: true,
  get: function () {
    return _layoutGetAxisIdDimensionIdsObject.layoutGetAxisIdDimensionIdsObject;
  }
});
Object.defineProperty(exports, "layoutGetDimension", {
  enumerable: true,
  get: function () {
    return _layoutGetDimension.layoutGetDimension;
  }
});
Object.defineProperty(exports, "layoutGetDimensionIdItemIdsObject", {
  enumerable: true,
  get: function () {
    return _layoutGetDimensionIdItemIdsObject.layoutGetDimensionIdItemIdsObject;
  }
});
Object.defineProperty(exports, "layoutGetDimensionItems", {
  enumerable: true,
  get: function () {
    return _layoutGetDimensionItems.layoutGetDimensionItems;
  }
});
Object.defineProperty(exports, "layoutHasDataDimension", {
  enumerable: true,
  get: function () {
    return _layoutHasDataDimension.layoutHasDataDimension;
  }
});
Object.defineProperty(exports, "layoutHasDimension", {
  enumerable: true,
  get: function () {
    return _layoutHasDimension.layoutHasDimension;
  }
});
Object.defineProperty(exports, "layoutHasDynamicDimension", {
  enumerable: true,
  get: function () {
    return _layoutHasDynamicDimension.layoutHasDynamicDimension;
  }
});
Object.defineProperty(exports, "layoutHasPeriodDimension", {
  enumerable: true,
  get: function () {
    return _layoutHasPeriodDimension.layoutHasPeriodDimension;
  }
});
Object.defineProperty(exports, "layoutReplaceDimension", {
  enumerable: true,
  get: function () {
    return _layoutReplaceDimension.layoutReplaceDimension;
  }
});
Object.defineProperty(exports, "ouIdHelper", {
  enumerable: true,
  get: function () {
    return _index7.ouIdHelper;
  }
});
Object.defineProperty(exports, "preparePayloadForSaveAs", {
  enumerable: true,
  get: function () {
    return _utils.preparePayloadForSaveAs;
  }
});
Object.defineProperty(exports, "useCachedDataQuery", {
  enumerable: true,
  get: function () {
    return _CachedDataQueryProvider.useCachedDataQuery;
  }
});
Object.defineProperty(exports, "visTypeDisplayNames", {
  enumerable: true,
  get: function () {
    return _visTypes.visTypeDisplayNames;
  }
});
Object.defineProperty(exports, "visTypeIcons", {
  enumerable: true,
  get: function () {
    return _visTypes.visTypeIcons;
  }
});
require("./locales/index.js");
var _DataDimension = _interopRequireDefault(require("./components/DataDimension/DataDimension.js"));
var _PeriodDimension = _interopRequireDefault(require("./components/PeriodDimension/PeriodDimension.js"));
var _FixedPeriodSelect = _interopRequireDefault(require("./components/PeriodDimension/FixedPeriodSelect.js"));
var _OrgUnitDimension = _interopRequireDefault(require("./components/OrgUnitDimension/OrgUnitDimension.js"));
var _DynamicDimension = _interopRequireWildcard(require("./components/DynamicDimension/DynamicDimension.js"));
var _DimensionsPanel = _interopRequireDefault(require("./components/DimensionsPanel/DimensionsPanel.js"));
var _DimensionItem = _interopRequireDefault(require("./components/DimensionsPanel/List/DimensionItem.js"));
var _Filter = _interopRequireDefault(require("./components/Filter/Filter.js"));
var _DimensionMenu = _interopRequireDefault(require("./components/DimensionMenu.js"));
var _PivotTable = _interopRequireDefault(require("./components/PivotTable/PivotTable.js"));
var _FileMenu = _interopRequireDefault(require("./components/FileMenu/FileMenu.js"));
var _utils = require("./components/FileMenu/utils.js");
var _VisTypeIcon = _interopRequireDefault(require("./components/VisTypeIcon.js"));
var _LegendKey = _interopRequireDefault(require("./components/LegendKey/LegendKey.js"));
var _AboutAOUnit = _interopRequireDefault(require("./components/AboutAOUnit/AboutAOUnit.js"));
var _index2 = require("./components/Interpretations/InterpretationsUnit/index.js");
var _index3 = require("./components/Interpretations/InterpretationModal/index.js");
var _index4 = require("./components/Toolbar/index.js");
Object.keys(_index4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index4[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index4[key];
    }
  });
});
var _index5 = require("./components/TranslationDialog/index.js");
var _OfflineTooltip = require("./components/OfflineTooltip.js");
var _CachedDataQueryProvider = require("./components/CachedDataQueryProvider.js");
var _index6 = require("./components/RichText/index.js");
Object.keys(_index6).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index6[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index6[key];
    }
  });
});
var _Analytics = _interopRequireDefault(require("./api/analytics/Analytics.js"));
var _dimensions = require("./api/dimensions.js");
var _organisationUnits = require("./api/organisationUnits.js");
var _axis = require("./modules/axis.js");
var _predefinedDimensions = require("./modules/predefinedDimensions.js");
var _index7 = require("./modules/ouIdHelper/index.js");
var _index8 = require("./modules/ouLevelUtils/index.js");
var _getAdaptedUiLayoutByType = require("./modules/getAdaptedUiLayoutByType.js");
var _index9 = require("./modules/relativeItems/index.js");
var _layout = require("./modules/layout/layout.js");
var _layoutFilterDimensions = require("./modules/layout/layoutFilterDimensions.js");
var _layoutGetAllAxes = require("./modules/layout/layoutGetAllAxes.js");
var _layoutGetAllDimensions = require("./modules/layout/layoutGetAllDimensions.js");
var _layoutGetAllItemIds = require("./modules/layout/layoutGetAllItemIds.js");
var _layoutGetAllItems = require("./modules/layout/layoutGetAllItems.js");
var _layoutGetAxisIdDimensionIdsObject = require("./modules/layout/layoutGetAxisIdDimensionIdsObject.js");
var _layoutGetDimension = require("./modules/layout/layoutGetDimension.js");
var _layoutGetDimensionItems = require("./modules/layout/layoutGetDimensionItems.js");
var _layoutReplaceDimension = require("./modules/layout/layoutReplaceDimension.js");
var _layoutGetDimensionIdItemIdsObject = require("./modules/layout/layoutGetDimensionIdItemIdsObject.js");
var _layoutHasDataDimension = require("./modules/layout/layoutHasDataDimension.js");
var _layoutHasDimension = require("./modules/layout/layoutHasDimension.js");
var _layoutHasDynamicDimension = require("./modules/layout/layoutHasDynamicDimension.js");
var _layoutHasPeriodDimension = require("./modules/layout/layoutHasPeriodDimension.js");
var _valueTypes = require("./modules/valueTypes.js");
var _axis2 = require("./modules/layout/axis.js");
var _axisGetAllItems = require("./modules/layout/axisGetAllItems.js");
var _axisGetDimension = require("./modules/layout/axisGetDimension.js");
var _axisGetDimensionIds = require("./modules/layout/axisGetDimensionIds.js");
var _axisHasDataDimension = require("./modules/layout/axisHasDataDimension.js");
var _axisHasDimension = require("./modules/layout/axisHasDimension.js");
var _axisHasPeriodDimension = require("./modules/layout/axisHasPeriodDimension.js");
var _axisHasOuDimension = require("./modules/layout/axisHasOuDimension.js");
var _axisIsEmpty = require("./modules/layout/axisIsEmpty.js");
var _dimension = require("./modules/layout/dimension.js");
var _dimensionCreate = require("./modules/layout/dimensionCreate.js");
var _dimensionGetId = require("./modules/layout/dimensionGetId.js");
var _dimensionGetItemIds = require("./modules/layout/dimensionGetItemIds.js");
var _dimensionGetItems = require("./modules/layout/dimensionGetItems.js");
var _dimensionIs = require("./modules/layout/dimensionIs.js");
var _dimensionIsEmpty = require("./modules/layout/dimensionIsEmpty.js");
var _dimensionIsValid = require("./modules/layout/dimensionIsValid.js");
var _item = require("./modules/layout/item.js");
var _itemGetId = require("./modules/layout/itemGetId.js");
var _itemIsValid = require("./modules/layout/itemIsValid.js");
var _visTypeToLayoutType = require("./modules/visTypeToLayoutType.js");
var _visTypes = require("./modules/visTypes.js");
var _layoutTypes = require("./modules/layoutTypes.js");
var _index10 = require("./modules/layoutUiRules/index.js");
var _index11 = require("./visualizations/index.js");
var _fontStyle = require("./modules/fontStyle.js");
var _legends = require("./modules/legends.js");
var _renderValue = require("./modules/renderValue.js");
var _colorSets = require("./visualizations/util/colors/colorSets.js");
var _index12 = require("./components/PeriodDimension/utils/index.js");
var _relativePeriods = require("./components/PeriodDimension/utils/relativePeriods.js");
var _fixedPeriods = require("./components/PeriodDimension/utils/fixedPeriods.js");
var _VisualizationOptions = _interopRequireDefault(require("./components/Options/VisualizationOptions.js"));
var _dataTypes = require("./modules/dataTypes.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }