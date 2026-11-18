"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class AnalyticsResponseHeader {
  constructor(header = {}, options = {
    isPrefix: false,
    isCollect: false,
    index: undefined
  }) {
    Object.assign(this, header, options);
  }
  getIndex() {
    return this.index;
  }
  setIndex(value) {
    const index = +value;
    if (!Number.isNaN(index) && Number.isFinite(index)) {
      this.index = parseInt(index, 10);
    }
  }
}
var _default = exports.default = AnalyticsResponseHeader;