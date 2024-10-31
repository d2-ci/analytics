"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTooltipText = exports.getIcon = void 0;
var _ui = require("@dhis2/ui");
var _react = _interopRequireDefault(require("react"));
var _DataElementIcon = _interopRequireDefault(require("../assets/DimensionItemIcons/DataElementIcon.js"));
var _GenericIcon = _interopRequireDefault(require("../assets/DimensionItemIcons/GenericIcon.js"));
var _CalculationIcon = _interopRequireDefault(require("./../assets/DimensionItemIcons/CalculationIcon.js"));
var _dataSets = require("./dataSets.js");
var _dataTypes = require("./dataTypes.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getTooltipText = _ref => {
  var _dataTypes$type;
  let {
    type,
    expression
  } = _ref;
  if (type === _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM && expression) {
    return _dataTypes.dataTypeMap[_dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM].getItemName();
  }
  switch (type) {
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
      return _dataTypes.dataTypeMap[_dataTypes.DIMENSION_TYPE_DATA_ELEMENT].getItemName();
    case _dataSets.REPORTING_RATE:
      return _dataTypes.dataTypeMap[_dataTypes.DIMENSION_TYPE_DATA_SET].getItemName();
    case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
      return _dataTypes.dataTypeMap[_dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM].getItemName();
    default:
      return (_dataTypes$type = _dataTypes.dataTypeMap[type]) === null || _dataTypes$type === void 0 ? void 0 : _dataTypes$type.getItemName();
  }
};
exports.getTooltipText = getTooltipText;
const getIcon = type => {
  switch (type) {
    case _dataTypes.DIMENSION_TYPE_INDICATOR:
      return /*#__PURE__*/_react.default.createElement(_ui.IconDimensionIndicator16, null);
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
      return _DataElementIcon.default;
    case _dataSets.REPORTING_RATE:
      return /*#__PURE__*/_react.default.createElement(_ui.IconDimensionDataSet16, null);
    case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
      return /*#__PURE__*/_react.default.createElement(_ui.IconDimensionEventDataItem16, null);
    case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
      return /*#__PURE__*/_react.default.createElement(_ui.IconDimensionProgramIndicator16, null);
    case _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
      return _CalculationIcon.default;
    default:
      return _GenericIcon.default;
  }
};
exports.getIcon = getIcon;