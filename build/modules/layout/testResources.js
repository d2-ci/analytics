"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEST_LAYOUT = exports.TEST_AXIS_IDS_IN_LAYOUT = exports.TEST_AXES_IN_LAYOUT = exports.TEST_AXIS_EMPTY = exports.TEST_AXIS_FILTERS = exports.TEST_AXIS_ROWS = exports.TEST_AXIS_COLUMNS = exports.TEST_DIMENSIONS_IN_LAYOUT = exports.TEST_DIMENSION_INVALID_ITEMS_1 = exports.TEST_DIMENSION_INVALID_ID_2 = exports.TEST_DIMENSION_INVALID_ID_1 = exports.TEST_DIMENSION_EMPTY_1 = exports.TEST_DIMENSION_4 = exports.TEST_DIMENSION_3 = exports.TEST_DIMENSION_2 = exports.TEST_DIMENSION_1 = exports.DIMENSION_ID_DYNAMIC = exports.TEST_ITEMS_IN_LAYOUT = exports.TEST_ITEMS_IN_AXIS_2 = exports.TEST_ITEMS_IN_AXIS_1 = exports.TEST_ITEM_INVALID_2 = exports.TEST_ITEM_INVALID_1 = exports.TEST_ITEM_5 = exports.TEST_ITEM_4 = exports.TEST_ITEM_3 = exports.TEST_ITEM_2 = exports.TEST_ITEM_1 = exports.TEST_ITEM_ID_5 = exports.TEST_ITEM_ID_4 = exports.TEST_ITEM_ID_3 = exports.TEST_ITEM_ID_2 = exports.TEST_ITEM_ID_1 = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _item = require("./item");

var _dimension = require("./dimension");

var _axis = require("./axis");

var _predefinedDimensions = require("../predefinedDimensions");

var _TEST_DIMENSION_, _TEST_DIMENSION_2, _TEST_DIMENSION_3, _TEST_DIMENSION_4, _TEST_DIMENSION_EMPTY, _TEST_DIMENSION_INVAL2, _TEST_LAYOUT;

// Items
var TEST_ITEM_ID_1 = 'dxItem1Id';
exports.TEST_ITEM_ID_1 = TEST_ITEM_ID_1;
var TEST_ITEM_ID_2 = 'dxItem2Id';
exports.TEST_ITEM_ID_2 = TEST_ITEM_ID_2;
var TEST_ITEM_ID_3 = 'peItem1Id';
exports.TEST_ITEM_ID_3 = TEST_ITEM_ID_3;
var TEST_ITEM_ID_4 = 'ouItem1Id';
exports.TEST_ITEM_ID_4 = TEST_ITEM_ID_4;
var TEST_ITEM_ID_5 = 'dynamicItem1Id';
exports.TEST_ITEM_ID_5 = TEST_ITEM_ID_5;
var TEST_ITEM_1 = (0, _defineProperty2.default)({}, _item.ITEM_PROP_ID.name, TEST_ITEM_ID_1);
exports.TEST_ITEM_1 = TEST_ITEM_1;
var TEST_ITEM_2 = (0, _defineProperty2.default)({}, _item.ITEM_PROP_ID.name, TEST_ITEM_ID_2);
exports.TEST_ITEM_2 = TEST_ITEM_2;
var TEST_ITEM_3 = (0, _defineProperty2.default)({}, _item.ITEM_PROP_ID.name, TEST_ITEM_ID_3);
exports.TEST_ITEM_3 = TEST_ITEM_3;
var TEST_ITEM_4 = (0, _defineProperty2.default)({}, _item.ITEM_PROP_ID.name, TEST_ITEM_ID_4);
exports.TEST_ITEM_4 = TEST_ITEM_4;
var TEST_ITEM_5 = (0, _defineProperty2.default)({}, _item.ITEM_PROP_ID.name, TEST_ITEM_ID_5);
exports.TEST_ITEM_5 = TEST_ITEM_5;
var TEST_ITEM_INVALID_1 = (0, _defineProperty2.default)({}, _item.ITEM_PROP_ID.name, 10);
exports.TEST_ITEM_INVALID_1 = TEST_ITEM_INVALID_1;
var TEST_ITEM_INVALID_2 = {
  chicken: TEST_ITEM_ID_1
};
exports.TEST_ITEM_INVALID_2 = TEST_ITEM_INVALID_2;
var TEST_ITEMS_IN_AXIS_1 = [TEST_ITEM_1, TEST_ITEM_2];
exports.TEST_ITEMS_IN_AXIS_1 = TEST_ITEMS_IN_AXIS_1;
var TEST_ITEMS_IN_AXIS_2 = [TEST_ITEM_3];
exports.TEST_ITEMS_IN_AXIS_2 = TEST_ITEMS_IN_AXIS_2;
var TEST_ITEMS_IN_LAYOUT = [TEST_ITEM_1, TEST_ITEM_2, TEST_ITEM_3, TEST_ITEM_4, TEST_ITEM_5]; // Dimensions

