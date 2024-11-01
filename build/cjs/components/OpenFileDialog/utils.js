"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslatedString = exports.AO_TYPE_VISUALIZATION = exports.AO_TYPE_MAP = exports.AO_TYPE_EVENT_VISUALIZATION = exports.AOTypeMap = void 0;
var _index = _interopRequireDefault(require("../../locales/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AO_TYPE_VISUALIZATION = 'visualization';
exports.AO_TYPE_VISUALIZATION = AO_TYPE_VISUALIZATION;
const AO_TYPE_MAP = 'map';
exports.AO_TYPE_MAP = AO_TYPE_MAP;
const AO_TYPE_EVENT_VISUALIZATION = 'eventVisualization';
exports.AO_TYPE_EVENT_VISUALIZATION = AO_TYPE_EVENT_VISUALIZATION;
const AOTypeMap = {
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
exports.AOTypeMap = AOTypeMap;
const NO_TYPE = 'NO_TYPE';
const texts = {
  [NO_TYPE]: {
    modalTitle: _index.default.t('Open'),
    loadingText: _index.default.t('Loading'),
    errorTitle: _index.default.t("Couldn't load items"),
    errorText: _index.default.t('There was a problem loading items. Try again or contact your system administrator.'),
    noDataText: _index.default.t('No items found. Create a new to get started.'),
    noFilteredDataText: _index.default.t("No items found. Try adjusting your search or filter options to find what you're looking for."),
    newButtonLabel: _index.default.t('Create new')
  },
  [AO_TYPE_VISUALIZATION]: {
    modalTitle: _index.default.t('Open a visualization'),
    loadingText: _index.default.t('Loading visualizations'),
    errorTitle: _index.default.t("Couldn't load visualizations"),
    errorText: _index.default.t('There was a problem loading visualizations. Try again or contact your system administrator.'),
    noDataText: _index.default.t('No visualizations found. Click New visualization to get started.'),
    noFilteredDataText: _index.default.t("No visualizations found. Try adjusting your search or filter options to find what you're looking for."),
    newButtonLabel: _index.default.t('New visualization')
  },
  [AO_TYPE_MAP]: {
    modalTitle: _index.default.t('Open a map'),
    loadingText: _index.default.t('Loading maps'),
    errorTitle: _index.default.t("Couldn't load maps"),
    errorText: _index.default.t('There was a problem loading maps. Try again or contact your system administrator.'),
    noDataText: _index.default.t('No maps found. Click New map to get started.'),
    noFilteredDataText: _index.default.t("No maps found. Try adjusting your search or filter options to find what you're looking for."),
    newButtonLabel: _index.default.t('New map')
  },
  [AO_TYPE_EVENT_VISUALIZATION]: {
    modalTitle: _index.default.t('Open a line list'),
    loadingText: _index.default.t('Loading line lists'),
    errorTitle: _index.default.t("Couldn't load line lists"),
    errorText: _index.default.t('There was a problem loading line lists. Try again or contact your system administrator.'),
    noDataText: _index.default.t('No line lists found. Click New line list to get started.'),
    noFilteredDataText: _index.default.t("No line lists found. Try adjusting your search or filter options to find what you're looking for."),
    newButtonLabel: _index.default.t('New line list')
  }
};
const getTranslatedString = (type, key) => (texts[type] || texts[NO_TYPE])[key];
exports.getTranslatedString = getTranslatedString;