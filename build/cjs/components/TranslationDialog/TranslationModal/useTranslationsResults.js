"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslationsResults = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _react = require("react");
var _index = _interopRequireDefault(require("../../../locales/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  } = (0, _appRuntime.useAlert)(error => error.message || _index.default.t('Could not load translations'), {
    critical: true,
    actions: [{
      label: _index.default.t('Retry'),
      onClick: refetch
    }]
  });
  return {
    translationsData: fetching ? undefined : data.translations.translations,
    fetching
  };
};
exports.useTranslationsResults = useTranslationsResults;