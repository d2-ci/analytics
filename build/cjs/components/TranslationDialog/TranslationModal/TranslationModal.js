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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TranslationModal = ({
  objectToTranslate,
  fieldsToTranslate,
  onClose,
  onTranslationSaved
}) => {
  const [translations, setTranslations] = (0, _react.useState)([]);
  const endpointPath = new URL(objectToTranslate.href).pathname;
  const endpointPathMatch = endpointPath.match(/api\/(?:\d+\/)?(?<resource>.+)/);
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