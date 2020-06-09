"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisIsEmpty = void 0;

var axisIsEmpty = function axisIsEmpty(axis) {
  return !Boolean(axis.length);
};

exports.axisIsEmpty = axisIsEmpty;