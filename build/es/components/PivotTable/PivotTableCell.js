import _JSXStyle from "styled-jsx/style";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { usePivotTableEngine } from './PivotTableEngineContext.js';
import { cell as cellStyle } from './styles/PivotTable.style.js';
export const PivotTableCell = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    classes,
    isHeader,
    children,
    dataTest,
    style = {},
    ...props
  } = _ref;
  const engine = usePivotTableEngine();
  style.width = style.minWidth = style.maxWidth = style.width;
  style.height = style.minHeight = style.maxHeight = style.height || engine.fontSize + engine.cellPadding * 2 + 2;
  const className = classnames(classes, `fontsize-${engine.visualization.fontSize}`, `displaydensity-${engine.visualization.displayDensity}`);
  return isHeader ? /*#__PURE__*/React.createElement("th", _extends({
    style: style,
    "data-test": dataTest
  }, props, {
    className: `jsx-${cellStyle.__hash}` + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: cellStyle.__hash
  }, cellStyle), children) : /*#__PURE__*/React.createElement("td", _extends({
    ref: ref,
    style: style,
    "data-test": dataTest
  }, props, {
    className: `jsx-${cellStyle.__hash}` + " " + (props && props.className != null && props.className || className || "")
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: cellStyle.__hash
  }, cellStyle), children);
});
PivotTableCell.displayName = 'PivotTableCell';
PivotTableCell.defaultProps = {
  isHeader: false
};
PivotTableCell.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  dataTest: PropTypes.string,
  isHeader: PropTypes.bool,
  style: PropTypes.object
};