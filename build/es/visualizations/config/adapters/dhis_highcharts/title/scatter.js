import getFilterText from '../../../../util/getFilterText.js';
export default function (layout, metaData, dashboard) {
  var _layout$rows, _layout$columns;

  if ((_layout$rows = layout.rows) !== null && _layout$rows !== void 0 && _layout$rows.length && (_layout$columns = layout.columns) !== null && _layout$columns !== void 0 && _layout$columns.length && !dashboard) {
    const columns = getFilterText(layout.columns, metaData).split(', ');
    return "".concat(getFilterText(layout.rows, metaData), ": ").concat(columns[0], " - ").concat(columns[1]);
  }
}