"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _scatterPlotData = require("../__fixtures__/scatterPlotData.js");
var _index = require("../index.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
var _default = exports.default = {
  title: 'ScatterPlot'
};
const Default = () => {
  const ref = (0, _react.useRef)(null);
  const [chart, setChart] = (0, _react.useState)(null);
  const exportToPdf = (0, _react.useCallback)(() => {
    chart.update({
      exporting: {
        chartOptions: {
          isPdfExport: true
        }
      }
    });
    chart.exportChartLocal({
      filename: 'PDF export',
      type: 'application/pdf'
    });
  }, [chart]);
  (0, _react.useEffect)(() => {
    const obj = (0, _index.createVisualization)(_scatterPlotData.responses, _scatterPlotData.visualization, ref.current, _scatterPlotData.extraOptions, undefined, undefined, 'highcharts');
    setChart(obj.visualization);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, chart && /*#__PURE__*/_react.default.createElement("button", {
    onClick: exportToPdf
  }, "Export PDF"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 800,
      height: 800,
      border: '2px solid magenta'
    },
    ref: ref
  }));
};
exports.Default = Default;