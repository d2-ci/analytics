"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableTitleRow = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _PivotTableCell = require("./PivotTableCell.js");
var _PivotTableEngineContext = require("./PivotTableEngineContext.js");
var _PivotTableStyle = require("./styles/PivotTable.style.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableTitleRow = ({
  title,
  scrollPosition,
  containerWidth
}) => {
  var _scrollPosition$x;
  const containerRef = (0, _react.useRef)(null);
  const [scrollWidth, setScrollWidth] = (0, _react.useState)(0);
  const [isTitleTruncated, setIsTitleTruncated] = (0, _react.useState)(false);
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  const columnCount = engine.width + engine.rowDepth;
  const maxWidth = containerWidth - (engine.cellPadding * 2 + 2);
  const marginLeft = Math.max(0, (_scrollPosition$x = scrollPosition === null || scrollPosition === void 0 ? void 0 : scrollPosition.x) !== null && _scrollPosition$x !== void 0 ? _scrollPosition$x : 0);
  (0, _react.useEffect)(() => {
    if (containerRef.current) {
      /* Only set `scrollWidth` once, because during a CSS transition
       * the reported value can sometimes be equal to `clientWidth`
       * even though the text doesn't fit. Due to `white-space: nowrap`
       * and `overflow: hidden` the `scrollWidth` should remain constant,
       * so we can assume this initial value is correct. */
      if (!scrollWidth) {
        setScrollWidth(containerRef.current.scrollWidth);
      }
      const currentScrollWidth = scrollWidth !== null && scrollWidth !== void 0 ? scrollWidth : containerRef.current.scrollWidth;
      const newIsTitleTruncated = currentScrollWidth > containerRef.current.clientWidth;
      if (newIsTitleTruncated !== isTitleTruncated) {
        setIsTitleTruncated(newIsTitleTruncated);
      }
    }
  }, [containerWidth, scrollWidth, isTitleTruncated]);
  return /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_PivotTableStyle.cell.__hash}`
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTableStyle.cell.__hash
  }, _PivotTableStyle.cell), /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
    isHeader: true,
    classes: ['column-header', 'title-cell'],
    colSpan: columnCount
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginLeft,
      maxWidth
    },
    ref: containerRef,
    "data-test": "visualization-title",
    className: `jsx-${_PivotTableStyle.cell.__hash}` + " " + "title-cell-content"
  }, isTitleTruncated ? /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
    content: title
  }, ({
    ref: tooltipRef,
    onMouseOver,
    onMouseOut
  }) => /*#__PURE__*/_react.default.createElement("div", {
    ref: tooltipRef,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    style: {
      maxWidth
    },
    className: `jsx-${_PivotTableStyle.cell.__hash}` + " " + "title-cell-content"
  }, title)) : title)));
};
exports.PivotTableTitleRow = PivotTableTitleRow;
PivotTableTitleRow.propTypes = {
  containerWidth: _propTypes.default.number.isRequired,
  scrollPosition: _propTypes.default.shape({
    x: _propTypes.default.number.isRequired
  }).isRequired,
  title: _propTypes.default.string.isRequired
};