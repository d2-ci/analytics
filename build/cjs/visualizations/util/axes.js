"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAxis = void 0;

const getAxis = (axes, axisType, axisIndex) => (axes === null || axes === void 0 ? void 0 : axes.find(axis => axis.type === axisType && axis.index === axisIndex)) || {
  type: axisType,
  index: axisIndex
};

exports.getAxis = getAxis;