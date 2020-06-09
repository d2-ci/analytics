"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableEngine = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _times = _interopRequireDefault(require("lodash/times"));

var _parseValue = require("./parseValue");

var _renderValue = require("./renderValue");

var _measureText = require("./measureText");

var _predefinedDimensions = require("../predefinedDimensions");

var _pivotTableConstants = require("./pivotTableConstants");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var dataFields = ['value', 'numerator', 'denominator', 'factor', 'multiplier', 'divisor'];
var defaultOptions = {
  hideEmptyColumns: false,
  hideEmptyRows: false,
  showRowTotals: false,
  showColumnTotals: false,
  showRowSubtotals: false,
  showColumnSubtotals: false
};

var isDxDimension = function isDxDimension(dimensionItem) {
  return [_pivotTableConstants.DIMENSION_TYPE_DATA, _pivotTableConstants.DIMENSION_TYPE_DATA_ELEMENT_GROUP_SET].includes(dimensionItem.dimensionType);
};

var countFromDisaggregates = function countFromDisaggregates(list) {
  var count = 1;
  list.forEach(function (x) {
    count *= x.items.length;
  });
  return count;
};

var addSize = function addSize(list) {
  var reversedList = list.slice().reverse();
  reversedList.forEach(function (level, idx) {
    // Start at the "leaf" disaggregate
    var lastLevel = reversedList[idx - 1];
    level.size = lastLevel ? lastLevel.count * lastLevel.size : 1;
  });
};

var listByDimension = function listByDimension(list) {
  return list.reduce(function (all, item) {
    all[item.dimension] = item;
    return all;
  }, {});
};

var sortByHierarchy = function sortByHierarchy(items) {
  items.sort(function (a, b) {
    if (!a.hierarchy || !b.hierarchy) {
      return 0;
    }

    return a.hierarchy.join('/').localeCompare(b.hierarchy.join('/'));
  });
};

var buildDimensionLookup = function buildDimensionLookup(visualization, metadata, headers) {
  var rows = visualization.rows.map(function (row) {
    return {
      dimension: row.dimension,
      meta: metadata.items[row.dimension],
      count: metadata.dimensions[row.dimension].length,
      itemIds: metadata.dimensions[row.dimension],
      items: metadata.dimensions[row.dimension].map(function (item) {
        return metadata.items[item];
      }),
      isDxDimension: isDxDimension(metadata.items[row.dimension]),
      position: 'row'
    };
  });
  var columns = visualization.columns.map(function (column) {
    return {
      dimension: column.dimension,
      meta: metadata.items[column.dimension],
      count: metadata.dimensions[column.dimension].length,
      itemIds: metadata.dimensions[column.dimension],
      items: metadata.dimensions[column.dimension].map(function (item) {
        return metadata.items[item];
      }),
      isDxDimension: isDxDimension(metadata.items[column.dimension]),
      position: 'column'
    };
  });
  addSize(rows);
  addSize(columns);

  var allByDimension = _objectSpread(_objectSpread({}, listByDimension(rows)), listByDimension(columns));

  var headerDimensions = headers.map(function (header) {
    return allByDimension[header.name];
  });
  var rowHeaders = headerDimensions.map(function (_, idx) {
    return idx;
  }).filter(function (idx) {
    return headerDimensions[idx] && headerDimensions[idx].position === 'row';
  });
  var columnHeaders = headerDimensions.map(function (_, idx) {
    return idx;
  }).filter(function (idx) {
    return headerDimensions[idx] && headerDimensions[idx].position === 'column';
  });
  var dataHeaders = dataFields.reduce(function (out, field) {
    out[field] = headers.findIndex(function (header) {
      return header.name === field;
    });
    return out;
  }, {});
  var ouDimension = allByDimension[_predefinedDimensions.DIMENSION_ID_ORGUNIT];

  if (visualization.showHierarchy && metadata.ouNameHierarchy && ouDimension) {
    ouDimension.items.forEach(function (ou) {
      var hierarchy = metadata.ouNameHierarchy[ou.uid];

      if (hierarchy) {
        ou.hierarchy = hierarchy.split('/').filter(function (x) {
          return x.length;
        });
      }
    });
    sortByHierarchy(ouDimension.items);
    ouDimension.itemIds = ouDimension.items.map(function (item) {
      return item.uid;
    });
  }

  return {
    rows: rows,
    columns: columns,
    allByDimension: allByDimension,
    headerDimensions: headerDimensions,
    rowHeaders: rowHeaders,
    columnHeaders: columnHeaders,
    dataHeaders: dataHeaders
  };
};

