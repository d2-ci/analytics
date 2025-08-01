"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Yesonly = exports.Optionset = exports.NumericLegendset = exports.Numeric = exports.Boolean = void 0;
var _ui = require("@dhis2/ui");
var _react = _interopRequireWildcard(require("react"));
var _index = require("../index.js");
var _booleanData = _interopRequireDefault(require("./data/event/boolean.data.json"));
var _booleanVisualization = _interopRequireDefault(require("./data/event/boolean.visualization.json"));
var _numericLegendsetData = _interopRequireDefault(require("./data/event/numeric-legendset.data.json"));
var _numericLegendsetVisualization = _interopRequireDefault(require("./data/event/numeric-legendset.visualization.json"));
var _numericData = _interopRequireDefault(require("./data/event/numeric.data.json"));
var _numericVisualization = _interopRequireDefault(require("./data/event/numeric.visualization.json"));
var _optionsetData = _interopRequireDefault(require("./data/event/optionset.data.json"));
var _optionsetVisualization = _interopRequireDefault(require("./data/event/optionset.visualization.json"));
var _yesonlyData = _interopRequireDefault(require("./data/event/yesonly.data.json"));
var _yesonlyVisualization = _interopRequireDefault(require("./data/event/yesonly.visualization.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
  title: 'PivotTable (event enrollment)',
  decorators: [PivotTableOptionsWrapper]
};
const Numeric = (_, _ref3) => {
  let {
    pivotTableOptions
  } = _ref3;
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
const NumericLegendset = (_, _ref4) => {
  let {
    pivotTableOptions
  } = _ref4;
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
const Optionset = (_, _ref5) => {
  let {
    pivotTableOptions
  } = _ref5;
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
const Boolean = (_, _ref6) => {
  let {
    pivotTableOptions
  } = _ref6;
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
const Yesonly = (_, _ref7) => {
  let {
    pivotTableOptions
  } = _ref7;
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