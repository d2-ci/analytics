"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _dataTypes = require("../../../modules/dataTypes.js");
var _dimensionListItem = require("../../../modules/dimensionListItem.js");
var _expressions = require("../../../modules/expressions.js");
var _DragHandleIcon = _interopRequireDefault(require("./DragHandleIcon.js"));
var _FormulaItemStyle = _interopRequireDefault(require("./styles/FormulaItem.style.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BEFORE = 'BEFORE';
const AFTER = 'AFTER';
const maxMsBetweenClicks = 300;
const TAG_INPUT = 'INPUT';
const FormulaItem = _ref => {
  let {
    id,
    label,
    value = '',
    type,
    isLast,
    isHighlighted,
    overLastDropZone,
    onChange,
    onClick,
    onDoubleClick,
    hasFocus
  } = _ref;
  const {
    attributes,
    listeners,
    index,
    isDragging,
    over,
    active,
    setNodeRef,
    transform,
    transition
  } = (0, _sortable.useSortable)({
    id,
    data: {
      label,
      type,
      value
    }
  });
  const inputRef = (0, _react.useRef)(null);
  const [clickTimeoutId, setClickTimeoutId] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    if (hasFocus && inputRef.current) {
      // setTimeout seems to be needed in order for the cursor
      // to remain in the input. Without it, the cursor disappears
      // even though the input still has the focus.
      setTimeout(() => {
        inputRef.current.focus();
      }, 50);
    }
  }, [inputRef, hasFocus]);
  const activeIndex = (active === null || active === void 0 ? void 0 : active.data.current.sortable.index) || -1;
  const style = transform ? {
    transform: active ? undefined : _utilities.CSS.Translate.toString({
      x: transform.x,
      y: transform.y,
      scaleX: 1,
      scaleY: 1
    }),
    transition
  } : undefined;
  let insertPosition;
  if ((over === null || over === void 0 ? void 0 : over.id) === id) {
    // This item is being hovered over by the item being dragged
    if (activeIndex === -1) {
      //The item being dragged came from the expression options
      // so we will insert after
      insertPosition = AFTER;
    } else {
      // The item being dragged is being moved in the formula
      // so if the item is before the item being dragged, use the
      // BEFORE position. Otherwise use the AFTER position
      insertPosition = index > activeIndex ? AFTER : BEFORE;
    }
  } else if (isLast && overLastDropZone) {
    insertPosition = AFTER;
  }
  const handleClick = e => {
    const tagname = e.target.tagName;
    clearTimeout(clickTimeoutId);
    const to = setTimeout(function () {
      if (tagname !== TAG_INPUT) {
        onClick(id);
      } else {
        inputRef.current && inputRef.current.focus();
      }
    }, maxMsBetweenClicks);
    setClickTimeoutId(to);
  };
  const handleDoubleClick = e => {
    clearTimeout(clickTimeoutId);
    setClickTimeoutId(null);
    if (e.target.tagName !== TAG_INPUT) {
      onDoubleClick(id);
    } else {
      inputRef.current && inputRef.current.focus();
    }
  };
  const handleChange = e => onChange({
    itemId: id,
    value: e.target.value
  });
  const getContent = () => {
    if (type === _expressions.EXPRESSION_TYPE_NUMBER) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + ((0, _classnames.default)('content', 'number', {
          highlighted: isHighlighted
        }) || "")
      }, _DragHandleIcon.default, /*#__PURE__*/_react.default.createElement("span", {
        className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + "number-positioner"
      }, /*#__PURE__*/_react.default.createElement("span", {
        "aria-hidden": "true",
        className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + "number-width"
      }, value), /*#__PURE__*/_react.default.createElement("input", {
        id: id,
        name: label,
        onChange: handleChange,
        value: value,
        type: "number",
        ref: inputRef,
        className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + "input"
      })), /*#__PURE__*/_react.default.createElement(_style.default, {
        id: _FormulaItemStyle.default.__hash
      }, _FormulaItemStyle.default));
    }
    if (type === _expressions.EXPRESSION_TYPE_DATA) {
      return /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
        content: label,
        placement: "bottom"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + ((0, _classnames.default)('content', 'data', {
          highlighted: isHighlighted
        }) || "")
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + "icon"
      }, (0, _dimensionListItem.getIcon)(_dataTypes.DIMENSION_TYPE_DATA_ELEMENT)), /*#__PURE__*/_react.default.createElement("span", {
        className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + "label"
      }, label), /*#__PURE__*/_react.default.createElement(_style.default, {
        id: _FormulaItemStyle.default.__hash
      }, _FormulaItemStyle.default)));
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + ((0, _classnames.default)('content', 'operator', {
        highlighted: isHighlighted
      }) || "")
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + "label"
    }, label), /*#__PURE__*/_react.default.createElement(_style.default, {
      id: _FormulaItemStyle.default.__hash
    }, _FormulaItemStyle.default));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: setNodeRef,
    style: style,
    className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + ((0, _classnames.default)({
      'last-item': isLast
    }) || "")
  }, /*#__PURE__*/_react.default.createElement("div", _extends({}, attributes, listeners, {
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    "data-test": `formula-item-${id}`,
    className: `jsx-${_FormulaItemStyle.default.__hash}` + " " + ((0, _classnames.default)('formula-item', {
      inactive: !isDragging,
      insertBefore: insertPosition === BEFORE,
      insertAfter: insertPosition === AFTER
    }) || "")
  }), getContent())), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _FormulaItemStyle.default.__hash
  }, _FormulaItemStyle.default));
};
FormulaItem.propTypes = {
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onClick: _propTypes.default.func.isRequired,
  onDoubleClick: _propTypes.default.func.isRequired,
  hasFocus: _propTypes.default.bool,
  isHighlighted: _propTypes.default.bool,
  isLast: _propTypes.default.bool,
  overLastDropZone: _propTypes.default.bool,
  value: _propTypes.default.string
};
var _default = exports.default = FormulaItem;