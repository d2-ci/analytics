"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OPTIONS_PANEL = void 0;
var _core = require("@dnd-kit/core");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _DraggingItem = _interopRequireDefault(require("./DraggingItem.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const OPTIONS_PANEL = 'Sortable';
exports.OPTIONS_PANEL = OPTIONS_PANEL;
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
var _default = OuterDndContext;
exports.default = _default;