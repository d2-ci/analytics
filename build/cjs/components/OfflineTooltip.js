"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflineTooltip = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _OfflineTooltipStyle = require("./styles/OfflineTooltip.style.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const OfflineTooltip = ({
  disabledWhenOffline = true,
  disabled = false,
  content,
  children
}) => {
  const {
    isDisconnected: offline
  } = (0, _appRuntime.useDhis2ConnectionStatus)();
  const notAllowed = disabled || disabledWhenOffline && offline;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
    content: content || _d2I18n.default.t('Not available offline'),
    openDelay: 200,
    closeDelay: 100
  }, ({
    onMouseOver,
    onMouseOut,
    ref
  }) => /*#__PURE__*/_react.default.createElement("span", {
    onMouseOver: () => notAllowed && onMouseOver(),
    onMouseOut: () => notAllowed && onMouseOut(),
    ref: ref,
    className: `jsx-${_OfflineTooltipStyle.styles.__hash}` + " " + ((0, _classnames.default)('tooltip', {
      notAllowed
    }) || "")
  }, children)), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _OfflineTooltipStyle.styles.__hash
  }, _OfflineTooltipStyle.styles));
};
exports.OfflineTooltip = OfflineTooltip;
OfflineTooltip.propTypes = {
  children: _propTypes.default.node,
  content: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  disabledWhenOffline: _propTypes.default.bool
};