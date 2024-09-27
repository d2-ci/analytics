"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FileList = void 0;
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _VisTypeIcon = require("../VisTypeIcon.js");
var _DateField = require("./DateField.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FileList = _ref => {
  let {
    data,
    onSelect,
    showVisTypeColumn
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, data.map(visualization => /*#__PURE__*/_react.default.createElement(_ui.DataTableRow, {
    key: visualization.id
  }, /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    onClick: () => onSelect(visualization.id)
  }, visualization.displayName), showVisTypeColumn && /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    align: "center"
  }, /*#__PURE__*/_react.default.createElement(_VisTypeIcon.VisTypeIcon, {
    type: visualization.type,
    useSmall: true,
    color: _ui.colors.grey600
  })), /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, null, /*#__PURE__*/_react.default.createElement(_DateField.DateField, {
    date: visualization.created
  })), /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, null, /*#__PURE__*/_react.default.createElement(_DateField.DateField, {
    date: visualization.lastUpdated
  })))));
};
exports.FileList = FileList;
FileList.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    created: _propTypes.default.string.isRequired,
    displayName: _propTypes.default.string.isRequired,
    id: _propTypes.default.string.isRequired,
    lastUpdated: _propTypes.default.string.isRequired,
    type: _propTypes.default.string
  })).isRequired,
  onSelect: _propTypes.default.func.isRequired,
  showVisTypeColumn: _propTypes.default.bool
};
var _default = FileList;
exports.default = _default;