"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEST_LAYOUT = exports.TEST_ITEM_INVALID_2 = exports.TEST_ITEM_INVALID_1 = exports.TEST_ITEM_ID_6 = exports.TEST_ITEM_ID_5 = exports.TEST_ITEM_ID_4 = exports.TEST_ITEM_ID_3 = exports.TEST_ITEM_ID_2 = exports.TEST_ITEM_ID_1 = exports.TEST_ITEM_6 = exports.TEST_ITEM_5 = exports.TEST_ITEM_4 = exports.TEST_ITEM_3 = exports.TEST_ITEM_2 = exports.TEST_ITEM_1 = exports.TEST_ITEMS_IN_LAYOUT = exports.TEST_ITEMS_IN_AXIS_2 = exports.TEST_ITEMS_IN_AXIS_1 = exports.TEST_DIMENSION_INVALID_ITEMS_1 = exports.TEST_DIMENSION_INVALID_ID_2 = exports.TEST_DIMENSION_INVALID_ID_1 = exports.TEST_DIMENSION_EMPTY_1 = exports.TEST_DIMENSION_5 = exports.TEST_DIMENSION_4 = exports.TEST_DIMENSION_3 = exports.TEST_DIMENSION_2 = exports.TEST_DIMENSION_1 = exports.TEST_DIMENSIONS_IN_LAYOUT = exports.TEST_AXIS_ROWS = exports.TEST_AXIS_IDS_IN_LAYOUT = exports.TEST_AXIS_FILTERS = exports.TEST_AXIS_EMPTY = exports.TEST_AXIS_COLUMNS = exports.TEST_AXES_IN_LAYOUT = exports.DIMENSION_ID_DYNAMIC = void 0;
var _relativePeriods = require("../../components/PeriodDimension/utils/relativePeriods.js");
var _predefinedDimensions = require("../predefinedDimensions.js");
var _axis = require("./axis.js");
var _dimension = require("./dimension.js");
var _item = require("./item.js");
// Items

const TEST_ITEM_ID_1 = exports.TEST_ITEM_ID_1 = 'dxItem1Id';
const TEST_ITEM_ID_2 = exports.TEST_ITEM_ID_2 = 'dxItem2Id';
const TEST_ITEM_ID_3 = exports.TEST_ITEM_ID_3 = 'peItem1Id';
const TEST_ITEM_ID_4 = exports.TEST_ITEM_ID_4 = 'ouItem1Id';
const TEST_ITEM_ID_5 = exports.TEST_ITEM_ID_5 = 'dynamicItem1Id';
const TEST_ITEM_ID_6 = exports.TEST_ITEM_ID_6 = (0, _relativePeriods.getRelativePeriodIds)()[0];
const TEST_ITEM_1 = exports.TEST_ITEM_1 = {
  [_item.ITEM_PROP_ID.name]: TEST_ITEM_ID_1
};
const TEST_ITEM_2 = exports.TEST_ITEM_2 = {
  [_item.ITEM_PROP_ID.name]: TEST_ITEM_ID_2
};
const TEST_ITEM_3 = exports.TEST_ITEM_3 = {
  [_item.ITEM_PROP_ID.name]: TEST_ITEM_ID_3
};
const TEST_ITEM_4 = exports.TEST_ITEM_4 = {
  [_item.ITEM_PROP_ID.name]: TEST_ITEM_ID_4
};
const TEST_ITEM_5 = exports.TEST_ITEM_5 = {
  [_item.ITEM_PROP_ID.name]: TEST_ITEM_ID_5
};
const TEST_ITEM_6 = exports.TEST_ITEM_6 = {
  [_item.ITEM_PROP_ID.name]: TEST_ITEM_ID_6
};
const TEST_ITEM_INVALID_1 = exports.TEST_ITEM_INVALID_1 = {
  [_item.ITEM_PROP_ID.name]: 10
};
const TEST_ITEM_INVALID_2 = exports.TEST_ITEM_INVALID_2 = {
  chicken: TEST_ITEM_ID_1
};
const TEST_ITEMS_IN_AXIS_1 = exports.TEST_ITEMS_IN_AXIS_1 = [TEST_ITEM_1, TEST_ITEM_2];
const TEST_ITEMS_IN_AXIS_2 = exports.TEST_ITEMS_IN_AXIS_2 = [TEST_ITEM_3];
const TEST_ITEMS_IN_LAYOUT = exports.TEST_ITEMS_IN_LAYOUT = [TEST_ITEM_1, TEST_ITEM_2, TEST_ITEM_3, TEST_ITEM_4, TEST_ITEM_5];

