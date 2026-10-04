"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSortableColumns = void 0;
var _react = require("react");
var _pivotTableConstants = require("./pivotTableConstants.js");
const useSortableColumns = engine => {
  const [sortBy, setSortBy] = (0, _react.useState)(null);
  const onSortByColumn = column => {
    let order = _pivotTableConstants.SORT_ORDER_ASCENDING;
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
      column,
      order
    }); // Force a re-render
  };
  return {
    sortBy,
    onSortByColumn
  };
};
exports.useSortableColumns = useSortableColumns;