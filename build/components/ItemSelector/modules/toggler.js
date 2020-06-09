"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggler = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var toggler = function toggler(_ref) {
  var id = _ref.id,
      isCtrlPressed = _ref.isCtrlPressed,
      isShiftPressed = _ref.isShiftPressed,
      index = _ref.index,
      lastClickedIndex = _ref.lastClickedIndex,
      highlightedIds = _ref.highlightedIds,
      items = _ref.items;
  var ids;
  var newIndex = lastClickedIndex;

  if (!isCtrlPressed && !isShiftPressed) {
    ids = [id];
    newIndex = index;
  } else if (isShiftPressed) {
    var minIndex = getMinIndex(lastClickedIndex, index);
    var maxIndex = getMaxIndex(lastClickedIndex, index);
    ids = mergeIds({
      highlightedIds: highlightedIds,
      items: items,
      minIndex: minIndex,
      maxIndex: maxIndex
    });
  } else {
    var newArr = updateArray({
      highlightedIds: highlightedIds,
      id: id,
      lastClickedIndex: lastClickedIndex,
      index: index
    });
    ids = newArr.ids;
    newIndex = newArr.newIndex;
  }

  var orderedIds = items.filter(function (item) {
    return ids.includes(item);
  });
  return {
    ids: orderedIds,
    lastClickedIndex: newIndex
  };
};

exports.toggler = toggler;

var getMinIndex = function getMinIndex(lastClickedIndex, index) {
  return lastClickedIndex > index ? index : lastClickedIndex;
};

var getMaxIndex = function getMaxIndex(lastClickedIndex, index) {
  return lastClickedIndex < index ? index : lastClickedIndex;
};

var mergeIds = function mergeIds(_ref2) {
  var highlightedIds = _ref2.highlightedIds,
      items = _ref2.items,
      minIndex = _ref2.minIndex,
      maxIndex = _ref2.maxIndex;
  return highlightedIds.length ? items.slice(minIndex, maxIndex + 1).filter(function (id) {
    return !highlightedIds.includes(id);
  }).concat(highlightedIds) : items.slice(minIndex, maxIndex + 1);
};

var updateArray = function updateArray(_ref3) {
  var highlightedIds = _ref3.highlightedIds,
      id = _ref3.id,
      lastClickedIndex = _ref3.lastClickedIndex,
      index = _ref3.index;
  var ids;
  var newIndex = lastClickedIndex;
  var idIndex = highlightedIds.findIndex(function (highlightedId) {
    return highlightedId === id;
  });

  if (idIndex >= 0) {
    ids = highlightedIds.slice(0, idIndex).concat(highlightedIds.slice(idIndex + 1));
  } else {
    ids = [].concat((0, _toConsumableArray2.default)(highlightedIds), [id]);
    newIndex = index;
  }

  return {
    ids: ids,
    newIndex: newIndex
  };
};