import { Checkbox, Divider } from '@dhis2/ui';
import React, { useState } from 'react';
import { PivotTable } from '../index.js';
import booleanData from './data/event/boolean.data.json';
import booleanVisualization from './data/event/boolean.visualization.json';
import numericLegendsetData from './data/event/numeric-legendset.data.json';
import numericLegendsetVisualization from './data/event/numeric-legendset.visualization.json';
import numericData from './data/event/numeric.data.json';
import numericVisualization from './data/event/numeric.visualization.json';
import optionsetData from './data/event/optionset.data.json';
import optionsetVisualization from './data/event/optionset.visualization.json';
import yesonlyData from './data/event/yesonly.data.json';
import yesonlyVisualization from './data/event/yesonly.visualization.json';
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
export const Numeric = (_, _ref3) => {
  let {
    pivotTableOptions
  } = _ref3;
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
    data: numericData,
    visualization: visualization
  }));
};
Numeric.story = {
  name: 'Numeric'
};
export const NumericLegendset = (_, _ref4) => {
  let {
    pivotTableOptions
  } = _ref4;
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
export const Optionset = (_, _ref5) => {
  let {
    pivotTableOptions
  } = _ref5;
  const visualization = {
    ...optionsetVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: optionsetData,
    visualization: visualization
  }));
};
Optionset.story = {
  name: 'Optionset'
};
export const Boolean = (_, _ref6) => {
  let {
    pivotTableOptions
  } = _ref6;
  const visualization = {
    ...booleanVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: booleanData,
    visualization: visualization
  }));
};
Boolean.story = {
  name: 'Boolean'
};
export const Yesonly = (_, _ref7) => {
  let {
    pivotTableOptions
  } = _ref7;
  const visualization = {
    ...yesonlyVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: yesonlyData,
    visualization: visualization
  }));
};
Yesonly.story = {
  name: 'Boolean'
};