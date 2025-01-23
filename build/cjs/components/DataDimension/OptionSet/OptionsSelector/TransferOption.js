"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferOption = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _dimensionListItem = require("../../../../modules/dimensionListItem.js");
var _TransferOptionStyle = _interopRequireDefault(require("../../styles/TransferOption.style.js"));
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
    active,
    dataTest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-value": value,
    "data-test": dataTest,
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + "wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
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
  }, (0, _dimensionListItem.getIcon)()), /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_TransferOptionStyle.default.__hash}` + " " + "label"
  }, label))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _TransferOptionStyle.default.__hash
  }, _TransferOptionStyle.default));
};
exports.TransferOption = TransferOption;
TransferOption.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  active: _propTypes.default.bool,
  dataTest: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  highlighted: _propTypes.default.bool,
  selected: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func
};