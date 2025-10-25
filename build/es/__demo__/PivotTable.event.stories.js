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
import integerDataHideNa from './data/event/integer.data.hidena.json';
import integerData from './data/event/integer.data.json';
import integerVisualization from './data/event/integer.visualization.json';
import legendsetDataHideNa from './data/event/legendset.data.hidena.json';
import legendsetData from './data/event/legendset.data.json';
import legendsetVisualization from './data/event/legendset.visualization.json';
import optionsetDataHideNa from './data/event/optionset.data.hidena.json';
import optionsetData from './data/event/optionset.data.json';
import optionsetVisualization from './data/event/optionset.visualization.json';
import timeDataHideNa from './data/event/time.data.hidena.json';
import timeData from './data/event/time.data.json';
import timeVisualization from './data/event/time.visualization.json';
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
export const TypeBooleanNA = (_, {
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
TypeBooleanNA.storyName = 'Boolean N/A';
export const TypeBoolean = (_, {
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
TypeBoolean.storyName = 'Boolean';
export const TypeDateNA = (_, {
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
TypeDateNA.storyName = 'Date N/A';
export const TypeDate = (_, {
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
TypeDate.storyName = 'Date';
export const TypeDatetimeNA = (_, {
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
TypeDatetimeNA.storyName = 'Datetime N/A';
export const TypeDatetime = (_, {
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
TypeDatetime.storyName = 'Datetime';
export const TypeLegendsetNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...legendsetVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: legendsetData,
    visualization: visualization
  }));
};
TypeLegendsetNA.storyName = 'Legendset N/A';
export const TypeLegendset = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...legendsetVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: legendsetDataHideNa,
    visualization: visualization
  }));
};
TypeLegendset.storyName = 'Legendset';
export const TypeNumericNA = (_, {
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
TypeNumericNA.storyName = 'Numeric N/A';
export const TypeNumeric = (_, {
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
TypeNumeric.storyName = 'Numeric';
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
OptionsetNA.storyName = 'Optionset N/A';
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
Optionset.storyName = 'Optionset';
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
TextNA.storyName = 'Text N/A';
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
Text.storyName = 'Text';
export const TimeNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...timeVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: timeData,
    visualization: visualization
  }));
};
TimeNA.storyName = 'Time N/A';
export const Time = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ...timeVisualization,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(PivotTable, {
    data: timeDataHideNa,
    visualization: visualization
  }));
};
Time.storyName = 'Time';
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
YesonlyNA.storyName = 'Yesonly N/A';
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
Yesonly.storyName = 'Yesonly';