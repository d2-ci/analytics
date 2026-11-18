import PropTypes from 'prop-types';
import React from 'react';
import getFilterText from '../../visualizations/util/getFilterText.js';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
import { PivotTableTitleRow } from './PivotTableTitleRow.js';
export const PivotTableTitleRows = ({
  width
}) => {
  var _engine$visualization;
  const engine = usePivotTableEngine();
  return /*#__PURE__*/React.createElement(React.Fragment, null, engine.options.title ? /*#__PURE__*/React.createElement(PivotTableTitleRow, {
    title: engine.options.title,
    containerWidth: width
  }) : null, engine.options.subtitle ? /*#__PURE__*/React.createElement(PivotTableTitleRow, {
    title: engine.options.subtitle,
    containerWidth: width
  }) : null, (_engine$visualization = engine.visualization.filters) !== null && _engine$visualization !== void 0 && _engine$visualization.length ? /*#__PURE__*/React.createElement(PivotTableTitleRow, {
    title: engine.options.filterText || getFilterText(engine.visualization.filters, engine.rawData.metaData),
    containerWidth: width
  }) : null);
};
PivotTableTitleRows.propTypes = {
  width: PropTypes.number.isRequired
};