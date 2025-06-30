"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TruncatedHeaderCell = exports.SmallEmptyRowsShown = exports.SmallEmptyRowsHidden = exports.SimpleTitleSubtitleFilter = exports.SimpleRow = exports.SimpleNoRowsSmall = exports.SimpleNoRowsLarge = exports.SimpleNoColumnsSingleCell = exports.SimpleNoColumnsLabel = exports.SimpleNoColumnsDeep = exports.SimpleNoColumns = exports.SimpleDataAsFilter = exports.SimpleCommaDgs = exports.SimpleColumn = exports.SimpleAvgTotalAggregationTypeRows = exports.SimpleAvgTotalAggregationTypeColumns = exports.Simple = exports.NarrativeDataAsFilter = exports.Narrative = exports.LegendFixedText = exports.LegendFixedRow = exports.LegendFixedLightFill = exports.LegendFixedDarkFill = exports.LegendByDataItem = exports.HierarchyRows = exports.HierarchyNone = exports.HierarchyColumns = exports.EmptyRowsShown = exports.EmptyRowsHidden = exports.EmptyColumnsWeeklyShown = exports.EmptyColumnsWeeklyHidden = exports.EmptyColumnsShown = exports.EmptyColumnsHidden = exports.EmptyColumnsAssignedCatsShown = exports.EmptyColumnsAssignedCatsHidden = exports.Degs = exports.DeepTotals = exports.DeepTitleSubtitleFilter = exports.DeepSubtotals = exports.DeepSmallCompact = exports.DeepRow = exports.DeepResize = exports.DeepLargeComfortable = exports.DeepFilter = exports.DeepDimensionLabels = exports.DeepColumn = exports.DeepAllTotals = exports.Deep = exports.CumulativeEmptyColumnsWeeklyShown = exports.CumulativeEmptyColumnsWeeklyHidden = void 0;
var _ui = require("@dhis2/ui");
var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../index.js");
var _pivotTableConstants = require("../modules/pivotTable/pivotTableConstants.js");
var _avgTotalAggregationTypeData = _interopRequireDefault(require("./data/aggregate/avgTotalAggregationType.data.json"));
var _avgTotalAggregationTypeMetadata = _interopRequireDefault(require("./data/aggregate/avgTotalAggregationType.metadata.json"));
var _avgTotalAggregationTypeVisualization = _interopRequireDefault(require("./data/aggregate/avgTotalAggregationType.visualization.json"));
var _deepData = _interopRequireDefault(require("./data/aggregate/deep.data.json"));
var _deepVisualization = _interopRequireDefault(require("./data/aggregate/deep.visualization.json"));
var _deepWithFiltersData = _interopRequireDefault(require("./data/aggregate/deepWithFilters.data.json"));
var _deepWithFiltersVisualization = _interopRequireDefault(require("./data/aggregate/deepWithFilters.visualization.json"));
var _degsData = _interopRequireDefault(require("./data/aggregate/degs.data.json"));
var _degsMetadata = _interopRequireDefault(require("./data/aggregate/degs.metadata.json"));
var _degsVisualization = _interopRequireDefault(require("./data/aggregate/degs.visualization.json"));
var _diseaseWeeksData = _interopRequireDefault(require("./data/aggregate/diseaseWeeks.data.json"));
var _diseaseWeeksMetadata = _interopRequireDefault(require("./data/aggregate/diseaseWeeks.metadata.json"));
var _diseaseWeeksVisualization = _interopRequireDefault(require("./data/aggregate/diseaseWeeks.visualization.json"));
var _emptyColumnsData = _interopRequireDefault(require("./data/aggregate/emptyColumns.data.json"));
var _emptyColumnsMetadata = _interopRequireDefault(require("./data/aggregate/emptyColumns.metadata.json"));
var _emptyColumnsVisualization = _interopRequireDefault(require("./data/aggregate/emptyColumns.visualization.json"));
var _emptyRowsData = _interopRequireDefault(require("./data/aggregate/emptyRows.data.json"));
var _emptyRowsVisualization = _interopRequireDefault(require("./data/aggregate/emptyRows.visualization.json"));
var _hierarchyData = _interopRequireDefault(require("./data/aggregate/hierarchy.data.json"));
var _hierarchyMetadata = _interopRequireDefault(require("./data/aggregate/hierarchy.metadata.json"));
var _hierarchyVisualization = _interopRequireDefault(require("./data/aggregate/hierarchy.visualization.json"));
var _lastFiveYearsData = _interopRequireDefault(require("./data/aggregate/lastFiveYears.data.json"));
var _lastFiveYearsMetadata = _interopRequireDefault(require("./data/aggregate/lastFiveYears.metadata.json"));
var _lastFiveYearsVisualization = _interopRequireDefault(require("./data/aggregate/lastFiveYears.visualization.json"));
var _narrativeData = _interopRequireDefault(require("./data/aggregate/narrative.data.json"));
var _narrativeMetadata = _interopRequireDefault(require("./data/aggregate/narrative.metadata.json"));
var _narrativeVisualization = _interopRequireDefault(require("./data/aggregate/narrative.visualization.json"));
var _simpleData = _interopRequireDefault(require("./data/aggregate/simple.data.json"));
var _simpleMetadata = _interopRequireDefault(require("./data/aggregate/simple.metadata.json"));
var _simpleVisualization = _interopRequireDefault(require("./data/aggregate/simple.visualization.json"));
var _targetWithLegendData = _interopRequireDefault(require("./data/aggregate/target-with-legend.data.json"));
var _targetWithLegendMetadata = _interopRequireDefault(require("./data/aggregate/target-with-legend.metadata.json"));
var _targetWithLegendVisualization = _interopRequireDefault(require("./data/aggregate/target-with-legend.visualization.json"));
var _underAbove100LegendSet = _interopRequireDefault(require("./data/aggregate/under-above-100.legendSet.json"));
var _weeklyColumnsData = _interopRequireDefault(require("./data/aggregate/weeklyColumns.data.json"));
var _weeklyColumnsMetadata = _interopRequireDefault(require("./data/aggregate/weeklyColumns.metadata.json"));
var _weeklyColumnsVisualization = _interopRequireDefault(require("./data/aggregate/weeklyColumns.visualization.json"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const visualizationReset = {
  colTotals: false,
  rowTotals: false,
  colSubTotals: false,
  rowSubTotals: false,
  hideEmptyColumns: false,
  hideEmptyRows: false
};
const combineDataWithMetadata = (dataResponse, metadataResponse) => ({
  ...dataResponse,
  metaData: metadataResponse.metaData
});
const simpleData = combineDataWithMetadata(_simpleData.default, _simpleMetadata.default);
const avgData = combineDataWithMetadata(_avgTotalAggregationTypeData.default, _avgTotalAggregationTypeMetadata.default);
const emptyColumnsData = combineDataWithMetadata(_emptyColumnsData.default, _emptyColumnsMetadata.default);
const targetData = combineDataWithMetadata(_targetWithLegendData.default, _targetWithLegendMetadata.default);
const hierarchyData = combineDataWithMetadata(_hierarchyData.default, _hierarchyMetadata.default);
const narrativeData = combineDataWithMetadata(_narrativeData.default, _narrativeMetadata.default);
const degsData = combineDataWithMetadata(_degsData.default, _degsMetadata.default);
const diseaseWeeksData = combineDataWithMetadata(_diseaseWeeksData.default, _diseaseWeeksMetadata.default);
const lastFiveYearsData = combineDataWithMetadata(_lastFiveYearsData.default, _lastFiveYearsMetadata.default);
const weeklyColumnsData = combineDataWithMetadata(_weeklyColumnsData.default, _weeklyColumnsMetadata.default);
const PivotTableOptionsWrapper = story => {
  const [pivotTableOptions, setPivotTableOptions] = (0, _react.useState)({
    fixColumnHeaders: false,
    fixRowHeaders: false
  });
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
    label: "Use fixed column headers",
    checked: pivotTableOptions.fixColumnHeaders,
    onChange: _ref => {
      let {
        checked
      } = _ref;
      return setPivotTableOptions({
        ...pivotTableOptions,
        fixColumnHeaders: checked
      });
    },
    dense: true
  }), /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
    label: "Use fixed row headers",
    checked: pivotTableOptions.fixRowHeaders,
    onChange: _ref2 => {
      let {
        checked
      } = _ref2;
      return setPivotTableOptions({
        ...pivotTableOptions,
        fixRowHeaders: checked
      });
    },
    dense: true
  }), /*#__PURE__*/_react.default.createElement(_ui.Divider, null)), story({
    pivotTableOptions
  }));
};
var _default = exports.default = {
  title: 'PivotTable (aggregate)',
  decorators: [PivotTableOptionsWrapper]
};
const Simple = (_, _ref3) => {
  let {
    pivotTableOptions
  } = _ref3;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.Simple = Simple;
Simple.story = {
  name: 'simple'
};
const SimpleCommaDgs = (_, _ref4) => {
  let {
    pivotTableOptions
  } = _ref4;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    digitGroupSeparator: 'COMMA'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.SimpleCommaDgs = SimpleCommaDgs;
SimpleCommaDgs.story = {
  name: 'simple - comma DGS'
};
const SimpleTitleSubtitleFilter = (_, _ref5) => {
  let {
    pivotTableOptions
  } = _ref5;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    title: 'This is a Table',
    subtitle: "It's not a very big table"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.SimpleTitleSubtitleFilter = SimpleTitleSubtitleFilter;
SimpleTitleSubtitleFilter.story = {
  name: 'simple - title / subtitle / filter'
};
const SimpleColumn = (_, _ref6) => {
  let {
    pivotTableOptions
  } = _ref6;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    numberType: _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.SimpleColumn = SimpleColumn;
SimpleColumn.story = {
  name: 'simple - column %'
};
const SimpleRow = (_, _ref7) => {
  let {
    pivotTableOptions
  } = _ref7;
  const visualization = {
    ..._diseaseWeeksVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: diseaseWeeksData,
    visualization: visualization
  }));
};
exports.SimpleRow = SimpleRow;
SimpleRow.story = {
  name: 'simple - row %'
};
const SimpleDataAsFilter = (_, _ref8) => {
  let {
    pivotTableOptions
  } = _ref8;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: _simpleVisualization.default.filters,
    filters: _simpleVisualization.default.columns
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.SimpleDataAsFilter = SimpleDataAsFilter;
SimpleDataAsFilter.story = {
  name: 'simple - data as filter'
};
const SimpleNoColumns = (_, _ref9) => {
  let {
    pivotTableOptions
  } = _ref9;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    colSubTotals: true,
    rowTotals: true,
    rowSubTotals: true,
    columns: [],
    filters: _simpleVisualization.default.columns
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.SimpleNoColumns = SimpleNoColumns;
SimpleNoColumns.story = {
  name: 'simple - no columns'
};
const SimpleNoColumnsSingleCell = (_, _ref10) => {
  let {
    pivotTableOptions
  } = _ref10;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    title: 'Singular cell',
    columns: [],
    rows: _simpleVisualization.default.columns,
    filters: []
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.SimpleNoColumnsSingleCell = SimpleNoColumnsSingleCell;
SimpleNoColumnsSingleCell.story = {
  name: 'simple - no columns (single cell)'
};
const SimpleNoColumnsDeep = (_, _ref11) => {
  let {
    pivotTableOptions
  } = _ref11;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: true,
    title: 'Deep row headers',
    columns: [],
    rows: [_simpleVisualization.default.columns[0], _simpleVisualization.default.rows[0]],
    filters: []
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.SimpleNoColumnsDeep = SimpleNoColumnsDeep;
SimpleNoColumnsDeep.story = {
  name: 'simple - no columns (deep)'
};
const SimpleNoColumnsLabel = (_, _ref12) => {
  let {
    pivotTableOptions
  } = _ref12;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: true,
    colTotals: true,
    colSubTotals: true,
    rowTotals: true,
    rowSubTotals: true,
    columns: [],
    filters: _simpleVisualization.default.columns
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.SimpleNoColumnsLabel = SimpleNoColumnsLabel;
SimpleNoColumnsLabel.story = {
  name: 'simple - no columns (label)'
};
const SimpleNoRowsSmall = (_, _ref13) => {
  let {
    pivotTableOptions
  } = _ref13;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: true,
    colTotals: true,
    colSubTotals: true,
    rowTotals: true,
    rowSubTotals: true,
    rows: [],
    filters: _simpleVisualization.default.rows
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.SimpleNoRowsSmall = SimpleNoRowsSmall;
SimpleNoRowsSmall.story = {
  name: 'simple - no rows (small)'
};
const SimpleNoRowsLarge = (_, _ref14) => {
  let {
    pivotTableOptions
  } = _ref14;
  const visualization = {
    ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    colSubTotals: true,
    rowTotals: true,
    rowSubTotals: true,
    rows: [],
    columns: _simpleVisualization.default.rows,
    filters: _simpleVisualization.default.columns
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
exports.SimpleNoRowsLarge = SimpleNoRowsLarge;
SimpleNoRowsLarge.story = {
  name: 'simple - no rows (large)'
};
const SimpleAvgTotalAggregationTypeColumns = (_, _ref15) => {
  let {
    pivotTableOptions
  } = _ref15;
  const visualization = {
    ..._avgTotalAggregationTypeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    hideEmptyRows: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: avgData,
    visualization: visualization
  }));
};
exports.SimpleAvgTotalAggregationTypeColumns = SimpleAvgTotalAggregationTypeColumns;
SimpleAvgTotalAggregationTypeColumns.story = {
  name: 'simple - avg totalAggregationType columns'
};
const SimpleAvgTotalAggregationTypeRows = (_, _ref16) => {
  let {
    pivotTableOptions
  } = _ref16;
  const visualization = {
    ..._avgTotalAggregationTypeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: _avgTotalAggregationTypeVisualization.default.rows,
    rows: _avgTotalAggregationTypeVisualization.default.columns,
    rowTotals: true,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: avgData,
    visualization: visualization
  }));
};
exports.SimpleAvgTotalAggregationTypeRows = SimpleAvgTotalAggregationTypeRows;
SimpleAvgTotalAggregationTypeRows.story = {
  name: 'simple - avg totalAggregationType rows'
};
const Deep = (_, _ref17) => {
  let {
    pivotTableOptions
  } = _ref17;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: false
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
exports.Deep = Deep;
Deep.story = {
  name: 'deep'
};
const DeepFilter = (_, _ref18) => {
  let {
    pivotTableOptions
  } = _ref18;
  const visualization = {
    ..._deepWithFiltersVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: false
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepWithFiltersData.default,
    visualization: visualization
  }));
};
exports.DeepFilter = DeepFilter;
DeepFilter.story = {
  name: 'deep - filter'
};
const DeepTitleSubtitleFilter = (_, _ref19) => {
  let {
    pivotTableOptions
  } = _ref19;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: false,
    title: 'This is a Table',
    subtitle: "It's a rather big table"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
exports.DeepTitleSubtitleFilter = DeepTitleSubtitleFilter;
DeepTitleSubtitleFilter.story = {
  name: 'deep - title / subtitle / filter'
};
const DeepDimensionLabels = (_, _ref20) => {
  let {
    pivotTableOptions
  } = _ref20;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
exports.DeepDimensionLabels = DeepDimensionLabels;
DeepDimensionLabels.story = {
  name: 'deep - dimension labels'
};
const DeepSmallCompact = (_, _ref21) => {
  let {
    pivotTableOptions
  } = _ref21;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    displayDensity: 'COMPACT',
    fontSize: 'SMALL'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
exports.DeepSmallCompact = DeepSmallCompact;
DeepSmallCompact.story = {
  name: 'deep - small / compact'
};
const DeepLargeComfortable = (_, _ref22) => {
  let {
    pivotTableOptions
  } = _ref22;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    displayDensity: 'COMFORTABLE',
    fontSize: 'LARGE'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
exports.DeepLargeComfortable = DeepLargeComfortable;
DeepLargeComfortable.story = {
  name: 'deep - large / comfortable'
};
const DeepRow = (_, _ref23) => {
  let {
    pivotTableOptions
  } = _ref23;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
    colSubTotals: true,
    rowSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
exports.DeepRow = DeepRow;
DeepRow.story = {
  name: 'deep - row %'
};
const DeepColumn = (_, _ref24) => {
  let {
    pivotTableOptions
  } = _ref24;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    numberType: _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE,
    colSubTotals: true,
    rowSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
exports.DeepColumn = DeepColumn;
DeepColumn.story = {
  name: 'deep - column %'
};
const ResizingPivotTable = _ref25 => {
  let {
    visualization
  } = _ref25;
  const [size, setSize] = (0, _react.useState)(() => ({
    width: 400,
    height: 300
  }));
  (0, _react.useEffect)(() => {
    const bound = 150;
    let step = 1;
    let delta = 0;
    const interval = setInterval(() => {
      if (delta < 0 || delta >= bound) {
        step *= -1;
      }
      delta += step;
      setSize({
        width: 400 + delta * 4,
        height: 300 + delta * 3
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: size
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
ResizingPivotTable.propTypes = {
  visualization: _propTypes.default.object.isRequired
};
const DeepResize = (_, _ref26) => {
  let {
    pivotTableOptions
  } = _ref26;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement(ResizingPivotTable, {
    visualization: visualization
  });
};
exports.DeepResize = DeepResize;
DeepResize.story = {
  name: 'deep - resize'
};
const DeepTotals = (_, _ref27) => {
  let {
    pivotTableOptions
  } = _ref27;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
exports.DeepTotals = DeepTotals;
DeepTotals.story = {
  name: 'deep - totals'
};
const DeepSubtotals = (_, _ref28) => {
  let {
    pivotTableOptions
  } = _ref28;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
exports.DeepSubtotals = DeepSubtotals;
DeepSubtotals.story = {
  name: 'deep - subtotals'
};
const DeepAllTotals = (_, _ref29) => {
  let {
    pivotTableOptions
  } = _ref29;
  const visualization = {
    ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};
exports.DeepAllTotals = DeepAllTotals;
DeepAllTotals.story = {
  name: 'deep - all totals'
};
const SmallEmptyRowsShown = (_, _ref30) => {
  let {
    pivotTableOptions
  } = _ref30;
  const visualization = {
    ..._diseaseWeeksVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: diseaseWeeksData,
    visualization: visualization
  }));
};
exports.SmallEmptyRowsShown = SmallEmptyRowsShown;
SmallEmptyRowsShown.story = {
  name: 'small empty rows - shown'
};
const SmallEmptyRowsHidden = (_, _ref31) => {
  let {
    pivotTableOptions
  } = _ref31;
  const visualization = {
    ..._diseaseWeeksVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true,
    hideEmptyRows: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: diseaseWeeksData,
    visualization: visualization
  }));
};
exports.SmallEmptyRowsHidden = SmallEmptyRowsHidden;
SmallEmptyRowsHidden.story = {
  name: 'small empty rows - hidden'
};
const EmptyRowsShown = (_, _ref32) => {
  let {
    pivotTableOptions
  } = _ref32;
  const visualization = {
    ..._emptyRowsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _emptyRowsData.default,
    visualization: visualization
  }));
};
exports.EmptyRowsShown = EmptyRowsShown;
EmptyRowsShown.story = {
  name: 'empty rows - shown'
};
const EmptyRowsHidden = (_, _ref33) => {
  let {
    pivotTableOptions
  } = _ref33;
  const visualization = {
    ..._emptyRowsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    hideEmptyRows: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _emptyRowsData.default,
    visualization: visualization
  }));
};
exports.EmptyRowsHidden = EmptyRowsHidden;
EmptyRowsHidden.story = {
  name: 'empty rows - hidden'
};
const EmptyColumnsShown = (_, _ref34) => {
  let {
    pivotTableOptions
  } = _ref34;
  const visualization = {
    ..._lastFiveYearsVisualization.default,
    ...pivotTableOptions,
    hideEmptyColumns: false
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: lastFiveYearsData,
    visualization: visualization
  }));
};
exports.EmptyColumnsShown = EmptyColumnsShown;
EmptyColumnsShown.story = {
  name: 'empty columns - shown'
};
const EmptyColumnsHidden = (_, _ref35) => {
  let {
    pivotTableOptions
  } = _ref35;
  const visualization = {
    ..._lastFiveYearsVisualization.default,
    ...pivotTableOptions,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: lastFiveYearsData,
    visualization: visualization
  }));
};
exports.EmptyColumnsHidden = EmptyColumnsHidden;
EmptyColumnsHidden.story = {
  name: 'empty columns - hidden'
};
const EmptyColumnsWeeklyShown = (_, _ref36) => {
  let {
    pivotTableOptions
  } = _ref36;
  const visualization = {
    ..._weeklyColumnsVisualization.default,
    ...pivotTableOptions,
    hideEmptyColumns: false
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: weeklyColumnsData,
    visualization: visualization
  }));
};
exports.EmptyColumnsWeeklyShown = EmptyColumnsWeeklyShown;
EmptyColumnsWeeklyShown.story = {
  name: 'empty columns (weekly) - shown'
};
const CumulativeEmptyColumnsWeeklyShown = (_, _ref37) => {
  let {
    pivotTableOptions
  } = _ref37;
  const visualization = {
    ..._weeklyColumnsVisualization.default,
    ...pivotTableOptions,
    hideEmptyColumns: false,
    cumulativeValues: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: weeklyColumnsData,
    visualization: visualization
  }));
};
exports.CumulativeEmptyColumnsWeeklyShown = CumulativeEmptyColumnsWeeklyShown;
CumulativeEmptyColumnsWeeklyShown.story = {
  name: 'cumulative + empty columns (weekly) - shown'
};
const EmptyColumnsWeeklyHidden = (_, _ref38) => {
  let {
    pivotTableOptions
  } = _ref38;
  const visualization = {
    ..._weeklyColumnsVisualization.default,
    ...pivotTableOptions,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: weeklyColumnsData,
    visualization: visualization
  }));
};
exports.EmptyColumnsWeeklyHidden = EmptyColumnsWeeklyHidden;
EmptyColumnsWeeklyHidden.story = {
  name: 'empty columns (weekly) - hidden'
};
const CumulativeEmptyColumnsWeeklyHidden = (_, _ref39) => {
  let {
    pivotTableOptions
  } = _ref39;
  const visualization = {
    ..._weeklyColumnsVisualization.default,
    ...pivotTableOptions,
    hideEmptyColumns: true,
    cumulativeValues: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: weeklyColumnsData,
    visualization: visualization
  }));
};
exports.CumulativeEmptyColumnsWeeklyHidden = CumulativeEmptyColumnsWeeklyHidden;
CumulativeEmptyColumnsWeeklyHidden.story = {
  name: 'cumulative + empty columns (weekly) - hidden'
};
const EmptyColumnsAssignedCatsShown = (_, _ref40) => {
  let {
    pivotTableOptions
  } = _ref40;
  const visualization = {
    ..._emptyColumnsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    hideEmptyColumns: false
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: emptyColumnsData,
    visualization: visualization
  }));
};
exports.EmptyColumnsAssignedCatsShown = EmptyColumnsAssignedCatsShown;
EmptyColumnsAssignedCatsShown.story = {
  name: 'empty columns + assigned cats (shown)'
};
const EmptyColumnsAssignedCatsHidden = (_, _ref41) => {
  let {
    pivotTableOptions
  } = _ref41;
  const visualization = {
    ..._emptyColumnsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: emptyColumnsData,
    visualization: visualization
  }));
};
exports.EmptyColumnsAssignedCatsHidden = EmptyColumnsAssignedCatsHidden;
EmptyColumnsAssignedCatsHidden.story = {
  name: 'empty columns + assigned cats (hidden)'
};
const LegendFixedLightFill = (_, _ref42) => {
  let {
    pivotTableOptions
  } = _ref42;
  const visualization = {
    ..._targetWithLegendVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    rowTotals: true,
    colTotals: true,
    legendDisplayStyle: 'FILL',
    legendSet: {
      id: _underAbove100LegendSet.default.id
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [_underAbove100LegendSet.default]
  }));
};
exports.LegendFixedLightFill = LegendFixedLightFill;
LegendFixedLightFill.story = {
  name: 'legend - fixed (light fill)'
};
const LegendFixedDarkFill = (_, _ref43) => {
  let {
    pivotTableOptions
  } = _ref43;
  const visualization = {
    ..._targetWithLegendVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    legendDisplayStyle: 'FILL',
    legendSet: {
      id: _underAbove100LegendSet.default.id
    }
  };
  const legendSet = (0, _cloneDeep.default)(_underAbove100LegendSet.default);
  legendSet.legends[0].color = '#000000';
  legendSet.legends[1].color = '#666666';
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [legendSet]
  }));
};
exports.LegendFixedDarkFill = LegendFixedDarkFill;
LegendFixedDarkFill.story = {
  name: 'legend - fixed (dark fill)'
};
const LegendFixedText = (_, _ref44) => {
  let {
    pivotTableOptions
  } = _ref44;
  const visualization = {
    ..._targetWithLegendVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    legendDisplayStyle: 'TEXT',
    legendSet: {
      id: _underAbove100LegendSet.default.id
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [_underAbove100LegendSet.default]
  }));
};
exports.LegendFixedText = LegendFixedText;
LegendFixedText.story = {
  name: 'legend - fixed (text)'
};
const LegendFixedRow = (_, _ref45) => {
  let {
    pivotTableOptions
  } = _ref45;
  const visualization = {
    ..._targetWithLegendVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
    legendDisplayStyle: 'FILL',
    legendSet: {
      id: _underAbove100LegendSet.default.id
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [_underAbove100LegendSet.default]
  }));
};
exports.LegendFixedRow = LegendFixedRow;
LegendFixedRow.story = {
  name: 'legend - fixed (% row)'
};
const LegendByDataItem = (_, _ref46) => {
  let {
    pivotTableOptions
  } = _ref46;
  const visualization = {
    ..._targetWithLegendVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    legendDisplayStrategy: 'BY_DATA_ITEM',
    legendSet: undefined
  };
  const data = (0, _cloneDeep.default)(targetData);
  const customLegendSet = (0, _cloneDeep.default)(_underAbove100LegendSet.default);
  customLegendSet.id = 'TESTID';
  customLegendSet.legends[0].color = '#000000';
  customLegendSet.legends[1].color = '#666666';
  data.metaData.items[visualization.columns[0].items[1].id].legendSet = _underAbove100LegendSet.default.id;
  data.metaData.items[visualization.columns[0].items[3].id].legendSet = customLegendSet.id;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: data,
    visualization: visualization,
    legendSets: [_underAbove100LegendSet.default, customLegendSet]
  }));
};
exports.LegendByDataItem = LegendByDataItem;
LegendByDataItem.story = {
  name: 'legend - by data item'
};
const HierarchyNone = (_, _ref47) => {
  let {
    pivotTableOptions
  } = _ref47;
  const visualization = {
    ..._hierarchyVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showHierarchy: false,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: hierarchyData,
    visualization: visualization
  }));
};
exports.HierarchyNone = HierarchyNone;
HierarchyNone.story = {
  name: 'hierarchy - none'
};
const HierarchyRows = (_, _ref48) => {
  let {
    pivotTableOptions
  } = _ref48;
  const visualization = {
    ..._hierarchyVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: hierarchyData,
    visualization: visualization
  }));
};
exports.HierarchyRows = HierarchyRows;
HierarchyRows.story = {
  name: 'hierarchy - rows'
};
const HierarchyColumns = (_, _ref49) => {
  let {
    pivotTableOptions
  } = _ref49;
  const visualization = {
    ..._hierarchyVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: _hierarchyVisualization.default.rows,
    rows: _hierarchyVisualization.default.columns,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: hierarchyData,
    visualization: visualization
  }));
};
exports.HierarchyColumns = HierarchyColumns;
HierarchyColumns.story = {
  name: 'hierarchy - columns'
};
const Narrative = (_, _ref50) => {
  let {
    pivotTableOptions
  } = _ref50;
  const visualization = {
    ..._narrativeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: narrativeData,
    visualization: visualization
  }));
};
exports.Narrative = Narrative;
Narrative.story = {
  name: 'narrative'
};
const NarrativeDataAsFilter = (_, _ref51) => {
  let {
    pivotTableOptions
  } = _ref51;
  const visualization = {
    ..._narrativeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: _narrativeVisualization.default.filters,
    filters: _narrativeVisualization.default.columns,
    rowTotals: true,
    colTotals: true
  };
  const data = {
    ...narrativeData,
    rows: [narrativeData.rows[0]]
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: data,
    visualization: visualization
  }));
};
exports.NarrativeDataAsFilter = NarrativeDataAsFilter;
NarrativeDataAsFilter.story = {
  name: 'narrative - data as filter'
};
const Degs = (_, _ref52) => {
  let {
    pivotTableOptions
  } = _ref52;
  const visualization = {
    ..._degsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: degsData,
    visualization: visualization
  }));
};
exports.Degs = Degs;
Degs.story = {
  name: 'DEGS'
};
const TruncatedHeaderCell = (_, _ref53) => {
  let {
    pivotTableOptions
  } = _ref53;
  const widths = [250, 200, 500];
  const [width, setWidth] = (0, _react.useState)(250);
  const toggleWidth = () => setWidth(currentWidth => {
    var _widths;
    return (_widths = widths[widths.indexOf(currentWidth) + 1]) !== null && _widths !== void 0 ? _widths : widths[0];
  });
  const visualization = {
    ..._narrativeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: _narrativeVisualization.default.filters,
    filters: _narrativeVisualization.default.columns,
    rowTotals: true,
    colTotals: true
  };
  const data = {
    ...narrativeData,
    rows: [narrativeData.rows[0]]
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width,
      height: 600,
      marginTop: 50,
      transition: 'width 1s'
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: toggleWidth
  }, "Toggle width"), /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: data,
    visualization: visualization
  }));
};
exports.TruncatedHeaderCell = TruncatedHeaderCell;
TruncatedHeaderCell.story = {
  name: 'Truncated header cell'
};