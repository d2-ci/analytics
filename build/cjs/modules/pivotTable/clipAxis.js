"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clipAxis = void 0;
var _times = _interopRequireDefault(require("lodash/times"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const clipAxis = _ref => {
  let {
    position,
    size,
    step,
    totalCount,
    headerCount
  } = _ref;
  // position: scroll Y position
  // size: height of table container
  // step: height of cell in px
  // totalCount: number of rows
  // headerCount: number of header rows (plus 1 for title plus 1 for subtitle)

  // height in px of all row headers section, including title and subtitle when not using
  // fixed column headers
  const floor = headerCount * step;
  // offset in px for the clipping content
  const offset = position < floor ? floor - position : 0;
  const count = Math.min(totalCount, Math.ceil((size - offset) / step) + 1);
  position = Math.max(0, position - floor);
  const start = Math.min(totalCount - count, Math.floor(position / step));
  const pre = Math.max(start * step, 0);
  const post = (totalCount - (start + count)) * step;
  const indices = (0, _times.default)(count, n => start + n);
  return {
    indices,
    pre,
    post
  };
};
exports.clipAxis = clipAxis;