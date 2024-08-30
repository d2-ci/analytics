"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslationForm = void 0;

var _appRuntime = require("@dhis2/app-runtime");

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _LocalesSelect = require("./LocalesSelect.js");

var _TranslationModalActions = require("./TranslationModalActions.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SESSION_STORAGE_TRANSLATION_LOCALE_KEY = 'translation-dialog-selected-locale';

const camelCaseToUnderscores = field => field.replace(/[a-z][A-Z]/g, match => [match.charAt(0), match.charAt(1)].join('_')).toLowerCase();

const TranslationForm = _ref => {
  let {
    fieldsToTranslate,
    objectToTranslate,
    translations,
    resource,
    onTranslationSaved,
    onClose
  } = _ref;
  const [newTranslations, setNewTranslations] = (0, _react.useState)();
  const [translationLocale, setTranslationLocale] = (0, _react.useState)();
  const [fieldsTranslations, setFieldsTranslations] = (0, _react.useState)({});
  const {
    show: showError
  } = (0, _appRuntime.useAlert)(error => error, {
    critical: true
  });

  const getTranslationIndexForField = field => newTranslations.findIndex(element => element.locale === translationLocale && element.property.toLowerCase() === camelCaseToUnderscores(field));

  const getTranslationForField = field => {
    var _newTranslations$tran;

    const translationIndex = getTranslationIndexForField(field);
    return translationIndex !== -1 ? ((_newTranslations$tran = newTranslations[translationIndex]) === null || _newTranslations$tran === void 0 ? void 0 : _newTranslations$tran.value) || '' : '';
  };

  const setTranslationForField = (field, translation) => {
    const newTranslation = {
      locale: translationLocale,
      property: camelCaseToUnderscores(field).toUpperCase(),
      value: translation
    };
    const translationIndex = getTranslationIndexForField(field);

    if (translationIndex === -1) {
      // non existing translation, adding new
      setNewTranslations([...newTranslations, newTranslation]);
    } else {
      // cleared existing translation, remove it from the list
      if (!translation) {
        setNewTranslations(newTranslations.reduce((tmp, translation, index) => {
          if (index !== translationIndex) {
            tmp.push(translation);
          }

          return tmp;
        }, []));
      } // replace existing translation with new one
      else {
        setNewTranslations(newTranslations.map((translation, index) => index === translationIndex ? newTranslation : translation));
      }
    }
  };

  const i18nMutationRef = (0, _react.useRef)({
    resource: 'i18n',
    type: 'create',
    data: fieldsToTranslate.map(camelCaseToUnderscores)
  });
  const [fetchFieldsTranslations] = (0, _appRuntime.useDataMutation)(i18nMutationRef.current, {
    onComplete: res => setFieldsTranslations(res),
    onError: error => showError(error)
  });
  const translationsMutationRef = (0, _react.useRef)({
    resource: "".concat(resource, "/translations"),
    type: 'update',
    data: _ref2 => {
      let {
        translations
      } = _ref2;
      return {
        translations
      };
    }
  });
  const [saveTranslations, {
    loading: saveInProgress
  }] = (0, _appRuntime.useDataMutation)(translationsMutationRef.current, {
    onComplete: () => {
      onTranslationSaved();
    },
    onError: error => showError(error)
  });

  const onLocaleChange = locale => {
    setTranslationLocale(locale);
    window.sessionStorage.setItem(SESSION_STORAGE_TRANSLATION_LOCALE_KEY, locale);
  };

  const save = () => saveTranslations({
    translations: newTranslations
  });

  (0, _react.useEffect)(() => setTranslationLocale(window.sessionStorage.getItem(SESSION_STORAGE_TRANSLATION_LOCALE_KEY)), []);
  (0, _react.useEffect)(() => {
    const fetchTranslations = () => fetchFieldsTranslations(fieldsToTranslate);

    fetchTranslations();
  }, [fieldsToTranslate]);
  (0, _react.useEffect)(() => setNewTranslations(translations), [translations]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.ModalContent, null, /*#__PURE__*/_react.default.createElement(_ui.DataTable, {
    layout: "fixed"
  }, /*#__PURE__*/_react.default.createElement(_ui.DataTableHead, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableRow, null, /*#__PURE__*/_react.default.createElement(_ui.DataTableColumnHeader, {
    fixed: true,
    top: "0"
  }, _d2I18n.default.t('Base locale reference')), /*#__PURE__*/_react.default.createElement(_ui.DataTableColumnHeader, {
    fixed: true,
    top: "0"
  }, /*#__PURE__*/_react.default.createElement(_LocalesSelect.LocalesSelect, {
    selected: translationLocale,
    onChange: onLocaleChange
  })))), /*#__PURE__*/_react.default.createElement(_ui.DataTableBody, null, fieldsToTranslate.map((field, index) => /*#__PURE__*/_react.default.createElement(_ui.DataTableRow, {
    key: field
  }, /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, null, /*#__PURE__*/_react.default.createElement(_ui.TextAreaField, {
    label: fieldsTranslations[field],
    value: objectToTranslate[field],
    readOnly: true,
    rows: 3
  })), translationLocale && /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, null, /*#__PURE__*/_react.default.createElement(_ui.TextAreaField, {
    label: fieldsTranslations[field],
    value: getTranslationForField(field),
    onChange: _ref3 => {
      let {
        value
      } = _ref3;
      return setTranslationForField(field, value);
    },
    rows: 3
  })), !translationLocale && index === 0 && /*#__PURE__*/_react.default.createElement(_ui.DataTableCell, {
    rowSpan: String(fieldsToTranslate.length)
  }, /*#__PURE__*/_react.default.createElement(_ui.CenteredContent, null, _d2I18n.default.t('Choose a locale to translate from the menu above')))))))), /*#__PURE__*/_react.default.createElement(_TranslationModalActions.TranslationModalActions, {
    onClose: onClose,
    onSave: save,
    saveInProgress: saveInProgress,
    saveButtonDisabled: !translationLocale
  }));
};

exports.TranslationForm = TranslationForm;
TranslationForm.propTypes = {
  fieldsToTranslate: _propTypes.default.array.isRequired,
  objectToTranslate: _propTypes.default.object.isRequired,
  resource: _propTypes.default.string.isRequired,
  translations: _propTypes.default.array.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onTranslationSaved: _propTypes.default.func.isRequired
};