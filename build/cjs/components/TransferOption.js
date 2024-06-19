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
    tooltipText,
    dataTest,
    onEditClick
  } = _ref;
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
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + ((0, _classnames.default)('chip', {
      highlighted,
      disabled,
      selected,
      inactive: active !== undefined && !active
    }) || "")
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
  }, /*#__PURE__*/_react.default.createElement(_ui.IconEdit16, null)), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _TransferOptionStyle.default.__hash
  }, _TransferOptionStyle.default));
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-value": value,
    "data-test": dataTest,
    className: "wrapper"
  }, tooltipText ? /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
    key: `${value}`,
    content: tooltipText,
    placement: 'top',
    openDelay: 750,
    closeDelay: 150
  }, renderContent()) : renderContent());
};
exports.TransferOption = TransferOption;
TransferOption.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  active: _propTypes.default.bool,
  dataTest: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  highlighted: _propTypes.default.bool,
  icon: _propTypes.default.node,
  selected: _propTypes.default.bool,
  tooltipText: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  onEditClick: _propTypes.default.func
};