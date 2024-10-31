"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LAST_DROPZONE_ID = exports.FORMULA_BOX_ID = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _core = require("@dnd-kit/core");
var _sortable = require("@dnd-kit/sortable");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _FormulaIcon = _interopRequireDefault(require("../../../assets/FormulaIcon.js"));
var _DropZone = _interopRequireDefault(require("./DropZone.js"));
var _FormulaItem = _interopRequireDefault(require("./FormulaItem.js"));
var _FormulaFieldStyle = _interopRequireDefault(require("./styles/FormulaField.style.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LAST_DROPZONE_ID = 'lastdropzone';
exports.LAST_DROPZONE_ID = LAST_DROPZONE_ID;
const FORMULA_BOX_ID = 'formulabox';
exports.FORMULA_BOX_ID = FORMULA_BOX_ID;
const Placeholder = () => /*#__PURE__*/_react.default.createElement("div", {
  "data-test": "placeholder",
  className: `jsx-${_FormulaFieldStyle.default.__hash}` + " " + "placeholder"
}, /*#__PURE__*/_react.default.createElement(_FormulaIcon.default, null), /*#__PURE__*/_react.default.createElement("span", {
  className: `jsx-${_FormulaFieldStyle.default.__hash}` + " " + "help-text"
}, _d2I18n.default.t('Drag items here, or double click in the list, to start building a calculation formula')), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _FormulaFieldStyle.default.__hash
}, _FormulaFieldStyle.default));
const FormulaField = _ref => {
  let {
    items = [],
    selectedItemId,
    focusItemId,
    onChange,
    onClick,
    onDoubleClick,
    loading
  } = _ref;
  const {
    over,
    setNodeRef: setLastDropzoneRef
  } = (0, _core.useDroppable)({
    id: LAST_DROPZONE_ID
  });
  const itemIds = items.map(item => item.id);
  const overLastDropZone = (over === null || over === void 0 ? void 0 : over.id) === LAST_DROPZONE_ID;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_FormulaFieldStyle.default.__hash}` + " " + "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_FormulaFieldStyle.default.__hash}` + " " + "border"
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: setLastDropzoneRef,
    "data-test": "formula-field",
    className: `jsx-${_FormulaFieldStyle.default.__hash}` + " " + "formula-field"
  }, loading && /*#__PURE__*/_react.default.createElement(_ui.Center, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, {
    small: true
  })), !loading && itemIds && /*#__PURE__*/_react.default.createElement(_sortable.SortableContext, {
    id: FORMULA_BOX_ID,
    items: itemIds
  }, /*#__PURE__*/_react.default.createElement(_DropZone.default, {
    firstElementId: itemIds[0],
    overLastDropZone: overLastDropZone
  }), !items.length && /*#__PURE__*/_react.default.createElement(Placeholder, null), Boolean(items.length) && items.map((_ref2, index) => {
    let {
      id,
      label,
      type,
      value
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_FormulaItem.default, {
      key: id,
      id: id,
      label: label,
      type: type,
      value: value,
      hasFocus: focusItemId === id,
      isHighlighted: selectedItemId === id,
      isLast: index === items.length - 1,
      onChange: onChange,
      onClick: onClick,
      onDoubleClick: onDoubleClick,
      overLastDropZone: overLastDropZone
    });
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _FormulaFieldStyle.default.__hash
  }, _FormulaFieldStyle.default));
};
FormulaField.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  onClick: _propTypes.default.func.isRequired,
  onDoubleClick: _propTypes.default.func.isRequired,
  focusItemId: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    label: _propTypes.default.string,
    type: _propTypes.default.string,
    value: _propTypes.default.string
  })),
  loading: _propTypes.default.bool,
  selectedItemId: _propTypes.default.string
};
var _default = FormulaField;
exports.default = _default;