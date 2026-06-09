import { getHeaderByVis } from '../dimensions.js';
import { layoutGetAllDimensions } from '../layout/layoutGetAllDimensions.js';

// Dimensions saved with program or program stage in an EventVisualization need
// transformation before we can pass them to the pivot table engine

const cloneAxis = axis => axis === null || axis === void 0 ? void 0 : axis.map(dim => ({
  ...dim
}));
export const transformEventVisualization = vis => {
  // Do not modify the original visualization
  const transformedVis = {
    ...vis,
    columns: cloneAxis(vis.columns),
    rows: cloneAxis(vis.rows),
    filters: cloneAxis(vis.filters)
  };
  layoutGetAllDimensions(transformedVis).forEach(dim => {
    var _dim$program$id, _dim$program, _dim$programStage;
    const headerName = getHeaderByVis(dim.dimension);
    const prefix = (_dim$program$id = (_dim$program = dim.program) === null || _dim$program === void 0 ? void 0 : _dim$program.id) !== null && _dim$program$id !== void 0 ? _dim$program$id : (_dim$programStage = dim.programStage) === null || _dim$programStage === void 0 ? void 0 : _dim$programStage.id;
    dim.dimension = prefix ? `${prefix}.${headerName}` : headerName;
  });
  return transformedVis;
};