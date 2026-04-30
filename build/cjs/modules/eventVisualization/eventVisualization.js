"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformEventVisualization = void 0;
var _dimensions = require("../dimensions.js");
var _layoutGetAllDimensions = require("../layout/layoutGetAllDimensions.js");
// Dimensions saved with program or program stage in an EventVisualization need
// transformation before we can pass them to the pivot table engine

const cloneAxis = axis => axis === null || axis === void 0 ? void 0 : axis.map(dim => ({
  ...dim
}));
const transformEventVisualization = vis => {
  // Do not modify the original visualization
  const transformedVis = {
    ...vis,
    columns: cloneAxis(vis.columns),
    rows: cloneAxis(vis.rows),
    filters: cloneAxis(vis.filters)
  };
  (0, _layoutGetAllDimensions.layoutGetAllDimensions)(transformedVis).forEach(dim => {
    var _dim$program$id, _dim$program, _dim$programStage;
    const headerName = (0, _dimensions.getHeaderByVis)(dim.dimension);
    const prefix = (_dim$program$id = (_dim$program = dim.program) === null || _dim$program === void 0 ? void 0 : _dim$program.id) !== null && _dim$program$id !== void 0 ? _dim$program$id : (_dim$programStage = dim.programStage) === null || _dim$programStage === void 0 ? void 0 : _dim$programStage.id;
    dim.dimension = prefix ? `${prefix}.${headerName}` : headerName;
  });
  return transformedVis;
};
exports.transformEventVisualization = transformEventVisualization;