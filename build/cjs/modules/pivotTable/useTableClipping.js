"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTableClipping = void 0;

var _react = require("react");

var _clipPartitionedAxis = require("./clipPartitionedAxis.js");

var _pivotTableConstants = require("./pivotTableConstants.js");

var _useScrollPosition = require("./useScrollPosition.js");

const useTableClipping = _ref => {
  let {
    containerRef,
    width,
    height,
    engine
  } = _ref;
  const scrollPosition = (0, _useScrollPosition.useScrollPosition)(containerRef);
  const lineHeight = engine.fontSize + engine.cellPadding * 2 + 2;
  const rows = (0, _react.useMemo)(() => {
    const headerSize = engine.adaptiveClippingController.rows.headerSize + (engine.options.title ? lineHeight : 0) + (engine.options.subtitle ? lineHeight : 0);
    const viewportPosition = engine.options.fixColumnHeaders ? scrollPosition.y : Math.max(0, scrollPosition.y - headerSize);
    const viewportWidth = height - (engine.options.fixColumnHeaders ? engine.adaptiveClippingController.rows.headerSize : Math.max(headerSize - scrollPosition.y, 0));
    return (0, _clipPartitionedAxis.clipPartitionedAxis)({
      partitionSize: _pivotTableConstants.CLIPPED_AXIS_PARTITION_SIZE_PX,
      partitions: engine.adaptiveClippingController.rows.partitions,
      axisMap: engine.rowMap,
      widthMap: engine.adaptiveClippingController.rows.sizes,
      viewportWidth,
      viewportPosition,
      totalWidth: engine.adaptiveClippingController.rows.totalSize
    });
  }, [scrollPosition.y, height, lineHeight, engine.adaptiveClippingController.rows.headerSize, engine.adaptiveClippingController.rows.partitions, engine.adaptiveClippingController.rows.sizes, engine.adaptiveClippingController.rows.totalSize, engine.options.fixColumnHeaders, engine.rowMap, engine.options.title, engine.options.subtitle]);
  const columns = (0, _react.useMemo)(() => {
    const viewportPosition = Math.max(0, engine.options.fixRowHeaders ? scrollPosition.x : scrollPosition.x - engine.adaptiveClippingController.columns.headerSize);
    const viewportWidth = width - (engine.options.fixRowHeaders ? engine.adaptiveClippingController.columns.headerSize : Math.max(engine.adaptiveClippingController.columns.headerSize - scrollPosition.x, 0));
    return (0, _clipPartitionedAxis.clipPartitionedAxis)({
      partitionSize: _pivotTableConstants.CLIPPED_AXIS_PARTITION_SIZE_PX,
      partitions: engine.adaptiveClippingController.columns.partitions,
      axisMap: engine.columnMap,
      widthMap: engine.adaptiveClippingController.columns.sizes,
      viewportWidth,
      viewportPosition,
      totalWidth: engine.adaptiveClippingController.columns.totalSize
    });
  }, [scrollPosition.x, width, engine.adaptiveClippingController.columns.headerSize, engine.adaptiveClippingController.columns.partitions, engine.adaptiveClippingController.columns.sizes, engine.adaptiveClippingController.columns.totalSize, engine.options.fixRowHeaders, engine.columnMap]);
  return {
    rows,
    columns,
    scrollPosition
  };
};

exports.useTableClipping = useTableClipping;