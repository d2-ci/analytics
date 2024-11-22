import _JSXStyle from "styled-jsx/style";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { PivotTableCell } from './PivotTableCell.js';
import { cell as cellStyle } from './styles/PivotTable.style.js';
export const PivotTableEmptyCell = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(PivotTableCell, _extends({
    ref: ref
  }, props), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: cellStyle.__hash
  }, cellStyle));
});
PivotTableEmptyCell.displayName = 'PivotTableEmptyCell';