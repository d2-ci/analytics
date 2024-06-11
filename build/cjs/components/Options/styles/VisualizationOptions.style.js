"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabSectionToggleableSubsection = exports.tabSectionTitleMargin = exports.tabSectionTitleDisabled = exports.tabSectionTitle = exports.tabSectionOptionToggleable = exports.tabSectionOptionText = exports.tabSectionOptionItem = exports.tabSectionOptionIcon = exports.tabSectionOptionComplexInline = exports.tabSectionOption = exports.tabSectionContent = exports.tabSection = exports.tabContent = exports.tabBar = exports.modalContent = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable-line no-unused-vars */

const modalContent = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "72915270"
  }, ["div.jsx-72915270{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-right:0;}"]),
  className: "jsx-72915270"
};
exports.modalContent = modalContent;
const tabBar = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3103009923"
  }, [`div.jsx-3103009923{padding-right:${_ui.spacers.dp24};}`]),
  className: "jsx-3103009923"
};
exports.tabBar = tabBar;
const tabContent = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2208787536"
  }, [`div.jsx-2208787536{overflow:auto;padding-right:${_ui.spacers.dp24};}`]),
  className: "jsx-2208787536"
};
exports.tabContent = tabContent;
const tabSection = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "1427514941"
  }, [`div.jsx-1427514941{padding:${_ui.spacers.dp16} 0;}`, `div.jsx-1427514941:not(:last-child){border-bottom:1px solid ${_ui.colors.grey300};margin-bottom:${_ui.spacers.dp8};}`]),
  className: "jsx-1427514941"
};
exports.tabSection = tabSection;
const tabSectionContent = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "1655721637"
  }, ["div.jsx-1655721637{overflow-y:auto;}"]),
  className: "jsx-1655721637"
};
exports.tabSectionContent = tabSectionContent;
const tabSectionTitle = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3115295887"
  }, [`span.jsx-3115295887{display:inline-block;padding-bottom:${_ui.spacers.dp12};font-size:15px;color:${_ui.colors.grey900};font-weight:500;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;}`]),
  className: "jsx-3115295887"
};
exports.tabSectionTitle = tabSectionTitle;
const tabSectionTitleDisabled = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3352433486"
  }, [`span.jsx-3352433486{color:${_ui.colors.grey600};}`]),
  className: "jsx-3352433486"
};
exports.tabSectionTitleDisabled = tabSectionTitleDisabled;
const tabSectionTitleMargin = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "642558349"
  }, [`span.jsx-642558349{margin-top:${_ui.spacers.dp8};}`]),
  className: "jsx-642558349"
};
exports.tabSectionTitleMargin = tabSectionTitleMargin;
const tabSectionOption = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "1665807213"
  }, [`div.jsx-1665807213:not(:last-child):not(.inline){padding-bottom:${_ui.spacers.dp16};}`]),
  className: "jsx-1665807213"
};
exports.tabSectionOption = tabSectionOption;
const tabSectionOptionItem = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2983019948"
  }, [`div.jsx-2983019948:not(:last-child){padding-bottom:${_ui.spacers.dp8};}`]),
  className: "jsx-2983019948"
};
exports.tabSectionOptionItem = tabSectionOptionItem;
const tabSectionOptionText = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "3330936769"
  }, [`p.jsx-3330936769{margin:0;padding-bottom:${_ui.spacers.dp8};font-size:14px;line-height:19px;color:${_ui.colors.grey700};}`]),
  className: "jsx-3330936769"
};
exports.tabSectionOptionText = tabSectionOptionText;
const tabSectionOptionToggleable = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "684239008"
  }, [`div.jsx-684239008{margin:${_ui.spacers.dp4} 0 0 23px;}`]),
  className: "jsx-684239008"
};
exports.tabSectionOptionToggleable = tabSectionOptionToggleable;
const tabSectionToggleableSubsection = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "1383096027"
  }, ["div.jsx-1383096027{margin-left:23px;}"]),
  className: "jsx-1383096027"
};
exports.tabSectionToggleableSubsection = tabSectionToggleableSubsection;
const tabSectionOptionComplexInline = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "1912734430"
  }, ["div.jsx-1912734430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]),
  className: "jsx-1912734430"
};
exports.tabSectionOptionComplexInline = tabSectionOptionComplexInline;
const tabSectionOptionIcon = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "112181591"
  }, [`span.jsx-112181591{vertical-align:top;margin-right:${_ui.spacers.dp4};color:${_ui.colors.grey600};}`]),
  className: "jsx-112181591"
};
exports.tabSectionOptionIcon = tabSectionOptionIcon;