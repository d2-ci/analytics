import PropTypes from 'prop-types';
import React from 'react';
import getFilterText from '../../visualizations/util/getFilterText.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
import { PivotTableTitleRow } from './PivotTableTitleRow.js';

/* Returns the filter line to render, or null for no filter row at all.
 * A caller-supplied `filterText` is authoritative - including the empty
 * string, which is how a caller says "this visualization has no filters".
 * Only when nothing was supplied is the line derived from the layout. */
const getFilterRowTitle = engine => {
  var _engine$visualization;
  const {
    filterText
  } = engine.options;
  if (filterText !== undefined) {
    return filterText || null;
  }
  return (_engine$visualization = engine.visualization.filters) !== null && _engine$visualization !== void 0 && _engine$visualization.length ? getFilterText(engine.visualization.filters, engine.rawData.metaData) : null;
};
export const PivotTableTitleRows = ({
  clippingResult,
  width
}) => {
  const engine = usePivotTableEngine();
  const filterRowTitle = getFilterRowTitle(engine);
  return /*#__PURE__*/React.createElement(React.Fragment, null, engine.options.title ? /*#__PURE__*/React.createElement(PivotTableTitleRow, {
    title: engine.options.title,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null, engine.options.subtitle ? /*#__PURE__*/React.createElement(PivotTableTitleRow, {
    title: engine.options.subtitle,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null, filterRowTitle !== null ? /*#__PURE__*/React.createElement(PivotTableTitleRow, {
    title: filterRowTitle,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null);
};
PivotTableTitleRows.propTypes = {
  clippingResult: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired
};