exports.TEST_ITEMS_IN_LAYOUT = TEST_ITEMS_IN_LAYOUT;
var DIMENSION_ID_DYNAMIC = 'dynamicUid';
exports.DIMENSION_ID_DYNAMIC = DIMENSION_ID_DYNAMIC;
var TEST_DIMENSION_1 = (_TEST_DIMENSION_ = {}, (0, _defineProperty2.default)(_TEST_DIMENSION_, _dimension.DIMENSION_PROP_ID.name, _predefinedDimensions.DIMENSION_ID_DATA), (0, _defineProperty2.default)(_TEST_DIMENSION_, _dimension.DIMENSION_PROP_ITEMS.name, [TEST_ITEM_1, TEST_ITEM_2]), _TEST_DIMENSION_);
exports.TEST_DIMENSION_1 = TEST_DIMENSION_1;
var TEST_DIMENSION_2 = (_TEST_DIMENSION_2 = {}, (0, _defineProperty2.default)(_TEST_DIMENSION_2, _dimension.DIMENSION_PROP_ID.name, _predefinedDimensions.DIMENSION_ID_PERIOD), (0, _defineProperty2.default)(_TEST_DIMENSION_2, _dimension.DIMENSION_PROP_ITEMS.name, [TEST_ITEM_3]), _TEST_DIMENSION_2);
exports.TEST_DIMENSION_2 = TEST_DIMENSION_2;
var TEST_DIMENSION_3 = (_TEST_DIMENSION_3 = {}, (0, _defineProperty2.default)(_TEST_DIMENSION_3, _dimension.DIMENSION_PROP_ID.name, _predefinedDimensions.DIMENSION_ID_ORGUNIT), (0, _defineProperty2.default)(_TEST_DIMENSION_3, _dimension.DIMENSION_PROP_ITEMS.name, [TEST_ITEM_4]), _TEST_DIMENSION_3);
exports.TEST_DIMENSION_3 = TEST_DIMENSION_3;
var TEST_DIMENSION_4 = (_TEST_DIMENSION_4 = {}, (0, _defineProperty2.default)(_TEST_DIMENSION_4, _dimension.DIMENSION_PROP_ID.name, DIMENSION_ID_DYNAMIC), (0, _defineProperty2.default)(_TEST_DIMENSION_4, _dimension.DIMENSION_PROP_ITEMS.name, [TEST_ITEM_5]), _TEST_DIMENSION_4);
exports.TEST_DIMENSION_4 = TEST_DIMENSION_4;
var TEST_DIMENSION_EMPTY_1 = (_TEST_DIMENSION_EMPTY = {}, (0, _defineProperty2.default)(_TEST_DIMENSION_EMPTY, _dimension.DIMENSION_PROP_ID.name, _predefinedDimensions.DIMENSION_ID_DATA), (0, _defineProperty2.default)(_TEST_DIMENSION_EMPTY, _dimension.DIMENSION_PROP_ITEMS.name, []), _TEST_DIMENSION_EMPTY);
exports.TEST_DIMENSION_EMPTY_1 = TEST_DIMENSION_EMPTY_1;
var TEST_DIMENSION_INVALID_ID_1 = 'This prop is not an object';
exports.TEST_DIMENSION_INVALID_ID_1 = TEST_DIMENSION_INVALID_ID_1;
var TEST_DIMENSION_INVALID_ID_2 = (0, _defineProperty2.default)({}, _dimension.DIMENSION_PROP_ID.name, ['This prop is not a string']);
exports.TEST_DIMENSION_INVALID_ID_2 = TEST_DIMENSION_INVALID_ID_2;
var TEST_DIMENSION_INVALID_ITEMS_1 = (_TEST_DIMENSION_INVAL2 = {}, (0, _defineProperty2.default)(_TEST_DIMENSION_INVAL2, _dimension.DIMENSION_PROP_ID.name, _predefinedDimensions.DIMENSION_ID_DATA), (0, _defineProperty2.default)(_TEST_DIMENSION_INVAL2, _dimension.DIMENSION_PROP_ITEMS.name, 'This is not an array'), _TEST_DIMENSION_INVAL2);
exports.TEST_DIMENSION_INVALID_ITEMS_1 = TEST_DIMENSION_INVALID_ITEMS_1;
var TEST_DIMENSIONS_IN_LAYOUT = [TEST_DIMENSION_1, TEST_DIMENSION_2, TEST_DIMENSION_3, TEST_DIMENSION_4]; // Axes

exports.TEST_DIMENSIONS_IN_LAYOUT = TEST_DIMENSIONS_IN_LAYOUT;
var TEST_AXIS_COLUMNS = [TEST_DIMENSION_1];
exports.TEST_AXIS_COLUMNS = TEST_AXIS_COLUMNS;
var TEST_AXIS_ROWS = [TEST_DIMENSION_2];
exports.TEST_AXIS_ROWS = TEST_AXIS_ROWS;
var TEST_AXIS_FILTERS = [TEST_DIMENSION_3, TEST_DIMENSION_4];
exports.TEST_AXIS_FILTERS = TEST_AXIS_FILTERS;
var TEST_AXIS_EMPTY = [];
exports.TEST_AXIS_EMPTY = TEST_AXIS_EMPTY;
var TEST_AXES_IN_LAYOUT = [TEST_AXIS_COLUMNS, TEST_AXIS_ROWS, TEST_AXIS_FILTERS];
exports.TEST_AXES_IN_LAYOUT = TEST_AXES_IN_LAYOUT;
var TEST_AXIS_IDS_IN_LAYOUT = _axis.DEFAULT_AXIS_IDS; // Layout

exports.TEST_AXIS_IDS_IN_LAYOUT = TEST_AXIS_IDS_IN_LAYOUT;
var TEST_LAYOUT = (_TEST_LAYOUT = {}, (0, _defineProperty2.default)(_TEST_LAYOUT, _axis.AXIS_ID_COLUMNS, TEST_AXIS_COLUMNS), (0, _defineProperty2.default)(_TEST_LAYOUT, _axis.AXIS_ID_ROWS, TEST_AXIS_ROWS), (0, _defineProperty2.default)(_TEST_LAYOUT, _axis.AXIS_ID_FILTERS, TEST_AXIS_FILTERS), _TEST_LAYOUT);
exports.TEST_LAYOUT = TEST_LAYOUT;