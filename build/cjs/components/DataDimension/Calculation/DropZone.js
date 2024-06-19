"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _core = require("@dnd-kit/core");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _DropZoneStyle = _interopRequireDefault(require("./styles/DropZone.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DropZone = _ref => {
  let {
    firstElementId,
    overLastDropZone
  } = _ref;
  const {
    isOver,
    setNodeRef,
    active
  } = (0, _core.useDroppable)({
    id: 'firstdropzone'
  });
  let draggingOver = false;
  if (overLastDropZone && !firstElementId) {
    draggingOver = true;
  } else {
    draggingOver = firstElementId === (active === null || active === void 0 ? void 0 : active.id) ? false : isOver;
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    ref: setNodeRef,
    className: `jsx-${_DropZoneStyle.default.__hash}` + " " + ((0, _classnames.default)('first-dropzone', {
      'dragging-over': draggingOver,
      empty: !firstElementId
    }) || "")
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DropZoneStyle.default.__hash
  }, _DropZoneStyle.default));
};
DropZone.propTypes = {
  firstElementId: _propTypes.default.string,
  overLastDropZone: _propTypes.default.bool
};
var _default = exports.default = DropZone;