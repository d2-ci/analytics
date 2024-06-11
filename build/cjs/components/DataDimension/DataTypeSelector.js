"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _dataTypes = require("../../modules/dataTypes.js");
var _visTypes = require("../../modules/visTypes.js");
var _DataDimension = require("./DataDimension.js");
var _DataTypeSelectorStyle = _interopRequireDefault(require("./styles/DataTypeSelector.style.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DataTypeSelector = _ref => {
  let {
    currentDataType,
    dataTypes,
    onChange,
    dataTest
  } = _ref;
  const {
    visType
  } = (0, _DataDimension.useDataDimensionContext)();
  const label = _index.default.t('Data Type');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DataTypeSelectorStyle.default.__hash}` + " " + "container"
  }, dataTypes.length === 1 ? /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    label: label,
    dataTest: dataTest,
    selected: dataTypes[0].id,
    onChange: ref => onChange(ref.selected),
    dense: true,
    disabled: true,
    helpText: visType ? _index.default.t('Only {{dataType}} can be used in {{visType}}', {
      dataType: _dataTypes.dataTypeMap[dataTypes[0].id].getName(),
      visType: (0, _visTypes.getDisplayNameByVisType)(visType)
    }) : ''
  }, dataTypes.map(type => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: type.id,
    key: type.id,
    label: type.getName(),
    dataTest: `${dataTest}-option-${type.id}`
  }))) : /*#__PURE__*/_react.default.createElement(_ui.SingleSelectField, {
    label: label,
    dataTest: dataTest,
    selected: currentDataType || _dataTypes.DIMENSION_TYPE_ALL,
    onChange: ref => onChange(ref.selected),
    dense: true
  }, /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: _dataTypes.DIMENSION_TYPE_ALL,
    key: _dataTypes.DIMENSION_TYPE_ALL,
    label: _index.default.t('All types'),
    dataTest: `${dataTest}-option-all`
  }), dataTypes.map(type => /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
    value: type.id,
    key: type.id,
    label: type.getName(),
    dataTest: `${dataTest}-option-${type.id}`
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DataTypeSelectorStyle.default.__hash
  }, _DataTypeSelectorStyle.default));
};
DataTypeSelector.propTypes = {
  currentDataType: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  dataTypes: _propTypes.default.array
};
var _default = DataTypeSelector;
exports.default = _default;