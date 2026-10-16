"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithInfoBoxMessage = exports.NoneSelected = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _appServiceConfig = require("@dhis2/app-service-config");
var _react = _interopRequireWildcard(require("react"));
var _DataDimension = _interopRequireDefault(require("../components/DataDimension/DataDimension.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Wrapper = story => /*#__PURE__*/_react.default.createElement(_appServiceConfig.ConfigProvider, {
  config: {
    serverVersion: {
      major: 2,
      minor: 41
    }
  }
}, /*#__PURE__*/_react.default.createElement(_appRuntime.DataProvider, {
  baseUrl: "https://test.e2e.dhis2.org/anly-42",
  apiVersion: "42"
}, story()));
var _default = exports.default = {
  title: 'DataDimension',
  decorators: [Wrapper]
};
const NoneSelected = () => {
  const [selected, setSelected] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(_DataDimension.default, {
    displayNameProp: "displayName",
    selectedDimensions: selected,
    onSelect: response => setSelected(response.items)
  });
};
exports.NoneSelected = NoneSelected;
NoneSelected.story = {
  name: 'None selected'
};
const WithInfoBoxMessage = () => {
  const [selected, setSelected] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(_DataDimension.default, {
    displayNameProp: "displayName",
    selectedDimensions: selected,
    onSelect: response => setSelected(response.items),
    infoBoxMessage: 'Test message showing in the info box'
  });
};
exports.WithInfoBoxMessage = WithInfoBoxMessage;
WithInfoBoxMessage.story = {
  name: 'With info box message'
};