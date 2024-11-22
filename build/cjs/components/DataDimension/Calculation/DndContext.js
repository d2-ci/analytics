"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OPTIONS_PANEL = void 0;
var _core = require("@dnd-kit/core");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _DraggingItem = _interopRequireDefault(require("./DraggingItem.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const OPTIONS_PANEL = exports.OPTIONS_PANEL = 'Sortable';
const getIntersectionRatio = (entry, target) => {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;
  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  } // Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)

  return 0;
};
const sortCollisionsDesc = (_ref, _ref2) => {
  let {
    data: {
      value: a
    }
  } = _ref;
  let {
    data: {
      value: b
    }
  } = _ref2;
  return b - a;
};
const rectIntersectionCustom = _ref3 => {
  let {
    pointerCoordinates,
    droppableContainers
  } = _ref3;
  // create a rect around the pointerCoords for calculating the intersection

  const pointerRectWidth = 40;
  const pointerRectHeight = 40;
  const pointerRect = {
    width: pointerRectWidth,
    height: pointerRectHeight,
    top: pointerCoordinates.y - pointerRectHeight / 2,
    bottom: pointerCoordinates.y + pointerRectHeight / 2,
    left: pointerCoordinates.x - pointerRectWidth / 2,
    right: pointerCoordinates.x + pointerRectWidth / 2
  };
  const collisions = [];
  for (const droppableContainer of droppableContainers) {
    const {
      id,
      rect: {
        current: rect
      }
    } = droppableContainer;
    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, pointerRect);
      if (intersectionRatio > 0) {
        collisions.push({
          id,
          data: {
            droppableContainer,
            value: intersectionRatio
          }
        });
      }
    }
  }
  return collisions.sort(sortCollisionsDesc);
};
const isInteractiveElement = el => {
  const interactiveElements = ['button', 'input', 'textarea', 'select', 'option'];
  if (interactiveElements.includes(el.tagName.toLowerCase())) {
    return true;
  }
  return false;
};

// disable dragging if user is in an input
class PointerSensor extends _core.PointerSensor {}
_defineProperty(PointerSensor, "activators", [{
  eventName: 'onPointerDown',
  handler: _ref7 => {
    let {
      nativeEvent: event
    } = _ref7;
    if (!event.isPrimary || event.button !== 0 || isInteractiveElement(event.target)) {
      return false;
    }
    return true;
  }
}]);
const OuterDndContext = _ref4 => {
  let {
    children,
    onDragEnd,
    onDragStart
  } = _ref4;
  const [draggingItem, setDraggingItem] = (0, _react.useState)(null);
  const sensor = (0, _core.useSensor)(PointerSensor, {
    activationConstraint: {
      distance: 15
    }
  });
  const sensors = (0, _core.useSensors)(sensor);
  const handleDragStart = _ref5 => {
    let {
      active
    } = _ref5;
    setDraggingItem(active.data.current);
    onDragStart && onDragStart();
  };
  const handleDragCancel = () => {
    setDraggingItem(null);
  };
  const handleDragEnd = _ref6 => {
    var _over$data, _over$data$current, _over$data$current$so, _over$data$current2, _over$data$current3;
    let {
      active,
      over
    } = _ref6;
    if (!(over !== null && over !== void 0 && over.id) || (over === null || over === void 0 ? void 0 : (_over$data = over.data) === null || _over$data === void 0 ? void 0 : (_over$data$current = _over$data.current) === null || _over$data$current === void 0 ? void 0 : (_over$data$current$so = _over$data$current.sortable) === null || _over$data$current$so === void 0 ? void 0 : _over$data$current$so.containerId) === OPTIONS_PANEL || !active.data.current) {
      // dropped over non-droppable or over options panel
      handleDragCancel();
      return;
    }
    const item = {
      id: active.id,
      sourceContainerId: active.data.current.sortable.containerId,
      sourceIndex: active.data.current.sortable.index,
      data: {
        label: active.data.current.label,
        value: active.data.current.value,
        type: active.data.current.type
      }
    };
    const destination = {
      containerId: ((_over$data$current2 = over.data.current) === null || _over$data$current2 === void 0 ? void 0 : _over$data$current2.sortable.containerId) || over.id,
      index: (_over$data$current3 = over.data.current) === null || _over$data$current3 === void 0 ? void 0 : _over$data$current3.sortable.index
    };
    onDragEnd({
      item,
      destination
    });
    setDraggingItem(null);
  };
  return /*#__PURE__*/_react.default.createElement(_core.DndContext, {
    collisionDetection: rectIntersectionCustom,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    onDragCancel: handleDragCancel,
    sensors: sensors
  }, children, /*#__PURE__*/_react.default.createElement(_core.DragOverlay, {
    dropAnimation: null
  }, draggingItem ? /*#__PURE__*/_react.default.createElement("span", {
    className: "dragOverlay"
  }, /*#__PURE__*/_react.default.createElement(_DraggingItem.default, draggingItem)) : null));
};
OuterDndContext.propTypes = {
  onDragEnd: _propTypes.default.func.isRequired,
  children: _propTypes.default.node,
  onDragStart: _propTypes.default.func
};
var _default = exports.default = OuterDndContext;