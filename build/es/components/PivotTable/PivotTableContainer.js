import _JSXStyle from "styled-jsx/style";
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
import { table as tableStyle } from './styles/PivotTable.style.js';
export const PivotTableContainer = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    width,
    height,
    children
  } = _ref;
  const engine = usePivotTableEngine();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height
    },
    ref: ref,
    "data-test": "visualization-container",
    className: `jsx-${tableStyle.__hash}` + " " + "pivot-table-container"
  }, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: tableStyle.__hash
  }, tableStyle), width === 0 || height === 0 ? null : /*#__PURE__*/React.createElement("table", {
    className: `jsx-${tableStyle.__hash}` + " " + (classnames({
      'fixed-headers': engine.options.fixColumnHeaders && engine.options.fixRowHeaders,
      'fixed-column-headers': engine.options.fixColumnHeaders && !engine.options.fixRowHeaders,
      'fixed-row-headers': engine.options.fixRowHeaders && !engine.options.fixColumnHeaders
    }) || "")
  }, children));
});
PivotTableContainer.displayName = 'PivotTableContainer';
PivotTableContainer.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};