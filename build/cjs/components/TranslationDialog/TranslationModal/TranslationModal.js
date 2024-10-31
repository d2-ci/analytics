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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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