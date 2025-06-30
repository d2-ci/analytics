import { Checkbox, Divider } from '@dhis2/ui';
import React, { useState } from 'react';
import { PivotTable } from '../index.js';
import numericLegendsetData from './data/event/numeric-legendset.data.json';
import numericLegendsetVisualization from './data/event/numeric-legendset.visualization.json';
import numericData from './data/event/numeric.data.json';
import numericVisualization from './data/event/numeric.visualization.json';
const visualizationReset = {
  colTotals: false,
  rowTotals: false,
  colSubTotals: false,
  rowSubTotals: false,
  hideEmptyColumns: false,
  hideEmptyRows: false,
  hideNaData: false
};
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
  title: 'PivotTable (event enrollment)',
  decorators: [PivotTableOptionsWrapper]
};
const getNumericItems = (rows, index) => [...new Set(rows.map(r => r[index]))].sort((a, b) => Number(a) - Number(b));
const getItemMetadata = items => items.reduce((md, item) => {
  md[item] = {
    name: item
  };
  return md;
}, {});
const collectAndAddMetadata = (data, index) => {
  const modifiedData = {
    ...data
  };
  const headerId = data.headers[index].name;

  // collect values and use as items
  const numericItems = getNumericItems(modifiedData.rows, index);
  modifiedData.metaData.dimensions[headerId] = numericItems;

  // add metadata for numeric items
  modifiedData.metaData.items = {
    ...modifiedData.metaData.items,
    ...getItemMetadata(numericItems)
  };
  return modifiedData;
};
export const NumericLegendset = (_, _ref3) => {
  let {
    pivotTableOptions
  } = _ref3;
  const visualization = {
    ...numericLegendsetVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: numericLegendsetData,
    visualization: visualization
  }));
};
NumericLegendset.story = {
  name: 'Numeric with legendset'
};
export const Numeric = (_, _ref4) => {
  let {
    pivotTableOptions
  } = _ref4;
  const visualization = {
    ...numericVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: collectAndAddMetadata(numericData, 0),
    visualization: visualization
  }));
};
NumericLegendset.story = {
  name: 'Numeric with legendset'
};