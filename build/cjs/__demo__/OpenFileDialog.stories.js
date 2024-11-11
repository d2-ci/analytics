"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NoConnection = exports.ListOfVisualizationsWithVisTypeFilterWithGroupTypeDividerAndDisabledOptionNoDefaultVisType = exports.ListOfVisualizationsWithVisTypeFilterAndDividerNoDefaultVisType = exports.ListOfMapsNoVisTypeFilter = exports.ListOfEventVisualizationsWithVisTypeFilterDisabledTypeAndDefaultVisType = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _react = _interopRequireDefault(require("react"));
var _OpenFileDialog = require("../components/OpenFileDialog/OpenFileDialog.js");
var _visTypes = require("../modules/visTypes.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Wrapper = story => /*#__PURE__*/_react.default.createElement(_appRuntime.DataProvider, {
  baseUrl: "https://test.e2e.dhis2.org/analytics-41dev/",
  apiVersion: "41"
}, story());
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
var _default = exports.default = {
  title: 'OpenFileDialog',
  decorators: [Wrapper]
};
const ListOfVisualizationsWithVisTypeFilterAndDividerNoDefaultVisType = () => /*#__PURE__*/_react.default.createElement(_OpenFileDialog.OpenFileDialog, {
  type: "visualization",
  filterVisTypes: filterVisTypesWithGroupsAndDivider,
  onClose: Function.prototype,
  onFileSelect: onFileSelect,
  onNew: Function.prototype,
  open: true,
  currentUser: user
});
exports.ListOfVisualizationsWithVisTypeFilterAndDividerNoDefaultVisType = ListOfVisualizationsWithVisTypeFilterAndDividerNoDefaultVisType;
ListOfVisualizationsWithVisTypeFilterAndDividerNoDefaultVisType.story = {
  name: 'List of visualizations with vis type filter and divider (no default vis type)'
};
const ListOfMapsNoVisTypeFilter = () => /*#__PURE__*/_react.default.createElement(_OpenFileDialog.OpenFileDialog, {
  type: "map",
  onClose: Function.prototype,
  onFileSelect: onFileSelect,
  onNew: Function.prototype,
  open: true,
  currentUser: user
});
exports.ListOfMapsNoVisTypeFilter = ListOfMapsNoVisTypeFilter;
ListOfMapsNoVisTypeFilter.story = {
  name: 'List of maps (no vis type filter)'
};
const filterVisTypesWithDisabled = [{
  type: _visTypes.VIS_TYPE_PIVOT_TABLE,
  disabled: true
}, {
  type: _visTypes.VIS_TYPE_LINE_LIST
}];
const ListOfEventVisualizationsWithVisTypeFilterDisabledTypeAndDefaultVisType = () => /*#__PURE__*/_react.default.createElement(_OpenFileDialog.OpenFileDialog, {
  type: "eventVisualization",
  filterVisTypes: filterVisTypesWithDisabled,
  defaultFilterVisType: _visTypes.VIS_TYPE_LINE_LIST,
  onClose: Function.prototype,
  onFileSelect: onFileSelect,
  onNew: Function.prototype,
  open: true,
  currentUser: user
});
exports.ListOfEventVisualizationsWithVisTypeFilterDisabledTypeAndDefaultVisType = ListOfEventVisualizationsWithVisTypeFilterDisabledTypeAndDefaultVisType;
ListOfEventVisualizationsWithVisTypeFilterDisabledTypeAndDefaultVisType.story = {
  name: 'List of event visualizations with vis type filter, disabled type and default vis type'
};
const filterVisTypesWithGroupDividerAndDisabled = [{
  type: _visTypes.VIS_TYPE_GROUP_ALL
}, {
  type: _visTypes.VIS_TYPE_BAR,
  insertDivider: true
}, {
  type: _visTypes.VIS_TYPE_COLUMN,
  disabled: true
}];
const ListOfVisualizationsWithVisTypeFilterWithGroupTypeDividerAndDisabledOptionNoDefaultVisType = () => /*#__PURE__*/_react.default.createElement(_OpenFileDialog.OpenFileDialog, {
  type: "visualization",
  filterVisTypes: filterVisTypesWithGroupDividerAndDisabled,
  onClose: Function.prototype,
  onFileSelect: onFileSelect,
  onNew: Function.prototype,
  open: true,
  currentUser: user
});
exports.ListOfVisualizationsWithVisTypeFilterWithGroupTypeDividerAndDisabledOptionNoDefaultVisType = ListOfVisualizationsWithVisTypeFilterWithGroupTypeDividerAndDisabledOptionNoDefaultVisType;
ListOfVisualizationsWithVisTypeFilterWithGroupTypeDividerAndDisabledOptionNoDefaultVisType.story = {
  name: 'List of visualizations with vis type filter with group type, divider and disabled option (no default vis type)'
};
const NoConnection = () => /*#__PURE__*/_react.default.createElement(_OpenFileDialog.OpenFileDialog, {
  type: "map",
  onClose: Function.prototype,
  onFileSelect: onFileSelect,
  onNew: Function.prototype,
  open: true,
  currentUser: user
});
exports.NoConnection = NoConnection;
NoConnection.story = {
  name: 'No connection'
};