"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../__fixtures__/SingleValue/index.js"));
var _index2 = require("../index.js");
var _baseExtraOptions$ico;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ID = 'FnYCr2EAzWS';
const {
  baseDataObj,
  layout,
  baseExtraOptions
} = _index.default[ID];
const icon = (_baseExtraOptions$ico = baseExtraOptions.icon) !== null && _baseExtraOptions$ico !== void 0 ? _baseExtraOptions$ico : '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="blue" /></svg>';
const constainerStyleBase = {
  width: 800,
  height: 800,
  border: '1px solid magenta',
  marginBottom: 14
};
const innerContainerStyle = {
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  height: '100%'
};
const numberIndicatorType = {
  name: 'Plain',
  number: true
};
const subtextIndicatorType = {
  name: 'Custom',
  displayName: 'Custom subtext',
  number: true
};
const percentIndicatorType = {
  name: 'Per cent',
  displayName: 'Per cent',
  factor: 100,
  number: false
};
const indicatorTypes = ['plain', 'percent', 'subtext'];
var _default = exports.default = {
  title: 'SingleValue'
};
const Default = () => {
  const newChartRef = (0, _react.useRef)(null);
  const newContainerRef = (0, _react.useRef)(null);
  const [dashboard, setDashboard] = (0, _react.useState)(false);
  const [showIcon, setShowIcon] = (0, _react.useState)(true);
  const [indicatorType, setIndicatorType] = (0, _react.useState)('plain');
  const [width, setWidth] = (0, _react.useState)(constainerStyleBase.width);
  const [height, setHeight] = (0, _react.useState)(constainerStyleBase.height);
  const containerStyle = (0, _react.useMemo)(() => ({
    ...constainerStyleBase,
    width,
    height
  }), [width, height]);
  (0, _react.useEffect)(() => {
    if (newContainerRef.current) {
      requestAnimationFrame(() => {
        const extraOptions = {
          ...baseExtraOptions,
          dashboard,
          icon: showIcon ? icon : undefined
        };
        const dataObj = {
          ...baseDataObj
        };
        if (indicatorType === 'plain') {
          dataObj.metaData.items[ID].indicatorType = numberIndicatorType;
        }
        if (indicatorType === 'percent') {
          dataObj.metaData.items[ID].indicatorType = percentIndicatorType;
        }
        if (indicatorType === 'subtext') {
          dataObj.metaData.items[ID].indicatorType = subtextIndicatorType;
        }
        const newVisualization = (0, _index2.createVisualization)([dataObj], layout, newContainerRef.current, extraOptions, undefined, undefined, 'highcharts');
        newChartRef.current = newVisualization.visualization;
      });
    }
  }, [containerStyle, dashboard, showIcon, indicatorType]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "width"
  }, "Width"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    name: "width",
    id: "width",
    min: "1",
    step: "5",
    onChange: event => setWidth(parseInt(event.target.value)),
    value: width.toString()
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "height"
  }, "Height"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    name: "height",
    id: "height",
    min: "1",
    step: "5",
    onChange: event => setHeight(parseInt(event.target.value)),
    value: height.toString()
  })), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    checked: dashboard,
    onChange: () => setDashboard(!dashboard),
    type: "checkbox"
  }), "\xA0Dashboard view"), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    checked: showIcon,
    onChange: () => setShowIcon(!showIcon),
    type: "checkbox"
  }), "\xA0Show icon"), /*#__PURE__*/_react.default.createElement("label", null, "Indicator type\xA0", /*#__PURE__*/_react.default.createElement("select", {
    onChange: event => setIndicatorType(event.target.value)
  }, indicatorTypes.map((type, index) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: index
    }, type);
  })))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: newContainerRef,
    style: innerContainerStyle
  }))));
};
exports.Default = Default;
Default.story = {
  name: 'default'
};