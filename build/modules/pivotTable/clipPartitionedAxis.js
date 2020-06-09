"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clipPartitionedAxis = void 0;

var clipPartitionedAxis = function clipPartitionedAxis(_ref) {
  var partitionSize = _ref.partitionSize,
      partitions = _ref.partitions,
      axisMap = _ref.axisMap,
      widthMap = _ref.widthMap,
      viewportWidth = _ref.viewportWidth,
      viewportPosition = _ref.viewportPosition,
      totalWidth = _ref.totalWidth;
  var partition = Math.floor(viewportPosition / partitionSize);

  if (partitions[partition] === undefined) {
    return {
      indices: [0],
      pre: 0,
      post: 0
    };
  }

  var start = partitions[partition];

  while (start < axisMap.length && widthMap[axisMap[start]].pre < viewportPosition) {
    ++start;
  }

  start = start === 0 ? start : start - 1;
  var pre = widthMap[axisMap[start]].pre;
  var indices = [];
  var end = start;

  while (end < axisMap.length && widthMap[axisMap[end]].pre < viewportPosition + viewportWidth) {
    indices.push(end);
    ++end;
  }

  end = end === 0 ? end : end - 1;
  var post = totalWidth - (widthMap[axisMap[end]].pre + widthMap[axisMap[end]].width);
  return {
    indices: indices,
    pre: pre,
    post: post
  };
};

exports.clipPartitionedAxis = clipPartitionedAxis;