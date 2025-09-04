"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationsUnit = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("../InterpretationsProvider/hooks.js");
var _InterpretationForm = require("./InterpretationForm.js");
var _InterpretationList = require("./InterpretationList.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InterpretationsUnit = ({
  type,
  id,
  visualizationHasTimeDimension = true,
  onInterpretationClick,
  onReplyIconClick,
  disabled,
  dashboardRedirectUrl
}) => {
  const [isExpanded, setIsExpanded] = (0, _react.useState)(true);
  const showNoTimeDimensionHelpText = type === 'eventVisualization' && !visualizationHasTimeDimension;
  const {
    data: interpretations,
    loading,
    error
  } = (0, _hooks.useInterpretationsList)(type, id);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2839123256", [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]]]) + " " + ((0, _classnames.default)('container', {
      expanded: isExpanded
    }) || "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setIsExpanded(!isExpanded),
    className: _style.default.dynamic([["2839123256", [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]]]) + " " + "header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _style.default.dynamic([["2839123256", [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]]]) + " " + "title"
  }, _d2I18n.default.t('Interpretations')), isExpanded ? /*#__PURE__*/_react.default.createElement(_ui.IconChevronUp24, {
    color: _ui.colors.grey700
  }) : /*#__PURE__*/_react.default.createElement(_ui.IconChevronDown24, {
    color: _ui.colors.grey700
  })), isExpanded && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading && /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2839123256", [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]]]) + " " + "loader"
  }, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, {
    small: true
  })), error && /*#__PURE__*/_react.default.createElement(_ui.NoticeBox, {
    error: true,
    title: _d2I18n.default.t('Error loading interpretations')
  }, error.message || _d2I18n.default.t('Could not load interpretations')), interpretations && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InterpretationForm.InterpretationForm, {
    type: type,
    id: id,
    disabled: disabled,
    showNoTimeDimensionHelpText: showNoTimeDimensionHelpText
  }), /*#__PURE__*/_react.default.createElement(_InterpretationList.InterpretationList, {
    interpretations: interpretations,
    onInterpretationClick: onInterpretationClick,
    onReplyIconClick: onReplyIconClick,
    disabled: disabled,
    dashboardRedirectUrl: dashboardRedirectUrl
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2839123256",
    dynamic: [_ui.spacers.dp16, _ui.colors.grey400, _ui.colors.white, _ui.spacers.dp32, _ui.colors.grey900]
  }, [`.container.__jsx-style-dynamic-selector{position:relative;padding:${_ui.spacers.dp16};border-bottom:1px solid ${_ui.colors.grey400};background-color:${_ui.colors.white};}`, `.expanded.__jsx-style-dynamic-selector{padding-bottom:${_ui.spacers.dp32};}`, ".loader.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer;}", `.title.__jsx-style-dynamic-selector{font-size:16px;font-weight:500;line-height:21px;color:${_ui.colors.grey900};}`]));
};
exports.InterpretationsUnit = InterpretationsUnit;
InterpretationsUnit.propTypes = {
  id: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  onInterpretationClick: _propTypes.default.func.isRequired,
  dashboardRedirectUrl: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  visualizationHasTimeDimension: _propTypes.default.bool,
  onReplyIconClick: _propTypes.default.func
};