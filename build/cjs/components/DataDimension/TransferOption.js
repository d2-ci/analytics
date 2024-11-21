"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferOption = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _TransferOptionStyle = _interopRequireDefault(require("./styles/TransferOption.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TransferOption = _ref => {
  let {
    disabled,
    label,
    highlighted,
    selected,
    onClick,
    onDoubleClick,
    value,
    icon,
    active,
    dimensionType,
    dataTest,
    itemsRef,
    showingInfo,
    onEditClick,
    onInfoClick
  } = _ref;
  const renderContent = () => /*#__PURE__*/_react.default.createElement("div", {
    "data-test": `${dataTest}-content`,
    onClick: event => {
      console.log('transfer option click');
      if (disabled) {
        return;
      }
      onClick({
        label,
        value
      }, event);
    },
    onDoubleClick: event => {
      console.log('transfer option double click');
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
  }, label), onEditClick && /*#__PURE__*/_react.default.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onEditClick();
    },
    "data-test": `${dataTest}-edit-button`,
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + "edit"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconEdit16, null))), /*#__PURE__*/_react.default.createElement("div", {
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
  dataTest: _propTypes.default.string,
  dimensionType: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  highlighted: _propTypes.default.bool,
  icon: _propTypes.default.node,
  itemsRef: _propTypes.default.object,
  selected: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  onEditClick: _propTypes.default.func,
  onInfoClick: _propTypes.default.func
};