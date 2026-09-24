import PropTypes from 'prop-types';
import React from 'react';
import getFilterText from '../../visualizations/util/getFilterText.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
import { PivotTableTitleRow } from './PivotTableTitleRow.js';

/* Whether there is a filter row at all is the layout's call, as it has
 * always been. `filterText` only says what goes in it: supplied by the
 * caller when there is one, derived from the layout when there is not. */
const getFilterRowTitle = engine => {
  var _engine$options$filte;
  return (_engine$options$filte = engine.options.filterText) !== null && _engine$options$filte !== void 0 ? _engine$options$filte : getFilterText(engine.visualization.filters, engine.rawData.metaData);
};
export const PivotTableTitleRows = ({
  clippingResult,
  width
}) => {
  var _engine$visualization;
  const engine = usePivotTableEngine();
  return /*#__PURE__*/React.createElement(React.Fragment, null, engine.options.title ? /*#__PURE__*/React.createElement(PivotTableTitleRow, {
    title: engine.options.title,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null, engine.options.subtitle ? /*#__PURE__*/React.createElement(PivotTableTitleRow, {
    title: engine.options.subtitle,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null, (_engine$visualization = engine.visualization.filters) !== null && _engine$visualization !== void 0 && _engine$visualization.length ? /*#__PURE__*/React.createElement(PivotTableTitleRow, {
    title: getFilterRowTitle(engine),
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null);
};
PivotTableTitleRows.propTypes = {
  clippingResult: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired
};