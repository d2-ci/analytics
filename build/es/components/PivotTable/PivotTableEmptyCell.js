import _JSXStyle from "styled-jsx/style";
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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