"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableEngine = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _times = _interopRequireDefault(require("lodash/times"));
var _dataTypes = require("../dataTypes.js");
var _predefinedDimensions = require("../predefinedDimensions.js");
var _renderValue = require("../renderValue.js");
var _valueTypes = require("../valueTypes.js");
var _AdaptiveClippingController = require("./AdaptiveClippingController.js");
var _addToTotalIfNumber = require("./addToTotalIfNumber.js");
var _parseValue = require("./parseValue.js");
var _pivotTableConstants = require("./pivotTableConstants.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const dataFields = ['value', 'numerator', 'denominator', 'factor', 'multiplier', 'divisor'];
const defaultOptions = {
  hideEmptyColumns: false,
  hideEmptyRows: false,
  showRowTotals: false,
  showColumnTotals: false,
  showRowSubtotals: false,
  showColumnSubtotals: false,
  fixColumnHeaders: false,
  fixRowHeaders: false,
  cumulativeValues: false
};
const defaultVisualizationProps = {
  fontSize: _pivotTableConstants.FONT_SIZE_OPTION_NORMAL,
  displayDensity: _pivotTableConstants.DISPLAY_DENSITY_OPTION_NORMAL
};
const isDxDimension = dimensionItem => [_dataTypes.DIMENSION_TYPE_DATA, _dataTypes.DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET].includes(dimensionItem.dimensionType);
const countFromDisaggregates = list => {
  let count = 1;
  list.forEach(x => {
    count *= x.items.length;
  });
  return count;
};
const addSize = list => {
  const reversedList = list.slice().reverse();
  reversedList.forEach((level, idx) => {
    // Start at the "leaf" disaggregate
    const lastLevel = reversedList[idx - 1];
    level.size = lastLevel ? lastLevel.count * lastLevel.size : 1;
  });
};
const listByDimension = list => list.reduce((all, item) => {
  all[item.dimension] = item;
  return all;
}, {});
const sortByHierarchy = items => {
  items.sort((a, b) => {
    if (!a.hierarchy || !b.hierarchy) {
      return 0;
    }
    return a.hierarchy.join('/').localeCompare(b.hierarchy.join('/'));
  });
};
const buildDimensionLookup = (visualization, metadata, headers) => {
  const rows = visualization.rows.map(row => ({
    dimension: row.dimension,
    meta: metadata.items[row.dimension],
    count: metadata.dimensions[row.dimension].length,
    itemIds: metadata.dimensions[row.dimension],
    items: metadata.dimensions[row.dimension].map(item => metadata.items[item]),
    isDxDimension: isDxDimension(metadata.items[row.dimension]),
    position: 'row'
  }));
  const columns = visualization.columns.map(column => ({
    dimension: column.dimension,
    meta: metadata.items[column.dimension],
    count: metadata.dimensions[column.dimension].length,
    itemIds: metadata.dimensions[column.dimension],
    items: metadata.dimensions[column.dimension].map(item => metadata.items[item]),
    isDxDimension: isDxDimension(metadata.items[column.dimension]),
    position: 'column'
  }));
  addSize(rows);
  addSize(columns);
  const allByDimension = {
    ...listByDimension(rows),
    ...listByDimension(columns)
  };
  const headerDimensions = headers.map(header => allByDimension[header.name]);
  const rowHeaders = headerDimensions.map((_, idx) => idx).filter(idx => headerDimensions[idx] && headerDimensions[idx].position === 'row');
  const columnHeaders = headerDimensions.map((_, idx) => idx).filter(idx => headerDimensions[idx] && headerDimensions[idx].position === 'column');
  const dataHeaders = dataFields.reduce((out, field) => {
    out[field] = headers.findIndex(header => header.name === field);
    return out;
  }, {});
  const ouDimension = allByDimension[_predefinedDimensions.DIMENSION_ID_ORGUNIT];
  if (visualization.showHierarchy && metadata.ouNameHierarchy && ouDimension) {
    ouDimension.items.forEach(ou => {
      const hierarchy = metadata.ouNameHierarchy[ou.uid];
      if (hierarchy) {
        ou.hierarchy = hierarchy.split('/').filter(x => x.length);
      }
    });
    sortByHierarchy(ouDimension.items);
    ouDimension.itemIds = ouDimension.items.map(item => item.uid);
  }
  return {
    rows,
    columns,
    allByDimension,
    headerDimensions,
    rowHeaders,
    columnHeaders,
    dataHeaders
  };
};
const lookup = (dataRow, dimensionLookup, _ref) => {
  let {
    doColumnSubtotals,
    doRowSubtotals
  } = _ref;
  let row = 0;
  for (const headerIndex of dimensionLookup.rowHeaders) {
    const idx = dimensionLookup.headerDimensions[headerIndex].itemIds.indexOf(dataRow[headerIndex]);
    if (idx === -1) {
      return undefined;
    }
    const size = dimensionLookup.headerDimensions[headerIndex].size;
    row += idx * size;
  }
  if (doColumnSubtotals) {
    row += Math.floor(row / dimensionLookup.rows[0].size);
  }
  let column = 0;
  for (const headerIndex of dimensionLookup.columnHeaders) {
    const idx = dimensionLookup.headerDimensions[headerIndex].itemIds.indexOf(dataRow[headerIndex]);
    if (idx === -1) {
      return undefined;
    }
    const size = dimensionLookup.headerDimensions[headerIndex].size;
    column += idx * size;
  }
  if (doRowSubtotals) {
    column += Math.floor(column / dimensionLookup.columns[0].size);
  }
  return {
    column,
    row
  };
};
const applyTotalAggregationType = (_ref2, overrideTotalAggregationType) => {
  let {
    totalAggregationType,
    value,
    numerator,
    denominator,
    multiplier,
    divisor
  } = _ref2;
  switch (overrideTotalAggregationType || totalAggregationType) {
    case _pivotTableConstants.AGGREGATE_TYPE_NA:
      return 'N/A';
    case _pivotTableConstants.AGGREGATE_TYPE_AVERAGE:
      return (numerator || value) * multiplier / (denominator * divisor || 1);
    case _pivotTableConstants.AGGREGATE_TYPE_SUM:
    default:
      return value;
  }
};
class PivotTableEngine {
  constructor(visualization, data, legendSets) {
    _defineProperty(this, "visualization", void 0);
    _defineProperty(this, "rawData", void 0);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "legendSets", void 0);
    _defineProperty(this, "dimensionLookup", void 0);
    _defineProperty(this, "adaptiveClippingController", void 0);
    _defineProperty(this, "columnDepth", 0);
    _defineProperty(this, "rowDepth", 0);
    _defineProperty(this, "height", 0);
    _defineProperty(this, "width", 0);
    _defineProperty(this, "data", []);
    _defineProperty(this, "rowMap", []);
    _defineProperty(this, "columnMap", []);
    _defineProperty(this, "accumulators", {
      rows: {}
    });
    this.visualization = Object.assign({}, defaultVisualizationProps, visualization);
    this.legendSets = (legendSets || []).reduce((sets, set) => {
      sets[set.id] = set;
      return sets;
    }, {});
    this.rawData = data;
    this.dimensionLookup = buildDimensionLookup(this.visualization, this.rawData.metaData, this.rawData.headers);
    this.options = {
      ...defaultOptions,
      showColumnTotals: visualization.colTotals,
      showRowTotals: visualization.rowTotals,
      showColumnSubtotals: visualization.colSubTotals,
      showRowSubtotals: visualization.rowSubTotals,
      hideEmptyColumns: visualization.hideEmptyColumns,
      hideEmptyRows: visualization.hideEmptyRows,
      title: visualization.hideTitle ? undefined : visualization.title,
      subtitle: visualization.hideSubtitle ? undefined : visualization.subtitle,
      // turn on fixed headers only when there are dimensions
      fixColumnHeaders: this.dimensionLookup.columns.length ? visualization.fixColumnHeaders : false,
      fixRowHeaders: this.dimensionLookup.rows.length ? visualization.fixRowHeaders : false,
      cumulativeValues: visualization.cumulativeValues
    };
    this.adaptiveClippingController = new _AdaptiveClippingController.AdaptiveClippingController(this);
    const doColumnSubtotals = this.options.showColumnSubtotals && this.dimensionLookup.rows.length > 1;
    const singularRow = this.dimensionLookup.rows.length === 1 && this.dimensionLookup.rows[0].count === 1;
    const firstColumnIsSortable = !doColumnSubtotals && !singularRow;
    this.columnDepth = this.dimensionLookup.columns.length || (this.visualization.showDimensionLabels || firstColumnIsSortable ? 1 : 0);
    this.rowDepth = this.dimensionLookup.rows.length || (this.visualization.showDimensionLabels ? 1 : 0);
    this.buildMatrix();
  }
  getRaw(_ref3) {
    var _headers$find, _headers$find2;
    let {
      row,
      column
    } = _ref3;
    const cellType = this.getRawCellType({
      row,
      column
    });
    const dxDimension = this.getRawCellDxDimension({
      row,
      column
    });
    const valueType = (dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType) || _valueTypes.VALUE_TYPE_TEXT;
    const headers = [...this.getRawRowHeader(row), ...this.getRawColumnHeader(column)];
    const peId = (_headers$find = headers.find(header => (header === null || header === void 0 ? void 0 : header.dimensionItemType) === _dataTypes.DIMENSION_TYPE_PERIOD)) === null || _headers$find === void 0 ? void 0 : _headers$find.uid;
    const ouId = (_headers$find2 = headers.find(header => (header === null || header === void 0 ? void 0 : header.dimensionItemType) === _dataTypes.DIMENSION_TYPE_ORGANISATION_UNIT)) === null || _headers$find2 === void 0 ? void 0 : _headers$find2.uid;
    const rawCell = {
      cellType,
      valueType,
      ouId,
      peId
    };
    if (!this.data[row] || !this.data[row][column]) {
      rawCell.empty = true;
    } else {
      const dataRow = this.data[row][column];
      let rawValue = cellType === _pivotTableConstants.CELL_TYPE_VALUE ? dataRow[this.dimensionLookup.dataHeaders.value] : dataRow.value;
      let renderedValue = rawValue;
      if (valueType === _valueTypes.VALUE_TYPE_NUMBER) {
        rawValue = (0, _parseValue.parseValue)(rawValue);
        switch (this.visualization.numberType) {
          case _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE:
            renderedValue = rawValue / this.percentageTotals[row].value;
            break;
          case _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE:
            renderedValue = rawValue / this.percentageTotals[column].value;
            break;
          default:
            break;
        }
      }
      renderedValue = (0, _renderValue.renderValue)(renderedValue, valueType, this.visualization);
      rawCell.dxDimension = dxDimension;
      rawCell.empty = false;
      rawCell.rawValue = rawValue;
      rawCell.renderedValue = renderedValue;
    }
    if ([_pivotTableConstants.CELL_TYPE_TOTAL, _pivotTableConstants.CELL_TYPE_SUBTOTAL].includes(rawCell.cellType) && rawCell.rawValue === _pivotTableConstants.AGGREGATE_TYPE_NA) {
      rawCell.titleValue = _d2I18n.default.t('Not applicable');
    }
    if (this.options.cumulativeValues) {
      let titleValue;
      if (this.data[row] && this.data[row][column]) {
        const dataRow = this.data[row][column];
        const rawValue = cellType === _pivotTableConstants.CELL_TYPE_VALUE ? dataRow[this.dimensionLookup.dataHeaders.value] : dataRow.value;
        titleValue = _d2I18n.default.t('Value: {{value}}', {
          value: (0, _renderValue.renderValue)(rawValue, valueType, this.visualization),
          nsSeparator: '^^'
        });
      }
      const cumulativeValue = this.getCumulative({
        row,
        column
      });
      if (cumulativeValue !== undefined && cumulativeValue !== null) {
        // force to NUMBER for accumulated values
        rawCell.valueType = valueType === undefined || valueType === null ? _valueTypes.VALUE_TYPE_NUMBER : valueType;
        rawCell.empty = false;
        rawCell.titleValue = titleValue;
        rawCell.rawValue = cumulativeValue;
        rawCell.renderedValue = (0, _renderValue.renderValue)(cumulativeValue, valueType, this.visualization);
      }
    }
    return rawCell;
  }
  getCumulative(_ref4) {
    let {
      row,
      column
    } = _ref4;
    return this.accumulators.rows[row][column];
  }
  get(_ref5) {
    let {
      row,
      column
    } = _ref5;
    const mappedRow = this.rowMap[row],
      mappedColumn = this.columnMap[column];
    if (!mappedRow && mappedRow !== 0 || !mappedColumn && mappedColumn !== 0) {
      return undefined;
    }
    return this.getRaw({
      row: mappedRow,
      column: mappedColumn
    });
  }
  getRawCellType(_ref6) {
    let {
      row,
      column
    } = _ref6;
    const isRowTotal = this.doRowTotals && column === this.dataWidth - 1;
    const isColumnTotal = this.doColumnTotals && row === this.dataHeight - 1;
    if (isRowTotal || isColumnTotal) {
      return _pivotTableConstants.CELL_TYPE_TOTAL;
    }
    const isRowSubtotal = this.doRowSubtotals && (column + 1) % (this.dimensionLookup.columns[0].size + 1) === 0;
    const isColumnSubtotal = this.doColumnSubtotals && (row + 1) % (this.dimensionLookup.rows[0].size + 1) === 0;
    if (isRowSubtotal || isColumnSubtotal) {
      return _pivotTableConstants.CELL_TYPE_SUBTOTAL;
    }
    return _pivotTableConstants.CELL_TYPE_VALUE;
  }
  getCellType(_ref7) {
    let {
      row,
      column
    } = _ref7;
    row = this.rowMap[row];
    column = this.columnMap[column];
    return this.getRawCellType({
      row,
      column
    });
  }
  getDimensionLabel(rowLevel, columnLevel) {
    const lastRowLevel = this.rowDepth - 1;
    const lastColumnLevel = this.columnDepth - 1;
    if (rowLevel !== lastRowLevel && columnLevel !== lastColumnLevel) {
      return null;
    }
    if (rowLevel === lastRowLevel && this.dimensionLookup.rows[lastRowLevel] && columnLevel === lastColumnLevel && this.dimensionLookup.columns[lastColumnLevel]) {
      return `${_d2I18n.default.t(this.dimensionLookup.rows[lastRowLevel].meta.name)} / ${_d2I18n.default.t(this.dimensionLookup.columns[lastColumnLevel].meta.name)}`;
    }
    if (lastRowLevel === -1) {
      return _d2I18n.default.t(this.dimensionLookup.columns[columnLevel].meta.name);
    }
    if (lastColumnLevel === -1) {
      return _d2I18n.default.t(this.dimensionLookup.rows[rowLevel].meta.name);
    }
    if (rowLevel === lastRowLevel && this.dimensionLookup.columns[columnLevel]) {
      return _d2I18n.default.t(this.dimensionLookup.columns[columnLevel].meta.name);
    }
    if (columnLevel === lastColumnLevel && this.dimensionLookup.rows[rowLevel]) {
      return _d2I18n.default.t(this.dimensionLookup.rows[rowLevel].meta.name);
    }
  }
  getCellDxDimension(_ref8) {
    let {
      row,
      column
    } = _ref8;
    return this.getRawCellDxDimension({
      row: this.rowMap[row],
      column: this.columnMap[column]
    });
  }
  getRawCellDxDimension(_ref9) {
    let {
      row,
      column
    } = _ref9;
    if (!this.data[row]) {
      return undefined;
    }
    const cellValue = this.data[row][column];
    if (cellValue && !Array.isArray(cellValue)) {
      // This is a total cell
      return {
        valueType: cellValue.valueType,
        totalAggregationType: cellValue.totalAggregationType,
        legendSet: undefined
      };
    }
    const rowHeaders = this.getRawRowHeader(row);
    const columnHeaders = this.getRawColumnHeader(column);
    const dxRowIndex = this.dimensionLookup.rows.findIndex(dim => dim.isDxDimension);
    if (rowHeaders.length && dxRowIndex !== -1) {
      return {
        valueType: rowHeaders[dxRowIndex].valueType,
        totalAggregationType: rowHeaders[dxRowIndex].totalAggregationType,
        legendSet: rowHeaders[dxRowIndex].legendSet
      };
    }
    const dxColumnIndex = this.dimensionLookup.columns.findIndex(dim => dim.isDxDimension);
    if (columnHeaders.length && dxColumnIndex !== -1) {
      return {
        valueType: columnHeaders[dxColumnIndex].valueType,
        totalAggregationType: columnHeaders[dxColumnIndex].totalAggregationType,
        legendSet: columnHeaders[dxColumnIndex].legendSet
      };
    }

    // Data is in Filter
    // TODO : This assumes the server ignores text types, we should confirm this is the case
    return {
      valueType: _valueTypes.VALUE_TYPE_NUMBER,
      totalAggregationType: _pivotTableConstants.AGGREGATE_TYPE_SUM
    };
  }
  rowIsEmpty(row) {
    return !this.data[row] || this.data[row].length === 0;
  }
  columnIsEmpty(column) {
    return !this.rowMap.some(row => this.data[row][column]);
  }
  getRawColumnHeader(column) {
    if (this.doRowTotals && column === this.dataWidth - 1) {
      return (0, _times.default)(this.columnDepth - 1, () => undefined).concat([{
        name: 'Total'
      }]);
    }
    if (this.doRowSubtotals) {
      if ((column + 1) % (this.dimensionLookup.columns[0].size + 1) === 0) {
        return (0, _times.default)(this.columnDepth - 1, () => undefined).concat([{
          name: 'Subtotal'
        }]);
      }
      column -= Math.floor(column / (this.dimensionLookup.columns[0].size + 1));
    }
    return this.dimensionLookup.columns.map(dimension => {
      const itemIndex = Math.floor(column / dimension.size) % dimension.count;
      return dimension.items[itemIndex];
    });
  }
  getColumnHeader(column) {
    return this.getRawColumnHeader(this.columnMap[column]);
  }
  getRawRowHeader(row) {
    if (this.doColumnTotals && row === this.dataHeight - 1) {
      return (0, _times.default)(this.rowDepth - 1, () => undefined).concat([{
        name: 'Total'
      }]);
    }
    if (this.doColumnSubtotals) {
      if ((row + 1) % (this.dimensionLookup.rows[0].size + 1) === 0) {
        return (0, _times.default)(this.rowDepth - 1, () => undefined).concat([{
          name: 'Subtotal'
        }]);
      }
      row -= Math.floor(row / (this.dimensionLookup.rows[0].size + 1));
    }
    return this.dimensionLookup.rows.map(dimension => {
      const itemIndex = Math.floor(row / dimension.size) % dimension.count;
      return dimension.items[itemIndex];
    });
  }
  getRowHeader(row) {
    return this.getRawRowHeader(this.rowMap[row]);
  }
  getDependantTotalCells(_ref10) {
    var _this$dimensionLookup, _this$dimensionLookup2;
    let {
      row,
      column
    } = _ref10;
    const rowSubtotalSize = ((_this$dimensionLookup = this.dimensionLookup.columns[0]) === null || _this$dimensionLookup === void 0 ? void 0 : _this$dimensionLookup.size) + 1;
    const rowSubtotal = rowSubtotalSize && this.doRowSubtotals && {
      row,
      column: Math.ceil((column + 1) / rowSubtotalSize) * rowSubtotalSize - 1,
      size: rowSubtotalSize - 1
    };
    const rowSubtotalColumnTotal = this.doRowSubtotals && this.doColumnTotals && {
      row: this.dataHeight - 1,
      column: rowSubtotal.column,
      size: this.rawDataHeight
    };
    const columnSubtotalSize = ((_this$dimensionLookup2 = this.dimensionLookup.rows[0]) === null || _this$dimensionLookup2 === void 0 ? void 0 : _this$dimensionLookup2.size) + 1;
    const columnSubtotal = columnSubtotalSize && this.doColumnSubtotals && {
      row: Math.ceil((row + 1) / columnSubtotalSize) * columnSubtotalSize - 1,
      column,
      size: columnSubtotalSize - 1
    };
    const columnSubtotalRowTotal = this.doColumnSubtotals && this.doRowTotals && {
      row: columnSubtotal.row,
      column: this.dataWidth - 1,
      size: this.rawDataWidth
    };
    const combinedSubtotal = rowSubtotalSize && columnSubtotalSize && this.doColumnSubtotals && this.doRowSubtotals && {
      row: columnSubtotal.row,
      column: rowSubtotal.column,
      size: columnSubtotalSize * rowSubtotalSize
    };
    const rowTotal = this.doRowTotals && {
      row,
      column: this.dataWidth - 1,
      size: this.rawDataWidth
    };
    const columnTotal = this.doColumnTotals && {
      row: this.dataHeight - 1,
      column,
      size: this.rawDataHeight
    };
    const combinedTotal = this.doColumnTotals && this.doRowTotals && {
      row: this.dataHeight - 1,
      column: this.dataWidth - 1,
      size: this.rawDataHeight * this.rawDataWidth
    };
    return {
      rowSubtotal,
      rowSubtotalColumnTotal,
      columnSubtotal,
      columnSubtotalRowTotal,
      rowTotal,
      columnTotal,
      combinedSubtotal,
      combinedTotal
    };
  }
  addCellValueToTotals(pos, dataRow) {
    const totals = this.getDependantTotalCells(pos);
    const dxDimension = this.getRawCellDxDimension(pos);
    Object.values(totals).forEach(totalItem => {
      if (!totalItem) {
        return;
      }
      this.data[totalItem.row] = this.data[totalItem.row] || [];
      this.data[totalItem.row][totalItem.column] = this.data[totalItem.row][totalItem.column] || {
        count: 0,
        totalCount: totalItem.size
      };
      const totalCell = this.data[totalItem.row][totalItem.column];
      const currentAggType = dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.totalAggregationType;
      const previousAggType = totalCell.totalAggregationType || currentAggType;
      if (previousAggType && currentAggType !== previousAggType) {
        totalCell.totalAggregationType = _pivotTableConstants.AGGREGATE_TYPE_NA;
      } else {
        totalCell.totalAggregationType = currentAggType;
      }

      // Force value type of total cells to NUMBER for value cells with numeric or boolean types.
      // This is to simplify the code below where we compare the previous value type.
      // All numeric/boolean value types use the same style for rendering the total cell (right aligned content)
      // and using NUMBER for the total cell is enough for that.
      // (see DHIS2-9155)
      const currentValueType = (0, _valueTypes.isNumericValueType)(dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType) || (0, _valueTypes.isBooleanValueType)(dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType) ? _valueTypes.VALUE_TYPE_NUMBER : dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType;
      const previousValueType = totalCell.valueType;
      if (previousValueType && currentValueType !== previousValueType) {
        totalCell.valueType = _pivotTableConstants.VALUE_TYPE_NA;
      } else {
        totalCell.valueType = currentValueType;
      }

      // Compute totals for all numeric and boolean value types only.
      // In practice valueType here is NUMBER (see the comment above).
      // When is not, it means there is some value cell with a valueType other than numeric/boolean,
      // the total should not be computed then.
      // (see DHIS2-9155)
      if ((0, _valueTypes.isNumericValueType)(totalCell.valueType)) {
        dataFields.forEach(field => {
          const headerIndex = this.dimensionLookup.dataHeaders[field];
          const value = (0, _parseValue.parseValue)(dataRow[headerIndex]);
          totalCell[field] = (0, _addToTotalIfNumber.addToTotalIfNumber)(value, totalCell[field]);
        });
      }
      totalCell.count += 1;
    });
    if (this.visualization.numberType === _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE) {
      if (!this.percentageTotals[pos.row]) {
        this.percentageTotals[pos.row] = {
          count: 0,
          totalCount: this.rawDataWidth
        };
      }
      const percentageTotal = this.percentageTotals[pos.row];
      dataFields.forEach(field => {
        const headerIndex = this.dimensionLookup.dataHeaders[field];
        const value = (0, _parseValue.parseValue)(dataRow[headerIndex]);
        percentageTotal[field] = (0, _addToTotalIfNumber.addToTotalIfNumber)(value, percentageTotal[field]);
      });
      if (totals.columnSubtotal) {
        if (!this.percentageTotals[totals.columnSubtotal.row]) {
          this.percentageTotals[totals.columnSubtotal.row] = {
            count: 0,
            totalCount: this.rawDataWidth
          };
        }
        const percentageTotal = this.percentageTotals[totals.columnSubtotal.row];
        dataFields.forEach(field => {
          const headerIndex = this.dimensionLookup.dataHeaders[field];
          const value = (0, _parseValue.parseValue)(dataRow[headerIndex]);
          percentageTotal[field] = (0, _addToTotalIfNumber.addToTotalIfNumber)(value, percentageTotal[field]);
        });
      }
      if (totals.columnTotal) {
        if (!this.percentageTotals[totals.columnTotal.row]) {
          this.percentageTotals[totals.columnTotal.row] = {
            count: 0,
            totalCount: this.rawDataWidth
          };
        }
        const percentageTotal = this.percentageTotals[totals.columnTotal.row];
        dataFields.forEach(field => {
          const headerIndex = this.dimensionLookup.dataHeaders[field];
          const value = (0, _parseValue.parseValue)(dataRow[headerIndex]);
          percentageTotal[field] = (0, _addToTotalIfNumber.addToTotalIfNumber)(value, percentageTotal[field]);
        });
      }
    }
    if (this.visualization.numberType === _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE) {
      if (!this.percentageTotals[pos.column]) {
        this.percentageTotals[pos.column] = {
          count: 0,
          totalCount: this.rawDataHeight
        };
      }
      const percentageTotal = this.percentageTotals[pos.column];
      dataFields.forEach(field => {
        const headerIndex = this.dimensionLookup.dataHeaders[field];
        const value = (0, _parseValue.parseValue)(dataRow[headerIndex]);
        percentageTotal[field] = (0, _addToTotalIfNumber.addToTotalIfNumber)(value, percentageTotal[field]);
      });
      if (totals.rowSubtotal) {
        if (!this.percentageTotals[totals.rowSubtotal.column]) {
          this.percentageTotals[totals.rowSubtotal.column] = {
            count: 0,
            totalCount: this.rawDataHeight
          };
        }
        const percentageTotal = this.percentageTotals[totals.rowSubtotal.column];
        dataFields.forEach(field => {
          const headerIndex = this.dimensionLookup.dataHeaders[field];
          const value = (0, _parseValue.parseValue)(dataRow[headerIndex]);
          percentageTotal[field] = (0, _addToTotalIfNumber.addToTotalIfNumber)(value, percentageTotal[field]);
        });
      }
      if (totals.rowTotal) {
        if (!this.percentageTotals[totals.rowTotal.column]) {
          this.percentageTotals[totals.rowTotal.column] = {
            count: 0,
            totalCount: this.rawDataHeight
          };
        }
        const percentageTotal = this.percentageTotals[totals.rowTotal.column];
        dataFields.forEach(field => {
          const headerIndex = this.dimensionLookup.dataHeaders[field];
          const value = (0, _parseValue.parseValue)(dataRow[headerIndex]);
          percentageTotal[field] = (0, _addToTotalIfNumber.addToTotalIfNumber)(value, percentageTotal[field]);
        });
      }
    }
  }
  computeOverrideTotalAggregationType(totalCell, visualization) {
    // Avoid undefined on total cells with valueTypes that cannot be totalized.
    // This happens for example when a column/row has all value cells of type TEXT.
    if (!((0, _valueTypes.isNumericValueType)(totalCell.valueType) || (0, _valueTypes.isBooleanValueType)(totalCell.valueType))) {
      return _pivotTableConstants.AGGREGATE_TYPE_NA;
    }

    // DHIS2-15698: do not override total aggregation type when numberType option is not present
    // (numberType option default is VALUE)
    return visualization.numberType && visualization.numberType !== _pivotTableConstants.NUMBER_TYPE_VALUE && _pivotTableConstants.AGGREGATE_TYPE_SUM;
  }
  finalizeTotal(_ref11) {
    let {
      row,
      column
    } = _ref11;
    if (!this.data[row]) {
      return;
    }
    const totalCell = this.data[row][column];
    if (totalCell && totalCell.count) {
      totalCell.value = applyTotalAggregationType(totalCell, this.computeOverrideTotalAggregationType(totalCell, this.visualization));

      // override valueType for styling cells with N/A value
      if (totalCell.value === _pivotTableConstants.AGGREGATE_TYPE_NA) {
        totalCell.valueType = _pivotTableConstants.VALUE_TYPE_NA;
      }
      this.adaptiveClippingController.add({
        row,
        column
      }, (0, _renderValue.renderValue)(totalCell.value, totalCell.valueType, this.visualization));
    }
  }
  finalizeTotals() {
    var _this$dimensionLookup3, _this$dimensionLookup4;
    const columnSubtotalSize = ((_this$dimensionLookup3 = this.dimensionLookup.rows[0]) === null || _this$dimensionLookup3 === void 0 ? void 0 : _this$dimensionLookup3.size) + 1;
    const rowSubtotalSize = ((_this$dimensionLookup4 = this.dimensionLookup.columns[0]) === null || _this$dimensionLookup4 === void 0 ? void 0 : _this$dimensionLookup4.size) + 1;
    if (this.doRowSubtotals && rowSubtotalSize) {
      (0, _times.default)(this.dimensionLookup.columns[0].count, n => (n + 1) * rowSubtotalSize - 1).forEach(column => {
        (0, _times.default)(this.dataHeight - (this.doColumnTotals ? 1 : 0), n => n).forEach(row => {
          // skip combined subtotal cells
          if (!this.doColumnSubtotals || (row + 1) % columnSubtotalSize !== 0) {
            this.finalizeTotal({
              row,
              column
            });
          }
        });
      });
    }
    if (this.doColumnSubtotals && columnSubtotalSize) {
      (0, _times.default)(this.dimensionLookup.rows[0].count, n => (n + 1) * columnSubtotalSize - 1).forEach(row => {
        (0, _times.default)(this.dataWidth - (this.doRowTotals ? 1 : 0), n => n).forEach(column => {
          // skip combined subtotal cells
          if (!this.doRowSubtotals || (column + 1) % rowSubtotalSize !== 0) {
            this.finalizeTotal({
              row,
              column
            });
          }
        });
      });
    }

    // Combined subtotal cells
    if (this.doRowSubtotals && this.doColumnSubtotals && rowSubtotalSize && columnSubtotalSize) {
      (0, _times.default)(this.dimensionLookup.rows[0].count, n => (n + 1) * columnSubtotalSize - 1).forEach(row => {
        (0, _times.default)(this.dimensionLookup.columns[0].count, n => (n + 1) * rowSubtotalSize - 1).forEach(column => {
          this.finalizeTotal({
            row,
            column
          });
        });
      });
    }
    if (this.doRowTotals) {
      const column = this.dataWidth - 1;
      const rowCount = this.doColumnTotals ? this.dataHeight - 1 : this.dataHeight;
      (0, _times.default)(rowCount, n => n).forEach(row => {
        this.finalizeTotal({
          row,
          column
        });
      });
    }
    if (this.doColumnTotals) {
      const row = this.dataHeight - 1;
      const colCount = this.doRowTotals ? this.dataWidth - 1 : this.dataWidth;
      (0, _times.default)(colCount, n => n).forEach(column => {
        this.finalizeTotal({
          row,
          column
        });
      });
    }
    if (this.doRowTotals && this.doColumnTotals) {
      this.finalizeTotal({
        row: this.dataHeight - 1,
        column: this.dataWidth - 1
      });
    }
    if (this.percentageTotals) {
      this.percentageTotals.forEach(item => {
        item.value = applyTotalAggregationType(item);
      });
    }
  }
  resetRowMap() {
    this.rowMap = this.options.hideEmptyRows ? (0, _times.default)(this.dataHeight, n => n).filter(idx => !!this.data[idx]) : (0, _times.default)(this.dataHeight, n => n);
  }
  resetColumnMap() {
    this.columnMap = this.options.hideEmptyColumns ? (0, _times.default)(this.dataWidth, n => n).filter(idx => !this.columnIsEmpty(idx)) : (0, _times.default)(this.dataWidth, n => n);
  }
  resetAccumulators() {
    if (this.options.cumulativeValues) {
      this.rowMap.forEach(row => {
        this.accumulators.rows[row] = {};
        this.columnMap.reduce((acc, column) => {
          const cellType = this.getRawCellType({
            row,
            column
          });
          const dxDimension = this.getRawCellDxDimension({
            row,
            column
          });
          const valueType = (dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType) || _valueTypes.VALUE_TYPE_TEXT;

          // only accumulate numeric (except for PERCENTAGE and UNIT_INTERVAL) and boolean values
          // accumulating other value types like text values does not make sense
          if ((0, _valueTypes.isCumulativeValueType)(valueType)) {
            // initialise to 0 for cumulative types
            // (||= is not transformed correctly in Babel with the current setup)
            acc || (acc = 0);
            if (this.data[row] && this.data[row][column]) {
              const dataRow = this.data[row][column];
              const rawValue = cellType === _pivotTableConstants.CELL_TYPE_VALUE ? dataRow[this.dimensionLookup.dataHeaders.value] : dataRow.value;
              acc += (0, _parseValue.parseValue)(rawValue);
            }
            this.accumulators.rows[row][column] = acc;
          }
          return acc;
        }, '');
      });
    } else {
      this.accumulators = {
        rows: {}
      };
    }
  }
  get cellPadding() {
    switch (this.visualization.displayDensity) {
      case _pivotTableConstants.DISPLAY_DENSITY_OPTION_COMPACT:
        return _pivotTableConstants.DISPLAY_DENSITY_PADDING_COMPACT;
      case _pivotTableConstants.DISPLAY_DENSITY_OPTION_COMFORTABLE:
        return _pivotTableConstants.DISPLAY_DENSITY_PADDING_COMFORTABLE;
      case _pivotTableConstants.DISPLAY_DENSITY_OPTION_NORMAL:
      default:
        return _pivotTableConstants.DISPLAY_DENSITY_PADDING_NORMAL;
    }
  }
  get fontSize() {
    switch (this.visualization.fontSize) {
      case _pivotTableConstants.FONT_SIZE_OPTION_SMALL:
        return _pivotTableConstants.FONT_SIZE_SMALL;
      case _pivotTableConstants.FONT_SIZE_OPTION_LARGE:
        return _pivotTableConstants.FONT_SIZE_LARGE;
      case _pivotTableConstants.FONT_SIZE_OPTION_NORMAL:
      default:
        return _pivotTableConstants.FONT_SIZE_NORMAL;
    }
  }
  get scrollIconBuffer() {
    switch (this.visualization.fontSize) {
      case _pivotTableConstants.FONT_SIZE_OPTION_SMALL:
        return 11;
      case _pivotTableConstants.FONT_SIZE_OPTION_LARGE:
        return 15;
      case _pivotTableConstants.FONT_SIZE_OPTION_NORMAL:
      default:
        return 13;
    }
  }
  buildMatrix() {
    this.data = [];
    this.adaptiveClippingController.reset();
    this.dataHeight = this.rawDataHeight = countFromDisaggregates(this.dimensionLookup.rows);
    this.dataWidth = this.rawDataWidth = countFromDisaggregates(this.dimensionLookup.columns);

    // TODO: Check last row/col dimension for size===1, skip redundant sub-totals
    this.doRowSubtotals = this.options.showRowSubtotals && this.columnDepth > 1;
    this.doColumnSubtotals = this.options.showColumnSubtotals && this.rowDepth > 1;
    this.doRowTotals = this.options.showRowTotals && this.dataWidth > 1;
    this.doColumnTotals = this.options.showColumnTotals && this.dataHeight > 1;
    if (this.doRowSubtotals) {
      this.dataWidth += this.dimensionLookup.columns[0].count;
    }
    if (this.doColumnSubtotals) {
      this.dataHeight += this.dimensionLookup.rows[0].count;
    }
    if (this.doRowTotals) {
      this.dataWidth += 1;
    }
    if (this.doColumnTotals) {
      this.dataHeight += 1;
    }

    // TODO: Use total cell calculation, don't duplicate here
    if (this.visualization.numberType === _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE || this.visualization.numberType === _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE) {
      this.percentageTotals = [];
    }
    this.rawData.rows.forEach(dataRow => {
      const pos = lookup(dataRow, this.dimensionLookup, this);
      if (pos) {
        this.data[pos.row] = this.data[pos.row] || [];
        this.data[pos.row][pos.column] = dataRow;
        this.addCellValueToTotals(pos, dataRow);
      }
    });
    this.finalizeTotals();
    this.resetRowMap();
    this.resetColumnMap();
    this.resetAccumulators();
    this.rowMap.forEach(row => {
      this.columnMap.forEach(column => {
        const pos = {
          row,
          column
        };
        this.adaptiveClippingController.add(pos, this.getRaw(pos).renderedValue);
      });
    });
    this.height = this.rowMap.length;
    this.width = this.columnMap.length;
    this.adaptiveClippingController.finalize();
  }
  getColumnType(column) {
    column = this.columnMap[column];
    if (!column && column !== 0) {
      return undefined;
    }
    if (this.doRowSubtotals && (column + 1) % (this.dimensionLookup.columns[0].size + 1) === 0) {
      return _pivotTableConstants.CELL_TYPE_SUBTOTAL;
    }
    if (this.doRowTotals && column === this.dataWidth - 1) {
      return _pivotTableConstants.CELL_TYPE_TOTAL;
    }
    return _pivotTableConstants.CELL_TYPE_VALUE;
  }
  isSortable(column) {
    return this.dataHeight > 1 && !this.doColumnSubtotals && this.getColumnType(column) !== undefined;
  }
  sort(column, order) {
    if (order !== _pivotTableConstants.SORT_ORDER_ASCENDING && order !== _pivotTableConstants.SORT_ORDER_DESCENDING) {
      console.warn(`Invalid sort order ${order}`);
      return;
    }
    if (!this.isSortable(column)) {
      console.warn(`Invalid sort column ${column}`);
      return;
    }
    const mappedColumn = this.columnMap[column];
    this.rowMap.sort((rowA, rowB) => {
      if (this.doColumnTotals && rowA === this.dataHeight - 1) {
        return 1;
      }
      if (this.doColumnTotals && rowB === this.dataHeight - 1) {
        return -1;
      }
      const valueA = this.getRaw({
        row: rowA,
        column: mappedColumn
      });
      const valueB = this.getRaw({
        row: rowB,
        column: mappedColumn
      });
      if ((!valueA || valueA.empty) && (!valueB || valueB.empty)) {
        return 0;
      }
      if (!valueA || valueA.empty) {
        return -1 * order;
      }
      if (!valueB || valueB.empty) {
        return 1 * order;
      }
      if (valueA.valueType === _valueTypes.VALUE_TYPE_NUMBER && valueB.valueType === _valueTypes.VALUE_TYPE_NUMBER) {
        return (valueA.rawValue - valueB.rawValue) * order;
      }
      return valueA.renderedValue.localeCompare(valueB.renderedValue) * order;
    });
    this.adaptiveClippingController.resetRowPartitions();
  }
  clearSort() {
    this.resetRowMap();
    this.adaptiveClippingController.resetRowPartitions();
  }
}
exports.PivotTableEngine = PivotTableEngine;