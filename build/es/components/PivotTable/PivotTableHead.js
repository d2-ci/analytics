import PropTypes from 'prop-types';
import React from 'react';
import { PivotTableColumnHeaders } from './PivotTableColumnHeaders.js';
import { PivotTableTitleRows } from './PivotTableTitleRows.js';
export const PivotTableHead = _ref => {
  let {
    clippingResult,
    width,
    sortBy,
    onSortByColumn
  } = _ref;
  return /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(PivotTableTitleRows, {
    clippingResult: clippingResult,
    width: width
  }), /*#__PURE__*/React.createElement(PivotTableColumnHeaders, {
    clippingResult: clippingResult,
    sortBy: sortBy,
    onSortByColumn: onSortByColumn
  }));
};
PivotTableHead.propTypes = {
  clippingResult: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  onSortByColumn: PropTypes.func.isRequired,
  sortBy: PropTypes.object
};