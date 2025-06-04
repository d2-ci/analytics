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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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