var lookup = function lookup(dataRow, dimensionLookup, _ref) {
  var doColumnSubtotals = _ref.doColumnSubtotals,
      doRowSubtotals = _ref.doRowSubtotals;
  var row = 0;

  var _iterator = _createForOfIteratorHelper(dimensionLookup.rowHeaders),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var headerIndex = _step.value;
      var idx = dimensionLookup.headerDimensions[headerIndex].itemIds.indexOf(dataRow[headerIndex]);

      if (idx === -1) {
        return undefined;
      }

      var size = dimensionLookup.headerDimensions[headerIndex].size;
      row += idx * size;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (doColumnSubtotals) {
    row += Math.floor(row / dimensionLookup.rows[0].size);
  }

  var column = 0;

  var _iterator2 = _createForOfIteratorHelper(dimensionLookup.columnHeaders),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _headerIndex = _step2.value;

      var _idx = dimensionLookup.headerDimensions[_headerIndex].itemIds.indexOf(dataRow[_headerIndex]);

      if (_idx === -1) {
        return undefined;
      }

      var _size = dimensionLookup.headerDimensions[_headerIndex].size;
      column += _idx * _size;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if (doRowSubtotals) {
    column += Math.floor(column / dimensionLookup.columns[0].size);
  }

  return {
    column: column,
    row: row
  };
};

