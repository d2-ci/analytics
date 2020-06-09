"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTableClipping = void 0;

var _react = require("react");

var _useScrollPosition = require("./useScrollPosition");

var _clipAxis = require("./clipAxis");

var _pivotTableConstants = require("./pivotTableConstants");

var _clipPartitionedAxis = require("./clipPartitionedAxis");

var useTableClipping = function useTableClipping(_ref) {
  var containerRef = _ref.containerRef,
      width = _ref.width,
      height = _ref.height,
      engine = _ref.engine,
      visualization = _ref.visualization;
  var scrollPosition = (0, _useScrollPosition.useScrollPosition)(containerRef);
  var rows = (0, _react.useMemo)(function () {
    return (0, _clipAxis.clipAxis)({
      position: scrollPosition.y,
      size: height,
      step: engine.fontSize + engine.cellPadding * 2 + 2,
      totalCount: engine.height,
      headerCount: visualization.columns.length + (engine.options.title ? 1 : 0) + (engine.options.subtitle ? 1 : 0)
    });
  }, [scrollPosition.y, height, engine.fontSize, engine.cellPadding, engine.height, engine.options.title, engine.options.subtitle, visualization.columns.length]);
  var columns = (0, _react.useMemo)(function () {
    var viewportPosition = Math.max(0, scrollPosition.x - engine.rowHeaderPixelWidth);
    var viewportWidth = width - Math.max(engine.rowHeaderPixelWidth - scrollPosition.x, 0);
    return (0, _clipPartitionedAxis.clipPartitionedAxis)({
      partitionSize: _pivotTableConstants.COLUMN_PARTITION_SIZE_PX,
      partitions: engine.columnPartitions,
      axisMap: engine.columnMap,
      widthMap: engine.columnWidths,
      viewportWidth: viewportWidth,
      viewportPosition: viewportPosition,
      totalWidth: engine.dataPixelWidth
    });
  }, [scrollPosition.x, engine.rowHeaderPixelWidth, engine.columnPartitions, engine.columnMap, engine.columnWidths, engine.dataPixelWidth, width]);
  return {
    rows: rows,
    columns: columns,
    scrollPosition: scrollPosition
  };
};

exports.useTableClipping = useTableClipping;