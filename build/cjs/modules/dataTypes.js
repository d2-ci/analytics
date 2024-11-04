"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataTypeMap = exports.TOTALS = exports.SUB_GROUP_METRIC = exports.SUB_GROUP_DETAIL = exports.DIMENSION_TYPE_PROGRAM_INDICATOR = exports.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT = exports.DIMENSION_TYPE_PROGRAM_ATTRIBUTE = exports.DIMENSION_TYPE_PERIOD = exports.DIMENSION_TYPE_ORGANISATION_UNIT_GROUP_SET = exports.DIMENSION_TYPE_ORGANISATION_UNIT = exports.DIMENSION_TYPE_INDICATOR = exports.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM = exports.DIMENSION_TYPE_EVENT_DATA_ITEM = exports.DIMENSION_TYPE_DATA_SET = exports.DIMENSION_TYPE_DATA_ELEMENT_OPERAND = exports.DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET = exports.DIMENSION_TYPE_DATA_ELEMENT = exports.DIMENSION_TYPE_DATA = exports.DIMENSION_TYPE_CATEGORY_OPTION_GROUP_SET = exports.DIMENSION_TYPE_CATEGORY = exports.DIMENSION_TYPE_ALL = exports.DETAIL = exports.DEFAULT_DATATYPE_ID = void 0;
exports.defaultGroupDetail = defaultGroupDetail;
exports.defaultGroupId = defaultGroupId;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DIMENSION_TYPE_ALL = 'ALL';
exports.DIMENSION_TYPE_ALL = DIMENSION_TYPE_ALL;
const DIMENSION_TYPE_INDICATOR = 'INDICATOR';
exports.DIMENSION_TYPE_INDICATOR = DIMENSION_TYPE_INDICATOR;
const DIMENSION_TYPE_DATA_ELEMENT = 'DATA_ELEMENT';
exports.DIMENSION_TYPE_DATA_ELEMENT = DIMENSION_TYPE_DATA_ELEMENT;
const DIMENSION_TYPE_DATA_SET = 'DATA_SET';
exports.DIMENSION_TYPE_DATA_SET = DIMENSION_TYPE_DATA_SET;
const DIMENSION_TYPE_EVENT_DATA_ITEM = 'EVENT_DATA_ITEM';
exports.DIMENSION_TYPE_EVENT_DATA_ITEM = DIMENSION_TYPE_EVENT_DATA_ITEM;
const DIMENSION_TYPE_PROGRAM_INDICATOR = 'PROGRAM_INDICATOR';
exports.DIMENSION_TYPE_PROGRAM_INDICATOR = DIMENSION_TYPE_PROGRAM_INDICATOR;
const DIMENSION_TYPE_PROGRAM_DATA_ELEMENT = 'PROGRAM_DATA_ELEMENT';
exports.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT = DIMENSION_TYPE_PROGRAM_DATA_ELEMENT;
const DIMENSION_TYPE_PROGRAM_ATTRIBUTE = 'PROGRAM_ATTRIBUTE';
exports.DIMENSION_TYPE_PROGRAM_ATTRIBUTE = DIMENSION_TYPE_PROGRAM_ATTRIBUTE;
const DIMENSION_TYPE_DATA_ELEMENT_OPERAND = 'DATA_ELEMENT_OPERAND';
exports.DIMENSION_TYPE_DATA_ELEMENT_OPERAND = DIMENSION_TYPE_DATA_ELEMENT_OPERAND;
const DIMENSION_TYPE_CATEGORY = 'CATEGORY';
exports.DIMENSION_TYPE_CATEGORY = DIMENSION_TYPE_CATEGORY;
const DIMENSION_TYPE_CATEGORY_OPTION_GROUP_SET = 'CATEGORY_OPTION_GROUP_SET';
exports.DIMENSION_TYPE_CATEGORY_OPTION_GROUP_SET = DIMENSION_TYPE_CATEGORY_OPTION_GROUP_SET;
const DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET = 'DATA_ELEMENT_GROUP_SET';
exports.DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET = DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET;
const DIMENSION_TYPE_DATA = 'DATA_X';
exports.DIMENSION_TYPE_DATA = DIMENSION_TYPE_DATA;
const DIMENSION_TYPE_PERIOD = 'PERIOD';
exports.DIMENSION_TYPE_PERIOD = DIMENSION_TYPE_PERIOD;
const DIMENSION_TYPE_ORGANISATION_UNIT = 'ORGANISATION_UNIT';
exports.DIMENSION_TYPE_ORGANISATION_UNIT = DIMENSION_TYPE_ORGANISATION_UNIT;
const DIMENSION_TYPE_ORGANISATION_UNIT_GROUP_SET = 'ORGANISATION_UNIT_GROUP_SET';
exports.DIMENSION_TYPE_ORGANISATION_UNIT_GROUP_SET = DIMENSION_TYPE_ORGANISATION_UNIT_GROUP_SET;
const DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM = 'EXPRESSION_DIMENSION_ITEM';
exports.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM = DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM;
const TOTALS = 'totals';
exports.TOTALS = TOTALS;
const DETAIL = 'detail';
exports.DETAIL = DETAIL;
const SUB_GROUP_DETAIL = 'DETAIL';
exports.SUB_GROUP_DETAIL = SUB_GROUP_DETAIL;
const SUB_GROUP_METRIC = 'METRIC';
exports.SUB_GROUP_METRIC = SUB_GROUP_METRIC;
const getProgramText = () => _d2I18n.default.t('Program');
const getSelectProgramText = () => _d2I18n.default.t('Select a program');
const dataTypeMap = {
  [DIMENSION_TYPE_INDICATOR]: {
    id: DIMENSION_TYPE_INDICATOR,
    getName: () => _d2I18n.default.t('Indicators'),
    getGroupLabel: () => _d2I18n.default.t('Indicator group'),
    defaultGroup: {
      id: DIMENSION_TYPE_ALL,
      getName: () => _d2I18n.default.t('All groups')
    },
    getItemName: () => _d2I18n.default.t('Indicator'),
    getGroupEmptyLabel: () => _d2I18n.default.t('No indicator groups found'),
    getGroupLoadingLabel: () => _d2I18n.default.t('Loading indicator groups')
  },
  [DIMENSION_TYPE_DATA_ELEMENT]: {
    id: DIMENSION_TYPE_DATA_ELEMENT,
    getName: () => _d2I18n.default.t('Data elements'),
    getGroupLabel: () => _d2I18n.default.t('Data element group'),
    defaultGroup: {
      id: DIMENSION_TYPE_ALL,
      getName: () => _d2I18n.default.t('All groups')
    },
    subGroup: SUB_GROUP_DETAIL,
    getItemName: () => _d2I18n.default.t('Data element'),
    getGroupEmptyLabel: () => _d2I18n.default.t('No data element groups found'),
    getGroupLoadingLabel: () => _d2I18n.default.t('Loading data element groups')
  },
  [DIMENSION_TYPE_DATA_SET]: {
    id: DIMENSION_TYPE_DATA_SET,
    getName: () => _d2I18n.default.t('Data sets'),
    getGroupLabel: () => _d2I18n.default.t('Data set'),
    defaultGroup: {
      id: DIMENSION_TYPE_ALL,
      getName: () => _d2I18n.default.t('All data sets')
    },
    subGroup: SUB_GROUP_METRIC,
    getItemName: () => _d2I18n.default.t('Data set'),
    getGroupEmptyLabel: () => _d2I18n.default.t('No data sets found'),
    getGroupLoadingLabel: () => _d2I18n.default.t('Loading data sets')
  },
  [DIMENSION_TYPE_EVENT_DATA_ITEM]: {
    id: DIMENSION_TYPE_EVENT_DATA_ITEM,
    getName: () => _d2I18n.default.t('Event data items'),
    getGroupLabel: getProgramText,
    getPlaceholder: getSelectProgramText,
    defaultGroup: {
      id: DIMENSION_TYPE_ALL,
      getName: () => _d2I18n.default.t('All programs')
    },
    getItemName: () => _d2I18n.default.t('Event data item'),
    getGroupEmptyLabel: () => _d2I18n.default.t('No programs found'),
    getGroupLoadingLabel: () => _d2I18n.default.t('Loading programs')
  },
  [DIMENSION_TYPE_PROGRAM_INDICATOR]: {
    id: DIMENSION_TYPE_PROGRAM_INDICATOR,
    getName: () => _d2I18n.default.t('Program indicators'),
    getGroupLabel: getProgramText,
    getPlaceholder: getSelectProgramText,
    defaultGroup: {
      id: DIMENSION_TYPE_ALL,
      getName: () => _d2I18n.default.t('All programs')
    },
    getItemName: () => _d2I18n.default.t('Program indicator'),
    getGroupEmptyLabel: () => _d2I18n.default.t('No programs found'),
    getGroupLoadingLabel: () => _d2I18n.default.t('Loading programs')
  },
  [DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM]: {
    id: DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM,
    getName: () => _d2I18n.default.t('Calculations'),
    getItemName: () => _d2I18n.default.t('Calculation')
  }
};
exports.dataTypeMap = dataTypeMap;
function defaultGroupId(dataType) {
  return dataTypeMap[dataType].defaultGroup ? dataTypeMap[dataType].defaultGroup.id : '';
}
function defaultGroupDetail(dataType) {
  return dataTypeMap[dataType].groupDetail ? dataTypeMap[dataType].groupDetail.default : '';
}
const DEFAULT_DATATYPE_ID = DIMENSION_TYPE_INDICATOR;
exports.DEFAULT_DATATYPE_ID = DEFAULT_DATATYPE_ID;