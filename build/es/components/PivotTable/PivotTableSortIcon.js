import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React from 'react';
import { SORT_ORDER_ASCENDING } from '../../modules/pivotTable/pivotTableConstants.js';
import { SortIconAscending } from './icons/SortIconAscending.js';
import { SortIconDescending } from './icons/SortIconDescending.js';
import { SortIconIdle } from './icons/SortIconIdle.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
import { sortIcon as sortIconStyle } from './styles/PivotTable.style.js';
export const PivotTableSortIcon = _ref => {
  let {
    index,
    sortBy
  } = _ref;
  const engine = usePivotTableEngine();
  const SortIcon = (sortBy === null || sortBy === void 0 ? void 0 : sortBy.column) === index ? sortBy.order === SORT_ORDER_ASCENDING ? SortIconAscending : SortIconDescending : SortIconIdle;
  return /*#__PURE__*/React.createElement("span", {
    className: "jsx-".concat(sortIconStyle.__hash) + " " + "fontsize-".concat(engine.visualization.fontSize)
  }, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: sortIconStyle.__hash
  }, sortIconStyle), /*#__PURE__*/React.createElement(SortIcon, {
    className: "jsx-".concat(sortIconStyle.__hash)
  }));
};
PivotTableSortIcon.propTypes = {
  index: PropTypes.number.isRequired,
  sortBy: PropTypes.object
};