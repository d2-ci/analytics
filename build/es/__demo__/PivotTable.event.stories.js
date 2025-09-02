import { Checkbox, Divider } from '@dhis2/ui';
import React, { useState } from 'react';
import { PivotTable } from '../index.js';
import booleanDataHideNa from './data/event/boolean.data.hidena.json';
import booleanData from './data/event/boolean.data.json';
import booleanVisualization from './data/event/boolean.visualization.json';
import dateDataHideNa from './data/event/date.data.hidena.json';
import dateData from './data/event/date.data.json';
import dateVisualization from './data/event/date.visualization.json';
import datetimeDataHideNa from './data/event/datetime.data.hidena.json';
import datetimeData from './data/event/datetime.data.json';
import datetimeVisualization from './data/event/datetime.visualization.json';
import emailDataHideNa from './data/event/email.data.hidena.json';
import emailData from './data/event/email.data.json';
import emailVisualization from './data/event/email.visualization.json';
import integerLegendsetDataHideNa from './data/event/integer-legendset.data.hidena.json';
import integerLegendsetData from './data/event/integer-legendset.data.json';
import integerLegendsetVisualization from './data/event/integer-legendset.visualization.json';
import integerDataHideNa from './data/event/integer.data.hidena.json';
import integerData from './data/event/integer.data.json';
import integerVisualization from './data/event/integer.visualization.json';
import optionsetDataHideNa from './data/event/optionset.data.hidena.json';
import optionsetData from './data/event/optionset.data.json';
import optionsetVisualization from './data/event/optionset.visualization.json';
import yesonlyDataHideNa from './data/event/yesonly.data.hidena.json';
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
    onChange: ({
      checked
    }) => setPivotTableOptions({
      ...pivotTableOptions,
      fixColumnHeaders: checked
    }),
    dense: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Use fixed row headers",
    checked: pivotTableOptions.fixRowHeaders,
    onChange: ({
      checked
    }) => setPivotTableOptions({
      ...pivotTableOptions,
      fixRowHeaders: checked
    }),
    dense: true
  }), /*#__PURE__*/React.createElement(Divider, null)), story({
    pivotTableOptions
  }));
};
export default {
  title: 'PivotTable (event)',
  decorators: [PivotTableOptionsWrapper]
};
export const BooleanNA = (_, {
  pivotTableOptions
}) => {
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
BooleanNA.story = {
  name: 'BooleanNA'
};
export const Boolean = (_, {
  pivotTableOptions
}) => {
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
    data: booleanDataHideNa,
    visualization: visualization
  }));
};
Boolean.story = {
  name: 'Boolean'
};
export const DateNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...dateVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: dateData,
    visualization: visualization
  }));
};
DateNA.story = {
  name: 'DateNA'
};
export const Date = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...dateVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: dateDataHideNa,
    visualization: visualization
  }));
};
Date.story = {
  name: 'Date'
};
export const DatetimeNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...datetimeVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: datetimeData,
    visualization: visualization
  }));
};
DatetimeNA.story = {
  name: 'DatetimeNA'
};
export const Datetime = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...datetimeVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: datetimeDataHideNa,
    visualization: visualization
  }));
};
Datetime.story = {
  name: 'Datetime'
};
export const NumericNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...integerVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: integerData,
    visualization: visualization
  }));
};
NumericNA.story = {
  name: 'NumericNA'
};
export const Numeric = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...integerVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: integerDataHideNa,
    visualization: visualization
  }));
};
Numeric.story = {
  name: 'Numeric'
};
export const NumericLegendsetNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...integerLegendsetVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: integerLegendsetData,
    visualization: visualization
  }));
};
NumericLegendsetNA.story = {
  name: 'Numeric with legendset NA'
};
export const NumericLegendset = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...integerLegendsetVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: integerLegendsetDataHideNa,
    visualization: visualization
  }));
};
NumericLegendset.story = {
  name: 'Numeric with legendset'
};
export const OptionsetNA = (_, {
  pivotTableOptions
}) => {
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
OptionsetNA.story = {
  name: 'OptionsetNA'
};
export const Optionset = (_, {
  pivotTableOptions
}) => {
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
    data: optionsetDataHideNa,
    visualization: visualization
  }));
};
Optionset.story = {
  name: 'Optionset'
};
export const TextNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...emailVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: emailData,
    visualization: visualization
  }));
};
TextNA.story = {
  name: 'TextNA'
};
export const Text = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...emailVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: emailDataHideNa,
    visualization: visualization
  }));
};
Text.story = {
  name: 'Text'
};
export const YesonlyNA = (_, {
  pivotTableOptions
}) => {
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
YesonlyNA.story = {
  name: 'YesonlyNA'
};
export const Yesonly = (_, {
  pivotTableOptions
}) => {
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
    data: yesonlyDataHideNa,
    visualization: visualization
  }));
};
Yesonly.story = {
  name: 'Boolean'
};