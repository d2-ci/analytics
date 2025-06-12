"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _scatterPlotData = require("../__fixtures__/scatterPlotData.js");
var _index = require("../index.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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