var applyTotalAggregationType = function applyTotalAggregationType(_ref2, overrideTotalAggregationType) {
  var totalAggregationType = _ref2.totalAggregationType,
      value = _ref2.value,
      numerator = _ref2.numerator,
      denominator = _ref2.denominator,
      multiplier = _ref2.multiplier,
      divisor = _ref2.divisor;

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

var PivotTableEngine = /*#__PURE__*/function () {
  function PivotTableEngine(visualization, data, legendSets) {
    (0, _classCallCheck2.default)(this, PivotTableEngine);
    (0, _defineProperty2.default)(this, "visualization", void 0);
    (0, _defineProperty2.default)(this, "rawData", void 0);
    (0, _defineProperty2.default)(this, "options", void 0);
    (0, _defineProperty2.default)(this, "legendSets", void 0);
    (0, _defineProperty2.default)(this, "dimensionLookup", void 0);
    (0, _defineProperty2.default)(this, "columnDepth", 0);
    (0, _defineProperty2.default)(this, "rowDepth", 0);
    (0, _defineProperty2.default)(this, "height", 0);
    (0, _defineProperty2.default)(this, "width", 0);
    (0, _defineProperty2.default)(this, "data", []);
    (0, _defineProperty2.default)(this, "columnWidths", []);
    (0, _defineProperty2.default)(this, "rowMap", []);
    (0, _defineProperty2.default)(this, "columnMap", []);
    this.visualization = visualization;
    this.legendSets = (legendSets || []).reduce(function (sets, set) {
      sets[set.id] = set;
      return sets;
    }, {});
    this.rawData = data;
    this.options = _objectSpread(_objectSpread({}, defaultOptions), {}, {
      showColumnTotals: visualization.colTotals,
      showRowTotals: visualization.rowTotals,
      showColumnSubtotals: visualization.colSubTotals,
      showRowSubtotals: visualization.rowSubTotals,
      hideEmptyColumns: visualization.hideEmptyColumns,
      hideEmptyRows: visualization.hideEmptyRows,
      title: visualization.hideTitle ? undefined : visualization.title,
      subtitle: visualization.hideSubtitle ? undefined : visualization.subtitle
    });
    this.dimensionLookup = buildDimensionLookup(this.visualization, this.rawData.metaData, this.rawData.headers);
    var doColumnSubtotals = this.options.showColumnSubtotals && this.dimensionLookup.rows.length > 1;
    var singularRow = this.dimensionLookup.rows.length === 1 && this.dimensionLookup.rows[0].count === 1;
    var firstColumnIsSortable = !doColumnSubtotals && !singularRow;
    this.columnDepth = this.dimensionLookup.columns.length || (this.visualization.showDimensionLabels || firstColumnIsSortable ? 1 : 0);
    this.rowDepth = this.dimensionLookup.rows.length || (this.visualization.showDimensionLabels ? 1 : 0);
    this.buildMatrix();
  }

  (0, _createClass2.default)(PivotTableEngine, [{
    key: "getRaw",
    value: function getRaw(_ref3) {
      var _headers$find, _headers$find2;

      var row = _ref3.row,
          column = _ref3.column;
      var cellType = this.getRawCellType({
        row: row,
        column: column
      });
      var dxDimension = this.getRawCellDxDimension({
        row: row,
        column: column
      });
      var headers = [].concat((0, _toConsumableArray2.default)(this.getRawRowHeader(row)), (0, _toConsumableArray2.default)(this.getRawColumnHeader(column)));
      var peId = (_headers$find = headers.find(function (header) {
        return (header === null || header === void 0 ? void 0 : header.dimensionItemType) === _pivotTableConstants.DIMENSION_TYPE_PERIOD;
      })) === null || _headers$find === void 0 ? void 0 : _headers$find.uid;
      var ouId = (_headers$find2 = headers.find(function (header) {
        return (header === null || header === void 0 ? void 0 : header.dimensionItemType) === _pivotTableConstants.DIMENSION_TYPE_ORGUNIT;
      })) === null || _headers$find2 === void 0 ? void 0 : _headers$find2.uid;

      if (!this.data[row] || !this.data[row][column]) {
        return {
          cellType: cellType,
          empty: true,
          ouId: ouId,
          peId: peId
        };
      }

      var dataRow = this.data[row][column];
      var rawValue = cellType === _pivotTableConstants.CELL_TYPE_VALUE ? dataRow[this.dimensionLookup.dataHeaders.value] : dataRow.value;
      var renderedValue = rawValue;
      var valueType = (dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType) || _pivotTableConstants.VALUE_TYPE_TEXT;

      if (valueType === _pivotTableConstants.VALUE_TYPE_NUMBER) {
        rawValue = (0, _parseValue.parseValue)(rawValue);

        switch (this.visualization.numberType) {
          case _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE:
            renderedValue = rawValue / this.percentageTotals[row].value;
            break;

          case _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE:
            renderedValue = rawValue / this.percentageTotals[column].value;
            break;
        }
      }

      renderedValue = (0, _renderValue.renderValue)(renderedValue, valueType, this.visualization);
      return {
        cellType: cellType,
        empty: false,
        valueType: valueType,
        rawValue: rawValue,
        renderedValue: renderedValue,
        dxDimension: dxDimension,
        ouId: ouId,
        peId: peId
      };
    }
  }, {
    key: "get",
    value: function get(_ref4) {
      var row = _ref4.row,
          column = _ref4.column;
      var mappedRow = this.rowMap[row],
          mappedColumn = this.columnMap[column];

      if (!mappedRow && mappedRow !== 0 || !mappedColumn && mappedColumn !== 0) {
        return undefined;
      }

      return this.getRaw({
        row: mappedRow,
        column: mappedColumn
      });
    }
  }, {
    key: "getRawCellType",
    value: function getRawCellType(_ref5) {
      var row = _ref5.row,
          column = _ref5.column;
      var isRowTotal = this.doRowTotals && column === this.dataWidth - 1;
      var isColumnTotal = this.doColumnTotals && row === this.dataHeight - 1;

      if (isRowTotal || isColumnTotal) {
        return _pivotTableConstants.CELL_TYPE_TOTAL;
      }

      var isRowSubtotal = this.doRowSubtotals && (column + 1) % (this.dimensionLookup.columns[0].size + 1) === 0;
      var isColumnSubtotal = this.doColumnSubtotals && (row + 1) % (this.dimensionLookup.rows[0].size + 1) === 0;

      if (isRowSubtotal || isColumnSubtotal) {
        return _pivotTableConstants.CELL_TYPE_SUBTOTAL;
      }

      return _pivotTableConstants.CELL_TYPE_VALUE;
    }
  }, {
    key: "getCellType",
    value: function getCellType(_ref6) {
      var row = _ref6.row,
          column = _ref6.column;
      row = this.rowMap[row];
      column = this.columnMap[column];
      return this.getRawCellType({
        row: row,
        column: column
      });
    }
  }, {
    key: "getDimensionLabel",
    value: function getDimensionLabel(rowLevel, columnLevel) {
      var lastRowLevel = this.rowDepth - 1;
      var lastColumnLevel = this.columnDepth - 1;

      if (rowLevel !== lastRowLevel && columnLevel !== lastColumnLevel) {
        return null;
      }

      if (rowLevel === lastRowLevel && this.dimensionLookup.rows[lastRowLevel] && columnLevel === lastColumnLevel && this.dimensionLookup.columns[lastColumnLevel]) {
        return "".concat(this.dimensionLookup.rows[lastRowLevel].meta.name, " / ").concat(this.dimensionLookup.columns[lastColumnLevel].meta.name);
      }

      if (lastRowLevel === -1) {
        return this.dimensionLookup.columns[columnLevel].meta.name;
      }

      if (lastColumnLevel === -1) {
        return this.dimensionLookup.rows[rowLevel].meta.name;
      }

      if (rowLevel === lastRowLevel && this.dimensionLookup.columns[columnLevel]) {
        return this.dimensionLookup.columns[columnLevel].meta.name;
      }

      if (columnLevel === lastColumnLevel && this.dimensionLookup.rows[rowLevel]) {
        return this.dimensionLookup.rows[rowLevel].meta.name;
      }
    }
  }, {
    key: "getCellDxDimension",
    value: function getCellDxDimension(_ref7) {
      var row = _ref7.row,
          column = _ref7.column;
      return this.getRawCellDxDimension({
        row: this.rowMap[row],
        column: this.columnMap[column]
      });
    }
  }, {
    key: "getRawCellDxDimension",
    value: function getRawCellDxDimension(_ref8) {
      var row = _ref8.row,
          column = _ref8.column;

      if (!this.data[row]) {
        return undefined;
      }

      var cellValue = this.data[row][column];

      if (!cellValue) {
        return undefined;
      }

      if (!Array.isArray(cellValue)) {
        // This is a total cell
        return {
          valueType: cellValue.valueType,
          totalAggregationType: cellValue.totalAggregationType,
          legendSet: undefined
        };
      }

      var rowHeaders = this.getRawRowHeader(row);
      var columnHeaders = this.getRawColumnHeader(column);
      var dxRowIndex = this.dimensionLookup.rows.findIndex(function (dim) {
        return dim.isDxDimension;
      });

      if (rowHeaders.length && dxRowIndex !== -1) {
        return {
          valueType: rowHeaders[dxRowIndex].valueType,
          totalAggregationType: rowHeaders[dxRowIndex].totalAggregationType,
          legendSet: rowHeaders[dxRowIndex].legendSet
        };
      }

      var dxColumnIndex = this.dimensionLookup.columns.findIndex(function (dim) {
        return dim.isDxDimension;
      });

      if (columnHeaders.length && dxColumnIndex !== -1) {
        return {
          valueType: columnHeaders[dxColumnIndex].valueType,
          totalAggregationType: columnHeaders[dxColumnIndex].totalAggregationType,
          legendSet: columnHeaders[dxColumnIndex].legendSet
        };
      } // Data is in Filter
      // TODO : This assumes the server ignores text types, we should confirm this is the case


      return {
        valueType: _pivotTableConstants.VALUE_TYPE_NUMBER,
        totalAggregationType: _pivotTableConstants.AGGREGATE_TYPE_SUM
      };
    }
  }, {
    key: "rowIsEmpty",
    value: function rowIsEmpty(row) {
      return !this.data[row] || this.data[row].length === 0;
    }
  }, {
    key: "columnIsEmpty",
    value: function columnIsEmpty(column) {
      return !this.columnWidths[column];
    }
  }, {
    key: "getRawColumnHeader",
    value: function getRawColumnHeader(column) {
      if (this.doRowTotals && column === this.dataWidth - 1) {
        return (0, _times.default)(this.columnDepth - 1, function () {
          return undefined;
        }).concat([{
          name: 'Total'
        }]);
      }

      if (this.doRowSubtotals) {
        if ((column + 1) % (this.dimensionLookup.columns[0].size + 1) === 0) {
          return (0, _times.default)(this.columnDepth - 1, function () {
            return undefined;
          }).concat([{
            name: 'Subtotal'
          }]);
        }

        column -= Math.floor(column / (this.dimensionLookup.columns[0].size + 1));
      }

      return this.dimensionLookup.columns.map(function (dimension) {
        var itemIndex = Math.floor(column / dimension.size) % dimension.count;
        return dimension.items[itemIndex];
      });
    }
  }, {
    key: "getColumnHeader",
    value: function getColumnHeader(column) {
      return this.getRawColumnHeader(this.columnMap[column]);
    }
  }, {
    key: "getRawRowHeader",
    value: function getRawRowHeader(row) {
      if (this.doColumnTotals && row === this.dataHeight - 1) {
        return (0, _times.default)(this.rowDepth - 1, function () {
          return undefined;
        }).concat([{
          name: 'Total'
        }]);
      }

      if (this.doColumnSubtotals) {
        if ((row + 1) % (this.dimensionLookup.rows[0].size + 1) === 0) {
          return (0, _times.default)(this.rowDepth - 1, function () {
            return undefined;
          }).concat([{
            name: 'Subtotal'
          }]);
        }

        row -= Math.floor(row / (this.dimensionLookup.rows[0].size + 1));
      }

      return this.dimensionLookup.rows.map(function (dimension) {
        var itemIndex = Math.floor(row / dimension.size) % dimension.count;
        return dimension.items[itemIndex];
      });
    }
  }, {
    key: "getRowHeader",
    value: function getRowHeader(row) {
      return this.getRawRowHeader(this.rowMap[row]);
    }
  }, {
    key: "getDependantTotalCells",
    value: function getDependantTotalCells(_ref9) {
      var _this$dimensionLookup, _this$dimensionLookup2;

      var row = _ref9.row,
          column = _ref9.column;
      var rowSubtotalSize = ((_this$dimensionLookup = this.dimensionLookup.columns[0]) === null || _this$dimensionLookup === void 0 ? void 0 : _this$dimensionLookup.size) + 1;
      var rowSubtotal = rowSubtotalSize && this.doRowSubtotals && {
        row: row,
        column: Math.ceil((column + 1) / rowSubtotalSize) * rowSubtotalSize - 1,
        size: rowSubtotalSize - 1
      };
      var rowSubtotalColumnTotal = this.doRowSubtotals && this.doColumnTotals && {
        row: this.dataHeight - 1,
        column: rowSubtotal.column,
        size: this.rawDataHeight
      };
      var columnSubtotalSize = ((_this$dimensionLookup2 = this.dimensionLookup.rows[0]) === null || _this$dimensionLookup2 === void 0 ? void 0 : _this$dimensionLookup2.size) + 1;
      var columnSubtotal = columnSubtotalSize && this.doColumnSubtotals && {
        row: Math.ceil((row + 1) / columnSubtotalSize) * columnSubtotalSize - 1,
        column: column,
        size: columnSubtotalSize - 1
      };
      var columnSubtotalRowTotal = this.doColumnSubtotals && this.doRowTotals && {
        row: columnSubtotal.row,
        column: this.dataWidth - 1,
        size: this.rawDataWidth
      };
      var combinedSubtotal = rowSubtotalSize && columnSubtotalSize && this.doColumnSubtotals && this.doRowSubtotals && {
        row: columnSubtotal.row,
        column: rowSubtotal.column,
        size: columnSubtotalSize * rowSubtotalSize
      };
      var rowTotal = this.doRowTotals && {
        row: row,
        column: this.dataWidth - 1,
        size: this.rawDataWidth
      };
      var columnTotal = this.doColumnTotals && {
        row: this.dataHeight - 1,
        column: column,
        size: this.rawDataHeight
      };
      var combinedTotal = this.doColumnTotals && this.doRowTotals && {
        row: this.dataHeight - 1,
        column: this.dataWidth - 1,
        size: this.rawDataHeight * this.rawDataWidth
      };
      return {
        rowSubtotal: rowSubtotal,
        rowSubtotalColumnTotal: rowSubtotalColumnTotal,
        columnSubtotal: columnSubtotal,
        columnSubtotalRowTotal: columnSubtotalRowTotal,
        rowTotal: rowTotal,
        columnTotal: columnTotal,
        combinedSubtotal: combinedSubtotal,
        combinedTotal: combinedTotal
      };
    }
  }, {
    key: "addCellValueToTotals",
    value: function addCellValueToTotals(pos, dataRow) {
      var _this = this;

      var totals = this.getDependantTotalCells(pos);
      var dxDimension = this.getRawCellDxDimension(pos);
      Object.values(totals).forEach(function (totalItem) {
        if (!totalItem) return;
        _this.data[totalItem.row] = _this.data[totalItem.row] || [];
        _this.data[totalItem.row][totalItem.column] = _this.data[totalItem.row][totalItem.column] || {
          count: 0,
          totalCount: totalItem.size
        };
        var totalCell = _this.data[totalItem.row][totalItem.column];
        var currentAggType = dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.totalAggregationType;
        var previousAggType = totalCell.totalAggregationType || currentAggType;

        if (previousAggType && currentAggType !== previousAggType) {
          totalCell.totalAggregationType = _pivotTableConstants.AGGREGATE_TYPE_NA;
        } else {
          totalCell.totalAggregationType = currentAggType;
        }

        var currentValueType = dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType;
        var previousValueType = totalCell.valueType;

        if (previousValueType && currentValueType !== previousValueType) {
          totalCell.valueType = _pivotTableConstants.AGGREGATE_TYPE_NA;
        } else {
          totalCell.valueType = currentValueType;
        }

        if ((dxDimension === null || dxDimension === void 0 ? void 0 : dxDimension.valueType) === _pivotTableConstants.VALUE_TYPE_NUMBER) {
          dataFields.forEach(function (field) {
            var headerIndex = _this.dimensionLookup.dataHeaders[field];
            var value = (0, _parseValue.parseValue)(dataRow[headerIndex]);

            if (value && !isNaN(value)) {
              totalCell[field] = (totalCell[field] || 0) + value;
            }
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

        var percentageTotal = this.percentageTotals[pos.row];
        dataFields.forEach(function (field) {
          var headerIndex = _this.dimensionLookup.dataHeaders[field];
          var value = (0, _parseValue.parseValue)(dataRow[headerIndex]);

          if (value && !isNaN(value)) {
            percentageTotal[field] = (percentageTotal[field] || 0) + value;
          }
        });

        if (totals.columnSubtotal) {
          if (!this.percentageTotals[totals.columnSubtotal.row]) {
            this.percentageTotals[totals.columnSubtotal.row] = {
              count: 0,
              totalCount: this.rawDataWidth
            };
          }

          var _percentageTotal = this.percentageTotals[totals.columnSubtotal.row];
          dataFields.forEach(function (field) {
            var headerIndex = _this.dimensionLookup.dataHeaders[field];
            var value = (0, _parseValue.parseValue)(dataRow[headerIndex]);

            if (value && !isNaN(value)) {
              _percentageTotal[field] = (_percentageTotal[field] || 0) + value;
            }
          });
        }

        if (totals.columnTotal) {
          if (!this.percentageTotals[totals.columnTotal.row]) {
            this.percentageTotals[totals.columnTotal.row] = {
              count: 0,
              totalCount: this.rawDataWidth
            };
          }

          var _percentageTotal2 = this.percentageTotals[totals.columnTotal.row];
          dataFields.forEach(function (field) {
            var headerIndex = _this.dimensionLookup.dataHeaders[field];
            var value = (0, _parseValue.parseValue)(dataRow[headerIndex]);

            if (value && !isNaN(value)) {
              _percentageTotal2[field] = (_percentageTotal2[field] || 0) + value;
            }
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

        var _percentageTotal3 = this.percentageTotals[pos.column];
        dataFields.forEach(function (field) {
          var headerIndex = _this.dimensionLookup.dataHeaders[field];
          var value = (0, _parseValue.parseValue)(dataRow[headerIndex]);

          if (value && !isNaN(value)) {
            _percentageTotal3[field] = (_percentageTotal3[field] || 0) + value;
          }
        });

        if (totals.rowSubtotal) {
          if (!this.percentageTotals[totals.rowSubtotal.column]) {
            this.percentageTotals[totals.rowSubtotal.column] = {
              count: 0,
              totalCount: this.rawDataHeight
            };
          }

          var _percentageTotal4 = this.percentageTotals[totals.rowSubtotal.column];
          dataFields.forEach(function (field) {
            var headerIndex = _this.dimensionLookup.dataHeaders[field];
            var value = (0, _parseValue.parseValue)(dataRow[headerIndex]);

            if (value && !isNaN(value)) {
              _percentageTotal4[field] = (_percentageTotal4[field] || 0) + value;
            }
          });
        }

        if (totals.rowTotal) {
          if (!this.percentageTotals[totals.rowTotal.column]) {
            this.percentageTotals[totals.rowTotal.column] = {
              count: 0,
              totalCount: this.rawDataHeight
            };
          }

          var _percentageTotal5 = this.percentageTotals[totals.rowTotal.column];
          dataFields.forEach(function (field) {
            var headerIndex = _this.dimensionLookup.dataHeaders[field];
            var value = (0, _parseValue.parseValue)(dataRow[headerIndex]);

            if (value && !isNaN(value)) {
              _percentageTotal5[field] = (_percentageTotal5[field] || 0) + value;
            }
          });
        }
      }
    }
  }, {
    key: "finalizeTotal",
    value: function finalizeTotal(_ref10) {
      var row = _ref10.row,
          column = _ref10.column;

      if (!this.data[row]) {
        return;
      }

      var totalCell = this.data[row][column];

      if (totalCell && totalCell.count) {
        totalCell.value = applyTotalAggregationType(totalCell, this.visualization.numberType !== _pivotTableConstants.NUMBER_TYPE_VALUE && _pivotTableConstants.AGGREGATE_TYPE_SUM);
        this.addCellForAdaptiveClipping({
          row: row,
          column: column
        }, (0, _renderValue.renderValue)(totalCell.value, totalCell.valueType, this.visualization));
      }
    }
  }, {
    key: "finalizeTotals",
    value: function finalizeTotals() {
      var _this$dimensionLookup3,
          _this$dimensionLookup4,
          _this2 = this;

      var columnSubtotalSize = ((_this$dimensionLookup3 = this.dimensionLookup.rows[0]) === null || _this$dimensionLookup3 === void 0 ? void 0 : _this$dimensionLookup3.size) + 1;
      var rowSubtotalSize = ((_this$dimensionLookup4 = this.dimensionLookup.columns[0]) === null || _this$dimensionLookup4 === void 0 ? void 0 : _this$dimensionLookup4.size) + 1;

      if (this.doRowSubtotals && rowSubtotalSize) {
        (0, _times.default)(this.dimensionLookup.columns[0].count, function (n) {
          return (n + 1) * rowSubtotalSize - 1;
        }).forEach(function (column) {
          (0, _times.default)(_this2.dataHeight - (_this2.doColumnTotals ? 1 : 0), function (n) {
            return n;
          }).forEach(function (row) {
            // skip combined subtotal cells
            if (!_this2.doColumnSubtotals || (row + 1) % columnSubtotalSize !== 0) {
              _this2.finalizeTotal({
                row: row,
                column: column
              });
            }
          });
        });
      }

      if (this.doColumnSubtotals && columnSubtotalSize) {
        (0, _times.default)(this.dimensionLookup.rows[0].count, function (n) {
          return (n + 1) * columnSubtotalSize - 1;
        }).forEach(function (row) {
          (0, _times.default)(_this2.dataWidth - (_this2.doRowTotals ? 1 : 0), function (n) {
            return n;
          }).forEach(function (column) {
            // skip combined subtotal cells
            if (!_this2.doRowSubtotals || (column + 1) % rowSubtotalSize !== 0) {
              _this2.finalizeTotal({
                row: row,
                column: column
              });
            }
          });
        });
      } // Combined subtotal cells


      if (this.doRowSubtotals && this.doColumnSubtotals && rowSubtotalSize && columnSubtotalSize) {
        (0, _times.default)(this.dimensionLookup.rows[0].count, function (n) {
          return (n + 1) * columnSubtotalSize - 1;
        }).forEach(function (row) {
          (0, _times.default)(_this2.dimensionLookup.columns[0].count, function (n) {
            return (n + 1) * rowSubtotalSize - 1;
          }).forEach(function (column) {
            _this2.finalizeTotal({
              row: row,
              column: column
            });
          });
        });
      }

      if (this.doRowTotals) {
        var column = this.dataWidth - 1;
        (0, _times.default)(this.dataHeight - 1, function (n) {
          return n;
        }).forEach(function (row) {
          _this2.finalizeTotal({
            row: row,
            column: column
          });
        });
      }

      if (this.doColumnTotals) {
        var row = this.dataHeight - 1;
        (0, _times.default)(this.dataWidth - 1, function (n) {
          return n;
        }).forEach(function (column) {
          _this2.finalizeTotal({
            row: row,
            column: column
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
        this.percentageTotals.forEach(function (item) {
          item.value = applyTotalAggregationType(item);
        });
      }
    }
  }, {
    key: "addCellForAdaptiveClipping",
    value: function addCellForAdaptiveClipping(_ref11, renderedValue) {
      var column = _ref11.column;
      this.columnWidths[column] = Math.max(this.columnWidths[column] || 0, (0, _measureText.measureText)(renderedValue, this.fontSize));
    }
  }, {
    key: "finalizeAdaptiveClipping",
    value: function finalizeAdaptiveClipping() {
      var _this3 = this;

      this.dataPixelWidth = 0;
      this.rowHeaderPixelWidth = 0;
      var nextPartitionPx = 0;
      this.columnPartitions = [];

      var getColumnWidth = function getColumnWidth(contentWidth) {
        return Math.min(_pivotTableConstants.CLIPPED_CELL_MAX_WIDTH, Math.ceil(contentWidth)) + _this3.cellPadding * 2 +
        /*border*/
        2;
      };

      this.columnMap.forEach(function (column) {
        var header = _this3.getRawColumnHeader(column)[_this3.columnDepth - 1];

        var label = _this3.visualization.showHierarchy && (header === null || header === void 0 ? void 0 : header.hierarchy) ? header.hierarchy.join(' / ') : header === null || header === void 0 ? void 0 : header.name;

        if (label) {
          var headerSize = (0, _measureText.measureText)(label, _this3.fontSize);
          _this3.columnWidths[column] = Math.max(_this3.columnWidths[column] || 0, headerSize + (_this3.isSortable(column) ? _this3.scrollIconBuffer : 0));
        }

        var colWidth = getColumnWidth(_this3.columnWidths[column]);
        _this3.columnWidths[column] = {
          pre: _this3.dataPixelWidth,
          width: colWidth
        };

        if (_this3.dataPixelWidth >= nextPartitionPx) {
          _this3.columnPartitions.push(column);

          nextPartitionPx += _pivotTableConstants.COLUMN_PARTITION_SIZE_PX;
        }

        _this3.dataPixelWidth += colWidth;
      });

      if (!this.dimensionLookup.rows.length && this.visualization.showDimensionLabels) {
        var maxWidth = 0;
        this.dimensionLookup.columns.forEach(function (_, columnLevel) {
          var label = _this3.getDimensionLabel(0, columnLevel);

          if (label) {
            var headerSize = (0, _measureText.measureText)(label, _this3.fontSize);
            maxWidth = Math.max(maxWidth, headerSize);
          }
        });
        var columnWidth = getColumnWidth(maxWidth);
        this.rowHeaderPixelWidth = columnWidth;
        this.rowHeaderWidths = [columnWidth];
      }

      this.rowHeaderWidths = this.dimensionLookup.rows.map(function (_, rowLevel) {
        var maxWidth = 0;

        _this3.rowMap.forEach(function (rawColumn) {
          var header = _this3.getRawRowHeader(rawColumn)[rowLevel];

          var label = _this3.visualization.showHierarchy && (header === null || header === void 0 ? void 0 : header.hierarchy) ? header.hierarchy.join(' / ') : header === null || header === void 0 ? void 0 : header.name;

          if (label) {
            var headerSize = (0, _measureText.measureText)(label, _this3.fontSize);
            maxWidth = Math.max(maxWidth, headerSize);
          }
        }, 0);

        if (_this3.visualization.showDimensionLabels) {
          _this3.dimensionLookup.columns.forEach(function (_, columnLevel) {
            var label = _this3.getDimensionLabel(rowLevel, columnLevel);

            if (label) {
              var headerSize = (0, _measureText.measureText)(label, _this3.fontSize);
              maxWidth = Math.max(maxWidth, headerSize);
            }
          });
        }

        var columnWidth = getColumnWidth(maxWidth);
        _this3.rowHeaderPixelWidth += columnWidth;
        return columnWidth;
      });
    }
  }, {
    key: "resetRowMap",
    value: function resetRowMap() {
      var _this4 = this;

      this.rowMap = this.options.hideEmptyRows ? (0, _times.default)(this.dataHeight, function (n) {
        return n;
      }).filter(function (idx) {
        return !!_this4.data[idx];
      }) : (0, _times.default)(this.dataHeight, function (n) {
        return n;
      });
    }
  }, {
    key: "resetColumnMap",
    value: function resetColumnMap() {
      var _this5 = this;

      this.columnMap = this.options.hideEmptyColumns ? (0, _times.default)(this.dataWidth, function (n) {
        return n;
      }).filter(function (idx) {
        return !!_this5.columnWidths[idx];
      }) : (0, _times.default)(this.dataWidth, function (n) {
        return n;
      });
    }
  }, {
    key: "buildMatrix",
    value: function buildMatrix() {
      var _this6 = this;

      this.data = [];
      this.columnWidths = [];
      this.dataHeight = this.rawDataHeight = countFromDisaggregates(this.dimensionLookup.rows);
      this.dataWidth = this.rawDataWidth = countFromDisaggregates(this.dimensionLookup.columns); // TODO: Check last row/col dimension for size===1, skip redundant sub-totals

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
      } // TODO: Use total cell calculation, don't duplicate here


      if (this.visualization.numberType === _pivotTableConstants.NUMBER_TYPE_ROW_PERCENTAGE || this.visualization.numberType === _pivotTableConstants.NUMBER_TYPE_COLUMN_PERCENTAGE) {
        this.percentageTotals = [];
      }

      this.rawData.rows.forEach(function (dataRow) {
        var pos = lookup(dataRow, _this6.dimensionLookup, _this6);

        if (pos) {
          _this6.data[pos.row] = _this6.data[pos.row] || [];
          _this6.data[pos.row][pos.column] = dataRow;

          _this6.addCellValueToTotals(pos, dataRow);
        }
      });
      this.finalizeTotals();
      this.rawData.rows.forEach(function (dataRow) {
        var pos = lookup(dataRow, _this6.dimensionLookup, _this6);

        if (pos) {
          _this6.addCellForAdaptiveClipping(pos, _this6.getRaw(pos).renderedValue);
        }
      });
      this.resetRowMap();
      this.resetColumnMap();
      this.height = this.rowMap.length;
      this.width = this.columnMap.length;
      this.finalizeAdaptiveClipping();
    }
  }, {
    key: "getColumnType",
    value: function getColumnType(column) {
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
  }, {
    key: "isSortable",
    value: function isSortable(column) {
      return this.dataHeight > 1 && !this.doColumnSubtotals && this.getColumnType(column) !== undefined;
    }
  }, {
    key: "sort",
    value: function sort(column, order) {
      var _this7 = this;

      if (order !== _pivotTableConstants.SORT_ORDER_ASCENDING && order !== _pivotTableConstants.SORT_ORDER_DESCENDING) {
        console.warn("Invalid sort order ".concat(order));
        return;
      }

      if (!this.isSortable(column)) {
        console.warn("Invalid sort column ".concat(column));
        return;
      }

      var mappedColumn = this.columnMap[column];
      this.rowMap.sort(function (rowA, rowB) {
        if (_this7.doColumnTotals && rowA === _this7.dataHeight - 1) {
          return 1;
        }

        if (_this7.doColumnTotals && rowB === _this7.dataHeight - 1) {
          return -1;
        }

        var valueA = _this7.getRaw({
          row: rowA,
          column: mappedColumn
        });

        var valueB = _this7.getRaw({
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

        if (valueA.valueType === _pivotTableConstants.VALUE_TYPE_NUMBER && valueB.valueType === _pivotTableConstants.VALUE_TYPE_NUMBER) {
          return (valueA.rawValue - valueB.rawValue) * order;
        }

        return valueA.renderedValue.localeCompare(valueB.renderedValue) * order;
      });
    }
  }, {
    key: "clearSort",
    value: function clearSort() {
      this.resetRowMap();
    }
  }, {
    key: "cellPadding",
    get: function get() {
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
  }, {
    key: "fontSize",
    get: function get() {
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
  }, {
    key: "scrollIconBuffer",
    get: function get() {
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
  }]);
  return PivotTableEngine;
}();

exports.PivotTableEngine = PivotTableEngine;