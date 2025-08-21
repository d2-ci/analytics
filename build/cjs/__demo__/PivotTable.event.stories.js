"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Yesonly = exports.OptionsetsNonUniqueCodes = exports.Optionset = exports.NumericLegendset = exports.Numeric = exports.Datetime = exports.Date = exports.Boolean = void 0;
var _ui = require("@dhis2/ui");
var _react = _interopRequireWildcard(require("react"));
var _index = require("../index.js");
var _booleanData = _interopRequireDefault(require("./data/event/boolean.data.json"));
var _booleanVisualization = _interopRequireDefault(require("./data/event/boolean.visualization.json"));
var _dateData = _interopRequireDefault(require("./data/event/date.data.json"));
var _dateVisualization = _interopRequireDefault(require("./data/event/date.visualization.json"));
var _datetimeData = _interopRequireDefault(require("./data/event/datetime.data.json"));
var _datetimeVisualization = _interopRequireDefault(require("./data/event/datetime.visualization.json"));
var _numericLegendsetData = _interopRequireDefault(require("./data/event/numeric-legendset.data.json"));
var _numericLegendsetVisualization = _interopRequireDefault(require("./data/event/numeric-legendset.visualization.json"));
var _numericData = _interopRequireDefault(require("./data/event/numeric.data.json"));
var _numericVisualization = _interopRequireDefault(require("./data/event/numeric.visualization.json"));
var _optionsetData = _interopRequireDefault(require("./data/event/optionset.data.json"));
var _optionsetVisualization = _interopRequireDefault(require("./data/event/optionset.visualization.json"));
var _optionsetsData = _interopRequireDefault(require("./data/event/optionsets.data.json"));
var _optionsetsVisualization = _interopRequireDefault(require("./data/event/optionsets.visualization.json"));
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
  title: 'PivotTable (event enrollment)',
  decorators: [PivotTableOptionsWrapper]
};
const Date = (_, {
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
exports.Date = Date;
Date.story = {
  name: 'Date'
};
const Datetime = (_, {
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
exports.Datetime = Datetime;
Datetime.story = {
  name: 'Datetime'
};
const Numeric = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._numericVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _numericData.default,
    visualization: visualization
  }));
};
exports.Numeric = Numeric;
Numeric.story = {
  name: 'Numeric'
};
const NumericLegendset = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._numericLegendsetVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _numericLegendsetData.default,
    visualization: visualization
  }));
};
exports.NumericLegendset = NumericLegendset;
NumericLegendset.story = {
  name: 'Numeric with legendset'
};
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
    data: _optionsetData.default,
    visualization: visualization
  }));
};
exports.Optionset = Optionset;
Optionset.story = {
  name: 'Optionset'
};
const OptionsetsNonUniqueCodes = (_, {
  pivotTableOptions
}) => {
  const visualization = {
    ..._optionsetsVisualization.default,
    ...visualizationReset,
    ...pivotTableOptions
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 600
    }
  }, /*#__PURE__*/_react.default.createElement(_index.PivotTable, {
    data: _optionsetsData.default,
    visualization: visualization
  }));
};
exports.OptionsetsNonUniqueCodes = OptionsetsNonUniqueCodes;
OptionsetsNonUniqueCodes.story = {
  name: 'Optionset, non-unique codes'
};
const Boolean = (_, {
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
exports.Boolean = Boolean;
Boolean.story = {
  name: 'Boolean'
};
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
    data: _yesonlyData.default,
    visualization: visualization
  }));
};
exports.Yesonly = Yesonly;
Yesonly.story = {
  name: 'Boolean'
};