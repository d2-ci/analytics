"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationForm = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../../RichText/index.js");
var _index2 = require("../common/index.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InterpretationForm = _ref => {
  let {
    type,
    id,
    currentUser,
    disabled,
    showNoTimeDimensionHelpText,
    onSave
  } = _ref;
  const [showRichTextEditor, setShowRichTextEditor] = (0, _react.useState)(false);
  const [interpretationText, setInterpretationText] = (0, _react.useState)('');
  const saveMutationRef = (0, _react.useRef)({
    resource: `interpretations/${type}/${id}`,
    type: 'create',
    data: _ref2 => {
      let {
        interpretationText
      } = _ref2;
      return interpretationText;
    }
  });
  const [save, {
    loading: saveMutationInProgress
  }] = (0, _appRuntime.useDataMutation)(saveMutationRef.current, {
    onComplete: () => {
      setShowRichTextEditor(false);
      setInterpretationText('');
      onSave();
    }
  });
  const inputPlaceholder = _d2I18n.default.t('Write an interpretation');
  return /*#__PURE__*/_react.default.createElement(_index2.MessageEditorContainer, {
    currentUser: currentUser,
    dataTest: "interpretation-form"
  }, showRichTextEditor ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.RichTextEditor, {
    disabled: saveMutationInProgress,
    inputPlaceholder: inputPlaceholder,
    onChange: setInterpretationText,
    value: interpretationText,
    helpText: showNoTimeDimensionHelpText ? _d2I18n.default.t('Other people viewing this interpretation in the future may see more data.') : undefined
  }), /*#__PURE__*/_react.default.createElement(_index2.MessageButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    primary: true,
    small: true,
    loading: saveMutationInProgress,
    onClick: () => save({
      interpretationText
    })
  }, _d2I18n.default.t('Post interpretation')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    small: true,
    disabled: saveMutationInProgress,
    onClick: () => {
      setInterpretationText('');
      setShowRichTextEditor(false);
    }
  }, _d2I18n.default.t('Cancel')))) : /*#__PURE__*/_react.default.createElement(_ui.Input, {
    onFocus: () => setShowRichTextEditor(true),
    placeholder: inputPlaceholder,
    disabled: disabled
  }));
};
exports.InterpretationForm = InterpretationForm;
InterpretationForm.propTypes = {
  currentUser: _propTypes.default.object,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string,
  showNoTimeDimensionHelpText: _propTypes.default.bool,
  type: _propTypes.default.string,
  onSave: _propTypes.default.func
};