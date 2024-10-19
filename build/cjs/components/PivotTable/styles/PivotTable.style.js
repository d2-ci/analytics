"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.table = exports.sortIcon = exports.cell = void 0;
var _ui = require("@dhis2/ui");
var _pivotTableConstants = require("../../../modules/pivotTable/pivotTableConstants.js");
const table = [`div.pivot-table-container.jsx-3572446209{font-family:'Roboto',Arial,sans-serif;overflow:auto;color:${_ui.colors.grey900};}`, `div.pivot-table-container.jsx-3572446209 table{border-spacing:0;white-space:nowrap;box-sizing:border-box;text-align:center;border:1px solid ${_pivotTableConstants.BORDER_COLOR};border-width:1px 1px 0 0;}`, "div.pivot-table-container.jsx-3572446209 table.fixed-headers{border-width:0 0 0 1px;}", "div.pivot-table-container.jsx-3572446209 table.fixed-headers tr th,div.pivot-table-container.jsx-3572446209 table.fixed-headers tr td{border-width:0 1px 1px 0;}", "div.pivot-table-container.jsx-3572446209 table.fixed-column-headers{border-width:0 1px 0 0;}", "div.pivot-table-container.jsx-3572446209 table.fixed-column-headers tr th,div.pivot-table-container.jsx-3572446209 table.fixed-column-headers tr td{border-width:0 0 1px 1px;}", `div.pivot-table-container.jsx-3572446209 table.fixed-headers thead tr:first-of-type th,div.pivot-table-container.jsx-3572446209 table.fixed-column-headers thead tr:first-of-type th{border-top:1px solid ${_pivotTableConstants.BORDER_COLOR};}`, "div.pivot-table-container.jsx-3572446209 table.fixed-row-headers{border-width:0 0 1px 1px;}", "div.pivot-table-container.jsx-3572446209 table.fixed-row-headers tr th,div.pivot-table-container.jsx-3572446209 table.fixed-row-headers tr td{border-width:1px 1px 0 0;}"];
exports.table = table;
table.__hash = "3572446209";
const cell = [`td.jsx-2444037071,th.jsx-2444037071{box-sizing:border-box;font-weight:normal;overflow:hidden;text-overflow:ellipsis;border:1px solid ${_pivotTableConstants.BORDER_COLOR};border-width:0 0 1px 1px;cursor:default;}`, "th.fixed-header.jsx-2444037071{position:-webkit-sticky;position:sticky;z-index:1;top:0;left:0;}", `.fontsize-SMALL.jsx-2444037071{font-size:${_pivotTableConstants.FONT_SIZE_SMALL}px;line-height:${_pivotTableConstants.FONT_SIZE_SMALL}px;}`, `.fontsize-NORMAL.jsx-2444037071{font-size:${_pivotTableConstants.FONT_SIZE_NORMAL}px;line-height:${_pivotTableConstants.FONT_SIZE_NORMAL}px;}`, `.fontsize-LARGE.jsx-2444037071{font-size:${_pivotTableConstants.FONT_SIZE_LARGE}px;line-height:${_pivotTableConstants.FONT_SIZE_LARGE}px;}`, `.displaydensity-COMPACT.jsx-2444037071{padding:${_pivotTableConstants.DISPLAY_DENSITY_PADDING_COMPACT}px;}`, `.displaydensity-NORMAL.jsx-2444037071{padding:${_pivotTableConstants.DISPLAY_DENSITY_PADDING_NORMAL}px;}`, `.displaydensity-COMFORTABLE.jsx-2444037071{padding:${_pivotTableConstants.DISPLAY_DENSITY_PADDING_COMFORTABLE}px;}`, ".column-header.jsx-2444037071{background-color:#dae6f8;}", "div.column-header-inner.jsx-2444037071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".title-cell.jsx-2444037071{font-weight:bold;background-color:#cddaed;padding:0;}", ".title-cell-content.jsx-2444037071{text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}", `.title-cell.displaydensity-COMPACT.jsx-2444037071>.title-cell-content.jsx-2444037071{padding:${_pivotTableConstants.DISPLAY_DENSITY_PADDING_COMPACT}px;}`, `.title-cell.displaydensity-NORMAL.jsx-2444037071>.title-cell-content.jsx-2444037071{padding:${_pivotTableConstants.DISPLAY_DENSITY_PADDING_NORMAL}px;}`, `.title-cell.displaydensity-COMFORTABLE.jsx-2444037071>.title-cell-content.jsx-2444037071{padding:${_pivotTableConstants.DISPLAY_DENSITY_PADDING_COMFORTABLE}px;}`, ".row-header.jsx-2444037071{background-color:#dae6f8;}", ".row-header-hierarchy.jsx-2444037071{text-align:left;}", ".empty-header.jsx-2444037071{background-color:#cddaed;}", ".total-header.jsx-2444037071{background-color:#bac6d8;}", ".value.jsx-2444037071{background-color:#ffffff;text-align:left;}", ".NUMBER.jsx-2444037071,.INTEGER.jsx-2444037071,.INTEGER_POSITIVE.jsx-2444037071,.INTEGER_NEGATIVE.jsx-2444037071,.INTEGER_ZERO_OR_POSITIVE.jsx-2444037071,.UNIT_INTERVAL.jsx-2444037071,.PERCENTAGE.jsx-2444037071,.BOOLEAN.jsx-2444037071,.TRUE_ONLY.jsx-2444037071{text-align:right;}", `.N_A.jsx-2444037071{text-align:center;color:${_ui.colors.grey600};}`, ".clickable.jsx-2444037071{cursor:pointer;}", ".value.jsx-2444037071:hover{background-color:#f3f3f3;}", ".subtotal.jsx-2444037071{background-color:#f4f4f4;}", ".total.jsx-2444037071{background-color:#d8d8d8;}", ".column-header-label.jsx-2444037071{overflow:hidden;text-overflow:ellipsis;}"];
exports.cell = cell;
cell.__hash = "2444037071";
const sortIcon = [`.fontsize-SMALL.jsx-2877616992{height:${_pivotTableConstants.FONT_SIZE_SMALL}px;margin-bottom:1px;margin-left:5px;}`, `.fontsize-NORMAL.jsx-2877616992{height:${_pivotTableConstants.FONT_SIZE_NORMAL}px;max-height:11px;margin-bottom:2px;margin-left:6px;}`, `.fontsize-LARGE.jsx-2877616992{height:${_pivotTableConstants.FONT_SIZE_LARGE}px;margin-bottom:2px;margin-left:7px;}`];
exports.sortIcon = sortIcon;
sortIcon.__hash = "2877616992";