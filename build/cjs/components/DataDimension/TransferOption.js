"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferOption = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _dataTypes = require("../../modules/dataTypes.js");
var _TransferOptionStyle = _interopRequireDefault(require("./styles/TransferOption.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TransferOption = ({
  disabled,
  label,
  highlighted,
  selected,
  onClick,
  onDoubleClick,
  value,
  icon,
  active,
  dataItemType,
  dimensionType,
  dataTest,
  optionSetId,
  itemsRef,
  showingInfo,
  onEditClick,
  onInfoClick
}) => {
  const renderContent = () => /*#__PURE__*/_react.default.createElement("div", {
    "data-test": `${dataTest}-content`,
    onClick: event => {
      if (disabled) {
        return;
      }
      onClick({
        label,
        value
      }, event);
    },
    onDoubleClick: event => {
      if (disabled) {
        return;
      }
      onDoubleClick({
        label,
        value
      }, event);
    },
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + ((0, _classnames.default)('item', {
      highlighted,
      disabled,
      selected,
      inactive: active !== undefined && !active
    }) || "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + "labelGroup"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + "icon"
  }, icon), /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + "label"
  }, label), dataItemType === _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM &&
  // XXX check needed?!
  onEditClick && /*#__PURE__*/_react.default.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onEditClick();
    },
    "data-test": `${dataTest}-edit-calculation-button`,
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + "edit"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconEdit16, null)), [_dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE, _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT].includes(dataItemType) && optionSetId && /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
    "aria-label": "disabled",
    content: _d2I18n.default.t('Click to choose from available options'),
    openDelay: 500,
    closeDelay: 0
  }, ({
    ref,
    onMouseOver,
    onMouseOut
  }) => /*#__PURE__*/_react.default.createElement("span", {
    ref: ref,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    onClick: e => {
      e.stopPropagation();
      onMouseOut();
      onEditClick();
    },
    "data-test": `${dataTest}-option-set-button`,
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + "option-set-button"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconList16, null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + ((0, _classnames.default)('group', 'nowrap', 'typeGroup') || "")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + "type"
  }, dimensionType), /*#__PURE__*/_react.default.createElement("span", {
    ref: node => {
      node ? itemsRef.current.set(value, node) : itemsRef.current.delete(value);
    }
    // avoid moving items when toggling the info popover
    // sometimes a double click event is fired
    ,
    onDoubleClick: e => e.stopPropagation(),
    onClick: e => {
      e.stopPropagation();
      onInfoClick();
    },
    "data-test": `${dataTest}-info-button`,
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + ((0, _classnames.default)('info', {
      active: showingInfo
    }) || "")
  }, /*#__PURE__*/_react.default.createElement(_ui.IconInfo16, null))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _TransferOptionStyle.default.__hash
  }, _TransferOptionStyle.default));
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-value": value,
    "data-test": dataTest,
    className: "wrapper"
  }, renderContent());
};
exports.TransferOption = TransferOption;
TransferOption.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  active: _propTypes.default.bool,
  dataItemType: _propTypes.default.string,
  dataTest: _propTypes.default.string,
  dimensionType: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  highlighted: _propTypes.default.bool,
  icon: _propTypes.default.node,
  itemsRef: _propTypes.default.object,
  optionSetId: _propTypes.default.string,
  selected: _propTypes.default.bool,
  showingInfo: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  onEditClick: _propTypes.default.func,
  onInfoClick: _propTypes.default.func
};