"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslationsResults = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const useTranslationsResults = _ref => {
  let {
    resource
  } = _ref;
  const translationsQueryRef = (0, _react.useRef)({
    translations: {
      resource: `${resource}/translations`
    }
  });
  const {
    data,
    fetching,
    refetch
  } = (0, _appRuntime.useDataQuery)(translationsQueryRef.current, {
    onError: error => showError(error)
  });
  const {
    show: showError
  } = (0, _appRuntime.useAlert)(error => error.message || _d2I18n.default.t('Could not load translations'), {
    critical: true,
    actions: [{
      label: _d2I18n.default.t('Retry'),
      onClick: refetch
    }]
  });
  return {
    translationsData: fetching ? undefined : data.translations.translations,
    fetching
  };
};
exports.useTranslationsResults = useTranslationsResults;