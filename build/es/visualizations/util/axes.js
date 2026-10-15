export const getAxis = (axes, axisType, axisIndex) => (axes === null || axes === void 0 ? void 0 : axes.find(axis => axis.type === axisType && axis.index === axisIndex)) || {
  type: axisType,
  index: axisIndex
};