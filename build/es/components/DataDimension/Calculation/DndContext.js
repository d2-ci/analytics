function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { DndContext, DragOverlay, useSensor, useSensors, PointerSensor as DndKitPointerSensor } from '@dnd-kit/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DraggingItem from './DraggingItem.js';
export const OPTIONS_PANEL = 'Sortable';
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
const sortCollisionsDesc = ({
  data: {
    value: a
  }
}, {
  data: {
    value: b
  }
}) => {
  return b - a;
};
const rectIntersectionCustom = ({
  pointerCoordinates,
  droppableContainers
}) => {
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
const INTERACTIVE_SELECTOR = 'button, input, textarea, select, option';
export const isInteractiveElement = el => {
  var _el$closest;
  return Boolean(el === null || el === void 0 || (_el$closest = el.closest) === null || _el$closest === void 0 ? void 0 : _el$closest.call(el, INTERACTIVE_SELECTOR));
};

// Mirrors a click on Enter/Space, so draggable chips (which aren't
// natively clickable elements) can be activated from the keyboard.
export const onActivationKeydown = callback => e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback();
  }
};

// disable dragging if user is in an input
class PointerSensor extends DndKitPointerSensor {}
_defineProperty(PointerSensor, "activators", [{
  eventName: 'onPointerDown',
  handler: ({
    nativeEvent: event
  }) => {
    if (!event.isPrimary || event.button !== 0 || isInteractiveElement(event.target)) {
      return false;
    }
    return true;
  }
}]);
const OuterDndContext = ({
  children,
  onDragEnd,
  onDragStart
}) => {
  const [draggingItem, setDraggingItem] = useState(null);
  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 15
    }
  });
  const sensors = useSensors(sensor);
  const handleDragStart = ({
    active
  }) => {
    setDraggingItem(active.data.current);
    onDragStart && onDragStart();
  };
  const handleDragCancel = () => {
    setDraggingItem(null);
  };
  const handleDragEnd = ({
    active,
    over
  }) => {
    var _over$data, _over$data$current, _over$data$current2;
    if (!(over !== null && over !== void 0 && over.id) || (over === null || over === void 0 || (_over$data = over.data) === null || _over$data === void 0 || (_over$data = _over$data.current) === null || _over$data === void 0 || (_over$data = _over$data.sortable) === null || _over$data === void 0 ? void 0 : _over$data.containerId) === OPTIONS_PANEL || !active.data.current) {
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
      containerId: ((_over$data$current = over.data.current) === null || _over$data$current === void 0 ? void 0 : _over$data$current.sortable.containerId) || over.id,
      index: (_over$data$current2 = over.data.current) === null || _over$data$current2 === void 0 ? void 0 : _over$data$current2.sortable.index
    };
    onDragEnd({
      item,
      destination
    });
    setDraggingItem(null);
  };
  return /*#__PURE__*/React.createElement(DndContext, {
    collisionDetection: rectIntersectionCustom,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    onDragCancel: handleDragCancel,
    sensors: sensors
  }, children, /*#__PURE__*/React.createElement(DragOverlay, {
    dropAnimation: null
  }, draggingItem ? /*#__PURE__*/React.createElement("span", {
    className: "dragOverlay"
  }, /*#__PURE__*/React.createElement(DraggingItem, draggingItem)) : null));
};
OuterDndContext.propTypes = {
  onDragEnd: PropTypes.func.isRequired,
  children: PropTypes.node,
  onDragStart: PropTypes.func
};
export default OuterDndContext;