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
  [AO_TYPE_MAP]: {
    unitTitle: _d2I18n.default.t('About this map')
  },
  [AO_TYPE_EVENT_VISUALIZATION]: {
    unitTitle: _d2I18n.default.t('About this line list')
  },
  [AO_TYPE_VISUALIZATION]: {
    unitTitle: _d2I18n.default.t('About this visualization')
  },
  [NO_TYPE]: {
    unitTitle: _d2I18n.default.t('About this visualization')
  }
};
const getTranslatedString = (type, key) => (texts[type] || texts[NO_TYPE])[key];
exports.getTranslatedString = getTranslatedString;