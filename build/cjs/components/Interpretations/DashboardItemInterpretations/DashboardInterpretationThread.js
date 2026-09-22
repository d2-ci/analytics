"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardInterpretationThread = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _InterpretationThread = require("../InterpretationModal/InterpretationThread.js");
var _hooks = require("../InterpretationsProvider/hooks.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DashboardInterpretationThread = ({
  interpretationId,
  onClose,
  dashboardRedirectUrl,
  initialFocus
}) => {
  const {
    data: interpretation,
    loading,
    error
  } = (0, _hooks.useActiveInterpretation)(interpretationId);
  if (loading) {
    return /*#__PURE__*/_react.default.createElement(_ui.Layer, null, /*#__PURE__*/_react.default.createElement(_ui.CenteredContent, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, null)));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-95761030" + " " + "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-95761030" + " " + "button-container"
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    small: true,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconChevronLeft16, null),
    onClick: onClose
  }, _d2I18n.default.t('Back to all interpretations'))), error && /*#__PURE__*/_react.default.createElement(_ui.NoticeBox, {
    error: true,
    title: _d2I18n.default.t('Could not load interpretation details')
  }, _d2I18n.default.t('The request to fetch interpretation comments failed')), interpretation && !error && /*#__PURE__*/_react.default.createElement(_InterpretationThread.InterpretationThread, {
    loading: loading,
    interpretation: interpretation,
    onInterpretationDeleted: onClose,
    initialFocus: initialFocus,
    dashboardRedirectUrl: dashboardRedirectUrl
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "95761030"
  }, [".container.jsx-95761030{padding:var(--spacers-dp16) var(--spacers-dp16) var(--spacers-dp32) var(--spacers-dp16);}", ".button-container.jsx-95761030{margin-bottom:var(--spacers-dp8);}"]));
};
exports.DashboardInterpretationThread = DashboardInterpretationThread;
DashboardInterpretationThread.propTypes = {
  interpretationId: _propTypes.default.string.isRequired,
  onClose: _propTypes.default.func.isRequired,
  dashboardRedirectUrl: _propTypes.default.string,
  initialFocus: _propTypes.default.bool
};