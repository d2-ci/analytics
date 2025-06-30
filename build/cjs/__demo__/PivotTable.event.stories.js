"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NumericLegendset = exports.Numeric = void 0;
var _ui = require("@dhis2/ui");
var _react = _interopRequireWildcard(require("react"));
var _index = require("../index.js");
var _numericLegendsetData = _interopRequireDefault(require("./data/event/numeric-legendset.data.json"));
var _numericLegendsetVisualization = _interopRequireDefault(require("./data/event/numeric-legendset.visualization.json"));
var _numericData = _interopRequireDefault(require("./data/event/numeric.data.json"));
var _numericVisualization = _interopRequireDefault(require("./data/event/numeric.visualization.json"));
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
const NumericLegendset = (_, _ref3) => {
  let {
    pivotTableOptions
  } = _ref3;
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
const Numeric = (_, _ref4) => {
  let {
    pivotTableOptions
  } = _ref4;
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
    data: collectAndAddMetadata(_numericData.default, 0),
    visualization: visualization
  }));
};
exports.Numeric = Numeric;
NumericLegendset.story = {
  name: 'Numeric with legendset'
};