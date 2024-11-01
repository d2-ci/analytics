"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslatedString = exports.AO_TYPE_VISUALIZATION = exports.AO_TYPE_MAP = exports.AO_TYPE_EVENT_VISUALIZATION = exports.AO_TYPE_EVENT_REPORT = exports.AO_TYPE_EVENT_CHART = exports.AOTypeMap = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AO_TYPE_VISUALIZATION = 'visualization';
exports.AO_TYPE_VISUALIZATION = AO_TYPE_VISUALIZATION;
const AO_TYPE_MAP = 'map';
exports.AO_TYPE_MAP = AO_TYPE_MAP;
const AO_TYPE_EVENT_VISUALIZATION = 'eventVisualization';
exports.AO_TYPE_EVENT_VISUALIZATION = AO_TYPE_EVENT_VISUALIZATION;
const AO_TYPE_EVENT_CHART = 'eventChart';
exports.AO_TYPE_EVENT_CHART = AO_TYPE_EVENT_CHART;
const AO_TYPE_EVENT_REPORT = 'eventReport';
exports.AO_TYPE_EVENT_REPORT = AO_TYPE_EVENT_REPORT;
const AOTypeMap = {
  [AO_TYPE_VISUALIZATION]: {
    apiEndpoint: 'visualizations'
  },
  [AO_TYPE_MAP]: {
    apiEndpoint: 'maps'
  },
  [AO_TYPE_EVENT_VISUALIZATION]: {
    apiEndpoint: 'eventVisualizations'
  },
  [AO_TYPE_EVENT_CHART]: {
    apiEndpoint: 'eventCharts'
  },
  [AO_TYPE_EVENT_REPORT]: {
    apiEndpoint: 'eventReports'
  }
};
exports.AOTypeMap = AOTypeMap;
const NO_TYPE = 'NO_TYPE';
const texts = {
  [AO_TYPE_MAP]: {
    unitTitle: _d2I18n.default.t('About this map')
  },
  [AO_TYPE_EVENT_VISUALIZATION]: {
    unitTitle: _d2I18n.default.t('About this line list')
  },
  [AO_TYPE_VISUALIZATION]: {
    unitTitle: _d2I18n.default.t('About this visualization')
  },
  [AO_TYPE_EVENT_CHART]: {
    unitTitle: _d2I18n.default.t('About this event chart')
  },
  [AO_TYPE_EVENT_REPORT]: {
    unitTitle: _d2I18n.default.t('About this event report')
  },
  [NO_TYPE]: {
    unitTitle: _d2I18n.default.t('About this visualization')
  }
};
const getTranslatedString = (type, key) => (texts[type] || texts[NO_TYPE])[key];
exports.getTranslatedString = getTranslatedString;