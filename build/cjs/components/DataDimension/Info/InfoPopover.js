"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoPopover = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _dataSets = require("../../../modules/dataSets.js");
var _dataTypes = require("../../../modules/dataTypes.js");
var _CalculationInfo = require("./CalculationInfo.js");
var _DataElementInfo = require("./DataElementInfo.js");
var _DataSetInfo = require("./DataSetInfo.js");
var _EventDataItemInfo = require("./EventDataItemInfo.js");
var _IndicatorInfo = require("./IndicatorInfo.js");
var _ProgramIndicatorInfo = require("./ProgramIndicatorInfo.js");
var _InfoPopoverStyle = _interopRequireDefault(require("./styles/InfoPopover.style.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InfoPopover = _ref => {
  let {
    reference,
    onClose,
    ...props
  } = _ref;
  console.log('type', props.item.type, 'id', props.item.id);
  const type = props.item.type;
  const infoProps = {
    type,
    id: props.item.id,
    displayNameProp: props.displayNameProp
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Popover, {
    placement: "bottom-end",
    reference: reference,
    onClickOutside: onClose,
    maxWidth: 480
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "popover"
  }, type === _dataTypes.DIMENSION_TYPE_DATA_ELEMENT && /*#__PURE__*/_react.default.createElement(_DataElementInfo.DataElementInfo, infoProps), type === _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM && /*#__PURE__*/_react.default.createElement(_CalculationInfo.CalculationInfo, infoProps), type === _dataSets.REPORTING_RATE /* TODO: verify this! */ && /*#__PURE__*/_react.default.createElement(_DataSetInfo.DataSetInfo, infoProps), type === _dataTypes.DIMENSION_TYPE_INDICATOR && /*#__PURE__*/_react.default.createElement(_IndicatorInfo.IndicatorInfo, infoProps), [_dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE, _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT].includes(type) && /*#__PURE__*/_react.default.createElement(_EventDataItemInfo.EventDataItemInfo, infoProps), type === _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR && /*#__PURE__*/_react.default.createElement(_ProgramIndicatorInfo.ProgramIndicatorInfo, infoProps))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
};
exports.InfoPopover = InfoPopover;
InfoPopover.propTypes = {
  displayNameProp: _propTypes.default.string,
  item: _propTypes.default.object,
  reference: _propTypes.default.object,
  onClose: _propTypes.default.func
};