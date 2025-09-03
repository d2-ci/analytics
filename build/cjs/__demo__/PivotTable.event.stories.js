"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.YesonlyNA = exports.Yesonly = exports.TypeNumericNA = exports.TypeNumeric = exports.TypeLegendsetNA = exports.TypeLegendset = exports.TypeDatetimeNA = exports.TypeDatetime = exports.TypeDateNA = exports.TypeDate = exports.TypeBooleanNA = exports.TypeBoolean = exports.TimeNA = exports.Time = exports.TextNA = exports.Text = exports.OptionsetNA = exports.Optionset = void 0;
var _ui = require("@dhis2/ui");
var _react = _interopRequireWildcard(require("react"));
var _index = require("../index.js");
var _booleanDataHidena = _interopRequireDefault(require("./data/event/boolean.data.hidena.json"));
var _booleanData = _interopRequireDefault(require("./data/event/boolean.data.json"));
var _booleanVisualization = _interopRequireDefault(require("./data/event/boolean.visualization.json"));
var _dateDataHidena = _interopRequireDefault(require("./data/event/date.data.hidena.json"));
var _dateData = _interopRequireDefault(require("./data/event/date.data.json"));
var _dateVisualization = _interopRequireDefault(require("./data/event/date.visualization.json"));
var _datetimeDataHidena = _interopRequireDefault(require("./data/event/datetime.data.hidena.json"));
var _datetimeData = _interopRequireDefault(require("./data/event/datetime.data.json"));
var _datetimeVisualization = _interopRequireDefault(require("./data/event/datetime.visualization.json"));
var _emailDataHidena = _interopRequireDefault(require("./data/event/email.data.hidena.json"));
var _emailData = _interopRequireDefault(require("./data/event/email.data.json"));
var _emailVisualization = _interopRequireDefault(require("./data/event/email.visualization.json"));
var _integerDataHidena = _interopRequireDefault(require("./data/event/integer.data.hidena.json"));
var _integerData = _interopRequireDefault(require("./data/event/integer.data.json"));
var _integerVisualization = _interopRequireDefault(require("./data/event/integer.visualization.json"));
var _legendsetDataHidena = _interopRequireDefault(require("./data/event/legendset.data.hidena.json"));
var _legendsetData = _interopRequireDefault(require("./data/event/legendset.data.json"));
var _legendsetVisualization = _interopRequireDefault(require("./data/event/legendset.visualization.json"));
var _optionsetDataHidena = _interopRequireDefault(require("./data/event/optionset.data.hidena.json"));
var _optionsetData = _interopRequireDefault(require("./data/event/optionset.data.json"));
var _optionsetVisualization = _interopRequireDefault(require("./data/event/optionset.visualization.json"));
var _timeDataHidena = _interopRequireDefault(require("./data/event/time.data.hidena.json"));
var _timeData = _interopRequireDefault(require("./data/event/time.data.json"));
var _timeVisualization = _interopRequireDefault(require("./data/event/time.visualization.json"));
var _yesonlyDataHidena = _interopRequireDefault(require("./data/event/yesonly.data.hidena.json"));
var _yesonlyData = _interopRequireDefault(require("./data/event/yesonly.data.json"));
var _yesonlyVisualization = _interopRequireDefault(require("./data/event/yesonly.visualization.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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
  const [pivotTableOptions, setPivotTableOptions] = (0, _react.useState)({
    fixColumnHeaders: false,
    fixRowHeaders: false
  });
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
    label: "Use fixed column headers",
    checked: pivotTableOptions.fixColumnHeaders,
    onChange: ({
      checked
    }) => setPivotTableOptions({
      ...pivotTableOptions,
      fixColumnHeaders: checked
    }),
    dense: true
  }), /*#__PURE__*/_react.default.createElement(_ui.Checkbox, {
    label: "Use fixed row headers",
    checked: pivotTableOptions.fixRowHeaders,
    onChange: ({
      checked
    }) => setPivotTableOptions({
      ...pivotTableOptions,
      fixRowHeaders: checked
    }),
    dense: true
  }), /*#__PURE__*/_react.default.createElement(_ui.Divider, null)), story({
    pivotTableOptions
  }));
};
var _default = exports.default = {
  title: 'PivotTable (event)',
  decorators: [PivotTableOptionsWrapper]
};
const TypeBooleanNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._booleanVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _booleanData.default,
    visualization: visualization
  }));
};
exports.TypeBooleanNA = TypeBooleanNA;
TypeBooleanNA.storyName = 'Boolean N/A';
const TypeBoolean = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._booleanVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _booleanDataHidena.default,
    visualization: visualization
  }));
};
exports.TypeBoolean = TypeBoolean;
TypeBoolean.storyName = 'Boolean';
const TypeDateNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._dateVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _dateData.default,
    visualization: visualization
  }));
};
exports.TypeDateNA = TypeDateNA;
TypeDateNA.storyName = 'Date N/A';
const TypeDate = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._dateVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _dateDataHidena.default,
    visualization: visualization
  }));
};
exports.TypeDate = TypeDate;
TypeDate.storyName = 'Date';
const TypeDatetimeNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._datetimeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _datetimeData.default,
    visualization: visualization
  }));
};
exports.TypeDatetimeNA = TypeDatetimeNA;
TypeDatetimeNA.storyName = 'Datetime N/A';
const TypeDatetime = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._datetimeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _datetimeDataHidena.default,
    visualization: visualization
  }));
};
exports.TypeDatetime = TypeDatetime;
TypeDatetime.storyName = 'Datetime';
const TypeLegendsetNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._legendsetVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _legendsetData.default,
    visualization: visualization
  }));
};
exports.TypeLegendsetNA = TypeLegendsetNA;
TypeLegendsetNA.storyName = 'Legendset N/A';
const TypeLegendset = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._legendsetVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _legendsetDataHidena.default,
    visualization: visualization
  }));
};
exports.TypeLegendset = TypeLegendset;
TypeLegendset.storyName = 'Legendset';
const TypeNumericNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._integerVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _integerData.default,
    visualization: visualization
  }));
};
exports.TypeNumericNA = TypeNumericNA;
TypeNumericNA.storyName = 'Numeric N/A';
const TypeNumeric = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._integerVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _integerDataHidena.default,
    visualization: visualization
  }));
};
exports.TypeNumeric = TypeNumeric;
TypeNumeric.storyName = 'Numeric';
const OptionsetNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._optionsetVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _optionsetData.default,
    visualization: visualization
  }));
};
exports.OptionsetNA = OptionsetNA;
OptionsetNA.storyName = 'Optionset N/A';
const Optionset = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._optionsetVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _optionsetDataHidena.default,
    visualization: visualization
  }));
};
exports.Optionset = Optionset;
Optionset.storyName = 'Optionset';
const TextNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._emailVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _emailData.default,
    visualization: visualization
  }));
};
exports.TextNA = TextNA;
TextNA.storyName = 'Text N/A';
const Text = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._emailVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _emailDataHidena.default,
    visualization: visualization
  }));
};
exports.Text = Text;
Text.storyName = 'Text';
const TimeNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._timeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _timeData.default,
    visualization: visualization
  }));
};
exports.TimeNA = TimeNA;
TimeNA.storyName = 'Time N/A';
const Time = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._timeVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _timeDataHidena.default,
    visualization: visualization
  }));
};
exports.Time = Time;
Time.storyName = 'Time';
const YesonlyNA = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._yesonlyVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _yesonlyData.default,
    visualization: visualization
  }));
};
exports.YesonlyNA = YesonlyNA;
YesonlyNA.storyName = 'Yesonly N/A';
const Yesonly = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._yesonlyVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _yesonlyDataHidena.default,
    visualization: visualization
  }));
};
exports.Yesonly = Yesonly;
Yesonly.storyName = 'Yesonly';