"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataTypeMap = exports.TOTALS = exports.SUB_GROUP_METRIC = exports.SUB_GROUP_DETAIL = exports.DIMENSION_TYPE_PROGRAM_INDICATOR = exports.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT = exports.DIMENSION_TYPE_PROGRAM_ATTRIBUTE = exports.DIMENSION_TYPE_PERIOD = exports.DIMENSION_TYPE_ORGANISATION_UNIT_GROUP_SET = exports.DIMENSION_TYPE_ORGANISATION_UNIT = exports.DIMENSION_TYPE_INDICATOR = exports.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM = exports.DIMENSION_TYPE_EVENT_DATA_ITEM = exports.DIMENSION_TYPE_DATA_SET = exports.DIMENSION_TYPE_DATA_ELEMENT_OPERAND = exports.DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET = exports.DIMENSION_TYPE_DATA_ELEMENT = exports.DIMENSION_TYPE_DATA = exports.DIMENSION_TYPE_CATEGORY_OPTION_GROUP_SET = exports.DIMENSION_TYPE_CATEGORY = exports.DIMENSION_TYPE_ALL = exports.DETAIL = exports.DEFAULT_DATATYPE_ID = void 0;
exports.defaultGroupDetail = defaultGroupDetail;
exports.defaultGroupId = defaultGroupId;
var _index = _interopRequireDefault(require("../locales/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DIMENSION_TYPE_ALL = exports.DIMENSION_TYPE_ALL = 'ALL';
const DIMENSION_TYPE_INDICATOR = exports.DIMENSION_TYPE_INDICATOR = 'INDICATOR';
const DIMENSION_TYPE_DATA_ELEMENT = exports.DIMENSION_TYPE_DATA_ELEMENT = 'DATA_ELEMENT';
const DIMENSION_TYPE_DATA_SET = exports.DIMENSION_TYPE_DATA_SET = 'DATA_SET';
const DIMENSION_TYPE_EVENT_DATA_ITEM = exports.DIMENSION_TYPE_EVENT_DATA_ITEM = 'EVENT_DATA_ITEM';
const DIMENSION_TYPE_PROGRAM_INDICATOR = exports.DIMENSION_TYPE_PROGRAM_INDICATOR = 'PROGRAM_INDICATOR';
const DIMENSION_TYPE_PROGRAM_DATA_ELEMENT = exports.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT = 'PROGRAM_DATA_ELEMENT';
const DIMENSION_TYPE_PROGRAM_ATTRIBUTE = exports.DIMENSION_TYPE_PROGRAM_ATTRIBUTE = 'PROGRAM_ATTRIBUTE';
const DIMENSION_TYPE_DATA_ELEMENT_OPERAND = exports.DIMENSION_TYPE_DATA_ELEMENT_OPERAND = 'DATA_ELEMENT_OPERAND';
const DIMENSION_TYPE_CATEGORY = exports.DIMENSION_TYPE_CATEGORY = 'CATEGORY';
const DIMENSION_TYPE_CATEGORY_OPTION_GROUP_SET = exports.DIMENSION_TYPE_CATEGORY_OPTION_GROUP_SET = 'CATEGORY_OPTION_GROUP_SET';
const DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET = exports.DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET = 'DATA_ELEMENT_GROUP_SET';
const DIMENSION_TYPE_DATA = exports.DIMENSION_TYPE_DATA = 'DATA_X';
const DIMENSION_TYPE_PERIOD = exports.DIMENSION_TYPE_PERIOD = 'PERIOD';
const DIMENSION_TYPE_ORGANISATION_UNIT = exports.DIMENSION_TYPE_ORGANISATION_UNIT = 'ORGANISATION_UNIT';
const DIMENSION_TYPE_ORGANISATION_UNIT_GROUP_SET = exports.DIMENSION_TYPE_ORGANISATION_UNIT_GROUP_SET = 'ORGANISATION_UNIT_GROUP_SET';
const DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM = exports.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM = 'EXPRESSION_DIMENSION_ITEM';
const TOTALS = exports.TOTALS = 'totals';
const DETAIL = exports.DETAIL = 'detail';
const SUB_GROUP_DETAIL = exports.SUB_GROUP_DETAIL = 'DETAIL';
const SUB_GROUP_METRIC = exports.SUB_GROUP_METRIC = 'METRIC';
const getProgramText = () => _index.default.t('Program');
const getSelectProgramText = () => _index.default.t('Select a program');
const dataTypeMap = exports.dataTypeMap = {
  [DIMENSION_TYPE_INDICATOR]: {
    id: DIMENSION_TYPE_INDICATOR,
    getName: () => _index.default.t('Indicators'),
    getGroupLabel: () => _index.default.t('Indicator group'),
    defaultGroup: {
      id: DIMENSION_TYPE_ALL,
      getName: () => _index.default.t('All groups')
    },
    getItemName: () => _index.default.t('Indicator'),
    getGroupEmptyLabel: () => _index.default.t('No indicator groups found'),
    getGroupLoadingLabel: () => _index.default.t('Loading indicator groups')
  },
  [DIMENSION_TYPE_DATA_ELEMENT]: {
    id: DIMENSION_TYPE_DATA_ELEMENT,
    getName: () => _index.default.t('Data elements'),
    getGroupLabel: () => _index.default.t('Data element group'),
    defaultGroup: {
      id: DIMENSION_TYPE_ALL,
      getName: () => _index.default.t('All groups')
    },
    subGroup: SUB_GROUP_DETAIL,
    getItemName: () => _index.default.t('Data element'),
    getGroupEmptyLabel: () => _index.default.t('No data element groups found'),
    getGroupLoadingLabel: () => _index.default.t('Loading data element groups')
  },
  [DIMENSION_TYPE_DATA_SET]: {
    id: DIMENSION_TYPE_DATA_SET,
    getName: () => _index.default.t('Data sets'),
    getGroupLabel: () => _index.default.t('Data set'),
    defaultGroup: {
      id: DIMENSION_TYPE_ALL,
      getName: () => _index.default.t('All data sets')
    },
    subGroup: SUB_GROUP_METRIC,
    getItemName: () => _index.default.t('Data set'),
    getGroupEmptyLabel: () => _index.default.t('No data sets found'),
    getGroupLoadingLabel: () => _index.default.t('Loading data sets')
  },
  [DIMENSION_TYPE_EVENT_DATA_ITEM]: {
    id: DIMENSION_TYPE_EVENT_DATA_ITEM,
    getName: () => _index.default.t('Event data items'),
    getGroupLabel: getProgramText,
    getPlaceholder: getSelectProgramText,
    defaultGroup: {
      id: DIMENSION_TYPE_ALL,
      getName: () => _index.default.t('All programs')
    },
    getItemName: () => _index.default.t('Event data item'),
    getGroupEmptyLabel: () => _index.default.t('No programs found'),
    getGroupLoadingLabel: () => _index.default.t('Loading programs')
  },
  [DIMENSION_TYPE_PROGRAM_INDICATOR]: {
    id: DIMENSION_TYPE_PROGRAM_INDICATOR,
    getName: () => _index.default.t('Program indicators'),
    getGroupLabel: getProgramText,
    getPlaceholder: getSelectProgramText,
    defaultGroup: {
      id: DIMENSION_TYPE_ALL,
      getName: () => _index.default.t('All programs')
    },
    getItemName: () => _index.default.t('Program indicator'),
    getGroupEmptyLabel: () => _index.default.t('No programs found'),
    getGroupLoadingLabel: () => _index.default.t('Loading programs')
  },
  [DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM]: {
    id: DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM,
    getName: () => _index.default.t('Calculations'),
    getItemName: () => _index.default.t('Calculation')
  }
};
function defaultGroupId(dataType) {
  return dataTypeMap[dataType].defaultGroup ? dataTypeMap[dataType].defaultGroup.id : '';
}
function defaultGroupDetail(dataType) {
  return dataTypeMap[dataType].groupDetail ? dataTypeMap[dataType].groupDetail.default : '';
}
const DEFAULT_DATATYPE_ID = exports.DEFAULT_DATATYPE_ID = DIMENSION_TYPE_INDICATOR;