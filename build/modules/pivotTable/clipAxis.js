"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clipAxis = void 0;

var _times = _interopRequireDefault(require("lodash/times"));

var clipAxis = function clipAxis(_ref) {
  var position = _ref.position,
      size = _ref.size,
      step = _ref.step,
      totalCount = _ref.totalCount,
      headerCount = _ref.headerCount;
  var floor = headerCount * step;
  var offset = position < floor ? floor - position : 0;
  var count = Math.min(totalCount, Math.ceil((size - offset) / step) + 1);
  position = Math.max(0, position - floor); // TODO: Support sticky headers

  var start = Math.min(totalCount - count, Math.floor(position / step));
  var pre = Math.max(start * step, 0);
  var post = (totalCount - (start + count)) * step;
  var indices = (0, _times.default)(count, function (n) {
    return start + n;
  });
  return {
    indices: indices,
    pre: pre,
    post: post
  };
};

exports.clipAxis = clipAxis;