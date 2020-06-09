"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSortableColumns = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _pivotTableConstants = require("./pivotTableConstants");

var useSortableColumns = function useSortableColumns(engine) {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      sortBy = _useState2[0],
      setSortBy = _useState2[1];

  var onSortByColumn = function onSortByColumn(column) {
    var order = _pivotTableConstants.SORT_ORDER_ASCENDING;

    if (sortBy && sortBy.column === column) {
      if (sortBy.order === _pivotTableConstants.SORT_ORDER_ASCENDING) {
        order = _pivotTableConstants.SORT_ORDER_DESCENDING;
      } else if (sortBy.order === _pivotTableConstants.SORT_ORDER_DESCENDING) {
        engine.clearSort();
        setSortBy(null);
        return;
      }
    }

    engine.sort(column, order);
    setSortBy({
      column: column,
      order: order
    }); // Force a re-render
  };

  return {
    sortBy: sortBy,
    onSortByColumn: onSortByColumn
  };
};

exports.useSortableColumns = useSortableColumns;