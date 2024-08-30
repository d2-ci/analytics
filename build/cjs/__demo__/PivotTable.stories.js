"use strict";

var _ui = require("@dhis2/ui");

var _react = require("@storybook/react");

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = _interopRequireWildcard(require("react"));

var _index = require("../index.js");

var _pivotTableConstants = require("../modules/pivotTable/pivotTableConstants.js");

var _avgTotalAggregationTypeData = _interopRequireDefault(require("./data/avgTotalAggregationType.data.json"));

var _avgTotalAggregationTypeMetadata = _interopRequireDefault(require("./data/avgTotalAggregationType.metadata.json"));

var _avgTotalAggregationTypeVisualization = _interopRequireDefault(require("./data/avgTotalAggregationType.visualization.json"));

var _deepData = _interopRequireDefault(require("./data/deep.data.json"));

var _deepVisualization = _interopRequireDefault(require("./data/deep.visualization.json"));

var _deepWithFiltersData = _interopRequireDefault(require("./data/deepWithFilters.data.json"));

var _deepWithFiltersVisualization = _interopRequireDefault(require("./data/deepWithFilters.visualization.json"));

var _degsData = _interopRequireDefault(require("./data/degs.data.json"));

var _degsMetadata = _interopRequireDefault(require("./data/degs.metadata.json"));

var _degsVisualization = _interopRequireDefault(require("./data/degs.visualization.json"));

var _diseaseWeeksData = _interopRequireDefault(require("./data/diseaseWeeks.data.json"));

var _diseaseWeeksMetadata = _interopRequireDefault(require("./data/diseaseWeeks.metadata.json"));

var _diseaseWeeksVisualization = _interopRequireDefault(require("./data/diseaseWeeks.visualization.json"));

var _emptyColumnsData = _interopRequireDefault(require("./data/emptyColumns.data.json"));

var _emptyColumnsMetadata = _interopRequireDefault(require("./data/emptyColumns.metadata.json"));

var _emptyColumnsVisualization = _interopRequireDefault(require("./data/emptyColumns.visualization.json"));

var _emptyRowsData = _interopRequireDefault(require("./data/emptyRows.data.json"));

var _emptyRowsVisualization = _interopRequireDefault(require("./data/emptyRows.visualization.json"));

var _hierarchyData = _interopRequireDefault(require("./data/hierarchy.data.json"));

var _hierarchyMetadata = _interopRequireDefault(require("./data/hierarchy.metadata.json"));

var _hierarchyVisualization = _interopRequireDefault(require("./data/hierarchy.visualization.json"));

var _lastFiveYearsData = _interopRequireDefault(require("./data/lastFiveYears.data.json"));

var _lastFiveYearsMetadata = _interopRequireDefault(require("./data/lastFiveYears.metadata.json"));

var _lastFiveYearsVisualization = _interopRequireDefault(require("./data/lastFiveYears.visualization.json"));

var _narrativeData = _interopRequireDefault(require("./data/narrative.data.json"));

var _narrativeMetadata = _interopRequireDefault(require("./data/narrative.metadata.json"));

var _narrativeVisualization = _interopRequireDefault(require("./data/narrative.visualization.json"));

var _simpleData = _interopRequireDefault(require("./data/simple.data.json"));

var _simpleMetadata = _interopRequireDefault(require("./data/simple.metadata.json"));

var _simpleVisualization = _interopRequireDefault(require("./data/simple.visualization.json"));

var _targetWithLegendData = _interopRequireDefault(require("./data/target-with-legend.data.json"));

var _targetWithLegendMetadata = _interopRequireDefault(require("./data/target-with-legend.metadata.json"));

var _targetWithLegendVisualization = _interopRequireDefault(require("./data/target-with-legend.visualization.json"));

var _underAbove100LegendSet = _interopRequireDefault(require("./data/under-above-100.legendSet.json"));

var _weeklyColumnsData = _interopRequireDefault(require("./data/weeklyColumns.data.json"));

var _weeklyColumnsMetadata = _interopRequireDefault(require("./data/weeklyColumns.metadata.json"));

