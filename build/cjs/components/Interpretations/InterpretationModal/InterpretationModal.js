"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationModal = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("../InterpretationsProvider/hooks.js");
var _InterpretationThread = require("./InterpretationThread.js");
var _useModalContentWidth = require("./useModalContentWidth.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const modalCSS = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2559940363"
  }, ["aside.jsx-2559940363{max-width:calc(100vw - 128px) !important;max-height:calc(100vh - 128px) !important;width:auto !important;height:calc(100vh - 128px) !important;overflow-y:hidden;}", "aside.hidden.jsx-2559940363{display:none;}", "aside.jsx-2559940363>div>div{height:100%;}"]),
  className: "jsx-2559940363"
};
function getModalContentCSS(width) {
  return {
    styles: /*#__PURE__*/_react.default.createElement(_style.default, {
      id: "2099285089",
      dynamic: [width]
    }, [`div.__jsx-style-dynamic-selector{width:${width}px;overflow-y:visible;}`]),
    className: _style.default.dynamic([["2099285089", [width]]])
  };
}
const InterpretationModal = ({
  isVisualizationLoading,
  visualization,
  onResponsesReceived,
  downloadMenuComponent,
  onClose,
  interpretationId,
  initialFocus,
  pluginComponent: VisualizationPlugin
}) => {
  var _currentUser$settings;
  const modalContentWidth = (0, _useModalContentWidth.useModalContentWidth)();
  const modalContentCSS = getModalContentCSS(modalContentWidth);
  const currentUser = (0, _hooks.useInterpretationsCurrentUser)();
  const {
    data: interpretation,
    loading,
    error
  } = (0, _hooks.useActiveInterpretation)(interpretationId);
  const shouldRenderModalContent = !error && interpretation;
  const loadingInProgress = loading || isVisualizationLoading;
  const filters = (0, _react.useMemo)(() => {
    return {
      relativePeriodDate: interpretation === null || interpretation === void 0 ? void 0 : interpretation.created
    };
  }, [interpretation === null || interpretation === void 0 ? void 0 : interpretation.created]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loadingInProgress && /*#__PURE__*/_react.default.createElement(_ui.Layer, null, /*#__PURE__*/_react.default.createElement(_ui.CenteredContent, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, null))), /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    fluid: true,
    onClose: onClose,
    className: (0, _classnames.default)(modalCSS.className, {
      hidden: loadingInProgress
    }),
    dataTest: "interpretation-modal"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "title"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "ellipsis"
  }, _d2I18n.default.t('Viewing interpretation: {{- visualisationName}}', {
    visualisationName: visualization.displayName || visualization.name,
    nsSeparator: '^^'
  }))), /*#__PURE__*/_react.default.createElement(_ui.ModalContent, {
    className: modalContentCSS.className
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "container"
  }, error && /*#__PURE__*/_react.default.createElement(_ui.NoticeBox, {
    error: true,
    title: _d2I18n.default.t('Could not load interpretation')
  }, error.message || _d2I18n.default.t('The interpretation couldn’t be displayed. Try again or contact your system administrator.')), shouldRenderModalContent && /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "visualisation-wrap"
  }, /*#__PURE__*/_react.default.createElement(VisualizationPlugin, {
    filters: filters,
    visualization: visualization,
    onResponsesReceived: onResponsesReceived,
    displayProperty: (_currentUser$settings = currentUser.settings) === null || _currentUser$settings === void 0 ? void 0 : _currentUser$settings.keyAnalysisDisplayProperty,
    isInModal: true,
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]])
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2014146191", [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]]]) + " " + "thread-wrap"
  }, /*#__PURE__*/_react.default.createElement(_InterpretationThread.InterpretationThread, {
    loading: loading,
    interpretation: interpretation,
    initialFocus: initialFocus,
    downloadMenuComponent: downloadMenuComponent,
    onInterpretationDeleted: onClose
  }))))), /*#__PURE__*/_react.default.createElement(_ui.ModalActions, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    disabled: loading,
    onClick: onClose
  }, _d2I18n.default.t('Hide interpretation'))), modalCSS.styles, modalContentCSS.styles, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2014146191",
    dynamic: [_ui.colors.grey900, _ui.spacers.dp24, _ui.spacers.dp4, _ui.spacers.dp4]
  }, [`.title.__jsx-style-dynamic-selector{color:${_ui.colors.grey900};margin:0px;padding:${_ui.spacers.dp24} 0 ${_ui.spacers.dp4};}`, ".ellipsis.__jsx-style-dynamic-selector{display:inline-block;font-size:20px;font-weight:500;line-height:24px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;}", ".container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}", ".row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:16px;height:100%;}", ".visualisation-wrap.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;min-width:0;}", `.thread-wrap.__jsx-style-dynamic-selector{padding-right:${_ui.spacers.dp4};-webkit-flex-basis:300px;-ms-flex-preferred-size:300px;flex-basis:300px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}`])));
};
exports.InterpretationModal = InterpretationModal;
InterpretationModal.propTypes = {
  interpretationId: _propTypes.default.string.isRequired,
  isVisualizationLoading: _propTypes.default.bool.isRequired,
  pluginComponent: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired,
  visualization: _propTypes.default.object.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onResponsesReceived: _propTypes.default.func.isRequired,
  downloadMenuComponent: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),
  initialFocus: _propTypes.default.bool
};