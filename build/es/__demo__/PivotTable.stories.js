import { Checkbox, Divider } from '@dhis2/ui';
import cloneDeep from 'lodash/cloneDeep';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { PivotTable } from '../index.js';
import { NUMBER_TYPE_COLUMN_PERCENTAGE, NUMBER_TYPE_ROW_PERCENTAGE } from '../modules/pivotTable/pivotTableConstants.js';
import avgDataResponse from './data/avgTotalAggregationType.data.json';
import avgMetadataResponse from './data/avgTotalAggregationType.metadata.json';
import avgVisualization from './data/avgTotalAggregationType.visualization.json';
import deepData from './data/deep.data.json';
import deepVisualization from './data/deep.visualization.json';
import deepWithFiltersData from './data/deepWithFilters.data.json';
import deepWithFiltersVisualization from './data/deepWithFilters.visualization.json';
import degsDataResponse from './data/degs.data.json';
import degsMetadataResponse from './data/degs.metadata.json';
import degsVisualization from './data/degs.visualization.json';
import diseaseWeeksDataResponse from './data/diseaseWeeks.data.json';
import diseaseWeeksMetadataResponse from './data/diseaseWeeks.metadata.json';
import diseaseWeeksVisualization from './data/diseaseWeeks.visualization.json';
import emptyColumnsDataResponse from './data/emptyColumns.data.json';
import emptyColumnsMetadataResponse from './data/emptyColumns.metadata.json';
import emptyColumnsVisualization from './data/emptyColumns.visualization.json';
import emptyRowsData from './data/emptyRows.data.json';
import emptyRowsVisualization from './data/emptyRows.visualization.json';
import hierarchyDataResponse from './data/hierarchy.data.json';
import hierarchyMetadataResponse from './data/hierarchy.metadata.json';
import hierarchyVisualization from './data/hierarchy.visualization.json';
import lastFiveYearsDataResponse from './data/lastFiveYears.data.json';
import lastFiveYearsMetadataResponse from './data/lastFiveYears.metadata.json';
import lastFiveYearsVisualization from './data/lastFiveYears.visualization.json';
import narrativeDataResponse from './data/narrative.data.json';
import narrativeMetadataResponse from './data/narrative.metadata.json';
import narrativeVisualization from './data/narrative.visualization.json';
import simpleDataResponse from './data/simple.data.json';
import simpleMetadataResponse from './data/simple.metadata.json';
import simpleVisualization from './data/simple.visualization.json';
import targetDataResponse from './data/target-with-legend.data.json';
import targetMetadataResponse from './data/target-with-legend.metadata.json';
import targetVisualization from './data/target-with-legend.visualization.json';
import underAbove100LegendSet from './data/under-above-100.legendSet.json';
import weeklyColumnsDataResponse from './data/weeklyColumns.data.json';
import weeklyColumnsMetadataResponse from './data/weeklyColumns.metadata.json';
import weeklyColumnsVisualization from './data/weeklyColumns.visualization.json';
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
const simpleData = combineDataWithMetadata(simpleDataResponse, simpleMetadataResponse);
const avgData = combineDataWithMetadata(avgDataResponse, avgMetadataResponse);
const emptyColumnsData = combineDataWithMetadata(emptyColumnsDataResponse, emptyColumnsMetadataResponse);
const targetData = combineDataWithMetadata(targetDataResponse, targetMetadataResponse);
const hierarchyData = combineDataWithMetadata(hierarchyDataResponse, hierarchyMetadataResponse);
const narrativeData = combineDataWithMetadata(narrativeDataResponse, narrativeMetadataResponse);
const degsData = combineDataWithMetadata(degsDataResponse, degsMetadataResponse);
const diseaseWeeksData = combineDataWithMetadata(diseaseWeeksDataResponse, diseaseWeeksMetadataResponse);
const lastFiveYearsData = combineDataWithMetadata(lastFiveYearsDataResponse, lastFiveYearsMetadataResponse);
const weeklyColumnsData = combineDataWithMetadata(weeklyColumnsDataResponse, weeklyColumnsMetadataResponse);
const PivotTableOptionsWrapper = story => {
  const [pivotTableOptions, setPivotTableOptions] = useState({
    fixColumnHeaders: false,
    fixRowHeaders: false
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Checkbox, {
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
  }), /*#__PURE__*/React.createElement(Checkbox, {
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
  }), /*#__PURE__*/React.createElement(Divider, null)), story({
    pivotTableOptions
  }));
};
export default {
  title: 'PivotTable',
  decorators: [PivotTableOptionsWrapper]
};
export const Simple = (_, _ref3) => {
  let {
    pivotTableOptions
  } = _ref3;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
Simple.story = {
  name: 'simple'
};
export const SimpleCommaDgs = (_, _ref4) => {
  let {
    pivotTableOptions
  } = _ref4;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    digitGroupSeparator: 'COMMA'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
SimpleCommaDgs.story = {
  name: 'simple - comma DGS'
};
export const SimpleTitleSubtitleFilter = (_, _ref5) => {
  let {
    pivotTableOptions
  } = _ref5;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    title: 'This is a Table',
    subtitle: "It's not a very big table"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
SimpleTitleSubtitleFilter.story = {
  name: 'simple - title / subtitle / filter'
};
export const SimpleColumn = (_, _ref6) => {
  let {
    pivotTableOptions
  } = _ref6;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    numberType: NUMBER_TYPE_COLUMN_PERCENTAGE
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
SimpleColumn.story = {
  name: 'simple - column %'
};
export const SimpleDataAsFilter = (_, _ref7) => {
  let {
    pivotTableOptions
  } = _ref7;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: simpleVisualization.filters,
    filters: simpleVisualization.columns
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
SimpleDataAsFilter.story = {
  name: 'simple - data as filter'
};
export const SimpleNoColumns = (_, _ref8) => {
  let {
    pivotTableOptions
  } = _ref8;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    colSubTotals: true,
    rowTotals: true,
    rowSubTotals: true,
    columns: [],
    filters: simpleVisualization.columns
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
SimpleNoColumns.story = {
  name: 'simple - no columns'
};
export const SimpleNoColumnsSingleCell = (_, _ref9) => {
  let {
    pivotTableOptions
  } = _ref9;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    title: 'Singular cell',
    columns: [],
    rows: simpleVisualization.columns,
    filters: []
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
SimpleNoColumnsSingleCell.story = {
  name: 'simple - no columns (single cell)'
};
export const SimpleNoColumnsDeep = (_, _ref10) => {
  let {
    pivotTableOptions
  } = _ref10;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: true,
    title: 'Deep row headers',
    columns: [],
    rows: [simpleVisualization.columns[0], simpleVisualization.rows[0]],
    filters: []
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
SimpleNoColumnsDeep.story = {
  name: 'simple - no columns (deep)'
};
export const SimpleNoColumnsLabel = (_, _ref11) => {
  let {
    pivotTableOptions
  } = _ref11;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: true,
    colTotals: true,
    colSubTotals: true,
    rowTotals: true,
    rowSubTotals: true,
    columns: [],
    filters: simpleVisualization.columns
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
SimpleNoColumnsLabel.story = {
  name: 'simple - no columns (label)'
};
export const SimpleNoRowsSmall = (_, _ref12) => {
  let {
    pivotTableOptions
  } = _ref12;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: true,
    colTotals: true,
    colSubTotals: true,
    rowTotals: true,
    rowSubTotals: true,
    rows: [],
    filters: simpleVisualization.rows
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
SimpleNoRowsSmall.story = {
  name: 'simple - no rows (small)'
};
export const SimpleNoRowsLarge = (_, _ref13) => {
  let {
    pivotTableOptions
  } = _ref13;
  const visualization = {
    ...simpleVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    colSubTotals: true,
    rowTotals: true,
    rowSubTotals: true,
    rows: [],
    columns: simpleVisualization.rows,
    filters: simpleVisualization.columns
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: simpleData,
    visualization: visualization
  }));
};
SimpleNoRowsLarge.story = {
  name: 'simple - no rows (large)'
};
export const SimpleAvgTotalAggregationTypeColumns = (_, _ref14) => {
  let {
    pivotTableOptions
  } = _ref14;
  const visualization = {
    ...avgVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    hideEmptyRows: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: avgData,
    visualization: visualization
  }));
};
SimpleAvgTotalAggregationTypeColumns.story = {
  name: 'simple - avg totalAggregationType columns'
};
export const SimpleAvgTotalAggregationTypeRows = (_, _ref15) => {
  let {
    pivotTableOptions
  } = _ref15;
  const visualization = {
    ...avgVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: avgVisualization.rows,
    rows: avgVisualization.columns,
    rowTotals: true,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: avgData,
    visualization: visualization
  }));
};
SimpleAvgTotalAggregationTypeRows.story = {
  name: 'simple - avg totalAggregationType rows'
};
export const Deep = (_, _ref16) => {
  let {
    pivotTableOptions
  } = _ref16;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: false
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
Deep.story = {
  name: 'deep'
};
export const DeepFilter = (_, _ref17) => {
  let {
    pivotTableOptions
  } = _ref17;
  const visualization = {
    ...deepWithFiltersVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: false
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepWithFiltersData,
    visualization: visualization
  }));
};
DeepFilter.story = {
  name: 'deep - filter'
};
export const DeepTitleSubtitleFilter = (_, _ref18) => {
  let {
    pivotTableOptions
  } = _ref18;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    showDimensionLabels: false,
    title: 'This is a Table',
    subtitle: "It's a rather big table"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
DeepTitleSubtitleFilter.story = {
  name: 'deep - title / subtitle / filter'
};
export const DeepDimensionLabels = (_, _ref19) => {
  let {
    pivotTableOptions
  } = _ref19;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
DeepDimensionLabels.story = {
  name: 'deep - dimension labels'
};
export const DeepSmallCompact = (_, _ref20) => {
  let {
    pivotTableOptions
  } = _ref20;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    displayDensity: 'COMPACT',
    fontSize: 'SMALL'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
DeepSmallCompact.story = {
  name: 'deep - small / compact'
};
export const DeepLargeComfortable = (_, _ref21) => {
  let {
    pivotTableOptions
  } = _ref21;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    displayDensity: 'COMFORTABLE',
    fontSize: 'LARGE'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
DeepLargeComfortable.story = {
  name: 'deep - large / comfortable'
};
export const DeepRow = (_, _ref22) => {
  let {
    pivotTableOptions
  } = _ref22;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    numberType: NUMBER_TYPE_ROW_PERCENTAGE,
    colSubTotals: true,
    rowSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
DeepRow.story = {
  name: 'deep - row %'
};
export const DeepColumn = (_, _ref23) => {
  let {
    pivotTableOptions
  } = _ref23;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    numberType: NUMBER_TYPE_COLUMN_PERCENTAGE,
    colSubTotals: true,
    rowSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
DeepColumn.story = {
  name: 'deep - column %'
};
const ResizingPivotTable = _ref24 => {
  let {
    visualization
  } = _ref24;
  const [size, setSize] = useState(() => ({
    width: 400,
    height: 300
  }));
  useEffect(() => {
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
  return /*#__PURE__*/React.createElement("div", {
    style: size
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
ResizingPivotTable.propTypes = {
  visualization: PropTypes.object.isRequired
};
export const DeepResize = (_, _ref25) => {
  let {
    pivotTableOptions
  } = _ref25;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement(ResizingPivotTable, {
    visualization: visualization
  });
};
DeepResize.story = {
  name: 'deep - resize'
};
export const DeepTotals = (_, _ref26) => {
  let {
    pivotTableOptions
  } = _ref26;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
DeepTotals.story = {
  name: 'deep - totals'
};
export const DeepSubtotals = (_, _ref27) => {
  let {
    pivotTableOptions
  } = _ref27;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
DeepSubtotals.story = {
  name: 'deep - subtotals'
};
export const DeepAllTotals = (_, _ref28) => {
  let {
    pivotTableOptions
  } = _ref28;
  const visualization = {
    ...deepVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: deepData,
    visualization: visualization
  }));
};
DeepAllTotals.story = {
  name: 'deep - all totals'
};
export const SmallEmptyRowsShown = (_, _ref29) => {
  let {
    pivotTableOptions
  } = _ref29;
  const visualization = {
    ...diseaseWeeksVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: diseaseWeeksData,
    visualization: visualization
  }));
};
SmallEmptyRowsShown.story = {
  name: 'small empty rows - shown'
};
export const SmallEmptyRowsHidden = (_, _ref30) => {
  let {
    pivotTableOptions
  } = _ref30;
  const visualization = {
    ...diseaseWeeksVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true,
    hideEmptyRows: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: diseaseWeeksData,
    visualization: visualization
  }));
};
SmallEmptyRowsHidden.story = {
  name: 'small empty rows - hidden'
};
export const EmptyRowsShown = (_, _ref31) => {
  let {
    pivotTableOptions
  } = _ref31;
  const visualization = {
    ...emptyRowsVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: emptyRowsData,
    visualization: visualization
  }));
};
EmptyRowsShown.story = {
  name: 'empty rows - shown'
};
export const EmptyRowsHidden = (_, _ref32) => {
  let {
    pivotTableOptions
  } = _ref32;
  const visualization = {
    ...emptyRowsVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    hideEmptyRows: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: emptyRowsData,
    visualization: visualization
  }));
};
EmptyRowsHidden.story = {
  name: 'empty rows - hidden'
};
export const EmptyColumnsShown = (_, _ref33) => {
  let {
    pivotTableOptions
  } = _ref33;
  const visualization = {
    ...lastFiveYearsVisualization,
    ...pivotTableOptions,
    hideEmptyColumns: false
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: lastFiveYearsData,
    visualization: visualization
  }));
};
EmptyColumnsShown.story = {
  name: 'empty columns - shown'
};
export const EmptyColumnsHidden = (_, _ref34) => {
  let {
    pivotTableOptions
  } = _ref34;
  const visualization = {
    ...lastFiveYearsVisualization,
    ...pivotTableOptions,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: lastFiveYearsData,
    visualization: visualization
  }));
};
EmptyColumnsHidden.story = {
  name: 'empty columns - hidden'
};
export const EmptyColumnsWeeklyShown = (_, _ref35) => {
  let {
    pivotTableOptions
  } = _ref35;
  const visualization = {
    ...weeklyColumnsVisualization,
    ...pivotTableOptions,
    hideEmptyColumns: false
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: weeklyColumnsData,
    visualization: visualization
  }));
};
EmptyColumnsWeeklyShown.story = {
  name: 'empty columns (weekly) - shown'
};
export const CumulativeEmptyColumnsWeeklyShown = (_, _ref36) => {
  let {
    pivotTableOptions
  } = _ref36;
  const visualization = {
    ...weeklyColumnsVisualization,
    ...pivotTableOptions,
    hideEmptyColumns: false,
    cumulativeValues: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: weeklyColumnsData,
    visualization: visualization
  }));
};
CumulativeEmptyColumnsWeeklyShown.story = {
  name: 'cumulative + empty columns (weekly) - shown'
};
export const EmptyColumnsWeeklyHidden = (_, _ref37) => {
  let {
    pivotTableOptions
  } = _ref37;
  const visualization = {
    ...weeklyColumnsVisualization,
    ...pivotTableOptions,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: weeklyColumnsData,
    visualization: visualization
  }));
};
EmptyColumnsWeeklyHidden.story = {
  name: 'empty columns (weekly) - hidden'
};
export const CumulativeEmptyColumnsWeeklyHidden = (_, _ref38) => {
  let {
    pivotTableOptions
  } = _ref38;
  const visualization = {
    ...weeklyColumnsVisualization,
    ...pivotTableOptions,
    hideEmptyColumns: true,
    cumulativeValues: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: weeklyColumnsData,
    visualization: visualization
  }));
};
CumulativeEmptyColumnsWeeklyHidden.story = {
  name: 'cumulative + empty columns (weekly) - hidden'
};
export const EmptyColumnsAssignedCatsShown = (_, _ref39) => {
  let {
    pivotTableOptions
  } = _ref39;
  const visualization = {
    ...emptyColumnsVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    hideEmptyColumns: false
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: emptyColumnsData,
    visualization: visualization
  }));
};
EmptyColumnsAssignedCatsShown.story = {
  name: 'empty columns + assigned cats (shown)'
};
export const EmptyColumnsAssignedCatsHidden = (_, _ref40) => {
  let {
    pivotTableOptions
  } = _ref40;
  const visualization = {
    ...emptyColumnsVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    hideEmptyColumns: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: emptyColumnsData,
    visualization: visualization
  }));
};
EmptyColumnsAssignedCatsHidden.story = {
  name: 'empty columns + assigned cats (hidden)'
};
export const LegendFixedLightFill = (_, _ref41) => {
  let {
    pivotTableOptions
  } = _ref41;
  const visualization = {
    ...targetVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    rowTotals: true,
    colTotals: true,
    legendDisplayStyle: 'FILL',
    legendSet: {
      id: underAbove100LegendSet.id
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [underAbove100LegendSet]
  }));
};
LegendFixedLightFill.story = {
  name: 'legend - fixed (light fill)'
};
export const LegendFixedDarkFill = (_, _ref42) => {
  let {
    pivotTableOptions
  } = _ref42;
  const visualization = {
    ...targetVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    legendDisplayStyle: 'FILL',
    legendSet: {
      id: underAbove100LegendSet.id
    }
  };
  const legendSet = cloneDeep(underAbove100LegendSet);
  legendSet.legends[0].color = '#000000';
  legendSet.legends[1].color = '#666666';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [legendSet]
  }));
};
LegendFixedDarkFill.story = {
  name: 'legend - fixed (dark fill)'
};
export const LegendFixedText = (_, _ref43) => {
  let {
    pivotTableOptions
  } = _ref43;
  const visualization = {
    ...targetVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    legendDisplayStyle: 'TEXT',
    legendSet: {
      id: underAbove100LegendSet.id
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [underAbove100LegendSet]
  }));
};
LegendFixedText.story = {
  name: 'legend - fixed (text)'
};
export const LegendFixedRow = (_, _ref44) => {
  let {
    pivotTableOptions
  } = _ref44;
  const visualization = {
    ...targetVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    numberType: NUMBER_TYPE_ROW_PERCENTAGE,
    legendDisplayStyle: 'FILL',
    legendSet: {
      id: underAbove100LegendSet.id
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: targetData,
    visualization: visualization,
    legendSets: [underAbove100LegendSet]
  }));
};
LegendFixedRow.story = {
  name: 'legend - fixed (% row)'
};
export const LegendByDataItem = (_, _ref45) => {
  let {
    pivotTableOptions
  } = _ref45;
  const visualization = {
    ...targetVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    rowSubTotals: true,
    colSubTotals: true,
    legendDisplayStrategy: 'BY_DATA_ITEM',
    legendSet: undefined
  };
  const data = cloneDeep(targetData);
  const customLegendSet = cloneDeep(underAbove100LegendSet);
  customLegendSet.id = 'TESTID';
  customLegendSet.legends[0].color = '#000000';
  customLegendSet.legends[1].color = '#666666';
  data.metaData.items[visualization.columns[0].items[1].id].legendSet = underAbove100LegendSet.id;
  data.metaData.items[visualization.columns[0].items[3].id].legendSet = customLegendSet.id;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: data,
    visualization: visualization,
    legendSets: [underAbove100LegendSet, customLegendSet]
  }));
};
LegendByDataItem.story = {
  name: 'legend - by data item'
};
export const HierarchyNone = (_, _ref46) => {
  let {
    pivotTableOptions
  } = _ref46;
  const visualization = {
    ...hierarchyVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    showHierarchy: false,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: hierarchyData,
    visualization: visualization
  }));
};
HierarchyNone.story = {
  name: 'hierarchy - none'
};
export const HierarchyRows = (_, _ref47) => {
  let {
    pivotTableOptions
  } = _ref47;
  const visualization = {
    ...hierarchyVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: hierarchyData,
    visualization: visualization
  }));
};
HierarchyRows.story = {
  name: 'hierarchy - rows'
};
export const HierarchyColumns = (_, _ref48) => {
  let {
    pivotTableOptions
  } = _ref48;
  const visualization = {
    ...hierarchyVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: hierarchyVisualization.rows,
    rows: hierarchyVisualization.columns,
    colTotals: true,
    rowTotals: true,
    colSubTotals: true,
    rowSubTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: hierarchyData,
    visualization: visualization
  }));
};
HierarchyColumns.story = {
  name: 'hierarchy - columns'
};
export const Narrative = (_, _ref49) => {
  let {
    pivotTableOptions
  } = _ref49;
  const visualization = {
    ...narrativeVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    rowTotals: true,
    colTotals: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: narrativeData,
    visualization: visualization
  }));
};
Narrative.story = {
  name: 'narrative'
};
export const NarrativeDataAsFilter = (_, _ref50) => {
  let {
    pivotTableOptions
  } = _ref50;
  const visualization = {
    ...narrativeVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: narrativeVisualization.filters,
    filters: narrativeVisualization.columns,
    rowTotals: true,
    colTotals: true
  };
  const data = {
    ...narrativeData,
    rows: [narrativeData.rows[0]]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: data,
    visualization: visualization
  }));
};
NarrativeDataAsFilter.story = {
  name: 'narrative - data as filter'
};
export const Degs = (_, _ref51) => {
  let {
    pivotTableOptions
  } = _ref51;
  const visualization = {
    ...degsVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: degsData,
    visualization: visualization
  }));
};
Degs.story = {
  name: 'DEGS'
};
export const TruncatedHeaderCell = (_, _ref52) => {
  let {
    pivotTableOptions
  } = _ref52;
  const widths = [250, 200, 500];
  const [width, setWidth] = useState(250);
  const toggleWidth = () => setWidth(currentWidth => {
    var _widths;
    return (_widths = widths[widths.indexOf(currentWidth) + 1]) !== null && _widths !== void 0 ? _widths : widths[0];
  });
  const visualization = {
    ...narrativeVisualization,
    ...visualizationReset,
    ...pivotTableOptions,
    columns: narrativeVisualization.filters,
    filters: narrativeVisualization.columns,
    rowTotals: true,
    colTotals: true
  };
  const data = {
    ...narrativeData,
    rows: [narrativeData.rows[0]]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: 600,
      marginTop: 50,
      transition: 'width 1s'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleWidth
  }, "Toggle width"), /*#__PURE__*/React.createElement(PivotTable, {
    data: data,
    visualization: visualization
  }));
};
TruncatedHeaderCell.story = {
  name: 'Truncated header cell'
};