var _weeklyColumnsVisualization = _interopRequireDefault(require("./data/weeklyColumns.visualization.json"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const visualizationReset = {
  colTotals: false,
  rowTotals: false,
  colSubTotals: false,
  rowSubTotals: false,
  hideEmptyColumns: false,
  hideEmptyRows: false
};

const combineDataWithMetadata = (dataResponse, metadataResponse) => ({ ...dataResponse,
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
  const [pivotTableOptions, setPivotTableOptions] = (0, _react2.useState)({
    fixColumnHeaders: false,
    fixRowHeaders: false
  });
  return /*#__PURE__*/_react2.default.createElement("div", null, /*#__PURE__*/_react2.default.createElement("div", null, /*#__PURE__*/_react2.default.createElement(_ui.Checkbox, {
    label: "Use fixed column headers",
    checked: pivotTableOptions.fixColumnHeaders,
    onChange: _ref => {
      let {
        checked
      } = _ref;
      return setPivotTableOptions({ ...pivotTableOptions,
        fixColumnHeaders: checked
      });
    },
    dense: true
  }), /*#__PURE__*/_react2.default.createElement(_ui.Checkbox, {
    label: "Use fixed row headers",
    checked: pivotTableOptions.fixRowHeaders,
    onChange: _ref2 => {
      let {
        checked
      } = _ref2;
      return setPivotTableOptions({ ...pivotTableOptions,
        fixRowHeaders: checked
      });
    },
    dense: true
  }), /*#__PURE__*/_react2.default.createElement(_ui.Divider, null)), story({
    pivotTableOptions
  }));
};

(0, _react.storiesOf)('PivotTable', module).addDecorator(PivotTableOptionsWrapper).add('simple', (_, _ref3) => {
  let {
    pivotTableOptions
  } = _ref3;
  const visualization = { ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - comma DGS', (_, _ref4) => {
  let {
    pivotTableOptions
  } = _ref4;
  const visualization = { ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    digitGroupSeparator: 'COMMA'
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - title / subtitle / filter', (_, _ref5) => {
  let {
    pivotTableOptions
  } = _ref5;
  const visualization = { ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    title: 'This is a Table',
    subtitle: "It's not a very big table"
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - column %', (_, _ref6) => {
  let {
    pivotTableOptions
  } = _ref6;
  const visualization = { ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    numberType: _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - data as filter', (_, _ref7) => {
  let {
    pivotTableOptions
  } = _ref7;
  const visualization = { ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: _simpleVisualization.default.filters,
    filters: _simpleVisualization.default.columns
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - no columns', (_, _ref8) => {
  let {
    pivotTableOptions
  } = _ref8;
  const visualization = { ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    colSubTotals: true,
    rowTotals: true,
    rowSubTotals: true,
    columns: [],
    filters: _simpleVisualization.default.columns
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - no columns (single cell)', (_, _ref9) => {
  let {
    pivotTableOptions
  } = _ref9;
  const visualization = { ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    title: 'Singular cell',
    columns: [],
    rows: _simpleVisualization.default.columns,
    filters: []
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - no columns (deep)', (_, _ref10) => {
  let {
    pivotTableOptions
  } = _ref10;
  const visualization = { ..._simpleVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: true,
    title: 'Deep row headers',
    columns: [],
    rows: [_simpleVisualization.default.columns[0], _simpleVisualization.default.rows[0]],
    filters: []
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - no columns (label)', (_, _ref11) => {
  let {
    pivotTableOptions
  } = _ref11;
  const visualization = { ..._simpleVisualization.default,
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
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - no rows (small)', (_, _ref12) => {
  let {
    pivotTableOptions
  } = _ref12;
  const visualization = { ..._simpleVisualization.default,
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
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - no rows (large)', (_, _ref13) => {
  let {
    pivotTableOptions
  } = _ref13;
  const visualization = { ..._simpleVisualization.default,
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
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - avg totalAggregationType columns', (_, _ref14) => {
  let {
    pivotTableOptions
  } = _ref14;
  const visualization = { ..._avgTotalAggregationTypeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    hideEmptyRows: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: avgData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('simple - avg totalAggregationType rows', (_, _ref15) => {
  let {
    pivotTableOptions
  } = _ref15;
  const visualization = { ..._avgTotalAggregationTypeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: _avgTotalAggregationTypeVisualization.default.rows,
    rows: _avgTotalAggregationTypeVisualization.default.columns,
    rowTotals: true,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: avgData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('deep', (_, _ref16) => {
  let {
    pivotTableOptions
  } = _ref16;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: false
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('deep - filter', (_, _ref17) => {
  let {
    pivotTableOptions
  } = _ref17;
  const visualization = { ..._deepWithFiltersVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: false
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepWithFiltersData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('deep - title / subtitle / filter', (_, _ref18) => {
  let {
    pivotTableOptions
  } = _ref18;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: false,
    title: 'This is a Table',
    subtitle: "It's a rather big table"
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('deep - dimension labels', (_, _ref19) => {
  let {
    pivotTableOptions
  } = _ref19;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('deep - small / compact', (_, _ref20) => {
  let {
    pivotTableOptions
  } = _ref20;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    displayDensity: 'COMPACT',
    fontSize: 'SMALL'
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('deep - large / comfortable', (_, _ref21) => {
  let {
    pivotTableOptions
  } = _ref21;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    displayDensity: 'COMFORTABLE',
    fontSize: 'LARGE'
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('deep - row %', (_, _ref22) => {
  let {
    pivotTableOptions
  } = _ref22;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    numberType: _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE,
    colSubTotals: true,
    rowSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('deep - column %', (_, _ref23) => {
  let {
    pivotTableOptions
  } = _ref23;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    numberType: _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE,
    colSubTotals: true,
    rowSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
});

const ResizingPivotTable = _ref24 => {
  let {
    visualization
  } = _ref24;
  const [size, setSize] = (0, _react2.useState)(() => ({
    width: 400,
    height: 300
  }));
  (0, _react2.useEffect)(() => {
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
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: size
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
};

ResizingPivotTable.propTypes = {
  visualization: _propTypes.default.object.isRequired
};
(0, _react.storiesOf)('PivotTable', module).add('deep - resize', (_, _ref25) => {
  let {
    pivotTableOptions
  } = _ref25;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react2.default.createElement(ResizingPivotTable, {
    visualization: visualization
  });
});
(0, _react.storiesOf)('PivotTable', module).add('deep - totals', (_, _ref26) => {
  let {
    pivotTableOptions
  } = _ref26;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('deep - subtotals', (_, _ref27) => {
  let {
    pivotTableOptions
  } = _ref27;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('deep - all totals', (_, _ref28) => {
  let {
    pivotTableOptions
  } = _ref28;
  const visualization = { ..._deepVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _deepData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('small empty rows - shown', (_, _ref29) => {
  let {
    pivotTableOptions
  } = _ref29;
  const visualization = { ..._diseaseWeeksVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: diseaseWeeksData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('small empty rows - hidden', (_, _ref30) => {
  let {
    pivotTableOptions
  } = _ref30;
  const visualization = { ..._diseaseWeeksVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true,
    hideEmptyRows: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: diseaseWeeksData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('empty rows - shown', (_, _ref31) => {
  let {
    pivotTableOptions
  } = _ref31;
  const visualization = { ..._emptyRowsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _emptyRowsData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('empty rows - hidden', (_, _ref32) => {
  let {
    pivotTableOptions
  } = _ref32;
  const visualization = { ..._emptyRowsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    hideEmptyRows: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: _emptyRowsData.default,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('empty columns - shown', (_, _ref33) => {
  let {
    pivotTableOptions
  } = _ref33;
  const visualization = { ..._lastFiveYearsVisualization.default,
    ...pivotTableOptions,
    hideEmptyColumns: false
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: lastFiveYearsData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('empty columns - hidden', (_, _ref34) => {
  let {
    pivotTableOptions
  } = _ref34;
  const visualization = { ..._lastFiveYearsVisualization.default,
    ...pivotTableOptions,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: lastFiveYearsData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('empty columns (weekly) - shown', (_, _ref35) => {
  let {
    pivotTableOptions
  } = _ref35;
  const visualization = { ..._weeklyColumnsVisualization.default,
    ...pivotTableOptions,
    hideEmptyColumns: false
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: weeklyColumnsData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('empty columns (weekly) - hidden', (_, _ref36) => {
  let {
    pivotTableOptions
  } = _ref36;
  const visualization = { ..._weeklyColumnsVisualization.default,
    ...pivotTableOptions,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: weeklyColumnsData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('empty columns + assigned cats (shown)', (_, _ref37) => {
  let {
    pivotTableOptions
  } = _ref37;
  const visualization = { ..._emptyColumnsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    hideEmptyColumns: false
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: emptyColumnsData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('empty columns + assigned cats (hidden)', (_, _ref38) => {
  let {
    pivotTableOptions
  } = _ref38;
  const visualization = { ..._emptyColumnsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: emptyColumnsData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('legend - fixed (light fill)', (_, _ref39) => {
  let {
    pivotTableOptions
  } = _ref39;
  const visualization = { ..._targetWithLegendVisualization.default,
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
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [_underAbove100LegendSet.default]
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('legend - fixed (dark fill)', (_, _ref40) => {
  let {
    pivotTableOptions
  } = _ref40;
  const visualization = { ..._targetWithLegendVisualization.default,
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
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [legendSet]
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('legend - fixed (text)', (_, _ref41) => {
  let {
    pivotTableOptions
  } = _ref41;
  const visualization = { ..._targetWithLegendVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    legendDisplayStyle: 'TEXT',
    legendSet: {
      id: _underAbove100LegendSet.default.id
    }
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [_underAbove100LegendSet.default]
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('legend - fixed (% row)', (_, _ref42) => {
  let {
    pivotTableOptions
  } = _ref42;
  const visualization = { ..._targetWithLegendVisualization.default,
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
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [_underAbove100LegendSet.default]
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('legend - by data item', (_, _ref43) => {
  let {
    pivotTableOptions
  } = _ref43;
  const visualization = { ..._targetWithLegendVisualization.default,
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
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: data,
    visualization: visualization,
    legendSets: [_underAbove100LegendSet.default, customLegendSet]
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('hierarchy - none', (_, _ref44) => {
  let {
    pivotTableOptions
  } = _ref44;
  const visualization = { ..._hierarchyVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    showHierarchy: false,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: hierarchyData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('hierarchy - rows', (_, _ref45) => {
  let {
    pivotTableOptions
  } = _ref45;
  const visualization = { ..._hierarchyVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: hierarchyData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('hierarchy - columns', (_, _ref46) => {
  let {
    pivotTableOptions
  } = _ref46;
  const visualization = { ..._hierarchyVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: _hierarchyVisualization.default.rows,
    rows: _hierarchyVisualization.default.columns,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: hierarchyData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('narrative', (_, _ref47) => {
  let {
    pivotTableOptions
  } = _ref47;
  const visualization = { ..._narrativeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: narrativeData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('narrative - data as filter', (_, _ref48) => {
  let {
    pivotTableOptions
  } = _ref48;
  const visualization = { ..._narrativeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: _narrativeVisualization.default.filters,
    filters: _narrativeVisualization.default.columns,
    rowTotals: true,
    colTotals: true
  };
  const data = { ...narrativeData,
    rows: [narrativeData.rows[0]]
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: data,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('DEGS', (_, _ref49) => {
  let {
    pivotTableOptions
  } = _ref49;
  const visualization = { ..._degsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: degsData,
    visualization: visualization
  }));
});
(0, _react.storiesOf)('PivotTable', module).add('Truncated header cell', (_, _ref50) => {
  let {
    pivotTableOptions
  } = _ref50;
  const widths = [250, 200, 500];
  const [width, setWidth] = (0, _react2.useState)(250);

  const toggleWidth = () => setWidth(currentWidth => {
    var _widths;

    return (_widths = widths[widths.indexOf(currentWidth) + 1]) !== null && _widths !== void 0 ? _widths : widths[0];
  });

  const visualization = { ..._narrativeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: _narrativeVisualization.default.filters,
    filters: _narrativeVisualization.default.columns,
    rowTotals: true,
    colTotals: true
  };
  const data = { ...narrativeData,
    rows: [narrativeData.rows[0]]
  };
  return /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      width,
      height: 600,
      marginTop: 50,
      transition: 'width 1s'
    }
  }, /*#__PURE__*/_react2.default.createElement("button", {
    onClick: toggleWidth
  }, "Toggle width"), /*#__PURE__*/_react2.default.createElement(_index.PivotTable, {
    data: data,
    visualization: visualization
  }));
});