// Dimensions

const DIMENSION_ID_DYNAMIC = exports.DIMENSION_ID_DYNAMIC = 'dynamicUid';
const TEST_DIMENSION_1 = exports.TEST_DIMENSION_1 = {
  [_dimension.DIMENSION_PROP_ID.name]: _predefinedDimensions.DIMENSION_ID_DATA,
  [_dimension.DIMENSION_PROP_ITEMS.name]: [TEST_ITEM_1, TEST_ITEM_2]
};
const TEST_DIMENSION_2 = exports.TEST_DIMENSION_2 = {
  [_dimension.DIMENSION_PROP_ID.name]: _predefinedDimensions.DIMENSION_ID_PERIOD,
  [_dimension.DIMENSION_PROP_ITEMS.name]: [TEST_ITEM_3]
};
const TEST_DIMENSION_3 = exports.TEST_DIMENSION_3 = {
  [_dimension.DIMENSION_PROP_ID.name]: _predefinedDimensions.DIMENSION_ID_ORGUNIT,
  [_dimension.DIMENSION_PROP_ITEMS.name]: [TEST_ITEM_4]
};
const TEST_DIMENSION_4 = exports.TEST_DIMENSION_4 = {
  [_dimension.DIMENSION_PROP_ID.name]: DIMENSION_ID_DYNAMIC,
  [_dimension.DIMENSION_PROP_ITEMS.name]: [TEST_ITEM_5]
};
const TEST_DIMENSION_5 = exports.TEST_DIMENSION_5 = {
  [_dimension.DIMENSION_PROP_ID.name]: _predefinedDimensions.DIMENSION_ID_PERIOD,
  [_dimension.DIMENSION_PROP_ITEMS.name]: [TEST_ITEM_6]
};
const TEST_DIMENSION_EMPTY_1 = exports.TEST_DIMENSION_EMPTY_1 = {
  [_dimension.DIMENSION_PROP_ID.name]: _predefinedDimensions.DIMENSION_ID_DATA,
  [_dimension.DIMENSION_PROP_ITEMS.name]: []
};
const TEST_DIMENSION_INVALID_ID_1 = exports.TEST_DIMENSION_INVALID_ID_1 = 'This prop is not an object';
const TEST_DIMENSION_INVALID_ID_2 = exports.TEST_DIMENSION_INVALID_ID_2 = {
  [_dimension.DIMENSION_PROP_ID.name]: ['This prop is not a string']
};
const TEST_DIMENSION_INVALID_ITEMS_1 = exports.TEST_DIMENSION_INVALID_ITEMS_1 = {
  [_dimension.DIMENSION_PROP_ID.name]: _predefinedDimensions.DIMENSION_ID_DATA,
  [_dimension.DIMENSION_PROP_ITEMS.name]: 'This is not an array'
};
const TEST_DIMENSIONS_IN_LAYOUT = exports.TEST_DIMENSIONS_IN_LAYOUT = [TEST_DIMENSION_1, TEST_DIMENSION_2, TEST_DIMENSION_3, TEST_DIMENSION_4];

// Axes

const TEST_AXIS_COLUMNS = exports.TEST_AXIS_COLUMNS = [TEST_DIMENSION_1];
const TEST_AXIS_ROWS = exports.TEST_AXIS_ROWS = [TEST_DIMENSION_2];
const TEST_AXIS_FILTERS = exports.TEST_AXIS_FILTERS = [TEST_DIMENSION_3, TEST_DIMENSION_4];
const TEST_AXIS_EMPTY = exports.TEST_AXIS_EMPTY = [];
const TEST_AXES_IN_LAYOUT = exports.TEST_AXES_IN_LAYOUT = [TEST_AXIS_COLUMNS, TEST_AXIS_ROWS, TEST_AXIS_FILTERS];
const TEST_AXIS_IDS_IN_LAYOUT = exports.TEST_AXIS_IDS_IN_LAYOUT = _axis.DEFAULT_AXIS_IDS;

// Layout

const TEST_LAYOUT = exports.TEST_LAYOUT = {
  [_axis.AXIS_ID_COLUMNS]: TEST_AXIS_COLUMNS,
  [_axis.AXIS_ID_ROWS]: TEST_AXIS_ROWS,
  [_axis.AXIS_ID_FILTERS]: TEST_AXIS_FILTERS
};