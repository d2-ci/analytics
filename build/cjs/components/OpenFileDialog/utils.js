"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslatedString = exports.AO_TYPE_VISUALIZATION = exports.AO_TYPE_MAP = exports.AO_TYPE_EVENT_VISUALIZATION = exports.AOTypeMap = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AO_TYPE_VISUALIZATION = exports.AO_TYPE_VISUALIZATION = 'visualization';
const AO_TYPE_MAP = exports.AO_TYPE_MAP = 'map';
const AO_TYPE_EVENT_VISUALIZATION = exports.AO_TYPE_EVENT_VISUALIZATION = 'eventVisualization';
const AOTypeMap = exports.AOTypeMap = {
  [AO_TYPE_VISUALIZATION]: {
    apiEndpoint: 'visualizations'
  },
  [AO_TYPE_MAP]: {
    apiEndpoint: 'maps'
  },
  [AO_TYPE_EVENT_VISUALIZATION]: {
    apiEndpoint: 'eventVisualizations'
  }
};
const NO_TYPE = 'NO_TYPE';
const texts = {
  [NO_TYPE]: {
    modalTitle: _d2I18n.default.t('Open'),
    loadingText: _d2I18n.default.t('Loading'),
    errorTitle: _d2I18n.default.t("Couldn't load items"),
    errorText: _d2I18n.default.t('There was a problem loading items. Try again or contact your system administrator.'),
    noDataText: _d2I18n.default.t('No items found. Create a new to get started.'),
    noFilteredDataText: _d2I18n.default.t("No items found. Try adjusting your search or filter options to find what you're looking for."),
    newButtonLabel: _d2I18n.default.t('Create new')
  },
  [AO_TYPE_VISUALIZATION]: {
    modalTitle: _d2I18n.default.t('Open a visualization'),
    loadingText: _d2I18n.default.t('Loading visualizations'),
    errorTitle: _d2I18n.default.t("Couldn't load visualizations"),
    errorText: _d2I18n.default.t('There was a problem loading visualizations. Try again or contact your system administrator.'),
    noDataText: _d2I18n.default.t('No visualizations found. Click New visualization to get started.'),
    noFilteredDataText: _d2I18n.default.t("No visualizations found. Try adjusting your search or filter options to find what you're looking for."),
    newButtonLabel: _d2I18n.default.t('New visualization')
  },
  [AO_TYPE_MAP]: {
    modalTitle: _d2I18n.default.t('Open a map'),
    loadingText: _d2I18n.default.t('Loading maps'),
    errorTitle: _d2I18n.default.t("Couldn't load maps"),
    errorText: _d2I18n.default.t('There was a problem loading maps. Try again or contact your system administrator.'),
    noDataText: _d2I18n.default.t('No maps found. Click New map to get started.'),
    noFilteredDataText: _d2I18n.default.t("No maps found. Try adjusting your search or filter options to find what you're looking for."),
    newButtonLabel: _d2I18n.default.t('New map')
  },
  [AO_TYPE_EVENT_VISUALIZATION]: {
    modalTitle: _d2I18n.default.t('Open a line list'),
    loadingText: _d2I18n.default.t('Loading line lists'),
    errorTitle: _d2I18n.default.t("Couldn't load line lists"),
    errorText: _d2I18n.default.t('There was a problem loading line lists. Try again or contact your system administrator.'),
    noDataText: _d2I18n.default.t('No line lists found. Click New line list to get started.'),
    noFilteredDataText: _d2I18n.default.t("No line lists found. Try adjusting your search or filter options to find what you're looking for."),
    newButtonLabel: _d2I18n.default.t('New line list')
  }
};
const getTranslatedString = (type, key) => (texts[type] || texts[NO_TYPE])[key];
exports.getTranslatedString = getTranslatedString;