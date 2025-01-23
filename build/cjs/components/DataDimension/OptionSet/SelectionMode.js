"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectionMode = exports.SELECTION_MODE_MANUAL = exports.SELECTION_MODE_AUTOMATIC = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _SelectionAutomaticIcon = require("../../../assets/SelectionAutomaticIcon.js");
var _SelectionManualIcon = require("../../../assets/SelectionManualIcon.js");
var _RadioCard = require("../../RadioCard.js");
var _OptionSetModalStyle = _interopRequireDefault(require("./styles/OptionSetModal.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SELECTION_MODE_AUTOMATIC = exports.SELECTION_MODE_AUTOMATIC = 'automatic';
const SELECTION_MODE_MANUAL = exports.SELECTION_MODE_MANUAL = 'manual';
const SelectionMode = _ref => {
  let {
    selectionMode,
    setSelectionMode
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OptionSetModalStyle.default.__hash}` + " " + "group"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_OptionSetModalStyle.default.__hash}` + " " + "group-header"
  }, _d2I18n.default.t('Selection mode')), /*#__PURE__*/_react.default.createElement(_RadioCard.RadioCard, {
    id: SELECTION_MODE_AUTOMATIC,
    name: "selection",
    checked: selectionMode === SELECTION_MODE_AUTOMATIC,
    onChange: () => setSelectionMode(SELECTION_MODE_AUTOMATIC),
    icon: /*#__PURE__*/_react.default.createElement(_SelectionAutomaticIcon.SelectionAutomaticIcon, null),
    title: _d2I18n.default.t('Automatically include all options'),
    subtitle: _d2I18n.default.t('Select all options. New options added in the future are included.')
  }), /*#__PURE__*/_react.default.createElement(_RadioCard.RadioCard, {
    id: SELECTION_MODE_MANUAL,
    name: "selection",
    checked: selectionMode === SELECTION_MODE_MANUAL,
    onChange: () => setSelectionMode(SELECTION_MODE_MANUAL),
    icon: /*#__PURE__*/_react.default.createElement(_SelectionManualIcon.SelectionManualIcon, null),
    title: _d2I18n.default.t('Manually choose some options...'),
    subtitle: _d2I18n.default.t('Only chosen options will be included.')
  })), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _OptionSetModalStyle.default.__hash
  }, _OptionSetModalStyle.default));
};
exports.SelectionMode = SelectionMode;
SelectionMode.propTypes = {
  selectionMode: _propTypes.default.string,
  setSelectionMode: _propTypes.default.func
};