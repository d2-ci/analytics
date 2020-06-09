"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortIcon = exports.cell = exports.table = void 0;

var _uiCore = require("@dhis2/ui-core");

var _pivotTableConstants = require("../../../modules/pivotTable/pivotTableConstants");

var table = ["div.pivot-table-container.jsx-3458923541{font-family:'Roboto',Arial,sans-serif;overflow:auto;color:".concat(_uiCore.colors.grey900, ";}"), "table.jsx-3458923541{border-spacing:0;border-collapse:collapse;white-space:nowrap;overflow:hidden;box-sizing:border-box;text-align:center;}"];
exports.table = table;
table.__hash = "3458923541";
var cell = ["td.jsx-2951476454,th.jsx-2951476454{box-sizing:border-box;font-weight:normal;overflow:hidden;text-overflow:ellipsis;border:1px solid #b2b2b2;cursor:default;}", ".fontsize-SMALL.jsx-2951476454{font-size:".concat(_pivotTableConstants.FONT_SIZE_SMALL, "px;line-height:").concat(_pivotTableConstants.FONT_SIZE_SMALL, "px;}"), ".fontsize-NORMAL.jsx-2951476454{font-size:".concat(_pivotTableConstants.FONT_SIZE_NORMAL, "px;line-height:").concat(_pivotTableConstants.FONT_SIZE_NORMAL, "px;}"), ".fontsize-LARGE.jsx-2951476454{font-size:".concat(_pivotTableConstants.FONT_SIZE_LARGE, "px;line-height:").concat(_pivotTableConstants.FONT_SIZE_LARGE, "px;}"), ".displaydensity-COMPACT.jsx-2951476454{padding:".concat(_pivotTableConstants.DISPLAY_DENSITY_PADDING_COMPACT, "px;}"), ".displaydensity-NORMAL.jsx-2951476454{padding:".concat(_pivotTableConstants.DISPLAY_DENSITY_PADDING_NORMAL, "px;}"), ".displaydensity-COMFORTABLE.jsx-2951476454{padding:".concat(_pivotTableConstants.DISPLAY_DENSITY_PADDING_COMFORTABLE, "px;}"), ".column-header.jsx-2951476454{background-color:#dae6f8;}", "div.column-header-inner.jsx-2951476454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".title.jsx-2951476454{font-weight:bold;background-color:#cddaed;}", ".row-header.jsx-2951476454{background-color:#dae6f8;}", ".row-header-hierarchy.jsx-2951476454{text-align:left;}", ".empty-header.jsx-2951476454{background-color:#cddaed;}", ".total-header.jsx-2951476454{background-color:#bac6d8;}", ".value.jsx-2951476454{background-color:#ffffff;}", ".TEXT.jsx-2951476454{text-align:left;}", ".NUMBER.jsx-2951476454{text-align:right;}", ".clickable.jsx-2951476454{cursor:pointer;}", ".value.jsx-2951476454:hover{background-color:#f3f3f3;}", ".subtotal.jsx-2951476454{background-color:#f4f4f4;}", ".total.jsx-2951476454{background-color:#d8d8d8;}", ".column-header-label.jsx-2951476454{overflow:hidden;text-overflow:ellipsis;}"];
exports.cell = cell;
cell.__hash = "2951476454";
var sortIcon = [".fontsize-SMALL.jsx-2877616992{height:".concat(_pivotTableConstants.FONT_SIZE_SMALL, "px;margin-bottom:1px;margin-left:5px;}"), ".fontsize-NORMAL.jsx-2877616992{height:".concat(_pivotTableConstants.FONT_SIZE_NORMAL, "px;max-height:11px;margin-bottom:2px;margin-left:6px;}"), ".fontsize-LARGE.jsx-2877616992{height:".concat(_pivotTableConstants.FONT_SIZE_LARGE, "px;margin-bottom:2px;margin-left:7px;}")];
exports.sortIcon = sortIcon;
sortIcon.__hash = "2877616992";