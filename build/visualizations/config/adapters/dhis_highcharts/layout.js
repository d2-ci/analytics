"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldHaveDualAxis = shouldHaveDualAxis;

var _seriesItems = require("./seriesItems");

var _type = require("./type");

var DATA_DIMENSION_ID = 'dx';

function isDataSeries(columns) {
  return Array.isArray(columns) && columns[0] && columns[0].dimension === DATA_DIMENSION_ID;
}

function hasMultipleSeriesItems(columns) {
  return Array.isArray(columns) && columns[0] && Array.isArray(columns[0].items) && columns[0].items.length > 1;
}

function shouldHaveDualAxis(layout) {
  return (0, _type.isDualAxis)(layout.type) && isDataSeries(layout.columns) && hasMultipleSeriesItems(layout.columns) && (0, _seriesItems.hasExtraAxisItems)(layout.seriesItems, layout.columns);
}