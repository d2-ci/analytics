"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslationModal = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _TranslationForm = require("./TranslationForm.js");
var _TranslationModalActions = require("./TranslationModalActions.js");
var _useTranslationsResults = require("./useTranslationsResults.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TranslationModal = _ref => {
  let {
    objectToTranslate,
    fieldsToTranslate,
    onClose,
    onTranslationSaved
  } = _ref;
  const [translations, setTranslations] = (0, _react.useState)([]);
  const endpointPath = new URL(objectToTranslate.href).pathname;
  const endpointPathMatch = endpointPath.match(/api\/\d+\/(?<resource>.+)/);
  const resource = endpointPathMatch !== null && endpointPathMatch !== void 0 && endpointPathMatch.groups ? endpointPathMatch.groups.resource : null;
  const {
    translationsData,
    fetching
  } = (0, _useTranslationsResults.useTranslationsResults)({
    resource
  });
  (0, _react.useEffect)(() => {
    if (translationsData) {
      setTranslations(translationsData);
    }
  }, [translationsData]);
  return /*#__PURE__*/_react.default.createElement(_ui.Modal, {
    large: true,
    position: "middle",
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_ui.ModalTitle, null, _d2I18n.default.t('Translate: {{objectName}}', {
    objectName: objectToTranslate.name || 'TEXT',
    // XXX
    nsSeparator: '^^'
  })), fetching ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.ModalContent, null, /*#__PURE__*/_react.default.createElement(_ui.CenteredContent, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, null))), /*#__PURE__*/_react.default.createElement(_TranslationModalActions.TranslationModalActions, {
    onClose: onClose,
    saveButtonDisabled: true
  })) : /*#__PURE__*/_react.default.createElement(_TranslationForm.TranslationForm, {
    fieldsToTranslate: fieldsToTranslate,
    objectToTranslate: objectToTranslate,
    translations: translations,
    onTranslationSaved: onTranslationSaved,
    resource: resource,
    onClose: onClose
  }));
};
exports.TranslationModal = TranslationModal;
TranslationModal.propTypes = {
  fieldsToTranslate: _propTypes.default.array.isRequired,
  objectToTranslate: _propTypes.default.object.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onTranslationSaved: _propTypes.default.func.isRequired
};