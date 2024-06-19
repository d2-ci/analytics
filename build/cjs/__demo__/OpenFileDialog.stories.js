"use strict";

var _appRuntime = require("@dhis2/app-runtime");
var _react = require("@storybook/react");
var _react2 = _interopRequireDefault(require("react"));
var _OpenFileDialog = require("../components/OpenFileDialog/OpenFileDialog.js");
var _visTypes = require("../modules/visTypes.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const configMock = {
  baseUrl: 'https://debug.dhis2.org/dev',
  apiVersion: 37
};
const user = {
  displayName: 'John Traore',
  id: 'xE7jOejl9FI',
  username: 'admin'
};
const onFileSelect = id => alert(`Opening ${id}`);
const filterVisTypesWithGroupsAndDivider = [{
  type: _visTypes.VIS_TYPE_GROUP_ALL
}, {
  type: _visTypes.VIS_TYPE_GROUP_CHARTS,
  insertDivider: true
}, {
  type: _visTypes.VIS_TYPE_PIVOT_TABLE
}, {
  type: _visTypes.VIS_TYPE_COLUMN
}, {
  type: _visTypes.VIS_TYPE_BAR
}];
(0, _react.storiesOf)('OpenFileDialog', module).add('List of visualizations with vis type filter and divider (no default vis type)', () => /*#__PURE__*/_react2.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react2.default.createElement(_OpenFileDialog.OpenFileDialog, {
  type: "visualization",
  filterVisTypes: filterVisTypesWithGroupsAndDivider,
  onClose: Function.prototype,
  onFileSelect: onFileSelect,
  onNew: Function.prototype,
  open: true,
  currentUser: user
})));
(0, _react.storiesOf)('OpenFileDialog', module).add('List of maps (no vis type filter)', () => /*#__PURE__*/_react2.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react2.default.createElement(_OpenFileDialog.OpenFileDialog, {
  type: "map",
  onClose: Function.prototype,
  onFileSelect: onFileSelect,
  onNew: Function.prototype,
  open: true,
  currentUser: user
})));
const filterVisTypesWithDisabled = [{
  type: _visTypes.VIS_TYPE_PIVOT_TABLE,
  disabled: true
}, {
  type: _visTypes.VIS_TYPE_LINE_LIST
}];
(0, _react.storiesOf)('OpenFileDialog', module).add('List of event visualizations with vis type filter, disabled type and default vis type', () => /*#__PURE__*/_react2.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react2.default.createElement(_OpenFileDialog.OpenFileDialog, {
  type: "eventVisualization",
  filterVisTypes: filterVisTypesWithDisabled,
  defaultFilterVisType: _visTypes.VIS_TYPE_LINE_LIST,
  onClose: Function.prototype,
  onFileSelect: onFileSelect,
  onNew: Function.prototype,
  open: true,
  currentUser: user
})));
const filterVisTypesWithGroupDividerAndDisabled = [{
  type: _visTypes.VIS_TYPE_GROUP_ALL
}, {
  type: _visTypes.VIS_TYPE_BAR,
  insertDivider: true
}, {
  type: _visTypes.VIS_TYPE_COLUMN,
  disabled: true
}];
(0, _react.storiesOf)('OpenFileDialog', module).add('List of visualizations with vis type filter with group type, divider and disabled option (no default vis type)', () => /*#__PURE__*/_react2.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react2.default.createElement(_OpenFileDialog.OpenFileDialog, {
  type: "visualization",
  filterVisTypes: filterVisTypesWithGroupDividerAndDisabled,
  onClose: Function.prototype,
  onFileSelect: onFileSelect,
  onNew: Function.prototype,
  open: true,
  currentUser: user
})));
(0, _react.storiesOf)('OpenFileDialog', module).add('No connection', () => /*#__PURE__*/_react2.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react2.default.createElement(_OpenFileDialog.OpenFileDialog, {
  type: "map",
  onClose: Function.prototype,
  onFileSelect: onFileSelect,
  onNew: Function.prototype,
  open: true,
  currentUser: user
})));